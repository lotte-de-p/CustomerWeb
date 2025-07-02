import { Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DatePipe, NgIf, NgClass } from '@angular/common';
import { filter, finalize, map, switchMap, takeUntil } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorMessage, MessageService, SuccessMessage } from '@telenet/ng-lib-message';
import { AbstractBaseComponent, LoaderService } from '@telenet/ng-lib-page';
import { DomService } from '@telenet/ng-lib-shared';
import { LineIdentificationDetailsConstants } from '../../constants/line-identification-details.constants';
import { SalutationInputOptionService } from '../../services/salutation-input-option.service';
import { EventDataLayerService } from '../../services/event-data-layer.service';
import { LanguageInputOptionService } from '../../services/language-input-option.service';
import { ContactDetails } from '../../../../shared/common/models/contact/contact-details.model';
import { ProductContactDescriptionInterface } from '../../interfaces/product-contact-description.interface';
import { DuplicateContactComponent } from '../duplicate-contact/duplicate-contact.component';
import { UpdateContactDetails } from '../../../../shared/common/interfaces/contact/update-contact-details.interface';
import { ContactUpdateService } from '../../services/contact-update.service';
import { CustomerContactService } from '../../../../shared/common/services/contact/customer-contact.service';
import { LineContactDetailsMapper } from '../../../../shared/common/mappers/contact/line-contact-details.mapper';
import { DetailInterface } from '../../../../shared/common/interfaces/contact/detail.interface';
import {
  RawContactDetailsInterfaceData,
  RawContactInfoInterface,
  RawIndividualInterface,
} from '../../../../shared/common/interfaces/contact/raw-contact-details.interface';
import { TranslateModule } from '@ngx-translate/core';
import { TgFormsModule } from '@telenet/ng-lib-form';

@Component({
  selector: 'tg-line-information-actions',
  templateUrl: './line-information-actions.component.html',
  standalone: true,
  imports: [NgIf, TgFormsModule, NgClass, TranslateModule],
})
export class LineInformationActionsComponent extends AbstractBaseComponent {
  @Input() unSuspendSimUrl: string;
  @Input() suspendSimUrl: string;
  @Input() formGroup: FormGroup;
  @Input() msisdn: string;
  @Input() simStatus: string;
  @Input() newContactDetails: boolean;
  @Input() showIdentificationDetailsBtn: boolean;
  @Output() resetForm = new EventEmitter<boolean>();
  messageGroup = LineIdentificationDetailsConstants.MESSAGE_GROUP;
  showDialog = false;

  private readonly salutationInputOptionService: SalutationInputOptionService;
  private readonly languageInputOptionService: LanguageInputOptionService;
  private readonly eventDataLayerService: EventDataLayerService;
  private readonly messageService: MessageService;
  private readonly domService: DomService;
  private readonly loaderService: LoaderService;

  constructor(
    private readonly injector: Injector,
    private readonly contactUpdateService: ContactUpdateService,
    private readonly customerContactService: CustomerContactService,
    private readonly datePipe: DatePipe,
    private readonly dialog: MatDialog,
    private readonly lineContactDetailsMapper: LineContactDetailsMapper
  ) {
    super();
    this.salutationInputOptionService = this.injector.get<SalutationInputOptionService>(SalutationInputOptionService);
    this.languageInputOptionService = this.injector.get<LanguageInputOptionService>(LanguageInputOptionService);
    this.eventDataLayerService = this.injector.get<EventDataLayerService>(EventDataLayerService);
    this.domService = this.injector.get<DomService>(DomService);
    this.loaderService = this.injector.get<LoaderService>(LoaderService);
    this.messageService = this.injector.get<MessageService>(MessageService);
  }

  get isStatusActive(): boolean {
    return this.simStatus === LineIdentificationDetailsConstants.SIM_STATUS_ACTIVE;
  }

