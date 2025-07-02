import { TranslateModule } from '@ngx-translate/core';
import { TestBed } from '@angular/core/testing';
import { DtvBoxSubscriptionMapper } from './subscription.mapper';
import { SaleType } from '../enums/sale-type.enum';
import { DtvBoxType } from '../enums/dtv-box-type.enum';

describe('DtvBoxSubscriptionMapper', () => {
  let subscriptionMapper: DtvBoxSubscriptionMapper;
  const rawSubscriptions = require('../mock/raw-subscriptions-mock.json');
  const subscriptions = require('../mock/subscriptions-mock.json');

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [DtvBoxSubscriptionMapper],
    });

    subscriptionMapper = TestBed.inject(DtvBoxSubscriptionMapper);
  });

  it('should map correctly', () => {
    const mappedSubscriptions = subscriptionMapper.toModel(rawSubscriptions);
    expect(mappedSubscriptions).toEqual(subscriptions);

    expect(SaleType.BUY).toBe('BUY');
    expect(SaleType.RENT).toBe('RENT');

    expect(DtvBoxType.EOS).toBe('EOS');
    expect(DtvBoxType.SIPADAN).toBe('SIPADAN');
  });

  it('should map dtv boxes correctly', () => {
    const mappedDtvBoxes = subscriptionMapper.mapDtvBoxes(rawSubscriptions[0].devices);
    expect(mappedDtvBoxes).toEqual(subscriptions[0].dtvBoxes);
  });

  it('should return the model image name', () => {
    const modelImageName = subscriptionMapper.getModelImageName('Model Number');
    expect(modelImageName).toBe('model-number.png');
  });

  it('should return the default model image name when undefined', () => {
    const modelImageName = subscriptionMapper.getModelImageName(undefined);
    expect(modelImageName).toBe('dtv-default.png');
  });

  it('should return the default model image name when empty string', () => {
    const modelImageName = subscriptionMapper.getModelImageName('');
    expect(modelImageName).toBe('dtv-default.png');
  });
});
