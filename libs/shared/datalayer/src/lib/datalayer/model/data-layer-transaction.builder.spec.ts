import { DataLayerTransactionBuilder } from './data-layer-transaction.builder';
import { AttributeBuilder, CartBuilder } from 'udl';
import { DataLayerAttributes } from '../interfaces/data-layer-attributes';

describe('DataLayerTransactionBuilder', () => {
  it('should not set attributes if no data layer attributes set', () => {
    const actual = new DataLayerTransactionBuilder().build();
    expect(actual.getAttributes()).toEqual({});
  });
  it('should have attributes set to value set in udl builder', () => {
    const attribute = new AttributeBuilder().withAttribute('test', 'a value').build();
    const actual = new DataLayerTransactionBuilder().withAttributes([attribute]).build();
    expect(actual.getAttributes()).toEqual([attribute]);
  });
  it('should set resolve promise after delay', () => {
    const actual = new DataLayerTransactionBuilder().withDataLayerForceResolvePromiseAfterDelay(5).build();
    expect(actual.getForceResolvePromiseAfterDelay()).toEqual(5);
  });
  it('should have attributes set to value set in data layer builder', () => {
    const attribute: DataLayerAttributes = { stepId: '1' };
    const actual = new DataLayerTransactionBuilder().withDataLayerAttributes(attribute).build();
    expect(actual.getAttributes()).toEqual(attribute);
  });
  it('should overwrite udl attribute with datalayer attributes', () => {
    const cart = new CartBuilder().withCartId('test').build();
    const dataLayerAttribute: DataLayerAttributes = { stepId: '1', cart: cart };
    const actual = new DataLayerTransactionBuilder()
      .withDataLayerAttributes(dataLayerAttribute)
      .withAttribute('test', 'value')
      .withAttribute('stepId', '2')
      .build();
    expect(actual.getAttributes()).toEqual(dataLayerAttribute);
  });
});
