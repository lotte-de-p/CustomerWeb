import { Injector } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { InputAbstractComponent } from '../input-abstract.component';
import { FormErrorService, MessageGroupDirective } from '../../errors';
import { MatDatepicker } from '@angular/material/datepicker';
import * as i0 from "@angular/core";
export declare const MY_FORMATS: {
    parse: {
        dateInput: string;
    };
    display: {
        dateInput: string;
        monthYearLabel: string;
        dateA11yLabel: string;
        monthYearA11yLabel: string;
    };
};
export declare class DatepickerComponent extends InputAbstractComponent {
    languageService: LanguageService;
    formService: FormErrorService;
    messageGroupDirective: MessageGroupDirective;
    injector: Injector;
    customLabel?: boolean | undefined;
    showPlaceHolder: boolean;
    minDate?: Date;
    maxDate?: Date;
    datepicker: MatDatepicker<Date>;
    value: string;
    constructor(languageService: LanguageService, formService: FormErrorService, messageGroupDirective: MessageGroupDirective, injector: Injector);
    onChange: (_: string) => void;
    onTouch: (_: boolean) => void;
    registerOnChange(fn: VoidFunction): void;
    registerOnTouched(fn: VoidFunction): void;
    getLabel(): string;
    writeValue(value: string): void;
    updateValue(value: string): void;
    onTouched: (_: boolean) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerComponent, [null, null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerComponent, "app-datepicker", never, { "customLabel": { "alias": "customLabel"; "required": false; }; "showPlaceHolder": { "alias": "showPlaceHolder"; "required": false; }; "minDate": { "alias": "minDate"; "required": false; }; "maxDate": { "alias": "maxDate"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=datepicker.component.d.ts.map