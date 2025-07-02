import {
  formatFiles,
  generateFiles,
  names,
  offsetFromRoot,
  Tree,
  getProjects,
  ProjectConfiguration,
} from '@nrwl/devkit';
import * as path from 'path';
import { StateGeneratorSchema } from './schema';

interface NormalizedSchema extends StateGeneratorSchema {
  project: string;
  name: string;
  projectRoot: string;
  facade: boolean;
}

function getProjectType(projectConfig: ProjectConfiguration): 'lib' | 'app' {
  let projectType: 'lib' | 'app' = 'lib';

  if (projectConfig?.projectType === 'application') {
    projectType = 'app';
  }
  return projectType;
}

function normalizeOptions(tree: Tree, options: StateGeneratorSchema): NormalizedSchema {
  const projectConfig: ProjectConfiguration | undefined = getProjects(tree).get(options.project);
  if (!projectConfig) {
    throw new Error(`No project configuration found for project '${options.project}'`);
  }

  if (!projectConfig.sourceRoot) {
    throw new Error(`No source root configured for project '${options.project}'`);
  }

  if (!projectConfig.projectType) {
    throw new Error(`Can't determine project type for project '${options.project}'`);
  }

  const projectRoot = path.join(projectConfig.sourceRoot, getProjectType(projectConfig));

  return {
    ...options,
    projectRoot,
  };
}

function generateNames(options: NormalizedSchema): ReturnType<typeof names> & {
  effectsClassName: string;
  featureName: string;
  stateClassName: string;
  facadeClassName: string;
  reducerName: string;
  actionPrefix: string;
} {
  const generatedNames = names(options.name);
  return {
    ...generatedNames,
    featureName: `${generatedNames.propertyName}Feature`,
    effectsClassName: `${generatedNames.className}Effects`,
    stateClassName: `${generatedNames.className}State`,
    facadeClassName: `${generatedNames.className}Facade`,
    reducerName: `${generatedNames.propertyName}Reducer`,
    actionPrefix: `[${options.project} - ${generatedNames.propertyName}]`,
  };
}

function addFiles(tree: Tree, options: NormalizedSchema) {
  const templateOptions = {
    ...options,
    ...generateNames(options),
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    template: '',
  };
  generateFiles(tree, path.join(__dirname, 'files'), options.projectRoot, templateOptions);
}

function addFacadeFiles(tree: Tree, options: NormalizedSchema) {
  const templateOptions = {
    ...options,
    ...generateNames(options),
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    template: '',
  };
  generateFiles(tree, path.join(__dirname, 'facade_files'), options.projectRoot, templateOptions);
}

export default async function (tree: Tree, options: StateGeneratorSchema) {
  const normalizedOptions = normalizeOptions(tree, options);
  addFiles(tree, normalizedOptions);
  if (options.facade) {
    addFacadeFiles(tree, normalizedOptions);
  }
  await formatFiles(tree);
}
