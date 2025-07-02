import { Tree } from '@nx/devkit';
import { checkRuleExists } from './check-rule-exists';

export function updateDepConst(host: Tree, sourceTag: string, update: (depConst: Array<object>) => void) {
  const filePath = 'tools/eslint/eslint-boundaries.js';
  const rule = '@nx/enforce-module-boundaries';

  if (!host.exists('tools/eslint/eslint-boundaries.js')) {
    console.info('Cannot add module boundaries rules: eslint-boundaries.js does not exist');
    return;
  }

  let rules = require(filePath);
  if (rules['overrides']) {
    const overrides = rules['overrides'];
    rules = overrides.find((e: { rules: object }) => e.rules && e.rules['@nx/enforce-module-boundaries']);
  }

  if (!checkRuleExists(filePath, rule, rules, sourceTag)) return;

  const depConst = rules['rules'][rule][1]['depConstraints'] as Array<object>;
  update(depConst);

  const updatedContent = `module.exports = ${JSON.stringify(rules, null, 2)};`;

  host.write(filePath, updatedContent);
}
