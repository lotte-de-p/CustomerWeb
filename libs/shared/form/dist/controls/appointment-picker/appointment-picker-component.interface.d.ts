import { EventEmitter } from '@angular/core';
import { AppointmentPickerTypeEnum } from './appointment-picker-type.enum';
import { AppointmentSlotOption } from './appointment-slot-option.model';
import { AppointmentTransformerSlot } from '../../models';
export interface AppointmentPickerComponentInterface {
    messageGroup?: string;
    startDate: Date;
    endDate: Date;
    initialised: boolean;
    initialSlide: number;
    slidesToScroll: number;
    timeslots: AppointmentTransformerSlot[];
    appointmentSlotSelected: EventEmitter<AppointmentSlotOption>;
    error: unknown;
    updateSlots?: AppointmentTransformerSlot[];
    showLoadMore?: boolean;
    loadMore?: EventEmitter<unknown>;
    consumerType?: string;
    disableLoadMore?: boolean;
    scrollTo?: EventEmitter<AppointmentPickerTypeEnum>;
    slidesToShow?: number;
    appointmentPickerType?: AppointmentPickerTypeEnum;
    isDeviceLandscape?: boolean;
    enableAppointmentsUI?: boolean;
    setSelectedAppointment(selectedAppointment: AppointmentSlotOption): void;
    setLabels(labelKeys: string[]): void;
}
//# sourceMappingURL=appointment-picker-component.interface.d.ts.map