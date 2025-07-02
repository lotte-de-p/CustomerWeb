#!/bin/bash

#####
# Script to run your micro-frontend as a docker image like the one that is deployed on AWS
# Usage: sh start-micro-frontend-container.sh LEANIX_APP_FOLDER MFE_APP MFE_PORT [--with-storybook] [--debug]
# Ex.: sh ./start-micro-frontend-container.sh foundation general-mfe 80
# LEANIX_APP_FOLDER: the folder containing the micro-frontend application, this option is required
# MFE_APP: the micro-frontend application, this option is required
# MFE_PORT: the micro-frontend application port where you want to run the docker image, this option is required
# --with-storybook: build the storybook application, this option is optional
# --debug: log only when this flag is enabled, this option is optional
#####

set -e

LEANIX_APP_FOLDER=$1
MFE_APP=$2
MFE_PORT=$3
STORYBOOK_ARGUMENT=$4
DEBUG_ARGUMENT=$5
NGINX_DOCKER=""

# Define variables for repeated strings
HARBOR_REGISTRY="harbor.cmt.apps.telenet.be"
DOCKER_IMAGE_NAME="$HARBOR_REGISTRY/css-frontend/$LEANIX_APP_FOLDER/$MFE_APP:local"
PROJECT_DIST_PATH="dist/apps/$LEANIX_APP_FOLDER/$MFE_APP"
STORYBOOK_DIST_PATH="dist/storybook/$LEANIX_APP_FOLDER/$MFE_APP"
function setupScriptVariables() {
  if [ -z "$LEANIX_APP_FOLDER" ]; then
    echo "No LeanIX app folder defined"
    exit 1
  elif [ -z "$MFE_APP" ]; then
    echo "No micro-frontend app defined"
    exit 1
  elif [ -z "$MFE_PORT" ]; then
    echo "No port defined"
    exit 1
  else
    NGINX_DOCKER="Dockerfile.nginx"
    debug "setDockerNginxVariable to $NGINX_DOCKER"
  fi

  debug "App: $MFE_APP"
  debug "Port: $MFE_PORT"
}

function deleteBuildSources() {
  debug "deleting $PROJECT_DIST_PATH"
  debug "deleting $STORYBOOK_DIST_PATH"
  rm -rf "dist/apps/$LEANIX_APP_FOLDER/$MFE_APP"
  rm -rf "dist/storybook/$LEANIX_APP_FOLDER/$MFE_APP"
}

function buildSource() {
  debug "BUILD: $MFE_APP"
  npx nx run "$MFE_APP:build:production"
  if [ "$STORYBOOK_ARGUMENT" == "--with-storybook" ]; then
    debug "BUILD: $MFE_APP [storybook]"
    npx nx run "$MFE_APP:build-storybook"
  else
    mkdir -p "$STORYBOOK_DIST_PATH"
  fi
}

function buildImage() {
  docker build . -f "../../apps/$LEANIX_APP_FOLDER/$MFE_APP/$NGINX_DOCKER" \
    --build-arg BUILD_DATE=$(date +"%s") \
    --build-arg CI_HARBOR_REGISTRY="$HARBOR_REGISTRY" \
    --build-arg CLIENT_PROJECT="$MFE_APP" \
    --build-arg PROJECT_DIST_FOLDER="$PROJECT_DIST_PATH" \
    --build-arg STORYBOOK_DIST_FOLDER="$STORYBOOK_DIST_PATH" \
    --build-arg BUILD_VERSION=0.0.angular \
    -t "$DOCKER_IMAGE_NAME"
}

function stopContainer() {
  debug "stopContainer $MFE_APP"
  docker kill "$MFE_APP" || true
  docker rm "$MFE_APP" || true
}

function startContainer() {
  docker run -d --name "$MFE_APP" -p "$MFE_PORT:80" "$DOCKER_IMAGE_NAME"
}

function debug() {
  if [ "$DEBUG_ARGUMENT" == "--debug" ]; then
    echo "$1"
  fi
}

function __main__() {
  setupScriptVariables
  stopContainer
  deleteBuildSources
  buildSource
  buildImage
  startContainer
}
__main__
