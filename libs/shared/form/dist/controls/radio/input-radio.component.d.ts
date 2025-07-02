import { EventEmitter, Injector } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { InputAbstractComponent } from '../input-abstract.component';
import { InputOption } from './model';
import { FormErrorService, MessageGroupDirective } from '../../errors';
import * as i0 from "@angular/core";
export declare class InputRadioComponent extends InputAbstractComponent {
    languageService: LanguageService;
    formService: FormErrorService;
    messageGroupDirective: MessageGroupDirective;
    injector: Injector;
    messageGroup: string;
    optionList: InputOption[];
    customLabel: boolean;
    customOptionLabel: boolean;
    multipleSelectable: boolean;
    selectedOption?: InputOption;
    surroundingClass: string;
    horizontalStyle: string;
    useCustomLabel: boolean;
    id: string;
    hideSpace: boolean;
    clearErrorMessagesFunction: EventEmitter<any>;
    error: string;
    constructor(languageService: LanguageService, formService: FormErrorService, messageGroupDirective: MessageGroupDirective, injector: Injector);
    onChange(_value: string): void;
    onTouch: (_touched: boolean) => void;
    hasError(errorString: string): boolean;
    getOptionLabel(option: InputOption): string;
    registerOnChange(fn: VoidFunction): void;
    registerOnTouched(fn: VoidFunction): void;
    getLabel(): string;
    writeValue(optionValue: string): void;
    selectOption(option: InputOption): void;
    private getKey;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputRadioComponent, [null, null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputRadioComponent, "tg-form-radio", never, { "messageGroup": { "alias": "messageGroup"; "required": false; }; "optionList": { "alias": "optionList"; "required": false; }; "customLabel": { "alias": "customLabel"; "required": false; }; "customOptionLabel": { "alias": "customOptionLabel"; "required": false; }; "multipleSelectable": { "alias": "multipleSelectable"; "required": false; }; "selectedOption": { "alias": "selectedOption"; "required": false; }; "surroundingClass": { "alias": "surroundingClass"; "required": false; }; "horizontalStyle": { "alias": "horizontalStyle"; "required": false; }; "useCustomLabel": { "alias": "useCustomLabel"; "required": false; }; "id": { "alias": "id"; "required": false; }; "hideSpace": { "alias": "hideSpace"; "required": false; }; }, { "clearErrorMessagesFunction": "clearErrorMessagesFunction"; }, never, never, false, never>;
}
//# sourceMappingURL=input-radio.component.d.ts.map