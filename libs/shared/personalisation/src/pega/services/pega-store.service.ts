import { Inject, Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import {
  ContexthubConstants,
  ContextHubGenericStoreService,
  ContextHubStoreConfigInterface,
} from '@telenet/ng-lib-page';
import { NBAList } from '../nba/v1/models/nba-list.model';
import { PegaService } from '../nba/v1/services/pega.service';
import { Builder } from '@telenet/ng-lib-shared';

@Injectable({
  providedIn: 'root',
})
export class PegaStoreService extends ContextHubGenericStoreService<NBAList> {
  constructor(
    _ngZone: NgZone,
    @Inject('Window') window: Window,
    private readonly pegaService: PegaService,
    protected dataLayerService: DataLayerService
  ) {
    super(
      _ngZone,
      window,
      dataLayerService,
      Builder<ContextHubStoreConfigInterface<NBAList>>()
        .storeModel(new NBAList())
        .storeName(ContexthubConstants.STORE_NAME_PEGA)
        .serviceName('PegaStoreService')
        .build()
    );
  }

  onLoadData(): Observable<NBAList> {
    return this.pegaService.getNBAList();
  }
}
