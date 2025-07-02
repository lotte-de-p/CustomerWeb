import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { take } from 'rxjs/operators';
import { TelenetTranslateLoader } from './main-translate-loader';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { PathCategorisationService } from '../page';

let windowMock = {};

describe('TelenetTranslateLoader', () => {
  let httpMock: HttpTestingController;
  let translateLoader;
  let pathCategorisationService: PathCategorisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TelenetTranslateLoader, { provide: 'Window', useValue: windowMock }],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    jest.spyOn(console, 'log').mockImplementation(jest.fn);
    httpMock = TestBed.inject(HttpTestingController);
    pathCategorisationService = TestBed.inject(PathCategorisationService);
  });

  afterEach(() => {
    httpMock.verify();
    windowMock = {};
  });

  it('should load the translations data if the window is loaded', (done) => {
    windowMock['localisationData'] = {};
    windowMock['localisationData']['keys'] = { test: 'test' };

    translateLoader = TestBed.inject(TelenetTranslateLoader);

    translateLoader
      .getTranslation('test')
      .pipe(take(1))
      .subscribe((a) => {
        expect(a).toEqual({ test: 'test' });
        done();
      });
  });

  it('should load the translations data from localisationData if both localisationData and pageLocaleData is present and if the window is loaded', (done) => {
    windowMock['localisationData'] = {};
    windowMock['localisationData']['keys'] = { test: 'test_localalisation_data' };
    windowMock['pageLocaleData'] = {};
    windowMock['pageLocaleData']['bundle'] = { test: 'test_page_locale_data' };

    translateLoader = TestBed.inject(TelenetTranslateLoader);

    translateLoader.getTranslation('test').subscribe((a) => {
      expect(a).toEqual({ test: 'test_localalisation_data' });
      done();
    });
  });

  it('should load the translations data from pageLocaleData when present and localisationData is NOT present and if the window is loaded', (done) => {
    windowMock['pageLocaleData'] = {};
    windowMock['pageLocaleData']['bundle'] = { test: 'test' };

    translateLoader = TestBed.inject(TelenetTranslateLoader);

    translateLoader.getTranslation('test').subscribe((a) => {
      expect(a).toEqual({ test: 'test' });
      done();
    });
  });

  it('should get call console.log  when localisationData.keys is empty object', (done) => {
    windowMock['localisationData'] = {};
    windowMock['localisationData']['keys'] = {};
    jest.spyOn(console, 'log');

    translateLoader = TestBed.inject(TelenetTranslateLoader);

    translateLoader.getTranslation('test').subscribe(() => {
      expect(console.log).toHaveBeenCalledWith('NG Translations could not be loaded');
      done();
    });
  });

  it('should console log if there is no translations data', (done) => {
    jest.spyOn(console, 'log');
    translateLoader = TestBed.inject(TelenetTranslateLoader);

    translateLoader.getTranslation('test').subscribe(() => {
      expect(console.log).toHaveBeenCalledWith('NG Translations could not be loaded');
      done();
    });
  });

  it('should return brand and category label if exists', (done) => {
    jest.spyOn(pathCategorisationService, 'getBrandPostfix').mockReturnValue('.base');
    jest.spyOn(pathCategorisationService, 'getCategoryPostfix').mockReturnValue('.business');

    windowMock['localisationData'] = {};
    windowMock['localisationData']['keys'] = {
      test: 'original_label',
      'test.base.business': 'test_base_business_label',
    };

    translateLoader = TestBed.inject(TelenetTranslateLoader);

    translateLoader.getTranslation('test').subscribe((labels) => {
      expect(labels).toEqual({
        test: 'test_base_business_label',
        'test.base.business': 'test_base_business_label',
      });
      done();
    });
  });

  it('should return brand label if exists', (done) => {
    jest.spyOn(pathCategorisationService, 'getBrandPostfix').mockReturnValue('.base');
    jest.spyOn(pathCategorisationService, 'getCategoryPostfix').mockReturnValue('');

    windowMock['localisationData'] = {};
    windowMock['localisationData']['keys'] = {
      test: 'original_label',
      'test.base': 'test_base_label',
    };

    translateLoader = TestBed.inject(TelenetTranslateLoader);

    translateLoader.getTranslation('test').subscribe((labels) => {
      expect(labels).toEqual({
        test: 'test_base_label',
        'test.base': 'test_base_label',
      });
      done();
    });
  });

  it('should not set brand specific label if original does not exist', (done) => {
    jest.spyOn(pathCategorisationService, 'getBrandPostfix').mockReturnValue('.base');
    jest.spyOn(pathCategorisationService, 'getCategoryPostfix').mockReturnValue('');

    windowMock['localisationData'] = {};
    windowMock['localisationData']['keys'] = {
      'test.base': 'test_base_label',
    };

    translateLoader = TestBed.inject(TelenetTranslateLoader);

    translateLoader.getTranslation('test').subscribe((labels) => {
      expect(labels).toEqual({
        'test.base': 'test_base_label',
      });
      done();
    });
  });

  it('should return category label if exists', (done) => {
    jest.spyOn(pathCategorisationService, 'getBrandPostfix').mockReturnValue('');
    jest.spyOn(pathCategorisationService, 'getCategoryPostfix').mockReturnValue('.business');

    windowMock['localisationData'] = {};
    windowMock['localisationData']['keys'] = {
      test: 'original_label',
      'test.business': 'test_business_label',
    };

    translateLoader = TestBed.inject(TelenetTranslateLoader);

    translateLoader.getTranslation('test').subscribe((labels) => {
      expect(labels).toEqual({
        test: 'test_business_label',
        'test.business': 'test_business_label',
      });
      done();
    });
  });

  it('should prioritize brand and category over category or brand label', (done) => {
    jest.spyOn(pathCategorisationService, 'getBrandPostfix').mockReturnValue('.base');
    jest.spyOn(pathCategorisationService, 'getCategoryPostfix').mockReturnValue('.business');

    windowMock['localisationData'] = {};
    windowMock['localisationData']['keys'] = {
      test: 'original_label',
      'test.base': 'test_base_label',
      'test.business': 'test_business_label',
      'test.base.business': 'test_base_business_label',
    };

    translateLoader = TestBed.inject(TelenetTranslateLoader);

    translateLoader.getTranslation('test').subscribe((labels) => {
      expect(labels).toEqual({
        test: 'test_base_business_label',
        'test.base': 'test_base_label',
        'test.business': 'test_business_label',
        'test.base.business': 'test_base_business_label',
      });
      done();
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
