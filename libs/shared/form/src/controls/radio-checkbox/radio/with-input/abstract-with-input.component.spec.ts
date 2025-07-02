import { InputOption } from '../../../radio';
import { AbstractInputRadioWithInputComponent } from '.';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageService } from '@telenet/ng-lib-page';
import { Observable, of } from 'rxjs';

describe('AbstractInputRadioWithInputComponent', () => {
  let component: AbstractInputRadioWithInputComponent;
  let fixture: ComponentFixture<AbstractInputRadioWithInputComponent>;
  const formControlSpy = {
    get valueChanges() {
      return of(true);
    },
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbstractInputRadioWithInputComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule],
      providers: [
        LanguageService,
        { provide: 'Window', useValue: {} },
        { provide: NgControl, useValue: formControlSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AbstractInputRadioWithInputComponent);
    component = fixture.componentInstance;
    jest.spyOn(formControlSpy, 'valueChanges', 'get').mockReturnValue(new Observable());
    fixture.detectChanges();
  });
  describe('writeValue', () => {
    it('should set values when option value is available', function () {
      const inputOption = new InputOption('value', 'label');
      component.optionList = [inputOption];
      component.writeValue('value');
      expect(component.selectedOption).toEqual(inputOption);
    });

    it('should set values when option value is  not available and optionValue is not empty', function () {
      const inputOption = new InputOption('value', 'label');
      component.optionList = [inputOption];
      component.writeValue('other value');
      expect(component.selectedOption).toBeUndefined();
      expect(component.inputValue).toEqual('other value');
    });

    it('should set values when option value is  not available and optionValue is empty', function () {
      const inputOption = new InputOption('value', 'label');
      component.optionList = [inputOption];
      component.writeValue('EMPTY_INPUT');
      expect(component.selectedOption).toBeUndefined();
      expect(component.inputValue).toEqual('');
    });

    it('should be undefined', function () {
      component.writeValue('');

      expect(component.selectedOption).toBeUndefined();
    });
  });

  describe('selectOption', () => {
    it('should be successful', function () {
      const inputOption = new InputOption('value', 'label');
      component.selectOption(inputOption);
      expect(component.inputRadioSelected).toBe(false);
      expect(component.inputValue).toBe('');
      expect(component.selectedOption).toEqual(inputOption);
    });
  });

  describe('selectInput', () => {
    it('should be successful', function () {
      component.selectInput();

      expect(component.inputRadioSelected).toBe(true);
      expect(component.selectedOption).toBeUndefined();
    });

    it('should be successful and ', function () {
      component.selectInput();
      component.inputValue = 'www';

      expect(component.inputRadioSelected).toBe(true);
      expect(component.selectedOption).toBeUndefined();
    });
  });

  describe('focusOtherSelected', () => {
    it('should sent event', function () {
      component.optionList = [new InputOption('value', 'label')];
      jest.spyOn(component.selectEvent, 'emit');
      jest.spyOn(component.trackingEvent, 'emit');

      component.focusOtherSelected();

      expect(component.selectEvent.emit).toHaveBeenCalled();
      expect(component.trackingEvent.emit).toHaveBeenCalledWith({
        label: 'ng.label.lbl',
        value: 'other',
      });
    });
  });
});
