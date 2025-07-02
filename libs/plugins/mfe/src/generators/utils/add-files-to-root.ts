import { generateFiles, joinPathFragments, Tree } from '@nx/devkit';
import { strings } from '@angular-devkit/core';
import { AppOptions } from '../app/schema';

export function addFilesToRoot(
  tree: Tree,
  options: AppOptions,
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
