import { Injectable } from '@angular/core';
import localeFR from '@angular/common/locales/fr-BE';
import localeEN from '@angular/common/locales/en-BE';
import localeNL from '@angular/common/locales/nl-BE';
import { registerLocaleData } from '@angular/common';
import { LanguageEnum } from './language.enum';
import * as i0 from "@angular/core";
import * as i1 from "../page";
import * as i2 from "@ngx-translate/core";
export class I18nService {
    urlService;
    translateService;
    LANGUAGES = Object.values(LanguageEnum);
    DEFAULT_LANGUAGE = LanguageEnum.EN;
    constructor(urlService, translateService) {
        this.urlService = urlService;
        this.translateService = translateService;
    }
    get languages() {
        return this.LANGUAGES;
    }
    setDefaultLanguageAndLocale() {
        this.translateService.addLangs(this.LANGUAGES);
        this.translateService.setDefaultLang(this.DEFAULT_LANGUAGE);
        registerLocaleData(this.getLocale(this.DEFAULT_LANGUAGE));
    }
    setLanguage(language) {
        const lang = language ? language : this.getLanguage();
        this.translateService.use(lang);
        registerLocaleData(this.getLocale(lang));
    }
    getLanguage() {
        return this.urlService.getRequestParamValue('lang', this.DEFAULT_LANGUAGE);
    }
    getLocale(language) {
        switch (language) {
            case LanguageEnum.FR:
                return localeFR;
            case LanguageEnum.NL:
                return localeNL;
            case LanguageEnum.EN:
            default:
                return localeEN;
        }
    }
    static ɵfac = function I18nService_Factory(t) { return new (t || I18nService)(i0.ɵɵinject(i1.UrlService), i0.ɵɵinject(i2.TranslateService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: I18nService, factory: I18nService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(I18nService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.UrlService }, { type: i2.TranslateService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pMThuL2kxOG4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sUUFBUSxNQUFNLCtCQUErQixDQUFDO0FBQ3JELE9BQU8sUUFBUSxNQUFNLCtCQUErQixDQUFDO0FBQ3JELE9BQU8sUUFBUSxNQUFNLCtCQUErQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQU0vQyxNQUFNLE9BQU8sV0FBVztJQUtIO0lBQ0E7SUFMRixTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4QyxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsRUFBRSxDQUFDO0lBRXBELFlBQ21CLFVBQXNCLEVBQ3RCLGdCQUFrQztRQURsQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDbEQsQ0FBQztJQUVKLElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsMkJBQTJCO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDNUQsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxXQUFXLENBQUMsUUFBdUI7UUFDakMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFpQixDQUFDO0lBQzdGLENBQUM7SUFFRCxTQUFTLENBQUMsUUFBZ0I7UUFDeEIsUUFBUSxRQUFRLEVBQUUsQ0FBQztZQUNqQixLQUFLLFlBQVksQ0FBQyxFQUFFO2dCQUNsQixPQUFPLFFBQVEsQ0FBQztZQUNsQixLQUFLLFlBQVksQ0FBQyxFQUFFO2dCQUNsQixPQUFPLFFBQVEsQ0FBQztZQUNsQixLQUFLLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDckI7Z0JBQ0UsT0FBTyxRQUFRLENBQUM7UUFDcEIsQ0FBQztJQUNILENBQUM7cUVBdkNVLFdBQVc7Z0VBQVgsV0FBVyxXQUFYLFdBQVcsbUJBRlYsTUFBTTs7aUZBRVAsV0FBVztjQUh2QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgbG9jYWxlRlIgZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2xvY2FsZXMvZnItQkUnO1xuaW1wb3J0IGxvY2FsZUVOIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9sb2NhbGVzL2VuLUJFJztcbmltcG9ydCBsb2NhbGVOTCBmcm9tICdAYW5ndWxhci9jb21tb24vbG9jYWxlcy9ubC1CRSc7XG5pbXBvcnQgeyByZWdpc3RlckxvY2FsZURhdGEgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTGFuZ3VhZ2VFbnVtIH0gZnJvbSAnLi9sYW5ndWFnZS5lbnVtJztcbmltcG9ydCB7IFVybFNlcnZpY2UgfSBmcm9tICcuLi9wYWdlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEkxOG5TZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBMQU5HVUFHRVMgPSBPYmplY3QudmFsdWVzKExhbmd1YWdlRW51bSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgREVGQVVMVF9MQU5HVUFHRSA9IExhbmd1YWdlRW51bS5FTjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IHVybFNlcnZpY2U6IFVybFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlXG4gICkge31cblxuICBnZXQgbGFuZ3VhZ2VzKCk6IExhbmd1YWdlRW51bVtdIHtcbiAgICByZXR1cm4gdGhpcy5MQU5HVUFHRVM7XG4gIH1cblxuICBzZXREZWZhdWx0TGFuZ3VhZ2VBbmRMb2NhbGUoKTogdm9pZCB7XG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmFkZExhbmdzKHRoaXMuTEFOR1VBR0VTKTtcbiAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uuc2V0RGVmYXVsdExhbmcodGhpcy5ERUZBVUxUX0xBTkdVQUdFKTtcbiAgICByZWdpc3RlckxvY2FsZURhdGEodGhpcy5nZXRMb2NhbGUodGhpcy5ERUZBVUxUX0xBTkdVQUdFKSk7XG4gIH1cblxuICBzZXRMYW5ndWFnZShsYW5ndWFnZT86IExhbmd1YWdlRW51bSk6IHZvaWQge1xuICAgIGNvbnN0IGxhbmcgPSBsYW5ndWFnZSA/IGxhbmd1YWdlIDogdGhpcy5nZXRMYW5ndWFnZSgpO1xuICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS51c2UobGFuZyk7XG4gICAgcmVnaXN0ZXJMb2NhbGVEYXRhKHRoaXMuZ2V0TG9jYWxlKGxhbmcpKTtcbiAgfVxuXG4gIGdldExhbmd1YWdlKCk6IExhbmd1YWdlRW51bSB7XG4gICAgcmV0dXJuIHRoaXMudXJsU2VydmljZS5nZXRSZXF1ZXN0UGFyYW1WYWx1ZSgnbGFuZycsIHRoaXMuREVGQVVMVF9MQU5HVUFHRSkgYXMgTGFuZ3VhZ2VFbnVtO1xuICB9XG5cbiAgZ2V0TG9jYWxlKGxhbmd1YWdlOiBzdHJpbmcpOiB1bmtub3duIHtcbiAgICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgICBjYXNlIExhbmd1YWdlRW51bS5GUjpcbiAgICAgICAgcmV0dXJuIGxvY2FsZUZSO1xuICAgICAgY2FzZSBMYW5ndWFnZUVudW0uTkw6XG4gICAgICAgIHJldHVybiBsb2NhbGVOTDtcbiAgICAgIGNhc2UgTGFuZ3VhZ2VFbnVtLkVOOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsZUVOO1xuICAgIH1cbiAgfVxufVxuIl19