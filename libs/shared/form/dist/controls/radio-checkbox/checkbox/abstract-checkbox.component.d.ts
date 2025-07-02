import { Injector } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { AbstractRadioCheckboxComponent } from '../abstract-radio-checkbox.component';
import { InputOption } from '../../radio';
import { FormErrorService, MessageGroupDirective } from '../../../errors';
import * as i0 from "@angular/core";
export declare class AbstractCheckboxComponent extends AbstractRadioCheckboxComponent {
    languageService: LanguageService;
    formService: FormErrorService;
    messageGroupDirective: MessageGroupDirective;
    injector: Injector;
    selectedOptions: InputOption[];
    maxOptions: number;
    constructor(languageService: LanguageService, formService: FormErrorService, messageGroupDirective: MessageGroupDirective, injector: Injector);
    getLabel(): string;
    writeValue(optionValues: string[]): void;
    selectOption(option: InputOption): void;
    hasSubscript(option: InputOption): boolean;
    private handleMaxOptions;
    private handleToggle;
    static ɵfac: i0.ɵɵFactoryDeclaration<AbstractCheckboxComponent, [null, null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AbstractCheckboxComponent, "tg-form-abstract-checkbox", never, { "maxOptions": { "alias": "maxOptions"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=abstract-checkbox.component.d.ts.map