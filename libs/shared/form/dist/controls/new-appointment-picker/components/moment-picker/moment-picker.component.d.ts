import { Injector, OnInit } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { AppointmentTransformerSlot } from '../../../../models';
import { InputAbstractComponent } from '../../../input-abstract.component';
import { MomentPickerLabelsInterface, TimeslotAvailabilityInterface } from '../../interfaces';
import { TimeslotMomentEnum } from '../../../../enums';
import { FormErrorService, MessageGroupDirective } from '../../../../errors';
import * as i0 from "@angular/core";
export declare class InputMomentPickerComponent extends InputAbstractComponent implements OnInit {
    languageService: LanguageService;
    formService: FormErrorService;
    messageGroupDirective: MessageGroupDirective;
    injector: Injector;
    timeslot?: AppointmentTransformerSlot;
    availableMoments: TimeslotAvailabilityInterface[];
    labels: MomentPickerLabelsInterface;
    selectedMoment?: TimeslotMomentEnum;
    constructor(languageService: LanguageService, formService: FormErrorService, messageGroupDirective: MessageGroupDirective, injector: Injector);
    ngOnInit(): void;
    onChange: (_: TimeslotAvailabilityInterface | unknown) => void;
    onTouch: (_: boolean) => void;
    registerOnChange(fn: VoidFunction): void;
    registerOnTouched(fn: VoidFunction): void;
    writeValue(value: TimeslotMomentEnum | null): void;
    selectMoment(moment: TimeslotAvailabilityInterface): void;
    private setLabels;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputMomentPickerComponent, [null, null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputMomentPickerComponent, "app-form-moment-picker", never, { "timeslot": { "alias": "timeslot"; "required": false; }; "availableMoments": { "alias": "availableMoments"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=moment-picker.component.d.ts.map