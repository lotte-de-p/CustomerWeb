import { LocalizedContentInterface } from '../interfaces/localized-content.interface';
import { OmapiProduct } from './omapi-product.model';
import { SubCategoryInterface } from '../interfaces/sub-category.interface';

export interface OmapiProductTestFactoryProps {
  name?: string;
  productType?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  characteristics?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  productConstituents?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  services?: any;
  productId?: string;
  weight?: number;
  localizedContent?: LocalizedContentInterface[];
  logo?: string;
  subCategory?: SubCategoryInterface;
}

export class OmapiProductTestfactory {
  static build(properties: OmapiProductTestFactoryProps = {}): OmapiProduct {
    const omapiProduct = new OmapiProduct();

    omapiProduct.name = properties.name || 'Wigo';
    omapiProduct.productType = properties.productType || 'OTHER';
    omapiProduct.characteristics = properties.characteristics || {};
    omapiProduct.productConstituents = properties.productConstituents || {};
    omapiProduct.services = properties.services || [];
    omapiProduct.productId = properties.productId || '123';
    omapiProduct.weight = properties.weight || 1;
    omapiProduct.localizedContent = properties.localizedContent || [];
    omapiProduct.externalProductCode = '95465432165';
    omapiProduct.logo = properties.logo;
    omapiProduct.subCategory = properties.subCategory;
    return omapiProduct;
  }
}
