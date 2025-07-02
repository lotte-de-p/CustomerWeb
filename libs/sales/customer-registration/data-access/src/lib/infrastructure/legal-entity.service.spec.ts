import { TestBed } from '@angular/core/testing';
import { OcapiService } from '@telenet/ng-lib-ocapi';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LegalEntityService } from './legal-entity.service';
import { of } from 'rxjs';
import { LanguageService, LanguageEnum } from '@telenet/ng-lib-page';
import { LegalEntityDetails } from '../+state/customer-registration.state';

describe('legalEntityService', () => {
  let ocapiService: OcapiService;
  let legalEntityService: LegalEntityService;
  let languageService: LanguageService;
  const legalEntityDetails: LegalEntityDetails = {
    domain: 'BusinessCustomerAccount',
    property: 'legalForm',
    values: [
      {
        id: '9153105706113181979',
        name: 'ANDERE',
      },
      {
        id: '9153105706113181980',
        name: 'APRV RP',
      },
      {
        id: '9153105706113181983',
        name: 'AUTOGEMB',
      },
    ],
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LegalEntityService, OcapiService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    ocapiService = TestBed.inject(OcapiService);
    languageService = TestBed.inject(LanguageService);
    legalEntityService = TestBed.inject(LegalEntityService);
  });

  describe('getLegalEntityData', () => {
    it('should call ocapi service with ocapiCallConfig', () => {
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(legalEntityDetails));
      jest.spyOn(languageService, 'getLanguage').mockReturnValue(LanguageEnum.EN);
      legalEntityService.getLegalEntityData('customer-registration').subscribe((response) => {
        expect(response).toBe(legalEntityDetails);
        expect(ocapiService.doGet).toHaveBeenCalled();
      });
    });
  });
});
