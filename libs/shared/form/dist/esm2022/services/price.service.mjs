import { Injectable } from '@angular/core';
import { CustomerCategoryEnum } from '@telenet/ng-lib-page';
import { isNil } from 'lodash-es';
import { TaxTypeEnum } from '../enums';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
export class PriceService {
    pathCategorisationService;
    constructor(pathCategorisationService) {
        this.pathCategorisationService = pathCategorisationService;
    }
    isValidPrice(price) {
        return !!(price && price !== '0' && price !== '0,0' && price !== '0,00' && price !== '0.0' && price !== '0.00');
    }
    getTaxType() {
        switch (this.pathCategorisationService.getCustomerCategory()) {
            case CustomerCategoryEnum.RESIDENTIAL:
                return TaxTypeEnum.INCLUSIVE;
            case CustomerCategoryEnum.BUSINESS:
                return TaxTypeEnum.EXCLUSIVE;
            default:
                return TaxTypeEnum.INCLUSIVE;
        }
    }
    transform(price, showZeroes = true, isEnLocale = false) {
        if (isNil(price))
            return '';
        const hasZeroes = price % 1 === 0;
        const decimalPrice = price.toFixed(showZeroes || !hasZeroes ? 2 : 0);
        return isEnLocale ? decimalPrice : decimalPrice.replace('.', ',');
    }
    static ɵfac = function PriceService_Factory(t) { return new (t || PriceService)(i0.ɵɵinject(i1.PathCategorisationService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PriceService, factory: PriceService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PriceService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.PathCategorisationService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9wcmljZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUE2QixNQUFNLHNCQUFzQixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDbEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7O0FBS3ZDLE1BQU0sT0FBTyxZQUFZO0lBQ007SUFBN0IsWUFBNkIseUJBQW9EO1FBQXBELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7SUFBRyxDQUFDO0lBRXJGLFlBQVksQ0FBQyxLQUFhO1FBQ3hCLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssS0FBSyxHQUFHLElBQUksS0FBSyxLQUFLLEtBQUssSUFBSSxLQUFLLEtBQUssTUFBTSxJQUFJLEtBQUssS0FBSyxLQUFLLElBQUksS0FBSyxLQUFLLE1BQU0sQ0FBQyxDQUFDO0lBQ2xILENBQUM7SUFFRCxVQUFVO1FBQ1IsUUFBUSxJQUFJLENBQUMseUJBQXlCLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxDQUFDO1lBQzdELEtBQUssb0JBQW9CLENBQUMsV0FBVztnQkFDbkMsT0FBTyxXQUFXLENBQUMsU0FBUyxDQUFDO1lBQy9CLEtBQUssb0JBQW9CLENBQUMsUUFBUTtnQkFDaEMsT0FBTyxXQUFXLENBQUMsU0FBUyxDQUFDO1lBQy9CO2dCQUNFLE9BQU8sV0FBVyxDQUFDLFNBQVMsQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFvQixFQUFFLGFBQXNCLElBQUksRUFBRSxhQUFzQixLQUFLO1FBQ3JGLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sRUFBRSxDQUFDO1FBRTVCLE1BQU0sU0FBUyxHQUFHLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7c0VBeEJVLFlBQVk7Z0VBQVosWUFBWSxXQUFaLFlBQVksbUJBRlgsTUFBTTs7aUZBRVAsWUFBWTtjQUh4QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDdXN0b21lckNhdGVnb3J5RW51bSwgUGF0aENhdGVnb3Jpc2F0aW9uU2VydmljZSB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1wYWdlJztcbmltcG9ydCB7IGlzTmlsIH0gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7IFRheFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJpY2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBwYXRoQ2F0ZWdvcmlzYXRpb25TZXJ2aWNlOiBQYXRoQ2F0ZWdvcmlzYXRpb25TZXJ2aWNlKSB7fVxuXG4gIGlzVmFsaWRQcmljZShwcmljZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKHByaWNlICYmIHByaWNlICE9PSAnMCcgJiYgcHJpY2UgIT09ICcwLDAnICYmIHByaWNlICE9PSAnMCwwMCcgJiYgcHJpY2UgIT09ICcwLjAnICYmIHByaWNlICE9PSAnMC4wMCcpO1xuICB9XG5cbiAgZ2V0VGF4VHlwZSgpOiBUYXhUeXBlRW51bSB7XG4gICAgc3dpdGNoICh0aGlzLnBhdGhDYXRlZ29yaXNhdGlvblNlcnZpY2UuZ2V0Q3VzdG9tZXJDYXRlZ29yeSgpKSB7XG4gICAgICBjYXNlIEN1c3RvbWVyQ2F0ZWdvcnlFbnVtLlJFU0lERU5USUFMOlxuICAgICAgICByZXR1cm4gVGF4VHlwZUVudW0uSU5DTFVTSVZFO1xuICAgICAgY2FzZSBDdXN0b21lckNhdGVnb3J5RW51bS5CVVNJTkVTUzpcbiAgICAgICAgcmV0dXJuIFRheFR5cGVFbnVtLkVYQ0xVU0lWRTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBUYXhUeXBlRW51bS5JTkNMVVNJVkU7XG4gICAgfVxuICB9XG5cbiAgdHJhbnNmb3JtKHByaWNlOiBudW1iZXIgfCBudWxsLCBzaG93WmVyb2VzOiBib29sZWFuID0gdHJ1ZSwgaXNFbkxvY2FsZTogYm9vbGVhbiA9IGZhbHNlKTogc3RyaW5nIHtcbiAgICBpZiAoaXNOaWwocHJpY2UpKSByZXR1cm4gJyc7XG5cbiAgICBjb25zdCBoYXNaZXJvZXMgPSBwcmljZSAlIDEgPT09IDA7XG4gICAgY29uc3QgZGVjaW1hbFByaWNlID0gcHJpY2UudG9GaXhlZChzaG93WmVyb2VzIHx8ICFoYXNaZXJvZXMgPyAyIDogMCk7XG4gICAgcmV0dXJuIGlzRW5Mb2NhbGUgPyBkZWNpbWFsUHJpY2UgOiBkZWNpbWFsUHJpY2UucmVwbGFjZSgnLicsICcsJyk7XG4gIH1cbn1cbiJdfQ==