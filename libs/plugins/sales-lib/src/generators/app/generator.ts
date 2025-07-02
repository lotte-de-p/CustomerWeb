import { addProjectConfiguration, formatFiles, generateFiles, Tree } from '@nx/devkit';
import * as path from 'path';
import { AppGeneratorSchema } from './schema';

export async function appGenerator(tree: Tree, schema: AppGeneratorSchema) {
  const projectRoot = `apps/sales/sales-mfe/src/app/${schema.name}`;

  addProjectConfiguration(tree, schema.name, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, schema);
  await formatFiles(tree);
}

export default appGenerator;
