import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputCheckboxWithCardComponent } from '.';
import { LanguageService } from '@telenet/ng-lib-page';
import { NgControl } from '@angular/forms';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { FormErrorService } from '../../../../errors';
import { InputOptionWithSubscript } from '../../../radio';

describe('InputCheckboxWithCardComponent', () => {
  let component: InputCheckboxWithCardComponent;
  let fixture: ComponentFixture<InputCheckboxWithCardComponent>;
  const formControlSpy = {
    get valueChanges() {
      return of(true);
    },
  };
  beforeAll(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [InputCheckboxWithCardComponent],
      providers: [
        FormErrorService,
        { provide: 'Window', useValue: window },
        LanguageService,
        { provide: NgControl, useValue: formControlSpy },
      ],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    }).createComponent(InputCheckboxWithCardComponent);
  });

  beforeEach(() => {
    component = fixture.componentInstance;
    jest.spyOn(formControlSpy, 'valueChanges', 'get').mockReturnValue(new Observable());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.getSubscript(new InputOptionWithSubscript('value', 'label', 'subscript'))).toEqual('subscript');
  });
});
