import { OmapiProduct } from '../models/omapi-product.model';
import { LocalizedContentInterface } from '../interfaces/localized-content.interface';
import { RawOmapiProductInterfaceData } from '../interfaces/raw-omapi-product.interface';
import { LanguageEnum } from '../constants/language.enum';
export declare class OmapiUtils {
    static doesContainProductWithProvidedOmapiId<T extends {
        omapiid: string;
    }[]>(productsWithOmapiIds: T, omapiId: string): boolean;
    static getLocalizedContent(language: LanguageEnum, omapiProduct: OmapiProduct): LocalizedContentInterface | undefined;
    static getComboProducts(omapiId: string): RawOmapiProductInterfaceData | undefined;
}
//# sourceMappingURL=omapi.utils.d.ts.map