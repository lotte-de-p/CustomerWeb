import { Injectable } from '@angular/core';
import { groupBy } from 'lodash-es';
import { TimeslotMomentInterface } from '../interfaces';
import { CafeTimeSlotList, CallexcellTimeslot, CallexcellTimeslotResponse, RawCallexcellTimeslot } from '../models';
import { TimeslotMomentEnum } from '../enums';
import { isDefined, MapperInterface } from '@telenet/ng-lib-shared';
import dayjs from 'dayjs';

@Injectable({
  providedIn: 'root',
})
export class CallexcellTimeslotMapper implements MapperInterface<CallexcellTimeslotResponse, CafeTimeSlotList> {
  toModel(rawData: CallexcellTimeslotResponse): CafeTimeSlotList {
    const cafeTimeslotList = new CafeTimeSlotList();
    cafeTimeslotList.timeslots =
      rawData.timeslots && this.createCallExcellTimeslots(this.getEnabledTimeslots(rawData.timeslots));
    return cafeTimeslotList;
  }

  private createCallExcellTimeslots(rawCallexcellTimeslots: RawCallexcellTimeslot[]): CallexcellTimeslot[] {
    const timeslots: CallexcellTimeslot[] = [];
    const timeslotsGroupedByDate = groupBy(rawCallexcellTimeslots, 'date');
    for (const date in timeslotsGroupedByDate) {
      if (date && timeslotsGroupedByDate[date]) {
        const timeslotDate = new Date(date);
        const timeslotMomentObjs: TimeslotMomentInterface[] = timeslotsGroupedByDate[date].map((timeslot) => {
          return this.createTimeslotMomentObject(timeslot);
        });
        const timeslotMomentKeys: TimeslotMomentEnum[] = timeslotsGroupedByDate[date]
          .map((timeslot) => {
            return timeslot.moment;
          })
          .filter(isDefined);

        timeslots.push(new CallexcellTimeslot(timeslotDate, timeslotMomentKeys, timeslotMomentObjs));
      }
    }

    return timeslots;
  }

  private createTimeslotMomentObject(timeslot: RawCallexcellTimeslot): TimeslotMomentInterface {
    const start = dayjs(timeslot.start);
    const end = dayjs(timeslot.end);
    const startHours = start.format('HH');
    const startMinutes = start.format('mm');
    const endHours = end.format('HH');
    const endMinutes = end.format('mm');
    const momentKey = timeslot.moment;
    return { key: momentKey, startHours, endHours, endMinutes, startMinutes } as TimeslotMomentInterface;
  }

  private getEnabledTimeslots(rawCallexcellTimeslots: RawCallexcellTimeslot[]): RawCallexcellTimeslot[] {
    return rawCallexcellTimeslots
      .map((timeslot) => {
        timeslot.date = dayjs(timeslot.start).format('YYYY-MM-DD');
        return timeslot;
      })
      .filter((rawTimeslot) => rawTimeslot.enabled);
  }
}
