import { Injector } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { AbstractRadioCheckboxComponent } from '../abstract-radio-checkbox.component';
import { FormErrorService, MessageGroupDirective } from '../../../errors';
import { InputOption } from '../../radio';
import * as i0 from "@angular/core";
export declare class AbstractRadioComponent extends AbstractRadioCheckboxComponent {
    languageService: LanguageService;
    formService: FormErrorService;
    messageGroupDirective: MessageGroupDirective;
    injector: Injector;
    customOptionExplanationText: boolean;
    constructor(languageService: LanguageService, formService: FormErrorService, messageGroupDirective: MessageGroupDirective, injector: Injector);
    getOptionText(option: InputOption): string;
    getLabel(): string;
    writeValue(optionValue?: string): void;
    selectOption(option: InputOption): void;
    hasSubscript(option: InputOption): boolean;
    getSubscript(option: InputOption): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<AbstractRadioComponent, [null, null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AbstractRadioComponent, "tg-form-abstract-radio", never, { "customOptionExplanationText": { "alias": "customOptionExplanationText"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=abstract-radio.component.d.ts.map