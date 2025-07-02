import '@cypress/code-coverage/support';
import './commands';

Cypress.on('uncaught:exception', (err, _) => {
  return !(
    err.message.includes('ResizeObserver loop limit exceeded') ||
    err.message.includes('ResizeObserver loop completed with undelivered notifications')
  );
});
