import { SalesOfferCost } from './salesOfferCost';
import { OptionModel } from './option.model';
import { InstallTypeModel } from './install-type.model';
import { PromoModel } from './promo.model';

export class ProductModel {
  correlationId: string;
  costs: SalesOfferCost[];
  description: string;
  installtypes: InstallTypeModel[];
  omapiId: string;
  options: OptionModel[];
  price: number;
  priceexclvat: number;
  promos: PromoModel[];
  specUrl: string;

  getMonthlyTotalCost(): number {
    return this.price;
  }

  hasCompatibleModem(): boolean {
    return this.installtypes.length > 0 ? this.installtypes[0].isModemSwap() : true;
  }
}
