import { MobileLinesService } from './mobile-lines.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { of } from 'rxjs';

describe('MobileLinesService', () => {
  let service: MobileLinesService;
  let ocapiService: OcapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    ocapiService = TestBed.inject(OcapiService);
    service = TestBed.inject(MobileLinesService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getMobileLines', () => {
    const ocapiCallConfig = new OcapiCallConfig(
      'mobile-lines',
      '/public/api/mobile-line-selector-service/v1/mobile-lines'
    );
    jest.spyOn(ocapiService, 'doGet').mockReturnValue(of([]));
    const actual$ = service.getMobileLines();
    expect(ocapiService.doGet).toHaveBeenCalledWith(ocapiCallConfig);
    actual$.subscribe((response) => expect(response).toBe([]));
  });
});
