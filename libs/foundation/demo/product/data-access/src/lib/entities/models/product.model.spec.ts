import { ProductOverviewConstants, Product } from './product.model';

describe(`Product`, () => {
  let product: Product;

  beforeEach(() => {
    product = new Product();
  });

  describe(`Given the product is Active`, () => {
    beforeEach(() => {
      product.status = ProductOverviewConstants.ACTIVE_STATUS;
    });

    it(`should return true when calling isProductActive`, () => {
      expect(product.isProductActive()).toBe(true);
    });
  });

  describe(`Given the product isn't Active`, () => {
    beforeEach(() => {
      product.status = ProductOverviewConstants.SUSPENDED_STATUS;
    });

    it(`should return true when calling isProductActive`, () => {
      expect(product.isProductActive()).toBe(false);
    });
  });

  describe(`When calling isProductSuspended`, () => {
    describe.each(['SUSPENDED', 'SUSPENSION_IN_PROGRESS', 'SUSPENSION_PASSED_PONR'])(
      `Given the product has status %s`,
      (status) => {
        it(`should return true  `, () => {
          product.status = status;
          expect(product.isProductSuspended()).toBe(true);
        });
      }
    );
  });

  describe(`When calling isProductModificationInProgress`, () => {
    describe.each(['MODIFICATION_IN_PROGRESS', 'MODIFICATION_PASSED_PONR'])(
      `Given the product has status %s`,
      (status) => {
        it(`should return true  `, () => {
          product.status = status;
          expect(product.isProductModificationInProgress()).toBe(true);
        });
      }
    );
  });

  describe(`When calling isProductDisconnectionInProgress`, () => {
    describe.each(['DISCONNECTION_IN_PROGRESS', 'DISCONNECTION_PASSED_PONR'])(
      `Given the product has status %s`,
      (status) => {
        it(`should return true  `, () => {
          product.status = status;
          expect(product.isProductDisconnectionInProgress()).toBe(true);
        });
      }
    );
  });

  describe(`When calling isProductActivationInProgress`, () => {
    describe.each(['ACTIVATION_IN_PROGRESS', 'ACTIVATION_PASSED_PONR'])(`Given the product has status %s`, (status) => {
      it(`should return true  `, () => {
        product.status = status;
        expect(product.isProductActivationInProgress()).toBe(true);
      });
    });
  });

  describe(`When calling isC5Bundle`, () => {
    describe.each(['KLIK', 'Connect 5'])(`Given the product has bundleType %s`, (bundleType) => {
      it(`should return true  `, () => {
        product.bundleType = bundleType;
        expect(product.isC5Bundle()).toBe(true);
      });
    });
  });

  describe(`When calling hasValidPrice`, () => {
    describe.each([
      ['0', false],
      ['0,0', false],
      ['0,00', false],
      ['0.0', false],
      ['0.00', false],
      [null, null],
      [undefined, undefined],
      ['98,76', true],
    ])(`Given a price %s`, (invalidPrice, expected) => {
      it(`should return ${expected}  `, () => {
        expect(product.hasValidPrice(invalidPrice as string)).toBe(expected);
      });
    });
  });
});
