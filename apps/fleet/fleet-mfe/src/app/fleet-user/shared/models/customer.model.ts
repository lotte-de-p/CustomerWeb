import { CustomerConstants } from '../constants/customer.constant';
import { RawCommercialAddress, RawCustomerLocationInterface, RawProduct } from '../interfaces/customer.interface';
import { ServiceSegmentEnum } from '../enums/service-segment.enum';

export class Customer {
  readonly isSuccess = true;
  id: string;
  status: string;
  category: string;
  brand: string;
  products: RawProduct[];
  legalAddress: RawCommercialAddress;
  commercialAddress: RawCommercialAddress;
  companyName: string;
  legalForm: string;
  belgianVATNumber: string;
  foreignVATNumber: string;
  belgianEnterpriseNumber: string;
  firstName: string;
  lastName: string;
  accountNumber: string;
  name: string;
  placeOfBirth: string;
  cardIdNumber: string;
  rrn: string;
  customerLocations: RawCustomerLocationInterface[];
  serviceSegment: ServiceSegmentEnum;
  role: string;

  isBusiness(): boolean {
    return this.category && this.category.toLowerCase() === CustomerConstants.CATEGORY_BUSINESS;
  }

  isResidential(): boolean {
    return this.category && this.category.toLowerCase() === CustomerConstants.CATEGORY_RESIDENTIAL;
  }
}
