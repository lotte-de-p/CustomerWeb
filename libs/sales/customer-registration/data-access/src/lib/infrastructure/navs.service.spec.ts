import { TestBed } from '@angular/core/testing';
import { OcapiService } from '@telenet/ng-lib-ocapi';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavsService } from './navs.service';
import { of } from 'rxjs';

describe('navsService', () => {
  let ocapiService: OcapiService;
  let navsService: NavsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavsService, OcapiService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    ocapiService = TestBed.inject(OcapiService);
    navsService = TestBed.inject(NavsService);
  });

  describe('getResidentialNavs', () => {
    it('should call ocapi service with ocapiCallConfig', () => {
      ocapiService.doPost = jest.fn().mockReturnValue(of('succes'));
      navsService
        .getResidentialNavs({
          language: 'nl',
          birthday: new Date(1992, 9, 12) + '',
          firstName: 'test',
          lastName: 'test',
          address: {
            id: '123',
          },
        })
        .subscribe((response) => {
          expect(response).toBe('succes');
          expect(ocapiService.doPost).toHaveBeenCalled();
        });
    });
  });
});
