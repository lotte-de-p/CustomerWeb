import { SellingArgument } from './selling-argument.model';
import { RawSalesData, SalesData } from '../../../../sales';
export declare class NBA {
    readonly rank: string;
    readonly group: string;
    readonly issue: string;
    readonly name: string;
    readonly treatment: string;
    readonly campaignId: string;
    readonly productType: string;
    readonly sellingArguments: readonly SellingArgument[];
    readonly sdata: SalesData;
    constructor(nba?: NBA);
    hasTreatment(): boolean;
    hasProductType(): boolean;
    isSalesDataEmpty(): boolean;
    getRawSalesData(): RawSalesData;
    private extractProductIds;
    private extractOptionIds;
    private extractOptinIds;
    private getNBOElementByType;
    private extractFlatOmapiIdList;
}
//# sourceMappingURL=nba.model.d.ts.map