import { Inject, InjectionToken, LOCALE_ID, NgModule, Optional } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TelenetTranslateLoader } from './main-translate-loader';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export const TESTING_TRANSLATION_CONFIG = new InjectionToken('testing-translation-config');
export class TgTranslateTestingModule {
    constructor(config, translateService) {
        translateService.use(config?.language || 'en');
        translateService.currentLang = config?.language || 'en';
        if (config?.translations) {
            translateService.setTranslation(config?.language || 'en', config?.translations);
        }
    }
    static forRoot(config) {
        return {
            ngModule: TgTranslateTestingModule,
            providers: [
                { provide: TESTING_TRANSLATION_CONFIG, useValue: config },
                { provide: LOCALE_ID, useValue: `${config?.language || 'en'}-BE` },
                { provide: 'Window', useValue: window },
            ],
        };
    }
    static ɵfac = function TgTranslateTestingModule_Factory(t) { return new (t || TgTranslateTestingModule)(i0.ɵɵinject(TESTING_TRANSLATION_CONFIG, 8), i0.ɵɵinject(i1.TranslateService)); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: TgTranslateTestingModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [TranslateModule.forRoot({
                useDefaultLang: true,
                isolate: true,
                extend: false,
                defaultLanguage: 'en',
                loader: {
                    provide: TranslateLoader,
                    useClass: TelenetTranslateLoader,
                },
            }), TranslateModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TgTranslateTestingModule, [{
        type: NgModule,
        args: [{
                imports: [
                    TranslateModule.forRoot({
                        useDefaultLang: true,
                        isolate: true,
                        extend: false,
                        defaultLanguage: 'en',
                        loader: {
                            provide: TranslateLoader,
                            useClass: TelenetTranslateLoader,
                        },
                    }),
                ],
                exports: [TranslateModule],
            }]
    }], () => [{ type: undefined, decorators: [{
                type: Inject,
                args: [TESTING_TRANSLATION_CONFIG]
            }, {
                type: Optional
            }] }, { type: i1.TranslateService }], null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TgTranslateTestingModule, { imports: [i1.TranslateModule], exports: [TranslateModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLXRlc3RpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pMThuL3RyYW5zbGF0ZS10ZXN0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0csT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQW9CLE1BQU0scUJBQXFCLENBQUM7QUFDekYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQUVqRSxNQUFNLENBQUMsTUFBTSwwQkFBMEIsR0FBRyxJQUFJLGNBQWMsQ0FBeUIsNEJBQTRCLENBQUMsQ0FBQztBQXNCbkgsTUFBTSxPQUFPLHdCQUF3QjtJQUNuQyxZQUNrRCxNQUE4QixFQUM5RSxnQkFBa0M7UUFFbEMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxRQUFRLElBQUksSUFBSSxDQUFDLENBQUM7UUFDL0MsZ0JBQWdCLENBQUMsV0FBVyxHQUFHLE1BQU0sRUFBRSxRQUFRLElBQUksSUFBSSxDQUFDO1FBQ3hELElBQUksTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDO1lBQ3pCLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxJQUFJLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDbEYsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQStCO1FBQzVDLE9BQU87WUFDTCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2dCQUN6RCxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxFQUFFLFFBQVEsSUFBSSxJQUFJLEtBQUssRUFBRTtnQkFDbEUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7YUFDeEM7U0FDRixDQUFDO0lBQ0osQ0FBQztrRkFyQlUsd0JBQXdCLGNBRXpCLDBCQUEwQjs0REFGekIsd0JBQXdCO2dFQWJqQyxlQUFlLENBQUMsT0FBTyxDQUFDO2dCQUN0QixjQUFjLEVBQUUsSUFBSTtnQkFDcEIsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsZUFBZTtvQkFDeEIsUUFBUSxFQUFFLHNCQUFzQjtpQkFDakM7YUFDRixDQUFDLEVBRU0sZUFBZTs7aUZBRWQsd0JBQXdCO2NBZnBDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsZUFBZSxDQUFDLE9BQU8sQ0FBQzt3QkFDdEIsY0FBYyxFQUFFLElBQUk7d0JBQ3BCLE9BQU8sRUFBRSxJQUFJO3dCQUNiLE1BQU0sRUFBRSxLQUFLO3dCQUNiLGVBQWUsRUFBRSxJQUFJO3dCQUNyQixNQUFNLEVBQUU7NEJBQ04sT0FBTyxFQUFFLGVBQWU7NEJBQ3hCLFFBQVEsRUFBRSxzQkFBc0I7eUJBQ2pDO3FCQUNGLENBQUM7aUJBQ0g7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQzNCOztzQkFHSSxNQUFNO3VCQUFDLDBCQUEwQjs7c0JBQUcsUUFBUTs7d0ZBRnBDLHdCQUF3Qiw2Q0FGekIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0aW9uVG9rZW4sIExPQ0FMRV9JRCwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVMb2FkZXIsIFRyYW5zbGF0ZU1vZHVsZSwgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgVGVsZW5ldFRyYW5zbGF0ZUxvYWRlciB9IGZyb20gJy4vbWFpbi10cmFuc2xhdGUtbG9hZGVyJztcblxuZXhwb3J0IGNvbnN0IFRFU1RJTkdfVFJBTlNMQVRJT05fQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPFRlc3RpbmdUcmFuc2xhdGVDb25maWc+KCd0ZXN0aW5nLXRyYW5zbGF0aW9uLWNvbmZpZycpO1xuXG5pbnRlcmZhY2UgVGVzdGluZ1RyYW5zbGF0ZUNvbmZpZyB7XG4gIGxhbmd1YWdlPzogJ2ZyJyB8ICdubCcgfCAnZW4nO1xuICB0cmFuc2xhdGlvbnM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCB1bmtub3duPjtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KHtcbiAgICAgIHVzZURlZmF1bHRMYW5nOiB0cnVlLFxuICAgICAgaXNvbGF0ZTogdHJ1ZSxcbiAgICAgIGV4dGVuZDogZmFsc2UsXG4gICAgICBkZWZhdWx0TGFuZ3VhZ2U6ICdlbicsXG4gICAgICBsb2FkZXI6IHtcbiAgICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxuICAgICAgICB1c2VDbGFzczogVGVsZW5ldFRyYW5zbGF0ZUxvYWRlcixcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGV4cG9ydHM6IFtUcmFuc2xhdGVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBUZ1RyYW5zbGF0ZVRlc3RpbmdNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFRFU1RJTkdfVFJBTlNMQVRJT05fQ09ORklHKSBAT3B0aW9uYWwoKSBjb25maWc6IFRlc3RpbmdUcmFuc2xhdGVDb25maWcsXG4gICAgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZVxuICApIHtcbiAgICB0cmFuc2xhdGVTZXJ2aWNlLnVzZShjb25maWc/Lmxhbmd1YWdlIHx8ICdlbicpO1xuICAgIHRyYW5zbGF0ZVNlcnZpY2UuY3VycmVudExhbmcgPSBjb25maWc/Lmxhbmd1YWdlIHx8ICdlbic7XG4gICAgaWYgKGNvbmZpZz8udHJhbnNsYXRpb25zKSB7XG4gICAgICB0cmFuc2xhdGVTZXJ2aWNlLnNldFRyYW5zbGF0aW9uKGNvbmZpZz8ubGFuZ3VhZ2UgfHwgJ2VuJywgY29uZmlnPy50cmFuc2xhdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IFRlc3RpbmdUcmFuc2xhdGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFRnVHJhbnNsYXRlVGVzdGluZ01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVGdUcmFuc2xhdGVUZXN0aW5nTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogVEVTVElOR19UUkFOU0xBVElPTl9DT05GSUcsIHVzZVZhbHVlOiBjb25maWcgfSxcbiAgICAgICAgeyBwcm92aWRlOiBMT0NBTEVfSUQsIHVzZVZhbHVlOiBgJHtjb25maWc/Lmxhbmd1YWdlIHx8ICdlbid9LUJFYCB9LFxuICAgICAgICB7IHByb3ZpZGU6ICdXaW5kb3cnLCB1c2VWYWx1ZTogd2luZG93IH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==