import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import { workspaceRoot } from '@nrwl/devkit';

const execAsync = promisify(exec);

interface GenerateI18nOptions {
  appPath: string;
  prefixes: string;
}

export default async function generateI18nExecutor(options: GenerateI18nOptions) {
  const { appPath, prefixes } = options;
  const scriptPath = path.join(workspaceRoot, 'tools', 'scripts', 'generate-i18n-from-lokalise.js');
  const command = `node ${scriptPath} ${appPath} ${prefixes}`;

  try {
    const { stdout, stderr } = await execAsync(command);
    console.log(stdout);

    if (stderr) {
      console.error('Error:', stderr);
      return { success: false, error: stderr };
    }

    return { success: true };
  } catch (error) {
    console.error('Execution error:', error);
    return { success: false, error };
  }
}
