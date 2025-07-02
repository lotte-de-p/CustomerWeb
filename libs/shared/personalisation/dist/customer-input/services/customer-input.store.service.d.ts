import { NgZone } from '@angular/core';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { ContextHubGenericStoreService } from '@telenet/ng-lib-page';
import { CustomerInputStore } from '../models/customer-input-store.model';
import * as i0 from "@angular/core";
export declare class CustomerInputStoreService extends ContextHubGenericStoreService<CustomerInputStore> {
    #private;
    protected dataLayerService: DataLayerService;
    constructor(_ngZone: NgZone, window: Window, dataLayerService: DataLayerService);
    enrichStoreData(fieldName: string, fieldData: unknown): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomerInputStoreService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomerInputStoreService>;
}
//# sourceMappingURL=customer-input.store.service.d.ts.map