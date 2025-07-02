import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TestBed } from '@angular/core/testing';
import { ReturnDevicesMapper } from './return-devices.mapper';
import { jest } from '@jest/globals';
import { ReturnStatusEnum } from '../entities/device.model';

describe('ReturnDevicesMapper', () => {
  let returnDevicesMapper: ReturnDevicesMapper;
  let translateService: TranslateService;
  const returnDevice = require('../mock/return-devices-mock.json')[0];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [ReturnDevicesMapper, TranslateService],
    });

    returnDevicesMapper = TestBed.inject(ReturnDevicesMapper);
    translateService = TestBed.inject(TranslateService);

    jest.spyOn(translateService, 'instant');
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2024-03-06'));
  });

  it('should be created', () => {
    expect(returnDevicesMapper).toBeTruthy();
  });

  it('should map return devices correctly', () => {
    expect(returnDevicesMapper.toModel([{ ...returnDevice, returnDueDate: '2024-03-05' }])[0].returnStatus).toBe(
      ReturnStatusEnum.EXPIRED
    );

    expect(returnDevicesMapper.toModel([{ ...returnDevice, returnDueDate: '2024-03-15' }])[0].returnStatus).toBe(
      ReturnStatusEnum.URGENT
    );

    expect(returnDevicesMapper.toModel([{ ...returnDevice, returnDueDate: '2024-04-15' }])[0].returnStatus).toBe(
      ReturnStatusEnum.TO_BE_EXPECTED
    );

    expect(returnDevicesMapper.toModel([{ ...returnDevice, returnDueDate: null }])[0].returnStatus).toBe(
      ReturnStatusEnum.TO_BE_EXPECTED
    );
  });

  it('should map types correctly', () => {
    expect(returnDevicesMapper.toModel([{ ...returnDevice, type: 'Access Points' }])[0].typeImageName).toBe(
      'access_point'
    );
    expect(returnDevicesMapper.toModel([{ ...returnDevice, type: 'DTV Box' }])[0].typeImageName).toBe('dtvbox');
    expect(returnDevicesMapper.toModel([{ ...returnDevice, type: 'Modem' }])[0].typeImageName).toBe('modem');
    expect(returnDevicesMapper.toModel([{ ...returnDevice, type: 'Modem Accessories' }])[0].typeImageName).toBe(
      'modem_accessories'
    );
    expect(returnDevicesMapper.toModel([{ ...returnDevice, type: 'Powerlines' }])[0].typeImageName).toBe('powerline');
    expect(returnDevicesMapper.toModel([{ ...returnDevice, type: 'Unknown' }])[0].typeImageName).toBe(
      'return-device-default'
    );
    expect(returnDevicesMapper.toModel([{ ...returnDevice, type: '' }])[0].typeImageName).toBe('return-device-default');
  });
});
