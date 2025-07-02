import { Injectable } from '@angular/core';
import { NCTimeSlot, NCTimeSlotAvailability, NCTimeSlotList } from '../models';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { OmapiProductMapper } from '@telenet/ng-lib-omapi';
import { TimeslotUtil } from '../utils';
import { RawNCTimeSlotAvailabilityInterface, RawNCTimeSlotInterface, RawNCTimeSlotListInterface } from '../interfaces';
import { TimeslotMomentEnum } from '../enums';

@Injectable({
  providedIn: 'root',
})
export class NCTimeSlotMapper implements MapperInterface<RawNCTimeSlotListInterface, NCTimeSlotList> {
  constructor(private readonly omapiProductMapper: OmapiProductMapper) {}

  toModel(rawNCTimeSlot: RawNCTimeSlotListInterface): NCTimeSlotList {
    const nCTimeSlotList = new NCTimeSlotList();
    nCTimeSlotList.availabilities = this.createAvailabilities(rawNCTimeSlot.availabilities);
    nCTimeSlotList.isFtthAppointment = rawNCTimeSlot.isFtthAppointment;
    return nCTimeSlotList;
  }

  private createAvailabilities(rawAvailabilities: RawNCTimeSlotInterface[]): NCTimeSlot[] {
    const timeslots: NCTimeSlot[] = [];
    rawAvailabilities.forEach((rawAvailableSlots) => {
      timeslots.push(this.createTimeSlots(rawAvailableSlots));
    });
    return timeslots;
  }

  private createTimeSlots(rawAvailableSlots: RawNCTimeSlotInterface): NCTimeSlot {
    const timeSlot = new NCTimeSlot();
    timeSlot.date = new Date(rawAvailableSlots.date);
    rawAvailableSlots.slots.forEach((rawAvailableSlot) => {
      if (rawAvailableSlot) {
        timeSlot.timeSlots.push(this.createTimeSlot(rawAvailableSlot));
      }
    });
    return timeSlot;
  }

  private createTimeSlot(rawAvailableSlot: RawNCTimeSlotAvailabilityInterface): NCTimeSlotAvailability {
    const timeslot = new NCTimeSlotAvailability();
    timeslot.timeFormat = rawAvailableSlot.timeFormat;
    timeslot.availabilityId = rawAvailableSlot.availabilityId;
    timeslot.specUrl = rawAvailableSlot.specURL;
    timeslot.code = TimeslotUtil.stringToEnum(rawAvailableSlot.timeSlotCode) || TimeslotMomentEnum.DAY;
    timeslot.productInfo = rawAvailableSlot.rawOmapi && this.omapiProductMapper.toModel(rawAvailableSlot.rawOmapi);
    return timeslot;
  }
}
