---
title: "Enterprise and repository policies"
nav_order: 2
description: "Set enforceable organization and repository guardrails without blocking legitimate work."
permalink: /sections/enterprise-policies/
last_reviewed: 2026-11-18
---

# Enterprise and repository policies

Treat enterprise policies as guardrails over organization choices, not as a substitute for repository-level ownership. GitHub's [enterprise policy model](https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/security-and-compliance/enterprise-policies) explains where a policy is enforced or can be configured lower in the hierarchy. Check the behavior of each individual policy in the current GHEC or installed GHES documentation.

## Set a repository baseline

Decide and document these defaults before broad enforcement:

- **Repository creation:** who may create repositories, in which organizations, and how new repositories receive an owner and classification.
- **Visibility:** whether private/internal/public repositories are permitted; define approval and review for any public exposure. Verify the supported visibility options for the deployment.
- **Forks:** allow only where needed, determine who can fork private repositories, and specify how organization and enterprise policy limits apply.
- **Outside collaborators:** identify who approves external access, what duration is allowed, and how access is reviewed and removed.
- **Default permissions:** give teams and repository roles only the access they need; review inherited base permissions and avoid broad write/admin grants.
- **Rulesets and protected branches:** require the appropriate reviews, status checks, and restrictions for protected branches and tags. Use rulesets where centrally managed rules and visibility into enforcement fit the need.
- **Repository transfer and deletion:** constrain who can move or delete a repository and retain an accountable owner for each critical repository.

GitHub documents enterprise controls for [repository management](https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise), [repository governance](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-repositories-in-your-enterprise/governing-how-people-use-repositories-in-your-enterprise), and [code-governance rulesets](https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/managing-policies-for-code-governance).

## Enforce safely

1. **Inventory and classify** repositories by data sensitivity, production impact, and owner. Resolve orphaned or ownerless repositories before tightening access.
2. **Preview scope.** Identify repositories and organizations affected by each policy; record any existing exceptions or conflicting settings.
3. **Test policy behavior** in a representative non-production organization, including an organization administrator and repository administrator trying both permitted and prohibited actions.
4. **Roll out in cohorts.** Start with a low-risk cohort, communicate the expected change, and monitor blocked actions and support requests.
5. **Review exceptions and drift.** Give each exception an accountable owner and expiry. Periodically compare current settings with the desired baseline and follow up on repositories that are out of policy.

## Negative validation

In a disposable organization/repository, verify that:

- a repository creator cannot select a disallowed visibility;
- an organization cannot relax a setting that is explicitly enforced at enterprise scope;
- an unapproved actor cannot add an outside collaborator or bypass repository creation controls;
- a protected branch rejects a change that fails the configured rule, while an approved change path still succeeds.

Use synthetic test data only. Do not create a public repository containing confidential material or attempt to bypass a live enterprise policy.

GHES repository policy behavior can differ by release; consult the [GHES 3.22 repository-policy documentation](https://docs.github.com/en/enterprise-server@3.22/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise) or the docs for the installed release.
