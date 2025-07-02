import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, of, withLatestFrom } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { CreateCustomerRequest } from '../entities/interfaces/create-customer-request.interface';
import { AddressConstants } from '../infrastructure/address.constant';
import { AddressService } from '../infrastructure/address.service';
import { CreateCustomerService } from '../infrastructure/create-customer.service';
import { ExtractOmapiProductService } from '../infrastructure/extract-omapi-product.service';
import { NavsService } from '../infrastructure/navs.service';
import { SearchCustomerService } from '../infrastructure/search-customer.service';
import {
  BusinessCustomerSearchInterface,
  ResidentialCustomerSearchInterface,
} from '../infrastructure/searchCustomer.interface';
import * as fromActions from './customer-registration.actions';
import {
  selectAddressByType,
  selectAddressData,
  selectItsMeParams,
  selectLanguage,
  selectNavsCheckResult,
  selectOmapiProduct,
  selectUserInput,
} from './customer-registration.selectors';
import { CustomerRegistrationState } from './customer-registration.state';
import { LoginDetails, LoginService, UserDetailsService } from '@telenet/ng-lib-ocapi';
import { LegalEntityService } from '../infrastructure/legal-entity.service';
import { ItsMeService } from '../infrastructure/its-me.service';
import { NavsInterface } from '../infrastructure/navs.interface';
import { OmapiProductCategoryUtil } from '../util/omapi-product-category.util';
import { ExtractDobUtil } from '@sales/shared/util';

