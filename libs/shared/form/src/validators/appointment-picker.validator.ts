import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { AppointmentPickerTypeEnum } from '../controls/appointment-picker/appointment-picker-type.enum';
import { AppointmentSlotOption } from '../controls/appointment-picker/appointment-slot-option.model';
import { AppointmentInterface } from '../controls';

@Injectable()
export class AppointmentPickerValidator extends Validators {
  static dayRequired(type: AppointmentPickerTypeEnum): ValidatorFn {
    return (control: AbstractControl): Record<string, unknown> | null => {
      switch (type) {
        case AppointmentPickerTypeEnum.BY_DATE:
          if (control.value) {
            const appointmentOption: AppointmentSlotOption = control.value as AppointmentSlotOption;
            return this.checkDayType(appointmentOption);
          } else {
            return { day_required: true };
          }
        case AppointmentPickerTypeEnum.BY_MOMENT:
          if (control.value) {
            const appointmentOption: AppointmentSlotOption = control.value as AppointmentSlotOption;
            return this.checkMomentType(appointmentOption);
          } else {
            return { slot_required: true };
          }
        default:
          return null;
      }
    };
  }

  private static checkDayType(appointmentOption: AppointmentSlotOption) {
    if (appointmentOption.date && !appointmentOption.moment) {
      return { slot_required: true };
    } else if (!appointmentOption.date) {
      return { day_required: true };
    }
    return null;
  }

  private static checkMomentType(appointmentOption: AppointmentSlotOption) {
    if (appointmentOption.moment && !appointmentOption.date) {
      return { day_required: true };
    } else if (!appointmentOption.moment) {
      return { slot_required: true };
    }
    return null;
  }

  static newAppointmentRequired(control: AbstractControl) {
    if (control.value) {
      const appointment: AppointmentInterface = control.value as AppointmentInterface;
      if (appointment.moment) {
        return null;
      }
      return { moment_required: true };
    }
    return { appointment_required: true };
  }
}
