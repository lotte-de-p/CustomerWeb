import { AppointmentTransformerSlot } from '../../../models';
import { TimeslotMomentEnum } from '../../../enums';
import { AppointmentPickerTypeEnum, AppointmentSlotOption, InputAppointmentPickerByMomentComponent } from '../';
import dayjs from 'dayjs';

describe('InputAppointmentPickerByMomentComponent', () => {
  const component = new InputAppointmentPickerByMomentComponent();

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

  describe('setSelectedAppointmentSlot', function () {
    it('should set Selected Appointment Slot', function () {
      component.selectedAppointmentMoment = TimeslotMomentEnum.LUNCH;

      expect(component.selectedAppointmentMoment).toEqual(TimeslotMomentEnum.LUNCH);

      const appointmentTransformerSlot = new AppointmentTransformerSlot();
      component.setSelectedAppointmentSlot(appointmentTransformerSlot);

      expect(component.selectedAppointmentMoment).toEqual(TimeslotMomentEnum.LUNCH);
      expect(component.selectedAppointmentSlot).toEqual(appointmentTransformerSlot);
    });
  });

  describe('setSelectedAppointmentMoment', () => {
    it('should set selected appointment moment', () => {
      component.selectedAppointmentMoment = undefined;
      expect(component.selectedAppointmentMoment).toBeUndefined();

      component.setSelectedAppointmentMoment(TimeslotMomentEnum.LUNCH);

      expect(component.selectedAppointmentMoment).toEqual(TimeslotMomentEnum.LUNCH);
    });
  });

  describe('event', function () {
    it('should call scrollTo event', function () {
      jest.spyOn(component.scrollTo, 'emit');
      component.scrollSectionTo(AppointmentPickerTypeEnum.BY_MOMENT);
      expect(component.scrollTo.emit).toHaveBeenCalledWith(AppointmentPickerTypeEnum.BY_MOMENT);
    });

    it('should call loadMore', function () {
      jest.spyOn(component.loadMore, 'emit');
      component.loadMoreSlots();
      expect(component.loadMore.emit).toHaveBeenCalled();
    });
  });

  describe('getComponent', function () {
    it('should return component', function () {
      expect(component.getComponent()).toEqual(component);
    });
  });
});
