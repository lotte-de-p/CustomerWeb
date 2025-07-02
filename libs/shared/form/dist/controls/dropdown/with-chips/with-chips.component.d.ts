import { Injector } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { AbstractDropdownComponent } from '../abstract-dropdown.component';
import { InputOption } from '../../radio';
import { FormErrorService, MessageGroupDirective } from '../../../errors';
import * as i0 from "@angular/core";
export declare class DropDownWithChipsComponent extends AbstractDropdownComponent {
    languageService: LanguageService;
    formService: FormErrorService;
    messageGroupDirective: MessageGroupDirective;
    injector: Injector;
    shouldShowDropdown: boolean;
    disabled: boolean;
    required: boolean;
    dropDownValues: InputOption[];
    selectedOptions: InputOption[];
    constructor(languageService: LanguageService, formService: FormErrorService, messageGroupDirective: MessageGroupDirective, injector: Injector);
    reset(): void;
    updateValue(option: InputOption): void;
    writeValues(): void;
    writeValue(value: string | null): void;
    focusOut(): void;
    toggle(): void;
    private checkErrors;
    removeOption(selectedOption: InputOption): void;
    sortBy(prop: string): InputOption[];
    compareObjectProperties(objA: InputOption, objB: InputOption, prop: keyof InputOption): 0 | 1 | -1;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropDownWithChipsComponent, [null, null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DropDownWithChipsComponent, "tg-form-dropdown-with-chips", never, { "disabled": { "alias": "disabled"; "required": false; }; "required": { "alias": "required"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=with-chips.component.d.ts.map