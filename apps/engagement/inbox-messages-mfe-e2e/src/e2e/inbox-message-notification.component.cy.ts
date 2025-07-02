const INBOX_MESSAGES_NOTIFICATION = '[data-cy="inbox-message-notification"]';

describe('Inbox Messages Notification', () => {
  beforeEach(() => cy.visit('/iframe.html?id=inbox-messages-components-inbox-messages-notification--primary'));

  it('should render inbox message notification component', () => {
    cy.get(INBOX_MESSAGES_NOTIFICATION).should('exist');
  });
});
