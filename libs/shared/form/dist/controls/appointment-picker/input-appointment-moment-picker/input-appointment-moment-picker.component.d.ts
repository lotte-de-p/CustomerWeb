import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TimeslotMomentEnum } from '../../../enums';
import { AppointmentTransformerSlot } from '../../../models';
import { AppointmentPickerTypeEnum } from '../appointment-picker-type.enum';
import { AppointmentPickerConsumerTypeEnum } from '../../../interfaces';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class InputAppointmentMomentPickerComponent implements OnInit, OnChanges {
    messageGroup: string;
    timeslots: AppointmentTransformerSlot[];
    startDate: Date;
    endDate: Date;
    selectedMoment?: TimeslotMomentEnum;
    selectedTimeslot?: AppointmentTransformerSlot;
    consumerType: string;
    updateSlots: AppointmentTransformerSlot[];
    isDeviceLandscape: boolean;
    enableAppointmentsUI: boolean;
    momentPickerLabel: string;
    momentSelected: EventEmitter<any>;
    scrollTo: EventEmitter<AppointmentPickerTypeEnum>;
    loadMore: EventEmitter<any>;
    appointmentsAvailable$: Observable<boolean>;
    reRender: boolean;
    disabled: boolean;
    consumerTypeEnum: typeof AppointmentPickerConsumerTypeEnum;
    slideConfig: {
        infinite: boolean;
        initialSlide: number;
        mobileFirst: boolean;
        arrows: boolean;
        nextArrow: string;
        prevArrow: string;
        slidesToShow: number;
        slidesToScroll: number;
        variableWidth: boolean;
    };
    isDisabled(moment: TimeslotMomentEnum): boolean;
    ngOnInit(): void;
    setSelectedMomentToInitialSlide(): void;
    generateMoments(): TimeslotMomentEnum[];
    getIcon(key: TimeslotMomentEnum): string;
    getLabel(key: TimeslotMomentEnum, suffix?: string): string;
    selectMoment(moment: TimeslotMomentEnum): void;
    getSlideUpAnimationStyling(index: number): string;
    ngOnChanges(changes: SimpleChanges): void;
    getTimeslotMomentDisplay(moment: TimeslotMomentEnum): string;
    loadMoreSlots(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputAppointmentMomentPickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputAppointmentMomentPickerComponent, "app-form-appointment-moment-picker", never, { "messageGroup": { "alias": "messageGroup"; "required": false; }; "timeslots": { "alias": "timeslots"; "required": false; }; "startDate": { "alias": "startDate"; "required": false; }; "endDate": { "alias": "endDate"; "required": false; }; "selectedMoment": { "alias": "selectedMoment"; "required": false; }; "selectedTimeslot": { "alias": "selectedTimeslot"; "required": false; }; "consumerType": { "alias": "consumerType"; "required": false; }; "updateSlots": { "alias": "updateSlots"; "required": false; }; "isDeviceLandscape": { "alias": "isDeviceLandscape"; "required": false; }; "enableAppointmentsUI": { "alias": "enableAppointmentsUI"; "required": false; }; "momentPickerLabel": { "alias": "momentPickerLabel"; "required": false; }; }, { "momentSelected": "momentSelected"; "scrollTo": "scrollTo"; "loadMore": "loadMore"; }, never, never, false, never>;
}
//# sourceMappingURL=input-appointment-moment-picker.component.d.ts.map