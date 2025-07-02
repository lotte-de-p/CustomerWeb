import { InputRadioWithInputHorizontalComponent } from '.';
import { LanguageService } from '@telenet/ng-lib-page';
import { FormErrorService, TgFormsModule } from '../../../../../index';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';

describe('InputRadioWithInputHorizontalComponent', () => {
  let component: InputRadioWithInputHorizontalComponent;
  let fixture: ComponentFixture<InputRadioWithInputHorizontalComponent>;
  const formControlSpy = {
    get valueChanges() {
      return of(true);
    },
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputRadioWithInputHorizontalComponent],
      imports: [TgFormsModule, FormsModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule],
      providers: [
        LanguageService,
        { provide: 'Window', useValue: {} },
        FormErrorService,
        { provide: NgControl, useValue: formControlSpy },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(InputRadioWithInputHorizontalComponent);
    component = fixture.componentInstance;
    component.formService = TestBed.inject(FormErrorService);
    jest.spyOn(formControlSpy, 'valueChanges', 'get').mockReturnValue(new Observable());
    fixture.detectChanges();
  });

  it('should onBlur', () => {
    jest.spyOn(component.trackingEvent, 'emit');
    component.onBlur();
    expect(component.trackingEvent.emit).toHaveBeenCalledWith({
      label: 'controls.input-radio-image.choose',
      value: undefined,
    });
  });
});
