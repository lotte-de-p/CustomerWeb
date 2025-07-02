import { Tree, formatFiles, generateFiles, joinPathFragments, offsetFromRoot } from '@nx/devkit';
import { UiOptions } from './schema';
import { strings } from '@angular-devkit/core';
import { validateInputs } from '../utils/validate-inputs';
import { addTsConfigPath } from '@nx/js';
import { addTsExport } from '../utils/add-ts-exports';
import { getCurrentLibsDirectory } from '../utils/current-libs-directory';
import { MFE_SUFFIX, PREFIX } from '../utils/constants';

export default async function (tree: Tree, options: UiOptions) {
  options.mfeName ??= '';
  options.domain ??= '';

  validateInputs(options);

  const currentLibsDirectory = getCurrentLibsDirectory(tree);
  const mfeNameWithoutSuffix = options.mfeName.split(MFE_SUFFIX)[0];
  const leanIxNameDasherized = strings.dasherize(options.leanIxName);
  const fullPath = `${leanIxNameDasherized}/${mfeNameWithoutSuffix}/${strings.dasherize(options.domain)}`;
  const fullPathDasherized = fullPath.replace(/\//g, '-');

  const domainName = options.shared ? 'shared' : strings.dasherize(options.domain) || '';

  const fullLibPath = currentLibsDirectory || `libs/${leanIxNameDasherized}/${mfeNameWithoutSuffix}/${domainName}`;

  const libUiPath = `${fullLibPath}/ui`;

  const importPath = options.importPath || `@${fullPath}/ui`;
  const uiIndexPath = `${libUiPath}/src/index.ts`;
  const prefix = `${PREFIX}-${fullPathDasherized}`;

  const templateOptions = {
    offsetFromRoot: offsetFromRoot(libUiPath),
    libUiPath,
    fullPathDasherized,
    prefix,
  };

  generateUiComponent(tree, { options, libUiPath: libUiPath + '/src/lib', prefix });

  addFilesToRoot(tree, options, libUiPath, './files/rootFiles', templateOptions);

  addTsExport(tree, uiIndexPath, [`./lib/button/button.component`]);
  addTsConfigPath(tree, importPath, [uiIndexPath]);

  await formatFiles(tree);
}

function generateUiComponent(
  tree: Tree,
  {
    options,
    libUiPath,
    prefix,
  }: {
    options: UiOptions;
    libUiPath: string;
    prefix: string;
  }
) {
  const params = {
    ...strings,
    ...options,
    libUiPath,
    prefix,
    tmpl: '',
  };

  generateFiles(tree, joinPathFragments(__dirname, './files/forUi'), libUiPath, params);
}

function addFilesToRoot(
  tree: Tree,
  options: UiOptions,
  targetFolder: string,
  srcFolder: string,
  templateOptions: Record<string, string>
) {
  const templateOptionsCombined = {
    ...strings,
    ...options,
    ...templateOptions,
    tmpl: '',
  };
  generateFiles(tree, joinPathFragments(__dirname, srcFolder), targetFolder, templateOptionsCombined);
}
