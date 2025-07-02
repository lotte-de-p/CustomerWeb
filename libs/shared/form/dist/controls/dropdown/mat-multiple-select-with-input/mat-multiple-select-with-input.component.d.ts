import { OnChanges } from '@angular/core';
import { AbstractDropdownComponent } from '../abstract-dropdown.component';
import { MatSelect } from '@angular/material/select';
import { InputOption } from '../../radio';
import { MatOption } from '@angular/material/core';
import * as i0 from "@angular/core";
export declare class MatMultipleSelectWithInputComponent extends AbstractDropdownComponent implements OnChanges {
    multiSelect: MatSelect;
    allSelectedOption: MatOption;
    selectedOptions: InputOption[];
    toolTipRequired: boolean;
    required: boolean;
    selectedOptionsCount: number;
    ngOnChanges(): void;
    updateValueAndPreventClosing(event: Event): void;
    toggleAllSelection(event: Event): void;
    handleOutsideClick(event: Event): void;
    private preventClosing;
    private writeValues;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatMultipleSelectWithInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MatMultipleSelectWithInputComponent, "tg-form-dropdown-with-multiple-select", never, { "selectedOptions": { "alias": "selectedOptions"; "required": false; }; "toolTipRequired": { "alias": "toolTipRequired"; "required": false; }; "required": { "alias": "required"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=mat-multiple-select-with-input.component.d.ts.map