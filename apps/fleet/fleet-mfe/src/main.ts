/**
 * Module Federation with Webpack requires a bootstrap file to load the application.
 * @see https://webpack.js.org/concepts/module-federation/#uncaught-error-shared-module-is-not-available-for-eager-consumption
 */

import('./bootstrap').catch((err) => console.error(err));
