import { Cart } from 'udl';
import { DatalayerEventNames } from '@telenet/ng-lib-datalayer';

export interface TrackEventInfo {
  label: string;
  event?: {
    name?: DatalayerEventNames;
  };
  cart?: Cart;
}
