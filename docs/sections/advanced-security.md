---
title: "Code Security and Secret Protection"
nav_order: 7
description: "Deploy code scanning, dependency risk controls, secret detection, and remediation ownership."
permalink: /sections/advanced-security/
last_reviewed: 2026-11-18
---

# GitHub Advanced Security: Code Security and Secret Protection

GitHub's product naming and entitlements have evolved: **GitHub Code Security** and **GitHub Secret Protection** package capabilities that were previously described under GitHub Advanced Security. Do not infer availability from an old GHAS label or from a feature appearing in public repositories. Confirm the enterprise plan, repository visibility, license or trial, and product surface for each deployment. Use the current [GitHub Advanced Security overview](https://docs.github.com/en/enterprise-cloud@latest/get-started/learning-about-github/about-github-advanced-security) and [GitHub security features matrix](https://docs.github.com/en/enterprise-cloud@latest/code-security/getting-started/github-security-features).

On GitHub.com, some capabilities are available to public repositories for free.
GitHub Team and GitHub Enterprise Cloud can purchase the relevant product for
eligible private or internal repositories; an existing Advanced Security
license may cover both products. On GHES, confirm your instance license and
the [availability matrix for the installed release](https://docs.github.com/en/enterprise-server@3.22/code-security/getting-started/github-security-features);
public GitHub.com availability is not a GHES entitlement.

## Code and dependency risk

- **Code scanning:** choose supported analysis methods and languages, set a rollout policy, triage findings, and identify the team responsible for remediation. Make scan failures and alert severity part of a defined response process rather than enabling a feature without ownership.
- **Dependency visibility:** enable dependency graph and related alerts where supported. Assign owners to dependency alerts and define service-level targets for critical updates.
- **Dependency review:** review dependency changes in pull requests to identify vulnerable or policy-disallowed changes before merge. Test repository and plan prerequisites and avoid presenting the review as a substitute for lockfile and build integrity.
- **Configuration at scale:** use organization or enterprise security configurations to define and monitor coverage where available. Pilot with representative repositories, then measure coverage and configuration drift.

GitHub provides a [custom enterprise security configuration guide](https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/create-custom-configuration). Configuration options and feature availability differ by deployment.

## Secret Protection

- Enable secret scanning and push protection only after confirming the applicable product entitlement and repository scope.
- Establish an owner and response workflow for each detected secret type; prioritize revocation/rotation and downstream impact analysis rather than merely dismissing alerts.
- Document approved bypass conditions, who may approve them, and how bypasses are reviewed. Keep the exception process narrow and auditable.
- Use synthetic test strings or the product's documented test mechanisms to validate detection and push protection. Never commit a real secret to test a scanner.

See GitHub's [push protection setup guidance](https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-your-secrets/prevent-future-leaks/enable-push-protection) and [enterprise security enablement docs](https://docs.github.com/en/enterprise-server@3.22/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/enabling-github-advanced-security-for-your-enterprise).

## Rollout and measurement

1. Identify licensed and eligible repositories; group them by criticality, language, and owner.
2. Pilot code scanning, dependency checks, and secret controls in representative repositories.
3. Confirm alert routing, triage ownership, remediation expectations, and exception handling.
4. Expand in cohorts and report both **coverage** (eligible repositories with controls configured) and **response** (alerts triaged and remediated within target).
5. Review missed repositories, disabled controls, dismissed alerts, and policy exceptions routinely.

In a disposable repository, use harmless sample code and documented synthetic secret tests to validate that expected alerts appear and a push is blocked or reported according to the configured mode. Also confirm that an approved test bypass is recorded and that production repositories remain unaffected. Do not plant credentials or reproduce an exploit.
