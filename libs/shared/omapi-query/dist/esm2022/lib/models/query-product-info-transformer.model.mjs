import { Injectable } from '@angular/core';
import { ProductTypeEnum } from '../enums/product-type.enum';
import { isEmpty, first, isNil } from 'lodash-es';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
export class QueryProductInfoTransformer {
    languageService;
    constructor(languageService) {
        this.languageService = languageService;
    }
    toModel(queryProductInfo) {
        return this.transformToOmapiProduct(queryProductInfo);
    }
    transformToOmapiProduct(queryProductInfo) {
        const omapiProduct = new OmapiProduct();
        if (!isEmpty(queryProductInfo.products)) {
            const queryProductDetails = first(queryProductInfo.products);
            if (queryProductDetails) {
                omapiProduct.labelKey = queryProductDetails.labelKey;
                omapiProduct.productType =
                    queryProductDetails.productFamily.toUpperCase() === ProductTypeEnum.SMARTPHONES
                        ? ProductTypeEnum.SMARTPHONE
                        : queryProductDetails.productFamily.toUpperCase();
                if (!isEmpty(queryProductDetails.variants)) {
                    this.appendVariantToOmapiProduct(queryProductDetails, omapiProduct);
                }
            }
        }
        return omapiProduct;
    }
    appendVariantToOmapiProduct(queryProductDetails, omapiProduct) {
        const variant = first(queryProductDetails.variants);
        if (variant) {
            if (!isNil(variant.extraAtHomeDelivery)) {
                omapiProduct.extraAtHomeDelivery = variant.extraAtHomeDelivery;
            }
            omapiProduct.productId = variant.productId;
            omapiProduct.externalProductCode = variant.productId;
            omapiProduct.priceType = variant.prices.priceType;
            omapiProduct.imageUrl = QueryProductInfoTransformer.getImageUrl(variant);
            const contentForLocale = this.getContentForLocale(variant.shortDescription);
            if (contentForLocale) {
                omapiProduct.name = contentForLocale.data;
            }
            const brandValue = this.getBrandValueForLocale(variant.brand);
            if (brandValue) {
                omapiProduct.brand = first(brandValue.value);
            }
        }
    }
    static getImageUrl(variant) {
        if (!isEmpty(variant) && !isEmpty(variant.images)) {
            const imageDetails = first(variant.images);
            return imageDetails ? imageDetails.value : '';
        }
        return '';
    }
    getContentForLocale(shortDescription) {
        if (!isEmpty(shortDescription) && !isEmpty(shortDescription.localizedContent)) {
            const localizedContentInterface = shortDescription.localizedContent.find((localizeContent) => {
                return localizeContent.locale === this.languageService.getLanguage();
            });
            return localizedContentInterface ? localizedContentInterface : {};
        }
        return {};
    }
    getBrandValueForLocale(brand) {
        if (!isEmpty(brand) && !isEmpty(brand.localizedContent)) {
            const localizedContentInterface = brand.localizedContent.find((localizedContent) => {
                return localizedContent.locale === this.languageService.getLanguage();
            });
            return localizedContentInterface ? localizedContentInterface : {};
        }
        return {};
    }
    static ɵfac = function QueryProductInfoTransformer_Factory(t) { return new (t || QueryProductInfoTransformer)(i0.ɵɵinject(i1.LanguageService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: QueryProductInfoTransformer, factory: QueryProductInfoTransformer.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(QueryProductInfoTransformer, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.LanguageService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktcHJvZHVjdC1pbmZvLXRyYW5zZm9ybWVyLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2RlbHMvcXVlcnktcHJvZHVjdC1pbmZvLXRyYW5zZm9ybWVyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTdELE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7OztBQWFyRCxNQUFNLE9BQU8sMkJBQTJCO0lBQ1Q7SUFBN0IsWUFBNkIsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQUcsQ0FBQztJQUVqRSxPQUFPLENBQUMsZ0JBQTRDO1FBQ2xELE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELHVCQUF1QixDQUFDLGdCQUE0QztRQUNsRSxNQUFNLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUN4QyxNQUFNLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3RCxJQUFJLG1CQUFtQixFQUFFLENBQUM7Z0JBQ3hCLFlBQVksQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLENBQUMsUUFBUSxDQUFDO2dCQUNyRCxZQUFZLENBQUMsV0FBVztvQkFDdEIsbUJBQW1CLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxLQUFLLGVBQWUsQ0FBQyxXQUFXO3dCQUM3RSxDQUFDLENBQUMsZUFB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QyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7WUFDeEQsTUFBTSx5QkFBeUIsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTtnQkFDakYsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN4RSxDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8seUJBQXlCLENBQUMsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBRSxFQUFnQyxDQUFDO1FBQ25HLENBQUM7UUFFRCxPQUFPLEVBQStCLENBQUM7SUFDekMsQ0FBQztxRkEzRVUsMkJBQTJCO2dFQUEzQiwyQkFBMkIsV0FBM0IsMkJBQTJCLG1CQUYxQixNQUFNOztpRkFFUCwyQkFBMkI7Y0FIdkMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvcHJvZHVjdC10eXBlLmVudW0nO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLXBhZ2UnO1xuaW1wb3J0IHsgaXNFbXB0eSwgZmlyc3QsIGlzTmlsIH0gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7IE9tYXBpUHJvZHVjdCB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1vbWFwaSc7XG5pbXBvcnQge1xuICBCcmFuZEludGVyZmFjZSxcbiAgTG9jYWxpemVkQ29udGVudEludGVyZmFjZSxcbiAgT21hcGlRdWVyeVByb2R1Y3RJbnRlcmZhY2UsXG4gIFF1ZXJ5UHJvZHVjdHNJbnRlcmZhY2UsXG4gIFNob3J0RGVzY3JpcHRpb25JbnRlcmZhY2UsXG4gIFZhcmlhbnRzSW50ZXJmYWNlLFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL29tYXBpLXF1ZXJ5LXByb2R1Y3QuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFF1ZXJ5UHJvZHVjdEluZm9UcmFuc2Zvcm1lciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UpIHt9XG5cbiAgdG9Nb2RlbChxdWVyeVByb2R1Y3RJbmZvOiBPbWFwaVF1ZXJ5UHJvZHVjdEludGVyZmFjZSk6IE9tYXBpUHJvZHVjdCB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtVG9PbWFwaVByb2R1Y3QocXVlcnlQcm9kdWN0SW5mbyk7XG4gIH1cblxuICB0cmFuc2Zvcm1Ub09tYXBpUHJvZHVjdChxdWVyeVByb2R1Y3RJbmZvOiBPbWFwaVF1ZXJ5UHJvZHVjdEludGVyZmFjZSk6IE9tYXBpUHJvZHVjdCB7XG4gICAgY29uc3Qgb21hcGlQcm9kdWN0ID0gbmV3IE9tYXBpUHJvZHVjdCgpO1xuICAgIGlmICghaXNFbXB0eShxdWVyeVByb2R1Y3RJbmZvLnByb2R1Y3RzKSkge1xuICAgICAgY29uc3QgcXVlcnlQcm9kdWN0RGV0YWlscyA9IGZpcnN0KHF1ZXJ5UHJvZHVjdEluZm8ucHJvZHVjdHMpO1xuICAgICAgaWYgKHF1ZXJ5UHJvZHVjdERldGFpbHMpIHtcbiAgICAgICAgb21hcGlQcm9kdWN0LmxhYmVsS2V5ID0gcXVlcnlQcm9kdWN0RGV0YWlscy5sYWJlbEtleTtcbiAgICAgICAgb21hcGlQcm9kdWN0LnByb2R1Y3RUeXBlID1cbiAgICAgICAgICBxdWVyeVByb2R1Y3REZXRhaWxzLnByb2R1Y3RGYW1pbHkudG9VcHBlckNhc2UoKSA9PT0gUHJvZHVjdFR5cGVFbnVtLlNNQVJUUEhPTkVTXG4gICAgICAgICAgICA/IFByb2R1Y3RUeXBlRW51bS5TTUFSVFBIT05FXG4gICAgICAgICAgICA6IHF1ZXJ5UHJvZHVjdERldGFpbHMucHJvZHVjdEZhbWlseS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBpZiAoIWlzRW1wdHkocXVlcnlQcm9kdWN0RGV0YWlscy52YXJpYW50cykpIHtcbiAgICAgICAgICB0aGlzLmFwcGVuZFZhcmlhbnRUb09tYXBpUHJvZHVjdChxdWVyeVByb2R1Y3REZXRhaWxzLCBvbWFwaVByb2R1Y3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvbWFwaVByb2R1Y3Q7XG4gIH1cblxuICBwcml2YXRlIGFwcGVuZFZhcmlhbnRUb09tYXBpUHJvZHVjdChxdWVyeVByb2R1Y3REZXRhaWxzOiBRdWVyeVByb2R1Y3RzSW50ZXJmYWNlLCBvbWFwaVByb2R1Y3Q6IE9tYXBpUHJvZHVjdCkge1xuICAgIGNvbnN0IHZhcmlhbnQgPSBmaXJzdChxdWVyeVByb2R1Y3REZXRhaWxzLnZhcmlhbnRzKTtcbiAgICBpZiAodmFyaWFudCkge1xuICAgICAgaWYgKCFpc05pbCh2YXJpYW50LmV4dHJhQXRIb21lRGVsaXZlcnkpKSB7XG4gICAgICAgIG9tYXBpUHJvZHVjdC5leHRyYUF0SG9tZURlbGl2ZXJ5ID0gdmFyaWFudC5leHRyYUF0SG9tZURlbGl2ZXJ5O1xuICAgICAgfVxuICAgICAgb21hcGlQcm9kdWN0LnByb2R1Y3RJZCA9IHZhcmlhbnQucHJvZHVjdElkO1xuICAgICAgb21hcGlQcm9kdWN0LmV4dGVybmFsUHJvZHVjdENvZGUgPSB2YXJpYW50LnByb2R1Y3RJZDtcbiAgICAgIG9tYXBpUHJvZHVjdC5wcmljZVR5cGUgPSB2YXJpYW50LnByaWNlcy5wcmljZVR5cGU7XG4gICAgICBvbWFwaVByb2R1Y3QuaW1hZ2VVcmwgPSBRdWVyeVByb2R1Y3RJbmZvVHJhbnNmb3JtZXIuZ2V0SW1hZ2VVcmwodmFyaWFudCk7XG4gICAgICBjb25zdCBjb250ZW50Rm9yTG9jYWxlID0gdGhpcy5nZXRDb250ZW50Rm9yTG9jYWxlKHZhcmlhbnQuc2hvcnREZXNjcmlwdGlvbik7XG4gICAgICBpZiAoY29udGVudEZvckxvY2FsZSkge1xuICAgICAgICBvbWFwaVByb2R1Y3QubmFtZSA9IGNvbnRlbnRGb3JMb2NhbGUuZGF0YTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGJyYW5kVmFsdWUgPSB0aGlzLmdldEJyYW5kVmFsdWVGb3JMb2NhbGUodmFyaWFudC5icmFuZCk7XG4gICAgICBpZiAoYnJhbmRWYWx1ZSkge1xuICAgICAgICBvbWFwaVByb2R1Y3QuYnJhbmQgPSBmaXJzdChicmFuZFZhbHVlLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBnZXRJbWFnZVVybCh2YXJpYW50OiBWYXJpYW50c0ludGVyZmFjZSk6IHN0cmluZyB7XG4gICAgaWYgKCFpc0VtcHR5KHZhcmlhbnQpICYmICFpc0VtcHR5KHZhcmlhbnQuaW1hZ2VzKSkge1xuICAgICAgY29uc3QgaW1hZ2VEZXRhaWxzID0gZmlyc3QodmFyaWFudC5pbWFnZXMpO1xuICAgICAgcmV0dXJuIGltYWdlRGV0YWlscyA/IGltYWdlRGV0YWlscy52YWx1ZSA6ICcnO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBwcml2YXRlIGdldENvbnRlbnRGb3JMb2NhbGUoc2hvcnREZXNjcmlwdGlvbjogU2hvcnREZXNjcmlwdGlvbkludGVyZmFjZSk6IExvY2FsaXplZENvbnRlbnRJbnRlcmZhY2Uge1xuICAgIGlmICghaXNFbXB0eShzaG9ydERlc2NyaXB0aW9uKSAmJiAhaXNFbXB0eShzaG9ydERlc2NyaXB0aW9uLmxvY2FsaXplZENvbnRlbnQpKSB7XG4gICAgICBjb25zdCBsb2NhbGl6ZWRDb250ZW50SW50ZXJmYWNlID0gc2hvcnREZXNjcmlwdGlvbi5sb2NhbGl6ZWRDb250ZW50LmZpbmQoKGxvY2FsaXplQ29udGVudCkgPT4ge1xuICAgICAgICByZXR1cm4gbG9jYWxpemVDb250ZW50LmxvY2FsZSA9PT0gdGhpcy5sYW5ndWFnZVNlcnZpY2UuZ2V0TGFuZ3VhZ2UoKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGxvY2FsaXplZENvbnRlbnRJbnRlcmZhY2UgPyBsb2NhbGl6ZWRDb250ZW50SW50ZXJmYWNlIDogKHt9IGFzIExvY2FsaXplZENvbnRlbnRJbnRlcmZhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiB7fSBhcyBMb2NhbGl6ZWRDb250ZW50SW50ZXJmYWNlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCcmFuZFZhbHVlRm9yTG9jYWxlKGJyYW5kOiBCcmFuZEludGVyZmFjZSk6IExvY2FsaXplZENvbnRlbnRJbnRlcmZhY2Uge1xuICAgIGlmICghaXNFbXB0eShicmFuZCkgJiYgIWlzRW1wdHkoYnJhbmQubG9jYWxpemVkQ29udGVudCkpIHtcbiAgICAgIGNvbnN0IGxvY2FsaXplZENvbnRlbnRJbnRlcmZhY2UgPSBicmFuZC5sb2NhbGl6ZWRDb250ZW50LmZpbmQoKGxvY2FsaXplZENvbnRlbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplZENvbnRlbnQubG9jYWxlID09PSB0aGlzLmxhbmd1YWdlU2VydmljZS5nZXRMYW5ndWFnZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBsb2NhbGl6ZWRDb250ZW50SW50ZXJmYWNlID8gbG9jYWxpemVkQ29udGVudEludGVyZmFjZSA6ICh7fSBhcyBMb2NhbGl6ZWRDb250ZW50SW50ZXJmYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge30gYXMgTG9jYWxpemVkQ29udGVudEludGVyZmFjZTtcbiAgfVxufVxuIl19