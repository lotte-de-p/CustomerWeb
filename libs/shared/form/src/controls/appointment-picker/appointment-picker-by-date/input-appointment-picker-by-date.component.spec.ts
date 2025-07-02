import { InputAppointmentPickerByDateComponent } from '.';
import { AppointmentSlotOption } from '../';
import { AppointmentTransformerSlot } from '../../../models';
import { TimeslotMomentEnum } from '../../../enums';
import dayjs from 'dayjs';

describe('InputAppointmentPickerByDateComponent', () => {
  const component = new InputAppointmentPickerByDateComponent();

  describe('setSelectedAppointment', function () {
    it('should find a timeslot', function () {
      const currentMoment = dayjs();
      const one = new AppointmentTransformerSlot();
      one.date = currentMoment.toDate();
      one.timeSlots = [
        { code: TimeslotMomentEnum.DAY },
        { code: TimeslotMomentEnum.MORNING },
        { code: TimeslotMomentEnum.LUNCH },
      ];
      const two = new AppointmentTransformerSlot();
      two.date = currentMoment.add(1, 'days').toDate();
      const three = new AppointmentTransformerSlot();
      three.date = currentMoment.add(1, 'months').toDate();
      const four = new AppointmentTransformerSlot();
      four.date = currentMoment.add(1, 'years').toDate();
      component.timeslots = [two, one, three, four];
      const appointmentSlotOption = new AppointmentSlotOption(one.date, TimeslotMomentEnum.LUNCH);
      component.setSelectedAppointment(appointmentSlotOption);

      expect(component.selectedAppointmentSlot).toEqual(one);
      expect(component.selectedAppointmentMoment).toEqual(TimeslotMomentEnum.LUNCH);
    });

    it('should find not a timeslot', function () {
      component.selectedAppointmentMoment = undefined;
      component.selectedAppointmentSlot = undefined;
      const currentMoment = dayjs();
      const one = new AppointmentTransformerSlot();
      one.date = currentMoment.toDate();
      one.timeSlots = [
        { code: TimeslotMomentEnum.DAY },
        { code: TimeslotMomentEnum.MORNING },
        { code: TimeslotMomentEnum.LUNCH },
      ];
      const two = new AppointmentTransformerSlot();
      two.date = currentMoment.add(1, 'days').toDate();
      const three = new AppointmentTransformerSlot();
      three.date = currentMoment.add(1, 'months').toDate();
      const four = new AppointmentTransformerSlot();
      four.date = currentMoment.add(1, 'years').toDate();
      component.timeslots = [two, three, four];
      const appointmentSlotOption = new AppointmentSlotOption(one.date, TimeslotMomentEnum.LUNCH);
      component.setSelectedAppointment(appointmentSlotOption);

      expect(component.selectedAppointmentSlot).toBeUndefined();
      expect(component.selectedAppointmentMoment).toBeUndefined();
    });

    it('should do nothing if date and moment is undefined', () => {
      component.selectedAppointmentMoment = undefined;
      component.selectedAppointmentSlot = undefined;
      const appointmentSlotOption = new AppointmentSlotOption(null, null);
      component.setSelectedAppointment(appointmentSlotOption);
      expect(component.selectedAppointmentMoment).toBeUndefined();
    });
  });

  describe('setSelectedAppointmentSlot', function () {
    it('should set selected appointment slot', function () {
      const appointmentTransformerSlot = new AppointmentTransformerSlot();

      component.setSelectedAppointmentSlot(appointmentTransformerSlot);

      expect(component.selectedAppointmentSlot).toEqual(appointmentTransformerSlot);
      expect(component.selectedAppointmentMoment).toBeUndefined();
    });
  });

  describe('getSelectedAppointment', function () {
    it('should get the selected appointment', function () {
      const appointmentTransformerSlot = new AppointmentTransformerSlot();
      appointmentTransformerSlot.date = new Date();
      component.selectedAppointmentMoment = TimeslotMomentEnum.DAY;
      component.selectedAppointmentSlot = appointmentTransformerSlot;
      const appointmentSlotOption = new AppointmentSlotOption(appointmentTransformerSlot.date, TimeslotMomentEnum.DAY);

      expect(component.getSelectedAppointment()).toEqual(appointmentSlotOption);
    });
  });

  describe('getComponent', function () {
    it('should return component', function () {
      expect(component.getComponent()).toEqual(component);
    });
  });
});
