import { generateFiles, joinPathFragments, names, Tree } from '@nx/devkit';
import { DataAccessOptions } from '../data-access/schema';
import { strings } from '@angular-devkit/core';
import { FeatureOptions } from '../feature/schema';
import { addFilesToRoot } from './add-files-to-root';

export function addNgrx(
  tree: Tree,
  options: DataAccessOptions | FeatureOptions,
  fullLibsPath: string,
  templateOptions: Record<string, string>,
  generatorRootPath: string
): void {
  addFilesToRoot(
    tree,
    options,
    templateOptions.dataAccessRootPath,
    `../${generatorRootPath}/files/rootFilesNgrx`,
    templateOptions
  );

  const domainAndDirectoryDataAccessLibPath = `${fullLibsPath}/data-access/src/lib`;
  const domainAndDirectoryStatePath = `${domainAndDirectoryDataAccessLibPath}/+state`;
  const domainAndDirectoryFacadePath = `${domainAndDirectoryDataAccessLibPath}/facade`;
  const dataAccessName = options.domain ? strings.dasherize(options.domain) : templateOptions.mfeNameWithoutSuffix;
  const dataAccessNameCapitalized = strings.classify(dataAccessName) ? strings.classify(dataAccessName) : '';

  const ngrxTemplateOptions = {
    ...strings,
    dataAccessNameCapitalized,
    'dataAccessName@dasherize': strings.dasherize(dataAccessName),
  };

  generateFiles(
    tree,
    joinPathFragments(__dirname, `../${generatorRootPath}/files/+state`),
    domainAndDirectoryStatePath,
    {
      ...ngrxTemplateOptions,
      ...options,
      ...generateNgrxNames(options, dataAccessName),
      tmpl: '',
    }
  );

  generateFiles(
    tree,
    joinPathFragments(__dirname, `../${generatorRootPath}/files/facadeFiles`),
    domainAndDirectoryFacadePath,
    {
      ...ngrxTemplateOptions,
      ...options,
      ...generateNgrxNames(options, dataAccessName),
      tmpl: '',
    }
  );
  generateFiles(
    tree,
    joinPathFragments(__dirname, `../${generatorRootPath}/files/modelFiles`),
    domainAndDirectoryDataAccessLibPath,
    {
      ...ngrxTemplateOptions,
      ...options,
      ...generateNgrxNames(options, dataAccessName),
      tmpl: '',
    }
  );
  generateFiles(
    tree,
    joinPathFragments(__dirname, `../${generatorRootPath}/files/serviceFiles`),
    domainAndDirectoryDataAccessLibPath,
    {
      ...ngrxTemplateOptions,
      ...options,
      ...generateNgrxNames(options, dataAccessName),
      tmpl: '',
    }
  );
}

function generateNgrxNames(
  options: FeatureOptions | DataAccessOptions,
  dataAccessName: string
): ReturnType<typeof names> & {
  effectsClassName: string;
  featureName: string;
  stateClassName: string;
  facadeClassName: string;
  reducerName: string;
  actionPrefix: string;
} {
  const generatedNames = names(dataAccessName);
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
