const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../../../', 'foundation', 'wink', 'dist');
const targetDir = path.join(
  __dirname,
  '../../../',
  'foundation',
  'wink',
  'ng',
  'node_modules',
  '@telenet',
  'wink-core'
);

fs.mkdirSync(targetDir, { recursive: true });
copyDirectory(sourceDir, targetDir);

function copyDirectory(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  fs.readdirSync(src, { withFileTypes: true }).forEach((dirent) => {
    const sourcePath = path.join(src, dirent.name);
    const destinationPath = path.join(dest, dirent.name);
    if (dirent.isDirectory()) {
      copyDirectory(sourcePath, destinationPath);
    } else {
      fs.copyFileSync(sourcePath, destinationPath);
    }
  });
}
