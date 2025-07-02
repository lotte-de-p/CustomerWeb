import { Pipe } from '@angular/core';
import { LanguageEnum } from '@telenet/ng-lib-page';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
export class EuroSignPipe {
    languageService;
    constructor(languageService) {
        this.languageService = languageService;
    }
    transform(value) {
        const isFrench = this.languageService.getLanguage() === LanguageEnum.FR;
        if (isFrench) {
            return value + '€';
        }
        else {
            return '€' + value;
        }
    }
    static ɵfac = function EuroSignPipe_Factory(t) { return new (t || EuroSignPipe)(i0.ɵɵdirectiveInject(i1.LanguageService, 16)); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "euroSign", type: EuroSignPipe, pure: true, standalone: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EuroSignPipe, [{
        type: Pipe,
        args: [{
                name: 'euroSign',
                standalone: true,
            }]
    }], () => [{ type: i1.LanguageService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXVyby1zaWduLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGlwZXMvZXVyby1zaWduLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBbUIsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBTXJFLE1BQU0sT0FBTyxZQUFZO0lBQ007SUFBN0IsWUFBNkIsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQUcsQ0FBQztJQUVqRSxTQUFTLENBQUMsS0FBYTtRQUNyQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxLQUFLLFlBQVksQ0FBQyxFQUFFLENBQUM7UUFFeEUsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUNiLE9BQU8sS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNyQixDQUFDO2FBQU0sQ0FBQztZQUNOLE9BQU8sR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNyQixDQUFDO0lBQ0gsQ0FBQztzRUFYVSxZQUFZOzJFQUFaLFlBQVk7O2lGQUFaLFlBQVk7Y0FKeEIsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxVQUFVO2dCQUNoQixVQUFVLEVBQUUsSUFBSTthQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExhbmd1YWdlRW51bSwgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLXBhZ2UnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdldXJvU2lnbicsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEV1cm9TaWduUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlKSB7fVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgaXNGcmVuY2ggPSB0aGlzLmxhbmd1YWdlU2VydmljZS5nZXRMYW5ndWFnZSgpID09PSBMYW5ndWFnZUVudW0uRlI7XG5cbiAgICBpZiAoaXNGcmVuY2gpIHtcbiAgICAgIHJldHVybiB2YWx1ZSArICfigqwnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ+KCrCcgKyB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==