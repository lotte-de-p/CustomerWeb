/* eslint-disable sonarjs/no-duplicate-string */
import { Product } from '@general/data-access-search';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { HardwarePriceComponent } from './hardware-price.component';

describe(HardwarePriceComponent.name, () => {
  it('renders', () => {
    cy.mount(HardwarePriceComponent, {
      imports: [TgTranslateTestingModule.forRoot(), HardwarePriceComponent],
      componentProperties: {
        product: {
          originalPrice: 500.12,
          discountedPrice: 333.33,
        } as Product,
      },
    });
  });

  it('correctly shows the price for fr', () => {
    cy.mount(HardwarePriceComponent, {
      imports: [TgTranslateTestingModule.forRoot({ language: 'fr' }), HardwarePriceComponent],
      componentProperties: {
        product: {
          originalPrice: 500.12,
          discountedPrice: 333.33,
        } as Product,
      },
    });

    cy.getElement('original-price').contains('€500,12');
    cy.getElement('price').contains('333');
    cy.getElement('price-decimals').contains(',33');
    cy.getElement('back-euro-sign').should('exist');
  });

  it('correctly shows the price for nl', () => {
    cy.mount(HardwarePriceComponent, {
      imports: [TgTranslateTestingModule.forRoot({ language: 'nl' }), HardwarePriceComponent],
      componentProperties: {
        product: {
          originalPrice: 500.12,
          discountedPrice: 333.33,
        } as Product,
      },
    });

    cy.getElement('original-price').contains('€500,12');
    cy.getElement('price').contains('333');
    cy.getElement('price-decimals').contains(',33');
    cy.getElement('front-euro-sign').should('exist');
  });

  it('correctly shows the price for en', () => {
    cy.mount(HardwarePriceComponent, {
      imports: [TgTranslateTestingModule.forRoot(), HardwarePriceComponent],
      componentProperties: {
        product: {
          originalPrice: 500.12,
          discountedPrice: 333.33,
        } as Product,
      },
    });

    cy.getElement('original-price').contains('€500.12');
    cy.getElement('price').contains('333');
    cy.getElement('price-decimals').contains('.33');
    cy.getElement('front-euro-sign').should('exist');
  });

  it('should display the original price with strike when discounted price is less than the original price', () => {
    cy.mount(HardwarePriceComponent, {
      imports: [TgTranslateTestingModule.forRoot(), HardwarePriceComponent],
      componentProperties: {
        product: {
          originalPrice: 500.12,
          discountedPrice: 333.33,
        } as Product,
      },
    });

    cy.getElement('original-price').should('exist');
    cy.getElement('original-price').contains('€500.12');
  });

  it('should not display the original price when discounted price is greater than to the original price', () => {
    cy.mount(HardwarePriceComponent, {
      imports: [TgTranslateTestingModule.forRoot(), HardwarePriceComponent],
      componentProperties: {
        product: {
          originalPrice: 300.0,
          discountedPrice: 333.33,
        } as Product,
      },
    });

    cy.getElement('original-price').should('not.exist');
  });

  it('should not display the original price when discounted price is equal to the original price', () => {
    cy.mount(HardwarePriceComponent, {
      imports: [TgTranslateTestingModule.forRoot(), HardwarePriceComponent],
      componentProperties: {
        product: {
          originalPrice: 300.0,
          discountedPrice: 300.0,
        } as Product,
      },
    });

    cy.getElement('original-price').should('not.exist');
  });
});
