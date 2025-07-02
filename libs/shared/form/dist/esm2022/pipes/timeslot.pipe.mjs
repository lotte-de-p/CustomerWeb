import { Pipe } from '@angular/core';
import { TimeslotUtil } from '../utils';
import * as i0 from "@angular/core";
export class TimeslotPipe {
    transform(moment, _args) {
        const momentObject = TimeslotUtil.enumToMomentObject(moment);
        return `${momentObject?.startHours}:${momentObject?.startMinutes} - ${momentObject?.endHours}:${momentObject?.endMinutes}`;
    }
    static ɵfac = function TimeslotPipe_Factory(t) { return new (t || TimeslotPipe)(); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "timeslotFormat", type: TimeslotPipe, pure: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimeslotPipe, [{
        type: Pipe,
        args: [{
                name: 'timeslotFormat',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXNsb3QucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlcy90aW1lc2xvdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBS3hDLE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLFNBQVMsQ0FBQyxNQUEwQixFQUFFLEtBQWU7UUFDbkQsTUFBTSxZQUFZLEdBQUcsWUFBWSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdELE9BQU8sR0FBRyxZQUFZLEVBQUUsVUFBVSxJQUFJLFlBQVksRUFBRSxZQUFZLE1BQU0sWUFBWSxFQUFFLFFBQVEsSUFBSSxZQUFZLEVBQUUsVUFBVSxFQUFFLENBQUM7SUFDN0gsQ0FBQztzRUFKVSxZQUFZO2lGQUFaLFlBQVk7O2lGQUFaLFlBQVk7Y0FIeEIsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxnQkFBZ0I7YUFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaW1lc2xvdE1vbWVudEVudW0gfSBmcm9tICcuLi9lbnVtcyc7XG5pbXBvcnQgeyBUaW1lc2xvdFV0aWwgfSBmcm9tICcuLi91dGlscyc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3RpbWVzbG90Rm9ybWF0Jyxcbn0pXG5leHBvcnQgY2xhc3MgVGltZXNsb3RQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShtb21lbnQ6IFRpbWVzbG90TW9tZW50RW51bSwgX2FyZ3M/OiB1bmtub3duKTogc3RyaW5nIHtcbiAgICBjb25zdCBtb21lbnRPYmplY3QgPSBUaW1lc2xvdFV0aWwuZW51bVRvTW9tZW50T2JqZWN0KG1vbWVudCk7XG4gICAgcmV0dXJuIGAke21vbWVudE9iamVjdD8uc3RhcnRIb3Vyc306JHttb21lbnRPYmplY3Q/LnN0YXJ0TWludXRlc30gLSAke21vbWVudE9iamVjdD8uZW5kSG91cnN9OiR7bW9tZW50T2JqZWN0Py5lbmRNaW51dGVzfWA7XG4gIH1cbn1cbiJdfQ==