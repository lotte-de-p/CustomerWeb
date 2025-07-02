import { Injector } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { AbstractDropdownComponent } from '../abstract-dropdown.component';
import { FormErrorService, MessageGroupDirective } from '../../../errors';
import { InputOption } from '../../radio';
import * as i0 from "@angular/core";
export declare class DropdownWithInputComponent extends AbstractDropdownComponent {
    languageService: LanguageService;
    formService: FormErrorService;
    messageGroupDirective: MessageGroupDirective;
    injector: Injector;
    shouldShowDropdown: boolean;
    disabled: boolean;
    required: boolean;
    constructor(languageService: LanguageService, formService: FormErrorService, messageGroupDirective: MessageGroupDirective, injector: Injector);
    updateValue(option: InputOption): void;
    focusOut(): void;
    toggle(): void;
    private checkErrors;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownWithInputComponent, [null, null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DropdownWithInputComponent, "tg-form-dropdown-with-input", never, { "disabled": { "alias": "disabled"; "required": false; }; "required": { "alias": "required"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=with-input.component.d.ts.map