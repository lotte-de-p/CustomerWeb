import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { PrivacyDisclaimerComponent } from './privacy-disclaimer.component';
import { CustomerBrandEnum, PathCategorisationService } from '@telenet/ng-lib-page';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AuthorConfigurationFacade } from '@sales/customer-registration/data-access';
import { provideMockStore } from '@ngrx/store/testing';

describe('PrivacyDisclaimerComponent', () => {
  let component: PrivacyDisclaimerComponent;
  let fixture: ComponentFixture<PrivacyDisclaimerComponent>;
  let pathCategorisationService: PathCategorisationService;
  const TEST_URL = 'http://testurl.com';
  const mockWindow = {
    location: {
      href: TEST_URL,
      search: '',
      hash: '',
      origin: '',
      pathname: '',
      assign: new Function(),
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      providers: [
        provideMockStore(),
        PathCategorisationService,
        AuthorConfigurationFacade,
        { provide: 'Window', useValue: mockWindow },
      ],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivacyDisclaimerComponent);
    pathCategorisationService = TestBed.inject(PathCategorisationService);
    jest.spyOn(pathCategorisationService, 'getCustomerBrand').mockReturnValue(CustomerBrandEnum.BRAND_BASE);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should init privacy keys', fakeAsync(() => {
      component.ngOnInit();
      tick();
      expect(component.privacyDisclaimerKeys).toStrictEqual([
        'customer-registration.lbl.privacy-section-one-base',
        'customer-registration.lbl.privacy-section-two-base',
        'customer-registration.lbl.privacy-section-three-base',
        'customer-registration.lbl.privacy-section-four-base',
        'customer-registration.lbl.privacy-section-five-base',
        'customer-registration.lbl.privacy-section-six-base',
      ]);
    }));
  });

  describe('showMore', () => {
    it('should toggle show more/ show less when clicked on disclaimer link', () => {
      component.toggleDisclaimerLink();
      expect(component.disclaimerLink).toBe('less');
      component.toggleBtn = false;
      component.toggleDisclaimerLink();
      expect(component.disclaimerLink).toBe('more');
    });
  });
});
