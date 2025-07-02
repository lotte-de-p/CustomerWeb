import { EventEmitter, Injector } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { InputAbstractComponent } from '../input-abstract.component';
import { InputOptionWithCard } from '../radio';
import { FormErrorService, MessageGroupDirective } from '../../errors';
import * as i0 from "@angular/core";
export declare class InputRadioCardComponent extends InputAbstractComponent {
    languageService: LanguageService;
    formService: FormErrorService;
    messageGroupDirective: MessageGroupDirective;
    injector: Injector;
    optionList: InputOptionWithCard[];
    customLabel: boolean;
    customOptionLabel: boolean;
    multipleSelectable: boolean;
    clearErrorMessagesFunction: EventEmitter<any>;
    inputChanged: EventEmitter<string>;
    constructor(languageService: LanguageService, formService: FormErrorService, messageGroupDirective: MessageGroupDirective, injector: Injector);
    selectedOption?: InputOptionWithCard;
    onChange(_: unknown): void;
    onTouched(_: unknown): void;
    getOptionLabel(option: InputOptionWithCard): string;
    getOptionSubLabel(option: InputOptionWithCard): string;
    registerOnChange(fn: VoidFunction): void;
    registerOnTouched(fn: VoidFunction): void;
    setDisabledState(_: boolean): void;
    getLabel(): string;
    writeValue(optionValue: string): void;
    selectOption(option: InputOptionWithCard): void;
    private getKey;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputRadioCardComponent, [null, null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputRadioCardComponent, "tg-form-radio-card", never, { "optionList": { "alias": "optionList"; "required": false; }; "customLabel": { "alias": "customLabel"; "required": false; }; "customOptionLabel": { "alias": "customOptionLabel"; "required": false; }; "multipleSelectable": { "alias": "multipleSelectable"; "required": false; }; }, { "clearErrorMessagesFunction": "clearErrorMessagesFunction"; "inputChanged": "inputChanged"; }, never, never, false, never>;
}
//# sourceMappingURL=input-radio-card.component.d.ts.map