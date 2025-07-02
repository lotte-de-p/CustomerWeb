import { CustomerCategoryEnum } from '../enums/customer-category.enum';
import { CustomerBrandEnum } from '../enums/customer-brand.enum';
import * as i0 from "@angular/core";
type TranslationLabelPostfixes = 'BRAND_POSTFIX' | 'CATEGORY_POSTFIX' | 'BRAND_CATEGORY_POSTFIX';
type PostfixMapping = {
    [Key in TranslationLabelPostfixes]: string;
};
export declare class PathCategorisationService {
    private readonly window;
    constructor(window: Window);
    getPostfixVariables(): PostfixMapping;
    getBrandPostfix(): string;
    getCategoryPostfix(): string;
    getBrandLabelSuffix(): string;
    getValueFromWindowByProperty(property: string): string;
    getLabelSuffix(): string;
    getCustomerBrand(): string;
    getCustomerCategory(): string;
    isCustomerOfBrandTypes(customerBrandEnums?: CustomerBrandEnum[]): boolean;
    isCustomerOfBrand(customerBrand: CustomerBrandEnum): boolean;
    isCustomerOfType(type: CustomerCategoryEnum): boolean;
    isBrandBaseAndCategoryResidential(): boolean;
    isBrandBaseAndCategoryBusiness(): boolean;
    isBrandTelenetAndCategoryResidential(): boolean;
    isBrandTelenetAndCategoryBusiness(): boolean;
    isBrandTelenetAndCategoryFleetPortal(): boolean;
    isBrandTelenetAndCategoryResidentialOrFleet(): boolean;
    isBrandBaseAndCategoryResidentialOrBusiness(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PathCategorisationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PathCategorisationService>;
}
export {};
//# sourceMappingURL=path-categorisation.service.d.ts.map