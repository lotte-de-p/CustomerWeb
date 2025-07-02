/// <reference types="cypress" />

describe('wink-animation', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-animation--default&viewMode=story');
  });

  it('should find the wink-animation element', () => {
    cy.get('wink-animation').should('exist');
  });

  // describe('props', () => {
  //   it('should display the animation when src prop is set', () => {
  //     cy.get('wink-animation').invoke('attr', 'src', '/assets/shared/animations/spinner.json');
  //     cy.get('wink-animation').find('.animation-wrapper').find('svg').should('be.visible');
  //   });

  //   it('should show the controls when controls prop is set', () => {
  //     cy.get('wink-animation').invoke('attr', 'controls', 'true');
  //     cy.get('wink-animation').find('.controls').should('be.visible');
  //   });

  //   it('should show be stopped after the amount of loops specified by the count', () => {
  //     cy.get('wink-animation').invoke('attr', 'count', '2');
  //     cy.wait(2000);
  //     cy.get('wink-animation').find('.animation-wrapper').should('have.attr', 'data-status', 'stop');
  //   });

  //   it('should show be still playing after a timeout when count is set to 0', () => {
  //     cy.get('wink-animation').invoke('attr', 'count', '0');
  //     cy.wait(2000);
  //     cy.get('wink-animation').find('.animation-wrapper').should('have.attr', 'data-status', 'play');
  //   });

  //   it('should be paused when autoplay prop is not set', () => {
  //     cy.get('wink-animation').invoke('removeAttr', 'autoplay');
  //     cy.get('wink-animation').find('.animation-wrapper').should('have.attr', 'data-status', 'pause');
  //   });
  // });

  // describe('controls', () => {
  //   const clickControlButton = (index) => {
  //     cy.get('wink-animation')
  //       .find('.controls')
  //       .find('wink-button')
  //       .eq(index)
  //       .then(($el) => {
  //         $el.on('click', (e) => e.preventDefault());
  //       })
  //       .click();
  //   };

  //   it('should be toggling the animation state when clicking the play/pause button', () => {
  //     cy.get('wink-animation').invoke('removeAttr', 'autoplay');
  //     clickControlButton(0);
  //     cy.get('wink-animation').find('.animation-wrapper').should('have.attr', 'data-status', 'play');
  //     clickControlButton(0);
  //     cy.get('wink-animation').find('.animation-wrapper').should('have.attr', 'data-status', 'pause');
  //   });

  //   it('should be stopped when the stop button is clicked', () => {
  //     clickControlButton(1);
  //     cy.get('wink-animation').find('.animation-wrapper').should('have.attr', 'data-status', 'stop');
  //   });
  // });
});
