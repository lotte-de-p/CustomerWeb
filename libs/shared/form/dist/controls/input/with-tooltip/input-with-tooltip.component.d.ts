import { EventEmitter, Injector } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { InputAbstractComponent } from '../../input-abstract.component';
import { FormErrorService, MessageGroupDirective } from '../../../errors';
import * as i0 from "@angular/core";
export declare class InputWithTooltipComponent extends InputAbstractComponent {
    languageService: LanguageService;
    formService: FormErrorService;
    messageGroupDirective: MessageGroupDirective;
    injector: Injector;
    showPlaceHolder: boolean;
    labelStyle: string;
    customLabel: string;
    hideLabel: boolean;
    prefix?: string;
    mask: {
        maskValue: string;
        dropSpecialCharacters: boolean;
    };
    disabled: boolean;
    required: boolean;
    maxLength?: number;
    changeInput: EventEmitter<string>;
    value: string;
    constructor(languageService: LanguageService, formService: FormErrorService, messageGroupDirective: MessageGroupDirective, injector: Injector);
    getLabel(): string;
    getPlaceholder(): string;
    onChange: (_: string) => void;
    onTouched: () => void;
    registerOnChange(fn: VoidFunction): void;
    registerOnTouched(fn: VoidFunction): void;
    setDisabledState(_: boolean): void;
    writeValue(value: string): void;
    updateValue(value: string): void;
    onBlur(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputWithTooltipComponent, [null, null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputWithTooltipComponent, "tg-form-input-with-tooltip", never, { "showPlaceHolder": { "alias": "showPlaceHolder"; "required": false; }; "labelStyle": { "alias": "labelStyle"; "required": false; }; "customLabel": { "alias": "customLabel"; "required": false; }; "hideLabel": { "alias": "hideLabel"; "required": false; }; "prefix": { "alias": "prefix"; "required": false; }; "mask": { "alias": "mask"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "required": { "alias": "required"; "required": false; }; "maxLength": { "alias": "maxLength"; "required": false; }; }, { "changeInput": "changeInput"; }, never, never, false, never>;
}
//# sourceMappingURL=input-with-tooltip.component.d.ts.map