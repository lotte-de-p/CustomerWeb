const mainTemplate = () => `
variables:
  GIT_OPS_BRANCH: main
  KUBECTL_IMAGE: $CI_HARBOR_REGISTRY/css-other/gitops
  KANIKO_IMAGE: $CI_HARBOR_REGISTRY/gcr/kaniko-project/executor:debug
  SONAR_IMAGE: sonarsource/sonar-scanner-cli:latest
  NODE_BUILD_IMAGE: $CI_HARBOR_REGISTRY/dockerhub/library/node:20.10
  NODE_TEST_BUILD_IMAGE: $CI_HARBOR_REGISTRY/dockerhub/library/node:20.10-alpine
  PLAYWRIGHT_TEST_IMAGE: $CI_HARBOR_REGISTRY/microsoft/playwright:v1.45.3
  DEPLOY_IMAGE: $CI_HARBOR_REGISTRY/css-other/gitops
  TZ: 'Europe/Brussels'
  GIT_VERSION: v2.30.1

stages:
  - prepare
  - quality
  - build
  - package
  - affected-apps

include:
  - local: '/tools/gitlab/templates/npm-package.yml'
  - local: '/tools/gitlab/templates/version.yml'
  - local: '/tools/gitlab/templates/build.yml'
  - local: '/tools/gitlab/templates/sonar.yml'
  - local: '/tools/gitlab/templates/harbor.yml'
  - local: '/tools/gitlab/templates/prettier.yml'
  - local: '/tools/gitlab/templates/linting.yml'
  - local: '/tools/gitlab/templates/testing.yml'
  - local: '/tools/gitlab/templates/flux-ci.yml'
  - local: '/tools/gitlab/templates/lerna.yml'

default:
  tags:
    - aws
    - shared

cache:
  - key:
      files:
        - package.json
        - package-lock.json
    policy: pull # prevent subsequent jobs from modifying cache
    paths:
      - node_modules/
`;

const emptyJobTemplate = () => `
apps-affected:none:
  stage: affected-apps
  when: always
  script:
    - echo 'No apps affected!'
  rules:
    - when: always
`;

const downstreamJobTriggerTemplate = (client, path, version) => `
${client}:
  stage: affected-apps
  when: always
  variables:
    VERSION: ${version} #pass variable to downstream pipeline
    ENVIRONMENT_PROJECT_NAME: ${client.replace('-mfe', '')}
  trigger:
    include: ${path}/.gitlab-ci.yml
    strategy: depend
  rules:
    - when: always
`;

module.exports = { emptyJobTemplate, mainTemplate, downstreamJobTriggerTemplate };
