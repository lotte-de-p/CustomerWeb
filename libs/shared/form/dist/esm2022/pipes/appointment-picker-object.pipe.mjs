import { Pipe } from '@angular/core';
import { TimeslotUtil } from '../utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class AppointmentPickerObjectPipe {
    datePipe;
    constructor(datePipe) {
        this.datePipe = datePipe;
    }
    transform(appointmentSlot, _args) {
        const dateString = this.datePipe.transform(appointmentSlot.date, 'dd MMMM yyyy');
        const startTimeString = this.transformStartTimeToString(TimeslotUtil.enumToMomentObject(appointmentSlot.moment));
        const endTimeString = this.transformEndTimeToString(TimeslotUtil.enumToMomentObject(appointmentSlot.moment));
        return {
            dateString: dateString || '',
            startTimeString: startTimeString,
            endTimeString: endTimeString,
        };
    }
    transformStartTimeToString(moment) {
        return `${moment?.startHours}:${moment?.startMinutes}`;
    }
    transformEndTimeToString(moment) {
        return `${moment?.endHours}:${moment?.endMinutes}`;
    }
    static ɵfac = function AppointmentPickerObjectPipe_Factory(t) { return new (t || AppointmentPickerObjectPipe)(i0.ɵɵdirectiveInject(i1.DatePipe, 16)); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "appointmentObject", type: AppointmentPickerObjectPipe, pure: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppointmentPickerObjectPipe, [{
        type: Pipe,
        args: [{
                name: 'appointmentObject',
            }]
    }], () => [{ type: i1.DatePipe }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwb2ludG1lbnQtcGlja2VyLW9iamVjdC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BpcGVzL2FwcG9pbnRtZW50LXBpY2tlci1vYmplY3QucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUdwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7QUFZeEMsTUFBTSxPQUFPLDJCQUEyQjtJQUNUO0lBQTdCLFlBQTZCLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBRyxDQUFDO0lBRW5ELFNBQVMsQ0FBQyxlQUFzQyxFQUFFLEtBQWU7UUFDL0QsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNqRixNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2pILE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFN0csT0FBTztZQUNMLFVBQVUsRUFBRSxVQUFVLElBQUksRUFBRTtZQUM1QixlQUFlLEVBQUUsZUFBZTtZQUNoQyxhQUFhLEVBQUUsYUFBYTtTQUM3QixDQUFDO0lBQ0osQ0FBQztJQUVPLDBCQUEwQixDQUFDLE1BQWdDO1FBQ2pFLE9BQU8sR0FBRyxNQUFNLEVBQUUsVUFBVSxJQUFJLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0lBRU8sd0JBQXdCLENBQUMsTUFBZ0M7UUFDL0QsT0FBTyxHQUFHLE1BQU0sRUFBRSxRQUFRLElBQUksTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDO0lBQ3JELENBQUM7cUZBckJVLDJCQUEyQjtvRkFBM0IsMkJBQTJCOztpRkFBM0IsMkJBQTJCO2NBSHZDLElBQUk7ZUFBQztnQkFDSixJQUFJLEVBQUUsbUJBQW1CO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVGltZXNsb3RNb21lbnRJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IFRpbWVzbG90VXRpbCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IEFwcG9pbnRtZW50U2xvdE9wdGlvbiB9IGZyb20gJy4uL2NvbnRyb2xzJztcblxuZXhwb3J0IGludGVyZmFjZSBBcHBvaW50bWVudFBpY2tlck9iamVjdCB7XG4gIGRhdGVTdHJpbmc6IHN0cmluZztcbiAgc3RhcnRUaW1lU3RyaW5nOiBzdHJpbmc7XG4gIGVuZFRpbWVTdHJpbmc6IHN0cmluZztcbn1cblxuQFBpcGUoe1xuICBuYW1lOiAnYXBwb2ludG1lbnRPYmplY3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBvaW50bWVudFBpY2tlck9iamVjdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkYXRlUGlwZTogRGF0ZVBpcGUpIHt9XG5cbiAgdHJhbnNmb3JtKGFwcG9pbnRtZW50U2xvdDogQXBwb2ludG1lbnRTbG90T3B0aW9uLCBfYXJncz86IHVua25vd24pOiBBcHBvaW50bWVudFBpY2tlck9iamVjdCB7XG4gICAgY29uc3QgZGF0ZVN0cmluZyA9IHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKGFwcG9pbnRtZW50U2xvdC5kYXRlLCAnZGQgTU1NTSB5eXl5Jyk7XG4gICAgY29uc3Qgc3RhcnRUaW1lU3RyaW5nID0gdGhpcy50cmFuc2Zvcm1TdGFydFRpbWVUb1N0cmluZyhUaW1lc2xvdFV0aWwuZW51bVRvTW9tZW50T2JqZWN0KGFwcG9pbnRtZW50U2xvdC5tb21lbnQpKTtcbiAgICBjb25zdCBlbmRUaW1lU3RyaW5nID0gdGhpcy50cmFuc2Zvcm1FbmRUaW1lVG9TdHJpbmcoVGltZXNsb3RVdGlsLmVudW1Ub01vbWVudE9iamVjdChhcHBvaW50bWVudFNsb3QubW9tZW50KSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGF0ZVN0cmluZzogZGF0ZVN0cmluZyB8fCAnJyxcbiAgICAgIHN0YXJ0VGltZVN0cmluZzogc3RhcnRUaW1lU3RyaW5nLFxuICAgICAgZW5kVGltZVN0cmluZzogZW5kVGltZVN0cmluZyxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2Zvcm1TdGFydFRpbWVUb1N0cmluZyhtb21lbnQ/OiBUaW1lc2xvdE1vbWVudEludGVyZmFjZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke21vbWVudD8uc3RhcnRIb3Vyc306JHttb21lbnQ/LnN0YXJ0TWludXRlc31gO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2Zvcm1FbmRUaW1lVG9TdHJpbmcobW9tZW50PzogVGltZXNsb3RNb21lbnRJbnRlcmZhY2UpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHttb21lbnQ/LmVuZEhvdXJzfToke21vbWVudD8uZW5kTWludXRlc31gO1xuICB9XG59XG4iXX0=