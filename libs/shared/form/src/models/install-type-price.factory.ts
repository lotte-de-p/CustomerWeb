import { InstallTypePriceModel } from './install-type-price.model';
import { PriceAttributes } from './price-attributes.interface';

export class InstallTypePriceTestFactory {
  public static installPriceWithPromo(oneTimeTotal: string, oneTimeDiscounted: string): InstallTypePriceModel {
    const withPromo = {
      oneTimeTotal: oneTimeTotal,
      oneTimeDiscounted: oneTimeDiscounted,
    } as PriceAttributes;

    return InstallTypePriceModel.installPriceWithPromo(withPromo);
  }

  public static installPriceWithoutPromo(oneTimeDiscounted: string): InstallTypePriceModel {
    const withoutPromo = {
      oneTimeDiscounted: oneTimeDiscounted,
    } as PriceAttributes;

    return InstallTypePriceModel.installPriceWithoutPromo(withoutPromo);
  }
}
