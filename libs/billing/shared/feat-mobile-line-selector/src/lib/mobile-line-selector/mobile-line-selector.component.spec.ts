import { MobileLineSelectorComponent } from './mobile-line-selector.component';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MobileLine, MobileLinesService } from '@billing/shared/data-access';
import { delay, of, throwError } from 'rxjs';
import { MockProvider } from 'ng-mocks';
import { UrlService } from '@telenet/ng-lib-page';

describe('MobileLineSelectorComponent', () => {
  let component: MobileLineSelectorComponent;
  let fixture: ComponentFixture<MobileLineSelectorComponent>;
  let mobileLineService: MobileLinesService;
  let urlService: UrlService;

  const MOBILE_LINES: MobileLine[] = [
    { msisdn: '0412345', name: 'line1', isDataOnly: false },
    { msisdn: '04123456', name: 'line2', isDataOnly: false },
    { msisdn: '04132467', name: 'line3', isDataOnly: true },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [
        MockProvider(MobileLinesService),
        {
          provide: 'Window',
          useValue: {},
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(MobileLineSelectorComponent);
    component = fixture.componentInstance;
    mobileLineService = TestBed.inject(MobileLinesService);
    urlService = TestBed.inject(UrlService);
  });

  it('should create the component', fakeAsync(() => {
    jest.spyOn(mobileLineService, 'getMobileLines').mockReturnValue(of(MOBILE_LINES));
    expect(component).toBeTruthy();
    component.ngOnInit();
    tick(100);
    expect(component.selectedMobileLine).toEqual(MOBILE_LINES[0]);
    expect(component.mobileLines).toEqual(MOBILE_LINES);
    expect(sessionStorage.getItem(MobileLineSelectorComponent.MOBILE_LINE_STORAGE_KEY)).toEqual(MOBILE_LINES[0].msisdn);
  }));

  it('should set loading to true and fetch mobile lines on initialization', fakeAsync(() => {
    jest.spyOn(mobileLineService, 'getMobileLines').mockReturnValue(of(MOBILE_LINES).pipe(delay(1)));
    component.ngOnInit();
    expect(component.loading).toBe(true);
    tick(1);
    expect(component.loading).toBe(false);
    expect(mobileLineService.getMobileLines).toHaveBeenCalled();
  }));

  it('should set loading to false and showError to true when getMobileLines fails', (done) => {
    jest.spyOn(mobileLineService, 'getMobileLines').mockReturnValue(throwError(() => 'error'));

    component.ngOnInit();
    done();

    expect(component.loading).toBe(false);
    expect(component.showError).toBe(true);
  });

  it('should select first mobile line if msisdn not passed', () => {
    const actual = component.getMobileLines(MOBILE_LINES);
    expect(actual).toEqual(MOBILE_LINES[0]);
  });

  it('should select a mobile line from query parameters', () => {
    jest.spyOn(urlService, 'getRequestParamValue').mockReturnValue('0412345');
    const actual = component.getMobileLines(MOBILE_LINES);
    expect(actual).toEqual(MOBILE_LINES[0]);
  });

  it('should select a mobile line', (done) => {
    jest.spyOn(mobileLineService, 'getMobileLines').mockReturnValue(of(MOBILE_LINES));
    component.mobileLineSelected.subscribe((mobileLine) => {
      expect(mobileLine).toEqual(MOBILE_LINES[1]);
      done();
    });
    component.selectMobileLine(MOBILE_LINES[1]);
    expect(component.selectedMobileLine).toEqual(MOBILE_LINES[1]);
    expect(sessionStorage.getItem(MobileLineSelectorComponent.MOBILE_LINE_STORAGE_KEY)).toEqual(MOBILE_LINES[1].msisdn);
  });

  it('should open and close the menu', () => {
    jest.spyOn(mobileLineService, 'getMobileLines').mockReturnValue(of(MOBILE_LINES));
    expect(component.showMenu).toBe(false);
    component.open(new Event('click'));
    expect(component.showMenu).toBe(true);
    component.close();
    expect(component.showMenu).toBe(false);
  });
});
