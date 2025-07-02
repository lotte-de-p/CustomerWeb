import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { LanguageService } from '@telenet/ng-lib-page';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { NgControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { InputRadioImageComponent } from '.';
import { InputOptionWithImage } from '../radio';
import { LabelUtil } from '../../utils';

describe('InputImageradioComponent', () => {
  let component: InputRadioImageComponent;
  let fixture: ComponentFixture<InputRadioImageComponent>;
  const formControlSpy = {
    get valueChanges() {
      return of(true);
    },
  };
  beforeAll(() => {
    TestBed.configureTestingModule({
      declarations: [InputRadioImageComponent],
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
        InlineSVGModule,
      ],
    });

    fixture = TestBed.createComponent(InputRadioImageComponent);
    component = fixture.componentInstance;
    jest.spyOn(formControlSpy, 'valueChanges', 'get').mockReturnValue(new Observable());

    fixture.detectChanges();
    jest.spyOn(LabelUtil, 'getLabelKeyWithTypeLabel').mockImplementation((arg) => {
      return arg + '.lbl';
    });
    jest.spyOn(component, 'registerOnChange');
    jest.spyOn(component, 'registerOnTouched');
  });

  describe('getOptionLabel', () => {
    it('should get the default option label if no custom label is defined', fakeAsync(() => {
      const inputOption = new InputOptionWithImage('test', 'test', './');
      component.getOptionLabel(inputOption);
      expect(LabelUtil.getLabelKeyWithTypeLabel).toHaveBeenCalled();
    }));

    it('should get the option label with a messagegroupkey if one is present', fakeAsync(() => {
      component.messageGroup = 'test';
      const inputOption = new InputOptionWithImage('test', 'test', './');
      component.getOptionLabel(inputOption);
      expect(LabelUtil.getLabelKeyWithTypeLabel).toHaveBeenCalled();
    }));
  });

  describe('getLabel', function () {
    it('should get a custom option label when one is provided', fakeAsync(() => {
      const inputOption = new InputOptionWithImage('test', 'component-option-label', './');
      component.customOptionLabel = true;
      expect(component.getOptionLabel(inputOption)).toBe('component-option-label');
    }));

    it('should get the option label with a messagegroupkey if one is present', fakeAsync(() => {
      component.messageGroup = 'test-messgae-group';
      component.key = 'test-key';
      component.customLabel = true;
      component.getLabel();
      expect(component.getLabel()).toBe('test-messgae-group.test-key.lbl');
    }));
  });

  it('should create', fakeAsync(() => {
    expect(component).toBeTruthy();
  }));

  it('should set the selected option when writevalue is called', fakeAsync(() => {
    const inputOption = new InputOptionWithImage('test', 'test', './');
    const inputOption2 = new InputOptionWithImage('test2', 'test2', './2');
    component.optionList = [inputOption, inputOption2];
    component.writeValue(inputOption2.value);
    expect(component.selectedOption).toEqual(inputOption2);
  }));
});
