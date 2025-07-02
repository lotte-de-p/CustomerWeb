import { AppointmentPickerByTemporalComponentInterface } from './appointment-picker-by-temporal-component.interface';
import { AppointmentPickerTypeEnum } from './appointment-picker-type.enum';
import { AppointmentTransformerSlot } from '../../models';
import { TimeslotMomentEnum } from '../../enums';
import { AppointmentSlotOption } from './appointment-slot-option.model';
export declare abstract class AbstractAppointmentPickerByTemporalComponent<C extends AppointmentPickerByTemporalComponentInterface> {
    abstract setSelectedAppointmentSlot(appointmentSlot: AppointmentTransformerSlot): void;
    setSelectedAppointmentMoment(moment: TimeslotMomentEnum): void;
    hasError(errorString: string): boolean;
    protected setInputValue(): void;
    loadMoreSlots(loadPreviousSlots?: unknown): void;
    scrollToSection(section: AppointmentPickerTypeEnum): void;
    setLabels(labelKeys: string[]): void;
    protected setDatePickerLabel(labelKeys: string[]): void;
    protected setDateMomentLabel(labelKeys: string[]): void;
    protected setDatePickerErrorLabel(labelKeys: string[]): void;
    protected setDateMomentErrorLabel(labelKeys: string[]): void;
    abstract getSelectedAppointment(): AppointmentSlotOption;
    abstract getComponent(): C;
}
//# sourceMappingURL=abstract-appointment-picker-by-temporal.component.d.ts.map