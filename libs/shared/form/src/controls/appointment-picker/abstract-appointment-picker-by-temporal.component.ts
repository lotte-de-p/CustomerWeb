import { LabelUtil } from '../../utils';
import { AppointmentPickerByTemporalComponentInterface } from './appointment-picker-by-temporal-component.interface';
import { AppointmentPickerTypeEnum } from './appointment-picker-type.enum';
import { AppointmentTransformerSlot } from '../../models';
import { TimeslotMomentEnum } from '../../enums';
import { AppointmentSlotOption } from './appointment-slot-option.model';

export abstract class AbstractAppointmentPickerByTemporalComponent<
  C extends AppointmentPickerByTemporalComponentInterface,
> {
  abstract setSelectedAppointmentSlot(appointmentSlot: AppointmentTransformerSlot): void;

  setSelectedAppointmentMoment(moment: TimeslotMomentEnum): void {
    this.getComponent().selectedAppointmentMoment = moment;
    this.setInputValue();
  }

  hasError(errorString: string) {
    return this.getComponent().error === errorString;
  }

  protected setInputValue(): void {
    this.getComponent().appointmentSlotSelected.emit(this.getSelectedAppointment());
  }

  loadMoreSlots(loadPreviousSlots?: unknown): void {
    this.getComponent().loadMore.emit(loadPreviousSlots);
  }

  public scrollToSection(section: AppointmentPickerTypeEnum): void {
    this.getComponent().scrollTo.emit(section);
  }

  setLabels(labelKeys: string[]): void {
    this.setDatePickerLabel([...labelKeys, 'date-picker']);
    this.setDateMomentLabel([...labelKeys, 'moment-picker']);
    this.setDatePickerErrorLabel([...labelKeys, 'date-picker-error']);
    this.setDateMomentErrorLabel([...labelKeys, 'moment-picker-error']);
  }

  protected setDatePickerLabel(labelKeys: string[]): void {
    this.getComponent().datePickerLabel = LabelUtil.getLabelKeyWithTypeLabel(labelKeys.join('.'));
  }

  protected setDateMomentLabel(labelKeys: string[]): void {
    this.getComponent().momentPickerLabel = LabelUtil.getLabelKeyWithTypeLabel(labelKeys.join('.'));
  }

  protected setDatePickerErrorLabel(labelKeys: string[]): void {
    this.getComponent().datePickerErrorLabel = LabelUtil.getLabelKeyWithTypeLabel(labelKeys.join('.'));
  }

  protected setDateMomentErrorLabel(labelKeys: string[]): void {
    this.getComponent().momentPickerErrorLabel = LabelUtil.getLabelKeyWithTypeLabel(labelKeys.join('.'));
  }

  abstract getSelectedAppointment(): AppointmentSlotOption;

  abstract getComponent(): C;
}
