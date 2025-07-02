import { inject, Injectable } from '@angular/core';
import { DataLayerAttributes, DataLayerService, EventNameEnum, EventTypeEnum } from '@telenet/ng-lib-datalayer';
import * as udl from 'udl';
import { Appointment } from '../entities/appointment.model';

@Injectable({
  providedIn: 'root',
})
export class AppointmentDatalayerService {
  private readonly dataLayerService = inject(DataLayerService);

  readonly INTENT_RESCHEDULE_APPOINTMENT = 'reschedule appointment';
  readonly INTENT_NEW_APPOINTMENT = 'new appointment';
  readonly MESSAGE_GROUP = ['appointments'];
  readonly FLOWTYPE_CARE = 'care';

  currentIntent: string;
  componentInstanceId: string;

  sendAppointmentEventData(appointment: Appointment): void {
    const eventInfo = this.getEventInfo(
      EventNameEnum.EVENT_NAME_APPOINTMENT_VIEWED,
      EventTypeEnum.EVENT_TYPE_IMPRESSION
    );
    const attributes = {
      itemName: appointment.appointmentStatus?.toLowerCase(),
      itemData: appointment.appointmentType?.toLowerCase(),
    } as DataLayerAttributes;
    this.addEvent(eventInfo, attributes);
  }

  sendNoAppointmentPlannedEvent(): void {
    const eventInfo = this.getEventInfo(
      EventNameEnum.EVENT_NAME_NO_APPOINTMENT_PLANNED,
      EventTypeEnum.EVENT_TYPE_IMPRESSION
    );
    const attributes = {} as DataLayerAttributes;
    this.addEvent(eventInfo, attributes);
  }

  private getEventInfo(eventName: EventNameEnum, eventType: EventTypeEnum): udl.EventInfo {
    return this.dataLayerService.createEventInfo(eventName, eventType, this.MESSAGE_GROUP);
  }

  private addEvent(eventInfo: udl.EventInfo, attributes: DataLayerAttributes): void {
    this.dataLayerService.addEvent(eventInfo, attributes, this.category);
  }

  private get category(): udl.Category {
    const category = this.dataLayerService.getCategory(this.componentInstanceId);
    return category || this.dataLayerService.createCategory(this.FLOWTYPE_CARE, 'product journey');
  }

  resetIntent(): void {
    this.currentIntent = this.INTENT_NEW_APPOINTMENT;
  }
}
