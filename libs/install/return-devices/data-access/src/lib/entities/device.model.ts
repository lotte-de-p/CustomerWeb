export interface Device {
  name: string;
  type: string;
  typeImageName: string;
  addressId: string;
  locationId: string;
  serialNumber: string;
  parentId: string;
  returnDueDate: string;
  lateFee: number;
  status: string;
  returnStatus: ReturnStatusEnum;
  isToggled?: boolean;
}

export enum ReturnStatusEnum {
  EXPIRED = 'expired',
  URGENT = 'urgent',
  TO_BE_EXPECTED = 'to-be-expected',
}
