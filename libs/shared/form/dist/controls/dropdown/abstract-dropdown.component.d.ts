import { Injector } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { InputAbstractComponent } from '../input-abstract.component';
import { InputOption } from '../radio';
import { FormErrorService, MessageGroupDirective } from '../../errors';
import * as i0 from "@angular/core";
export declare class AbstractDropdownComponent extends InputAbstractComponent {
    languageService: LanguageService;
    formService: FormErrorService;
    messageGroupDirective: MessageGroupDirective;
    injector: Injector;
    showPlaceHolder: boolean;
    optionList: InputOption[];
    customLabel: boolean;
    labelStyle: string;
    value: string;
    constructor(languageService: LanguageService, formService: FormErrorService, messageGroupDirective: MessageGroupDirective, injector: Injector);
    onChange: (_: unknown) => void;
    onTouched: (_: unknown) => void;
    registerOnChange(fn: VoidFunction): void;
    registerOnTouched(fn: VoidFunction): void;
    setDisabledState(_isDisabled: boolean): void;
    writeValue(value: string): void;
    updateValue(value: unknown): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AbstractDropdownComponent, [null, null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AbstractDropdownComponent, "abstract-dropdown-component", never, { "showPlaceHolder": { "alias": "showPlaceHolder"; "required": false; }; "optionList": { "alias": "optionList"; "required": false; }; "customLabel": { "alias": "customLabel"; "required": false; }; "labelStyle": { "alias": "labelStyle"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=abstract-dropdown.component.d.ts.map