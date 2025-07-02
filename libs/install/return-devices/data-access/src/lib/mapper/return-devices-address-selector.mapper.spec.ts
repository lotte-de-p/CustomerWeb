import { TranslateModule } from '@ngx-translate/core';
import { TestBed } from '@angular/core/testing';
import { ReturnDevicesAddressSelectorMapper } from './return-devices-address-selector.mapper';

const mockReturnDevicesAddressSelectorList = require('../mock/return-devices-address-selector-mock.json');

describe('ReturnDevicesAddressSelectorMapper', () => {
  let returnDevicesAddressSelectorMapper: ReturnDevicesAddressSelectorMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [ReturnDevicesAddressSelectorMapper],
    });

    returnDevicesAddressSelectorMapper = TestBed.inject(ReturnDevicesAddressSelectorMapper);
  });

  it('should be created', () => {
    expect(returnDevicesAddressSelectorMapper).toBeTruthy();
  });

  it('should map return label', () => {
    const returnLabel = returnDevicesAddressSelectorMapper.toModel(mockReturnDevicesAddressSelectorList);
    expect(returnLabel).toEqual(mockReturnDevicesAddressSelectorList);
  });
});
