import { generateFiles, joinPathFragments, Tree } from '@nx/devkit';
import { FeatureOptions } from '../feature/schema';
import { strings } from '@angular-devkit/core';
import { DataAccessOptions } from '../data-access/schema';

export function addFilesToRoot(
  tree: Tree,
  options: FeatureOptions | DataAccessOptions,
  featureLibFolderRootPath: string,
  filesFolder: string,
  templateOpts: Record<string, string>
) {
  const templateOptions = {
    ...templateOpts,
    ...strings,
    ...options,
    tmpl: '',
  };
  generateFiles(tree, joinPathFragments(__dirname, filesFolder), featureLibFolderRootPath, templateOptions);
}
