import { ProductFacade, Product } from '@demo/product/data-access';
import { ProductSpecificationsComponent } from './product-specifications.component';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { createOutputSpy } from 'cypress/angular';

describe('ProductSpecificationsComponent', () => {
  const product = new Product();
  product.status = 'ACTIVE';
  product.productInfo = new OmapiProduct();
  product.identifier = '0000000000';
  product.productType = 'mobile';
  product.isMultipleDTV = false;
  product.productInfo.rates = [
    {
      cost: '123',
      unit: 'meh',
      currency: 'Euro',
      isTypeData: false,
      isTypeVoice: false,
      type: 'VOICE',
    },
  ];

  beforeEach(() => {
    cy.mount(ProductSpecificationsComponent, {
      imports: [
        TgTranslateTestingModule.forRoot({
          language: 'nl',
          translations: {
            'ng.product-overview.lbl.voice': 'Voice',
            'ng.product-overview.text.specifications-for-base-zero-value': 'Price ',
            'ng.product-overview.text.specifications-for-base-zero-unit ': 'Unit',
          },
        }),
      ],
      providers: [ProductFacade],
      componentProperties: {
        product,
        isBundle: false,
        manageOptions: createOutputSpy('manageOptions'),
      },
    });
  });

  describe(`When the details are shown`, () => {
    beforeEach(() => {
      cy.get('[data-testid="collapsible-header"]').click();
    });

    describe(`When clicking on manage options`, () => {
      it(`should emit a manageOptions event`, () => {
        cy.get('[data-testid="manageOptions"]').click();
        cy.get('@manageOptions').should('have.been.called');
      });
    });
  });
});
