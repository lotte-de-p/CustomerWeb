const fs = require('fs');
const path = require('path');

const { sourceObj } = require('./dt-object.js');
const logger = require('../logger');

const srcDirectoryPath = '../../src';
const tokensDirectoryPath = '../../../dist/dist/assets/shared/tokens';

const foundKeys = new Set();
const foundValues = new Set();

function searchInFiles(dir, target, setToStore) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      searchInFiles(fullPath, target, setToStore);
    } else {
      const content = fs.readFileSync(fullPath, 'utf8');

      if (content.includes(target)) {
        setToStore.add(target);
      }
    }
  });
}

function removeFoundKeysAndValues() {
  for (let [key, value] of Object.entries(sourceObj)) {
    if (!foundKeys.has(key) || !foundValues.has(value)) {
      delete sourceObj[key];
    }
  }
}

function replaceKeysWithValuesInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  for (let [key, value] of Object.entries(sourceObj)) {
    if (content.includes(key)) {
      content = content.replace(new RegExp(key, 'g'), value);
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    logger.success(`[Replaced keys with values in file] ${filePath}`);
  }
}

function replaceKeysWithValuesInDirectory(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      replaceKeysWithValuesInDirectory(fullPath);
    } else {
      replaceKeysWithValuesInFile(fullPath);
    }
  });
}

function findKeysAndValues() {
  const srcDir = path.join(__dirname, srcDirectoryPath);
  const tokensDir = path.join(__dirname, tokensDirectoryPath);

  Object.keys(sourceObj).forEach((key) => {
    searchInFiles(srcDir, key, foundKeys);
  });

  Object.values(sourceObj).forEach((value) => {
    searchInFiles(tokensDir, value, foundValues);
  });

  logger.errorBg('The following NEW values were not inside SRC folder:');
  for (let key of Object.keys(sourceObj)) {
    if (!foundKeys.has(key)) {
      logger.error(`[Not found key] ${key}`);
    }
  }

  logger.warnBg('The following NEW values were not inside TOKENS folder:');
  for (let [key, value] of Object.entries(sourceObj)) {
    if (!foundValues.has(value)) {
      logger.warn(`[Not found value] ${key}`);
    }
  }

  removeFoundKeysAndValues();
}

findKeysAndValues();

replaceKeysWithValuesInDirectory(srcDirectoryPath);
