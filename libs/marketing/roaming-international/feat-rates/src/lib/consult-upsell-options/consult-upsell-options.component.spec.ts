import { ComponentFixture, waitForAsync, TestBed } from '@angular/core/testing';
import { ConsultUpsellOptionsComponent } from './consult-upsell-options.component';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule } from '@ngx-translate/core';
import { RoamingInternationalFacade } from '@marketing/marketing/roaming-international/data-access';
import { CountryListComponent } from '../country-list/country-list.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { ExperienceFragmentService } from '@telenet/ng-lib-page';
import { DomSanitizer } from '@angular/platform-browser';

describe('ConsultUpsellOptionsComponent', () => {
  let component: ConsultUpsellOptionsComponent;
  let fixture: ComponentFixture<ConsultUpsellOptionsComponent>;
  let experienceFragmentService: ExperienceFragmentService;
  let sanitizer: DomSanitizer;

  const testBebBase = {
    imports: [
      CountryListComponent,
      EffectsModule.forRoot([]),
      StoreModule.forRoot({}),
      TranslateModule.forRoot(),
      HttpClientTestingModule,
    ],
    providers: [RoamingInternationalFacade, { provide: 'Window', useValue: window }],
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule(testBebBase).compileComponents();

    fixture = TestBed.createComponent(ConsultUpsellOptionsComponent);
    experienceFragmentService = TestBed.inject(ExperienceFragmentService);
    component = fixture.componentInstance;
    sanitizer = TestBed.inject(DomSanitizer);

    component.upSellOptions = 'option_voice_insideEU_pre';
    component.rateType = 'ROAMING';
    component.customerType = 'RESIDENTIAL';
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return exp fragment element', waitForAsync(() => {
    const resultElement = sanitizer.bypassSecurityTrustHtml(
      '<div class="cmp cmp-page"><div class="cmp cmp-responsivegrid"><div>Exp Fragment</div></div></div>'
    );
    const mockElement = '<div class="cmp cmp-responsivegrid"><div>Exp Fragment</div></div>';
    jest.spyOn(experienceFragmentService, 'fetchExpFragment').mockReturnValue(of(mockElement));
    component.ngAfterViewInit();

    expect(component.upsellValue).toEqual(resultElement);
  }));
});
