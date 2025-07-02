import { Tree } from '@nx/devkit';
import { getCwd } from '@nx/plugin/testing';
import { getWorkspaceScope } from './get-workspace-scope';

export function getCurrentAppsDirectory(tree: Tree): string | undefined {
  const currentWorkingDirectory = getCwd();
  const workspaceName = getWorkspaceScope(tree) || '';
  let currentLibsDirectory = currentWorkingDirectory.split(`${workspaceName}`).pop();

  // If the current directory is the 'libs' folder, set it as the root directory
  currentLibsDirectory = currentLibsDirectory === '/apps' ? '' : currentLibsDirectory;

  // if split did not happen, try referencing to the new repo name
  if (currentWorkingDirectory === currentLibsDirectory) {
    currentLibsDirectory = currentWorkingDirectory.split('customer-web-monorepo').pop();

    if (currentLibsDirectory === currentWorkingDirectory) {
      throw new Error(
        `Can't determine the current libs directory, because you current working directory is different from the workspace name.`
      );
    }
  }

  return currentLibsDirectory;
}
