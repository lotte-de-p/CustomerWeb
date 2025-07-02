import { OnInit } from '@angular/core';
import { SummaryContentRowConfiguration } from './summary-content-row.interface';
import { OverviewPrice, OverviewPriceType } from '../../model/product-overview-data.model';
import { TextFlowType } from '@telenet/ng-lib-form';
import * as i0 from "@angular/core";
export declare class SummaryContentRowComponent implements OnInit {
    level: number;
    price: OverviewPrice;
    strikeThroughPrice: OverviewPrice;
    firstItem: boolean;
    promo: boolean;
    isFollowedByPromoLabel: boolean;
    labelConfiguration?: SummaryContentRowConfiguration;
    priceConfiguration?: SummaryContentRowConfiguration;
    priceType: typeof OverviewPriceType;
    strikeTroughConfiguration: SummaryContentRowConfiguration;
    rowMargin?: SummaryContentRowConfiguration;
    ngOnInit(): void;
    private getConfigurationType;
    private getPromoRowConfigurationType;
    private getRowConfigurationType;
    getTextFlow(): TextFlowType;
    getLabel(level: number, priceType?: OverviewPriceType): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SummaryContentRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SummaryContentRowComponent, "tg-summary-content-row", never, { "level": { "alias": "level"; "required": false; }; "price": { "alias": "price"; "required": false; }; "strikeThroughPrice": { "alias": "strikeThroughPrice"; "required": false; }; "firstItem": { "alias": "firstItem"; "required": false; }; "promo": { "alias": "promo"; "required": false; }; "isFollowedByPromoLabel": { "alias": "isFollowedByPromoLabel"; "required": false; }; "labelConfiguration": { "alias": "labelConfiguration"; "required": false; }; "priceConfiguration": { "alias": "priceConfiguration"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=summary-content-row.component.d.ts.map