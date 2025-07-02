import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageEnum, LanguageService } from '@telenet/ng-lib-page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EntertainmentOptionComponent } from './entertainment-option.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntertainmentOption } from '@entertainment-management/data-access';
import { PricePipe } from '@telenet/ng-lib-form';
import { TranslateModule } from '@ngx-translate/core';
import { provideMockStore } from '@ngrx/store/testing';

describe('EntertainmentOptionComponent', () => {
  let component: EntertainmentOptionComponent;
  let languageService: LanguageService;
  let fixture: ComponentFixture<EntertainmentOptionComponent>;
  const entertainmentOption = [
    {
      name: {
        fr: 'Streamz Base',
        nl: 'Streamz Basis',
        en: 'Streamz Basic',
      },
      weight: 10,
      logo: 'www.google.com/logo1',
    },
  ] as EntertainmentOption[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        EntertainmentOptionComponent,
        HttpClientTestingModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot({}),
        PricePipe,
        TranslateModule,
      ],
      providers: [provideMockStore(), { provide: 'Window', useValue: window }],
    }).compileComponents();

    fixture = TestBed.createComponent(EntertainmentOptionComponent);
    languageService = TestBed.inject(LanguageService);
    component = fixture.componentInstance;
    component.data = entertainmentOption;
    jest.spyOn(languageService, 'getLanguage').mockReturnValue(LanguageEnum.NL);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
