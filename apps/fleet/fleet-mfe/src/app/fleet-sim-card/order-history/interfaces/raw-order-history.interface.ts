export interface RawOrderHistoryInterface {
  orderNumber: string;
  dateCreated: string;
  status: string;
  orderItems: RawOrderItemInterface[];
}

export interface RawOrderItemInterface {
  name: string;
  action: string;
  technical: boolean;
  identifier: string;
  orderItems?: RawOrderItemInterface[];
  validations: RawOrderItemValidationInterface[];
}

export interface RawOrderItemValidationInterface {
  validationError: string;
}
