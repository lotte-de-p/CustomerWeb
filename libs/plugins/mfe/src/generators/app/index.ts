import { formatFiles, generateFiles, installPackagesTask, joinPathFragments, offsetFromRoot, Tree } from '@nx/devkit';
import { AppOptions } from './schema';
import { MFE_SUFFIX, PREFIX } from '../utils/constants';
import { getCurrentAppsDirectory } from '../utils/current-apps-directory';
import { addFilesToRoot } from '../utils/add-files-to-root';
import { strings } from '@angular-devkit/core';
import { updateDepConst } from '../utils/update-dep-const-js';

export default async function (tree: Tree, options: AppOptions) {
  options.domain ??= '';

  const currentDirectory = getCurrentAppsDirectory(tree);
  const mfeNameWithoutSuffix = options.mfeName.split(MFE_SUFFIX)[0];
  const mfeNameE2E = `${options.mfeName}-e2e`;
  const leanIxNameDasherized = strings.dasherize(options.leanIxName);
  const fullPath = `${leanIxNameDasherized}/${options.mfeName}`;
  const fullE2EPath = `${leanIxNameDasherized}/${mfeNameE2E}`;
  const fullPathDasherized = fullPath.replace(/\//g, '-');

  const fullAppsPath = currentDirectory || `apps/${fullPath}`;
  const fullE2EAppsPath = currentDirectory || `apps/${fullE2EPath}`;
  const appFolderPath = `${fullAppsPath}/src/app`;

  const prefix = `${PREFIX}-${leanIxNameDasherized}-${mfeNameWithoutSuffix}`;

  const templateOptions = {
    mfeNameE2E,
    fullE2EAppsPath,
    fullAppsPath,
    mfeNameWithoutSuffix,
    prefix,
    fullPath,
    projectName: fullPathDasherized,
    fullPathDasherized,
  };

  generateAppComponent(tree, {
    options,
    fullPathDasherized,
    appFolderPath,
    mfeNameWithoutSuffix,
    prefix,
  });

  addFilesToRoot(tree, options, fullAppsPath, '../app/files/rootFiles', {
    ...templateOptions,
    offsetFromRoot: offsetFromRoot(fullAppsPath),
  });

  addFilesToRoot(tree, options, fullE2EAppsPath, '../app/files/playwright', {
    ...templateOptions,
    offsetFromRoot: offsetFromRoot(fullE2EAppsPath),
  });

  updateModuleBoundaries(tree, options.mfeName);

  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}

function generateAppComponent(
  tree: Tree,
  {
    options,
    fullPathDasherized,
    appFolderPath,
    mfeNameWithoutSuffix,
    prefix,
  }: {
    options: AppOptions;
    fullPathDasherized: string;
    appFolderPath: string;
    mfeNameWithoutSuffix: string;
    prefix: string;
  }
) {
  const tmpl = '';
  const params = {
    ...strings,
    ...options,
    appFolderPath,
    fullPathDasherized,
    mfeNameWithoutSuffix,
    prefix,
    tmpl,
  };

  generateFiles(tree, joinPathFragments(__dirname, './files/forApp'), appFolderPath, params);
}

function updateModuleBoundaries(tree: Tree, mfeName: string) {
  updateDepConst(tree, `scope:${mfeName}`, (depConst) => {
    const jokerIndex = depConst.findIndex(
      (entry) =>
        entry['sourceTag'] &&
        entry['sourceTag'] === '*' &&
        entry['onlyDependOnLibsWithTags'] &&
        Array.isArray(entry['onlyDependOnLibsWithTags']) &&
        entry['onlyDependOnLibsWithTags'].length > 0 &&
        entry['onlyDependOnLibsWithTags'][0] === '*'
    );

    if (jokerIndex !== -1) {
      depConst.splice(jokerIndex, 1);
    }

    depConst.push({
      sourceTag: `scope:${mfeName}`,
      onlyDependOnLibsWithTags: [`scope:${mfeName}`, 'type:api'],
    });
  });
}
