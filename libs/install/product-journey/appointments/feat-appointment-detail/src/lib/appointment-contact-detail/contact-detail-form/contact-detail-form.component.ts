import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Appointment,
  AppointmentFacade,
  AppointmentNgrxModule,
  CustomerInterface,
  NotificationMethodEnum,
} from '@product-journey/appointments/data-access';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputOption, RegexConstants, TgFormsModule } from '@telenet/ng-lib-form';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AppointmentRegexConstant } from '@product-journey/appointments/ui';
import { DomService } from '@telenet/ng-lib-shared';

const NOTIFICATION_METHODS = [
  { value: 'EMAIL', label: 'ng.appointments.lbl.contact-method-email' },
  { value: 'SMS', label: 'ng.appointments.lbl.contact-method-sms' },
];

@UntilDestroy()
@Component({
  standalone: true,
  selector: 'tg-contact-detail-form',
  templateUrl: './contact-detail-form.component.html',
  imports: [CommonModule, AppointmentNgrxModule, TranslateModule, ReactiveFormsModule, TgFormsModule],
})
export class ContactDetailFormComponent implements OnInit, OnChanges {
  @Input() appointment?: Appointment;
  @Input() showEditContactDetail = false;
  @Output() showEditContactForm = new EventEmitter<boolean>();

  private readonly formBuilder = inject(FormBuilder);
  private readonly translate = inject(TranslateService);
  private readonly ref = inject(ChangeDetectorRef);
  private readonly appointmentFacade = inject(AppointmentFacade);
  private readonly domService = inject(DomService);

  readonly MESSAGE_GROUP = 'appointments';

  appointmentContactForm: FormGroup;
  contactMethodOptions: InputOption[];
  customMessageGroup: string;

  ngOnChanges(changes: SimpleChanges): void {
    if ('appointment' in changes) {
      this.appointmentContactForm?.patchValue({
        contactNameField: this.appointment?.customer?.contactName,
        contactMethodField: this.getNotificationMethodValue(this.appointment?.customer?.notificationMethod),
        contactValueField: this.appointment?.customer?.notificationContact,
      });
    }
  }

  ngOnInit(): void {
    this.initializeAndPopulateForm(this.appointment?.customer);
    this.appointmentContactForm
      .get('contactMethodField')
      ?.valueChanges.pipe(untilDestroyed(this))
      .subscribe((value) => {
        this.customContactValueValidation(value);
        this.ref.detectChanges();
      });
  }

  saveAppointmentContact(): boolean {
    if (this.appointmentContactForm.invalid) {
      this.triggerFormValidation();
      return false;
    }
    const contactMethod =
      this.getNotificationMethodLabel(this.appointmentContactForm.get('contactMethodField')?.value) ?? '';
    const request: CustomerInterface = {
      contactName: this.appointmentContactForm.get('contactNameField')?.value,
      language: this.appointment?.customer?.language ?? '',
      notificationMethod: NotificationMethodEnum[contactMethod],
      notificationContact: this.appointmentContactForm.get('contactValueField')?.value,
    };
    this.domService.scrollToStartElement('#appointment-overview');
    this.appointmentFacade.updateContactDetail(request, this.appointment?.appointmentId || '');
    return true;
  }

  cancelSaveAppointmentContact(): void {
    this.showEditContactForm.emit(false);
  }

  private initializeAndPopulateForm(contactDetails?: CustomerInterface): void {
    this.appointmentContactForm = this.formBuilder.group({
      contactNameField: [
        contactDetails?.contactName ?? '',
        [Validators.required, Validators.pattern(AppointmentRegexConstant.TEXT_FIELD_ONLY_ALPHABETS)],
      ],
      contactMethodField: [
        this.getNotificationMethodValue(contactDetails?.notificationMethod?.toString()) ?? '',
        [Validators.required],
      ],
      contactValueField: [contactDetails?.notificationContact ?? '', [Validators.required]],
    });
    this.contactMethodOptions = this.getContactMethodOptions();
    this.customContactValueValidation();
  }

  private getNotificationMethodValue(notificationMethod?: string) {
    return this.getContactMethodOptions().find((method) => method.label === notificationMethod)?.value;
  }

  private getNotificationMethodLabel(notificationMethod?: NotificationMethodEnum) {
    return this.getContactMethodOptions().find(
      (method) => method.value.toLowerCase() === notificationMethod?.toLowerCase()
    )?.label;
  }

  private getContactMethodOptions(): InputOption[] {
    return NOTIFICATION_METHODS.map((val) => {
      return new InputOption().withValue(this.translate.instant(val.label)).withLabel(val.value);
    });
  }

  private customContactValueValidation(contactType?: NotificationMethodEnum): void {
    contactType = contactType ?? this.appointmentContactForm?.get('contactMethodField')?.value;
    const contactTypeValue = this.getNotificationMethodLabel(contactType);
    this.customMessageGroup = this.MESSAGE_GROUP + '.' + contactTypeValue?.toLowerCase();
    switch (contactTypeValue) {
      case NotificationMethodEnum.EMAIL:
        this.appointmentContactForm
          ?.get('contactValueField')
          ?.setValidators([Validators.required, Validators.pattern(RegexConstants.EMAIL)]);
        this.setContactValue(RegexConstants.EMAIL);
        break;
      case NotificationMethodEnum.SMS:
        this.appointmentContactForm
          ?.get('contactValueField')
          ?.setValidators([Validators.required, Validators.pattern(RegexConstants.TELENET_PHONE_NUMBER)]);
        this.setContactValue(RegexConstants.TELENET_PHONE_NUMBER);
        break;
      default:
        break;
    }
  }

  private setContactValue(regex: RegExp): void {
    if (!regex.test(this.appointmentContactForm?.get('contactValueField')?.value)) {
      this.appointmentContactForm?.get('contactValueField')?.setValue('');
    }
    this.appointmentContactForm?.updateValueAndValidity();
  }

  private triggerFormValidation(): void {
    Object.keys(this.appointmentContactForm.controls).forEach((key) => {
      this.appointmentContactForm.controls[key].updateValueAndValidity();
      this.appointmentContactForm.controls[key].markAsDirty();
    });
  }
}
