import { Injectable } from '@angular/core';
import { SalesOfferModel } from '../models/sales-offer.model';
import * as i0 from "@angular/core";
import * as i1 from "./product.mapper";
export class SalesOfferMapper {
    productMapper;
    constructor(productMapper) {
        this.productMapper = productMapper;
    }
    map(rawSalesOffer) {
        const salesOffer = new SalesOfferModel();
        salesOffer.products = this.mapProducts(rawSalesOffer.products);
        salesOffer.ownedProducts = this.mapProducts(rawSalesOffer.ownedProducts);
        salesOffer.standaloneOptions = this.mapProducts(rawSalesOffer.standaloneOptions);
        return salesOffer;
    }
    mapProducts(rawProducts) {
        const products = [];
        if (rawProducts) {
            rawProducts.forEach((rawProduct) => products.push(this.productMapper.map(rawProduct)));
        }
        return products;
    }
    static ɵfac = function SalesOfferMapper_Factory(t) { return new (t || SalesOfferMapper)(i0.ɵɵinject(i1.ProductMapper)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SalesOfferMapper, factory: SalesOfferMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SalesOfferMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.ProductMapper }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZXMtb2ZmZXIubWFwcGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9tYXBwZXJzL3NhbGVzLW9mZmVyLm1hcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7O0FBTzlELE1BQU0sT0FBTyxnQkFBZ0I7SUFDRTtJQUE3QixZQUE2QixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUFHLENBQUM7SUFFdEQsR0FBRyxDQUFDLGFBQWtDO1FBQzNDLE1BQU0sVUFBVSxHQUFvQixJQUFJLGVBQWUsRUFBRSxDQUFDO1FBRTFELFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0QsVUFBVSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6RSxVQUFVLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUVqRixPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRU8sV0FBVyxDQUFDLFdBQStCO1FBQ2pELE1BQU0sUUFBUSxHQUFtQixFQUFFLENBQUM7UUFFcEMsSUFBSSxXQUFXLEVBQUUsQ0FBQztZQUNoQixXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RixDQUFDO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzswRUFyQlUsZ0JBQWdCO2dFQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCLG1CQUZmLE1BQU07O2lGQUVQLGdCQUFnQjtjQUg1QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0TWFwcGVyIH0gZnJvbSAnLi9wcm9kdWN0Lm1hcHBlcic7XG5pbXBvcnQgeyBTYWxlc09mZmVySW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zYWxlcy1vZmZlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU2FsZXNPZmZlck1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL3NhbGVzLW9mZmVyLm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3Byb2R1Y3QuaW50ZXJmYWNlJztcbmltcG9ydCB7IFByb2R1Y3RNb2RlbCB9IGZyb20gJy4uL21vZGVscy9wcm9kdWN0Lm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNhbGVzT2ZmZXJNYXBwZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHByb2R1Y3RNYXBwZXI6IFByb2R1Y3RNYXBwZXIpIHt9XG5cbiAgcHVibGljIG1hcChyYXdTYWxlc09mZmVyOiBTYWxlc09mZmVySW50ZXJmYWNlKTogU2FsZXNPZmZlck1vZGVsIHtcbiAgICBjb25zdCBzYWxlc09mZmVyOiBTYWxlc09mZmVyTW9kZWwgPSBuZXcgU2FsZXNPZmZlck1vZGVsKCk7XG5cbiAgICBzYWxlc09mZmVyLnByb2R1Y3RzID0gdGhpcy5tYXBQcm9kdWN0cyhyYXdTYWxlc09mZmVyLnByb2R1Y3RzKTtcbiAgICBzYWxlc09mZmVyLm93bmVkUHJvZHVjdHMgPSB0aGlzLm1hcFByb2R1Y3RzKHJhd1NhbGVzT2ZmZXIub3duZWRQcm9kdWN0cyk7XG4gICAgc2FsZXNPZmZlci5zdGFuZGFsb25lT3B0aW9ucyA9IHRoaXMubWFwUHJvZHVjdHMocmF3U2FsZXNPZmZlci5zdGFuZGFsb25lT3B0aW9ucyk7XG5cbiAgICByZXR1cm4gc2FsZXNPZmZlcjtcbiAgfVxuXG4gIHByaXZhdGUgbWFwUHJvZHVjdHMocmF3UHJvZHVjdHM6IFByb2R1Y3RJbnRlcmZhY2VbXSkge1xuICAgIGNvbnN0IHByb2R1Y3RzOiBQcm9kdWN0TW9kZWxbXSA9IFtdO1xuXG4gICAgaWYgKHJhd1Byb2R1Y3RzKSB7XG4gICAgICByYXdQcm9kdWN0cy5mb3JFYWNoKChyYXdQcm9kdWN0KSA9PiBwcm9kdWN0cy5wdXNoKHRoaXMucHJvZHVjdE1hcHBlci5tYXAocmF3UHJvZHVjdCkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvZHVjdHM7XG4gIH1cbn1cbiJdfQ==