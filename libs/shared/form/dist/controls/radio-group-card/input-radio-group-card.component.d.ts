import { EventEmitter, Injector } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { InputAbstractComponent } from '../input-abstract.component';
import { FormErrorService, MessageGroupDirective } from '../../errors';
import { InputOptionWithImage } from '../radio';
import * as i0 from "@angular/core";
export declare class InputRadioGroupCardComponent extends InputAbstractComponent {
    languageService: LanguageService;
    formService: FormErrorService;
    messageGroupDirective: MessageGroupDirective;
    injector: Injector;
    constructor(languageService: LanguageService, formService: FormErrorService, messageGroupDirective: MessageGroupDirective, injector: Injector);
    optionList: InputOptionWithImage[];
    customLabel: boolean;
    hideError: boolean;
    customOptionLabel: boolean;
    multipleSelectable: boolean;
    isModemInstallType: boolean;
    isBusiness: boolean;
    selectEvent: EventEmitter<unknown>;
    selectedOption?: InputOptionWithImage;
    onChange: (_value: string) => void;
    onTouch: (_touched: string) => void;
    toHideError(): boolean;
    getOptionLabel(option: InputOptionWithImage): string;
    getLabelValue(option: string): string;
    registerOnChange(fn: VoidFunction): void;
    registerOnTouched(fn: VoidFunction): void;
    setDisabledState(_isDisabled: boolean): void;
    getLabel(): string;
    writeValue(optionValue: string): void;
    selectOption(option: InputOptionWithImage): void;
    private getKey;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputRadioGroupCardComponent, [null, null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputRadioGroupCardComponent, "tg-form-radio-group-card", never, { "optionList": { "alias": "optionList"; "required": false; }; "customLabel": { "alias": "customLabel"; "required": false; }; "hideError": { "alias": "hideError"; "required": false; }; "customOptionLabel": { "alias": "customOptionLabel"; "required": false; }; "multipleSelectable": { "alias": "multipleSelectable"; "required": false; }; "isModemInstallType": { "alias": "isModemInstallType"; "required": false; }; "isBusiness": { "alias": "isBusiness"; "required": false; }; }, { "selectEvent": "selectEvent"; }, never, never, false, never>;
}
//# sourceMappingURL=input-radio-group-card.component.d.ts.map