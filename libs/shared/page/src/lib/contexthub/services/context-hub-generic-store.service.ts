import { Observable, ReplaySubject } from 'rxjs';
import { ContexthubConstants } from '../constants/contexthub.constant';
import { ContextHubModelInterface } from '../interfaces/context-hub-model-interface';
import { ContextHubStoreConfigInterface } from '../interfaces/context-hub-store-config.interface';
import { Inject, NgZone } from '@angular/core';
import { DataLayerAttributes, DataLayerService, EventCategoryEnum, EventTypeEnum } from '@telenet/ng-lib-datalayer';
import { DirectCallLabelEnum } from 'udl';

export class ContextHubGenericStoreService<T extends ContextHubModelInterface<T>> {
  protected readonly STORE_DATA_LOADED_CALL_LABEL = 'store_data_loaded';

  protected contextHubSubject: ReplaySubject<T> = new ReplaySubject<T>(1);

  private isGetDataCallInvoked = false;

  constructor(
    protected _ngZone: NgZone,
    @Inject('Window') protected window: Window,
    protected dataLayerService: DataLayerService,
    protected storeConfig: ContextHubStoreConfigInterface<T>
  ) {
    this.registerAngularService();
    this.registerStoreEventHook();
  }
  enrich<P>(_data: P): T {
    throw new Error('Method not Supported');
  }
  onLoadData<P>(_data?: P): Observable<T> {
    throw new Error('Method not Supported');
  }

  getStoreData(): ReplaySubject<T> {
    const store = this.getStore();
    if (store) {
      const uniqueBindIdentifier = store.name + '_store_ready';
      const triggerForPastEvents = true;
      store.eventing.once(
        ContexthubConstants.EVENT_STORE_READY,
        () => {
          if (!this.isGetDataCallInvoked) {
            this.isGetDataCallInvoked = true;
            store.getData(true);
          }
        },
        uniqueBindIdentifier,
        triggerForPastEvents
      );
    }

    return this.contextHubSubject;
  }

  updateStoreData<PData>(data: PData, updateTimestamp: boolean = true): void {
    const store = this.getStore();
    store?.updateStoreData(data, updateTimestamp);
  }

  onStoreDataLoaded(storeDataObj: T): void {
    if (this.contextHubSubject) {
      storeDataObj = this.handleEnrich(storeDataObj);
      this.contextHubSubject.next(storeDataObj);
      this.contextHubSubject.complete();
      this.contextHubSubject = new ReplaySubject<T>(1);
      this.isGetDataCallInvoked = false;
    }
  }

  private registerAngularService() {
    if (!this.window[ContexthubConstants.ANGULAR_STORE_SERVICE_REF]) {
      this.window[ContexthubConstants.ANGULAR_STORE_SERVICE_REF] = {};
    }

    const angularStoreServiceRef = this.window[ContexthubConstants.ANGULAR_STORE_SERVICE_REF];
    if (angularStoreServiceRef) {
      angularStoreServiceRef[this.storeConfig.serviceName] = { service: this, zone: this._ngZone };
    }
  }

  private getStore() {
    const contextHub = this.window[ContexthubConstants.CONTEXTHUB];
    if (contextHub === undefined || contextHub === null || contextHub?.getStore === null) {
      return null;
    }

    return contextHub.getStore?.(this.storeConfig.storeName);
  }

  private handleEnrich<PData>(storeData: PData): T {
    try {
      return this.enrich(storeData);
    } catch (e) {
      if (this.storeConfig.storeModel?.enrich) {
        return this.storeConfig.storeModel.enrich(storeData);
      }

      return {} as T;
    }
  }

  private registerStoreEventHook() {
    const store = this.getStore();
    if (store === null) {
      return;
    }

    this.sendDataLayerEventOnStoreEvent(
      store,
      this.STORE_DATA_LOADED_CALL_LABEL,
      DirectCallLabelEnum.STORE_DATA_LOADED
    );
  }

  private sendDataLayerEventOnStoreEvent(
    store: StoreInterface,
    storeEvent: string,
    directCallLabel: DirectCallLabelEnum
  ) {
    const triggerForPastEvents = true;
    store.eventing['once'](
      storeEvent + ':' + store.name,
      () => this.sendDataLayerStoreEvent('contexthub ' + storeEvent, directCallLabel, store),
      store.name + '_' + storeEvent,
      triggerForPastEvents
    );
  }

  private sendDataLayerStoreEvent(eventName: string, directCallLabel: DirectCallLabelEnum, store: StoreInterface) {
    const eventInfoData = this.dataLayerService.createEventInfo(eventName, EventTypeEnum.EVENT_TYPE_CH_STORE);
    const category = this.dataLayerService.createCategory(EventCategoryEnum.PRIMARY_CATEGORY_GENERAL);
    const attributes: DataLayerAttributes = {
      storeName: store.name,
    };

    this.dataLayerService.sendEvent({ eventInfo: eventInfoData, attributes, category, directCallLabel });
  }
}

export interface StoreInterface {
  eventing: Record<string, (...args: unknown[]) => boolean | undefined>;
  name: string;
}
