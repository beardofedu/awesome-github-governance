"""Verify public metadata for the guide repository; never change settings."""

import argparse
import json
import subprocess
from pathlib import Path


EXPECTED = {"visibility": "public", "default_branch": "main", "has_issues": True}


def baseline_differences(settings):
    differences = [
        f"{key}: expected {expected!r}, got {settings.get(key)!r}"
        for key, expected in EXPECTED.items()
        if settings.get(key) != expected
    ]
    # GitHub can omit this field from REST responses when the caller has no
    # push access. Don't conflate "not visible" with "enabled" or "disabled".
    if "allow_auto_merge" in settings and settings["allow_auto_merge"] is not False:
        differences.append("allow_auto_merge: expected false")
    return differences


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("repository", help="Repository as OWNER/NAME")
    repo = parser.parse_args().repository
    settings = json.loads(
        subprocess.check_output(["gh", "api", f"repos/{repo}"], text=True)
    )
    for difference in baseline_differences(settings):
        print(difference)
    if "allow_auto_merge" not in settings:
        print("NOT VERIFIED: allow_auto_merge was not returned to this caller")
    return 1 if baseline_differences(settings) else 0


if __name__ == "__main__":
    raise SystemExit(main())
