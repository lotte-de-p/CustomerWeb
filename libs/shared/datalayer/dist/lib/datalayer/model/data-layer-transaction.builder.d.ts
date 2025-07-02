import { Transaction, TransactionBuilder } from 'udl';
import { DataLayerAttributes } from '../interfaces/data-layer-attributes';
export declare class DataLayerTransactionBuilder extends TransactionBuilder {
    private _dataLayerAttributes;
    private _resolvePromiseAfterDelay;
    withDataLayerAttributes(attributes: DataLayerAttributes): DataLayerTransactionBuilder;
    withDataLayerForceResolvePromiseAfterDelay(timeoutInMS: number): DataLayerTransactionBuilder;
    build(): Transaction;
}
//# sourceMappingURL=data-layer-transaction.builder.d.ts.map