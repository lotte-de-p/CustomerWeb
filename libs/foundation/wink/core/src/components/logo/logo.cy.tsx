/// <reference types="cypress" />

describe('logo', () => {
  beforeEach(() => {
    cy.visit('iframe.html?id=components-logo--default&viewMode=story');
  });

  describe('Element', () => {
    it('should find the wink-logo element', () => {
      cy.get('wink-logo').should('exist');
    });
  });

  describe('props', () => {
    it('should render a appearance when set but it should load telenet by default', () => {
      cy.get('wink-logo').find('img').should('attr', 'src', '/assets/shared/logos/telenet/telenet-yellow.svg');
      cy.get('wink-logo').invoke('attr', 'appearance', 'base');
      cy.get('wink-logo').find('img').should('attr', 'src', '/assets/shared/logos/base/base.svg');
    });
  });
  describe('Extra logic', () => {
    it('should load the telenet logo with mobile src with source element', () => {
      cy.get('wink-logo').find('source').should('exist');
      cy.get('wink-logo').find('source').should('attr', 'srcset', '/assets/shared/logos/telenet/telenet-yellow.svg');

      cy.get('wink-logo').invoke('attr', 'appearance', 'base');
      cy.get('wink-logo').find('img').should('attr', 'src', '/assets/shared/logos/base/base.svg');
      cy.get('wink-logo').find('source').should('not.exist');
    });
    it('should load the telenet logo with alt-text', () => {
      cy.get('wink-logo').find('img').should('attr', 'alt', 'logo telenet');
    });
  });
});

describe('base appearance', () => {
  beforeEach(() => {
    cy.visit('iframe.html?id=components-logo--base-logos&viewMode=story');
  });
  describe('appearance', () => {
    it('should find the wink-logo with appearance default from base: base', () => {
      cy.get('wink-logo').should('attr', 'appearance', 'base');
    });
  });
});

describe('entertainment play appearance', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-logo--entertainment-play-logos&viewMode=story');
  });
  describe('appearance', () => {
    it('should find the wink-logo with appearance default from entertainment-play: goplay', () => {
      cy.get('wink-logo').should('attr', 'appearance', 'goplay');
    });
  });
});

describe('entertainment streaming appearance', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-logo--entertainment-streaming-logos&viewMode=story');
  });
  describe('appearance', () => {
    it('should find the wink-logo with appearance default from entertainment-streaming: netflix', () => {
      cy.get('wink-logo').should('attr', 'appearance', 'netflix');
    });
  });
});
