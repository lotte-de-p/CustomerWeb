import { InstallTypeInterface } from '../interfaces/install-type.interface';
import { PromoModel } from './promo.model';
import { DeliveryOptionInterface } from '../interfaces/delivery-option.interface';

export class InstallTypeModel implements InstallTypeInterface {
  description: string;
  mutuallyexclusive: string;
  price: number;
  priceexclvat: number;
  promos: PromoModel[];
  selected: boolean;
  options?: DeliveryOptionInterface[];

  withSelected(): InstallTypeModel {
    this.selected = true;
    return this;
  }

  withDescription(description: string): InstallTypeModel {
    this.description = description;
    return this;
  }

  withPrice(price: number): InstallTypeModel {
    this.price = price;
    return this;
  }

  isPreInstall(): boolean {
    return this.description === 'preinstall';
  }

  isComfortInstall(): boolean {
    return this.description === 'comfortinstall';
  }

  isSelfInstall(): boolean {
    return this.description === 'selfinstall';
  }

  isModemSwap(): boolean {
    return !this.description.includes('_swap');
  }
}
