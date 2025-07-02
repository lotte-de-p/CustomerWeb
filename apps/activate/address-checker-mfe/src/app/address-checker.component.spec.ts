import { TestBed } from '@angular/core/testing';
import { AddressCheckerComponent } from './address-checker.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {
  TelenetMissingTranslationHandler,
  TelenetMissingTranslationService,
  TelenetTranslateLoader,
} from '@telenet/ng-lib-page';
import { FiberAddressCheckerComponent } from '@address-checker/feat-address-checker';

describe('AddressCheckerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        CommonModule,
        TranslateModule.forRoot({
          missingTranslationHandler: {
            provide: MissingTranslationHandler,
            useClass: TelenetMissingTranslationHandler,
            deps: [TelenetMissingTranslationService],
          },
          loader: {
            provide: TranslateLoader,
            useClass: TelenetTranslateLoader,
          },
        }),
        FiberAddressCheckerComponent,
        AddressCheckerComponent,
      ],
      declarations: [],
      providers: [{ provide: 'Window', useValue: window }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AddressCheckerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
