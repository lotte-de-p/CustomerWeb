export class OrderHistoryModel {
  orderNumber?: string;
  dateCreated?: string;
  status?: string;
  orderItems?: OrderItem[];
}

export class OrderItem {
  name?: string;
  action?: string;
  technical?: boolean;
  identifier?: string;
  orderItems?: OrderItem[];
  validations?: OrderItemValidation[];
}

export class OrderItemValidation {
  validationError?: string;
}
