export const getGreeting = () => cy.get('h1');

export const goThroughPersonalDetailsPageAndVerify = () => {
  cy.getElement('personal-view-button').click();
  cy.getElement('first-name-field').type('John');
  cy.getElement('last-name-field').type('Porter');
  cy.getElement('email-field').type('John.Porter@telenet.be');
  cy.getElement('phone-number-field').type('0484567098');
  cy.getElement('navigation-bar-next').click();

  cy.getElement('belgian-eid-field').should('be.visible');
};
