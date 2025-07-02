import './commands';
import '@cypress/code-coverage/support';

Cypress.on('uncaught:exception', (err, _) => {
  if (
    err.message.includes('ResizeObserver loop limit exceeded') ||
    err.message.includes('ResizeObserver loop completed with undelivered notifications')
  ) {
    return false;
  }
});
