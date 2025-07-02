import { Injector, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { DropdownWithInputComponent } from '../../../dropdown';
import { FormErrorService, MessageGroupDirective } from '../../../../errors';
import { InputOption } from '../../../radio';
import * as i0 from "@angular/core";
export declare class MonthDropdownComponent extends DropdownWithInputComponent implements OnInit, OnChanges {
    languageService: LanguageService;
    formService: FormErrorService;
    messageGroupDirective: MessageGroupDirective;
    injector: Injector;
    month: number;
    optionLabel: string;
    constructor(languageService: LanguageService, formService: FormErrorService, messageGroupDirective: MessageGroupDirective, injector: Injector);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    selectOptionValue(option: InputOption): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MonthDropdownComponent, [null, null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MonthDropdownComponent, "app-month-dropdown", never, { "month": { "alias": "month"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=month-dropdown.component.d.ts.map