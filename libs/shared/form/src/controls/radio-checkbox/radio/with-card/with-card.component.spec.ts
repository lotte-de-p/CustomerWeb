import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '@telenet/ng-lib-page';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { InputRadioWithCardComponent } from '.';
import { FormErrorService } from '../../../../errors';
import { TgFormsModule } from '../../../../';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('InputRadioWithCardComponent', () => {
  let component: InputRadioWithCardComponent;
  let fixture: ComponentFixture<InputRadioWithCardComponent>;
  const formControlSpy = {
    get valueChanges() {
      return of(true);
    },
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputRadioWithCardComponent],
      imports: [TgFormsModule, FormsModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule],
      providers: [
        FormErrorService,
        LanguageService,
        { provide: 'Window', useValue: {} },
        { provide: NgControl, useValue: formControlSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InputRadioWithCardComponent);
    component = fixture.componentInstance;
    component.formService = TestBed.inject(FormErrorService);
    jest.spyOn(formControlSpy, 'valueChanges', 'get').mockReturnValue(new Observable());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
