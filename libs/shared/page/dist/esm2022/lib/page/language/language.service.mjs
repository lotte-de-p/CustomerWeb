import { Inject, Injectable } from '@angular/core';
import localeNL from '@angular/common/locales/nl-BE';
import localeFR from '@angular/common/locales/fr-BE';
import localeEN from '@angular/common/locales/en-BE';
import { LanguageEnum } from '../../i18n/language.enum';
import * as i0 from "@angular/core";
export class LanguageService {
    window;
    constructor(window) {
        this.window = window;
    }
    language;
    getLanguage() {
        let lang = this.window.document.documentElement.lang;
        lang = lang && lang.toLowerCase();
        if (!this.language && lang) {
            switch (true) {
                case lang.includes(LanguageEnum.FR):
                    return LanguageEnum.FR;
                case lang.includes(LanguageEnum.EN):
                    return LanguageEnum.EN;
                case lang.includes(LanguageEnum.NL):
                default:
                    return LanguageEnum.NL;
            }
        }
        else {
            return LanguageEnum.NL;
        }
    }
    getLocale() {
        switch (this.getLanguage()) {
            case LanguageEnum.FR:
                return localeFR;
            case LanguageEnum.EN:
                return localeEN;
            case LanguageEnum.NL:
            default:
                return localeNL;
        }
    }
    getLocaleString() {
        switch (this.getLanguage()) {
            case LanguageEnum.FR:
                return 'fr-BE';
            case LanguageEnum.EN:
                return 'en-BE';
            case LanguageEnum.NL:
            default:
                return 'nl-BE';
        }
    }
    static ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(i0.ɵɵinject('Window')); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LanguageService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: Window, decorators: [{
                type: Inject,
                args: ['Window']
            }] }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvcGFnZS9sYW5ndWFnZS9sYW5ndWFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sUUFBUSxNQUFNLCtCQUErQixDQUFDO0FBQ3JELE9BQU8sUUFBUSxNQUFNLCtCQUErQixDQUFDO0FBQ3JELE9BQU8sUUFBUSxNQUFNLCtCQUErQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFHeEQsTUFBTSxPQUFPLGVBQWU7SUFDcUI7SUFBL0MsWUFBK0MsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO0lBRWpFLFFBQVEsQ0FBZ0I7SUFFeEIsV0FBVztRQUNULElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7UUFDckQsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFLENBQUM7WUFDM0IsUUFBUSxJQUFJLEVBQUUsQ0FBQztnQkFDYixLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztvQkFDakMsT0FBTyxZQUFZLENBQUMsRUFBRSxDQUFDO2dCQUN6QixLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztvQkFDakMsT0FBTyxZQUFZLENBQUMsRUFBRSxDQUFDO2dCQUN6QixLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNwQztvQkFDRSxPQUFPLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDM0IsQ0FBQztRQUNILENBQUM7YUFBTSxDQUFDO1lBQ04sT0FBTyxZQUFZLENBQUMsRUFBRSxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBRUQsU0FBUztRQUNQLFFBQVEsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7WUFDM0IsS0FBSyxZQUFZLENBQUMsRUFBRTtnQkFDbEIsT0FBTyxRQUFRLENBQUM7WUFDbEIsS0FBSyxZQUFZLENBQUMsRUFBRTtnQkFDbEIsT0FBTyxRQUFRLENBQUM7WUFDbEIsS0FBSyxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3JCO2dCQUNFLE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUM7SUFDSCxDQUFDO0lBRUQsZUFBZTtRQUNiLFFBQVEsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7WUFDM0IsS0FBSyxZQUFZLENBQUMsRUFBRTtnQkFDbEIsT0FBTyxPQUFPLENBQUM7WUFDakIsS0FBSyxZQUFZLENBQUMsRUFBRTtnQkFDbEIsT0FBTyxPQUFPLENBQUM7WUFDakIsS0FBSyxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3JCO2dCQUNFLE9BQU8sT0FBTyxDQUFDO1FBQ25CLENBQUM7SUFDSCxDQUFDO3lFQTdDVSxlQUFlLGNBQ04sUUFBUTtnRUFEakIsZUFBZSxXQUFmLGVBQWUsbUJBREYsTUFBTTs7aUZBQ25CLGVBQWU7Y0FEM0IsVUFBVTtlQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7c0JBRW5CLE1BQU07dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGxvY2FsZU5MIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9sb2NhbGVzL25sLUJFJztcbmltcG9ydCBsb2NhbGVGUiBmcm9tICdAYW5ndWxhci9jb21tb24vbG9jYWxlcy9mci1CRSc7XG5pbXBvcnQgbG9jYWxlRU4gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2xvY2FsZXMvZW4tQkUnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VFbnVtIH0gZnJvbSAnLi4vLi4vaTE4bi9sYW5ndWFnZS5lbnVtJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdXaW5kb3cnKSBwcml2YXRlIHJlYWRvbmx5IHdpbmRvdzogV2luZG93KSB7fVxuXG4gIGxhbmd1YWdlPzogTGFuZ3VhZ2VFbnVtO1xuXG4gIGdldExhbmd1YWdlKCk6IExhbmd1YWdlRW51bSB7XG4gICAgbGV0IGxhbmcgPSB0aGlzLndpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZztcbiAgICBsYW5nID0gbGFuZyAmJiBsYW5nLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKCF0aGlzLmxhbmd1YWdlICYmIGxhbmcpIHtcbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICBjYXNlIGxhbmcuaW5jbHVkZXMoTGFuZ3VhZ2VFbnVtLkZSKTpcbiAgICAgICAgICByZXR1cm4gTGFuZ3VhZ2VFbnVtLkZSO1xuICAgICAgICBjYXNlIGxhbmcuaW5jbHVkZXMoTGFuZ3VhZ2VFbnVtLkVOKTpcbiAgICAgICAgICByZXR1cm4gTGFuZ3VhZ2VFbnVtLkVOO1xuICAgICAgICBjYXNlIGxhbmcuaW5jbHVkZXMoTGFuZ3VhZ2VFbnVtLk5MKTpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gTGFuZ3VhZ2VFbnVtLk5MO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTGFuZ3VhZ2VFbnVtLk5MO1xuICAgIH1cbiAgfVxuXG4gIGdldExvY2FsZSgpOiB1bmtub3duIHtcbiAgICBzd2l0Y2ggKHRoaXMuZ2V0TGFuZ3VhZ2UoKSkge1xuICAgICAgY2FzZSBMYW5ndWFnZUVudW0uRlI6XG4gICAgICAgIHJldHVybiBsb2NhbGVGUjtcbiAgICAgIGNhc2UgTGFuZ3VhZ2VFbnVtLkVOOlxuICAgICAgICByZXR1cm4gbG9jYWxlRU47XG4gICAgICBjYXNlIExhbmd1YWdlRW51bS5OTDpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGVOTDtcbiAgICB9XG4gIH1cblxuICBnZXRMb2NhbGVTdHJpbmcoKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHRoaXMuZ2V0TGFuZ3VhZ2UoKSkge1xuICAgICAgY2FzZSBMYW5ndWFnZUVudW0uRlI6XG4gICAgICAgIHJldHVybiAnZnItQkUnO1xuICAgICAgY2FzZSBMYW5ndWFnZUVudW0uRU46XG4gICAgICAgIHJldHVybiAnZW4tQkUnO1xuICAgICAgY2FzZSBMYW5ndWFnZUVudW0uTkw6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ25sLUJFJztcbiAgICB9XG4gIH1cbn1cbiJdfQ==