const { createProjectGraphAsync, readProjectsConfigurationFromProjectGraph } = require('@nrwl/devkit');
const { join } = require('path');
const { execSync, spawn, exec } = require('child_process');

// returns an array or project names
const getAffectedLibrariesNames = async (target, tag) => {
  if (!tag) {
    console.error(`Missing tag`);
    process.exit(1);
  }
  const projectGraph = await createProjectGraphAsync();
  const projectsConfigurations = readProjectsConfigurationFromProjectGraph(projectGraph);
  const printAffected = execSync('npx nx print-affected');
  const projects = JSON.parse(printAffected.toString().trim());
  let affectedProjects = projects['projects'].filter(
    (project) => projectsConfigurations.projects[project].targets[target]
  );
  if (tag) {
    affectedProjects = affectedProjects.filter((project) =>
      projectsConfigurations.projects[project].tags.includes(tag)
    );
  }
  return affectedProjects;
};

// returns an array of project objects
const getProjectsForGivenTag = async (tag) => {
  if (!tag) {
    console.error(`Missing tag :s`);
    process.exit(1);
  }
  const projectGraph = await createProjectGraphAsync();
  const projectsConfigurations = readProjectsConfigurationFromProjectGraph(projectGraph);
  const projectNames = Object.keys(projectsConfigurations.projects);
  if (tag) {
    return projectNames
      .filter((projectName) => projectsConfigurations.projects[projectName].tags.includes(tag))
      .map((projectName) => projectsConfigurations.projects[projectName]);
  }
  return [];
};

const getProjectNamesForGivenTargetAndTags = async (target, tag) => {
  if (!target) {
    console.error(`Missing target`);
    process.exit(1);
  }
  return Object.entries(await getProjectsForGivenTag(tag))
    .filter(([_, project]) => project.targets[target])
    .map(([_, project]) => project.name);
};

const verifyProjectTagsAreCorrect = async () => {
  const projectGraph = await createProjectGraphAsync();
  const { projects } = readProjectsConfigurationFromProjectGraph(projectGraph);
  const allProjects = Object.values(projects);

  // Define a set of project names to exclude
  const excludedProjects = new Set(['wink', 'wink-core', 'monorepo-storybook', 'ionic-portal']);

  // Filter projects that do not include 'type:api' or 'type:plugin' in their tags and are not in the excluded list
  const projectNamesWithoutDefaultTags = allProjects
    .filter(
      (project) =>
        !project.tags.includes('type:api') &&
        !project.tags.includes('type:plugin') &&
        !excludedProjects.has(project.name)
    )
    .map((project) => project.name);

  // Filter for projects with '-mfe' in the name and excluding 'e2e'
  const mfeProjectNames = projectNamesWithoutDefaultTags.filter(
    (name) => name.includes('-mfe') && !name.includes('e2e')
  );

  console.log('mfeProjectNames:', mfeProjectNames);

  // Collect projects that have tags referencing the MFE names
  const projectsThatHaveMFETag = mfeProjectNames.flatMap((mfeName) =>
    allProjects.filter((project) => project.tags.includes(`scope:${mfeName}`)).map((project) => project.name)
  );

  console.log('projectsThatHaveMFETag:', projectsThatHaveMFETag);

  // Determine projects without corresponding MFE tags
  const projectsWithoutTags = projectNamesWithoutDefaultTags.filter(
    (name) => !name.includes('e2e') && !projectsThatHaveMFETag.includes(name)
  );

  if (projectsWithoutTags.length) {
    console.error('Some projects have been found with incorrect tags:', projectsWithoutTags);
    process.exit(1);
  }
};

const mapProjectsToSourceRoot = (projects) => Object.entries(projects).map(([_, project]) => `./${project.root}/`);

const findPathsForAllFiles = (fileName) => {
  return execSync(`find . -print | grep -i ${fileName}`)
    .toString()
    .split('\n')
    .filter(Boolean)
    .filter((path) => !path?.includes('node_modules'))
    .join(',');
};

function handleError(error, message) {
  const isUnknownCompilerOption = error?.toString().includes('Unknown compiler option');
  if (error && !isUnknownCompilerOption) {
    const RED = '\033[0;31m';
    const BRIGHT_MAGENTA = '\033[1;95m';
    const NC = '\033[0m'; //# No Color
    console.log(message, error.toString());
    console.error(`${RED}Stacktrace: ${BRIGHT_MAGENTA}${error?.toString()}${NC}`);
  }
}

const runExecCommand = (cmd) => {
  const parts = cmd.split(' ');
  const command = parts[0];
  const args = parts.slice(1);

  const child = spawn(command, args);

  child.stdout.on('data', (data) => {
    console.log(`${data}`);
  });

  child.stderr.on('data', (error) => {
    handleError(error, 'On stderr error":');
  });

  child.on('error', (error) => {
    handleError(error, 'On error:');
    process.exit(1);
  });

  child.on('close', (code, signal) => {
    if (code !== 0) {
      console.error(`>------------------> Exited with code: ${code}`);
      console.error(`>------------------> Exited signal: ${signal}`);
      process.exit(code);
    } else {
      console.log(`Execution completed. Exit signal: ${signal}`);
    }
  });
  return child;
};

const runExec = (cmd) => {
  return exec(cmd, (error, stdout, stderr) => {
    console.log(`stdout: ${stdout}`);
    if (stderr) {
      console.error(`stderr: ${stderr}`);
    }
    if (error) {
      const RED = '\033[0;31m';
      const RED_BACKGROUND = '\033[0;101m';
      const BRIGHT_MAGENTA = '\033[1;95m';
      const YELLOW = '\033[1;33m';
      const NC = '\033[0m'; //# No Color

      console.error(`>------------------> exec error message:${RED_BACKGROUND}${error.message} ${NC}`);
      console.error(`${RED}Stacktrace: ${BRIGHT_MAGENTA}${error.stack}${NC}`);
      console.error(`${RED}error obj: ${YELLOW}${JSON.stringify(error)}${NC}`);
      process.exit(1);
    }
  });
};

module.exports = {
  mapProjectsToSourceRoot,
  getProjectsForGivenTag,
  getProjectNamesForGivenTargetAndTags,
  getAffectedLibrariesNames,
  verifyProjectTagsAreCorrect,
  runExecCommand,
  runExec,
  findPathsForAllFiles,
};
