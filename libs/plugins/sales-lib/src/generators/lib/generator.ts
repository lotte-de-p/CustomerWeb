import { formatFiles, generateFiles, joinPathFragments, names, Tree } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/angular/generators';
import { classify } from '@angular-devkit/core/src/utils/strings';

interface Schema {
  name: string;
  dataAccess: boolean;
  feature: boolean;
  ui: boolean;
}

export default async function customLibraryGenerator(tree: Tree, schema: Schema) {
  const baseDirectory = `libs/sales/${schema.name}`;
  if (schema.ui) {
    await generateUi(tree, schema, baseDirectory);
  }

  if (schema.dataAccess) {
    await generateDataAccessLibrary(tree, schema, baseDirectory);
  }

  if (schema.feature) {
    await generateFeature(tree, schema, baseDirectory);
  }
}

async function generateUi(tree: Tree, schema: Schema, directory: string) {
  const libType = 'ui';

  await generateLibrary(tree, {
    ...schema,
    directory,
    libType: libType,
  });

  //
  generateConfigFiles(tree, schema, directory, libType, libType);
  await formatFiles(tree);
}

async function generateDataAccessLibrary(tree: Tree, schema: Schema, directory: string) {
  const libType = 'data-access';
  await generateLibrary(tree, {
    ...schema,
    directory,
    libType: libType,
  });

  generateConfigFiles(tree, schema, directory, libType, libType);
  generateStateFiles(tree, schema, directory);
  generateConstantsFiles(tree, schema, directory);
  generateFacadeFiles(tree, schema, directory);
  deleteDefaultLibFolder(tree, directory);
  await formatFiles(tree);
}

async function generateFeature(tree: Tree, schema: Schema, directory: string) {
  const libType = `feat-${schema.name}`;
  await generateLibrary(tree, {
    ...schema,
    directory,
    libType: libType,
  });

  generateConfigFiles(tree, schema, directory, libType, 'feature');
  generateFeatureCypressFiles(tree, schema, directory);
  await formatFiles(tree);
}

async function generateLibrary(
  tree: Tree,
  {
    name,
    directory,
    libType,
  }: Schema & {
    directory: string;
    libType: string;
  }
) {
  return await libraryGenerator(tree, {
    name: libType,
    simpleName: true,
    prefix: `tg-sales-${name}`,
    standalone: true,
    inlineStyle: true,
    flat: true,
    directory: directory,
    importPath: `@sales/${name}/${libType}`,
    tags: `type:feature,scope:${libType},scope:sales-mfe`,
    skipPackageJson: true,
    skipModule: true,
  });
}

function generateFilesFromTemplate(
  tree: Tree,
  schema: Schema,
  directory: string,
  subDirectory: string,
  templateSubDir: string
) {
  const templateOptions = {
    ...names(schema.name),
    classifiedName: classify(schema.name),
    classifiedStateName: `${classify(schema.name)}State`,
    tmpl: '',
  };
  const destinationPath = joinPathFragments(directory, subDirectory);
  generateFiles(tree, joinPathFragments(__dirname, `files/${templateSubDir}`), destinationPath, templateOptions);

  if (templateSubDir.includes('state')) {
    const originalFileName = joinPathFragments(destinationPath, '__name__.state.ts.template');
    const newFileName = joinPathFragments(destinationPath, `${schema.name}.state.ts`);
    if (tree.exists(originalFileName)) {
      tree.rename(originalFileName, newFileName);
    }
  }
}

function generateFacadeFiles(tree: Tree, schema: Schema, directory: string) {
  generateFilesFromTemplate(tree, schema, directory, '/data-access/src/lib/facade', 'data-access/facade');
}

function generateStateFiles(tree: Tree, schema: Schema, directory: string) {
  generateFilesFromTemplate(tree, schema, directory, '/data-access/src/lib/+state', 'data-access/state');
}

function generateConfigFiles(tree: Tree, schema: Schema, directory: string, subdirectory: string, libType: string) {
  generateFilesFromTemplate(tree, schema, directory, `/${subdirectory}`, `${libType}/config`);
}

function generateConstantsFiles(tree: Tree, schema: Schema, directory: string) {
  generateFilesFromTemplate(tree, schema, directory, '/data-access/src/lib/constants', 'data-access/constants');
}

function generateFeatureCypressFiles(tree: Tree, schema: Schema, directory: string) {
  generateFilesFromTemplate(tree, schema, directory, `/feat-${schema.name}/cypress`, 'feature/cypress');
}

function deleteDefaultLibFolder(tree: Tree, directory: string) {
  const libPath = joinPathFragments(directory, 'data-access/src/lib');

  tree.children(libPath).forEach((file) => {
    if (file.endsWith('.html') || file.endsWith('.spec.ts') || file.endsWith('.ts')) {
      tree.delete(joinPathFragments(libPath, file));
    }
  });

  const indexPath = joinPathFragments(directory, 'data-access/src/index.ts');
  if (tree.exists(indexPath)) {
    tree.write(indexPath, '');
  }
}
