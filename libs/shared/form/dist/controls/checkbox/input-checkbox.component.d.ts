import { Injector } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { InputAbstractComponent } from '../input-abstract.component';
import { CheckboxModifierEnum } from './const';
import { FormErrorService, MessageGroupDirective } from '../../errors';
import * as i0 from "@angular/core";
export declare class InputCheckboxComponent extends InputAbstractComponent {
    languageService: LanguageService;
    formService: FormErrorService;
    messageGroupDirective: MessageGroupDirective;
    injector: Injector;
    checkBoxModifier: CheckboxModifierEnum;
    customLabel: string;
    value: string;
    constructor(languageService: LanguageService, formService: FormErrorService, messageGroupDirective: MessageGroupDirective, injector: Injector);
    getLabel(): string;
    onChange: (_: string) => void;
    onTouched: (_: boolean) => void;
    registerOnChange(fn: VoidFunction): void;
    registerOnTouched(fn: VoidFunction): void;
    setDisabledState(_isDisabled: boolean): void;
    writeValue(value: string): void;
    updateValue(value: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputCheckboxComponent, [null, null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputCheckboxComponent, "tg-form-input-checkbox", never, { "checkBoxModifier": { "alias": "checkBoxModifier"; "required": false; }; "customLabel": { "alias": "customLabel"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=input-checkbox.component.d.ts.map