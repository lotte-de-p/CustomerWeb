import { CommercialAddressDto, CustomerLocationDto, ProductDto } from '../interfaces/dto/customer-dto.interface';
import { ServiceSegmentEnum } from '../enums/service-segment.enum';
import { CustomerConstants } from '../constants/customer.constant';

export class Customer {
  readonly isSuccess = true;
  id: string;
  status: string;
  category: string;
  brand: string;
  products: ProductDto[];
  legalAddress: CommercialAddressDto;
  commercialAddress: CommercialAddressDto;
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
  customerLocations: CustomerLocationDto[];
  serviceSegment: ServiceSegmentEnum;
  role: string;

  isBusiness(): boolean {
    return this.category && this.category.toLowerCase() === CustomerConstants.CATEGORY_BUSINESS;
  }
}
