import { RestrictedProductComponent } from './restricted-product.component';
import { TranslateModule } from '@ngx-translate/core';
import { elements } from '../../../cypress/support/constants/elements.const';

describe('RestrictedProductComponent', () => {
  it('should render', () => {
    cy.mount(RestrictedProductComponent, {
      imports: [TranslateModule.forRoot()],
    });
  });

  it('should display icon', () => {
    cy.mount(RestrictedProductComponent, { imports: [TranslateModule.forRoot()] });
    cy.getElement(elements.RESTRICTED_PRODUCT_ICON).should('exist');
  });
});
