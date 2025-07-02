import { Transaction, TransactionBuilder } from 'udl';
import { DataLayerAttributes } from '../interfaces/data-layer-attributes';

export class DataLayerTransactionBuilder extends TransactionBuilder {
  private _dataLayerAttributes: DataLayerAttributes | undefined;
  private _resolvePromiseAfterDelay = 0;

  withDataLayerAttributes(attributes: DataLayerAttributes): DataLayerTransactionBuilder {
    this._dataLayerAttributes = attributes;
    return this;
  }

  withDataLayerForceResolvePromiseAfterDelay(timeoutInMS: number): DataLayerTransactionBuilder {
    this._resolvePromiseAfterDelay = timeoutInMS;
    return this;
  }

  override build(): Transaction {
    const transaction = super.build();
    if (this._dataLayerAttributes) {
      transaction.setAttributes(this._dataLayerAttributes);
    }
    transaction.setForceResolvePromiseAfterDelay(this._resolvePromiseAfterDelay);
    return transaction;
  }
}
