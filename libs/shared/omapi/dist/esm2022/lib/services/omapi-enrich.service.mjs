import { Injectable } from '@angular/core';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';
import { cloneDeep, isEmpty } from 'lodash-es';
import { OmapiUtils } from '../utils';
import * as i0 from "@angular/core";
import * as i1 from "./omapi-product.service";
import * as i2 from "../mappers";
export class OmapiEnrichService {
    omapiProductService;
    omapiProductMapper;
    constructor(omapiProductService, omapiProductMapper) {
        this.omapiProductService = omapiProductService;
        this.omapiProductMapper = omapiProductMapper;
    }
    enrichResponseWithOmapiData(messageGroup, response) {
        const copy = cloneDeep(response);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return forkJoin(this.getOmapiObservables(messageGroup, copy)).pipe(map(() => copy));
    }
    getOmapiObservables(messageGroup, data, specUrls = []) {
        if (data === undefined || data === null) {
            return specUrls;
        }
        Object.entries(data).forEach(([key, value]) => {
            if (key === 'specurl') {
                const sofyComboProduct = OmapiUtils.getComboProducts(data.omapiid);
                if (isEmpty(sofyComboProduct)) {
                    const omapiProduct$ = this.omapiProductService
                        // eslint-disable-next-line @typescript-eslint/ban-types
                        .getProductByEndpoint(messageGroup, value.toString())
                        .pipe(tap((omapiProduct) => {
                        data['productInfo'] = omapiProduct;
                    }), catchError(() => {
                        return of(undefined);
                    }), switchMap((omapiProduct) => this.enrichConstituents(messageGroup, omapiProduct)));
                    specUrls.push(omapiProduct$);
                }
                else {
                    data['productInfo'] = this.omapiProductMapper.toModel({ product: sofyComboProduct });
                }
            }
            if (typeof value === 'object') {
                this.getOmapiObservables(messageGroup, value, specUrls);
            }
        });
        if (isEmpty(specUrls)) {
            return [of(data)];
        }
        return specUrls;
    }
    enrichConstituents(messageGroup, product) {
        if (product === undefined || product.getConstituents().length === 0) {
            return of([]);
        }
        return forkJoin(product.getConstituents().map((constituentInterface) => {
            return this.omapiProductService.getProductByEndpoint(messageGroup, constituentInterface.specurl).pipe(tap((omapiProduct) => {
                constituentInterface.productInfo = omapiProduct;
            }));
        }));
    }
    static ɵfac = function OmapiEnrichService_Factory(t) { return new (t || OmapiEnrichService)(i0.ɵɵinject(i1.OmapiProductService), i0.ɵɵinject(i2.OmapiProductMapper)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OmapiEnrichService, factory: OmapiEnrichService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OmapiEnrichService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.OmapiProductService }, { type: i2.OmapiProductMapper }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib21hcGktZW5yaWNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL29tYXBpLWVucmljaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxRQUFRLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7QUFNdEMsTUFBTSxPQUFPLGtCQUFrQjtJQUVYO0lBQ0M7SUFGbkIsWUFDa0IsbUJBQXdDLEVBQ3ZDLGtCQUFzQztRQUR2Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3ZDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFDdEQsQ0FBQztJQUVHLDJCQUEyQixDQUFJLFlBQW9CLEVBQUUsUUFBVztRQUNyRSxNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakMsNkRBQTZEO1FBQzdELGFBQWE7UUFDYixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFTyxtQkFBbUIsQ0FDekIsWUFBb0IsRUFDcEIsSUFBTyxFQUNQLFdBQWtDLEVBQUU7UUFFcEMsSUFBSSxJQUFJLEtBQUssU0FBUyxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUN4QyxPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDO1FBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRSxDQUFDO2dCQUN0QixNQUFNLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25FLElBQUksT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQztvQkFDOUIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLG1CQUFtQjt3QkFDNUMsd0RBQXdEO3lCQUN2RCxvQkFBb0IsQ0FBQyxZQUFZLEVBQUcsS0FBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQzt5QkFDaEUsSUFBSSxDQUNILEdBQUcsQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFO3dCQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsWUFBWSxDQUFDO29CQUNyQyxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsR0FBRyxFQUFFO3dCQUNkLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN2QixDQUFDLENBQUMsRUFDRixTQUFTLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FDakYsQ0FBQztvQkFDSixRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMvQixDQUFDO3FCQUFNLENBQUM7b0JBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RixDQUFDO1lBQ0gsQ0FBQztZQUVELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzFELENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDdEIsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLENBQUM7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRU8sa0JBQWtCLENBQUMsWUFBb0IsRUFBRSxPQUFzQjtRQUNyRSxJQUFJLE9BQU8sS0FBSyxTQUFTLElBQUksT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNwRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQixDQUFDO1FBRUQsT0FBTyxRQUFRLENBQ2IsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLG9CQUFvQixFQUFFLEVBQUU7WUFDckQsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDbkcsR0FBRyxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUU7Z0JBQ25CLG9CQUFvQixDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUM7WUFDbEQsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzRFQXBFVSxrQkFBa0I7Z0VBQWxCLGtCQUFrQixXQUFsQixrQkFBa0IsbUJBRmpCLE1BQU07O2lGQUVQLGtCQUFrQjtjQUg5QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgZm9ya0pvaW4sIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjbG9uZURlZXAsIGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgT21hcGlQcm9kdWN0U2VydmljZSB9IGZyb20gJy4vb21hcGktcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IE9tYXBpUHJvZHVjdE1hcHBlciB9IGZyb20gJy4uL21hcHBlcnMnO1xuaW1wb3J0IHsgT21hcGlVdGlscyB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IE9tYXBpUHJvZHVjdCB9IGZyb20gJy4uL21vZGVscyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPbWFwaUVucmljaFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgb21hcGlQcm9kdWN0U2VydmljZTogT21hcGlQcm9kdWN0U2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IG9tYXBpUHJvZHVjdE1hcHBlcjogT21hcGlQcm9kdWN0TWFwcGVyXG4gICkge31cblxuICBwdWJsaWMgZW5yaWNoUmVzcG9uc2VXaXRoT21hcGlEYXRhPFQ+KG1lc3NhZ2VHcm91cDogc3RyaW5nLCByZXNwb25zZTogVCk6IE9ic2VydmFibGU8VD4ge1xuICAgIGNvbnN0IGNvcHkgPSBjbG9uZURlZXAocmVzcG9uc2UpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIGZvcmtKb2luKHRoaXMuZ2V0T21hcGlPYnNlcnZhYmxlcyhtZXNzYWdlR3JvdXAsIGNvcHkpKS5waXBlKG1hcCgoKSA9PiBjb3B5KSk7XG4gIH1cblxuICBwcml2YXRlIGdldE9tYXBpT2JzZXJ2YWJsZXM8VCBleHRlbmRzIFJhd09tYXBpUHJvZHVjdD4oXG4gICAgbWVzc2FnZUdyb3VwOiBzdHJpbmcsXG4gICAgZGF0YTogVCxcbiAgICBzcGVjVXJsczogT2JzZXJ2YWJsZTx1bmtub3duPltdID0gW11cbiAgKTogT2JzZXJ2YWJsZTx1bmtub3duPltdIHtcbiAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkIHx8IGRhdGEgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBzcGVjVXJscztcbiAgICB9XG5cbiAgICBPYmplY3QuZW50cmllcyhkYXRhKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdzcGVjdXJsJykge1xuICAgICAgICBjb25zdCBzb2Z5Q29tYm9Qcm9kdWN0ID0gT21hcGlVdGlscy5nZXRDb21ib1Byb2R1Y3RzKGRhdGEub21hcGlpZCk7XG4gICAgICAgIGlmIChpc0VtcHR5KHNvZnlDb21ib1Byb2R1Y3QpKSB7XG4gICAgICAgICAgY29uc3Qgb21hcGlQcm9kdWN0JCA9IHRoaXMub21hcGlQcm9kdWN0U2VydmljZVxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbiAgICAgICAgICAgIC5nZXRQcm9kdWN0QnlFbmRwb2ludChtZXNzYWdlR3JvdXAsICh2YWx1ZSBhcyBvYmplY3QpLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgdGFwKChvbWFwaVByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgICAgICBkYXRhWydwcm9kdWN0SW5mbyddID0gb21hcGlQcm9kdWN0O1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBzd2l0Y2hNYXAoKG9tYXBpUHJvZHVjdCkgPT4gdGhpcy5lbnJpY2hDb25zdGl0dWVudHMobWVzc2FnZUdyb3VwLCBvbWFwaVByb2R1Y3QpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICBzcGVjVXJscy5wdXNoKG9tYXBpUHJvZHVjdCQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRhdGFbJ3Byb2R1Y3RJbmZvJ10gPSB0aGlzLm9tYXBpUHJvZHVjdE1hcHBlci50b01vZGVsKHsgcHJvZHVjdDogc29meUNvbWJvUHJvZHVjdCB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICB0aGlzLmdldE9tYXBpT2JzZXJ2YWJsZXMobWVzc2FnZUdyb3VwLCB2YWx1ZSwgc3BlY1VybHMpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChpc0VtcHR5KHNwZWNVcmxzKSkge1xuICAgICAgcmV0dXJuIFtvZihkYXRhKV07XG4gICAgfVxuICAgIHJldHVybiBzcGVjVXJscztcbiAgfVxuXG4gIHByaXZhdGUgZW5yaWNoQ29uc3RpdHVlbnRzKG1lc3NhZ2VHcm91cDogc3RyaW5nLCBwcm9kdWN0PzogT21hcGlQcm9kdWN0KTogT2JzZXJ2YWJsZTxPbWFwaVByb2R1Y3RbXT4ge1xuICAgIGlmIChwcm9kdWN0ID09PSB1bmRlZmluZWQgfHwgcHJvZHVjdC5nZXRDb25zdGl0dWVudHMoKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBvZihbXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcmtKb2luKFxuICAgICAgcHJvZHVjdC5nZXRDb25zdGl0dWVudHMoKS5tYXAoKGNvbnN0aXR1ZW50SW50ZXJmYWNlKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLm9tYXBpUHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdEJ5RW5kcG9pbnQobWVzc2FnZUdyb3VwLCBjb25zdGl0dWVudEludGVyZmFjZS5zcGVjdXJsKS5waXBlKFxuICAgICAgICAgIHRhcCgob21hcGlQcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdGl0dWVudEludGVyZmFjZS5wcm9kdWN0SW5mbyA9IG9tYXBpUHJvZHVjdDtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG5cbmludGVyZmFjZSBSYXdPbWFwaVByb2R1Y3Qge1xuICBvbWFwaWlkOiBzdHJpbmc7XG4gIHByb2R1Y3RJbmZvOiB1bmtub3duO1xufVxuIl19