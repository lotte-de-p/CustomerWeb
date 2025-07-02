import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgControl } from '@angular/forms';
import { LanguageService } from '@telenet/ng-lib-page';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { InputCheckboxDefaultComponent } from './default.component';
import { FormErrorService } from '../../../../errors';

describe('InputCheckboxDefaultComponent', () => {
  let component: InputCheckboxDefaultComponent;
  let fixture: ComponentFixture<InputCheckboxDefaultComponent>;
  const formControlSpy = {
    get valueChanges() {
      return of(true);
    },
  };

  beforeAll(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [InputCheckboxDefaultComponent],
      providers: [
        FormErrorService,
        LanguageService,
        { provide: 'Window', useValue: {} },
        { provide: NgControl, useValue: formControlSpy },
      ],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    }).createComponent(InputCheckboxDefaultComponent);
  });

  beforeEach(() => {
    component = fixture.componentInstance;
    jest.spyOn(formControlSpy, 'valueChanges', 'get').mockReturnValue(new Observable());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
