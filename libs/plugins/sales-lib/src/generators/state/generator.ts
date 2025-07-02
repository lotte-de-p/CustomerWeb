import { Tree } from '@nx/devkit';
import { StateGeneratorSchema } from './schema';
import {
  extractProperties,
  generateActionsAndDefaultStateCode,
  parseInterface,
  replaceDefaultStateInFile,
} from './utils/state.util';

async function stateGenerator(tree: Tree, options: StateGeneratorSchema) {
  const filePath = `libs/sales/${options.name}/data-access/src/lib/+state/${options.name}.state.ts`;
  const declaration = parseInterface(filePath);

  if (!declaration) {
    console.error('Could not read the interface file or it does not contain the expected interface.');
    return;
  }

  const properties = extractProperties(declaration);
  const { actionsCode, defaultStateCode } = generateActionsAndDefaultStateCode(properties, options.name);

  const actionsFilePath = `libs/sales/${options.name}/data-access/src/lib/+state/${options.name}.actions.ts`;
  tree.write(actionsFilePath, actionsCode);

  replaceDefaultStateInFile(tree, filePath, defaultStateCode);
}

export default stateGenerator;
