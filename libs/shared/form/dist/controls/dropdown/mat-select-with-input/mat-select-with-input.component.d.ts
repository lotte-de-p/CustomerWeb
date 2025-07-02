import { AfterContentInit, EventEmitter } from '@angular/core';
import { AbstractDropdownComponent } from '../abstract-dropdown.component';
import { MatSelect } from '@angular/material/select';
import { InputOption } from '../../radio';
import * as i0 from "@angular/core";
export declare class MatSelectWithInputComponent extends AbstractDropdownComponent implements AfterContentInit {
    select: MatSelect;
    required: boolean;
    disabled: boolean;
    toolTipRequired: boolean;
    selectChange: EventEmitter<void>;
    selectedOption: InputOption;
    ngAfterContentInit(): void;
    checkErrors(): void;
    private getValueAsInputOption;
    private changeControlValue;
    changeSelectedValue(): void;
    handleOutsideClick(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatSelectWithInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MatSelectWithInputComponent, "tg-form-dropdown-single-select", never, { "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "toolTipRequired": { "alias": "toolTipRequired"; "required": false; }; }, { "selectChange": "selectChange"; }, never, never, false, never>;
}
//# sourceMappingURL=mat-select-with-input.component.d.ts.map