import unittest

from check_repository import baseline_differences


class RepositoryBaselineTests(unittest.TestCase):
    def test_public_read_only_metadata_is_enough_for_the_core_checks(self):
        self.assertEqual(
            baseline_differences(
                {"visibility": "public", "default_branch": "main", "has_issues": True}
            ), []
        )

    def test_drift_is_reported_without_missing_fields_passing(self):
        problems = baseline_differences(
            {"visibility": "private", "has_issues": True, "allow_auto_merge": True}
        )
        self.assertEqual(len(problems), 3)
        self.assertTrue(any("default_branch" in problem for problem in problems))
