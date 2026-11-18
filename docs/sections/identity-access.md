---
title: "Identity and access"
nav_order: 3
description: "Govern authentication, provisioning, membership, privileged roles, and recovery."
permalink: /sections/identity-access/
last_reviewed: 2026-11-18
---

# Identity and access

Choose the identity model deliberately. For GHEC, an enterprise may use Enterprise Managed Users (EMU), where identity lifecycle and authentication are managed through an identity provider, or another supported enterprise SAML configuration. EMU and member-owned accounts have different account and collaboration boundaries; validate the consequences for users, organizations, and external collaboration before selecting a model. See [Enterprise Managed Users](https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/identity-and-access-management/enterprise-managed-users) and [choosing enterprise or organization SAML](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/using-saml-for-enterprise-iam/deciding-whether-to-configure-saml-for-your-enterprise-or-your-organizations).

For GHES, confirm SAML, SCIM, and identity-provider capabilities against the installed release and deployment topology. The [GHES SAML guide](https://docs.github.com/en/enterprise-server@3.22/admin/managing-iam/understanding-iam-for-enterprises/about-saml-for-enterprise-iam) and [GHES identity troubleshooting guide](https://docs.github.com/en/enterprise-server@3.22/admin/managing-iam/understanding-iam-for-enterprises/troubleshooting-identity-and-access-management-for-your-enterprise) are version-specific.

## Provision and deprovision

- Use the organization’s authoritative identity source and a supported provisioning path (such as SCIM where available) for consistent joiner, mover, and leaver processing.
- Map IdP groups to GitHub organizations and teams intentionally. Prefer a small number of well-owned access groups over manually maintained, overlapping grants.
- Decide how contractors, service identities, outside collaborators, and emergency administrators differ from standard employees; record their sponsor and review interval.
- Test deactivation and group removal end to end. Confirm that access is revoked and that repository ownership, automation, and operational responsibilities are not left orphaned.

GitHub describes [SAML single sign-on for an enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise) and [SCIM provisioning](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/provisioning-user-accounts-with-scim/provisioning-users-and-groups-with-scim-using-the-rest-api). Availability and supported protocols vary by deployment and identity model.

## Minimize privilege and protect recovery

1. Limit enterprise-owner and organization-owner assignments; use named human identities rather than shared accounts.
2. Grant team and repository permissions from job responsibilities, and periodically review owners, outside collaborators, deploy keys, apps, and machine identities.
3. Use IdP MFA and recovery processes consistent with organizational policy. Document who can restore SSO or provisioning if the IdP is unavailable, without creating an undocumented permanent bypass.
4. Protect emergency access according to the product's documented recovery model. Test the procedure using a controlled test identity and ensure its use generates reviewable evidence.
5. Review role changes, membership changes, SSO events, and access exceptions as operational signals.

## Safe identity checks

In a test organization, verify successful login for an enrolled identity; unsuccessful access after the identity is disabled or removed from the relevant group; correct team membership changes; and the documented recovery path for an IdP outage. Do not lock out production administrators or test with real users' credentials.

Confirm plan prerequisites and current protocol support before implementation; use the exact GHES version's docs when operating Server.
