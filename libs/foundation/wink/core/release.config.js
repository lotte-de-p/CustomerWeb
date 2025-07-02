// eslint-disable-next-line no-undef
const winkCoreParser = require.resolve('./wink-core-parser.js');

const parserOpts = {
  parserOpts: {
    mergePattern: "Merge branch '(?<source>[^']*)' into '(?<target>[^']*)'",
    mergeCorrespondence: ['source', 'target'],
    headerPattern: '^\\[?[A-Z0-9]+\\-[0-9]+\\]\\s*(?<type>[A-Za-z]+)\\((?<scope>[^\\)]+)\\):\\s*(?<subject>.+)$',
    headerCorrespondence: ['type', 'scope', 'subject'],
    parserOpts: winkCoreParser,
  },
};
// eslint-disable-next-line no-undef
module.exports = {
  branches: ['develop', 'pipeline/DESISYSTTM-1000-semver'],
  plugins: [
    ['@semantic-release/commit-analyzer', parserOpts],
    ['@semantic-release/release-notes-generator', parserOpts],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'docs/CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/gitlab',
      {
        gitlabUrl: 'https://gitlab.cmt.apps.telenet.be/',
        gitlabApiPathPrefix: '/api/v4',
        assets: ['libs/foundation/wink/**/*'],
        successComment: false,
        failComment: false,
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['libs/foundation/wink/**/*'],
        message: '[TECH-123] (release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
