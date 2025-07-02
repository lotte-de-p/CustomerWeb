import { MapperInterface } from '@telenet/ng-lib-shared';
import { Injectable } from '@angular/core';
import isEmpty from 'lodash-es/isEmpty';
import { RawDataUsagePauseInterface } from '../interfaces/raw/raw-data-usage-pause.interface';
import { DataPauseUsageModel } from '../models/data-pause-usage.model';

@Injectable({
  providedIn: 'root',
})
export class DataUsagePauseMapper implements MapperInterface<RawDataUsagePauseInterface, DataPauseUsageModel> {
  toModel(data: RawDataUsagePauseInterface): DataPauseUsageModel {
    const dataUsagePause = new DataPauseUsageModel();
    if (!isEmpty(data)) {
      dataUsagePause.dataPause = data.dataPause;
    }
    return dataUsagePause;
  }
}
