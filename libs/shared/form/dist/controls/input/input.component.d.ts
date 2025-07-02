import { EventEmitter, Injector } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { InputAbstractComponent } from '../input-abstract.component';
import { FormErrorService, MessageGroupDirective } from '../../errors';
import * as i0 from "@angular/core";
export declare class InputComponent extends InputAbstractComponent {
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
    showError: boolean;
    changeInput: EventEmitter<string>;
    value: string;
    constructor(languageService: LanguageService, formService: FormErrorService, messageGroupDirective: MessageGroupDirective, injector: Injector);
    getLabel(): string;
    getPlaceholder(): string;
    onChange: (_: string) => void;
    onTouched: () => void;
    registerOnChange(fn: VoidFunction): void;
    registerOnTouched(fn: VoidFunction): void;
    setDisabledState(_isDisabled: boolean): void;
    writeValue(value: string): void;
    updateValue(value: string): void;
    onBlur(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputComponent, [null, null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputComponent, "tg-form-input", never, { "showPlaceHolder": { "alias": "showPlaceHolder"; "required": false; }; "labelStyle": { "alias": "labelStyle"; "required": false; }; "customLabel": { "alias": "customLabel"; "required": false; }; "hideLabel": { "alias": "hideLabel"; "required": false; }; "prefix": { "alias": "prefix"; "required": false; }; "mask": { "alias": "mask"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "required": { "alias": "required"; "required": false; }; "maxLength": { "alias": "maxLength"; "required": false; }; "showError": { "alias": "showError"; "required": false; }; }, { "changeInput": "changeInput"; }, never, never, false, never>;
}
//# sourceMappingURL=input.component.d.ts.map