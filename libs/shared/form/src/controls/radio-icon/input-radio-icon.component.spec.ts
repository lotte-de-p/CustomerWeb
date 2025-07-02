import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { LanguageService } from '@telenet/ng-lib-page';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { InputOptionWithIcon } from '../radio';
import { LabelUtil } from '../../utils';
import { InputRadioIconComponent } from './input-radio-icon.component';

describe('InputRadioIconComponent', () => {
  const ICON_NAME = 'icon-trash';
  const DESCRIPTION = 'description';
  const VALUE = 'value';

  let component: InputRadioIconComponent;
  let fixture: ComponentFixture<InputRadioIconComponent>;
  const formControlSpy = {
    get valueChanges() {
      return of(true);
    },
  };
  beforeAll(() => {
    TestBed.configureTestingModule({
      declarations: [InputRadioIconComponent],
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
    });

    fixture = TestBed.createComponent(InputRadioIconComponent);
    component = fixture.componentInstance;
    jest.spyOn(formControlSpy, 'valueChanges', 'get').mockReturnValue(new Observable());

    fixture.detectChanges();
    jest.spyOn(LabelUtil, 'getLabelKeyWithTypeLabel').mockImplementation((arg) => {
      return arg + '.lbl';
    });
  });

  it('should create', fakeAsync(() => {
    expect(component).toBeTruthy();
  }));

  describe('event listeners', () => {
    beforeEach(() => {
      jest.spyOn(component, 'registerOnChange');
      jest.spyOn(component, 'registerOnTouched');
      jest.spyOn(component, 'onChange');
      jest.spyOn(component, 'onTouch');
    });

    it('should verify event listeners are not registered', () => {
      expect(component.onChange(VALUE)).toBeUndefined();
      expect(component.onTouch(VALUE)).toBeUndefined();
      expect(component.onChange).toHaveBeenCalledWith(VALUE);
      expect(component.onTouch).toHaveBeenCalledWith(VALUE);
    });

    it('should register event listeners', () => {
      let foo = undefined;
      const callback1 = (): void => {
        foo = 'bar';
      };
      const callback2 = (): void => {
        foo = 'baz';
      };
      component.registerOnChange(callback1);
      component.registerOnTouched(callback2);
      component.onChange(VALUE);
      expect(foo).toBe('bar');
      component.onTouch(VALUE);
      expect(foo).toBe('baz');
    });
  });

  describe('getOptionLabel', () => {
    it('should get the default option label if no custom label is defined', fakeAsync(() => {
      const inputOption = new InputOptionWithIcon('test', 'test', ICON_NAME, DESCRIPTION);
      component.getOptionLabel(inputOption);
      expect(LabelUtil.getLabelKeyWithTypeLabel).toHaveBeenCalled();
    }));

    it('should return not translated value if customOptionLabel is true', () => {
      const inputOption = new InputOptionWithIcon('test', 'test', ICON_NAME, DESCRIPTION);
      component.customOptionLabel = true;
      const label = component.getOptionLabel(inputOption);
      expect(label).toBe('test');
    });
  });

  describe('getLabel', function () {
    it('should get a custom option label when one is provided', fakeAsync(() => {
      const inputOption = new InputOptionWithIcon('test', 'component-option-label', ICON_NAME, DESCRIPTION);
      component.customOptionLabel = true;
      expect(component.getOptionLabel(inputOption)).toBe('component-option-label');
    }));

    it('should get the option label with a messagegroupkey if one is present', fakeAsync(() => {
      component.messageGroup = 'test-messgae-group';
      component.key = 'test-key';
      component.customLabel = true;
      expect(component.getLabel()).toBe('test-messgae-group.test-key.lbl');
    }));

    it('should get default label if no message group is not provided', fakeAsync(() => {
      component.messageGroup = '';
      component.customLabel = false;
      expect(component.getLabel()).toBe('controls.input-radio-icon.choose');
    }));
  });

  describe('select option', () => {
    const inputOption1 = new InputOptionWithIcon('test', 'test', ICON_NAME, DESCRIPTION);
    const inputOption2 = new InputOptionWithIcon('test2', 'test2', ICON_NAME, DESCRIPTION);

    beforeEach(() => {
      component.optionList = [inputOption1, inputOption2];
      jest.spyOn(component, 'onChange');
      jest.spyOn(component, 'onTouch');
    });

    it('should set the selected option when writevalue is called', fakeAsync(() => {
      component.writeValue(inputOption2.value);
      expect(component.selectedOption).toEqual(inputOption2);
    }));

    it('should select an option', () => {
      component.selectOption(inputOption1);
      expect(component.selectedOption).toEqual(inputOption1);
      expect(component.onChange).toHaveBeenCalledWith('test');
      expect(component.onTouch).toHaveBeenCalledWith('test');
    });
  });

  describe('getKey', () => {
    it('should verify correct label key is returned', () => {
      let key = '';
      component.messageGroup = '';
      component.labelPrefix = '';
      key = component['getKey']('foo');
      expect(key).toBe('foo');
      component.messageGroup = 'foo';
      key = component['getKey']('bar');
      expect(key).toBe('foo.bar');
      component.labelPrefix = 'baz';
      key = component['getKey']('bar');
      expect(key).toBe('foo.baz.bar');
    });
  });
});
