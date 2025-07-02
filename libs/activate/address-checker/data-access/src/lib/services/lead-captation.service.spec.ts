import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FiberAddressCheckerEnum } from '../models/fiber-address-checker.enum';
import { LeadCaptationInterface } from '../interfaces/lead-captation.interface';
import { LeadCaptationMapper } from '../mappers/lead-captation.mapper';
import { LeadCaptationService } from '../services/lead-captation.service';
import { LeadCaptationPayloadInterface } from '../interfaces/lead-captation-payload.interface';
import { MarketoLeadInterface } from '../interfaces/marketo-lead.interface';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { of } from 'rxjs';
import { LanguageEnum } from '@telenet/ng-lib-page';
import { RecaptchaService } from '@telenet/ng-lib-shared';

describe('LeadCaptationService', () => {
  let service: LeadCaptationService;
  let ocapiService: OcapiService;
  let mapper: LeadCaptationMapper;
  let recaptchaService: RecaptchaService;

  const simPayload: LeadCaptationPayloadInterface = {
    form_id: 'formid',
    field_language: 'EN',
    field_lastname: 'Person',
    field_firstname: 'Bob',
    field_email: 'bob@person.com',
    field_street_nr: '11',
    field_postalcode: '2000',
    field_city: 'Antwerp',
    datetime: new Date().toLocaleDateString(),
  };

  const marketoPayload: MarketoLeadInterface = {
    formId: 'formid',
    input: [
      {
        leadFormFields: {
          VAT__c: 'ACME',
          firstName: 'Bob',
          lastName: 'Person',
          email: 'bob@person.com',
          Address_lead: 'foostreet, 11',
          postalCode: '2000',
          L_City__c: 'Antwerpen',
          Language__c: LanguageEnum.EN,
          number_employees__c: '0-5',
          privacyTermsConditions: 'TRUE',
        },
        visitorData: { pageURL: window.location.href },
        cookie: 'cookie',
      },
    ],
  };

  const response: LeadCaptationInterface = {
    success: true,
  };

  const messageGroup = 'ftth';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeadCaptationMapper, OcapiService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(LeadCaptationService);
    ocapiService = TestBed.inject(OcapiService);
    mapper = TestBed.inject(LeadCaptationMapper);
    recaptchaService = TestBed.inject(RecaptchaService);
  });

  describe('submit lead', () => {
    it('should submit lead to SIM endpoint', waitForAsync(() => {
      const ocapiSpy = jest.spyOn(ocapiService, 'doPost').mockReturnValue(of(response));
      service.submitLead(messageGroup, simPayload).subscribe((response) => {
        expect(ocapiSpy).toHaveBeenCalledWith(
          new OcapiCallConfig(messageGroup, FiberAddressCheckerEnum.LEAD_CAPTATION_AEMSIM, mapper, simPayload)
        );
        expect(response.success).toBeTruthy();
      });
    }));

    it('should submit lead to Marketo endpoint', waitForAsync(() => {
      const ocapiSpy = jest.spyOn(ocapiService, 'doPost').mockReturnValue(of(response));
      const recaptchaSpy = jest.spyOn(recaptchaService, 'getRecaptchaToken').mockReturnValue(of('token'));
      service.submitMarketoLead(messageGroup, marketoPayload).subscribe((response) => {
        expect(ocapiSpy).toHaveBeenCalledWith(
          new OcapiCallConfig(messageGroup, FiberAddressCheckerEnum.LEAD_CAPTATION_MARKETO, mapper, marketoPayload)
        );
        expect(recaptchaSpy).toHaveBeenCalled();
        expect(marketoPayload['g-recaptcha-response']).toBe('token');
        expect(response.success).toBeTruthy();
      });
    }));
  });
});
