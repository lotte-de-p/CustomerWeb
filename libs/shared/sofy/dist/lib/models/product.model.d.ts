import { SalesOfferCost } from './salesOfferCost';
import { OptionModel } from './option.model';
import { InstallTypeModel } from './install-type.model';
import { PromoModel } from './promo.model';
export declare class ProductModel {
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
    getMonthlyTotalCost(): number;
    hasCompatibleModem(): boolean;
}
//# sourceMappingURL=product.model.d.ts.map