const assert = require("node:assert/strict");
const { chromium } = require("playwright");

const baseUrl = "http://127.0.0.1:4173/awesome-github-governance";

async function main() {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.route("https://api.github.com/**", route => route.fulfill({ json: [] }));
    const response = await page.goto(`${baseUrl}/`);
    assert.ok(response?.ok(), "The overview builds under the Pages base path");
    assert.ok(await page.locator(".cards li").count() >= 9, "The overview lists the guide chapters");

    const menu = page.getByRole("button", { name: "Menu" });
    await menu.click();
    assert.equal(await menu.getAttribute("aria-expanded"), "true");
    const sidebar = page.getByRole("navigation", { name: "Guide sections" });
    await sidebar.locator("a[href$='/sections/actions-policy/']").click();
    await page.waitForURL("**/sections/actions-policy/");
    assert.match(await page.title(), /Actions/i);

    await page.getByRole("button", { name: /Search controls/ }).click();
    const search = page.getByRole("dialog");
    await search.locator("input").fill("Secret Protection");
    const result = search.locator("a[href*='/sections/advanced-security/']").first();
    await result.click();
    await page.waitForURL(url => url.pathname.endsWith("/sections/advanced-security/"));
    assert.match(await page.title(), /Security/i);

    const request = await page.request.get(`${baseUrl}/search.json`);
    assert.ok(request.ok(), "The search payload is available at the published base path");
    const index = await request.json();
    for (const entry of index) {
      assert.ok(entry.url.startsWith("/awesome-github-governance/"));
      assert.ok((await page.request.get(new URL(entry.url, baseUrl).href)).ok(), entry.url);
    }
    console.log(`Site navigation and search passed for ${index.length} indexed pages.`);
  } finally {
    await browser.close();
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
