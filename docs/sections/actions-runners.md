---
title: "Actions runners and runner groups"
nav_order: 5
description: "Separate workflow execution environments and constrain access with runner groups."
permalink: /sections/actions-runners/
last_reviewed: 2026-11-18
---

# Actions runners and runner groups

Runner choice is a security boundary: workflow code executes on the runner and can interact with its filesystem and network. Prefer GitHub-hosted runners when their environment and network access meet the workload. Use larger runners or self-hosted runners only where their capabilities are needed, with a named owner and an explicit threat and maintenance model. Check [runner groups](https://docs.github.com/en/enterprise-cloud@latest/actions/concepts/runners/runner-groups) and [self-hosted runner security guidance](https://docs.github.com/en/enterprise-cloud@latest/actions/reference/security/secure-use).

## Govern runner groups

- Organize groups by trust level and workload (for example, general CI versus restricted deployment workloads); do not rely on labels alone to enforce access.
- Scope which organizations and repositories can use each group. Default new repositories to no access until intentionally granted where that fits operational needs.
- Limit who can administer runners and groups, and review membership and repository access after changes.
- Keep sensitive deployment runners separate from general build workloads. Do not allow untrusted pull-request code to share a persistent runner with privileged workloads.
- For self-hosted infrastructure, isolate the runner account, filesystem, network routes, cloud identity, and caches from unrelated systems. Prefer ephemeral or cleanly reimaged workers where feasible and remove stale registrations.
- Track runner version, patching, image provenance, secrets exposure, outbound network needs, job concurrency, and incident ownership.

GitHub documents [runner-group access](https://docs.github.com/en/enterprise-cloud@latest/actions/how-tos/manage-runners/self-hosted-runners/manage-access) and [adding self-hosted runners](https://docs.github.com/en/enterprise-cloud@latest/actions/how-tos/manage-runners/self-hosted-runners/add-runners). Runner options and administration differ between GHEC and GHES; larger runner availability is plan and deployment dependent.

## Operational controls

1. Inventory runner groups, runner type, owner, repositories with access, network zone, and workload classification.
2. Deny broad access by default; grant a repository or organization access only after its workflow owners and risk level are understood.
3. Use a separate group or isolated pool for production deployment jobs. Require environment approvals and narrowly scoped credentials for release steps.
4. Monitor runner availability, queue time, unexpected registration changes, failed updates, and jobs scheduled on an unintended group.
5. Revoke group access and deregister lost, retired, or compromised runners promptly; rotate any credentials the runner could have accessed.

## Negative validation

In a disposable organization, verify that an unapproved repository cannot schedule work on a restricted runner group and an authorized repository can. Confirm that a job submitted from an untrusted fork is not able to use a privileged runner group. Use harmless jobs only; do not test with production network access, credentials, or payloads.

For GHES, validate the behavior and supported runner types against the installed release's [runner-group docs](https://docs.github.com/en/enterprise-server@3.22/actions/concepts/runners/runner-groups).
