import { Injectable } from '@angular/core';
import { RawCafeTimeSlotInterface, RawCafeTimeslotListInterface, RawCafeTimeslotMontInterface } from '../interfaces';
import { CafeTimeSlot, CafeTimeSlotList } from '../models';
import { TimeslotUtil } from '../utils';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { TimeslotMomentEnum } from '../enums';

@Injectable({
  providedIn: 'root',
})
export class CafeTimeSlotMapper implements MapperInterface<RawCafeTimeslotListInterface, CafeTimeSlotList> {
  toModel(rawCafeTimeSlot: RawCafeTimeslotListInterface) {
    const cafeTimeSlotList = new CafeTimeSlotList();
    cafeTimeSlotList.firstAvailableSlotMonth = rawCafeTimeSlot.firstAvailableSlotMonth;
    cafeTimeSlotList.firstDays = this.createFirstDays(rawCafeTimeSlot.firstDays);
    cafeTimeSlotList.timeslots = this.createTimeSlots(rawCafeTimeSlot.slots);
    return cafeTimeSlotList;
  }

  private createFirstDays(firstDays: Record<string, string>): Date[] {
    return Object.keys(firstDays).map((key) => {
      return new Date(firstDays[key]);
    });
  }

  private createTimeSlots(slots: RawCafeTimeslotMontInterface): CafeTimeSlot[] {
    const timeslots: CafeTimeSlot[] = [];
    Object.keys(slots).forEach((monthKey) => {
      const slotsPerMonth = slots[monthKey as keyof unknown];
      Object.keys(slotsPerMonth).forEach((dayKey) => {
        if (slotsPerMonth[dayKey]) {
          timeslots.push(this.createTimeSlot(slotsPerMonth[dayKey]));
        }
      });
    });
    return timeslots.sort((a, b) => (a.date > b.date ? 1 : -1));
  }

  private createTimeSlot(slot: RawCafeTimeSlotInterface): CafeTimeSlot {
    const cafeTimeSlot = new CafeTimeSlot();
    cafeTimeSlot.date = new Date(slot.date);
    cafeTimeSlot.moments = slot.timing.map((timing) => {
      return TimeslotUtil.stringToEnum(timing) || TimeslotMomentEnum.DAY;
    });
    return cafeTimeSlot;
  }
}
