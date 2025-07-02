import { LocalizedContentInterface } from '../interfaces/localized-content.interface';
import { OmapiProduct } from './omapi-product.model';
import { SubCategoryInterface } from '../interfaces/sub-category.interface';
export interface OmapiProductTestFactoryProps {
    name?: string;
    productType?: string;
    characteristics?: any;
    productConstituents?: any;
    services?: any;
    productId?: string;
    weight?: number;
    localizedContent?: LocalizedContentInterface[];
    logo?: string;
    subCategory?: SubCategoryInterface;
}
export declare class OmapiProductTestfactory {
    static build(properties?: OmapiProductTestFactoryProps): OmapiProduct;
}
//# sourceMappingURL=omapi-product.testfactory.d.ts.map