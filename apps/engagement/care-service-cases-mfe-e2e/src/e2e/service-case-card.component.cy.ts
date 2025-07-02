const OPEN_CARD_SERVICE_CASES = '[data-cy="service-case-open-cases"]';

describe('care-service-cases-mfe', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/oauth/userdetails', {
      statusCode: 200,
      body: {
        customer_number: '1202407495',
        identity_id: '41111893388',
        username: 'automation.abcd.dgyhl@staff.telenet.be',
        login_alias: '01fd69e2-8af2-4565-9cf4-4a983dbbaef0',
        first_name: 'Louis',
        last_name: 'Dam',
        scopes: ['customeraccount'],
        explicit_login: true,
        narrowed_scope: false,
        bss_system: 'NETCRACKER',
        auth_age: 1340,
        is_pid: true,
        role: 'MANAGER',
      },
    });
  });

  it('should render the card without open service cases', () => {
    cy.visit('/iframe.html?id=service-cases-components-service-case-card--no-open-cases');
    cy.get(OPEN_CARD_SERVICE_CASES).should('not.exist');
  });

  it('should render the card with open service cases', () => {
    cy.visit('/iframe.html?id=service-cases-components-service-case-card--open-cases');
    cy.get(OPEN_CARD_SERVICE_CASES).should('exist');
    cy.get(OPEN_CARD_SERVICE_CASES).should('contain.text', '6 open cases');
  });

  it('should render the card with one open service case', () => {
    cy.visit('/iframe.html?id=service-cases-components-service-case-card--one-open-case');
    cy.get(OPEN_CARD_SERVICE_CASES).should('exist');
    cy.get(OPEN_CARD_SERVICE_CASES).should('contain.text', '1 open case');
  });
});
