import { Pipe } from '@angular/core';
import { TimeslotUtil } from '../utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class AppointmentPickerPipe {
    datePipe;
    constructor(datePipe) {
        this.datePipe = datePipe;
    }
    transform(appointmentSlot, _args) {
        const dateString = this.datePipe.transform(appointmentSlot.date, 'dd MMMM yyyy');
        const startTimeString = this.transformStartTimeToString(TimeslotUtil.enumToMomentObject(appointmentSlot?.moment));
        const endTimeString = this.transformEndTimeToString(TimeslotUtil.enumToMomentObject(appointmentSlot?.moment));
        return `${dateString} - ${startTimeString} tot ${endTimeString}`;
    }
    transformStartTimeToString(moment) {
        return `${moment?.startHours}:${moment?.startMinutes}`;
    }
    transformEndTimeToString(moment) {
        return `${moment?.endHours}:${moment?.endMinutes}`;
    }
    static ɵfac = function AppointmentPickerPipe_Factory(t) { return new (t || AppointmentPickerPipe)(i0.ɵɵdirectiveInject(i1.DatePipe, 16)); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "appointmentFormat", type: AppointmentPickerPipe, pure: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppointmentPickerPipe, [{
        type: Pipe,
        args: [{
                name: 'appointmentFormat',
            }]
    }], () => [{ type: i1.DatePipe }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwb2ludG1lbnQtcGlja2VyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGlwZXMvYXBwb2ludG1lbnQtcGlja2VyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFVBQVUsQ0FBQzs7O0FBT3hDLE1BQU0sT0FBTyxxQkFBcUI7SUFDSDtJQUE3QixZQUE2QixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUcsQ0FBQztJQUVuRCxTQUFTLENBQUMsZUFBc0MsRUFBRSxLQUFpQjtRQUNqRSxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ2pGLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDbEgsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM5RyxPQUFPLEdBQUcsVUFBVSxNQUFNLGVBQWUsUUFBUSxhQUFhLEVBQUUsQ0FBQztJQUNuRSxDQUFDO0lBRU8sMEJBQTBCLENBQUMsTUFBZ0M7UUFDakUsT0FBTyxHQUFHLE1BQU0sRUFBRSxVQUFVLElBQUksTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDO0lBQ3pELENBQUM7SUFFTyx3QkFBd0IsQ0FBQyxNQUFnQztRQUMvRCxPQUFPLEdBQUcsTUFBTSxFQUFFLFFBQVEsSUFBSSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUM7SUFDckQsQ0FBQzsrRUFoQlUscUJBQXFCO29GQUFyQixxQkFBcUI7O2lGQUFyQixxQkFBcUI7Y0FIakMsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxtQkFBbUI7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUaW1lc2xvdFV0aWwgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBUaW1lc2xvdE1vbWVudEludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQXBwb2ludG1lbnRTbG90T3B0aW9uIH0gZnJvbSAnLi4vY29udHJvbHMnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdhcHBvaW50bWVudEZvcm1hdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFwcG9pbnRtZW50UGlja2VyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRhdGVQaXBlOiBEYXRlUGlwZSkge31cblxuICB0cmFuc2Zvcm0oYXBwb2ludG1lbnRTbG90OiBBcHBvaW50bWVudFNsb3RPcHRpb24sIF9hcmdzPzogdW5rbm93bltdKTogc3RyaW5nIHtcbiAgICBjb25zdCBkYXRlU3RyaW5nID0gdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oYXBwb2ludG1lbnRTbG90LmRhdGUsICdkZCBNTU1NIHl5eXknKTtcbiAgICBjb25zdCBzdGFydFRpbWVTdHJpbmcgPSB0aGlzLnRyYW5zZm9ybVN0YXJ0VGltZVRvU3RyaW5nKFRpbWVzbG90VXRpbC5lbnVtVG9Nb21lbnRPYmplY3QoYXBwb2ludG1lbnRTbG90Py5tb21lbnQpKTtcbiAgICBjb25zdCBlbmRUaW1lU3RyaW5nID0gdGhpcy50cmFuc2Zvcm1FbmRUaW1lVG9TdHJpbmcoVGltZXNsb3RVdGlsLmVudW1Ub01vbWVudE9iamVjdChhcHBvaW50bWVudFNsb3Q/Lm1vbWVudCkpO1xuICAgIHJldHVybiBgJHtkYXRlU3RyaW5nfSAtICR7c3RhcnRUaW1lU3RyaW5nfSB0b3QgJHtlbmRUaW1lU3RyaW5nfWA7XG4gIH1cblxuICBwcml2YXRlIHRyYW5zZm9ybVN0YXJ0VGltZVRvU3RyaW5nKG1vbWVudD86IFRpbWVzbG90TW9tZW50SW50ZXJmYWNlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7bW9tZW50Py5zdGFydEhvdXJzfToke21vbWVudD8uc3RhcnRNaW51dGVzfWA7XG4gIH1cblxuICBwcml2YXRlIHRyYW5zZm9ybUVuZFRpbWVUb1N0cmluZyhtb21lbnQ/OiBUaW1lc2xvdE1vbWVudEludGVyZmFjZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke21vbWVudD8uZW5kSG91cnN9OiR7bW9tZW50Py5lbmRNaW51dGVzfWA7XG4gIH1cbn1cbiJdfQ==