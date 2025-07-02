import { Observable, ReplaySubject } from 'rxjs';
import { ContextHubModelInterface } from '../interfaces/context-hub-model-interface';
import { ContextHubStoreConfigInterface } from '../interfaces/context-hub-store-config.interface';
import { NgZone } from '@angular/core';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
export declare class ContextHubGenericStoreService<T extends ContextHubModelInterface<T>> {
    protected _ngZone: NgZone;
    protected window: Window;
    protected dataLayerService: DataLayerService;
    protected storeConfig: ContextHubStoreConfigInterface<T>;
    protected readonly STORE_DATA_LOADED_CALL_LABEL = "store_data_loaded";
    protected contextHubSubject: ReplaySubject<T>;
    private isGetDataCallInvoked;
    constructor(_ngZone: NgZone, window: Window, dataLayerService: DataLayerService, storeConfig: ContextHubStoreConfigInterface<T>);
    enrich<P>(_data: P): T;
    onLoadData<P>(_data?: P): Observable<T>;
    getStoreData(): ReplaySubject<T>;
    updateStoreData<PData>(data: PData, updateTimestamp?: boolean): void;
    onStoreDataLoaded(storeDataObj: T): void;
    private registerAngularService;
    private getStore;
    private handleEnrich;
    private registerStoreEventHook;
    private sendDataLayerEventOnStoreEvent;
    private sendDataLayerStoreEvent;
}
export interface StoreInterface {
    eventing: Record<string, (...args: unknown[]) => boolean | undefined>;
    name: string;
}
//# sourceMappingURL=context-hub-generic-store.service.d.ts.map