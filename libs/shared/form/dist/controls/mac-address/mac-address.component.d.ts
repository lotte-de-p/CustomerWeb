import { ElementRef, OnInit, QueryList } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class MACAddressComponent implements OnInit {
    macAddressForm: FormGroup;
    formInput: string[];
    rows: QueryList<ElementRef>;
    macAddress: string;
    canShowError: boolean;
    isValidMacAddress: boolean;
    isValuedCopied: boolean;
    constructor();
    ngOnInit(): void;
    isValidMacAddressEntered(): boolean;
    showError(): boolean;
    getFullMACAddress(): void;
    keyUpEvent(event: KeyboardEvent | unknown, index: number): void;
    getMacAddressComplexityClass(): string;
    onPaste(event: ClipboardEvent): void;
    private toFormGroup;
    private setErrorForFormControls;
    private allElementsTouched;
    private chechBackSpaceKeyAndValueEmpty;
    static ɵfac: i0.ɵɵFactoryDeclaration<MACAddressComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MACAddressComponent, "app-mac-address", never, { "macAddress": { "alias": "macAddress"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=mac-address.component.d.ts.map