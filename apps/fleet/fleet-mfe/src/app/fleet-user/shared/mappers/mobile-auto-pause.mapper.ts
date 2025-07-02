import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { RawMobileAutoPauseInterface } from '../interfaces/raw/raw-mobile-auto-pause.interface';
import { AutoPauseUsageModel } from '../models/auto-pause-usage.model';

@Injectable({
  providedIn: 'root',
})
export class MobileAutoPauseMapper implements MapperInterface<RawMobileAutoPauseInterface, AutoPauseUsageModel> {
  toModel(rawUsageLimit: RawMobileAutoPauseInterface): AutoPauseUsageModel {
    const autoPauseLimit = new AutoPauseUsageModel();
    autoPauseLimit.id = rawUsageLimit.id;
    autoPauseLimit.limit = rawUsageLimit.limit;
    return autoPauseLimit;
  }
}
