const { getProjectNamesForGivenTargetAndTags, runExecCommand } = require('./utils');

function executeNpxCommand(projects, target, otherArgs) {
  const executeNpxCommandToExecute = `npx nx run-many --target=${target} --projects=${projects.join(',')} ${otherArgs}`;
  console.log(`executeNpxCommand: ${executeNpxCommandToExecute}`);
  if (projects.length > 0) {
    runExecCommand(executeNpxCommandToExecute);
  } else {
    console.log('No projects found for the given tag', projects);
  }
}

const main = async () => {
  const args = process.argv.splice(2);
  console.log('args', args);
  const target = args[0].split('=')[1];
  const tag = args[1]?.split?.('=')[1];
  const otherAgs = args.filter((_, index) => index > 1).join(' ');
  const projectNamesForGivenTargetAndTags = await getProjectNamesForGivenTargetAndTags(target, tag);
  console.log('Project names for given target and tag:', projectNamesForGivenTargetAndTags);
  executeNpxCommand(projectNamesForGivenTargetAndTags, target, otherAgs);
};

main();
