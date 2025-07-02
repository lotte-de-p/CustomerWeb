import { InputOption } from './input-radio.model';
import { InstallTypePriceModel } from '../../../models';

export class InputOptionWithImage extends InputOption {
  imagePath: string;
  price: number;
  promoPrice: number;
  priceAfterPromo: number;
  isPromo: boolean;
  installTypePrice: InstallTypePriceModel;

  constructor(value?: string, label?: string, imagePath: string = '') {
    super(value, label);
    this.imagePath = imagePath;
  }

  withValue(value: string): InputOptionWithImage {
    this.value = value;
    return this;
  }

  withLabel(label: string): InputOptionWithImage {
    this.label = label;
    return this;
  }

  withImage(imagePath: string): InputOptionWithImage {
    this.imagePath = imagePath;
    return this;
  }

  withPrice(price: number): InputOptionWithImage {
    this.price = price;
    return this;
  }

  withPromoPrice(promoPrice: number): InputOptionWithImage {
    this.promoPrice = promoPrice;
    return this;
  }

  withPriceAndPromoPrice(price: number, promoPrice: number): InputOptionWithImage {
    this.price = price;
    this.promoPrice = Math.abs(promoPrice);
    if (this.promoPrice === 0 || isNaN(this.promoPrice) || this.promoPrice === undefined) {
      this.priceAfterPromo = this.price;
      this.isPromo = false;
    } else {
      this.promoCalculation();
    }

    return this;
  }

  promoCalculation() {
    if (this.price !== 0) {
      this.priceAfterPromo = this.price - this.promoPrice;
      this.isPromo = true;
    } else {
      this.priceAfterPromo = this.price;
      this.isPromo = false;
    }
  }
}
