import { Injectable } from '@angular/core';
import { PromoMapper } from './promo.mapper';
import { InstallTypeInterface } from '../interfaces/install-type.interface';
import { InstallTypeModel } from '../models/install-type.model';
import { SalesOfferPromo } from '../models/response';
import { PromoModel } from '../models/promo.model';
@Injectable({
  providedIn: 'root',
})
export class InstallTypeMapper {
  constructor(private readonly promoMapper: PromoMapper) {}

  public map(rawInstallType: InstallTypeInterface): InstallTypeModel {
    const installType: InstallTypeModel = new InstallTypeModel();

    installType.description = rawInstallType.description;
    installType.mutuallyexclusive = rawInstallType.mutuallyexclusive;
    installType.price = rawInstallType.price;
    installType.priceexclvat = rawInstallType.priceexclvat;
    installType.selected = rawInstallType.selected;

    installType.promos = this.mapPromos(rawInstallType.promos);
    return installType;
  }

  private mapPromos(rawPromos: SalesOfferPromo[]) {
    const promos: PromoModel[] = [];

    if (rawPromos) {
      rawPromos.forEach((rawPromo) => promos.push(this.promoMapper.map(rawPromo)));
    }

    return promos;
  }
}
