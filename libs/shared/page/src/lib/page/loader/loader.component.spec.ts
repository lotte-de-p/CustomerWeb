import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader.component';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { PathCategorisationService } from '../path-categorisation/path-categorisation.service';
import { LoaderService } from './services/loader.service';

const ngLoaderMessageSm = 'ng.loader.message.sm';
const ngLoaderMessageLg = 'ng.loader.message.lg';
const ngLoaderMessageXlg = 'ng.loader.message.xlg';
const translatedText3 = 'translated-text-3';
const translatedText2 = 'translated-text-2';
const translatedText1 = 'translated-text-1';
const spyOn = jest.spyOn;

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;
  let loaderService: LoaderService;
  let translateService: TranslateService;
  let pathCategorisationService: PathCategorisationService;
  const configuration = {
    imports: [
      FormsModule,
      TranslateModule.forRoot({
        loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
      }),
    ],
    providers: [
      LoaderService,
      {
        provide: 'Window',
        useValue: {
          telenetgroupLoader: {
            showPageLoader: function (_option: unknown) {
              // empty method
            },
            hidePageLoader: function () {
              // empty method
            },
            pageLoader: {},
          },
        },
      },
      {
        provide: TranslateService,
        useValue: {
          instant: function (param: unknown) {
            if (param === ngLoaderMessageSm) {
              return translatedText1;
            }
            if (param === ngLoaderMessageLg) {
              return translatedText2;
            }
            if (param === ngLoaderMessageXlg) {
              return translatedText3;
            }
            return '';
          },
        },
      },
    ],
    declarations: [LoaderComponent],
  };

  beforeEach(waitForAsync(() => {
    jest.useRealTimers();
    TestBed.configureTestingModule(configuration).compileComponents();
  }));

  beforeEach(() => {
    loaderService = TestBed.inject(LoaderService);
    fixture = TestBed.createComponent(LoaderComponent);
    translateService = TestBed.inject(TranslateService);
    pathCategorisationService = TestBed.inject(PathCategorisationService);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngAfterViewInit', () => {
    it('should not invoke Loader functions when plugin is not defined', () => {
      TestBed.resetTestingModule();
      TestBed.configureTestingModule(configuration);
      TestBed.overrideProvider('Window', { useValue: {} });
      TestBed.compileComponents();
      loaderService = TestBed.inject(LoaderService);
      fixture = TestBed.createComponent(LoaderComponent);
      component = fixture.componentInstance;
      console.error = jest.fn();
      spyOn(component as unknown as { showPageLoader: (option: unknown) => void }, 'showPageLoader');
      spyOn(component as unknown as { hidePageLoader: () => void }, 'hidePageLoader');
      component.ngAfterViewInit();
      expect(component['showPageLoader']).not.toHaveBeenCalled();
      expect(component['hidePageLoader']).not.toHaveBeenCalled();
      expect(console.error).toHaveBeenCalledWith('Loader Plugin not initialised');
    });
    it('should not call showPageLoader ', () => {
      component.startByDefault = false;
      component.pageType = 'sales';
      spyOn(component['loaderObj'], 'showPageLoader');
      spyOn(component['loaderObj'], 'hidePageLoader');
      component.ngAfterViewInit();
      expect(component['loaderObj'].showPageLoader).not.toHaveBeenCalled();
    });
    it('should call showPageLoader ', () => {
      component.startByDefault = true;
      component.pageType = 'sales';
      spyOn(component['loaderObj'], 'showPageLoader');
      spyOn(component['loaderObj'], 'hidePageLoader');
      component.ngAfterViewInit();
      expect(component['loaderObj'].showPageLoader).toHaveBeenCalled();
    });
    it("should call plugin's showPageLoader with translations for Snake loader", () => {
      component.startByDefault = true;
      component.pageType = 'sales';
      component.enableLoader = true;
      component.enableMask = true;
      spyOn(pathCategorisationService, 'getCustomerBrand').mockReturnValue('base');
      spyOn(component['loaderObj'], 'showPageLoader');
      spyOn(component['loaderObj'], 'hidePageLoader');
      const options = {
        enable_loader: true,
        enable_mask: true,
        loader_message: [translatedText1, translatedText2, translatedText3],
        brand: 'base',
        selector: 'page-loader',
      };
      component.ngAfterViewInit();
      expect(component['loaderObj'].showPageLoader).toHaveBeenCalledWith(options);
    });

    it("should call plugin's hidePageloader", fakeAsync(() => {
      jest.useFakeTimers({ legacyFakeTimers: true });
      component.pageType = 'sales';
      spyOn(component['loaderObj'], 'showPageLoader');
      spyOn(component['loaderObj'], 'hidePageLoader');
      component.ngAfterViewInit();
      loaderService.stop();
      setTimeout(function () {
        expect(component['loaderObj'].hidePageLoader).toHaveBeenCalled();
      }, 500);
    }));

    it("should call plugin's showPageLoader for the first api call", fakeAsync(() => {
      jest.useFakeTimers({ legacyFakeTimers: true });
      component.pageType = 'sales';
      component.enableLoader = true;
      component.enableMask = true;
      spyOn(pathCategorisationService, 'getCustomerBrand').mockReturnValue('base');
      spyOn(component['loaderObj'], 'showPageLoader');
      spyOn(component['loaderObj'], 'hidePageLoader');
      spyOn(translateService, 'instant').mockReturnValue((param: string) => {
        switch (param) {
          case ngLoaderMessageSm:
            return translatedText1;
          case ngLoaderMessageLg:
            return translatedText2;
          case ngLoaderMessageXlg:
            return translatedText3;
          default:
            return '';
        }
      });
      const options = {
        brand: 'base',
        enable_loader: true,
        enable_mask: true,
        loader_message: [translatedText1, translatedText2, translatedText3],
        selector: 'page-loader',
      };
      component.ngAfterViewInit();
      loaderService.start();
      expect(component['loaderObj'].showPageLoader).toHaveBeenCalledWith(options);
    }));

    it("should call plugin's showPageLoader after first api call", fakeAsync(() => {
      jest.useFakeTimers({ legacyFakeTimers: true });
      component.pageType = 'sales';
      spyOn(pathCategorisationService, 'getCustomerBrand').mockReturnValue('base');
      spyOn(component['loaderObj'], 'showPageLoader');
      spyOn(component['loaderObj'], 'hidePageLoader');
      spyOn(translateService, 'instant').mockReturnValue((param: string) => {
        switch (param) {
          case ngLoaderMessageSm:
            return translatedText1;
          case ngLoaderMessageLg:
            return translatedText2;
          case ngLoaderMessageXlg:
            return translatedText3;
          default:
            return '';
        }
      });
      component.ngAfterViewInit();
      loaderService.start();
      loaderService.stop();
      loaderService.start();
      expect(component['loaderObj'].showPageLoader).toHaveBeenCalled();
    }));
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
