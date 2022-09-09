module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "ci",
        "style",
        "docs",
        "chore",
        "revert",
        "refactor",
        "test",
        "build",
        "perf",
      ],
    ],
  },
};
