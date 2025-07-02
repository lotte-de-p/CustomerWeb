/// <reference types="cypress" />

describe('wink-global-header', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-global-header--full&viewMode=story');
  });

  it('should find the wink-global-header element', () => {
    cy.get('wink-global-header').should('exist');
  });

  it('should show or hide slot customer orientation if provided or not', () => {
    cy.get('wink-global-header').find('[slot="customer-orientation"]').should('exist');

    cy.get('wink-global-header').find('[slot="customer-orientation"]').invoke('attr', 'slot', 'random-slot-name');
    cy.get('wink-global-header').find('[slot="customer-orientation"]').should('not.exist');
  });

  it('should show or hide slot intent bar if provided or not', () => {
    cy.get('wink-global-header').find('[slot="intent-bar"]').should('exist');

    cy.get('wink-global-header').find('[slot="intent-bar"]').invoke('attr', 'slot', 'random-slot-name');
    cy.get('wink-global-header').find('[slot="intent-bar"]').should('not.exist');
  });

  it('should show or hide slot customer zone if provided or not', () => {
    cy.get('wink-global-header').find('[slot="customer-zone"]').should('exist');

    cy.get('wink-global-header').find('[slot="customer-zone"]').invoke('attr', 'slot', 'random-slot-name');
    cy.get('wink-global-header').find('[slot="customer-zone"]').should('not.exist');
  });

  it('should show or hide slot language if provided or not', () => {
    cy.get('wink-global-header').find('[slot="language"]').should('exist');

    cy.get('wink-global-header').find('[slot="language"]').invoke('attr', 'slot', 'random-slot-name');
    cy.get('wink-global-header').find('[slot="language"]').should('not.exist');
  });

  it('should show or hide slot brand if provided or not', () => {
    cy.get('wink-global-header').find('[slot="brand"]').should('exist');

    cy.get('wink-global-header').find('[slot="brand"]').invoke('attr', 'slot', 'random-slot-name');
    cy.get('wink-global-header').find('[slot="brand"]').should('not.exist');
  });

  it('should show or hide slot primary navigation if provided or not', () => {
    cy.get('wink-global-header').find('[slot="main-navigation"]').should('exist');

    cy.get('wink-global-header').find('[slot="main-navigation"]').invoke('attr', 'slot', 'random-slot-name');
    cy.get('wink-global-header').find('[slot="main-navigation"]').should('not.exist');
  });

  it('should show or hide slot secondary navigation if provided or not', () => {
    cy.get('wink-global-header').find('[slot="search"]').should('exist');

    cy.get('wink-global-header').find('[slot="search"]').invoke('attr', 'slot', 'random-slot-name');
    cy.get('wink-global-header').find('[slot="search"]').should('not.exist');
  });

  it('should open flyout when clicking or hovering an element with sub-nav and assign the right aria-label', () => {
    cy.get('a[role="menuitem"]')
      .eq(2)
      .then(($el) => {
        $el.on('click', (e) => e.preventDefault());
      })
      .click();

    cy.get('a[role="menuitem"]').eq(2).should('have.class', 'active');
    cy.get('wink-flyout[flyout-id="2"]').should('exist').and('be.visible');

    cy.get('a[role="menuitem"]')
      .eq(2)
      .invoke('text')
      .then((text) => {
        cy.get('wink-flyout[flyout-id="2"]').should('have.attr', 'aria-label', text);
      });

    cy.get('a[role="menuitem"]')
      .eq(3)
      .then(($el) => {
        $el.on('mouseover', (e) => e.preventDefault());
      })
      .trigger('mouseover');

    cy.get('a[role="menuitem"]').eq(3).should('have.attr', 'aria-expanded', 'true');
    cy.get('wink-flyout[flyout-id="3"]').should('exist').and('be.visible');

    cy.get('a[role="menuitem"]')
      .eq(3)
      .invoke('text')
      .then((text) => {
        cy.get('wink-flyout[flyout-id="3"]').should('have.attr', 'aria-label', text);
      });
  });

  it('should open flyout container styles when open', () => {
    cy.get('a[role="menuitem"]')
      .eq(2)
      .then(($el) => {
        $el.on('click', (e) => e.preventDefault());
      })
      .click();

    cy.get('.flyout-container').should('exist');
    cy.get('.flyout-container').should('have.css', 'left', '0px');
    cy.get('.flyout-container').should('have.css', 'max-width', '1132px');
    cy.get('.flyout-container').should('have.css', 'position', 'absolute');
    cy.get('.flyout-container').should('have.css', 'right', '0px');

    cy.get('.flyout-container').then(async ($el) => {
      const style = getComputedStyle($el[0], '::after');

      expect(style.content).to.equal('""');
      expect(style.display).to.equal('block');
      expect(style.position).to.equal('absolute');
      expect(style.backgroundColor).to.equal('rgb(255, 255, 255)');
      expect(style.borderBottomColor).to.equal('rgb(238, 237, 237)');
      expect(style.borderBottomStyle).to.equal('solid');
      expect(style.borderBottomWidth).to.equal('1px');
      expect(style.transform).to.equal('matrix(1, 0, 0, 1, -960, 0)');
      expect(style.zIndex).to.equal('-3');
    });
  });

  it('should not open any flyout when clicking an element without sub-nav', () => {
    cy.get('a[role="menuitem"]')
      .eq(1)
      .then(($el) => {
        $el.on('click', (e) => e.preventDefault());
      })
      .click();

    cy.get('a[role="menuitem"]').eq(1).should('have.class', 'active');

    cy.get('wink-flyout').should('exist').and('not.be.visible');
  });
});

