---
title: "Platform model and plan boundaries"
nav_order: 1
description: "Choose an enterprise control plane and define who governs the GitHub platform."
permalink: /sections/platform-model/
last_reviewed: 2026-11-18
---

# Platform model and plan boundaries

Enterprise governance starts with a clear boundary between the **enterprise**, its **organizations**, and the **repositories** they contain. The enterprise is the place for cross-organization administration and enterprise policies; organization owners manage organization membership and settings; repository administrators operate within those inherited limits. Set named owners and escalation paths at each level instead of treating every setting as an enterprise-wide switch. See GitHub's [enterprise accounts](https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/enterprise-fundamentals/enterprise-accounts) and [governance framework](https://docs.github.com/en/enterprise-cloud@latest/admin/overview/establishing-a-governance-framework-for-your-enterprise).

## Decide the deployment and plan first

| Environment | Governance considerations |
| --- | --- |
| GitHub Enterprise Cloud (GHEC) | Hosted GitHub service with enterprise administration. Confirm the specific enterprise plan and whether it uses Enterprise Managed Users (EMU); identity and security capabilities can depend on that choice. |
| GitHub Enterprise Server (GHES) | Customer-operated deployment. Features and administration depend on the installed GHES release and its configuration. Check documentation for that exact version, plus operational ownership for upgrades, backups, networking, and availability. |
| GitHub.com organization without Enterprise | Organization-level controls only. Do not design a control that assumes an enterprise account or enterprise policy is present. |

GitHub documents combined Enterprise Cloud and Server use, but shared enterprise billing does not make the products operationally identical. Compare [Enterprise Cloud](https://docs.github.com/en/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud), [enterprise accounts](https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/enterprise-fundamentals/enterprise-accounts), and [combined Cloud and Server use](https://docs.github.com/en/enterprise-server@3.22/billing/concepts/enterprise-billing/combined-enterprise-use). These references were reviewed on **2026-11-18**; the GHES links in this guide target **3.22**. For a different installed release, use its versioned docs and validate feature parity before adopting a control.

## Establish a control plane

1. **Inventory the estate.** Record each enterprise, organization, repository, visibility, owner, deployment, plan, identity mode, and critical workload. Identify standalone organizations and GHES instances that are outside enterprise policy inheritance.
2. **Assign accountable roles.** Name platform/enterprise owners, organization owners, security responders, identity administrators, and service owners. Keep routine repository administration separate from enterprise policy administration.
3. **Choose central baselines.** Decide which controls must be enforced at enterprise level (for example repository governance or Actions policy) and which can be delegated. Enterprise policies may be enforced, inherited, or left to organizations depending on the setting; verify the documented behavior for each setting instead of assuming one inheritance model. See [enterprise policies](https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/security-and-compliance/enterprise-policies).
4. **Create supported exceptions.** Every exception should identify its owner, affected repositories, reason, compensating controls, approver, review date, and expiry. Prefer a scoped exception over weakening a platform-wide baseline.
5. **Keep a capability matrix.** For every desired control, record deployment, plan/feature prerequisites, configuration scope, enforcement behavior, evidence source, and fallback for unsupported versions.

## Governance decision record

For each platform decision, record:

- **Outcome and scope:** which enterprise, organization, repositories, teams, or workloads are covered.
- **Control owner:** who configures it and who responds when it fails.
- **Enforcement:** required baseline, recommendation, or time-limited exception.
- **Dependencies:** identity provider, license, GHES version, runner network, or external system.
- **Evidence:** policy state, ruleset status, audit event/stream, or a tested sample.
- **Change and recovery:** rollout cohort, rollback condition, and how to restore access safely.

## Validate boundaries

Use a non-production organization or disposable repository and a test identity. Confirm that an organization cannot weaken a policy that is meant to be enforced, that permitted delegation still works, and that unsupported controls are explicitly visible in the capability matrix. Do not use production access or credentials to test policy boundaries.
