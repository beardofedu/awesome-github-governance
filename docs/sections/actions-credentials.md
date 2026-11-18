---
title: "Actions credentials and OIDC"
nav_order: 6
description: "Reduce long-lived workflow credentials with minimal tokens, environments, and OIDC trust."
permalink: /sections/actions-credentials/
last_reviewed: 2026-11-18
---

# Actions credentials and OIDC

Start with the least powerful credential and the narrowest lifetime. Prefer the per-job `GITHUB_TOKEN` with explicitly scoped permissions for GitHub operations; where a workflow must authenticate to an external cloud provider, prefer OpenID Connect (OIDC) federation over storing a long-lived cloud secret when supported. Review [secure use of GitHub Actions](https://docs.github.com/en/enterprise-cloud@latest/actions/reference/security/secure-use) and the [OIDC reference](https://docs.github.com/en/enterprise-cloud@latest/actions/reference/security/oidc).

## Make token permissions explicit

- Set restrictive default workflow token permissions at the repository, organization, or enterprise level as available.
- Declare only the needed permissions at workflow or job scope; avoid broad `write-all` grants.
- Separate read-only build/test jobs from the few jobs that publish artifacts, release, or deploy.
- Store repository/environment secrets only when the workflow must use them. Restrict access to environments, review who may approve deployments, and keep secret scope as narrow as the product permits.
- For fork and other untrusted contributions, do not expose secrets or a token with write permissions.

## Configure OIDC as a trust relationship

1. Enable the workflow's `id-token` permission only in the job that needs federation.
2. Configure the external identity provider to trust the intended GitHub issuer and audience.
3. Restrict the provider's trust condition to the exact repository and intended branch, tag, or protected environment. Avoid organization-wide subject patterns unless that is explicitly the desired boundary.
4. Use protected environments and required reviewers for sensitive deployments, and ensure the trust condition binds to the intended environment context.
5. Test the expected identity claims and denied cases in a non-production cloud account before enabling production federation.
6. Review provider trust policies when repositories are renamed, transferred, made public, or moved between organizations.

OIDC removes the need to keep a long-lived cloud credential in GitHub, but it does not make an overbroad trust condition safe. Treat the identity provider's subject and audience conditions as access-control policy and review them alongside workflow permissions.

## Safe negative checks

In a disposable repository and non-production external account, verify that a workflow without `id-token: write` cannot request an OIDC token; that an untrusted branch or repository does not satisfy the external trust condition; and that the approved branch/environment receives only the intended test role. Never print tokens or use real production credentials during validation.

**Deployment note:** GHEC and GHES OIDC configuration and support may differ by release. This guide reviewed GHEC and GHES **3.22** docs; for Server consult the matching [GHES OIDC reference](https://docs.github.com/en/enterprise-server@3.22/actions/reference/security/oidc) and validate the instance's external connectivity and provider setup.
