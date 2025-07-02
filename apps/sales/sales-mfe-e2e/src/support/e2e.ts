import '@cypress/code-coverage/support';
import './commands';
import '@angular/compiler';

Cypress.on('uncaught:exception', (err: Error) => {
  if (err.message.includes('import.meta')) {
    return false;
  }

  return !(
    err.message.includes('ResizeObserver loop limit exceeded') ||
    err.message.includes('ResizeObserver loop completed with undelivered notifications')
  );
});
