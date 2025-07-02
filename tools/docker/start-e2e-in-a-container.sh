#!/bin/bash

# This script starts a Docker container to run E2E tests, for a specified client project, simulating the job that is run in gitlab.
# Usage:
# ./start-e2e-in-a-container.sh [CLIENT_E2E] [TESTING_TYPE] [TESTING_FRAMEWORK]
# CLIENT_E2E: The name of the client E2E project. Default is "customer-web-billing-invoice-mfe-e2e".
# TESTING_TYPE: The type of testing to perform. Options are "e2e-integrated" or "e2e". Default is "e2e-integrated".
# TESTING_FRAMEWORK: The testing framework to use. Options are "playwright" or "cypress". Default is "playwright".

set -e

CLIENT_E2E=${1:-"customer-web-billing-invoice-mfe-e2e"}
TESTING_TYPE=${2:-"e2e-integrated"} # e2e-integrated, e2e
TESTING_FRAMEWORK=${3:-"playwright"} # playwright, cypress

# Select the appropriate Node image based on the testing framework
if [ "$TESTING_FRAMEWORK" == "cypress" ]; then
  NODE_IMAGE="cypress/included:13.6.3"
else
  NODE_IMAGE="mcr.microsoft.com/playwright:v1.45.3-jammy"
fi

function startContainer() {
  echo pwd $(pwd)
  docker run -it --rm \
    --name $CLIENT_E2E \
    -e NODE_BUILD_IMAGE=$NODE_IMAGE \
    -v "$(pwd)":/app-e2e \
    -w /app-e2e \
    $NODE_IMAGE \
    /bin/bash -c "npm ci && \
                  npx nx reset && \
                  node --max-old-space-size=8192 ./node_modules/nx/bin/nx run $CLIENT_E2E:$TESTING_TYPE --parallel"
}

function __main__() {
  startContainer
}
__main__
