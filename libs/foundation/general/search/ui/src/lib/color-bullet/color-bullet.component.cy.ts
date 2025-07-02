/* eslint-disable sonarjs/no-duplicate-string */
import { ColorBulletComponent } from './color-bullet.component';

describe('ColorBulletComponent', () => {
  it('should render', () => {
    cy.mount(ColorBulletComponent, {
      componentProperties: {
        colors: ['#FFFFFF', '#000000'],
      },
    });

    cy.getElement('color-span').should('have.length', 2);
  });

  it('should not render without colors', () => {
    cy.mount(ColorBulletComponent, {
      componentProperties: {
        colors: [],
      },
    });

    cy.getElement('color-span').should('not.exist');
  });

  it('should not render with null colors', () => {
    cy.mount(ColorBulletComponent, {
      componentProperties: {
        colors: undefined,
      },
    });

    cy.getElement('color-span').should('not.exist');
  });
});
