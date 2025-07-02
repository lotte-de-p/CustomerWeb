import {
  AuthorConfiguration,
  BusinessIdentityDetails,
  CustomerCategory,
  IdentityDetails,
  LegalEntityDetails,
  PersonalDetails,
  ProductDetails,
} from './customer-registration.state';
import { createAction, props } from '@ngrx/store';
import { AddressRequestInterface } from '../entities/interfaces/address-request.interface';
import { Address } from '../entities/models/address.model';
import { RawSalesOrderRequestInterface } from '../entities/interfaces/raw-sales-order-request.interface';
import { Municipality } from '../entities/interfaces/municipality.interface';
import { NavsResponseInterface } from '../infrastructure/navs.interface';
import { CustomerResponseInterface } from '../infrastructure/searchCustomer.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { LoginDetails } from '@telenet/ng-lib-ocapi';
import { ItsMeInterface, ItsMeResponseInterface } from '../infrastructure/its-me.interface';
import { AddressStoreInterface } from '../entities/interfaces/address-store.interface';
import { LanguageEnum } from '@telenet/ng-lib-page';

export const setBrand = createAction('[customer - registration] set the brand', props<{ brand: string }>());
export const setCategory = createAction(
  '[customer - registration] set the category',
  props<{ category: CustomerCategory }>()
);

export const savePersonalDetailsAction = createAction(
  '[customer - registration] save personal Details',
  props<PersonalDetails>()
);

export const saveIdentityDetailsAction = createAction(
  '[customer - registration] save identity Details',
  props<IdentityDetails>()
);
export const setAuthorConfigurationAction = createAction(
  '[customer - registration] set author configuration',
  props<AuthorConfiguration>()
);
export const getLocationsAction = createAction('[customer - registration] get locations');
export const getLocationsSuccessAction = createAction(
  '[customer - registration] get locations success response',
  props<{ locations: Municipality[] }>()
);
export const getStreetsAction = createAction('[customer - registration] get streets', props<{ postalCode: string }>());
export const getStreetsSuccessAction = createAction(
  '[customer - registration] get streets success response',
  props<{ streets: string[] }>()
);
export const getStreetsErrorAction = createAction(
  '[customer - registration] get streets Error',
  props<{ error: HttpErrorResponse }>()
);
export const getLocationErrorAction = createAction(
  '[customer - registration] get location Error',
  props<{ error: HttpErrorResponse }>()
);
export const getAddressErrorAction = createAction(
  '[customer - registration] get address Error',
  props<{ error: HttpErrorResponse }>()
);
export const searchCustomerErrorAction = createAction(
  '[customer - registration] get customer search result Error',
  props<{ error: HttpErrorResponse }>()
);
export const getNavsErrorAction = createAction(
  '[customer - registration] get navs result Error',
  props<{ error: HttpErrorResponse }>()
);
export const omapiProductExtractionErrorAction = createAction(
  '[customer - registration] omapi product extraction Error',
  props<{ error: HttpErrorResponse }>()
);
export const searchItsMeCustomerErrorAction = createAction(
  '[customer - registration] get its me customer search result Error',
  props<{ error: HttpErrorResponse }>()
);
export const createCustomerErrorAction = createAction(
  '[customer - registration] create customer error',
  props<{ error: HttpErrorResponse }>()
);
export const getAddressAction = createAction(
  '[customer - registration] get address',
  props<{ payload: AddressRequestInterface }>()
);
export const getAddressSuccessAction = createAction(
  '[customer - registration] get address success response',
  props<{ address: Address[] }>()
);

export const SetAddressStoreAction = createAction(
  '[customer - registration] set address store response',
  props<{ address: AddressStoreInterface }>()
);
export const getSubHouseNoAction = createAction(
  '[customer - registration] get box numbers',
  props<{ address: Address[] }>()
);

export const getBoxNoAction = createAction(
  '[customer - registration] get subHouse numbers',
  props<{ address: Address[] }>()
);
export const getSalesOrderRequestDataAction = createAction(
  '[customer - registration] get salesOrder',
  props<RawSalesOrderRequestInterface>()
);
export const setProductDetailsAction = createAction(
  '[customer - registration] set product details',
  props<{ details: ProductDetails }>()
);
export const saveBusinessIdentityDetailsAction = createAction(
  '[customer - registration] save business indentity Details',
  props<BusinessIdentityDetails>()
);

export const performResidentialNavsCheckAction = createAction('[customer - registration] perform navs check');

export const navsSuccessAction = createAction(
  '[customer - registration] get navs check success response',
  props<{ navsResponse: NavsResponseInterface }>()
);

export const preformResidentialSearchCustomerAction = createAction(
  '[customer - registration] search residential customer'
);

export const preformBusinessSearchCustomerAction = createAction('[customer - registration] search business customer');

export const searchCustomerSuccessAction = createAction(
  '[customer - registration] search customer success response',
  props<{ customerResponse: CustomerResponseInterface }>()
);

export const resetSearchCustomerSuccessAction = createAction(
  '[customer - registration] reset search customer success response'
);

export const finalizeFlowAction = createAction('[customer - registration] finalize flow');

export const createCustomerSuccessAction = createAction('[customer - registration] create customer success');

export const performOmapiProductsExtractionAction = createAction('[customer - registration] extract omapi product');

export const omapiProductExtractionSuccessAction = createAction(
  '[customer - registration] omapi product extraction success response',
  props<{ products: OmapiProduct[] }>()
);

export const resetError = createAction('[customer - registration] reset http error');
export const loginAction = createAction('[customer - registration] Login');
export const loginSuccessAction = createAction(
  '[customer - registration] login success response',
  props<{ loginDetails: LoginDetails }>()
);
export const loginErrorAction = createAction(
  '[customer - registration] login error',
  props<{ error: HttpErrorResponse }>()
);

export const performLegalEntityAction = createAction('[customer - registration] get legal enitity');

export const performLegalEntitySuccessAction = createAction(
  '[customer - registration] perfomr legal entity success action',
  props<{ legalEntityResponse: LegalEntityDetails }>()
);

export const performLegalEntityErrorAction = createAction(
  '[customer - registration] perfomr legal entity error action',
  props<{ error: HttpErrorResponse }>()
);

export const performItsMeSearchAction = createAction(
  '[customer - registration] search its me customer',
  props<{ itsMeParams: ItsMeInterface }>()
);

export const itsMeSearchSuccessAction = createAction(
  '[customer - registration] its me search success response',
  props<{ itsMeResponse: ItsMeResponseInterface }>()
);

export const setLanguageAction = createAction(
  '[customer - registration] set Language',
  props<{ language: LanguageEnum }>()
);
