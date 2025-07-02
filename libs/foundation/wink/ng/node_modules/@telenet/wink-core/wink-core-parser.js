// eslint-disable-next-line no-undef
module.exports = function (commit) {
  const hasWinkCoreScope = commit.scope === 'wink-core';

  if (hasWinkCoreScope) {
    return commit.type;
  }

  return null;
};
