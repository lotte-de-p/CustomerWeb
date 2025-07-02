import { OptionInterface } from './option.interface';
import { SalesOfferPromo } from '../models/response';
import { InstallTypeInterface } from './install-type.interface';
import { CostInterface } from './cost.interface';
export interface ProductInterface {
    omapiid: string;
    correlationId: string;
    specUrl: string;
    description: string;
    price: number;
    priceexclvat: number;
    options: OptionInterface[];
    promos: SalesOfferPromo[];
    installtypes: InstallTypeInterface[];
    costs: CostInterface[];
    getMonthlyTotalCost(): number;
}
//# sourceMappingURL=product.interface.d.ts.map