@Injectable({
  providedIn: 'root',
})
export class CustomerRegistrationEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly addressService: AddressService,
    private readonly navsService: NavsService,
    private readonly searchCustomerService: SearchCustomerService,
    private readonly createCustomerService: CreateCustomerService,
    private readonly extractOmapiProductService: ExtractOmapiProductService,
    private readonly userDetailsService: UserDetailsService,
    private readonly loginService: LoginService,
    private readonly legalEntityService: LegalEntityService,
    private readonly itsMeService: ItsMeService,
    private readonly store: Store<CustomerRegistrationState>
  ) {}

  locations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getLocationsAction),
      mergeMap(() => {
        return this.addressService.getMunicipalities().pipe(
          tap(() => fromActions.resetError),
          map((addressLocations) => fromActions.getLocationsSuccessAction({ locations: addressLocations })),
          catchError((error) => of(fromActions.getLocationErrorAction({ error: error })))
        );
      })
    )
  );

  streets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getStreetsAction),
      map((action) => action.postalCode),
      mergeMap((postalCode: string) => {
        return this.addressService.getStreets(postalCode).pipe(
          tap(() => fromActions.resetError),
          map((streets) => fromActions.getStreetsSuccessAction({ streets: streets })),
          catchError((error) => of(fromActions.getStreetsErrorAction({ error: error })))
        );
      })
    )
  );

  address$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getAddressAction),
      mergeMap((action) => {
        return this.addressService.getAddressByData(AddressConstants.ADDRESS_MESSSAGE_GROUP, action.payload).pipe(
          tap(() => fromActions.resetError),
          tap((addresses) => addresses.map((address) => (address.addressType = action.payload.type))),
          map((addresses) => fromActions.getAddressSuccessAction({ address: addresses })),
          catchError((error) => of(fromActions.getAddressErrorAction({ error: error })))
        );
      })
    )
  );

  navsResult$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.performResidentialNavsCheckAction),
      withLatestFrom(
        this.store.select(selectUserInput),
        this.store.select(selectAddressByType('legalAddress')),
        this.store.select(selectOmapiProduct),
        this.store.select(selectNavsCheckResult),
        this.store.select(selectLanguage)
      ),
      mergeMap(([_navsCheck, userInput, address, omapiProducts, navsResult, language]) => {
        const dateOfBirth = new Date(userInput.identityDetails.dateOfBirth ?? '');
        const formattedDoB = ExtractDobUtil.formatDOB(dateOfBirth);
        const request: NavsInterface = {
          firstName: userInput.personalDetails.firstName,
          lastName: userInput.personalDetails.lastName,
          birthday: formattedDoB,
          address: {
            id: address?.addressId,
          },
          language: language,
          isRevalidationAttempt: navsResult?.isRevalidationRequired ?? navsResult.navsStatus === 'REVIEW_NEEDED',
          productDetails: [],
        };
        omapiProducts?.forEach((product) => {
          request.productDetails?.push({
            planType: OmapiProductCategoryUtil.getUpdatedInternalCategory(product.internalCategory),
            productType: product.productType,
          });
        });
        return this.navsService.getResidentialNavs(request).pipe(
          tap((result) => (result.isRevalidationRequired = result.navsStatus === 'REVIEW_NEEDED')),
          map((result) => fromActions.navsSuccessAction({ navsResponse: result })),
          catchError((error) => of(fromActions.getNavsErrorAction({ error: error })))
        );
      })
    )
  );

  residentialCustomerSearchResult$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.preformResidentialSearchCustomerAction),
      withLatestFrom(this.store.select(selectUserInput), this.store.select(selectAddressByType('legalAddress'))),
      mergeMap(([_action, userInput, address]) => {
        const dateOfBirth = new Date(userInput.identityDetails.dateOfBirth ?? '');
        const formattedDoB = `${dateOfBirth.getDate()}/${dateOfBirth.getMonth() + 1}/${dateOfBirth.getFullYear()}`;
        const customer: ResidentialCustomerSearchInterface = {
          customerCategory: 'Residential',
          firstName: userInput.personalDetails?.firstName,
          lastName: userInput.personalDetails?.lastName,
          rrn: userInput.identityDetails?.nationalRegistrationNumber,
          cardIdNumber: userInput.identityDetails?.isBelgianIdentity
            ? userInput.identityDetails?.belgianIdentityCardNumber
            : userInput.identityDetails?.foreignIdentityCardNumber,
          birthday: formattedDoB,
          addressId: address?.addressId,
        };
        return this.searchCustomerService.searchCustomer(customer).pipe(
          tap(() => fromActions.resetError),
          map((result) => fromActions.searchCustomerSuccessAction({ customerResponse: result })),
          catchError((error) => of(fromActions.searchCustomerErrorAction({ error: error })))
        );
      })
    )
  );

  businessCustomerSearchResult$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.preformBusinessSearchCustomerAction),
      withLatestFrom(this.store.select(selectUserInput), this.store.select(selectAddressByType('legalAddress'))),
      mergeMap(([_action, userInput, address]) => {
        const customer: BusinessCustomerSearchInterface = {
          customerCategory: 'Business',
          belgianEnterpriseNumber: userInput.businessIdentityDetails.belgianEnterpriseNumber,
          legalName: userInput.businessIdentityDetails.companyName,
          addressId: address?.addressId,
        };
        return this.searchCustomerService.searchCustomer(customer).pipe(
          tap(() => fromActions.resetError),
          map((result) => fromActions.searchCustomerSuccessAction({ customerResponse: result })),
          catchError((error) => of(fromActions.searchCustomerErrorAction({ error: error })))
        );
      })
    )
  );

  omapiProductsExtractionResult$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.performOmapiProductsExtractionAction),
      mergeMap(() => {
        return this.extractOmapiProductService.extractOmapiProduct().pipe(
          tap(() => fromActions.resetError),
          map((omapiProducts) => fromActions.omapiProductExtractionSuccessAction({ products: omapiProducts })),
          catchError((error) => of(fromActions.omapiProductExtractionErrorAction({ error: error })))
        );
      })
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loginAction),
      mergeMap(() => {
        return this.userDetailsService.getUserDetails().pipe(
          tap((_) => this.loginService.login()),
          map((loginDetails: LoginDetails) => fromActions.loginSuccessAction({ loginDetails: loginDetails })),
          catchError((error) => of(fromActions.loginErrorAction({ error: error })))
        );
      })
    )
  );

  legalEnyityResult$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.performLegalEntityAction),
      mergeMap(() => {
        return this.legalEntityService.getLegalEntityData('customer-registration').pipe(
          map((legalEntities) => fromActions.performLegalEntitySuccessAction({ legalEntityResponse: legalEntities })),
          catchError((error) => of(fromActions.performLegalEntityErrorAction({ error: error })))
        );
      })
    )
  );

  itsMeSearchResult$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.performItsMeSearchAction),
      withLatestFrom(this.store.select(selectItsMeParams)),
      mergeMap(([_action, itsMeParams]) => {
        return this.itsMeService.getItsMeCustomer(itsMeParams).pipe(
          map((itsMeCustomer) => fromActions.itsMeSearchSuccessAction({ itsMeResponse: itsMeCustomer })),
          catchError((error) => of(fromActions.searchItsMeCustomerErrorAction({ error: error })))
        );
      })
    )
  );

  finalizeFlow$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.finalizeFlowAction),
      withLatestFrom(this.store.select(selectUserInput), this.store.select(selectAddressData)),
      mergeMap(([_action, userInput, addresses]) => {
        const address = addresses[0];
        const customerAddress = {
          id: address.addressId ?? '',
        };
        const createCustomerRequest: CreateCustomerRequest = {
          brand: 'Telenet',
          firstName: userInput.personalDetails.firstName,
          lastName: userInput.personalDetails.lastName,
          customerCategory: 'Residential',
          contactsDetails: {
            title: userInput.personalDetails.salutation,
            gender: 'Male',
            eMail: userInput.personalDetails.email,
            birthday: userInput.identityDetails.dateOfBirth?.toISOString() || '',
            phoneNumber: {
              value: userInput.personalDetails.phoneNumber,
              type: 'Mobile Phone',
            },
            communicationLanguage: 'NL',
          },
          rrn: userInput.identityDetails.nationalRegistrationNumber,
          cardIdNumber:
            userInput.identityDetails.belgianIdentityCardNumber ??
            userInput.identityDetails.foreignIdentityCardNumber ??
            '',
          identificationType: 'Belgian Identification',
          documentType: 'E-ID',
          customerAddress: customerAddress,
          customerLocations: [
            {
              address: customerAddress,
            },
          ],
          billingAccount: {
            billDeliveryMethod: 'Email',
          },
          navsScore: '100',
          encryptedData: '',
        };
        return this.createCustomerService.createCustomer(createCustomerRequest).pipe(
          tap(() => fromActions.resetError),
          map(() => fromActions.createCustomerSuccessAction()),
          catchError((error) => of(fromActions.createCustomerErrorAction({ error: error })))
        );
      })
    )
  );
}
