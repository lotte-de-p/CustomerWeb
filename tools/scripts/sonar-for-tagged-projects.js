const { mapProjectsToSourceRoot, getProjectsForGivenTag, runExecCommand, findPathsForAllFiles } = require('./utils');
async function clearExistingDirectories() {
  return new Promise((resolve) => {
    runExecCommand('rm -rf coverage-final nyc-merged-coverage').on('close', resolve);
  });
}
async function createCoverageFinalFolder() {
  return new Promise((resolve) => {
    runExecCommand('mkdir coverage-final').on('close', resolve);
  });
}

async function copyCoverageFile(path, index) {
  return new Promise((resolve) => {
    const child = runExecCommand(`cp ${path} coverage-final/coverage-final-${index}.json`);
    child.on('close', resolve);
  });
}

async function mergeCoverage() {
  return new Promise((resolve) => {
    const process = runExecCommand(
      './node_modules/nyc/bin/nyc.js merge coverage-final nyc-merged-coverage/nyc-merged-coverage.json'
    );
    process.on('close', resolve);
  });
}

async function generateIstanbulReport() {
  return new Promise((resolve) => {
    const process = runExecCommand(
      './node_modules/nyc/bin/nyc.js report --reporter=lcovonly --reporter=html-spa --temp-dir nyc-merged-coverage --report-dir nyc-merged-coverage'
    );
    process.on('close', resolve);
  });
}

async function executeSonarCommand(projects, otherArgs) {
  const coverageJsonPaths = findPathsForAllFiles('coverage-final.json').split(',');

  if (coverageJsonPaths.length) {
    await clearExistingDirectories();
    await createCoverageFinalFolder();

    coverageJsonPaths.map(async (path, index) => await copyCoverageFile(path, index));

    await mergeCoverage();
    await generateIstanbulReport();
    const sonarCmd = `sonar-scanner -Dsonar.sources=${projects.join(
      ','
    )} -Dsonar.javascript.lcov.reportPaths=./nyc-merged-coverage/lcov.info ${otherArgs}`;

    console.log(`Executing sonar command: ${sonarCmd}`);

    if (projects.length > 0) {
      runExecCommand(sonarCmd);
    } else {
      console.log('No project found for the given tag', projects);
    }
  }
}

const main = async () => {
  const [tagArg, ...otherArgs] = process.argv.splice(2);
  const tag = tagArg?.split('=')[1];

  const projectsForGivenTag = await getProjectsForGivenTag(tag);
  console.log('projectsForGivenTag:', projectsForGivenTag);

  const projectSourceRoots = mapProjectsToSourceRoot(projectsForGivenTag);
  console.log('source.roots', projectSourceRoots);

  await executeSonarCommand(projectSourceRoots, otherArgs.join(' '));
};

main();
