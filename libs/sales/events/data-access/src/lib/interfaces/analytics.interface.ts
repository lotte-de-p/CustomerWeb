import { DataLayerAttributes } from '@telenet/ng-lib-datalayer';
import { AnalyticsTypeEnum } from '../enums/analytics-type.enum';

export interface AnalyticsInterface {
  type?: AnalyticsTypeEnum;
  name: string;
  statusMessage?: string;
  attributes?: DataLayerAttributes;
}
