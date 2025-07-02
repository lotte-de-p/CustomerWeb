import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class DuidComponent implements OnInit {
    duidFormGroup: FormGroup;
    duid: string;
    ngOnInit(): void;
    keyUpEvent(event: KeyboardEvent | unknown): void;
    keyPressEvent(event: KeyboardEvent | unknown): string | false;
    static ɵfac: i0.ɵɵFactoryDeclaration<DuidComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DuidComponent, "app-duid", never, { "duidFormGroup": { "alias": "duidFormGroup"; "required": false; }; "duid": { "alias": "duid"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=duid.component.d.ts.map