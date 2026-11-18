---
title: "Audit and operational visibility"
nav_order: 8
description: "Build an evidence trail and operational response loop for enterprise governance."
permalink: /sections/audit-visibility/
last_reviewed: 2026-11-18
---

# Audit and operational visibility

An audit log is evidence of recorded activity, not a complete substitute for a control review or incident process. Decide which activities must be observed, how quickly they should reach responders, what retention is required, and who investigates exceptions. See GitHub's [enterprise audit log guide](https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/security-and-compliance/audit-log-for-an-enterprise), [accessing the enterprise audit log](https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise), and [streaming the audit log](https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise).

## Define evidence requirements

Identify the events and changes relevant to your governance controls, including:

- enterprise, organization, and repository policy changes;
- owner, member, team, collaborator, and role changes;
- SSO and provisioning changes;
- repository creation, transfer, visibility, and deletion;
- Actions policy, workflow, runner-group, and runner-registration changes;
- security feature configuration, alert triage, and exception activity.

Confirm which of these events are available at the enterprise or organization level for your plan and deployment. Use the official [enterprise audit event reference](https://docs.github.com/en/enterprise-server@3.22/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise) and validate event names and payloads against the target deployment.

## Operate the evidence pipeline

1. Enable access to the relevant audit views and limit who can search, export, or configure streaming.
2. For continuous monitoring, configure audit-log streaming to an approved destination where supported; document destination ownership, credentials, encryption, delivery monitoring, retention, and access review.
3. Monitor for missing or delayed events and treat a broken stream as an operational incident. Do not assume a successful configuration guarantees downstream ingestion.
4. Create detection rules and response runbooks for high-impact events (for example an unexpected owner change, a policy relaxation, or a new privileged runner).
5. Retain the GitHub-native logs and downstream copies according to the applicable product behavior and organizational requirements. Confirm current retention limits and filters; do not make a retention promise without checking the selected service.
6. Exercise response using a harmless, authorized test change. Confirm the event is present, reaches the destination, alerts the correct team, and can be investigated.

For GHES, review the [versioned audit-log streaming guide](https://docs.github.com/en/enterprise-server@3.22/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise) and the release-specific event reference. The enterprise Cloud and Server logging paths and operations are not interchangeable.

## Governance review cadence

Use a recurring operating review to examine policy drift and exceptions, privileged and external access, runner inventory, Actions approvals, security-alert response, and audit pipeline health. Record each finding with an owner, due date, evidence link, and closure status. Escalate controls that cannot be observed instead of treating their absence as proof that no change occurred.

Validate event availability, retention, and streaming options for the enterprise plan and exact GHES version.
