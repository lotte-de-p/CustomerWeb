export interface MobileBarrings {
  productName: string;
  updatable: boolean;
  productStatus: string;
  barringGroups: MobileBarringGroup[];
}

export interface MobileBarringGroup {
  code: string;
  barringSettings: MobileBarringSettings[];
  disabledByFraud?: boolean;
}

export interface MobileBarringSettings {
  id: string;
  code: string;
  isBarred: boolean;
  mutualExclusiveBarringIds?: string[];
  isSetByFraudManager: boolean;
}

export interface UpdateMobileBarrings {
  updateBarringSettings: BarringsToUpdate[];
  advisorId?: string | undefined;
}

export interface BarringsToUpdate {
  id: string;
  isBarred: boolean;
}

export const ALL_INCOMING_AND_OUTGOING = 'all-incoming-and-outgoing';
export const ALL_INCOMING_AND_OUTGOING_GROUP = 'general';

export enum MobileBarringStatus {
  ACTIVE_STATUS = 'ACTIVE',
  SUSPENDED_STATUS = 'SUSPENDED',
  ACTIVATION_IN_PROGRESS_STATUS = 'ACTIVATION_IN_PROGRESS',
  DISCONNECTION_IN_PROGRESS_STATUS = 'DISCONNECTION_IN_PROGRESS',
  DISCONNECTED_STATUS = 'DISCONNECTED',
}

export interface MobileBarringsDatalayer {
  eventName: string;
  eventType: string;
  attributeName: string;
  attributeData?: string;
  attributeGroup?: string;
  destinationUrl?: string;
}
