import { LanguageService } from '@telenet/ng-lib-page';
import { EventEmitter, Injector } from '@angular/core';
import { InputAbstractComponent } from '../input-abstract.component';
import { InputOption } from '../radio';
import { FormErrorService, MessageGroupDirective } from '../../errors';
import * as i0 from "@angular/core";
export declare class AbstractRadioCheckboxComponent extends InputAbstractComponent {
    languageService: LanguageService;
    formService: FormErrorService;
    messageGroupDirective: MessageGroupDirective;
    injector: Injector;
    optionList: InputOption[];
    customLabel: boolean;
    hideError: boolean;
    customOptionLabel: boolean;
    multipleSelectable: boolean;
    selectEvent: EventEmitter<unknown>;
    selectedOption?: InputOption;
    constructor(languageService: LanguageService, formService: FormErrorService, messageGroupDirective: MessageGroupDirective, injector: Injector);
    onChange: (_value: string | string[]) => void;
    onTouch: (_touched: string | boolean) => void;
    toHideError(): boolean;
    getOptionLabel(option: InputOption): string;
    getOptionText(option: InputOption): string;
    getLabelValue(option: string): string;
    registerOnChange(fn: VoidFunction): void;
    registerOnTouched(fn: VoidFunction): void;
    setDisabledState(_isDisabled: boolean): void;
    protected getKey(key: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<AbstractRadioCheckboxComponent, [null, null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AbstractRadioCheckboxComponent, "abstract-radio-checkbox", never, { "optionList": { "alias": "optionList"; "required": false; }; "customLabel": { "alias": "customLabel"; "required": false; }; "hideError": { "alias": "hideError"; "required": false; }; "customOptionLabel": { "alias": "customOptionLabel"; "required": false; }; "multipleSelectable": { "alias": "multipleSelectable"; "required": false; }; }, { "selectEvent": "selectEvent"; }, never, never, false, never>;
}
//# sourceMappingURL=abstract-radio-checkbox.component.d.ts.map