  get isStatusSuspended(): boolean {
    return this.simStatus === LineIdentificationDetailsConstants.SIM_STATUS_SUSPENDED;
  }

  save(): void {
    if (this.formGroup.invalid) {
      return;
    }
    if (this.showIdentificationDetailsBtn) {
      this.updateDescription();
    } else {
      this.newContactDetails ? this.checkDuplicateContact() : this.updateCustomerContact();
    }
  }

  getUrlWithQueryParams(url?: string): string {
    if (!!url && url.indexOf(LineIdentificationDetailsConstants.MSISDN_DYNAMIC_KEY_INPUT) !== -1) {
      return url.replace(LineIdentificationDetailsConstants.MSISDN_DYNAMIC_KEY_INPUT, this.msisdn);
    }
    return url!;
  }

  updateCustomerContact(): void {
    const contactDetails = this.getContactDetailsForUpdate();
    this.customerContactService
      .updateContactDetailsAndReferenceInfo(this.messageGroup, this.msisdn, contactDetails)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: () => {
          this.successAction(true);
          this.eventDataLayerService.addEventToDataLayer(this.formGroup);
        },
        error: () => this.failAction(),
      });
  }

  checkDuplicateContact(): void {
    const contactDetailsToCheck = this.getContactDetailsForCreate();
    this.customerContactService
      .duplicateCheck(this.messageGroup, contactDetailsToCheck)
      .pipe(filter((response) => !!response))
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((contactDetailsList: ContactDetails[]) => {
        if (contactDetailsList.length > 0) {
          const contactDetails = this.lineContactDetailsMapper.toModel(contactDetailsToCheck);
          contactDetails.contactId = LineIdentificationDetailsConstants.DEFAULT_VALUE;
          this.openDuplicateContactOverlay(contactDetailsList, contactDetails);
        } else {
          this.createNewCustomerContact();
        }
      });
  }

  updateDescription(contactId?: string): void {
    const contactDescription = this.getProductContactDescription(contactId);

    this.loaderService.start();
    this.contactUpdateService
      .updateContactReferenceInProduct(this.messageGroup, this.msisdn, contactDescription)
      .pipe(finalize(() => this.loaderService.stop()))
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: () => this.successAction(true),
        error: () => this.failAction(),
      });
  }

  createNewCustomerContact(): void {
    this.loaderService.start();
    this.obs(
      this.customerContactService.createCustomerContact(this.messageGroup, this.getContactDetailsForCreate()).pipe(
        filter((newCustomerContact) => !!newCustomerContact && !!newCustomerContact.contactId),
        map((newCustomerContact) => newCustomerContact.contactId),
        switchMap((contactId) =>
          this.contactUpdateService.updateContactReferenceInProduct(
            this.messageGroup,
            this.msisdn,
            this.getCustomerDescription(contactId)
          )
        )
      )
    )
      .pipe(finalize(() => this.loaderService.stop()))
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: () => this.successAction(true),
        error: () => this.failAction(),
      });
  }

  private getProductContactDescription(contactId?: string): ProductContactDescriptionInterface {
    const productContactDescription = {
      referenceInformation: this.formGroup.get('description')?.value,
    } as ProductContactDescriptionInterface;

    if (contactId) {
      productContactDescription.customerContactId = contactId;
    }

    return productContactDescription;
  }

  private openDuplicateContactOverlay(
    duplicateContactDetails: ContactDetails[],
    contactDetailsToCheck: ContactDetails
  ): void {
    const dialogRef = this.dialog.open(DuplicateContactComponent, {
      data: { duplicateContactOptionList: [...duplicateContactDetails, contactDetailsToCheck] },
    });

    dialogRef
      .afterClosed()
      .pipe(filter((customerId) => !!customerId))
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((contactId) =>
        contactId === LineIdentificationDetailsConstants.DEFAULT_VALUE
          ? this.createNewCustomerContact()
          : this.updateDescription(contactId)
      );
  }

  private successAction(reset: boolean): void {
    this.messageService.clearMessages(this.messageGroup);
    this.messageService.addMessage(
      new SuccessMessage(this.messageGroup, LineIdentificationDetailsConstants.UPDATE_MESSAGE)
    );
    this.formGroup.reset(this.formGroup.value);
    if (reset) {
      this.resetForm.emit(reset);
    }
    this.domService.scrollToTop();
  }

  private failAction(): void {
    this.messageService.clearMessages(this.messageGroup);
    this.messageService.addMessage(
      new ErrorMessage(this.messageGroup, LineIdentificationDetailsConstants.UPDATE_MESSAGE)
    );
    this.domService.scrollToTop();
  }

  private getCustomerDescription(contactId?: string): ProductContactDescriptionInterface {
    const productContactDescription = {} as ProductContactDescriptionInterface;

    productContactDescription.customerContactId = contactId;
    productContactDescription.referenceInformation = this.formGroup.get('description')?.value;

    return productContactDescription;
  }

  private getContactDetailsForCreate(): RawContactDetailsInterfaceData {
    const contactDetails = {} as RawContactDetailsInterfaceData;

    contactDetails.individual = {} as RawIndividualInterface;
    contactDetails.individual.firstname = this.formGroup.get('firstName')?.value;
    contactDetails.individual.lastname = this.formGroup.get('lastName')?.value;
    contactDetails.individual.epithet = this.salutationInputOptionService.getEpithet(
      this.formGroup.get('salutation')?.value
    );
    contactDetails.contactinfo = {} as RawContactInfoInterface;
    contactDetails.contactinfo.emails = [this.getDetails('email')];
    contactDetails.contactinfo.phones = [this.getDetails('phoneNumber')];
    contactDetails.language = this.languageInputOptionService.getLanguageValue(this.formGroup.get('language')?.value);
    contactDetails.birthdate = this.datePipe.transform(
      this.getFormattedDate(),
      LineIdentificationDetailsConstants.CREATE_DATE_FORMAT
    );

    return contactDetails;
  }

  private getContactDetailsForUpdate(): UpdateContactDetails {
    const customerContactDetailsModel = {} as UpdateContactDetails;

    customerContactDetailsModel.firstName = this.formGroup.get('firstName')?.value;
    customerContactDetailsModel.lastName = this.formGroup.get('lastName')?.value;
    customerContactDetailsModel.language = this.languageInputOptionService.getLanguageValue(
      this.formGroup.get('language')?.value
    );
    customerContactDetailsModel.emails = [this.getDetails('email')];
    customerContactDetailsModel.phones = [this.getDetails('phoneNumber')];
    customerContactDetailsModel.birthDate = this.datePipe.transform(
      this.getFormattedDate(),
      LineIdentificationDetailsConstants.UPDATE_DATE_FORMAT
    );
    customerContactDetailsModel.gender = this.salutationInputOptionService.getGender(
      this.formGroup.get('salutation')?.value
    );
    customerContactDetailsModel.referenceInformation = this.formGroup.get('description')?.value;

    return customerContactDetailsModel;
  }

  private getDetails(parent: string): DetailInterface {
    const detailPair = {} as DetailInterface;

    detailPair.id = this.formGroup.get([parent, 'id'])?.value;
    detailPair.value = this.formGroup.get([parent, `${parent}Value`])?.value;

    return detailPair;
  }

  private getFormattedDate(): Date {
    const month = this.formGroup.controls['selectedMonth'] && this.formGroup.controls['selectedMonth'].value;

    return new Date(
      parseInt(this.formGroup.controls['year'] && this.formGroup.controls['year'].value, 10),
      month - 1,
      parseInt(this.formGroup.controls['day'] && this.formGroup.controls['day'].value, 10)
    );
  }

  closeOverlay() {
    this.showDialog = false;
  }

  emitAction() {
    this.showDialog = !this.showDialog;
    this.domService.scrollToTop();
  }
}
