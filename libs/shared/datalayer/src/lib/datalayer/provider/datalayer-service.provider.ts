import { Injectable } from '@angular/core';
import { DataLayerService } from '../datalayer.service';

@Injectable({
  providedIn: 'root',
})
export class DataLayerServiceProvider {
  constructor(private readonly dataLayerService: DataLayerService) {}

  init(): Promise<boolean> {
    const timeout = 5000;
    const intervalTimer = 250;
    let numberOfRuns = 0;

    return new Promise<boolean>((resolve, _) => {
      const interval = setInterval(() => {
        if (this.dataLayerService.init()) {
          resolve(true);
          clearInterval(interval);
        } else if (timeout <= intervalTimer * numberOfRuns) {
          clearInterval(interval);
        }
        numberOfRuns++;
      }, 250);
    });
  }
}

export function dataLayerServiceProviderFactory(dataLayerServiceProvider: DataLayerServiceProvider) {
  return () => dataLayerServiceProvider.init();
}
