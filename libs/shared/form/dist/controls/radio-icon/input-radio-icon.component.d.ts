import { Injector } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { InputAbstractComponent } from '../input-abstract.component';
import { InputOptionWithIcon } from '../radio';
import { FormErrorService, MessageGroupDirective } from '../../errors';
import * as i0 from "@angular/core";
export declare class InputRadioIconComponent extends InputAbstractComponent {
    languageService: LanguageService;
    formService: FormErrorService;
    messageGroupDirective: MessageGroupDirective;
    injector: Injector;
    optionList: InputOptionWithIcon[];
    customLabel: boolean;
    customOptionLabel: boolean;
    multipleSelectable: boolean;
    constructor(languageService: LanguageService, formService: FormErrorService, messageGroupDirective: MessageGroupDirective, injector: Injector);
    selectedOption?: InputOptionWithIcon;
    onChange: (_: string) => void;
    onTouch: (_: string) => void;
    getOptionLabel(option: InputOptionWithIcon): string;
    registerOnChange(fn: VoidFunction): void;
    registerOnTouched(fn: VoidFunction): void;
    getLabel(): string;
    writeValue(optionValue: string): void;
    selectOption(option: InputOptionWithIcon): void;
    private getKey;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputRadioIconComponent, [null, null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputRadioIconComponent, "tg-form-radio-icon", never, { "optionList": { "alias": "optionList"; "required": false; }; "customLabel": { "alias": "customLabel"; "required": false; }; "customOptionLabel": { "alias": "customOptionLabel"; "required": false; }; "multipleSelectable": { "alias": "multipleSelectable"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=input-radio-icon.component.d.ts.map