import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Appointment, AppointmentFacade, AppointmentNgrxModule } from '@product-journey/appointments/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { DomService } from '@telenet/ng-lib-shared';
import { AdobeAnalyticsDirective, DatalayerEventNames } from '@telenet/ng-lib-datalayer';

@Component({
  standalone: true,
  selector: 'tg-appointment-cancellation',
  templateUrl: './appointment-cancellation.component.html',
  imports: [CommonModule, AppointmentNgrxModule, TranslateModule, AdobeAnalyticsDirective],
})
export class AppointmentCancellationComponent {
  @Input() selectedAppointment?: Appointment;
  @Output() closeCancellation = new EventEmitter<boolean>();
  @Input() messageGroupName: string;

  private readonly appointmentFacade = inject(AppointmentFacade);
  private readonly domService = inject(DomService);

  closeCancellationDialog(): void {
    this.closeCancellation.emit(false);
  }

  cancelAppointment(): void {
    this.domService.scrollToStartElement('#appointment-overview');
    this.appointmentFacade.cancelAppointment(this.selectedAppointment?.appointmentId || '');
    this.closeCancellation.emit(false);
  }

  protected readonly DatalayerEventNames = DatalayerEventNames;
}