describe('wink-global-header mobile', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-global-header--full&viewMode=story');
    cy.viewport('iphone-x');
  });

  it('should find the mobile navigation row.', () => {
    cy.get('.mobile-row').should('exist').and('be.visible');
  });

  it('should check the main nav when clicking an hamburger', () => {
    cy.get('.mobile-row').find('.mobile-fly-out').should('exist').and('not.be.visible');

    cy.get('.mobile-row input').click();
    cy.get('.mobile-row').find('.mobile-fly-out').should('have.css', 'display', 'flex');

    cy.get('.mobile-row input').click();
    cy.get('.mobile-row').find('.mobile-fly-out').should('have.css', 'display', 'none');
  });

  it('should open any flyout when clicking an element with sub-nav', () => {
    cy.get('.mobile-row input').click();

    cy.get('wink-flyout[slot="mobile-flyout"][flyout-id="2"]').should('exist').and('have.css', 'display', 'none');
    cy.get('wink-flyout[slot="mobile-flyout"][flyout-id="2"]').should('exist').and('have.css', 'opacity', '0');

    cy.get('[slot="mobile-main-navigation"]')
      .shadow()
      .find('a[role="menuitem"]')
      .eq(2)
      .then(($el) => {
        $el.on('click', (e) => e.preventDefault());
      })
      .click();

    cy.get('wink-flyout[slot="mobile-flyout"][flyout-id="2"]').should('exist').and('have.css', 'display', 'contents');
    cy.get('wink-flyout[slot="mobile-flyout"][flyout-id="2"]').should('exist').and('have.css', 'opacity', '1');
  });

  it('should not open any flyout when clicking an element without sub-nav', () => {
    cy.get('.mobile-row input').click();

    cy.get('[slot="mobile-main-navigation"]')
      .shadow()
      .find('a[role="menuitem"]')
      .eq(1)
      .then(($el) => {
        $el.on('click', (e) => e.preventDefault());
      })
      .click();

    cy.get('wink-flyout[slot="mobile-flyout"][flyout-id="1"]').should('not.exist');
  });
});
describe('wink-global-header tablet', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-global-header--full&viewMode=story');
    cy.viewport(1024, 800);
  });
  it('should show the desktop version on tablet', () => {
    cy.get('wink-global-header').find('.top-row').should('have.css', 'display', 'flex');
    cy.get('wink-global-header').find('.bottom-row').should('have.css', 'display', 'flex');
    cy.get('wink-global-header').find('.mobile-row ').should('have.css', 'display', 'none');
  });
  it('should show the language desktop slot on tablet and not the mobile', () => {
    cy.get('wink-global-header').find('[slot="language"]').should('exist').and('be.visible');
    cy.get('wink-global-header').find('[slot="mobile-language"]').should('exist').and('not.be.visible');
  });
  it('should show the customer-zone desktop slot on tablet and not the mobile', () => {
    cy.get('wink-global-header').find('[slot="customer-zone"]').should('exist').and('be.visible');
    cy.get('wink-global-header').find('[slot="mobile-customer-zone"]').should('exist').and('not.be.visible');
  });

  it('should show the search desktop slot on tablet and not the mobile', () => {
    cy.get('wink-global-header').find('[slot="search"]').should('exist').and('be.visible');
    cy.get('wink-global-header').find('[slot="mobile-search"]').should('exist').and('not.be.visible');
  });
  it('the search should have a size sm attribute rendered', () => {
    cy.get('[slot="search"] wink-input').should('exist').should('have.attr', 'size', 'sm');
  });

  it('should show the call to action desktop slot on tablet and not the mobile', () => {
    cy.get('wink-global-header').find('[slot="call-to-action"]').should('exist').and('be.visible');
    cy.get('wink-global-header').find('[slot="mobile-call-to-action"]').should('exist').and('not.be.visible');
  });
  it('the search input field should have a max-width of 160px', () => {
    cy.get('[slot="search"] wink-input').should('have.css', 'width', '160px');
  });
  it.only('the button in the cta-slot should have a  font-size of 16px and a line-height of 24px', () => {
    cy.get('[slot="call-to-action"] wink-button')
      .shadow()
      .find('button')
      .should('have.css', 'font-size', '16px')
      .should('have.css', 'line-height', '24px');
  });
});
