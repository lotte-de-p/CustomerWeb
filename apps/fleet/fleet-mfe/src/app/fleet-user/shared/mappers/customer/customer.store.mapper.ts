import { Injectable } from '@angular/core';
import { CustomerStore } from '../../models/customer-store.model';
import { Customer } from '../../models/customer.model';
import { ProfileDetails } from '../../models/profile-details.model';
import { Builder } from '@telenet/ng-lib-shared';

@Injectable({
  providedIn: 'root',
})
export class CustomerStoreMapper {
  toModel(customer: Customer, profileDetails?: ProfileDetails): CustomerStore {
    return Builder(CustomerStore)
      .accountNumber(customer.accountNumber)
      .belgianEnterpriseNumber(customer.belgianEnterpriseNumber)
      .belgianVATNumber(customer.belgianVATNumber)
      .brand(customer.brand)
      .cardIdNumber(customer.cardIdNumber)
      .category(customer.category)
      .commercialAddress(customer.commercialAddress)
      .companyName(customer.companyName)
      .customerLocations(customer.customerLocations)
      .email(profileDetails && profileDetails.email ? profileDetails.email : '')
      .firstName(customer.firstName)
      .foreignVATNumber(customer.foreignVATNumber)
      .id(customer.id)
      .lastName(customer.lastName)
      .legalAddress(customer.legalAddress)
      .legalForm(customer.legalForm)
      .msisdn(profileDetails && profileDetails.msisdn ? profileDetails.msisdn : [])
      .name(customer.name)
      .placeOfBirth(customer.placeOfBirth)
      .products(customer.products)
      .rrn(customer.rrn)
      .status(customer.status)
      .role(profileDetails && profileDetails.role ? profileDetails.role : '')
      .build();
  }
}
