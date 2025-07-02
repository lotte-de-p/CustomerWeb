describe('storybook', () => {
  before('Clean local session and storage', () => {
    cy.visit('/');
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
