import { inject, Inject, Injectable } from '@angular/core';
import { isEmpty } from 'lodash-es';
import { Observable } from 'rxjs';
import { PathCategorisationService } from '../page';
import * as i0 from "@angular/core";
export class TelenetTranslateLoader {
    window;
    pathCategorisationService = inject(PathCategorisationService);
    postfixes = this.pathCategorisationService.getPostfixVariables();
    constructor(window) {
        this.window = window;
        this.initializeBrandAndCategoryLabels();
    }
    initializeBrandAndCategoryLabels() {
        this.getTranslationData().subscribe((labelSet) => {
            for (const keyWithBrandOrCategory in labelSet) {
                this.overwriteOriginalLabelWithBrandOrCategorySpecificLabel(labelSet, keyWithBrandOrCategory);
            }
        });
    }
    overwriteOriginalLabelWithBrandOrCategorySpecificLabel(labelSet, keyWithBrandOrCategory) {
        const postfix = this.getPostfix(keyWithBrandOrCategory);
        if (postfix) {
            const keyWithoutCategoryOrBrand = keyWithBrandOrCategory.replace(new RegExp(postfix + '$'), '');
            if (labelSet[keyWithoutCategoryOrBrand] !== undefined) {
                labelSet[keyWithoutCategoryOrBrand] = labelSet[keyWithBrandOrCategory];
            }
        }
    }
    getPostfix(property) {
        return ([this.postfixes.BRAND_CATEGORY_POSTFIX, this.postfixes.CATEGORY_POSTFIX, this.postfixes.BRAND_POSTFIX].find((postfix) => property.endsWith(postfix)) || null);
    }
    getTranslation(_lang) {
        return this.getTranslationData();
    }
    getTranslationData() {
        return new Observable((observer) => {
            if (!isEmpty(this.window?.['localisationData']?.keys)) {
                observer.next(this.window['localisationData'].keys);
                observer.complete();
            }
            else if (this.window?.['pageLocaleData']?.bundle) {
                observer.next(this.window['pageLocaleData'].bundle);
                observer.complete();
            }
            else {
                observer.next({});
                observer.complete();
                console.log('NG Translations could not be loaded');
            }
        });
    }
    static ɵfac = function TelenetTranslateLoader_Factory(t) { return new (t || TelenetTranslateLoader)(i0.ɵɵinject('Window')); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TelenetTranslateLoader, factory: TelenetTranslateLoader.ɵfac });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TelenetTranslateLoader, [{
        type: Injectable
    }], () => [{ type: Window, decorators: [{
                type: Inject,
                args: ['Window']
            }] }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi10cmFuc2xhdGUtbG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pMThuL21haW4tdHJhbnNsYXRlLWxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNwQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFHcEQsTUFBTSxPQUFPLHNCQUFzQjtJQUlJO0lBSHBCLHlCQUF5QixHQUFHLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzlELFNBQVMsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUVsRixZQUFxQyxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNqRCxJQUFJLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRU8sZ0NBQWdDO1FBQ3RDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQy9DLEtBQUssTUFBTSxzQkFBc0IsSUFBSSxRQUFRLEVBQUUsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLHNEQUFzRCxDQUFDLFFBQVEsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1lBQ2hHLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxzREFBc0QsQ0FDNUQsUUFBZ0MsRUFDaEMsc0JBQThCO1FBRTlCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUN4RCxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ1osTUFBTSx5QkFBeUIsR0FBRyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2hHLElBQUksUUFBUSxDQUFDLHlCQUF5QixDQUFDLEtBQUssU0FBUyxFQUFFLENBQUM7Z0JBQ3RELFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3pFLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVPLFVBQVUsQ0FBQyxRQUFnQjtRQUNqQyxPQUFPLENBQ0wsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQ3pHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUN4QyxJQUFJLElBQUksQ0FDVixDQUFDO0lBQ0osQ0FBQztJQUVNLGNBQWMsQ0FBQyxLQUFhO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVPLGtCQUFrQjtRQUN4QixPQUFPLElBQUksVUFBVSxDQUF5QixDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3pELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDdEQsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BELFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0QixDQUFDO2lCQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUM7Z0JBQ25ELFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwRCxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdEIsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2xCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1lBQ3JELENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Z0ZBdkRVLHNCQUFzQixjQUliLFFBQVE7Z0VBSmpCLHNCQUFzQixXQUF0QixzQkFBc0I7O2lGQUF0QixzQkFBc0I7Y0FEbEMsVUFBVTs7c0JBS0ksTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNsYXRlTG9hZGVyIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBpbmplY3QsIEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQYXRoQ2F0ZWdvcmlzYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vcGFnZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZWxlbmV0VHJhbnNsYXRlTG9hZGVyIGltcGxlbWVudHMgVHJhbnNsYXRlTG9hZGVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSBwYXRoQ2F0ZWdvcmlzYXRpb25TZXJ2aWNlID0gaW5qZWN0KFBhdGhDYXRlZ29yaXNhdGlvblNlcnZpY2UpO1xuICBwcml2YXRlIHJlYWRvbmx5IHBvc3RmaXhlcyA9IHRoaXMucGF0aENhdGVnb3Jpc2F0aW9uU2VydmljZS5nZXRQb3N0Zml4VmFyaWFibGVzKCk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnV2luZG93JykgcHVibGljIHdpbmRvdzogV2luZG93KSB7XG4gICAgdGhpcy5pbml0aWFsaXplQnJhbmRBbmRDYXRlZ29yeUxhYmVscygpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplQnJhbmRBbmRDYXRlZ29yeUxhYmVscygpIHtcbiAgICB0aGlzLmdldFRyYW5zbGF0aW9uRGF0YSgpLnN1YnNjcmliZSgobGFiZWxTZXQpID0+IHtcbiAgICAgIGZvciAoY29uc3Qga2V5V2l0aEJyYW5kT3JDYXRlZ29yeSBpbiBsYWJlbFNldCkge1xuICAgICAgICB0aGlzLm92ZXJ3cml0ZU9yaWdpbmFsTGFiZWxXaXRoQnJhbmRPckNhdGVnb3J5U3BlY2lmaWNMYWJlbChsYWJlbFNldCwga2V5V2l0aEJyYW5kT3JDYXRlZ29yeSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG92ZXJ3cml0ZU9yaWdpbmFsTGFiZWxXaXRoQnJhbmRPckNhdGVnb3J5U3BlY2lmaWNMYWJlbChcbiAgICBsYWJlbFNldDogUmVjb3JkPHN0cmluZywgc3RyaW5nPixcbiAgICBrZXlXaXRoQnJhbmRPckNhdGVnb3J5OiBzdHJpbmdcbiAgKSB7XG4gICAgY29uc3QgcG9zdGZpeCA9IHRoaXMuZ2V0UG9zdGZpeChrZXlXaXRoQnJhbmRPckNhdGVnb3J5KTtcbiAgICBpZiAocG9zdGZpeCkge1xuICAgICAgY29uc3Qga2V5V2l0aG91dENhdGVnb3J5T3JCcmFuZCA9IGtleVdpdGhCcmFuZE9yQ2F0ZWdvcnkucmVwbGFjZShuZXcgUmVnRXhwKHBvc3RmaXggKyAnJCcpLCAnJyk7XG4gICAgICBpZiAobGFiZWxTZXRba2V5V2l0aG91dENhdGVnb3J5T3JCcmFuZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsYWJlbFNldFtrZXlXaXRob3V0Q2F0ZWdvcnlPckJyYW5kXSA9IGxhYmVsU2V0W2tleVdpdGhCcmFuZE9yQ2F0ZWdvcnldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0UG9zdGZpeChwcm9wZXJ0eTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFt0aGlzLnBvc3RmaXhlcy5CUkFORF9DQVRFR09SWV9QT1NURklYLCB0aGlzLnBvc3RmaXhlcy5DQVRFR09SWV9QT1NURklYLCB0aGlzLnBvc3RmaXhlcy5CUkFORF9QT1NURklYXS5maW5kKFxuICAgICAgICAocG9zdGZpeCkgPT4gcHJvcGVydHkuZW5kc1dpdGgocG9zdGZpeClcbiAgICAgICkgfHwgbnVsbFxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZ2V0VHJhbnNsYXRpb24oX2xhbmc6IHN0cmluZyk6IE9ic2VydmFibGU8dW5rbm93bj4ge1xuICAgIHJldHVybiB0aGlzLmdldFRyYW5zbGF0aW9uRGF0YSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUcmFuc2xhdGlvbkRhdGEoKTogT2JzZXJ2YWJsZTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KChvYnNlcnZlcikgPT4ge1xuICAgICAgaWYgKCFpc0VtcHR5KHRoaXMud2luZG93Py5bJ2xvY2FsaXNhdGlvbkRhdGEnXT8ua2V5cykpIHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dCh0aGlzLndpbmRvd1snbG9jYWxpc2F0aW9uRGF0YSddLmtleXMpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLndpbmRvdz8uWydwYWdlTG9jYWxlRGF0YSddPy5idW5kbGUpIHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dCh0aGlzLndpbmRvd1sncGFnZUxvY2FsZURhdGEnXS5idW5kbGUpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dCh7fSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdORyBUcmFuc2xhdGlvbnMgY291bGQgbm90IGJlIGxvYWRlZCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=