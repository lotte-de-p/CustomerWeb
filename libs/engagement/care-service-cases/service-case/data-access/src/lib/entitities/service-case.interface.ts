export enum Type {
  INSTALL = 'INSTALL',
  MOVE = 'MOVE',
  TAKEOVER = 'TAKEOVER',
  REPAIR = 'REPAIR',
  HOME_DELIVERY = 'HOME_DELIVERY',
  OTHER = 'OTHER',
}

export enum Status {
  OPEN = 'OPEN',
  RESOLVED = 'RESOLVED',
}

export interface ServiceCase {
  id: string;
  type: Type;
  status: Status;
  creationDate: Date;
  deadlineDate?: Date;
  productType: string;
}
