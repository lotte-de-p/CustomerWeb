import { UsageTypeEnum } from './usage-type.enum';

export interface SimsState {
  simConfigurations: SimConfiguration[];
  priceAfterChangingOneSimToLimited: Price | null;
  priceAfterChangingOneSimToUnlimited: Price | null;
}

export interface SimConfiguration {
  usageType: UsageTypeEnum;
}

export interface UsageTypeUpdate {
  index: number;
  usageType: UsageTypeEnum;
}

export interface Price {
  price: number;
}
