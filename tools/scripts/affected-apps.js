const pipelineWriter = require('./pipeline-writer');

const createDynamicPipeline = (affected, version) => {
  const projects = affected?.split(/[\n,]+/).map((a) => a.trim());

  const e2eApps = projects
    .filter((project) => project.includes('-e2e'))
    .map((project) =>
      project.replace('-e2e', '')
    ); /** If we have e2e changes only, we want to trigger the mfe pipeline **/

  const apps = projects
    .filter((project) => !project.includes('e2e')) /** no e2e **/
    .filter((project) => project.includes('-mfe') || project.includes('storybook') || project === 'wink');
  /** only the apps projects **/

  const filteredProjects = [...new Set(e2eApps.concat(apps))];
  /** only unique items after merge**/
  pipelineWriter.writeDownstreamPipeline(filteredProjects, version);
};

const main = () => {
  const affected = process.env.AFFECTED;
  const version = process.env.VERSION;
  console.log(`VERSION: ${version}`);
  console.log(`PROJECTS AFFECTED: ${affected}`);
  createDynamicPipeline(affected, version);
};

main();
