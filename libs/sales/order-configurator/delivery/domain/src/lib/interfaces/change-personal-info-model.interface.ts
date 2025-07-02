import { AddressFieldValue } from './address-field-value.interface';
import { RecipientDetails } from './recipient-details.interface';

export interface RecipientInfo {
  recipientAddress: AddressFieldValue | null;
  recipientDetails: RecipientDetails;
}
