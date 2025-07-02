import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { TestBed } from '@angular/core/testing';
import { MockProvider } from 'ng-mocks';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReturnDevicesService } from './return-devices.service';
import { ReturnDevicesMapper } from '../mapper/return-devices.mapper';
import { expect, jest } from '@jest/globals';
import { firstValueFrom, of } from 'rxjs';
import { ReturnLabelMapper } from '../mapper/return-label.mapper';
import { ReturnDevicesAddressSelectorMapper } from '../mapper/return-devices-address-selector.mapper';

const mockReturnDevices = require('../mock/return-devices-mock.json');
const mockReturnDevicesAccountSelectorList = require('../mock/return-devices-address-selector-mock.json');
const returnDevices = 'return-devices';

describe('ReturnDevicesService', () => {
  let service: ReturnDevicesService;
  let ocapiService: OcapiService;
  let returnDevicesMapper: ReturnDevicesMapper;
  let returnLabelMapper: ReturnLabelMapper;
  let returnDevicesAddressSelectorMapper: ReturnDevicesAddressSelectorMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReturnDevicesService, MockProvider(OcapiService), { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ReturnDevicesService);
    ocapiService = TestBed.inject(OcapiService);
    returnDevicesMapper = TestBed.inject(ReturnDevicesMapper);
    returnLabelMapper = TestBed.inject(ReturnLabelMapper);
    returnLabelMapper = TestBed.inject(ReturnLabelMapper);
    returnDevicesAddressSelectorMapper = TestBed.inject(ReturnDevicesAddressSelectorMapper);
  });

  it('should get return devices', async () => {
    jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(mockReturnDevices));
    const returnDevices = await firstValueFrom(service.getReturnDevices());
    expect(returnDevices.length).toBe(2);
    expect(returnDevices[0].type).toBe('DTV Box');
    const ocapiCallConfig = new OcapiCallConfig(
      'return-devices',
      '/public/api/return-devices-service/v1/return-devices',
      returnDevicesMapper
    );
    expect(ocapiService.doGet).toHaveBeenCalledWith(ocapiCallConfig);
  });

  it('should get return label', async () => {
    const returnLabelMock = { label: 'label details' };
    jest.spyOn(ocapiService, 'doPost').mockReturnValue(of(returnLabelMock));
    const returnLabel = await firstValueFrom(service.getReturnLabel('12345678'));
    expect(returnLabel).toEqual(returnLabelMock);
    const ocapiCallConfig = new OcapiCallConfig(
      returnDevices,
      '/public/api/return-devices-service/v1/return-labels',
      returnLabelMapper,
      {
        addressId: '12345678',
      }
    );
    expect(ocapiService.doPost).toHaveBeenCalledWith(ocapiCallConfig);
  });

  it('should get return devices account selector list', async () => {
    jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(mockReturnDevicesAccountSelectorList));
    const returnDevicesAddressSelectorList = await firstValueFrom(service.getAddressSelector());
    expect(returnDevicesAddressSelectorList.length).toBe(1);
    expect(returnDevicesAddressSelectorList[0].id).toBe('9165639325413885482');
    const ocapiCallConfig = new OcapiCallConfig(
      returnDevices,
      '/public/api/return-devices-service/v1/addresses',
      returnDevicesAddressSelectorMapper
    );
    expect(ocapiService.doGet).toHaveBeenCalledWith(ocapiCallConfig);
  });
});
