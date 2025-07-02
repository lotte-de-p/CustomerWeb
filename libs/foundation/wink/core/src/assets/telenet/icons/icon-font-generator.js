const createFolderIfNotExist = require('../../shared/icons/icon-font-generator-utils.js').createFolderIfNotExist;
const optimizeSvgFiles = require('../../shared/icons/icon-font-generator-utils.js').optimizeSvgFiles;
const getIconsNamesFromDirectory =
  require('../../shared/icons/icon-font-generator-utils.js').getIconsNamesFromDirectory;
const writeIconNamesToFile = require('../../shared/icons/icon-font-generator-utils.js').writeIconNamesToFile;

const iconsDirShared = 'libs/foundation/wink/core/src/assets/shared';
const fontName = 'telenet-icons-font';
const iconsDir = 'libs/foundation/wink/core/src/assets/telenet/icons';
const inputFolder = `${iconsDir}/originals`;
const outputFolder = `${iconsDir}/icons-font`;

createFolderIfNotExist(outputFolder);
processIcons();

function processIcons() {
  optimizeSvgFiles(inputFolder);

  const outputIconNamesFile = `${iconsDirShared}/data/icons-name.data.ts`;

  writeIconNamesToFile(outputIconNamesFile, getIconsNamesFromDirectory(inputFolder), true);

  module.exports = {
    inputDir: inputFolder,
    outputDir: outputFolder,
    fontTypes: ['ttf', 'woff', 'woff2', 'eot'],
    assetTypes: ['css'],
    name: fontName,
    templates: {
      css: `${iconsDirShared}/icons/templates/css.hbs`,
    },
    getIconId: ({ basename }) => basename,
  };
}
