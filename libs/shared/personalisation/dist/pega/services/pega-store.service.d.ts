import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { ContextHubGenericStoreService } from '@telenet/ng-lib-page';
import { NBAList } from '../nba/v1/models/nba-list.model';
import { PegaService } from '../nba/v1/services/pega.service';
import * as i0 from "@angular/core";
export declare class PegaStoreService extends ContextHubGenericStoreService<NBAList> {
    private readonly pegaService;
    protected dataLayerService: DataLayerService;
    constructor(_ngZone: NgZone, window: Window, pegaService: PegaService, dataLayerService: DataLayerService);
    onLoadData(): Observable<NBAList>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PegaStoreService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PegaStoreService>;
}
//# sourceMappingURL=pega-store.service.d.ts.map