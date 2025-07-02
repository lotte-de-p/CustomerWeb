import { AbstractRadioComponent } from '../abstract-radio.component';
import { InputOption } from '../../../radio';
import * as i0 from "@angular/core";
export declare class AbstractInputRadioWithInputComponent extends AbstractRadioComponent {
    optionList: InputOption[];
    fieldLabel: string;
    inputPlaceholder: string;
    inputRadioSelected: boolean;
    inputValue: string;
    writeValue(optionValue: string): void;
    selectOption(option: InputOption): void;
    selectInput(): void;
    focusOtherSelected(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AbstractInputRadioWithInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AbstractInputRadioWithInputComponent, "tg-form-abstract-radio-with-input", never, { "optionList": { "alias": "optionList"; "required": false; }; "fieldLabel": { "alias": "fieldLabel"; "required": false; }; "inputPlaceholder": { "alias": "inputPlaceholder"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=abstract-with-input.component.d.ts.map