import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import fs from 'fs';
import { workspaceRoot } from '@nrwl/devkit';
import chalk from 'chalk';

const execAsync = promisify(exec);

interface BuildMobileOptions {
  appPath: string;
  skipGenerateI18n?: boolean;
}

function getMfeName(appPath: string): string {
  const projectJsonPath = path.join(workspaceRoot, appPath, 'project.json');
  const projectJson = JSON.parse(fs.readFileSync(projectJsonPath, 'utf-8'));
  return projectJson.name;
}

export default async function buildMobileExecutor(options: BuildMobileOptions) {
  const { appPath, skipGenerateI18n } = options;
  const mfeName = getMfeName(appPath);
  const buildCommand = `npx nx run ${mfeName}:build:mobile`;
  const generateI18nCommand = `npx nx run ${mfeName}:generate-i18n`;
  const distPath = path.join(workspaceRoot, 'dist', 'apps', mfeName);
  const copyConfigCommand = `cp -r ${path.join(distPath, 'assets', 'config', 'capacitor.config.json')} ${path.join(distPath, 'capacitor.config.json')}`;

  try {
    if (!skipGenerateI18n) {
      console.log('Running generate-i18n...');
      await execAsync(generateI18nCommand);
    }

    console.log('Building mobile application...');
    await execAsync(buildCommand);

    console.log('Copying capacitor.config.json...');
    await execAsync(copyConfigCommand);

    console.log(chalk.green('Build completed successfully!'));

    return { success: true };
  } catch (error) {
    console.error('Execution error:', error);
    return { success: false, error };
  }
}
