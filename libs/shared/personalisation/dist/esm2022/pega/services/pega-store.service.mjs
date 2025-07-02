import { Inject, Injectable } from '@angular/core';
import { ContexthubConstants, ContextHubGenericStoreService, } from '@telenet/ng-lib-page';
import { NBAList } from '../nba/v1/models/nba-list.model';
import { Builder } from '@telenet/ng-lib-shared';
import * as i0 from "@angular/core";
import * as i1 from "../nba/v1/services/pega.service";
import * as i2 from "@telenet/ng-lib-datalayer";
export class PegaStoreService extends ContextHubGenericStoreService {
    pegaService;
    dataLayerService;
    constructor(_ngZone, window, pegaService, dataLayerService) {
        super(_ngZone, window, dataLayerService, Builder()
            .storeModel(new NBAList())
            .storeName(ContexthubConstants.STORE_NAME_PEGA)
            .serviceName('PegaStoreService')
            .build());
        this.pegaService = pegaService;
        this.dataLayerService = dataLayerService;
    }
    onLoadData() {
        return this.pegaService.getNBAList();
    }
    static ɵfac = function PegaStoreService_Factory(t) { return new (t || PegaStoreService)(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject('Window'), i0.ɵɵinject(i1.PegaService), i0.ɵɵinject(i2.DataLayerService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PegaStoreService, factory: PegaStoreService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PegaStoreService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i0.NgZone }, { type: Window, decorators: [{
                type: Inject,
                args: ['Window']
            }] }, { type: i1.PegaService }, { type: i2.DataLayerService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVnYS1zdG9yZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3BlZ2Evc2VydmljZXMvcGVnYS1zdG9yZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRzNELE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsNkJBQTZCLEdBRTlCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTFELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUtqRCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsNkJBQXNDO0lBSXZEO0lBQ1A7SUFKWixZQUNFLE9BQWUsRUFDRyxNQUFjLEVBQ2YsV0FBd0IsRUFDL0IsZ0JBQWtDO1FBRTVDLEtBQUssQ0FDSCxPQUFPLEVBQ1AsTUFBTSxFQUNOLGdCQUFnQixFQUNoQixPQUFPLEVBQTJDO2FBQy9DLFVBQVUsQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDO2FBQ3pCLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUM7YUFDOUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDO2FBQy9CLEtBQUssRUFBRSxDQUNYLENBQUM7UUFaZSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUMvQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBWTlDLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7MEVBckJVLGdCQUFnQixzQ0FHakIsUUFBUTtnRUFIUCxnQkFBZ0IsV0FBaEIsZ0JBQWdCLG1CQUZmLE1BQU07O2lGQUVQLGdCQUFnQjtjQUg1QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O3NCQUlJLE1BQU07dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEYXRhTGF5ZXJTZXJ2aWNlIH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLWRhdGFsYXllcic7XG5pbXBvcnQge1xuICBDb250ZXh0aHViQ29uc3RhbnRzLFxuICBDb250ZXh0SHViR2VuZXJpY1N0b3JlU2VydmljZSxcbiAgQ29udGV4dEh1YlN0b3JlQ29uZmlnSW50ZXJmYWNlLFxufSBmcm9tICdAdGVsZW5ldC9uZy1saWItcGFnZSc7XG5pbXBvcnQgeyBOQkFMaXN0IH0gZnJvbSAnLi4vbmJhL3YxL21vZGVscy9uYmEtbGlzdC5tb2RlbCc7XG5pbXBvcnQgeyBQZWdhU2VydmljZSB9IGZyb20gJy4uL25iYS92MS9zZXJ2aWNlcy9wZWdhLnNlcnZpY2UnO1xuaW1wb3J0IHsgQnVpbGRlciB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1zaGFyZWQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUGVnYVN0b3JlU2VydmljZSBleHRlbmRzIENvbnRleHRIdWJHZW5lcmljU3RvcmVTZXJ2aWNlPE5CQUxpc3Q+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgX25nWm9uZTogTmdab25lLFxuICAgIEBJbmplY3QoJ1dpbmRvdycpIHdpbmRvdzogV2luZG93LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGVnYVNlcnZpY2U6IFBlZ2FTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBkYXRhTGF5ZXJTZXJ2aWNlOiBEYXRhTGF5ZXJTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKFxuICAgICAgX25nWm9uZSxcbiAgICAgIHdpbmRvdyxcbiAgICAgIGRhdGFMYXllclNlcnZpY2UsXG4gICAgICBCdWlsZGVyPENvbnRleHRIdWJTdG9yZUNvbmZpZ0ludGVyZmFjZTxOQkFMaXN0Pj4oKVxuICAgICAgICAuc3RvcmVNb2RlbChuZXcgTkJBTGlzdCgpKVxuICAgICAgICAuc3RvcmVOYW1lKENvbnRleHRodWJDb25zdGFudHMuU1RPUkVfTkFNRV9QRUdBKVxuICAgICAgICAuc2VydmljZU5hbWUoJ1BlZ2FTdG9yZVNlcnZpY2UnKVxuICAgICAgICAuYnVpbGQoKVxuICAgICk7XG4gIH1cblxuICBvbkxvYWREYXRhKCk6IE9ic2VydmFibGU8TkJBTGlzdD4ge1xuICAgIHJldHVybiB0aGlzLnBlZ2FTZXJ2aWNlLmdldE5CQUxpc3QoKTtcbiAgfVxufVxuIl19