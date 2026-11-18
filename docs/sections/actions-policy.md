---
title: "GitHub Actions policy"
nav_order: 4
description: "Control which workflows may run and set safe defaults for workflow permissions."
permalink: /sections/actions-policy/
last_reviewed: 2026-11-18
---

# GitHub Actions policy

Treat a workflow as executable code that can access repository contents, tokens, artifacts, and connected systems. Set a platform-wide minimum policy, allow trusted exceptions explicitly, and test the resulting boundary before enabling it broadly. GitHub's [enterprise Actions policy guide](https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise) and [Actions policy concepts](https://docs.github.com/en/enterprise-cloud@latest/actions/concepts/about-actions-policies) describe the available controls.

## Restrict workflow sources

- Decide whether to permit all actions, local actions, or only an approved set of actions and reusable workflows.
- Prefer immutable full-length commit SHA references for third-party actions where supported by your review process. Keep a recorded upstream source and update process so pins do not become unmaintained.
- Limit approved publishers and repositories, and make the allowlist reviewable. Treat a tag or publisher name as a mutable reference, not proof that code is immutable.
- Check organization and repository settings for permissions to create or approve workflows and whether private/internal repositories may share actions or reusable workflows.
- Apply enterprise restrictions to organizations where required; make any exceptions narrow, time-bounded, and owned.

## Set least-privilege token defaults

Set the default `GITHUB_TOKEN` permissions to the lowest useful level (often read-only), then declare only the specific permissions each workflow or job requires. Review write permissions and approval paths for changes to workflows. Consult [managing Actions settings for a repository](https://docs.github.com/en/enterprise-cloud@latest/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository).

Fork pull requests generally need a deliberately restricted permission path. Avoid granting secrets or write tokens to untrusted contributions. Treat `pull_request_target` as a privileged context: do not check out or execute untrusted pull-request code while the workflow has access to a privileged token or secrets. Follow GitHub's [secure use reference](https://docs.github.com/en/enterprise-cloud@latest/actions/reference/security/secure-use) and [pull_request_target guidance](https://docs.github.com/en/enterprise-cloud@latest/actions/reference/security/securely-using-pull_request_target).

## Apply a workflow lifecycle

1. Establish an approved-source policy and token defaults.
2. Inventory workflows, reusable workflows, third-party actions, and required permissions.
3. Test common workflows and blocked-source cases in a disposable repository.
4. Roll out by organization or repository cohort, tracking workflow failures and approved exceptions.
5. Review the allowlist, pinned references, token scopes, and workflow ownership periodically.

## Negative validation

Use a disposable repository to confirm that a non-approved action is rejected, a workflow requesting unnecessary write permission is not granted it by default, and fork-originated changes cannot access secrets or write-capable tokens. Verify approved workflows still run. Do not use a real secret or attempt to execute hostile workflow content.

**Deployment note:** GHEC and GHES controls differ by release and configuration. The search for this guide included the GHEC docs and GHES **3.22** docs; for Server, check your installed version's [enterprise Actions policy documentation](https://docs.github.com/en/enterprise-server@3.22/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise).
