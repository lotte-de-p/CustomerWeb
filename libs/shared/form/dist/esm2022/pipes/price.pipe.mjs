import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services";
export class PricePipe {
    priceService;
    constructor(priceService) {
        this.priceService = priceService;
    }
    transform(price, absolute = false, showZeroes = true, locale = 'nl') {
        const newPrice = Number(price);
        return this.priceService.transform(absolute ? Math.abs(newPrice) : newPrice, showZeroes, locale === 'en');
    }
    static ɵfac = function PricePipe_Factory(t) { return new (t || PricePipe)(i0.ɵɵdirectiveInject(i1.PriceService, 16)); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "price", type: PricePipe, pure: true, standalone: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PricePipe, [{
        type: Pipe,
        args: [{
                name: 'price',
                standalone: true,
            }]
    }], () => [{ type: i1.PriceService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlcy9wcmljZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7QUFPcEQsTUFBTSxPQUFPLFNBQVM7SUFDUztJQUE3QixZQUE2QixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFHLENBQUM7SUFFM0QsU0FBUyxDQUFDLEtBQXNCLEVBQUUsV0FBb0IsS0FBSyxFQUFFLGFBQXNCLElBQUksRUFBRSxTQUFpQixJQUFJO1FBQzVHLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDNUcsQ0FBQzttRUFOVSxTQUFTO3dFQUFULFNBQVM7O2lGQUFULFNBQVM7Y0FKckIsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxPQUFPO2dCQUNiLFVBQVUsRUFBRSxJQUFJO2FBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdwcmljZScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFByaWNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHByaWNlU2VydmljZTogUHJpY2VTZXJ2aWNlKSB7fVxuXG4gIHRyYW5zZm9ybShwcmljZTogbnVtYmVyIHwgc3RyaW5nLCBhYnNvbHV0ZTogYm9vbGVhbiA9IGZhbHNlLCBzaG93WmVyb2VzOiBib29sZWFuID0gdHJ1ZSwgbG9jYWxlOiBzdHJpbmcgPSAnbmwnKSB7XG4gICAgY29uc3QgbmV3UHJpY2UgPSBOdW1iZXIocHJpY2UpO1xuICAgIHJldHVybiB0aGlzLnByaWNlU2VydmljZS50cmFuc2Zvcm0oYWJzb2x1dGUgPyBNYXRoLmFicyhuZXdQcmljZSkgOiBuZXdQcmljZSwgc2hvd1plcm9lcywgbG9jYWxlID09PSAnZW4nKTtcbiAgfVxufVxuIl19