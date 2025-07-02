import { ProductFacade, Product } from '@demo/product/data-access';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { ProductBundleComponent } from './product-bundle.component';
import { createOutputSpy } from 'cypress/angular';

describe('ProductBundleComponent', () => {
  const product = new Product();
  product.status = 'ACTIVE';
  product.productInfo = new OmapiProduct();
  product.identifier = '0000000000';
  product.productType = 'mobile';
  product.isMultipleDTV = false;
  product.productInfo.name = 'Mobile';
  product.isUnderMove = false;
  product.productInfo.name = 'Test product';
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
  product.locationId = 'testLocation';
  const childProduct = new Product();
  childProduct.status = 'ACTIVE';
  childProduct.productInfo = new OmapiProduct();
  childProduct.productInfo.name = 'Test';
  childProduct.locationId = 'testChildLocation';
  product.children = [childProduct];
  product.options = [];

  beforeEach(() => {
    cy.mount(ProductBundleComponent, {
      imports: [TgTranslateTestingModule.forRoot()],
      providers: [ProductFacade],
      componentProperties: {
        hasSalesScope: true,
        canManageProductHolding: true,
        products: [product],
        startMarketingConfigurator: createOutputSpy('startMarketingConfiguratorSpy'),
        manageProductOptions: createOutputSpy('manageProductOptionsSpy'),
        manageBundleOptions: createOutputSpy('manageBundleOptionsSpy'),
      },
    });
  });

  it('should render', () => {
    cy.get('[data-testid="bundleTitle"]');
  });

  describe(`When clicking on change tariff plan`, () => {
    it(`should emit a start marketing configurator event`, () => {
      cy.get('[data-testid="changeTariffPlan"]').click();
      cy.get('@startMarketingConfiguratorSpy').should('have.been.calledWith', 'testLocation');
    });
  });

  describe(`When clicking on manage product options`, () => {
    it(`should emit a manageProductOptions event`, () => {
      cy.get('[data-testid="manageProductOptions"]').click();
      cy.get('@manageProductOptionsSpy').should('have.been.calledWith', product);
    });
  });

  describe(`When clicking on manage options`, () => {
    it(`should emit a manageProductOptions event`, () => {
      cy.get('[data-testid="manageOptions"]').click();
      cy.get('@manageBundleOptionsSpy').should('have.been.called');
    });
  });
});
