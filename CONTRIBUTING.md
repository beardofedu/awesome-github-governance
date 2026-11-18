# Contributing

Use the [issue forms](https://github.com/beardofedu/awesome-github-governance/issues/new/choose)
for corrections, coverage requests, or site bugs. Cite official GitHub Docs or
changelog entries for changes to product behavior. State which plan, GHEC
identity model, or GHES version the guidance applies to and whether the control
was actually verified. Update a chapter's `last_reviewed` only after reviewing
it, and link changed chapters from `docs/CHANGELOG.md`. Never use production
secrets, personal data, or customer data in examples or test reports.

## Validate locally

```shell
jekyll build --source docs --destination _site
python3 -m json.tool _site/search.json > /dev/null
python3 -m unittest discover -s test-suite/checks -p 'test_*.py'
python3 .github/scripts/check_section_freshness.py
python3 -m pip install -r .github/requirements-ci.txt
check-jsonschema --schemafile docs/_data/github-events.schema.json docs/_data/github-events.json
check-jsonschema --schemafile docs/_data/governance-watch-state.schema.json docs/_data/governance-watch-state.json
```

For browser tests, run `npm ci` and `npx playwright install chromium`. Serve
`_site` at `/awesome-github-governance/` on port 4173 (copy it into a directory
named `awesome-github-governance` under your server root), then run
`npm run test:site` and `npm run test:a11y`. The PR workflow also runs the
generated-site build, source link checks, actionlint, and zizmor.

## Repository setup and operation

1. In **Settings → Pages**, select **GitHub Actions**. The first production
   deployment happens after the Pages workflow lands on `main` and runs;
   configuring the source does not publish a site by itself.
2. Leave the repository's default Actions token permissions read-only.
   The workflows request writes per job only where needed. Keep repository
   auto-merge off. The `protect-main` ruleset mirrors the source in **disabled**
   mode; approval, CodeQL, and Copilot review settings in that ruleset are
   not enforced. These CI jobs do not enforce merge protections by themselves.
3. Configure `COPILOT_GITHUB_TOKEN` as a repository Actions secret for the
   personal-repository inference path: use an eligible Copilot account and a
   fine-grained PAT with **Copilot Requests: read**. For the remote GitHub
   MCP tools use `GH_AW_GITHUB_MCP_SERVER_TOKEN`, a separate current-repository
   credential with read-only Contents, Issues, and Pull requests access.
   See [gh-aw authentication](https://github.github.com/gh-aw/reference/auth/).
4. Configure `GH_AW_GITHUB_TOKEN` with a separate, repository-scoped
   fine-grained PAT with **Contents: write** and **Pull requests: write**
   so proposed PRs can trigger normal PR CI. Keep it separate from the
   agent's read-only MCP credential. The built-in token fallback requires
   allowing Actions to create PRs, and ordinarily will not trigger regular PR
   CI without maintainer approval; do not broaden the repository-wide setting
   simply to enable the fallback. See [triggering CI from safe outputs](https://github.github.com/gh-aw/reference/triggering-ci/).
   Set tokens through GitHub Actions secrets, not through commits, issues, or
   chat. Create the `automation` and `github-governance` labels if missing.
5. After merge and credential setup, manually dispatch **GitHub Governance
   Watch** on `main` and check its conclusion, review coverage, and any
   proposed PR. Confirm the normal quality workflows run on that PR. No CI
   compile test demonstrates that inference or writes are configured live.

The watch attempts daily review at 08:34 UTC. Other hourly ticks only run the
agent during a confirmed, inclusive UTC event window in `github-events.json`.
An unannounced event has two null dates. Per-source coverage starts unset and
must describe actual complete retrieval; publishing the initial guide is not a
historical watch review. The weekly quality workflow checks section freshness
against a 90-day window and tracks stale sections in one reminder issue.

When editing the watch definition, run `gh aw compile --no-check-update` with
the version pinned in `quality-checks.yml` and commit the generated workflow
and action lock. Do not edit the generated workflow by hand. The maintenance
and cleanup workflows originate in the sister repo; they manage generated
workflow maintenance, no-op reports, and merged branches, not automatic
content merges.
