---
title: "Overview"
permalink: /
---

<section class="hero">
  <div class="hero-copy">
    <p class="eyebrow">Practical GitHub Enterprise governance</p>
    <h1>Govern the GitHub platform.<br><span>Make controls verifiable.</span></h1>
    <p class="hero-lede">Set policy at the right level, isolate workflow execution and credentials, and build a security program developers can operate.</p>
    <div class="hero-actions">
      <a class="button button-primary" href="{{ '/sections/platform-model/' | relative_url }}">Start with the platform model <span aria-hidden="true">→</span></a>
      <a class="button" href="{{ '/changelog/' | relative_url }}">Read the changelog <span aria-hidden="true">→</span></a>
    </div>
  </div>
  <aside class="control-map" aria-label="Governance control map">
    <div class="control-map-bar"><span class="terminal-dots" aria-hidden="true"><i></i><i></i><i></i></span> governance / control-map</div>
    <p class="control-map-comment">// Find the team that owns the control.</p>
    <ol>
      <li><a href="{{ '/sections/enterprise-policies/' | relative_url }}"><span>01</span>Enterprise, organization, and repository policy <b aria-hidden="true">→</b></a></li>
      <li><a href="{{ '/sections/identity-access/' | relative_url }}"><span>02</span>Identity and access <b aria-hidden="true">→</b></a></li>
      <li><a href="{{ '/sections/actions-policy/' | relative_url }}"><span>03</span>GitHub Actions <b aria-hidden="true">→</b></a></li>
      <li><a href="{{ '/sections/advanced-security/' | relative_url }}"><span>04</span>Advanced Security <b aria-hidden="true">→</b></a></li>
      <li><a href="{{ '/sections/audit-visibility/' | relative_url }}"><span>05</span>Audit and visibility <b aria-hidden="true">→</b></a></li>
    </ol>
  </aside>
</section>

## Where to start

| If you own… | Start here | Bring back |
|---|---|---|
| An enterprise | [Platform model]({{ '/sections/platform-model/' | relative_url }}) and [identity]({{ '/sections/identity-access/' | relative_url }}) | A deployment and identity decision, policy owners, and a tested recovery path |
| An organization or a repo fleet | [Enterprise policies]({{ '/sections/enterprise-policies/' | relative_url }}) and [Advanced Security]({{ '/sections/advanced-security/' | relative_url }}) | A control baseline, a pilot, and exception owners |
| CI/CD or cloud trust | [Actions policy]({{ '/sections/actions-policy/' | relative_url }}) and [credentials]({{ '/sections/actions-credentials/' | relative_url }}) | A runner trust boundary and evidence that deployment access is scoped |
| Assurance or incident response | [Audit and visibility]({{ '/sections/audit-visibility/' | relative_url }}) | Evidence of effective controls and a plan for visibility gaps |

This is independent guidance, not a feature or compliance guarantee. Verify
licensing, deployment type, and your installed GitHub Enterprise Server release
before applying any control.

## Sections

<ul class="cards">
{% assign sections = site.pages | where_exp: "p", "p.nav_order" | sort: "nav_order" %}
{% for s in sections %}
  <li><a href="{{ s.url | relative_url }}"><span class="card-index">{{ s.nav_order | prepend: '0' | slice: -2, 2 }}</span><strong>{{ s.title | strip_html }}</strong><small>Read section <span aria-hidden="true">→</span></small></a></li>
{% endfor %}
</ul>

## How this guide stays current

Governance Watch, built with [GitHub Agentic Workflows](https://github.com/github/gh-aw),
is configured to review official GitHub sources daily, plus hourly during
confirmed events. Proposed changes go through pull requests and human review.
