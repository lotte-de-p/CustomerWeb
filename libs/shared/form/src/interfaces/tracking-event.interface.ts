import { DatalayerEventNames } from '@telenet/ng-lib-datalayer';

export interface TrackingEvent {
  label: string;
  value: string;
  type?: DatalayerEventNames;
}
