import { Pipe, PipeTransform } from '@angular/core';
import { TimeslotMomentEnum } from '../enums';
import { TimeslotUtil } from '../utils';

@Pipe({
  name: 'timeslotFormat',
})
export class TimeslotPipe implements PipeTransform {
  transform(moment: TimeslotMomentEnum, _args?: unknown): string {
    const momentObject = TimeslotUtil.enumToMomentObject(moment);
    return `${momentObject?.startHours}:${momentObject?.startMinutes} - ${momentObject?.endHours}:${momentObject?.endMinutes}`;
  }
}
