import { MapperInterface } from '@telenet/ng-lib-shared';
import { RawCustomerInterface } from '../../interfaces/customer.interface';
import { Customer } from '../../models/customer.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerMapper implements MapperInterface<RawCustomerInterface, Customer> {
  toModel(rawCustomerDetails: RawCustomerInterface): Customer {
    return this.createCustomer(rawCustomerDetails);
  }

  private createCustomer(rawCustomerDetails: RawCustomerInterface): Customer {
    const customer = new Customer();
    customer.id = rawCustomerDetails.id;
    customer.status = rawCustomerDetails.status;
    customer.category = rawCustomerDetails.category;
    customer.brand = rawCustomerDetails.brand;
    customer.products = rawCustomerDetails.products;
    customer.legalAddress = rawCustomerDetails.legalAddress;
    customer.commercialAddress = rawCustomerDetails.commercialAddress;
    customer.companyName = rawCustomerDetails.companyName;
    customer.legalForm = rawCustomerDetails.legalForm;
    customer.belgianVATNumber = rawCustomerDetails.belgianVATNumber;
    customer.foreignVATNumber = rawCustomerDetails.foreignVATNumber;
    customer.belgianEnterpriseNumber = rawCustomerDetails.belgianEnterpriseNumber;
    customer.firstName = rawCustomerDetails.firstName;
    customer.lastName = rawCustomerDetails.lastName;
    customer.accountNumber = rawCustomerDetails.accountNumber;
    customer.customerLocations = rawCustomerDetails.customerLocations;
    customer.name = rawCustomerDetails.name;
    customer.placeOfBirth = rawCustomerDetails.placeOfBirth;
    customer.cardIdNumber = rawCustomerDetails.cardIdNumber;
    customer.rrn = rawCustomerDetails.rrn;
    customer.serviceSegment = rawCustomerDetails.serviceSegment;
    return customer;
  }
}
