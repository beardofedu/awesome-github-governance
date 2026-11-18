# Awesome GitHub Governance

A practical field guide for administrators governing **GitHub Enterprise**,
**GitHub Actions**, and **GitHub Advanced Security**. It covers where policies
are set, who owns exceptions, what a control actually enforces, and how to
verify that it works before expanding rollout.

Read the [GitHub Pages guide](https://beardofedu.github.io/awesome-github-governance/)
once deployed, or browse the [guide source](docs/index.md).

| Start here | Use it to |
|---|---|
| [Platform model](docs/sections/platform-model.md), [enterprise policies](docs/sections/enterprise-policies.md), and [identity](docs/sections/identity-access.md) | Choose a deployment and identity model, place policy at the right level, and verify repository protections. |
| [Actions policy](docs/sections/actions-policy.md), [runners](docs/sections/actions-runners.md), and [credentials](docs/sections/actions-credentials.md) | Control workflow permissions, isolate workloads, and scope deployment access with OIDC. |
| [Advanced Security](docs/sections/advanced-security.md) | Roll out code scanning, secret protection, and dependency controls where supported. |
| [Audit](docs/sections/audit-visibility.md) and [rollout](docs/sections/rollout.md) | Collect evidence, test exceptions, and decide when to widen the rollout. |

[Governance Watch](.github/workflows/github-governance-watch.md) proposes
changes for human review; it does not merge them. See
[Contributing](CONTRIBUTING.md) for verification and one-time setup.

This is the sister project of
[Awesome Copilot Governance](https://github.com/beardofedu/awesome-copilot-governance).
The site shell, contributor templates, and workflow patterns are adapted from
[its `main` snapshot](https://github.com/beardofedu/awesome-copilot-governance/tree/2653a2cb50dd442dad535acacc525e45a3f43593).
Code is [MIT](LICENSE); guide content is [CC BY 4.0](LICENSE-docs).
