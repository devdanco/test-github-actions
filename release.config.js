module.exports = {
  branches: ["main"],
  repositoryUrl: "https://github.com/devdanco/test-github-actions",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile:
          "https://github.com/devdanco/test-github-actions/CHANGELOG.md"
      }
    ],
    "@semantic-release/github"
  ]
};
