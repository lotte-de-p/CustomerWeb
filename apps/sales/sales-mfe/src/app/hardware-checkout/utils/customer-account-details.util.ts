import { CustomerAccountDetails } from '@sales/hardware-checkout/data-access';

export class CustomerAccountDetailsUtil {
  static getCustomerLocationId(
    customerAccountDetails: CustomerAccountDetails | undefined,
    isSoho = false
  ): string | undefined {
    let locationId = undefined;
    let matchingContactMethod = undefined;
    if (customerAccountDetails) {
      const customerLocations = customerAccountDetails.customerLocations?.filter(
        (location) => !location.isPseudoLocation
      );
      const customerAddress = this.getCustomerAddress(customerAccountDetails, isSoho);
      if (customerAddress && customerLocations && customerLocations.length > 0) {
        matchingContactMethod = customerLocations.find(
          (customerLocation) => customerLocation.address.id === customerAddress.id
        );
      }
      if (matchingContactMethod) {
        locationId = matchingContactMethod.id;
      } else if (customerLocations && customerLocations.length > 0) {
        locationId = customerLocations[0].id;
      }
    }
    return locationId;
  }

  private static getCustomerAddress(
    customerAccountDetails: CustomerAccountDetails,
    isSoho: boolean
  ):
    | {
        id: string;
        name: string;
      }
    | undefined {
    if (isSoho) {
      return customerAccountDetails.legalAddress;
    }
    return customerAccountDetails.customerAddress;
  }
}
