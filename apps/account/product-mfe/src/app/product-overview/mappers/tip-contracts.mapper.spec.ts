import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TIPContractStatusEnum, TIPContractsMapper } from '../mappers/tip-contracts.mapper';
import { TIPChargeInterface, TIPContractInterface } from '../interfaces/tip-contract.interface';

const tipContractsMockData = require('./../../../../../../../fixtures/http/netcracker/tip/tip-contracts.json');

describe('TIPContractsMapper', () => {
  let tipContractsMapper: TIPContractsMapper, expected: TIPContractInterface;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [TIPContractsMapper, { provide: 'Window', useValue: window }],
      schemas: [NO_ERRORS_SCHEMA],
    });
  });

  beforeEach(() => {
    tipContractsMapper = TestBed.inject(TIPContractsMapper);
    expected = {
      activationDate: '2021-03-28T12:38:59+01:00',
      cancellationDate: '2021-03-24T12:38:59+01:00',
      epc: 'TIPS000333',
      status: 'DISABLED',
      customerProductId: '1',
      planName: 'Telenet Incentive Plan / TIP0000000333',
      specUrl: 'https://api.int.base.be/omapi/public/product/TIPS000333',
      tipMRC: {
        vatExcl: '45',
        vatIncl: '24,1',
      } as TIPChargeInterface,
      tipUsage: {
        vatExcl: '80',
        vatIncl: '12,1',
      } as TIPChargeInterface,
      tipNRC: {
        vatExcl: '9',
        vatIncl: '12,1',
      } as TIPChargeInterface,
      noOfEmployees: '20',
      normalizedStatus: 'Disabled',
      futureProcessingDate: '2022-07-28T12:38:59+01:00',
    } as TIPContractInterface;
  });

  describe('toModel', () => {
    it('should map the tip contract correctly', () => {
      const actual = tipContractsMapper.toModel(tipContractsMockData)[0];
      expect(actual.activationDate).toEqual(expected.activationDate);
      expect(actual.cancellationDate).toEqual(expected.cancellationDate);
      expect(actual.epc).toEqual(expected.epc);
      expect(actual.status).toEqual(expected.status);
      expect(actual.normalizedStatus).toEqual(expected.normalizedStatus);
      expect(actual.tipMRC).toEqual(expected.tipMRC);
      expect(actual.tipNRC).toEqual(expected.tipNRC);
      expect(actual.tipUsage).toEqual(expected.tipUsage);
      expect(actual.noOfEmployees).toEqual(expected.noOfEmployees);
      expect(actual.planName).toEqual(expected.planName);
      expect(actual.customerProductId).toEqual(expected.customerProductId);
      expect(actual.futureProcessingDate).toEqual(expected.futureProcessingDate);
    });

    it('should compute and map the normalized status properly', () => {
      let actual = tipContractsMapper.toModel(tipContractsMockData)[0];
      expect(actual.normalizedStatus).toEqual(TIPContractStatusEnum.DISABLED);
      actual = tipContractsMapper.toModel(tipContractsMockData)[2];
      expect(actual.normalizedStatus).toEqual(TIPContractStatusEnum.ACTIVE);
    });

    it('should not map the normalized status when status is undefined', () => {
      const response = {
        planName: 'Telenet Incentive Plan / TIP000000017',
        customerProductId: '9159829795613859787',
        tipMRC: {
          vatExcl: '254',
          vatIncl: '307.3400',
        },
        tipNRC: {
          vatExcl: '10',
          vatIncl: '12.1000',
        },
        tipUsage: {
          vatExcl: '10',
          vatIncl: '12.1000',
        },
      } as TIPContractInterface;
      const actual = tipContractsMapper.toModel([response])[0];
      expect(actual.normalizedStatus).toEqual('');
    });
  });
});
