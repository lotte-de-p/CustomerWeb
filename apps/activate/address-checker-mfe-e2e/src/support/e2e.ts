import './commands';
import '@cypress/code-coverage/support';

// @ts-ignore
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('import.meta')) {
    return false;
  }

  return !(
    err.message.includes('ResizeObserver loop limit exceeded') ||
    err.message.includes('ResizeObserver loop completed with undelivered notifications')
  );
});
