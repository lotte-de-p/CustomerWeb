import { Inject, Injectable } from '@angular/core';
import { ContexthubConstants, ContextHubGenericStoreService, } from '@telenet/ng-lib-page';
import { Builder } from '@telenet/ng-lib-shared';
import { CustomerInputStore } from '../models/customer-input-store.model';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-datalayer";
export class CustomerInputStoreService extends ContextHubGenericStoreService {
    dataLayerService;
    constructor(_ngZone, window, dataLayerService) {
        super(_ngZone, window, dataLayerService, Builder()
            .storeModel(new CustomerInputStore())
            .storeName('customerinput')
            .serviceName('CustomerInputStoreService')
            .build());
        this.dataLayerService = dataLayerService;
    }
    enrichStoreData(fieldName, fieldData) {
        const customerInputStoreData = this.#getStoreData();
        if (customerInputStoreData) {
            customerInputStoreData[fieldName] = fieldData;
            this.#updateStoreData(customerInputStoreData);
        }
        else {
            console.error('Store data not found');
        }
    }
    #updateStoreData(storeData) {
        const store = new CustomerInputStore();
        Object.assign(store, storeData);
        this.updateStoreData(store);
    }
    #getStoreData() {
        const contextHub = this.window[ContexthubConstants.CONTEXTHUB];
        return contextHub?.getStore(this.storeConfig.storeName)?.getData();
    }
    static ɵfac = function CustomerInputStoreService_Factory(t) { return new (t || CustomerInputStoreService)(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject('Window'), i0.ɵɵinject(i1.DataLayerService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CustomerInputStoreService, factory: CustomerInputStoreService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomerInputStoreService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i0.NgZone }, { type: Window, decorators: [{
                type: Inject,
                args: ['Window']
            }] }, { type: i1.DataLayerService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItaW5wdXQuc3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jdXN0b21lci1pbnB1dC9zZXJ2aWNlcy9jdXN0b21lci1pbnB1dC5zdG9yZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRTNELE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsNkJBQTZCLEdBRTlCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7QUFHMUUsTUFBTSxPQUFPLHlCQUEwQixTQUFRLDZCQUFpRDtJQUlsRjtJQUhaLFlBQ0UsT0FBZSxFQUNHLE1BQWMsRUFDdEIsZ0JBQWtDO1FBRTVDLEtBQUssQ0FDSCxPQUFPLEVBQ1AsTUFBTSxFQUNOLGdCQUFnQixFQUNoQixPQUFPLEVBQXNEO2FBQzFELFVBQVUsQ0FBQyxJQUFJLGtCQUFrQixFQUFFLENBQUM7YUFDcEMsU0FBUyxDQUFDLGVBQWUsQ0FBQzthQUMxQixXQUFXLENBQUMsMkJBQTJCLENBQUM7YUFDeEMsS0FBSyxFQUFFLENBQ1gsQ0FBQztRQVhRLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFZOUMsQ0FBQztJQUVELGVBQWUsQ0FBQyxTQUFpQixFQUFFLFNBQWtCO1FBQ25ELE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXBELElBQUksc0JBQXNCLEVBQUUsQ0FBQztZQUMzQixzQkFBc0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUM7WUFDOUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDaEQsQ0FBQzthQUFNLENBQUM7WUFDTixPQUFPLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDeEMsQ0FBQztJQUNILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxTQUFrQjtRQUNqQyxNQUFNLEtBQUssR0FBdUIsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBRTNELE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRWhDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGFBQWE7UUFDWCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRS9ELE9BQU8sVUFBVSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBQ3JFLENBQUM7bUZBekNVLHlCQUF5QixzQ0FHMUIsUUFBUTtnRUFIUCx5QkFBeUIsV0FBekIseUJBQXlCLG1CQURaLE1BQU07O2lGQUNuQix5QkFBeUI7Y0FEckMsVUFBVTtlQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7c0JBSTdCLE1BQU07dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhTGF5ZXJTZXJ2aWNlIH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLWRhdGFsYXllcic7XG5pbXBvcnQge1xuICBDb250ZXh0aHViQ29uc3RhbnRzLFxuICBDb250ZXh0SHViR2VuZXJpY1N0b3JlU2VydmljZSxcbiAgQ29udGV4dEh1YlN0b3JlQ29uZmlnSW50ZXJmYWNlLFxufSBmcm9tICdAdGVsZW5ldC9uZy1saWItcGFnZSc7XG5pbXBvcnQgeyBCdWlsZGVyIH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLXNoYXJlZCc7XG5pbXBvcnQgeyBDdXN0b21lcklucHV0U3RvcmUgfSBmcm9tICcuLi9tb2RlbHMvY3VzdG9tZXItaW5wdXQtc3RvcmUubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVySW5wdXRTdG9yZVNlcnZpY2UgZXh0ZW5kcyBDb250ZXh0SHViR2VuZXJpY1N0b3JlU2VydmljZTxDdXN0b21lcklucHV0U3RvcmU+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgX25nWm9uZTogTmdab25lLFxuICAgIEBJbmplY3QoJ1dpbmRvdycpIHdpbmRvdzogV2luZG93LFxuICAgIHByb3RlY3RlZCBkYXRhTGF5ZXJTZXJ2aWNlOiBEYXRhTGF5ZXJTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKFxuICAgICAgX25nWm9uZSxcbiAgICAgIHdpbmRvdyxcbiAgICAgIGRhdGFMYXllclNlcnZpY2UsXG4gICAgICBCdWlsZGVyPENvbnRleHRIdWJTdG9yZUNvbmZpZ0ludGVyZmFjZTxDdXN0b21lcklucHV0U3RvcmU+PigpXG4gICAgICAgIC5zdG9yZU1vZGVsKG5ldyBDdXN0b21lcklucHV0U3RvcmUoKSlcbiAgICAgICAgLnN0b3JlTmFtZSgnY3VzdG9tZXJpbnB1dCcpXG4gICAgICAgIC5zZXJ2aWNlTmFtZSgnQ3VzdG9tZXJJbnB1dFN0b3JlU2VydmljZScpXG4gICAgICAgIC5idWlsZCgpXG4gICAgKTtcbiAgfVxuXG4gIGVucmljaFN0b3JlRGF0YShmaWVsZE5hbWU6IHN0cmluZywgZmllbGREYXRhOiB1bmtub3duKTogdm9pZCB7XG4gICAgY29uc3QgY3VzdG9tZXJJbnB1dFN0b3JlRGF0YSA9IHRoaXMuI2dldFN0b3JlRGF0YSgpO1xuXG4gICAgaWYgKGN1c3RvbWVySW5wdXRTdG9yZURhdGEpIHtcbiAgICAgIGN1c3RvbWVySW5wdXRTdG9yZURhdGFbZmllbGROYW1lXSA9IGZpZWxkRGF0YTtcbiAgICAgIHRoaXMuI3VwZGF0ZVN0b3JlRGF0YShjdXN0b21lcklucHV0U3RvcmVEYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignU3RvcmUgZGF0YSBub3QgZm91bmQnKTtcbiAgICB9XG4gIH1cblxuICAjdXBkYXRlU3RvcmVEYXRhKHN0b3JlRGF0YTogdW5rbm93bik6IHZvaWQge1xuICAgIGNvbnN0IHN0b3JlOiBDdXN0b21lcklucHV0U3RvcmUgPSBuZXcgQ3VzdG9tZXJJbnB1dFN0b3JlKCk7XG5cbiAgICBPYmplY3QuYXNzaWduKHN0b3JlLCBzdG9yZURhdGEpO1xuXG4gICAgdGhpcy51cGRhdGVTdG9yZURhdGEoc3RvcmUpO1xuICB9XG5cbiAgI2dldFN0b3JlRGF0YSgpOiBDdXN0b21lcklucHV0U3RvcmUgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IGNvbnRleHRIdWIgPSB0aGlzLndpbmRvd1tDb250ZXh0aHViQ29uc3RhbnRzLkNPTlRFWFRIVUJdO1xuXG4gICAgcmV0dXJuIGNvbnRleHRIdWI/LmdldFN0b3JlKHRoaXMuc3RvcmVDb25maWcuc3RvcmVOYW1lKT8uZ2V0RGF0YSgpO1xuICB9XG59XG4iXX0=