const { getAffectedLibrariesNames, runExecCommand, getProjectsForGivenTag } = require('./utils');

function executeNpxCommand(projectNames, target, otherArgs) {
  const executeNpxCommandToExecute = `npx nx run-many --target=${target} --projects=${projectNames} ${otherArgs}`;
  console.log(`executeNpxCommand: ${executeNpxCommandToExecute}`);
  if (projectNames.length > 0) {
    runExecCommand(executeNpxCommandToExecute);
  } else {
    console.log('No projects found for the given tag', projectNames);
  }
}

const main = async () => {
  const args = process.argv.splice(2);
  const target = args[0].split('=')[1];
  const tag = args[1]?.split?.('=')[1];
  const otherAgs = args.filter((_, index) => index > 1).join(' ');
  let projectNames = await getAffectedLibrariesNames(target, tag);
  console.log('Affected libs', projectNames);
  if (!projectNames?.length) {
    console.log('No projected affected by the changes, All projects found for given tags will be used', tag);
    projectNames = (await getProjectsForGivenTag(tag)).map((project) => project?.name).join(',');
    console.log('Projects found for given tag:', projectNames);
  }
  executeNpxCommand(projectNames, target, otherAgs);
};

main();
