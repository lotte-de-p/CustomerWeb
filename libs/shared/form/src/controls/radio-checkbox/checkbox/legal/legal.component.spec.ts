import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgControl } from '@angular/forms';
import { LanguageService } from '@telenet/ng-lib-page';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { InputCheckboxLegalComponent } from './legal.component';
import { FormErrorService } from '../../../../errors';
import { TgFormsModule } from '../../../../';

describe('InputCheckboxLegalComponent', () => {
  let component: InputCheckboxLegalComponent;
  let fixture: ComponentFixture<InputCheckboxLegalComponent>;
  const formControlSpy = {
    get valueChanges() {
      return of(true);
    },
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputCheckboxLegalComponent],
      providers: [
        FormErrorService,
        TgFormsModule,
        LanguageService,
        { provide: 'Window', useValue: {} },
        { provide: NgControl, useValue: formControlSpy },
      ],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCheckboxLegalComponent);
    component = fixture.componentInstance;
    jest.spyOn(formControlSpy, 'valueChanges', 'get').mockReturnValue(new Observable());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
