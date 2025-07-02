import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '@telenet/ng-lib-page';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ControlValueAccessor, FormControlDirective, NgControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { InputOption, InputRadioComponent } from '.';
import { InputAbstractComponent } from '../../controls';
import { LabelUtil } from '../../utils';

describe('InputRadioComponent', () => {
  let _component: InputRadioComponent;
  let fixture: ComponentFixture<InputRadioComponent>;
  const formControlSpy = new FormControlDirective([], [], [{} as ControlValueAccessor], null);

  beforeAll(() => {
    TestBed.configureTestingModule({
      declarations: [InputRadioComponent],
      providers: [
        LanguageService,
        BrowserModule,
        { provide: 'Window', useValue: {} },
        { provide: NgControl, useValue: formControlSpy },
      ],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    fixture = TestBed.createComponent(InputRadioComponent);
    _component = fixture.componentInstance;
    jest.spyOn(formControlSpy, 'valueChanges', 'get').mockReturnValue(new Observable());

    fixture.detectChanges();
    jest.spyOn(LabelUtil, 'getLabelKeyWithTypeLabel').mockImplementation((arg) => {
      return arg + '.lbl';
    });
    jest.spyOn(_component, 'registerOnChange');
    jest.spyOn(_component, 'registerOnTouched');
  });

  describe('hasError', () => {
    it('should return true when the parameter equals the error', () => {
      const err = 'randomError';
      _component.error = err;

      const actual = _component.hasError(err);

      expect(actual).toBe(true);
    });

    it('should return false when the parameter is not equal to the error', () => {
      _component.error = 'randomError';

      const actual = _component.hasError('differentError');

      expect(actual).toBe(false);
    });
  });

  describe('getOptionLabel', () => {
    it('should get the default option label if no custom label is defined and message group is defined', () => {
      const inputOption = new InputOption().withValue('value').withLabel('label');
      _component.messageGroup = 'input-radio';

      const actual = _component.getOptionLabel(inputOption);

      expect(actual).toEqual('input-radio.label.lbl');
    });

    it('should get the default option label if no custom label is and no message group is defined', () => {
      const inputOption = new InputOption().withValue('value').withLabel('label');
      _component.messageGroup = '';

      const actual = _component.getOptionLabel(inputOption);

      expect(actual).toEqual('label.lbl');
    });

    it('should get the option label when customOptionLabel is true', () => {
      _component.customOptionLabel = true;
      const inputOption = new InputOption().withValue('value').withLabel('label');

      const actual = _component.getOptionLabel(inputOption);

      expect(actual).toEqual('label');
    });
  });

  describe('getLabel', () => {
    it('if customLabel is true, should get the label from the AbstractComponent ', () => {
      _component.customLabel = true;
      const label = 'superLabel';
      jest.spyOn(InputAbstractComponent.prototype, 'getLabel').mockReturnValue(label);

      const actual = _component.getLabel();

      expect(actual).toBe(label);
    });

    it('should return default label when no customLabel is false', () => {
      _component.customLabel = false;

      const actual = _component.getLabel();

      expect(actual).toBe('controls.input-radio-image.choose');
    });
  });

  describe('selectOption', () => {
    it('calls all proper methods when option has a value', () => {
      jest.spyOn(_component.clearErrorMessagesFunction, 'emit');
      jest.spyOn(_component, 'onTouch');
      jest.spyOn(_component, 'onChange');
      const inputOption = new InputOption().withValue('value').withLabel('label');

      _component.selectOption(inputOption);

      expect(_component.selectedOption).toEqual(inputOption);
      expect(_component.clearErrorMessagesFunction.emit).toHaveBeenCalled();
      expect(_component.onTouch).toHaveBeenCalled();
      expect(_component.onChange).toHaveBeenCalled();
    });
  });

  it('should set the selected option when writevalue is called', () => {
    const inputOption = new InputOption('test', 'test', false);
    const inputOption2 = new InputOption('test2', 'test2', false);
    _component.selectedOption = new InputOption('', '', false);
    _component.optionList = [inputOption, inputOption2];
    _component.writeValue(inputOption2.value);
    expect(_component.selectedOption).toEqual(inputOption2);
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
