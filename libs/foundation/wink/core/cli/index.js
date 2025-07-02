/* eslint-env node */

const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

const compName = process.argv[2]?.toLowerCase();
const compsFolder = path.join('../src', 'components', process.argv[3]?.toLowerCase() || '');
const option = { templatesFolder: 'cli', sourceFolder: compsFolder, compName };

if (!compName) {
  return logMessage('error', '===>>> You need to provide a valid component name! It should be kebab case and you don\'t have to prefixed with \'wink\' (e.g: some-name)');
}

getFilesPathsInsideFolder(option['templatesFolder']).forEach(async file => {
  await makeFiles(file);
});

async function makeFiles(templateFileLocation) {
  const fileName = path.parse(templateFileLocation).name.replace('compName', option['compName']);
  const fileDir = path.parse(templateFileLocation).dir.slice(4);
  const filePath = path.join(__dirname, `./${option['sourceFolder']}/${option['compName']}/${fileDir && fileDir + '/'}${fileName}`);

  if (fs.existsSync(filePath)) {
    return logMessage('error', 'File exist check/delete file: ', filePath);
  }

  try {
    await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
    await fs.promises.writeFile(filePath, compileSourceContent(templateFileLocation));
    logMessage('success', 'File has been created:', filePath);
  } catch (err) {
    return logMessage('error', 'Something went wrong: ', err.message);
  }
}

function getFilesPathsInsideFolder(dir, result = []) {
  try {
    fs.readdirSync(dir, { withFileTypes: true }).forEach(item => {
      const fullPath = path.join(dir, item.name);
      if (item.isDirectory()) {
        getFilesPathsInsideFolder(fullPath, result);
      } else if (path.extname(fullPath) === '.hbs') {
        result.push(fullPath);
      }
    });
  } catch (error) {
    console.error(`Error reading directory ${dir}: ${error.message}`);
  }
  return result;
}

function logMessage(type, message, filePath = '') {
  const resetColor = '\x1b[0m';
  const colorCodes = {
    error: '\x1b[31m',
    success: '\x1b[34m',
  };

  if (type === 'error') {
    return console.log(colorCodes.error, message, filePath, resetColor);
  }
  if (type === 'success') {
    return console.log(colorCodes.success, message, filePath, resetColor);
  }
  return console.log(message);
}

function compileSourceContent(template) {
  const source = fs.readFileSync(template, 'utf8');
  const compiledSource = Handlebars.compile(source);
  return compiledSource(option);
}

Handlebars.registerHelper('PascalCase', function(str) {
  if (str && typeof str === 'string') {
    return str.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
  }
  return 'Something went wrong! Could check of the component you provide!';
});

Handlebars.registerHelper('capitalizeFirstWord', function(str) {
  if (str && typeof str === 'string') {
    let parts = str.split('-').map(part => part.toLowerCase());
    parts[0] = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
    return parts.join(' ');
  }
  return 'Something went wrong! Could you check the component name you provided!';
});
