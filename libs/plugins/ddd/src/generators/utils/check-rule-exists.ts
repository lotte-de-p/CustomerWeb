export function checkRuleExists(filePath: string, rule: string, rules: object, sourceTag: string) {
  if (!rules['rules']) {
    console.info(`${filePath}: rules expected`);
    return false;
  }

  if (!rules['rules'][rule]) {
    console.info(`${filePath}: ${rule} expected`);
    return false;
  }

  if (rules['rules'][rule]['length'] < 2) {
    console.info(`${filePath}: ${rule}.1 unexpected`);
    return false;
  }

  if (!rules['rules'][rule][1]['depConstraints']) {
    console.info(`${filePath}: ${rule}.1.depConstraints expected.`);
    return false;
  }

  if (!Array.isArray(rules['rules'][rule][1]['depConstraints'])) {
    console.info(`${filePath}: ${rule}.1.depConstraints expected to be an array.`);
    return false;
  }

  if (
    rules['rules'][rule][1]['depConstraints'].some(
      (depConstraint: { sourceTag: string }) => depConstraint.sourceTag === sourceTag
    )
  ) {
    console.info(`${filePath}: ${sourceTag} already exists in depConstraints.`);
    return false;
  }

  return true;
}
