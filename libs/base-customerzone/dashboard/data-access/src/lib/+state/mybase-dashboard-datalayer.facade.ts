import { inject, Injectable } from '@angular/core';
import { MyBaseDashboardDatalayerService } from '../services/mybase-dashboard-datalayer.service';
import { MyBaseDashboardDatalayer } from '../entities/mybase-dashboard-datalayer.interface';

@Injectable({ providedIn: 'root' })
export class MyBaseDashboardDatalayerFacade {
  private readonly myBaseDashboardDatalayerService = inject(MyBaseDashboardDatalayerService);

  initDataLayer(): void {
    this.myBaseDashboardDatalayerService.initDataLayer();
  }

  sendDatalayerEvent(event: MyBaseDashboardDatalayer) {
    this.myBaseDashboardDatalayerService.sendDataLayerEventWithAttributes(event);
  }
}
