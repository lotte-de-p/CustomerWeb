import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EmailValidator, InputOption, TgFormsModule } from '@telenet/ng-lib-form';
import { AbstractBaseComponent, LoaderModule, LoaderService, UrlService } from '@telenet/ng-lib-page';
import { PhoneNumberTransformService } from '@telenet/ng-lib-layout';
import { MessageService, MessagesModule } from '@telenet/ng-lib-message';
import { isEmpty } from 'lodash-es';
import { filter, finalize, take } from 'rxjs/operators';
import { DomService } from '@telenet/ng-lib-shared';
import { LineIdentificationDetailsConstants } from './constants/line-identification-details.constants';
import { LanguageInputOptionService } from './services/language-input-option.service';
import { SalutationInputOptionService } from './services/salutation-input-option.service';
import { ProductsService } from '../../shared/common/services/products/products.service';
import { CommonConstants } from '../../shared/common/constants/common.constants';
import { CustomerProductHolding } from '../../shared/common/models/customer-product-holding.model';
import { CustomerContactService } from '../../shared/common/services/contact/customer-contact.service';
import { ContactDetails } from '../../shared/common/models/contact/contact-details.model';
import { ProfileService } from '../../shared/common/services/profile/profile.service';
import { TranslateModule } from '@ngx-translate/core';
import { LineInformationActionsComponent } from './views/line-information-actions/line-information-actions.component';
import { UserProfileFormComponent } from './views/user-profile-form/user-profile-form.component';
import { SimInformationComponent } from './views/sim-information/sim-information.component';
import { NgIf, NgClass } from '@angular/common';
import { LoginModule } from '@telenet/ng-lib-ocapi';

@Component({
  selector: 'tg-line-identification-details',
  templateUrl: './line-identification-details.component.html',
  standalone: true,
  imports: [
    LoaderModule,
    LoginModule,
    MessagesModule,
    NgIf,
    TgFormsModule,
    ReactiveFormsModule,
    SimInformationComponent,
    UserProfileFormComponent,
    NgClass,
    LineInformationActionsComponent,
    TranslateModule,
  ],
})
export class LineIdentificationDetailsComponent extends AbstractBaseComponent {
  @Input() activateSimUrl: string;
  @Input() replaceSimUrl: string;
  @Input() unSuspendSimUrl: string;
  @Input() suspendSimUrl: string;
  @Input() pageType: string;
  @Input() enableLoader: boolean;
  @Input() enableMask: boolean;
  messageGroupName = LineIdentificationDetailsConstants.MESSAGE_GROUP;
  scopes = LineIdentificationDetailsConstants.SCOPES;

  form: FormGroup;
  isContactDetailsEditable: boolean;
  isSIMPending: boolean;
  showIdentificationDetailsBtn: boolean;
  salutationOptionList: InputOption[];
  languages: InputOption[];
  day: number;
  month: number;
  year: number;
  msisdn: string;
  simStatus: string;
  hasContactDetails = false;

  constructor(
    private readonly urlService: UrlService,
    private readonly loaderService: LoaderService,
    private readonly profileService: ProfileService,
    private readonly productsService: ProductsService,
    private readonly customerContactService: CustomerContactService,
    private readonly phoneNumberTransformService: PhoneNumberTransformService,
    private readonly messageService: MessageService,
    private readonly domService: DomService,
    private readonly languageInputOptionService: LanguageInputOptionService,
    private readonly salutationInputOptionService: SalutationInputOptionService
  ) {
    super();
  }

  get isContactDetailsNotEditable() {
    return !this.isContactDetailsEditable;
  }

  initAfterLoggedIn(): void {
    this.salutationOptionList = this.salutationInputOptionService.getSalutationOptions();
    this.languages = this.languageInputOptionService.getLanguageOptions();
    this.msisdn = this.urlService.getParameterByName(CommonConstants.MSISDN)!;
    this.showIdentificationDetailsBtn = true;
    if (this.msisdn) {
      this.initializeForm();
      this.loadIdentificationLines();
    }
  }

  initializeForm(): void {
    this.form = new FormGroup({ description: new FormControl('', Validators.maxLength(80)) });
  }

  loadIdentificationLines(): void {
    this.loadDescription();
    this.loadContactDetails();
  }

  showIdentificationDetails(): void {
    this.addContactDetailsControls();
    this.showIdentificationDetailsBtn = !this.showIdentificationDetailsBtn;
    this.messageService.clearMessages(LineIdentificationDetailsConstants.MESSAGE_GROUP);
    this.domService.scrollToElement(LineIdentificationDetailsConstants.NAVIGATION_CLASS, 0);
  }

  getSimDetailsStatus(simStatus: string) {
    this.simStatus = simStatus;
  }

  getProfileDetailsByMsisdn(): void {
    this.loaderService.start();
    this.profileService
      .getProfileDetailsByMsisdn(LineIdentificationDetailsConstants.MESSAGE_GROUP, this.msisdn)
      .pipe(finalize(() => this.loaderService.stop()))
      .pipe(take(1))
      .subscribe((profileDetails) => {
        this.isContactDetailsEditable = true;
        if (!isEmpty(profileDetails)) {
          const pendingOrInvited = this.isStatusPendingOrInvited(profileDetails[0].status);
          this.isContactDetailsEditable = pendingOrInvited;
          this.showIdentificationDetailsBtn = this.showIdentificationDetailsBtn && !pendingOrInvited;
        }
      });
  }

