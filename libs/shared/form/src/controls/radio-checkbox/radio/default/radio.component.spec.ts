import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputRadioDefaultComponent } from './radio.component';
import { NgControl } from '@angular/forms';
import { LanguageService } from '@telenet/ng-lib-page';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { FormErrorService, TgFormsModule } from '../../../../index';

describe('InputRadioDefaultComponent', () => {
  let component: InputRadioDefaultComponent;
  let fixture: ComponentFixture<InputRadioDefaultComponent>;
  const formControlSpy = {
    get valueChanges() {
      return of(true);
    },
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputRadioDefaultComponent],
      providers: [
        FormErrorService,
        LanguageService,
        { provide: 'Window', useValue: { scroll: jest.fn() } },
        { provide: NgControl, useValue: formControlSpy },
      ],
      imports: [
        TgFormsModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputRadioDefaultComponent);
    component = fixture.componentInstance;
    jest.spyOn(formControlSpy, 'valueChanges', 'get').mockReturnValue(new Observable());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
