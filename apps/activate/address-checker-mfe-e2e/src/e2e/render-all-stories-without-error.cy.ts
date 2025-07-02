describe('storybook', () => {
  before('Clean local session and storage', () => {
    cy.visit('/');
    cy.intercept('GET', '**/oauth/userdetails', {
      statusCode: 200,
      body: {
        customer_number: '1202407495',
        identity_id: '41111893388',
      },
    }).as('loginCall');
  });
  it('loop through all stories', () => {
    cy.get('button[data-nodetype="component"]')
      .should('be.visible')
      .each(($sideButton) => {
        cy.wrap($sideButton)
          .then((button) => cy.visit(`?path=/story/${button.get(0).id}`))
          .componentHasLoaded();
        cy.get('a[href*="path=/story"]')
          .should('be.visible')
          .each(($storyListItem) => {
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wrap($storyListItem.click()).wait(50).componentHasLoaded();
          });
      });
  });
});
