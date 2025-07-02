const fs = require('fs');
const templates = require('./templates');
const { execSync } = require('child_process');

const writeDownstreamPipeline = (affectedClients, version) => {
  console.log(`Creating pipelines for ${affectedClients}`);
  if (!affectedClients.length) {
    writeEmptyDownstreamPipeline();
    return;
  }
  writeAffectedClientsDownstreamPipeline(affectedClients, version);
};

const writeEmptyDownstreamPipeline = () => {
  const content = templates.mainTemplate().concat(templates.emptyJobTemplate());
  writeFile(content);
};

const writeAffectedClientsDownstreamPipeline = (affectedClients, version) => {
  const triggers = affectedClients
    .map((client) => {
      const { root } = JSON.parse(execSync(`npx nx show project ${client}`, { encoding: 'utf-8' }));
      return { path: root, client };
    })
    .map(({ client, path }) => templates.downstreamJobTriggerTemplate(client, path, version))
    .join('\n');
  const content = templates.mainTemplate().concat(triggers);
  writeFile(content);
};

const writeFile = (content) => {
  fs.writeFileSync('affected-apps-ci.yml', content);
};

module.exports = { writeDownstreamPipeline };
