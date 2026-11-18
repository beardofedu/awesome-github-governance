# Governance checks

Run the credential-free suite with:

```shell
python3 -m unittest discover -s test-suite/checks -p 'test_*.py'
```

The weekly governance workflow also compares the live public guide repository
to its expected metadata using `check_repository.py`. It does not evaluate an
enterprise tenant, administer settings, or prove that any control is enforced.
If the API omits auto-merge settings for the calling identity, the script states
that this field was not verified. Do not copy Copilot content-exclusion
canaries into this project: its control-verification cases are the pilot checks
in the [guide](../docs/index.md), using a disposable repository and no real
credentials.

The Pages build, browser navigation and search test, axe accessibility
checks, docs link scan, workflow lint, and agentic workflow compile comparison
are described in [Contributing](../CONTRIBUTING.md).
