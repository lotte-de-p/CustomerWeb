const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { workspaceRoot } = require('@nrwl/devkit');
const { promisify } = require('util');

const execAsync = promisify(exec);

// Configuration
const lokaliseToken = '92d2cb627eb37d943e8f39bd0bb3ca8cc6ffc9bd';
const projectId = '116153425bc07c58ae0b47.15347773';
const languages = ['en', 'nl', 'fr'];

// Common prefixes
const commonI18nPrefixes = [
  'ocapi',
  'omapi',
  'general',
  'global',
  'date',
  'login',
  'account-selector',
  'overlay-close',
  'tags',
  'text',
  'page',
  'ng.ocapi',
  'ng.omapi',
  'ng.global',
  'ng.general',
  'ng.loader',
  'ng.password',
  'ng.login',
];

const [, , appPath, appSpecificI18nPrefixes] = process.argv;
const prefixes = [...appSpecificI18nPrefixes.split(','), ...commonI18nPrefixes];

const i18nPath = path.join(workspaceRoot, appPath, 'src', 'assets', 'i18n');

console.log(`Checking if the directory ${i18nPath} exists...`);

if (!fs.existsSync(i18nPath)) {
  console.log(`Directory ${i18nPath} does not exist. Creating...`);
  fs.mkdirSync(i18nPath, { recursive: true });
}

const hasValidPrefix = (key) => {
  return prefixes.some((prefix) => key.startsWith(prefix));
};

const checkLokaliseCli = async () => {
  try {
    await execAsync('lokalise2 --version');
    return true;
  } catch (error) {
    return false;
  }
};

const downloadTranslations = async () => {
  const isLokaliseCliInstalled = await checkLokaliseCli();

  if (!isLokaliseCliInstalled) {
    console.error('Error: lokalise2 CLI is not installed.');
    console.error(
      'Please install lokalise2 CLI by following the instructions at: https://github.com/lokalise/lokalise-cli-2-go'
    );
    process.exit(1);
  }

  const downloadCommand = `lokalise2 --token ${lokaliseToken} --project-id ${projectId} file download --format json --unzip-to ${i18nPath}`;
  console.log('Downloading translations from lokalise');

  try {
    const { stdout, stderr } = await execAsync(downloadCommand);
    console.log('Download completed:', stdout);
    if (stderr) {
      console.error('Error:', stderr);
    }
  } catch (error) {
    console.error(`Error downloading translations: ${error}`);
  }
};

const processTranslations = (lang) => {
  const dirPath = path.join(i18nPath, lang);
  const filePath = path.join(i18nPath, `${lang}.json`);

  if (fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '');
  }

  const rawData = fs.readFileSync(path.join(dirPath, 'no_filename.json'));
  const translations = JSON.parse(rawData);

  const filteredTranslations = Object.keys(translations)
    .filter(hasValidPrefix)
    .reduce((obj, key) => {
      obj[key] = translations[key];
      return obj;
    }, {});

  fs.writeFileSync(filePath, JSON.stringify(filteredTranslations, null, 2));

  fs.rm(dirPath, { recursive: true, force: true }, (err) => {
    if (err) {
      console.error(`Error removing directory ${dirPath}: ${err}`);
    }
  });
};

const downloadAndFilterTranslations = async () => {
  await downloadTranslations();

  languages.forEach((lang) => {
    processTranslations(lang);
  });
};

downloadAndFilterTranslations().then((r) => console.log('Translations files created successfully!'));
