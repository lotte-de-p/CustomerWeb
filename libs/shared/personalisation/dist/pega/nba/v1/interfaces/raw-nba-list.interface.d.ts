import { SalesData } from '../../../../sales/models/sales-data.model';
export interface RawNBAResponseInterface {
    nextBestActions: RawNBAListInterface;
}
export interface RawNBAListInterface {
    customerNumber: string;
    interactionId: string;
    channel: string;
    containerName: string;
    v: string;
    actions: RawNBAInterface[];
    isSuccess: boolean;
}
export interface RawNBAInterface {
    rank: string;
    group: string;
    issue: string;
    name: string;
    treatment: string;
    productType: string;
    type: string;
    campaignId: string;
    sellingArguments: RawSellingArgument[];
    sdata: SalesData;
}
export interface RawSellingArgument {
    key: string;
    rank: number;
}
//# sourceMappingURL=raw-nba-list.interface.d.ts.map