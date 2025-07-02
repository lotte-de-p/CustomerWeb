import { forEach } from 'lodash-es';
import {
  AppointmentTransformerModel,
  AppointmentTransformerSlot,
  CafeTimeSlot,
  NCTimeSlot,
  NCTimeSlotAvailability,
} from '../models';
import { TimeslotMomentEnum } from '../enums';
import {
  AppointmentPickerConsumerTypeEnum,
  TimeSlotInterface,
  TimeslotMomentInterface,
  TransformedAvailabilityInterface,
} from '../interfaces';
import { TimeslotUtil } from './timeslot.util';

export class AppointmentTransformerUtil {
  static doTransform(
    timeSlots: TimeSlotInterface[],
    consumerType: AppointmentPickerConsumerTypeEnum
  ): AppointmentTransformerModel {
    switch (consumerType) {
      case AppointmentPickerConsumerTypeEnum.CAFE:
        return this.doCafeTransform(timeSlots);
      case AppointmentPickerConsumerTypeEnum.NC:
        return this.doNCTransform(timeSlots);
    }
  }

  private static doCafeTransform(cafeTimeSlots: TimeSlotInterface[]): AppointmentTransformerModel {
    const appointmentTransformerModel = new AppointmentTransformerModel();
    appointmentTransformerModel.slots = [];
    forEach(cafeTimeSlots, (cafeTimeSlot: TimeSlotInterface) => {
      if (cafeTimeSlot) {
        appointmentTransformerModel.slots.push(this.getCafeTransformedAvailability(cafeTimeSlot));
      }
    });
    return appointmentTransformerModel;
  }

  private static getCafeTransformedAvailability(timeSlot: TimeSlotInterface): AppointmentTransformerSlot {
    const appointmentTransformedSlot = new AppointmentTransformerSlot();
    appointmentTransformedSlot.timeSlots = [];
    const cafeTimeSlot: CafeTimeSlot = timeSlot as CafeTimeSlot;
    const isCustomMoment = cafeTimeSlot.isCustomMoment;

    if (cafeTimeSlot.date) {
      appointmentTransformedSlot.date = cafeTimeSlot.date;
    }

    if (cafeTimeSlot.moments) {
      forEach(cafeTimeSlot.moments, (availability: TimeslotMomentEnum) => {
        appointmentTransformedSlot.timeSlots.push(this.getCafeAvailability(false, availability));
      });
    }

    if (isCustomMoment && cafeTimeSlot.momentObjects) {
      appointmentTransformedSlot.isCustomMoment = true;
      appointmentTransformedSlot.timeSlots = cafeTimeSlot.momentObjects.map((timeslotMoment: TimeslotMomentInterface) =>
        this.getCafeAvailability(true, timeslotMoment.key, timeslotMoment)
      );
    }

    return appointmentTransformedSlot;
  }

  private static getCafeAvailability(
    isCustomMoment: boolean,
    timeslotKey: TimeslotMomentEnum,
    timeslotMoment?: TimeslotMomentInterface
  ): TransformedAvailabilityInterface {
    const timeslotMomentObj = isCustomMoment ? timeslotMoment : TimeslotUtil.enumToMomentObject(timeslotKey);
    return { code: timeslotKey, timeslotMoment: timeslotMomentObj } as TransformedAvailabilityInterface;
  }

  private static doNCTransform(timeSlots: TimeSlotInterface[]): AppointmentTransformerModel {
    const transformerModel = new AppointmentTransformerModel();
    transformerModel.slots = [];
    forEach(timeSlots, (timeSlot: TimeSlotInterface) => {
      if (timeSlot && timeSlot instanceof NCTimeSlot) {
        transformerModel.slots.push(this.getNCTransformedAvailability(timeSlot));
      }
    });
    return transformerModel;
  }

  private static getNCTransformedAvailability(timeSlot: TimeSlotInterface): AppointmentTransformerSlot {
    const appointmentTransformedSlot = new AppointmentTransformerSlot();
    appointmentTransformedSlot.timeSlots = [];
    if (timeSlot.date) {
      appointmentTransformedSlot.date = timeSlot.date;
    }

    if (timeSlot instanceof NCTimeSlot && timeSlot.timeSlots) {
      forEach(timeSlot.timeSlots, (nCTimeSlotAvailability: NCTimeSlotAvailability) => {
        appointmentTransformedSlot.timeSlots.push(this.getNCAvailability(nCTimeSlotAvailability));
      });
    }

    return appointmentTransformedSlot;
  }

  private static getNCAvailability(nCTimeSlotAvailability: NCTimeSlotAvailability): TransformedAvailabilityInterface {
    const transformedAvailability = {} as TransformedAvailabilityInterface;
    transformedAvailability.specUrl = nCTimeSlotAvailability.specUrl;
    transformedAvailability.code = nCTimeSlotAvailability.code;
    transformedAvailability.availabiltyId = nCTimeSlotAvailability.availabilityId;
    transformedAvailability.timeFormat = nCTimeSlotAvailability.timeFormat;
    transformedAvailability.productInfo = nCTimeSlotAvailability.productInfo;
    return transformedAvailability;
  }
}
