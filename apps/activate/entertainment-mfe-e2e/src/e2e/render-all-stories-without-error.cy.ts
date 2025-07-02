describe('storybook', () => {
  before('cleaning local session and storage', () => {
    cy.visit('/');
  });
  it('should loop through all stories', () => {
    cy.get('button[data-nodetype="component"]')
      .should('be.visible')
      .each(($sideButton) => {
        cy.wrap($sideButton)
          .then((button) => cy.visit(`?path=/story/${button.get(0).id}`))
          .componentHasLoaded();

        cy.get('a[href*="path=/story"]')
          .should('be.visible')
          .each(($storyListItem) => {
            cy.wrap($storyListItem).as('storyListItem');
            cy.get('@storyListItem').click();
            cy.get('@storyListItem').componentHasLoaded();
          });
      });
  });
});
