import { RawCharsInterface } from '../../../../shared/common/interfaces/chars.interface';

export interface ValidateOptionsCheckoutResponseInterface {
  isExistingPlanBundle: boolean;
  planDetails?: VOCPlanDetailsInterface;
  locationId?: string;
  addressId?: string;
  prices?: VOCPricesInterface;
  lineLevelDetails?: VOCPlanDetailsInterface[];
  manualAddress?: VOCManualAddressInterface;
  chars?: RawCharsInterface;
  tvLinePresent?: boolean;
  customerProductId?: string;
}

interface VOCPlanDetailsInterface {
  id: string;
  type: string;
}

interface VOCPricesInterface {
  taxInclPrices: VOCTaxPricesInterface;
  taxExclPrices: VOCTaxPricesInterface;
}

interface VOCTaxPricesInterface {
  currency: string;
  recurrentTotal: string;
}
interface VOCManualAddressInterface {
  postalCode: string;
  municipality: string;
  street: string;
  streetId: string;
  houseNumber: string;
  subHouseNumber: string;
  boxNumber: string;
  country: string;
}
