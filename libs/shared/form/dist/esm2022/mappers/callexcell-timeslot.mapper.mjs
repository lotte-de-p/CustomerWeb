import { Injectable } from '@angular/core';
import { groupBy } from 'lodash-es';
import { CafeTimeSlotList, CallexcellTimeslot } from '../models';
import { isDefined } from '@telenet/ng-lib-shared';
import dayjs from 'dayjs';
import * as i0 from "@angular/core";
export class CallexcellTimeslotMapper {
    toModel(rawData) {
        const cafeTimeslotList = new CafeTimeSlotList();
        cafeTimeslotList.timeslots =
            rawData.timeslots && this.createCallExcellTimeslots(this.getEnabledTimeslots(rawData.timeslots));
        return cafeTimeslotList;
    }
    createCallExcellTimeslots(rawCallexcellTimeslots) {
        const timeslots = [];
        const timeslotsGroupedByDate = groupBy(rawCallexcellTimeslots, 'date');
        for (const date in timeslotsGroupedByDate) {
            if (date && timeslotsGroupedByDate[date]) {
                const timeslotDate = new Date(date);
                const timeslotMomentObjs = timeslotsGroupedByDate[date].map((timeslot) => {
                    return this.createTimeslotMomentObject(timeslot);
                });
                const timeslotMomentKeys = timeslotsGroupedByDate[date]
                    .map((timeslot) => {
                    return timeslot.moment;
                })
                    .filter(isDefined);
                timeslots.push(new CallexcellTimeslot(timeslotDate, timeslotMomentKeys, timeslotMomentObjs));
            }
        }
        return timeslots;
    }
    createTimeslotMomentObject(timeslot) {
        const start = dayjs(timeslot.start);
        const end = dayjs(timeslot.end);
        const startHours = start.format('HH');
        const startMinutes = start.format('mm');
        const endHours = end.format('HH');
        const endMinutes = end.format('mm');
        const momentKey = timeslot.moment;
        return { key: momentKey, startHours, endHours, endMinutes, startMinutes };
    }
    getEnabledTimeslots(rawCallexcellTimeslots) {
        return rawCallexcellTimeslots
            .map((timeslot) => {
            timeslot.date = dayjs(timeslot.start).format('YYYY-MM-DD');
            return timeslot;
        })
            .filter((rawTimeslot) => rawTimeslot.enabled);
    }
    static ɵfac = function CallexcellTimeslotMapper_Factory(t) { return new (t || CallexcellTimeslotMapper)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CallexcellTimeslotMapper, factory: CallexcellTimeslotMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CallexcellTimeslotMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbGV4Y2VsbC10aW1lc2xvdC5tYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWFwcGVycy9jYWxsZXhjZWxsLXRpbWVzbG90Lm1hcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFcEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFxRCxNQUFNLFdBQVcsQ0FBQztBQUVwSCxPQUFPLEVBQUUsU0FBUyxFQUFtQixNQUFNLHdCQUF3QixDQUFDO0FBQ3BFLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQzs7QUFLMUIsTUFBTSxPQUFPLHdCQUF3QjtJQUNuQyxPQUFPLENBQUMsT0FBbUM7UUFDekMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7UUFDaEQsZ0JBQWdCLENBQUMsU0FBUztZQUN4QixPQUFPLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDbkcsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDO0lBRU8seUJBQXlCLENBQUMsc0JBQStDO1FBQy9FLE1BQU0sU0FBUyxHQUF5QixFQUFFLENBQUM7UUFDM0MsTUFBTSxzQkFBc0IsR0FBRyxPQUFPLENBQUMsc0JBQXNCLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkUsS0FBSyxNQUFNLElBQUksSUFBSSxzQkFBc0IsRUFBRSxDQUFDO1lBQzFDLElBQUksSUFBSSxJQUFJLHNCQUFzQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ3pDLE1BQU0sWUFBWSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQyxNQUFNLGtCQUFrQixHQUE4QixzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtvQkFDbEcsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ25ELENBQUMsQ0FBQyxDQUFDO2dCQUNILE1BQU0sa0JBQWtCLEdBQXlCLHNCQUFzQixDQUFDLElBQUksQ0FBQztxQkFDMUUsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDekIsQ0FBQyxDQUFDO3FCQUNELE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFckIsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLGtCQUFrQixDQUFDLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDL0YsQ0FBQztRQUNILENBQUM7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRU8sMEJBQTBCLENBQUMsUUFBK0I7UUFDaEUsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUNsQyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQTZCLENBQUM7SUFDdkcsQ0FBQztJQUVPLG1CQUFtQixDQUFDLHNCQUErQztRQUN6RSxPQUFPLHNCQUFzQjthQUMxQixHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNoQixRQUFRLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzNELE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUMsQ0FBQzthQUNELE1BQU0sQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7a0ZBaERVLHdCQUF3QjtnRUFBeEIsd0JBQXdCLFdBQXhCLHdCQUF3QixtQkFGdkIsTUFBTTs7aUZBRVAsd0JBQXdCO2NBSHBDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdyb3VwQnkgfSBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgVGltZXNsb3RNb21lbnRJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IENhZmVUaW1lU2xvdExpc3QsIENhbGxleGNlbGxUaW1lc2xvdCwgQ2FsbGV4Y2VsbFRpbWVzbG90UmVzcG9uc2UsIFJhd0NhbGxleGNlbGxUaW1lc2xvdCB9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBUaW1lc2xvdE1vbWVudEVudW0gfSBmcm9tICcuLi9lbnVtcyc7XG5pbXBvcnQgeyBpc0RlZmluZWQsIE1hcHBlckludGVyZmFjZSB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1zaGFyZWQnO1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhbGxleGNlbGxUaW1lc2xvdE1hcHBlciBpbXBsZW1lbnRzIE1hcHBlckludGVyZmFjZTxDYWxsZXhjZWxsVGltZXNsb3RSZXNwb25zZSwgQ2FmZVRpbWVTbG90TGlzdD4ge1xuICB0b01vZGVsKHJhd0RhdGE6IENhbGxleGNlbGxUaW1lc2xvdFJlc3BvbnNlKTogQ2FmZVRpbWVTbG90TGlzdCB7XG4gICAgY29uc3QgY2FmZVRpbWVzbG90TGlzdCA9IG5ldyBDYWZlVGltZVNsb3RMaXN0KCk7XG4gICAgY2FmZVRpbWVzbG90TGlzdC50aW1lc2xvdHMgPVxuICAgICAgcmF3RGF0YS50aW1lc2xvdHMgJiYgdGhpcy5jcmVhdGVDYWxsRXhjZWxsVGltZXNsb3RzKHRoaXMuZ2V0RW5hYmxlZFRpbWVzbG90cyhyYXdEYXRhLnRpbWVzbG90cykpO1xuICAgIHJldHVybiBjYWZlVGltZXNsb3RMaXN0O1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDYWxsRXhjZWxsVGltZXNsb3RzKHJhd0NhbGxleGNlbGxUaW1lc2xvdHM6IFJhd0NhbGxleGNlbGxUaW1lc2xvdFtdKTogQ2FsbGV4Y2VsbFRpbWVzbG90W10ge1xuICAgIGNvbnN0IHRpbWVzbG90czogQ2FsbGV4Y2VsbFRpbWVzbG90W10gPSBbXTtcbiAgICBjb25zdCB0aW1lc2xvdHNHcm91cGVkQnlEYXRlID0gZ3JvdXBCeShyYXdDYWxsZXhjZWxsVGltZXNsb3RzLCAnZGF0ZScpO1xuICAgIGZvciAoY29uc3QgZGF0ZSBpbiB0aW1lc2xvdHNHcm91cGVkQnlEYXRlKSB7XG4gICAgICBpZiAoZGF0ZSAmJiB0aW1lc2xvdHNHcm91cGVkQnlEYXRlW2RhdGVdKSB7XG4gICAgICAgIGNvbnN0IHRpbWVzbG90RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICBjb25zdCB0aW1lc2xvdE1vbWVudE9ianM6IFRpbWVzbG90TW9tZW50SW50ZXJmYWNlW10gPSB0aW1lc2xvdHNHcm91cGVkQnlEYXRlW2RhdGVdLm1hcCgodGltZXNsb3QpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVUaW1lc2xvdE1vbWVudE9iamVjdCh0aW1lc2xvdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0aW1lc2xvdE1vbWVudEtleXM6IFRpbWVzbG90TW9tZW50RW51bVtdID0gdGltZXNsb3RzR3JvdXBlZEJ5RGF0ZVtkYXRlXVxuICAgICAgICAgIC5tYXAoKHRpbWVzbG90KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGltZXNsb3QubW9tZW50O1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZpbHRlcihpc0RlZmluZWQpO1xuXG4gICAgICAgIHRpbWVzbG90cy5wdXNoKG5ldyBDYWxsZXhjZWxsVGltZXNsb3QodGltZXNsb3REYXRlLCB0aW1lc2xvdE1vbWVudEtleXMsIHRpbWVzbG90TW9tZW50T2JqcykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aW1lc2xvdHM7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVRpbWVzbG90TW9tZW50T2JqZWN0KHRpbWVzbG90OiBSYXdDYWxsZXhjZWxsVGltZXNsb3QpOiBUaW1lc2xvdE1vbWVudEludGVyZmFjZSB7XG4gICAgY29uc3Qgc3RhcnQgPSBkYXlqcyh0aW1lc2xvdC5zdGFydCk7XG4gICAgY29uc3QgZW5kID0gZGF5anModGltZXNsb3QuZW5kKTtcbiAgICBjb25zdCBzdGFydEhvdXJzID0gc3RhcnQuZm9ybWF0KCdISCcpO1xuICAgIGNvbnN0IHN0YXJ0TWludXRlcyA9IHN0YXJ0LmZvcm1hdCgnbW0nKTtcbiAgICBjb25zdCBlbmRIb3VycyA9IGVuZC5mb3JtYXQoJ0hIJyk7XG4gICAgY29uc3QgZW5kTWludXRlcyA9IGVuZC5mb3JtYXQoJ21tJyk7XG4gICAgY29uc3QgbW9tZW50S2V5ID0gdGltZXNsb3QubW9tZW50O1xuICAgIHJldHVybiB7IGtleTogbW9tZW50S2V5LCBzdGFydEhvdXJzLCBlbmRIb3VycywgZW5kTWludXRlcywgc3RhcnRNaW51dGVzIH0gYXMgVGltZXNsb3RNb21lbnRJbnRlcmZhY2U7XG4gIH1cblxuICBwcml2YXRlIGdldEVuYWJsZWRUaW1lc2xvdHMocmF3Q2FsbGV4Y2VsbFRpbWVzbG90czogUmF3Q2FsbGV4Y2VsbFRpbWVzbG90W10pOiBSYXdDYWxsZXhjZWxsVGltZXNsb3RbXSB7XG4gICAgcmV0dXJuIHJhd0NhbGxleGNlbGxUaW1lc2xvdHNcbiAgICAgIC5tYXAoKHRpbWVzbG90KSA9PiB7XG4gICAgICAgIHRpbWVzbG90LmRhdGUgPSBkYXlqcyh0aW1lc2xvdC5zdGFydCkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgICAgIHJldHVybiB0aW1lc2xvdDtcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChyYXdUaW1lc2xvdCkgPT4gcmF3VGltZXNsb3QuZW5hYmxlZCk7XG4gIH1cbn1cbiJdfQ==