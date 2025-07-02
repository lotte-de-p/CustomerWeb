import { TestBed } from '@angular/core/testing';
import { OcapiService } from '@telenet/ng-lib-ocapi';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { ItsMeService } from './its-me.service';

describe('itsMeService', () => {
  let ocapiService: OcapiService;
  let itsMeService: ItsMeService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItsMeService, OcapiService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    ocapiService = TestBed.inject(OcapiService);
    itsMeService = TestBed.inject(ItsMeService);
  });

  describe('getItsMeCustomer', () => {
    it('should call ocapi service with ocapiCallConfig', () => {
      ocapiService.doPost = jest.fn().mockReturnValue(of('succes'));
      itsMeService
        .getItsMeCustomer({
          code: '12345',
          state: '67890',
        })
        .subscribe((response) => {
          expect(response).toBe('succes');
          expect(ocapiService.doGet).toHaveBeenCalled();
        });
    });
  });
});
