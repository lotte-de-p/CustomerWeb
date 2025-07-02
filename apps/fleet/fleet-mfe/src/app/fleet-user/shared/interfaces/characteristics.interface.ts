import { Address } from '../models/address.model';

export interface CharacteristicsInterface {
  email: string;
  phoneNumber: string;
  companyName: string;
  contactFirstName: string;
  contactLastName: string;
  locationId: string;
  address: Address;
  manualAddress?: Address;
  endDate: string;
  deliveryEmail: string;
  'Cable Network Operator'?: string;
  'Active VOO Customer?'?: string;
  Floor?: string;
  'Location on the Floor'?: string;
  'Connection Needed?'?: string;
}
