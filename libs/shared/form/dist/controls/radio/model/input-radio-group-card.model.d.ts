import { InputOption } from './input-radio.model';
import { InstallTypePriceModel } from '../../../models';
export declare class InputOptionWithImage extends InputOption {
    imagePath: string;
    price: number;
    promoPrice: number;
    priceAfterPromo: number;
    isPromo: boolean;
    installTypePrice: InstallTypePriceModel;
    constructor(value?: string, label?: string, imagePath?: string);
    withValue(value: string): InputOptionWithImage;
    withLabel(label: string): InputOptionWithImage;
    withImage(imagePath: string): InputOptionWithImage;
    withPrice(price: number): InputOptionWithImage;
    withPromoPrice(promoPrice: number): InputOptionWithImage;
    withPriceAndPromoPrice(price: number, promoPrice: number): InputOptionWithImage;
    promoCalculation(): void;
}
//# sourceMappingURL=input-radio-group-card.model.d.ts.map