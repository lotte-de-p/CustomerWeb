const path = require('path');
const fs = require('fs');
const { optimize } = require('svgo');

const iconsDir = 'libs/foundation/wink/core/src/assets/telenet/icons';
const inputFolder = `${iconsDir}/originals`;
const outputFolder = `${iconsDir}/icons-font`;
const outputIconNamesFile = 'libs/foundation/wink/core/src/assets/shared/data/icons-name.data.ts';

if (!fs.existsSync(outputFolder)) {
  fs.mkdir(outputFolder, { recursive: true }, () => {
    return console.log('\x1b[30m', '\x1b[44m', `Folder has been created: ${outputFolder}.`, '\x1b[0m');
  });
}

optimizeSvgFiles(inputFolder);
writeIconNamesToFile(outputIconNamesFile, getIconsNamesFromDirectory(inputFolder), true);

module.exports = {
  inputDir: inputFolder,
  outputDir: outputFolder,
  fontTypes: ['ttf', 'woff', 'woff2', 'eot'],
  assetTypes: ['css'],
  name: 'telenet-icons-font',
  templates: {
    css: `${iconsDir}/templates/css.hbs`,
  },
  getIconId: ({ basename }) => basename,
};

function getIconsNamesFromDirectory(directoryPath, iconsByCategory = {}, currentCategory = '') {
  const items = fs.readdirSync(directoryPath);

  items.forEach((item) => {
    const itemPath = path.join(directoryPath, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory()) {
      const newCategory = currentCategory.length > 0 ? `${currentCategory}-${item}` : item;
      getIconsNamesFromDirectory(itemPath, iconsByCategory, newCategory);
    } else {
      const categoryKey = currentCategory.length > 0 ? currentCategory : 'default';
      if (!iconsByCategory[categoryKey]) {
        iconsByCategory[categoryKey] = [];
      }
      iconsByCategory[categoryKey].push(path.parse(item).name);
    }
  });

  return iconsByCategory;
}

function optimizeSvgFiles(directoryPath) {
  const items = fs.readdirSync(directoryPath);

  items.forEach((item) => {
    const itemPath = path.join(directoryPath, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory()) {
      optimizeSvgFiles(itemPath);
    } else if (path.extname(item) === '.svg') {
      const svgContent = fs.readFileSync(itemPath, 'utf8');
      const optimizedSvg = optimize(svgContent, { path: itemPath, multipass: false }).data;
      fs.writeFileSync(itemPath, optimizedSvg);
      return console.log('\x1b[30m', '\x1b[44m', `Optimized: ${itemPath}`, '\x1b[0m');
    }
  });
}

function writeIconNamesToFile(filePath, iconsNamesObject, grouped = false) {
  const content = `export const ICONS_NAMES${grouped ? '_GROUPED' : ''}: { [key: string]: string[] } = ${JSON.stringify(iconsNamesObject, null, 2)};`;
  fs.writeFileSync(filePath, content);
}
