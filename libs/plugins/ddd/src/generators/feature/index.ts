import { formatFiles, generateFiles, installPackagesTask, joinPathFragments, offsetFromRoot, Tree } from '@nx/devkit';
import { FeatureOptions } from './schema';
import { strings } from '@angular-devkit/core';
import { addTsExport } from '../utils/add-ts-exports';
import { addTsConfigPath } from '@nx/js';
import { getCurrentLibsDirectory } from '../utils/current-libs-directory';
import { MFE_SUFFIX, PREFIX } from '../utils/constants';
import { addNgrx } from '../utils/add-ngrx';
import { addFilesToRoot } from '../utils/add-files-to-root';

export default async function (tree: Tree, options: FeatureOptions) {
  options.domain ??= '';

  const currentLibsDirectory = getCurrentLibsDirectory(tree);
  const mfeNameWithoutSuffix = options.mfeName.split(MFE_SUFFIX)[0];
  const leanIxNameDasherized = strings.dasherize(options.leanIxName);

  const domainPath = options.domain ? `/${strings.dasherize(options.domain)}` : '';
  const fullPath = `${leanIxNameDasherized}/${mfeNameWithoutSuffix}${domainPath}`;
  const fullPathDasherized = fullPath.replace(/\//g, '-');

  const fullLibsPath = currentLibsDirectory || `libs/${fullPath}`;

  const featureName = strings.dasherize(options.name) ? strings.dasherize(options.name) : '';

  const featureFolderName = `feature-${featureName}`;

  const featureRootPath = `${fullLibsPath}/${featureFolderName}`;
  const dataAccessRootPath = `${fullLibsPath}/data-access`;
  const featureLibFolderPath = `${featureRootPath}/src/lib`;

  const featureIndexPath = `${featureRootPath}/src/index.ts`;

  const importPath = `@${fullPath}/${featureFolderName}`;

  const templateOptions = {
    featureRootPath,
    dataAccessRootPath,
    mfeNameWithoutSuffix,
    prefix: `${PREFIX}-${fullPathDasherized}`,
    fullPath,
    projectName: fullPathDasherized,
    fullPathDasherized,
    featureFolderName,
  };

  generateFeatureComponent(tree, {
    options,
    fullPathDasherized,
    featureLibFolderPath,
  });

  addFilesToRoot(tree, options, featureRootPath, '../feature/files/rootFiles', {
    ...templateOptions,
    offsetFromRoot: offsetFromRoot(featureRootPath),
  });

  if (options.ngrx) {
    addNgrx(
      tree,
      options,
      fullLibsPath,
      { ...templateOptions, offsetFromRoot: offsetFromRoot(dataAccessRootPath) },
      'feature'
    );
  }

  addTsExport(tree, featureIndexPath, [`./lib/${featureName}.component`]);

  addTsConfigPath(tree, importPath, [joinPathFragments(featureRootPath, './src', 'index.ts')]);

  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}

function generateFeatureComponent(
  tree: Tree,
  {
    options,
    fullPathDasherized,
    featureLibFolderPath,
  }: {
    options: FeatureOptions;
    fullPathDasherized: string;
    featureLibFolderPath: string;
  }
) {
  const tmpl = '';
  const params = {
    ...strings,
    ...options,
    'name@dasherize': strings.dasherize(options.name),
    featureLibFolderPath,
    fullPathDasherized,
    tmpl,
  };

  generateFiles(tree, joinPathFragments(__dirname, './files/forFeature'), featureLibFolderPath, params);
}
