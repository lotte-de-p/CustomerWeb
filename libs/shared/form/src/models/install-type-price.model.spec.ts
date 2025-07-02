import { InstallTypePriceModel } from './install-type-price.model';
import { PriceAttributes } from './price-attributes.interface';

describe('InstallTypePrice', () => {
  it('withPromo', () => {
    const withPromo = {
      oneTimeTotal: '100,00',
      oneTimeDiscounted: '0,00',
    } as PriceAttributes;

    const priceModel = InstallTypePriceModel.installPriceWithPromo(withPromo);

    expect(priceModel.price).toBe('0.00');
    expect(priceModel.originalPrice).toBe('100.00');
    expect(priceModel.isPromo).toBe(true);
  });

  it('noPromo', () => {
    const withPromo = {
      oneTimeDiscounted: '0,00',
    } as PriceAttributes;

    const priceModel = InstallTypePriceModel.installPriceWithoutPromo(withPromo);

    expect(priceModel.price).toBe('0.00');
    expect(priceModel.originalPrice).toEqual('');
    expect(priceModel.isPromo).toBe(false);
  });
});
