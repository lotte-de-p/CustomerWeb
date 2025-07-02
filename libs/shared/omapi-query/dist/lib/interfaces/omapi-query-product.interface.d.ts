export interface OmapiQueryProductInterface {
    products: QueryProductsInterface[];
    totalProducts?: number;
}
export interface QueryProductsInterface {
    labelKey: string;
    productFamily: string;
    variants: VariantsInterface[];
    manBrand: ColorInterface;
    shortDescription?: string;
    longDescription?: string;
    isPreOrder: boolean;
    isBackOrder: boolean;
}
export interface ProductTypeInterface {
    code: string;
    sortOrder?: string;
    localizedContent: LocalizedContentInterface[];
}
export interface LocalizedContentInterface {
    key?: string;
    locale: string;
    value: string[];
    data?: string;
}
export interface VariantsInterface {
    productId: string;
    images: ImagesInterface[];
    contractMonths: unknown;
    prices: PricesInterface;
    color: ColorInterface;
    manBrand: ColorInterface;
    shortDescription: ShortDescriptionInterface;
    tag: unknown;
    brand: BrandInterface;
    extraAtHomeDelivery?: boolean;
}
export interface ShortDescriptionInterface {
    localizedContent: LocalizedContentInterface[];
}
export interface ImagesInterface {
    attributeKey: string;
    value: string;
    localizedContent: LocalizedContentInterface[];
}
export interface PricesInterface {
    priceType: string;
}
export interface ColorInterface {
    hexCode?: string;
    sortOrder: string;
    localizedContent: LocalizedContentInterface[];
    attributeGroup: ProductTypeInterface;
}
export interface BrandInterface {
    localizedContent: LocalizedContentInterface[];
}
//# sourceMappingURL=omapi-query-product.interface.d.ts.map