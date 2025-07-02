import { Product } from './product.model';

describe('ProductModel', () => {
  let product: Product;
  beforeEach(() => {
    product = new Product();
  });

  describe('isProductActive', () => {
    it('should return true if product is active', () => {
      product.status = 'ACTIVE';
      expect(product.isProductActive()).toBe(true);
    });
    it('should return false if product is not active', () => {
      product.status = 'STATUS';
      expect(product.isProductActive()).toBe(false);
    });
  });
  describe('isProductSuspended', () => {
    it('should return true if product is suspended', () => {
      product.status = 'SUSPENDED';
      expect(product.isProductSuspended()).toBe(true);
    });
    it('should return false if product is not suspended', () => {
      product.status = 'STATUS';
      expect(product.isProductSuspended()).toBe(false);
    });
  });
  describe('isProductModificationInProgress', () => {
    it('should return true if product has modification in progress', () => {
      product.status = 'MODIFICATION_IN_PROGRESS';
      expect(product.isProductModificationInProgress()).toBe(true);
    });
    it('should return false if product has no modification in progress', () => {
      product.status = 'STATUS';
      expect(product.isProductModificationInProgress()).toBe(false);
    });
  });
  describe('isProductDisconnectionInProgress', () => {
    it('should return true if product has disconnection in progress', () => {
      product.status = 'DISCONNECTION_IN_PROGRESS';
      expect(product.isProductDisconnectionInProgress()).toBe(true);
    });
    it('should return false if product has no disconnection in progress', () => {
      product.status = 'STATUS';
      expect(product.isProductDisconnectionInProgress()).toBe(false);
    });
  });
  describe('isProductActivationInProgress', () => {
    it('should return true if product has activation in progress', () => {
      product.status = 'ACTIVATION_PASSED_PONR';
      expect(product.isProductActivationInProgress()).toBe(true);
    });
    it('should return false if product has no activation in progress', () => {
      product.status = 'STATUS';
      expect(product.isProductActivationInProgress()).toBe(false);
    });
  });
  describe('isC5Bundle', () => {
    it('should return true if product is C5 bundle', () => {
      product.bundleType = Product.BUNDLE_TYPE_C5;
      expect(product.isC5Bundle()).toBe(true);
    });
    it('should return true if product is C5 bundle type klik', () => {
      product.bundleType = Product.BUNDLE_TYPE_KLIK;
      expect(product.isC5Bundle()).toBe(true);
    });
    it('should return false if product is no C5 bundle', () => {
      product.status = 'STATUS';
      expect(product.isC5Bundle()).toBe(false);
    });
  });
  describe('hasValidPrice', () => {
    it('should return true if product has valid price', () => {
      expect(product.hasValidPrice('12.4')).toBe(true);
    });
    it('should return false if product has no valid price (0)', () => {
      expect(product.hasValidPrice('0')).toBe(false);
    });
    it('should return false if product has no valid price (0,0)', () => {
      expect(product.hasValidPrice('0,0')).toBe(false);
    });
    it('should return false if product has no valid price (0,00)', () => {
      expect(product.hasValidPrice('0,00')).toBe(false);
    });
    it('should return false if product has no valid price (0.0)', () => {
      expect(product.hasValidPrice('0.0')).toBe(false);
    });
    it('should return false if product has no valid price (0.00)', () => {
      expect(product.hasValidPrice('0.00')).toBe(false);
    });
  });
});
