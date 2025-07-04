// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// When a command from ./commands is ready to use, import with `import './commands'` syntax
import './commands';
import '@cypress/code-coverage/support';

// @ts-ignore
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('import.meta')) {
    return false;
  }

  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
});
