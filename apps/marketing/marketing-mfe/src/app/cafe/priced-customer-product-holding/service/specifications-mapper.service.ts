import { Injectable } from '@angular/core';
import { PricedCphSpec } from '../model/priced-cph-data.model';
import { Product } from '../../../http/cafe/product-holding/models/product.model';
import { DigitalTvMapper } from './digital-tv.mapper';
import { FixedTelMapper } from './fixed-tel.mapper';
import { InternetMapper } from './internet.mapper';
import { MobileMapper } from './mobile.mapper';
import { MapperInterface } from './mapper.interface';
import { DefaultMapper } from './default.mapper';
import { DataSimMapper } from './data-sim.mapper';

// is it a factory instead of a service?
@Injectable({
  providedIn: 'root',
})
export class SpecificationsMapperService {
  constructor(
    private readonly digitalTvMapper?: DigitalTvMapper,
    private readonly fixedTelMapper?: FixedTelMapper,
    private readonly internetMapper?: InternetMapper,
    private readonly mobileMapper?: MobileMapper,
    private readonly dataSimMapper?: DataSimMapper,
    private readonly defaultMapper?: DefaultMapper
  ) {}

  public map(product: Product, parent?: Product): PricedCphSpec | undefined {
    const mapper = this.getMapper(product);
    const pricedCphSpec = mapper?.map(product, parent);

    if (product.productInfo && product.productInfo.hasServiceType('ATV') && pricedCphSpec) {
      pricedCphSpec.icon = DigitalTvMapper.ICON_DTV;
    }

    return pricedCphSpec;
  }

  private getMapper(product: Product): MapperInterface | undefined {
    switch (true) {
      case product.isInternet():
        return this.internetMapper;
      case product.isMobile():
        return this.mobileMapper;
      case product.isDTV():
        return this.digitalTvMapper;
      case product.isFixedCalling():
        return this.fixedTelMapper;
      case product.isMobileInternet():
        return this.dataSimMapper;
      default:
        return this.defaultMapper;
    }
  }
}
