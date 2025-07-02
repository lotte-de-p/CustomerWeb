import { OnInit } from '@angular/core';
import { AbstractRadioComponent } from '../abstract-radio.component';
import { InputOptionWithImage } from '../../../radio';
import { ScreenType } from '../../../../enums';
import * as i0 from "@angular/core";
export declare class InputRadioWithCardAndPriceComponent extends AbstractRadioComponent implements OnInit {
    optionList: InputOptionWithImage[];
    amountOfColumnsClass: string;
    screenTypeEnum: typeof ScreenType;
    ngOnInit(): void;
    private calculateAmountOfColumnsClass;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputRadioWithCardAndPriceComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputRadioWithCardAndPriceComponent, "tg-form-radio-with-card-and-price", never, { "optionList": { "alias": "optionList"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=with-card-and-price.component.d.ts.map