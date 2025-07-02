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
  if (schema.ui) {
    await generateUiLibrary(tree, schema);
  }

  if (schema.dataAccess) {
    await generateDataAccessLibrary(tree, schema);
  }
}

async function generateUiLibrary(tree: Tree, schema: Schema) {
  await libraryGenerator(tree, {
    name: 'ui',
    directory: `libs/sales/${schema.name}`,
    importPath: `@sales/${schema.name}/ui`,
    tags: 'type:feature,scope:ui,scope:sales-mfe',
    skipPackageJson: true,
    skipModule: true,
  });
}

async function generateDataAccessLibrary(tree: Tree, schema: Schema) {
  const directory = `libs/sales/${schema.name}`;
  await libraryGenerator(tree, {
    name: 'data-access',
    directory: directory,
    importPath: `@sales/${schema.name}/data-access`,
    tags: 'type:feature,scope:ui,scope:sales-mfe',
    skipPackageJson: true,
    skipModule: true,
  });

  generateStateFiles(tree, schema, directory);
  generateConfigFiles(tree, schema, directory);
  generateConstantsFiles(tree, schema, directory);
  generateFacadeFiles(tree, schema, directory);
  deleteDefaultLibFolder(tree, directory);

  await formatFiles(tree);
}

function generateFacadeFiles(tree: Tree, schema: Schema, directory: string) {
  const stateFolderPath = joinPathFragments(directory, '/data-access/src/lib/facade');
  const templateOptions = {
    ...names(schema.name),
    classifiedName: classify(schema.name),
    classifiedStateName: classify(schema.name) + 'State',
    tmpl: '',
  };
  generateFiles(tree, joinPathFragments(__dirname, 'files/data-access/facade'), stateFolderPath, templateOptions);
}

function generateStateFiles(tree: Tree, schema: Schema, directory: string) {
  const stateFolderPath = joinPathFragments(directory, '/data-access/src/lib/+state');
  const templateOptions = {
    ...names(schema.name),
    classifiedName: classify(schema.name),
    classifiedStateName: classify(schema.name) + 'State',
    tmpl: '',
  };
  generateFiles(tree, joinPathFragments(__dirname, 'files/data-access/state'), stateFolderPath, templateOptions);

  const originalFileName = joinPathFragments(stateFolderPath, '__name__.state.ts.template');
  const newFileName = joinPathFragments(stateFolderPath, `${schema.name}.state.ts`);
  if (tree.exists(originalFileName)) {
    tree.rename(originalFileName, newFileName);
  }
}

function generateConfigFiles(tree: Tree, schema: Schema, directory: string) {
  const configFolderPath = joinPathFragments(directory, '/data-access');
  const templateOptions = {
    ...names(schema.name),
    classifiedStateName: classify(schema.name) + 'State',
    tmpl: '',
  };
  generateFiles(tree, joinPathFragments(__dirname, 'files/data-access/config'), configFolderPath, templateOptions);
}

function generateConstantsFiles(tree: Tree, schema: Schema, directory: string) {
  const constantFolderPath = joinPathFragments(directory, '/data-access/src/lib/constants');
  const templateOptions = {
    ...names(schema.name),
    classifiedStateName: classify(schema.name) + 'State',
    tmpl: '',
  };
  generateFiles(tree, joinPathFragments(__dirname, 'files/data-access/constants'), constantFolderPath, templateOptions);
}

function deleteDefaultLibFolder(tree: Tree, directory: string) {
  const libFolderPath = `${directory}/src/lib`;
  if (tree.exists(libFolderPath)) {
    tree.delete(libFolderPath);
  }
}
