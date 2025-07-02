import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Appointment, AppointmentNgrxModule } from '@product-journey/appointments/data-access';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PhoneNumberPipe } from '@product-journey/appointments/ui';
import { ContactDetailFormComponent } from './contact-detail-form/contact-detail-form.component';
import { AdobeAnalyticsDirective, DatalayerEventNames } from '@telenet/ng-lib-datalayer';

@Component({
  standalone: true,
  selector: 'tg-appointment-contact-detail',
  templateUrl: './appointment-contact-detail.component.html',
  imports: [
    CommonModule,
    AppointmentNgrxModule,
    TranslateModule,
    PhoneNumberPipe,
    ContactDetailFormComponent,
    AdobeAnalyticsDirective,
  ],
})
export class AppointmentContactDetailComponent implements OnChanges {
  @Input() appointment?: Appointment;
  @Input() isMaster = true;
  @Input() showEditContactDetail = false;
  @Input() messageGroupName: string;

  @ViewChild(ContactDetailFormComponent)
  contactDetailFormComponent: ContactDetailFormComponent;

  showEditContactForm = false;

  ngOnChanges(changes: SimpleChanges): void {
    if ('appointment' in changes) {
      this.showEditContactForm = false;
    }
  }

  setEditContactFlag(showEditContactForm?: boolean): void {
    this.showEditContactForm = showEditContactForm ?? true;
  }

  protected readonly DatalayerEventNames = DatalayerEventNames;
}
