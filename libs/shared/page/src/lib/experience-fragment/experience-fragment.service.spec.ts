import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of, take, tap } from 'rxjs';
import { ExperienceFragmentService } from './experience-fragment.service';
import { LanguageService } from '../page';
import { LanguageEnum } from '../i18n';

describe(ExperienceFragmentService, () => {
  let service: ExperienceFragmentService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  let languageServiceMock: jest.Mocked<LanguageService>;

  const mockElement = '<div><div class="cmp cmp-responsivegrid"><div>Exp Fragment</div></div></div>';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: 'Window',
          useValue: window,
        },
        { provide: LanguageService, useValue: { getLanguage: jest.fn() } },
        ExperienceFragmentService,
      ],
    });
    service = TestBed.inject(ExperienceFragmentService);
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
    languageServiceMock = TestBed.inject(LanguageService) as jest.Mocked<LanguageService>;
  });
  it('should call get method INTERNATIONAL & SOHO', fakeAsync(() => {
    const getSpy = jest.spyOn(httpClient, 'get').mockReturnValue(of(mockElement));
    service
      .fetchExpFragment('option_voice_insideEU_pre', '/content/experience-fragments/www-telenet-touch/nl/permanent')
      .pipe(
        take(1),
        tap((val) => expect(val).toBeTruthy())
      )
      .subscribe();
    tick(1000);
    expect(getSpy).toHaveBeenCalledTimes(1);
    flush();
  }));
  it('should fetch experience fragment', (done) => {
    const mockExpFragmentName = 'testFragment';
    const mockExpFragmentLocation = '/nl/testPath';
    const mockResponse = '<div><div class="cmp cmp-responsivegrid">mock response</div></div>';
    const mockResponseContent = '<div class="cmp cmp-responsivegrid">mock response</div>';
    languageServiceMock.getLanguage.mockReturnValue(LanguageEnum.NL);
    service
      .fetchExpFragment(mockExpFragmentName, mockExpFragmentLocation)
      .pipe(take(1))
      .subscribe((response) => {
        expect(response).toBe(mockResponseContent);
        done();
      });
    const mockUrl = new URL(window.location.href).origin.concat(`/nl/testPath/testFragment?wcmmode=disabled`);
    const req = httpMock.expectOne(mockUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
  it('should fetch from url without fragment name', (done) => {
    const mockExpFragmentName = 'test';
    const mockExpFragmentLocation = '';
    const mockResponse = '<div><div class="cmp cmp-responsivegrid">mock response</div></div>';
    const mockResponseContent = '<div class="cmp cmp-responsivegrid">mock response</div>';
    languageServiceMock.getLanguage.mockReturnValue(LanguageEnum.NL);
    service
      .fetchExpFragment(mockExpFragmentName, mockExpFragmentLocation)
      .pipe(take(1))
      .subscribe((response) => {
        expect(response).toBe(mockResponseContent);
        done();
      });

    const mockUrl = new URL(window.location.href).origin.concat(`?wcmmode=disabled`);
    const req = httpMock.expectOne(mockUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
