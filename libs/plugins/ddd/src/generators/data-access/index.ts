import { formatFiles, installPackagesTask, offsetFromRoot, Tree } from '@nx/devkit';
import { strings } from '@angular-devkit/core';
import { DataAccessOptions } from './schema';
import { getCurrentLibsDirectory } from '../utils/current-libs-directory';
import { MFE_SUFFIX, PREFIX } from '../utils/constants';
import { addNgrx } from '../utils/add-ngrx';

export default async function (tree: Tree, options: DataAccessOptions) {
  options.leanIxName ??= '';

  const mfeNameWithoutSuffix = options.mfeName.split(MFE_SUFFIX)[0];
  const dataAccessName = options.domain || mfeNameWithoutSuffix;

  const currentLibsDirectory = getCurrentLibsDirectory(tree);
  const domainPath = options.domain ? `/${strings.dasherize(options.domain)}` : '';
  const fullLibsPath = currentLibsDirectory || `libs/${options.leanIxName}/${mfeNameWithoutSuffix}/${domainPath}`;
  const dataAccessRootPath = `${fullLibsPath}/data-access`;

  const templateOptions = {
    dataAccessRootPath,
    mfeNameWithoutSuffix,
    offsetFromRoot: offsetFromRoot(dataAccessRootPath),
    prefix: `${PREFIX}-${options.leanIxName}-${mfeNameWithoutSuffix}-${domainPath}`,
    'dataAccessName@dasherize': strings.dasherize(dataAccessName),
  };

  addNgrx(tree, options, fullLibsPath, templateOptions, 'data-access');

  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
