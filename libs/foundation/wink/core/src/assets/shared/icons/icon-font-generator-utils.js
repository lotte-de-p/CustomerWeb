const path = require('path');
const fs = require('fs');
const { optimize } = require('svgo');

function createFolderIfNotExist(folderPath) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdir(folderPath, { recursive: true }, () => {
      console.log('\x1b[30m', '\x1b[44m', `Folder has been created: ${folderPath}.`, '\x1b[0m');
    });
  }
}

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
      console.log('\x1b[30m', '\x1b[44m', `Optimized: ${itemPath}`, '\x1b[0m');
    }
  });
}

function writeIconNamesToFile(filePath, iconsNamesObject, grouped = false) {
  const content = `export const ICONS_NAMES${grouped ? '_GROUPED' : ''}: { [key: string]: string[] } = ${JSON.stringify(iconsNamesObject, null, 2)};`;
  fs.writeFileSync(filePath, content);
}

module.exports = {
  writeIconNamesToFile,
  getIconsNamesFromDirectory,
  optimizeSvgFiles,
  createFolderIfNotExist,
};
