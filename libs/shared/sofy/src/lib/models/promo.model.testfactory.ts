import { PromoModel } from './promo.model';
import { PeriodModel } from './period.model';
import { KeyValuePair } from '../interfaces/key-value.interface';

export class PromoModelTestfactory {
  static build(properties?: KeyValuePair): PromoModel {
    const promo = new PromoModel();
    promo.backendid = 1;
    promo.duration = 1;
    promo.legalid = 'test-promo';
    promo.name = 'test-promo';
    promo.period = new PeriodModel();
    promo.period.startDate = '2020-01-01';
    promo.period.endDate = '2050-01-01';
    promo.price = 50;
    promo.priceexclvat = 40;
    promo.puk = '123456';

    if (properties) {
      Object.keys(properties).forEach((key) => {
        if (properties[key] === null) {
          delete (promo as unknown as KeyValuePair)[key];
        } else {
          (promo as unknown as KeyValuePair)[key] = properties[key];
        }
      });
    }
    return promo;
  }
}
