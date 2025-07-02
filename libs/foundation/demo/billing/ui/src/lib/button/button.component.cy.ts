import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  describe(`Given a primary button`, () => {
    beforeEach(() => {
      cy.mount(`<tg-demo-button>Test</tg-demo-button>`, {
        imports: [ButtonComponent],
        declarations: [],
        componentProperties: {},
      });
    });

    it('should render', () => {
      cy.get('button').should('have.class', 'button button--primary button__size--default button__icon--position-left');
    });
  });

  describe(`Given a secondary button`, () => {
    beforeEach(() => {
      cy.mount(`<tg-demo-button rendition='secondary'>Test</tg-demo-button>`, {
        imports: [ButtonComponent],
        declarations: [],
        componentProperties: {},
      });
    });

    it('should render', () => {
      cy.get('button').should(
        'have.class',
        'button button--secondary button__size--default button__icon--position-left'
      );
    });
  });
});
