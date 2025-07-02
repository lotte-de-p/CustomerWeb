import { AbstractControl, ValidatorFn } from '@angular/forms';
import { AppointmentPickerValidator } from '.';
import { AppointmentPickerTypeEnum, AppointmentSlotOption } from '../controls';
import { TimeslotMomentEnum } from '../enums';
import { appointmentInterfaceFactory } from '../controls/new-appointment-picker/interfaces/appointment.interface.testfactory';

const shouldReturnAnErrorWhenThereIsNoDateSet = 'should return an error when there is no date set';
describe('AppointmentPickerValidator', () => {
  let validatorFn: ValidatorFn;

  describe('dayRequired', () => {
    describe('Date picker', function () {
      beforeEach(() => {
        validatorFn = AppointmentPickerValidator.dayRequired(AppointmentPickerTypeEnum.BY_DATE);
      });

      it(shouldReturnAnErrorWhenThereIsNoDateSet, () => {
        const control = { value: null };
        expect(validatorFn(control as AbstractControl)).toEqual({ day_required: true });
      });

      it('should return an error when there is no moment set but there is a date set', () => {
        const control = { value: new AppointmentSlotOption(new Date(), null) };
        expect(validatorFn(control as AbstractControl)).toEqual({ slot_required: true });
      });

      it('should return an error when date is undefined', () => {
        const control = { value: {} };
        expect(validatorFn(control as AbstractControl)).toEqual({ day_required: true });
      });

      it('should NOT return an error when a date and moment is set', () => {
        const control = { value: new AppointmentSlotOption(new Date(), TimeslotMomentEnum.MORNING) };
        expect(validatorFn(control as AbstractControl)).toEqual(null);
      });

      it('should return nll if type is not supported', () => {
        validatorFn = AppointmentPickerValidator.dayRequired(AppointmentPickerTypeEnum.BY_TIME);
        const control = { value: new AppointmentSlotOption(new Date(), TimeslotMomentEnum.MORNING) };
        expect(validatorFn(control as AbstractControl)).toEqual(null);
      });
    });
  });

  describe('Moment Picker', function () {
    beforeEach(() => {
      validatorFn = AppointmentPickerValidator.dayRequired(AppointmentPickerTypeEnum.BY_MOMENT);
    });

    it(shouldReturnAnErrorWhenThereIsNoDateSet, () => {
      const control = { value: null };
      expect(validatorFn(control as AbstractControl)).toEqual({ slot_required: true });
    });

    it('should return an error when there is no  set but there is a date set', () => {
      const control = { value: new AppointmentSlotOption(null, TimeslotMomentEnum.AFTERNOON) };
      expect(validatorFn(control as AbstractControl)).toEqual({ day_required: true });
    });

    it('should return an error when there is moment is undefined', () => {
      const control = { value: {} };
      expect(validatorFn(control as AbstractControl)).toEqual({ slot_required: true });
    });

    it('should NOT return an error when a date and moment is set', () => {
      const control = { value: new AppointmentSlotOption(new Date(), TimeslotMomentEnum.MORNING) };
      expect(validatorFn(control as AbstractControl)).toEqual(null);
    });
  });

  describe('newAppointmentRequired', function () {
    beforeEach(() => {
      validatorFn = AppointmentPickerValidator.newAppointmentRequired;
    });
    it(shouldReturnAnErrorWhenThereIsNoDateSet, () => {
      const control = { value: appointmentInterfaceFactory.build({ moment: undefined }) };
      expect(AppointmentPickerValidator.newAppointmentRequired(control as AbstractControl)).toEqual({
        moment_required: true,
      });
    });
    it('should return null if moment has been given', () => {
      const control = { value: appointmentInterfaceFactory.build({ moment: TimeslotMomentEnum.LUNCH }) };
      expect(validatorFn(control as AbstractControl)).toEqual(null);
    });

    it('should return null if value is null', () => {
      const control = { value: null };
      expect(validatorFn(control as AbstractControl)).toEqual({ appointment_required: true });
    });
  });
});
