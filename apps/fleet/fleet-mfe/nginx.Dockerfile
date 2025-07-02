ARG CI_HARBOR_REGISTRY

FROM ${CI_HARBOR_REGISTRY}/base-images/base-ubi9-nginx120:latest


ARG BUILD_VERSION
ARG BUILD_DATE
ARG PROJECT_DIST_FOLDER
ARG STORYBOOK_DIST_FOLDER
# Copy the build output to replace the default nginx contents.
COPY ${PROJECT_DIST_FOLDER}/ /usr/share/nginx/html/
# Copy the build output to replace the default nginx contents.

# No public Angular frontend exposure
RUN ls /usr/share/nginx/html/
RUN rm /usr/share/nginx/html/index.html
RUN rm /usr/share/nginx/html/main.*.js
RUN rm /usr/share/nginx/html/main.*.map

# Copy custom nginx configuration to replace the default configuration
COPY apps/fleet/fleet-mfe/nginx.conf /etc/nginx/nginx.conf
COPY apps/fleet/fleet-mfe/nginx.local.conf /etc/nginx/nginx.local.conf

RUN sed -i "s/\${BUILD_VERSION}/${BUILD_VERSION}/g"  /usr/share/nginx/html/version.json && \
 sed -i "s/\${BUILD_DATE}/${BUILD_DATE}/g"  /usr/share/nginx/html/version.json

# Expose port 80
EXPOSE 80

CMD nginx