  autoFormatPhoneNumber(): void {
    const phoneNumber = this.form.get(['phoneNumber', 'phoneNumberValue']);

    if (phoneNumber?.value && !LineIdentificationDetailsConstants.PHONE_NUMBER_REGEX.test(phoneNumber.value)) {
      const phoneNumberValue = phoneNumber.value.replace(
        LineIdentificationDetailsConstants.PHONE_NUMBER_ONLY_NUMBERS,
        ''
      );
      phoneNumber.setValue(this.phoneNumberTransformService.autoFormatPhoneNumber(phoneNumberValue));
    }
  }

  private isPending(status: string): boolean {
    return (
      status === LineIdentificationDetailsConstants.PROFILE_ACTIVATION_IN_PROGRESS ||
      status === LineIdentificationDetailsConstants.PROFILE_STATUS_PENDING ||
      status === LineIdentificationDetailsConstants.PROFILE_PLANNED ||
      status === LineIdentificationDetailsConstants.PROFILE_ACTIVATION_PASSED_PONR ||
      status === LineIdentificationDetailsConstants.PROFILE_CANCELLING_OF_ACTIVATION
    );
  }

  private isStatusPendingOrInvited(status: string | undefined): boolean {
    return (
      status === LineIdentificationDetailsConstants.PROFILE_STATUS_PENDING ||
      status === LineIdentificationDetailsConstants.PROFILE_STATUS_INVITED
    );
  }

  private loadContactDetails(): void {
    this.loaderService.start();
    this.customerContactService
      .getContactDetailsByMsisdn(LineIdentificationDetailsConstants.MESSAGE_GROUP, this.msisdn)
      .pipe(finalize(() => this.loaderService.stop()))
      .pipe(take(1))
      .subscribe({
        next: (contactDetails) => {
          if (!isEmpty(contactDetails.individual)) {
            this.addContactDetailsControls();
            this.populateContactDetailsControls(contactDetails);
            this.showIdentificationDetailsBtn = false;
            this.hasContactDetails = true;
          } else {
            this.hasContactDetails = false;
          }
        },
        complete: () => this.getProfileDetailsByMsisdn(),
      });
  }

  private loadDescription(): void {
    this.loaderService.start();
    this.productsService
      .getProductByIdentifier(LineIdentificationDetailsConstants.MESSAGE_GROUP, this.msisdn, true)
      .pipe(
        filter((customerProductHolding) => !!customerProductHolding),
        finalize(() => this.loaderService.stop())
      )
      .pipe(take(1))
      .subscribe((customerProductHolding: CustomerProductHolding) => {
        this.isSIMPending = this.isPending(customerProductHolding.status);
        this.form.controls['description'].setValue(customerProductHolding.referenceInformation);
      });
  }

  private addContactDetailsControls(): void {
    this.form.addControl('salutation', new FormControl('', Validators.required));
    this.form.addControl('firstName', new FormControl('', Validators.required));
    this.form.addControl('lastName', new FormControl('', Validators.required));
    this.form.addControl(
      'email',
      new FormGroup({
        id: new FormControl(''),
        emailValue: new FormControl('', {
          validators: [Validators.required, EmailValidator.validEmail, Validators.maxLength(80)],
        }),
      })
    );
    this.form.addControl(
      'phoneNumber',
      new FormGroup({
        id: new FormControl(''),
        phoneNumberValue: new FormControl('', [
          Validators.required,
          Validators.pattern(LineIdentificationDetailsConstants.PHONE_NUMBER_REGEX),
        ]),
      })
    );
    this.form.addControl('language', new FormControl('', Validators.required));
  }

  private populateContactDetailsControls(contactDetails: ContactDetails): void {
    if (!isEmpty(contactDetails?.contactInfo?.phones)) {
      const phoneNumber = this.phoneNumberTransformService.autoFormatPhoneNumber(
        contactDetails.contactInfo.phones[0].value
      );
      this.form.get(['phoneNumber', 'id'])?.setValue(contactDetails.contactInfo.phones[0].id);
      this.form.get(['phoneNumber', 'phoneNumberValue'])?.setValue(phoneNumber);
      this.form
        .get('language')
        ?.setValue(this.languageInputOptionService.getTranslatedLanguage(contactDetails.language!));
    }
    if (!isEmpty(contactDetails?.contactInfo?.emails)) {
      this.form.get(['email', 'id'])?.setValue(contactDetails.contactInfo.emails[0].id);
      this.form.get(['email', 'emailValue'])?.setValue(contactDetails.contactInfo.emails[0].value);
    }
    this.form
      .get('salutation')
      ?.setValue(this.salutationInputOptionService.getSalutation(contactDetails.individual.epithet!));
    this.form.get('firstName')?.setValue(contactDetails.individual.firstName);
    this.form.get('lastName')?.setValue(contactDetails.individual.lastName);
    this.setBirthDateDetails(contactDetails.birthDate !== null ? new Date(contactDetails.birthDate) : new Date());
  }

  private setBirthDateDetails(dateOfBirth: Date): void {
    this.day = dateOfBirth.getDate();
    this.month = dateOfBirth.getMonth() + 1;
    this.year = dateOfBirth.getFullYear();

    const dayControl = this.form.get('day');
    const yearControl = this.form.get('year');
    const monthControl = this.form.get('selectedMonth');
    if (dayControl) {
      dayControl.setValue(this.day);
    }
    if (monthControl) {
      monthControl.setValue(this.month);
    }
    if (yearControl) {
      yearControl.setValue(this.year);
    }
  }
}
