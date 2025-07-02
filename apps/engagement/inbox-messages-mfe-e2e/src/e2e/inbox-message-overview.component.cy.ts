const INBOX_MESSAGES = '[data-cy="inbox-messages"]';

describe('Inbox Messages Overview', () => {
  beforeEach(() => cy.visit('/iframe.html?id=inbox-messages-components-inbox-messages-overview--primary'));

  it('should render inbox message overview component', () => {
    cy.intercept('PUT', '**/inbox-messages-service/v1/inbox-messages/read', { statusCode: 200 });
    cy.get(INBOX_MESSAGES).should('exist');
  });
});
