import { ProductContactDescriptionInterface } from '../../../../fleet-profile/line-identification-details/interfaces/product-contact-description.interface';
import { Observable } from 'rxjs';
import { PostRequestSuccessInterface } from '../../interfaces/post-request-success.interface';
import { ProductConstants } from '../../constants/products/product.constant';
import { FleetProductsServiceConstants } from '../../constants/fleet-products-service.constants';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { ProductsService } from '../products/products.service';
import { PostRequestSuccessMapper } from '../../mappers/post-request-success-mapper';
import { ContactDetails } from '../../../../shared/common/models/contact/contact-details.model';
import { ContactDetailsMapper } from '../../mappers/contact/contact-details-mapper';
import { LineContactDetailsListMapper } from '../../mappers/contact/line-contact-details-list.mapper';
import { LineContactDetailsMapper } from '../../mappers/contact/line-contact-details.mapper';
import { UpdateContactDetails } from '../../interfaces/contact/update-contact-details.interface';
import { RawContactDetailsInterfaceData } from '../../interfaces/contact/raw-contact-details.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerContactService {
  constructor(
    private readonly productsService: ProductsService,
    private readonly ocapiService: OcapiService,
    private readonly contactDetailsMapper: ContactDetailsMapper,
    private readonly contactDetailsListMapper: LineContactDetailsListMapper,
    private readonly contactDetailsDataMapper: LineContactDetailsMapper,
    private readonly postRequestSuccessMapper: PostRequestSuccessMapper
  ) {}

  updateCustomerContact(
    messageGroup: string,
    productIdentifier: string,
    postData: ProductContactDescriptionInterface
  ): Observable<PostRequestSuccessInterface> {
    const url = this.productsService.getProductServiceURI(
      ProductConstants.API_VERSION_V1,
      FleetProductsServiceConstants.EMPTY,
      FleetProductsServiceConstants.EMPTY,
      ProductConstants.CONTEXT_PRODUCTS,
      `/${productIdentifier}`
    );
    return this.ocapiService.doPut(new OcapiCallConfig(messageGroup, url, this.postRequestSuccessMapper, postData));
  }

  getContactDetailsByMsisdn(messageGroup: string, msisdn: string | null): Observable<ContactDetails> {
    const endpoint = this.getServiceURI(`?msisdn=${msisdn}`);
    return this.ocapiService.doGet(new OcapiCallConfig(messageGroup, endpoint, this.contactDetailsMapper));
  }

  updateContactDetailsAndReferenceInfo(
    messageGroup: string,
    msisdn: string,
    payload: UpdateContactDetails
  ): Observable<PostRequestSuccessInterface> {
    const url = this.getServiceURI(`?msisdn=${msisdn}`);
    return this.ocapiService.doPost(new OcapiCallConfig(messageGroup, url, this.postRequestSuccessMapper, payload));
  }

  duplicateCheck(messageGroupName: string, profile: RawContactDetailsInterfaceData): Observable<ContactDetails[]> {
    const url = this.getV1ServiceURI('/duplicatecheck');
    return this.ocapiService.doPost(new OcapiCallConfig(messageGroupName, url, this.contactDetailsListMapper, profile));
  }

  createCustomerContact(
    messageGroupName: string,
    contactDetails: RawContactDetailsInterfaceData
  ): Observable<ContactDetails> {
    const context = '/customers/contacts';
    const url = this.getV1ServiceURI(context);

    return this.ocapiService.doPost(
      new OcapiCallConfig(messageGroupName, url, this.contactDetailsDataMapper, contactDetails)
    );
  }

  private getServiceURI(queryParams: string) {
    return '/public/api/fleet-customer-service/'.concat('v2').concat('/contactdetails').concat(queryParams);
  }

  private getV1ServiceURI(contextOrQueryParams: string) {
    return '/public/api/fleet-customer-service/'.concat('v1').concat(contextOrQueryParams);
  }
}
