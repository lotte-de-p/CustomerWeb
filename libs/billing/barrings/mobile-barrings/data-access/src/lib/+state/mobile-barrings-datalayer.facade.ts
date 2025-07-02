import { inject, Injectable } from '@angular/core';
import { MobileBarringsDatalayer } from '../entities/mobile-barrings.interface';
import { MobileBarringsDatalayerService } from '../services/mobile-barrings-datalayer.service';

@Injectable({ providedIn: 'root' })
export class MobileBarringsDatalayerFacade {
  private readonly mobileBarringsDatalayerService = inject(MobileBarringsDatalayerService);

  initDataLayer(): void {
    this.mobileBarringsDatalayerService.initDataLayer();
  }

  sendDatalayerEvent(event: MobileBarringsDatalayer) {
    this.mobileBarringsDatalayerService.sendDataLayerEventWithAttributes(event);
  }
}
