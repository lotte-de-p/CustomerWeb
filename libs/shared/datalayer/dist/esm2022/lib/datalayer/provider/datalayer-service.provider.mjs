import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../datalayer.service";
export class DataLayerServiceProvider {
    dataLayerService;
    constructor(dataLayerService) {
        this.dataLayerService = dataLayerService;
    }
    init() {
        const timeout = 5000;
        const intervalTimer = 250;
        let numberOfRuns = 0;
        return new Promise((resolve, _) => {
            const interval = setInterval(() => {
                if (this.dataLayerService.init()) {
                    resolve(true);
                    clearInterval(interval);
                }
                else if (timeout <= intervalTimer * numberOfRuns) {
                    clearInterval(interval);
                }
                numberOfRuns++;
            }, 250);
        });
    }
    static ɵfac = function DataLayerServiceProvider_Factory(t) { return new (t || DataLayerServiceProvider)(i0.ɵɵinject(i1.DataLayerService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DataLayerServiceProvider, factory: DataLayerServiceProvider.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataLayerServiceProvider, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.DataLayerService }], null); })();
export function dataLayerServiceProviderFactory(dataLayerServiceProvider) {
    return () => dataLayerServiceProvider.init();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWxheWVyLXNlcnZpY2UucHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2RhdGFsYXllci9wcm92aWRlci9kYXRhbGF5ZXItc2VydmljZS5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFNM0MsTUFBTSxPQUFPLHdCQUF3QjtJQUNOO0lBQTdCLFlBQTZCLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUcsQ0FBQztJQUVuRSxJQUFJO1FBQ0YsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLE1BQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQztRQUMxQixJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7UUFFckIsT0FBTyxJQUFJLE9BQU8sQ0FBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxNQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFO2dCQUNoQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO29CQUNqQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2QsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMxQixDQUFDO3FCQUFNLElBQUksT0FBTyxJQUFJLGFBQWEsR0FBRyxZQUFZLEVBQUUsQ0FBQztvQkFDbkQsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQUNELFlBQVksRUFBRSxDQUFDO1lBQ2pCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNWLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztrRkFuQlUsd0JBQXdCO2dFQUF4Qix3QkFBd0IsV0FBeEIsd0JBQXdCLG1CQUZ2QixNQUFNOztpRkFFUCx3QkFBd0I7Y0FIcEMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztBQXVCRCxNQUFNLFVBQVUsK0JBQStCLENBQUMsd0JBQWtEO0lBQ2hHLE9BQU8sR0FBRyxFQUFFLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDL0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFMYXllclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhbGF5ZXIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRhTGF5ZXJTZXJ2aWNlUHJvdmlkZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRhdGFMYXllclNlcnZpY2U6IERhdGFMYXllclNlcnZpY2UpIHt9XG5cbiAgaW5pdCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCB0aW1lb3V0ID0gNTAwMDtcbiAgICBjb25zdCBpbnRlcnZhbFRpbWVyID0gMjUwO1xuICAgIGxldCBudW1iZXJPZlJ1bnMgPSAwO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCBfKSA9PiB7XG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YUxheWVyU2VydmljZS5pbml0KCkpIHtcbiAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICB9IGVsc2UgaWYgKHRpbWVvdXQgPD0gaW50ZXJ2YWxUaW1lciAqIG51bWJlck9mUnVucykge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgICAgIG51bWJlck9mUnVucysrO1xuICAgICAgfSwgMjUwKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUxheWVyU2VydmljZVByb3ZpZGVyRmFjdG9yeShkYXRhTGF5ZXJTZXJ2aWNlUHJvdmlkZXI6IERhdGFMYXllclNlcnZpY2VQcm92aWRlcikge1xuICByZXR1cm4gKCkgPT4gZGF0YUxheWVyU2VydmljZVByb3ZpZGVyLmluaXQoKTtcbn1cbiJdfQ==