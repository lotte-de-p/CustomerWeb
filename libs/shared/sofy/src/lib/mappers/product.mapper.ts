import { Injectable } from '@angular/core';
import { CostMapper } from './cost.mapper';
import { InstallTypeMapper } from './install-type.mapper';
import { OptionMapper } from './option.mapper';
import { PromoMapper } from './promo.mapper';
import { ProductInterface } from '../interfaces/product.interface';
import { ProductModel } from '../models/product.model';
import { InstallTypeInterface } from '../interfaces/install-type.interface';
import { InstallTypeModel } from '../models/install-type.model';
import { OptionInterface } from '../interfaces/option.interface';
import { OptionModel } from '../models/option.model';
import { SalesOfferPromo } from '../models/response';
import { PromoModel } from '../models/promo.model';
import { CostInterface } from '../interfaces/cost.interface';
import { SalesOfferCost } from '../models/salesOfferCost';
@Injectable({
  providedIn: 'root',
})
export class ProductMapper {
  constructor(
    private readonly costMapper: CostMapper,
    private readonly installTypeMapper: InstallTypeMapper,
    private readonly optionMapper: OptionMapper,
    private readonly promoMapper: PromoMapper
  ) {}

  public map(rawProduct: ProductInterface): ProductModel {
    const product: ProductModel = new ProductModel();

    product.correlationId = rawProduct.correlationId;
    product.description = rawProduct.description;
    product.omapiId = rawProduct.omapiid;
    product.price = rawProduct.price;
    product.priceexclvat = rawProduct.priceexclvat;
    product.specUrl = rawProduct.specUrl;

    product.costs = this.mapCosts(rawProduct.costs);
    product.installtypes = this.mapInstallTypes(rawProduct.installtypes);
    product.options = this.mapOptions(rawProduct.options);
    product.promos = this.mapPromos(rawProduct.promos);

    return product;
  }

  private mapCosts(rawCosts: CostInterface[]) {
    const costs: SalesOfferCost[] = [];

    if (rawCosts) {
      rawCosts.forEach((rawCost) => costs.push(this.costMapper.map(rawCost)));
    }

    return costs;
  }

  private mapInstallTypes(rawInstallTypes: InstallTypeInterface[]) {
    const installTypes: InstallTypeModel[] = [];

    if (rawInstallTypes) {
      rawInstallTypes.forEach((rawInstallType) => installTypes.push(this.installTypeMapper.map(rawInstallType)));
    }

    return installTypes;
  }

  private mapOptions(rawOptions: OptionInterface[]) {
    const options: OptionModel[] = [];

    if (rawOptions) {
      rawOptions.forEach((rawOption) => options.push(this.optionMapper.map(rawOption)));
    }

    return options;
  }

  private mapPromos(rawPromos: SalesOfferPromo[]) {
    const promos: PromoModel[] = [];

    if (rawPromos) {
      rawPromos.forEach((rawPromo) => promos.push(this.promoMapper.map(rawPromo)));
    }

    return promos;
  }
}
