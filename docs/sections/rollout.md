---
title: "Governance rollout and validation"
nav_order: 9
description: "Introduce platform controls in measurable stages and safely verify allowed and denied behavior."
permalink: /sections/rollout/
last_reviewed: 2026-11-18
---

# Governance rollout and validation

Governance controls are effective only when their intended boundary is understood, owners can operate them, and their failure modes are tested. Roll out controls in small cohorts with measurable outcomes, a support path, and a defined rollback condition.

## A staged rollout

### 1. Discover and classify

Inventory enterprises, organizations, repositories, identities, Actions workflows and runners, security settings, and audit destinations. Record deployment type, plan, installed GHES release, owners, sensitivity, production impact, and known exceptions. Resolve unknown owners before enforcing controls that could block them.

### 2. Agree on the baseline

For each control, state the target, scope, enforcement level, owner, dependencies, expected evidence, exception process, and verification test. Distinguish:

- a platform-wide requirement;
- a local configuration decision;
- a time-limited exception;
- an unsupported or unobservable control.

Do not treat GHEC and GHES as feature-equivalent. Map each requirement to the official documentation for the applicable deployment and, for GHES, the installed release. This guide reviewed GHES **3.22** docs on **2026-11-18**.

### 3. Pilot

Choose representative, non-production organizations and repositories covering different languages, teams, workflow types, and identity roles. Include administrators and ordinary contributors in testing. Exercise the normal path and the negative checks below before broadening enforcement.

### 4. Expand with support

Roll out in cohorts, publish the expected behavior and support contact, and monitor change failures, policy blocks, security-alert queues, runner incidents, and access requests. Pause or roll back if a control unexpectedly affects critical workflows or breaks access recovery.

### 5. Operate and improve

Assign owners and review dates for exceptions. Measure policy coverage, repository ownership, runner-group access, identity deprovisioning, security-alert response, and audit-stream health. Repeat validation after material plan, identity, Actions, or GHES version changes.

## Safe negative validation

Use only a **disposable repository**, test identities, harmless workflow code, and synthetic test inputs. A small test matrix should demonstrate both the allowed route and the intended denial:

| Control | Expected denial | Expected allowed path |
| --- | --- | --- |
| Repository policy | Creating a repository with disallowed visibility or bypassing an enforced setting | Creating an approved repository under the intended organization |
| Identity | A disabled test identity or removed group member retaining access | An active, authorized identity signing in and receiving its intended team membership |
| Actions source/permissions | A non-allowlisted action running or unnecessary write permissions being available | An approved action working with only its required permissions |
| Runner group | An unapproved repository scheduling on a restricted group | An approved repository scheduling a harmless job |
| OIDC | An untrusted branch/repository obtaining the external test role | The designated test environment obtaining only the intended non-production role |
| Security controls | A documented synthetic test failing to alert or block as configured | Normal code and dependencies flowing through the configured checks |
| Audit pipeline | An authorized test event missing from the expected evidence path | The same event appearing in the log/stream and reaching the responder |

Do not use real credentials, production cloud roles, confidential data, or exploit payloads. Do not try to bypass live protections. Clean up the test organization/repository and test identities when validation is complete.

## Evidence of completion

Keep a concise evidence record for each rollout cohort: settings and scope, representative repositories, test case and result, issues found, exception records, approver, rollout date, and next review. Include enough context for an operator to reproduce a benign check without copying secrets or personal data.

## Official references

- [Establishing an enterprise governance framework](https://docs.github.com/en/enterprise-cloud@latest/admin/overview/establishing-a-governance-framework-for-your-enterprise)
- [Enterprise policies](https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/security-and-compliance/enterprise-policies)
- [Secure use of GitHub Actions](https://docs.github.com/en/enterprise-cloud@latest/actions/reference/security/secure-use)
- [GitHub security features](https://docs.github.com/en/enterprise-cloud@latest/code-security/getting-started/github-security-features)
- [GHES 3.22 governance framework](https://docs.github.com/en/enterprise-server@3.22/admin/overview/establishing-a-governance-framework-for-your-enterprise)

Official references and GHES-version caveats are linked in the corresponding sections.
