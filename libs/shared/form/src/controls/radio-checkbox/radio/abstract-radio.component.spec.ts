import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgControl } from '@angular/forms';
import { LanguageService } from '@telenet/ng-lib-page';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { AbstractRadioComponent } from '../';
import { FormErrorService } from '../../../errors';
import { InputOption, InputOptionWithSubscript } from '../../radio';
import { DatalayerEventNames } from '@telenet/ng-lib-datalayer';

const givenAnOptionItShouldReturnACorrectLabel = 'given an option it should return a correct label with extension .lbl';
describe('AbstractRadioComponent', () => {
  let component: AbstractRadioComponent;
  let fixture: ComponentFixture<AbstractRadioComponent>;
  const formControlSpy = {
    get valueChanges() {
      return of(true);
    },
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbstractRadioComponent],
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
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractRadioComponent);
    component = fixture.componentInstance;
    jest.spyOn(formControlSpy, 'valueChanges', 'get').mockReturnValue(new Observable());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getOptionText', () => {
    it('given an option it should return a correct label with extension .text', () => {
      component.messageGroup = 'messageGroup';
      const inputOption = new InputOption('somevalue', 'label');
      const actual = component.getOptionText(inputOption);
      expect(actual).toBe('ng.messageGroup.label.text');
    });
  });

  describe('getOptionLabel', () => {
    it(givenAnOptionItShouldReturnACorrectLabel, () => {
      component.messageGroup = 'messageGroup';
      const inputOption = new InputOption('somevalue', 'label');
      const actual = component.getOptionLabel(inputOption);
      expect(actual).toBe('ng.messageGroup.label.lbl');
    });
  });

  describe('getLabel when custom label is on', () => {
    it(givenAnOptionItShouldReturnACorrectLabel, () => {
      const inputRadioHorizontal = fixture.componentInstance;
      inputRadioHorizontal.customLabel = true;
      const label = inputRadioHorizontal.getLabel();
      expect(label).toEqual('ng..lbl');
    });
  });

  describe('getLabel when custom label is off', () => {
    it(givenAnOptionItShouldReturnACorrectLabel, () => {
      const inputRadioHorizontal = fixture.componentInstance;
      inputRadioHorizontal.customLabel = false;
      const label = inputRadioHorizontal.getLabel();
      expect(label).toEqual('controls.input-radio-image.choose');
    });
  });

  describe('writeValue', () => {
    it('should writeValue with no parameters', function () {
      const component = fixture.componentInstance;
      component.writeValue(undefined);
      expect(component.selectedOption).toBeUndefined();
    });

    it('should writeValue with parameters', function () {
      const component = fixture.componentInstance;
      const inputOption = new InputOption('value');
      component.optionList = [inputOption];
      component.writeValue('value');
      expect(component.selectedOption).toEqual(inputOption);
    });
  });

  describe('selectOption', () => {
    it('should ', function () {
      const component = fixture.componentInstance;
      jest.spyOn(component.selectEvent, 'emit');
      jest.spyOn(component.trackingEvent, 'emit');
      component.customLabel = false;
      const inputOption = new InputOption('value');
      component.selectOption(inputOption);

      fixture.detectChanges();

      expect(component.selectEvent.emit).toHaveBeenCalledWith('value');
      expect(component.trackingEvent.emit).toHaveBeenCalledWith({
        label: 'controls.input-radio-image.choose',
        value: 'value',
        type: DatalayerEventNames.OPTION_SELECTED,
      });
    });
  });

  describe('hasSubscript', () => {
    it('should return false', function () {
      expect(fixture.componentInstance.hasSubscript(new InputOption())).toBe(false);
    });

    it('should return true', function () {
      expect(fixture.componentInstance.hasSubscript(new InputOptionWithSubscript())).toBe(true);
    });
  });

  describe('getSubscript', () => {
    it('should return subscript', function () {
      const inputOptionWithSubscript = new InputOptionWithSubscript();
      inputOptionWithSubscript.subScript = 'subscript';
      expect(fixture.componentInstance.getSubscript(inputOptionWithSubscript)).toEqual('subscript');
    });
  });
});
