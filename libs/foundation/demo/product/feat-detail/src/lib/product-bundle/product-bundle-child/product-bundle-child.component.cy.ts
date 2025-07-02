import { ProductFacade, Product } from '@demo/product/data-access';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { ProductBundleChildComponent } from './product-bundle-child.component';
import { createOutputSpy } from 'cypress/angular';

describe('ProductBundleChildComponent', () => {
  describe(`When a product is given`, () => {
    const product = new Product();
    product.status = 'ACTIVE';
    product.productInfo = new OmapiProduct();
    product.identifier = '0000000000';
    product.productType = 'mobile';
    product.isMultipleDTV = false;
    product.productInfo.name = 'Mobile';
    product.isUnderMove = false;
    product.productInfo.isYupProduct = false;
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
      cy.mount(ProductBundleChildComponent, {
        imports: [
          TgTranslateTestingModule.forRoot({
            language: 'nl',
            translations: {},
          }),
        ],
        providers: [ProductFacade],
        componentProperties: {
          productOrOption: { product },
          hasSalesScope: true,
          canManageProductHolding: true,
          manageBundleOptions: createOutputSpy('manageBundleOptionsSpy'),
        },
      });
    });

    it('should render', () => {
      cy.get('[data-testid="bundleProductName"]').should('contain.text', 'Mobile');
    });

    describe(`When clicking on manage options`, () => {
      it(`should emit an manageBundleOptions event`, () => {
        cy.get('[data-testid="manageOptions"]').click();
        cy.get('@manageBundleOptionsSpy').should('have.been.calledWith', {
          planIdentifier: product.identifier,
          product,
        });
      });
    });
  });
  describe(`When an option is given`, () => {
    const productInfo = new OmapiProduct();
    const price = {
      currency: 'Euro',
      recurrentDiscounted: '0',
      recurrentTotal: '0',
      recurrentDiscount: '0',
      taxInclPrices: {
        currency: 'Euro',
        recurrentDiscounted: '0',
        recurrentTotal: '0',
        recurrentDiscount: '0',
      },
    };
    const option = {
      productInfo,
      status: 'ACTIVE',
      productType: '',
      label: 'foo',
      price,
      activeOptions: '',
    };

    beforeEach(() => {
      cy.mount(ProductBundleChildComponent, {
        imports: [
          TgTranslateTestingModule.forRoot({
            language: 'nl',
            translations: {},
          }),
        ],
        providers: [ProductFacade],
        componentProperties: {
          productOrOption: { option },
          hasSalesScope: true,
          canManageProductHolding: true,
        },
      });
    });

    it('should render', () => {
      cy.get('[data-testid="bundleProductName"]').should('contain.text', '');
    });
  });
});
