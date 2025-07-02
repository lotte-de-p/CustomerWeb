import { LanguageService, UrlService } from '@telenet/ng-lib-page';
import { Store } from '@ngrx/store';
import { PersonalDetails } from '../+state/customer-registration.state';
import {
  performItsMeSearchAction,
  performOmapiProductsExtractionAction,
  saveIdentityDetailsAction,
  savePersonalDetailsAction,
  setLanguageAction,
} from '../+state/customer-registration.actions';
import { Observable } from 'rxjs';
import {
  selectBrand,
  selectDOB,
  selectItsMeResponse,
  selectPersonalDetails,
} from '../+state/customer-registration.selectors';
import { PhoneNumberTransformService } from '@telenet/ng-lib-layout';
import { Injectable } from '@angular/core';
import { ItsMeInterface, ItsMeResponseInterface } from '../infrastructure/its-me.interface';

@Injectable({ providedIn: 'root' })
export class PersonalDetailsFacade {
  personalDetails$: Observable<PersonalDetails> = this.store.select(selectPersonalDetails);
  brand$: Observable<string> = this.store.select(selectBrand);
  dateOfBirth$: Observable<Date | undefined> = this.store.select(selectDOB);
  itsMeResponse$: Observable<ItsMeResponseInterface> = this.store.select(selectItsMeResponse);

  constructor(
    private readonly store: Store,
    private readonly urlService: UrlService,
    private readonly phoneNumberTransformService: PhoneNumberTransformService,
    private readonly languageService: LanguageService
  ) {}

  savePersonalDetails(personalDetails: PersonalDetails) {
    this.store.dispatch(savePersonalDetailsAction(personalDetails));
  }

  getRequestParams(): Record<string, string> {
    return this.urlService.getRequestParameters();
  }

  formatPhoneNumber(phoneNumber: string): string {
    return this.phoneNumberTransformService.transform(phoneNumber);
  }

  readEncryptedUrlData() {
    const params = this.getRequestParams();
    if (params) {
      this.extractOmapiProducts(params);
      this.checkItsMeParams(params);
    }
  }

  saveDOB(dob: Date) {
    this.store.dispatch(
      saveIdentityDetailsAction({
        dateOfBirth: dob,
        nationalRegistrationNumber: '',
      })
    );
  }

  setLanguage() {
    this.store.dispatch(setLanguageAction({ language: this.languageService.getLanguage() }));
  }

  private extractOmapiProducts(params: Record<string, string>) {
    if (params?.['sdata']) {
      this.store.dispatch(performOmapiProductsExtractionAction());
    }
  }

  private checkItsMeParams(params: Record<string, string>) {
    if (this.ItsMeParamsPresent(params)) {
      const itsMeParams: ItsMeInterface = {
        code: params['code'],
        state: params['state'],
      };
      this.store.dispatch(performItsMeSearchAction({ itsMeParams: itsMeParams }));
    }
  }

  private ItsMeParamsPresent(urlParams: Record<string, string>): boolean {
    const requiredParams: (keyof ItsMeInterface)[] = ['code', 'state'];
    return requiredParams.every((paramKey) => paramKey in urlParams);
  }
}
