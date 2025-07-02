import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '@telenet/ng-lib-page';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { AbstractRadioCheckboxComponent } from '.';
import { FormErrorService } from '../../errors';
import { AbstractRadioComponent } from './radio';
import { InputOption } from '../radio';

describe('AbstractRadioCheckboxComponent', () => {
  let component: AbstractRadioCheckboxComponent;
  let fixture: ComponentFixture<AbstractRadioCheckboxComponent>;
  const formControlSpy = {
    get valueChanges() {
      return of(true);
    },
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbstractRadioCheckboxComponent],
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

  describe('toHideError', () => {
    it('should return false given no hideError', () => {
      expect(component.toHideError()).toBe(false);
    });
    it('should return true given hideError', () => {
      component.hideError = true;
      expect(component.toHideError()).toBe(true);
    });
  });

  describe('getOptionLabel', () => {
    it('given an option it should return a correct label with extension .lbl', () => {
      component.messageGroup = 'messageGroup';
      const inputOption = new InputOption('value', 'label');
      const actual = component.getOptionLabel(inputOption);
      expect(actual).toBe('ng.messageGroup.label.lbl');
    });
    it('should return a custom label given customeOptionLabel true', () => {
      component.customOptionLabel = true;
      const inputOption = new InputOption('value', 'label');
      const actual = component.getOptionLabel(inputOption);
      expect(actual).toBe('label');
    });
  });

  describe('getLabelValue', () => {
    it('given a string it should return a correct label with extension .lbl', () => {
      component.messageGroup = 'messageGroup';
      const actual = component.getLabelValue('value');
      expect(actual).toBe('ng.messageGroup.value.lbl');
    });
    it('should return a custom label given customOptionLabel true', () => {
      component.customOptionLabel = true;
      const actual = component.getLabelValue('value');
      expect(actual).toBe('value');
    });
  });
});
