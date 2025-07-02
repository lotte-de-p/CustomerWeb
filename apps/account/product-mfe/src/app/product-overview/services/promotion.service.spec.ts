import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { PromotionService } from './promotion.service';
import { of } from 'rxjs';
import { TIPContractsMapper } from '../mappers/tip-contracts.mapper';
import { TIPChargeInterface, TIPContractInterface } from '../interfaces/tip-contract.interface';

const ACTIVATION_DATE = '2021-03-28T12:38:59+01:00';
const CANCELLATION_DATE = '2021-03-24T12:38:59+01:00';
const PLAN_NAME = 'Telenet Incentive Plan / TIP0000000333';
const SPEC_URL_1 = 'https://api.int.base.be/omapi/public/product/TIPS000333';
const SPEC_URL_2 = 'https://api.int.base.be/omapi/public/product/TIPS0001';

const tipContractsMockData = [
  {
    activationDate: ACTIVATION_DATE,
    cancellationDate: CANCELLATION_DATE,
    epc: 'TIPS000333',
    status: 'DISABLED',
    customerProductId: '1',
    planName: PLAN_NAME,
    specUrl: SPEC_URL_1,
    futureProcessingDate: '2022-07-28T12:38:59+01:00',
    tipMRC: {
      vatExcl: '45',
      vatIncl: '24.1',
    },
    tipUsage: {
      vatExcl: '80',
      vatIncl: '12.1',
    },
    tipNRC: {
      vatExcl: '9',
      vatIncl: '12.1',
    },
    noOfEmployees: '20',
  },
  {
    activationDate: ACTIVATION_DATE,
    epc: 'TIPS000333',
    status: 'DISABLED',
    customerProductId: '1',
    planName: PLAN_NAME,
    specUrl: SPEC_URL_1,
    tipMRC: {
      vatExcl: '45',
      vatIncl: '24.1',
    },
    tipUsage: {
      vatExcl: '80',
      vatIncl: '12.1',
    },
    tipNRC: {
      vatExcl: '9',
      vatIncl: '12.1',
    },
    noOfEmployees: '20',
  },
  {
    activationDate: ACTIVATION_DATE,
    cancellationDate: CANCELLATION_DATE,
    epc: 'TIPS0001',
    status: 'Active',
    customerProductId: '2',
    planName: PLAN_NAME,
    specUrl: SPEC_URL_2,
    tipMRC: {
      vatExcl: '10',
      vatIncl: '12.1',
    },
    tipUsage: {
      vatExcl: '10',
      vatIncl: '12.1',
    },
    tipNRC: {
      vatExcl: '10',
      vatIncl: '12.1',
    },
    noOfEmployees: '20',
  },
  {
    activationDate: '2021-02-24T12:38:59+01:00',
    cancellationDate: CANCELLATION_DATE,
    epc: 'TIPS0001',
    status: 'Active',
    customerProductId: '3',
    planName: 'Telenet Incentive Plan / TIP000000011',
    specUrl: SPEC_URL_2,
    tipMRC: {
      vatExcl: '10',
      vatIncl: '12.1',
    },
    tipUsage: {
      vatExcl: '10',
      vatIncl: '12.1',
    },
    tipNRC: {
      vatExcl: '10',
      vatIncl: '12.1',
    },
    noOfEmployees: '20',
  },
  {
    activationDate: '2021-02-25T12:38:59+01:00',
    cancellationDate: '2021-03-25T12:38:59+01:00',
    epc: 'TIPS0001',
    status: 'Active',
    customerProductId: '4',
    planName: 'Telenet Incentive Plan 2/ TIP000000011',
    specUrl: SPEC_URL_2,
    tipMRC: {
      vatExcl: '1',
      vatIncl: '14.1',
    },
    tipUsage: {
      vatExcl: '10',
      vatIncl: '15.1',
    },
    tipNRC: {
      vatExcl: '10',
      vatIncl: '16.1',
    },
    noOfEmployees: '10',
  },
];

describe('PromotionService', () => {
  const defaultUrl = '/public/api/promotion-service/v1',
    messageGroup = 'tip-contracts-overview';
  let ocapiService: OcapiService, tipContractsMapper: TIPContractsMapper, promotionService: PromotionService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [OcapiService, PromotionService, TIPContractsMapper, { provide: 'Window', useValue: window }],
      schemas: [NO_ERRORS_SCHEMA],
    });
  });

  beforeEach(() => {
    ocapiService = TestBed.inject(OcapiService);
    promotionService = TestBed.inject(PromotionService);
    tipContractsMapper = TestBed.inject(TIPContractsMapper);
  });

  describe('getTIPContracts', () => {
    it('should get TIP Contracts', () => {
      const tipContracts = tipContractsMapper.toModel(tipContractsMockData);
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(tipContracts));
      const expected = {
        activationDate: ACTIVATION_DATE,
        cancellationDate: CANCELLATION_DATE,
        epc: 'TIPS000333',
        status: 'DISABLED',
        customerProductId: '1',
        planName: PLAN_NAME,
        specUrl: SPEC_URL_1,
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
      } as TIPContractInterface;
      promotionService.getTIPContracts(messageGroup).subscribe((response) => {
        const actual = response[0];
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
      });
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        new OcapiCallConfig(messageGroup, `${defaultUrl}/tip/contracts`, tipContractsMapper)
      );
    });

    it('should get TIP Contracts with query string passed as status being active', () => {
      const tipContracts = tipContractsMapper.toModel(tipContractsMockData);
      const tipContractsDetails = [];
      tipContractsDetails.push(tipContracts[2]);
      tipContractsDetails.push(tipContracts[3]);
      tipContractsDetails.push(tipContracts[4]);
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(tipContractsDetails));
      const expected = {
        activationDate: '2021-03-28T12:38:59+01:00',
        cancellationDate: '2021-03-24T12:38:59+01:00',
        normalizedStatus: 'Active',
        epc: 'TIPS0001',
        status: 'Active',
        customerProductId: '2',
        planName: 'Telenet Incentive Plan / TIP000000011',
        specUrl: SPEC_URL_2,
        tipMRC: {
          vatExcl: '10',
          vatIncl: '12,1',
        },
        tipUsage: {
          vatExcl: '10',
          vatIncl: '12,1',
        },
        tipNRC: {
          vatExcl: '10',
          vatIncl: '12,1',
        },
        noOfEmployees: '20',
      } as TIPContractInterface;
      promotionService.getTIPContracts(messageGroup, 'active').subscribe((response) => {
        const actual = response[0];
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
      });
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        new OcapiCallConfig(messageGroup, `${defaultUrl}/tip/contracts?status=active`, tipContractsMapper)
      );
    });
  });
});
