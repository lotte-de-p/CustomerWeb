import { Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { AppointmentPickerTypeEnum } from '../controls/appointment-picker/appointment-picker-type.enum';
import * as i0 from "@angular/core";
export class AppointmentPickerValidator extends Validators {
    static dayRequired(type) {
        return (control) => {
            switch (type) {
                case AppointmentPickerTypeEnum.BY_DATE:
                    if (control.value) {
                        const appointmentOption = control.value;
                        return this.checkDayType(appointmentOption);
                    }
                    else {
                        return { day_required: true };
                    }
                case AppointmentPickerTypeEnum.BY_MOMENT:
                    if (control.value) {
                        const appointmentOption = control.value;
                        return this.checkMomentType(appointmentOption);
                    }
                    else {
                        return { slot_required: true };
                    }
                default:
                    return null;
            }
        };
    }
    static checkDayType(appointmentOption) {
        if (appointmentOption.date && !appointmentOption.moment) {
            return { slot_required: true };
        }
        else if (!appointmentOption.date) {
            return { day_required: true };
        }
        return null;
    }
    static checkMomentType(appointmentOption) {
        if (appointmentOption.moment && !appointmentOption.date) {
            return { day_required: true };
        }
        else if (!appointmentOption.moment) {
            return { slot_required: true };
        }
        return null;
    }
    static newAppointmentRequired(control) {
        if (control.value) {
            const appointment = control.value;
            if (appointment.moment) {
                return null;
            }
            return { moment_required: true };
        }
        return { appointment_required: true };
    }
    static ɵfac = /*@__PURE__*/ (() => { let ɵAppointmentPickerValidator_BaseFactory; return function AppointmentPickerValidator_Factory(t) { return (ɵAppointmentPickerValidator_BaseFactory || (ɵAppointmentPickerValidator_BaseFactory = i0.ɵɵgetInheritedFactory(AppointmentPickerValidator)))(t || AppointmentPickerValidator); }; })();
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AppointmentPickerValidator, factory: AppointmentPickerValidator.ɵfac });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppointmentPickerValidator, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwb2ludG1lbnQtcGlja2VyLnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92YWxpZGF0b3JzL2FwcG9pbnRtZW50LXBpY2tlci52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQyxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDOztBQUt4RyxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsVUFBVTtJQUN4RCxNQUFNLENBQUMsV0FBVyxDQUFDLElBQStCO1FBQ2hELE9BQU8sQ0FBQyxPQUF3QixFQUFrQyxFQUFFO1lBQ2xFLFFBQVEsSUFBSSxFQUFFLENBQUM7Z0JBQ2IsS0FBSyx5QkFBeUIsQ0FBQyxPQUFPO29CQUNwQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDbEIsTUFBTSxpQkFBaUIsR0FBMEIsT0FBTyxDQUFDLEtBQThCLENBQUM7d0JBQ3hGLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUM5QyxDQUFDO3lCQUFNLENBQUM7d0JBQ04sT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQztvQkFDaEMsQ0FBQztnQkFDSCxLQUFLLHlCQUF5QixDQUFDLFNBQVM7b0JBQ3RDLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUNsQixNQUFNLGlCQUFpQixHQUEwQixPQUFPLENBQUMsS0FBOEIsQ0FBQzt3QkFDeEYsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBQ2pELENBQUM7eUJBQU0sQ0FBQzt3QkFDTixPQUFPLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDO29CQUNqQyxDQUFDO2dCQUNIO29CQUNFLE9BQU8sSUFBSSxDQUFDO1lBQ2hCLENBQUM7UUFDSCxDQUFDLENBQUM7SUFDSixDQUFDO0lBRU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxpQkFBd0M7UUFDbEUsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ2pDLENBQUM7YUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkMsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNoQyxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sTUFBTSxDQUFDLGVBQWUsQ0FBQyxpQkFBd0M7UUFDckUsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ2hDLENBQUM7YUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDckMsT0FBTyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNqQyxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsTUFBTSxDQUFDLHNCQUFzQixDQUFDLE9BQXdCO1FBQ3BELElBQUksT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2xCLE1BQU0sV0FBVyxHQUF5QixPQUFPLENBQUMsS0FBNkIsQ0FBQztZQUNoRixJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDdkIsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDO1lBQ0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNuQyxDQUFDO1FBQ0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3hDLENBQUM7cVFBbkRVLDBCQUEwQixTQUExQiwwQkFBMEI7Z0VBQTFCLDBCQUEwQixXQUExQiwwQkFBMEI7O2lGQUExQiwwQkFBMEI7Y0FEdEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9yRm4sIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBvaW50bWVudFBpY2tlclR5cGVFbnVtIH0gZnJvbSAnLi4vY29udHJvbHMvYXBwb2ludG1lbnQtcGlja2VyL2FwcG9pbnRtZW50LXBpY2tlci10eXBlLmVudW0nO1xuaW1wb3J0IHsgQXBwb2ludG1lbnRTbG90T3B0aW9uIH0gZnJvbSAnLi4vY29udHJvbHMvYXBwb2ludG1lbnQtcGlja2VyL2FwcG9pbnRtZW50LXNsb3Qtb3B0aW9uLm1vZGVsJztcbmltcG9ydCB7IEFwcG9pbnRtZW50SW50ZXJmYWNlIH0gZnJvbSAnLi4vY29udHJvbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwb2ludG1lbnRQaWNrZXJWYWxpZGF0b3IgZXh0ZW5kcyBWYWxpZGF0b3JzIHtcbiAgc3RhdGljIGRheVJlcXVpcmVkKHR5cGU6IEFwcG9pbnRtZW50UGlja2VyVHlwZUVudW0pOiBWYWxpZGF0b3JGbiB7XG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IG51bGwgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgQXBwb2ludG1lbnRQaWNrZXJUeXBlRW51bS5CWV9EQVRFOlxuICAgICAgICAgIGlmIChjb250cm9sLnZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBhcHBvaW50bWVudE9wdGlvbjogQXBwb2ludG1lbnRTbG90T3B0aW9uID0gY29udHJvbC52YWx1ZSBhcyBBcHBvaW50bWVudFNsb3RPcHRpb247XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGVja0RheVR5cGUoYXBwb2ludG1lbnRPcHRpb24pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4geyBkYXlfcmVxdWlyZWQ6IHRydWUgfTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgQXBwb2ludG1lbnRQaWNrZXJUeXBlRW51bS5CWV9NT01FTlQ6XG4gICAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcG9pbnRtZW50T3B0aW9uOiBBcHBvaW50bWVudFNsb3RPcHRpb24gPSBjb250cm9sLnZhbHVlIGFzIEFwcG9pbnRtZW50U2xvdE9wdGlvbjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrTW9tZW50VHlwZShhcHBvaW50bWVudE9wdGlvbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7IHNsb3RfcmVxdWlyZWQ6IHRydWUgfTtcbiAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGNoZWNrRGF5VHlwZShhcHBvaW50bWVudE9wdGlvbjogQXBwb2ludG1lbnRTbG90T3B0aW9uKSB7XG4gICAgaWYgKGFwcG9pbnRtZW50T3B0aW9uLmRhdGUgJiYgIWFwcG9pbnRtZW50T3B0aW9uLm1vbWVudCkge1xuICAgICAgcmV0dXJuIHsgc2xvdF9yZXF1aXJlZDogdHJ1ZSB9O1xuICAgIH0gZWxzZSBpZiAoIWFwcG9pbnRtZW50T3B0aW9uLmRhdGUpIHtcbiAgICAgIHJldHVybiB7IGRheV9yZXF1aXJlZDogdHJ1ZSB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGNoZWNrTW9tZW50VHlwZShhcHBvaW50bWVudE9wdGlvbjogQXBwb2ludG1lbnRTbG90T3B0aW9uKSB7XG4gICAgaWYgKGFwcG9pbnRtZW50T3B0aW9uLm1vbWVudCAmJiAhYXBwb2ludG1lbnRPcHRpb24uZGF0ZSkge1xuICAgICAgcmV0dXJuIHsgZGF5X3JlcXVpcmVkOiB0cnVlIH07XG4gICAgfSBlbHNlIGlmICghYXBwb2ludG1lbnRPcHRpb24ubW9tZW50KSB7XG4gICAgICByZXR1cm4geyBzbG90X3JlcXVpcmVkOiB0cnVlIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc3RhdGljIG5ld0FwcG9pbnRtZW50UmVxdWlyZWQoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSB7XG4gICAgaWYgKGNvbnRyb2wudmFsdWUpIHtcbiAgICAgIGNvbnN0IGFwcG9pbnRtZW50OiBBcHBvaW50bWVudEludGVyZmFjZSA9IGNvbnRyb2wudmFsdWUgYXMgQXBwb2ludG1lbnRJbnRlcmZhY2U7XG4gICAgICBpZiAoYXBwb2ludG1lbnQubW9tZW50KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgbW9tZW50X3JlcXVpcmVkOiB0cnVlIH07XG4gICAgfVxuICAgIHJldHVybiB7IGFwcG9pbnRtZW50X3JlcXVpcmVkOiB0cnVlIH07XG4gIH1cbn1cbiJdfQ==