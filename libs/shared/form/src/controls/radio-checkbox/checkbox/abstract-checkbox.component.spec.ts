import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '@telenet/ng-lib-page';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { NgControl } from '@angular/forms';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AbstractCheckboxComponent } from '../';
import { InputOption, InputOptionWithSubscript } from '../../radio';
import { FormErrorService } from '../../../errors';

describe('RadioCheckboxCheckboxComponent', () => {
  let component: AbstractCheckboxComponent;
  let fixture: ComponentFixture<AbstractCheckboxComponent>;
  const formControlSpy = {
    get valueChanges() {
      return of(true);
    },
  };
  const inputOption1 = new InputOption('1', '1', false);
  const inputOption2 = new InputOption('2', '2', false);
  const inputOption3 = new InputOption('3', '3', false);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbstractCheckboxComponent],
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
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractCheckboxComponent);
    component = fixture.componentInstance;
    jest.spyOn(formControlSpy, 'valueChanges', 'get').mockReturnValue(new Observable());
    component.optionList = [inputOption1, inputOption2, inputOption3];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getLabel', () => {
    it('should return a default label given no customLabel', () => {
      component.customLabel = false;
      const label = component.getLabel();
      expect(label).toBe('controls.input-radio-image.choose');
    });
  });

  describe('hasSubscript', () => {
    it('should return true when given an input with subscript', () => {
      component.selectedOptions = [];
      const inputOption = new InputOptionWithSubscript('value', 'label', 'subscript');
      const actual = component.hasSubscript(inputOption);
      expect(actual).toBe(true);
    });
    it('should return false when given an input without subscript', () => {
      const inputOption = new InputOption().withValueAndLabel('someString');
      const actual = component.hasSubscript(inputOption);
      expect(actual).toBe(false);
    });
  });

  describe('selectOption', function () {
    it('should add the option if it is not allready in the selected list', function () {
      component.maxOptions = 3;
      component.selectOption(inputOption1);
      expect(component.selectedOptions.length).toBe(1);
      expect(component.selectedOptions[0].value).toBe('1');
    });

    it('should remove the option if it is  allready in the selected list', function () {
      component.maxOptions = 3;
      component.selectOption(inputOption1);
      component.selectOption(inputOption2);
      component.selectOption(inputOption1);
      expect(component.selectedOptions.length).toBe(1);
      expect(component.selectedOptions[0].value).toBe('2');
    });

    it('if maxOptions is 1 it should remove the previous selected option', function () {
      component.maxOptions = 1;
      component.selectOption(inputOption1);
      component.selectOption(inputOption2);
      component.selectOption(inputOption1);
      expect(component.selectedOptions.length).toBe(1);
      expect(component.selectedOptions[0].value).toBe('1');
    });
  });

  describe('getLabel', function () {
    it('should return "controls.input-radio-image.choose"', function () {
      expect(component.getLabel()).toEqual('controls.input-radio-image.choose');
    });

    it('should return "ng..lbl"', function () {
      component.customLabel = true;
      expect(component.getLabel()).toEqual('ng..lbl');
    });
  });

  describe('writeValue', function () {
    it('should set empty array', function () {
      component.writeValue([]);
      expect(component.selectedOptions).toEqual([]);
    });

    it('should set elements to array', function () {
      component.optionList = [
        new InputOption('val1'),
        new InputOption('val2'),
        new InputOption('val3'),
        new InputOption('val4'),
      ];
      component.writeValue(['val2', 'val4']);

      expect(component.selectedOptions).toEqual([new InputOption('val2'), new InputOption('val4')]);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
