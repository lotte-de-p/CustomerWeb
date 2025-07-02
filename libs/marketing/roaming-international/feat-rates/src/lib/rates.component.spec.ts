import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RatesComponent } from './rates.component';
import { EffectsModule } from '@ngrx/effects';
import { CountryListComponent } from './country-list/country-list.component';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LanguageService, LanguageEnum } from '@telenet/ng-lib-page';
import { jest } from '@jest/globals';

describe('RatesComponent', () => {
  let component: RatesComponent;
  let fixture: ComponentFixture<RatesComponent>;
  let mockLanguageService: LanguageService;

  const mockWindow = {
    location: {
      href: 'www.test.be?country=Switzerland',
      search: '?country=Switzerland',
      hash: '',
      origin: '',
      pathname: '',
      assign: new Function(),
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CountryListComponent,
        EffectsModule.forRoot([]),
        StoreModule.forRoot({}),
        TranslateModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [provideMockStore({}), { provide: 'Window', useValue: mockWindow }, LanguageService],
    }).compileComponents();

    fixture = TestBed.createComponent(RatesComponent);

    mockLanguageService = TestBed.inject(LanguageService);
    jest.spyOn(mockLanguageService, 'getLanguage').mockReturnValue(LanguageEnum.NL);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
