import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, NgControl } from '@angular/forms';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Injector } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LanguageService } from '@telenet/ng-lib-page';
import { FormErrorService } from '../../../errors';
import { InputOption } from '../../radio';
import { DropDownWithChipsComponent } from '.';

export class TestLanguageService extends LanguageService {}

describe('With Chips Component', () => {
  let component: DropDownWithChipsComponent;
  let fixture: ComponentFixture<DropDownWithChipsComponent>;
  const formControlSpy = {
    get valueChanges() {
      return of(true);
    },
    get control() {
      return new FormControl();
    },
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FormErrorService,
        { provide: LanguageService, useValue: TestLanguageService },
        Injector,
        { provide: NgControl, useValue: formControlSpy },
      ],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      declarations: [DropDownWithChipsComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownWithChipsComponent);
    component = fixture.componentInstance;
    jest.spyOn(formControlSpy, 'valueChanges', 'get').mockReturnValue(new Observable());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call write value when an option is selected', () => {
    const option = new InputOption('test', 'test');
    component.writeValues = jest.fn();
    component.sortBy = jest.fn();

    component.updateValue(option);

    expect(component.writeValues).toHaveBeenCalledWith();
    expect(component.shouldShowDropdown).toBe(true);
    expect(component.selectedOptions.length).toEqual(1);
    expect(component.sortBy).toHaveBeenCalledWith('label');
  });

  it('test removeOption', () => {
    component.writeValues = jest.fn();
    const optionToRemove = new InputOption('test3', 'test3');
    component.selectedOptions.push(optionToRemove);
    component.selectedOptions.push(new InputOption('test1', 'test1'));
    component.selectedOptions.push(new InputOption('test2', 'test2'));
    expect(component.optionList.length).toEqual(0);
    expect(component.selectedOptions.length).toEqual(3);
    component.removeOption(optionToRemove);
    expect(component.optionList.length).toEqual(1);
    expect(component.selectedOptions.length).toEqual(2);
  });

  it('test sortBy', () => {
    component.optionList.push(new InputOption('test3', 'test3'));
    component.optionList.push(new InputOption('test1', 'test1'));
    component.optionList.push(new InputOption('test2', 'test2'));
    expect(component.optionList.length).toEqual(3);
    expect(component.optionList[0].label).toBe('test3');
    component.sortBy('label');
    expect(component.optionList[0].label).toBe('test1');
  });

  it('test writeValues', () => {
    jest.spyOn(formControlSpy, 'control', 'get').mockReturnValue(new FormControl());
    component.selectedOptions = [new InputOption('test3', 'test3')];
    component.optionList = [new InputOption('test3', 'test3')];
    expect(component.optionList.length).toEqual(1);
    component.writeValues();
    expect(component.control.control?.value[0]).toEqual('test3');
    expect(component.optionList.length).toEqual(0);
  });

  it('test writeValue', () => {
    jest.spyOn(component, 'reset');
    component.writeValue(null);
    expect(component.reset).toHaveBeenCalled();
    component.writeValue('newValue');
    expect(component.value).toEqual('newValue');
  });

  it('test toggle', () => {
    expect(component.shouldShowDropdown).toBe(false);
    component.toggle();
    expect(component.shouldShowDropdown).toBe(true);
    component.toggle();
    expect(component.shouldShowDropdown).toBe(false);
  });

  it('compare properties', () => {
    const objA = { label: 'test1', value: '15', disabled: false } as InputOption;
    const objB = { label: 'test2', value: '15', disabled: false } as InputOption;
    let value = component.compareObjectProperties(objA, objB, 'label');
    expect(value).toEqual(-1);
    value = component.compareObjectProperties(objB, objA, 'label');
    expect(value).toEqual(1);
    value = component.compareObjectProperties(objA, objA, 'label');
    expect(value).toEqual(0);
  });

  describe('focusOut', () => {
    beforeEach(() => {
      jest.spyOn(formControlSpy, 'control', 'get').mockReturnValue(new FormControl());
      jest.spyOn(formControlSpy.control, 'markAllAsTouched');
      jest.spyOn(component, 'toggle');
    });
    it('should not call toggle', () => {
      component.shouldShowDropdown = false;

      component.focusOut();

      expect(component.toggle).not.toHaveBeenCalled();
      expect(component.control.control?.markAllAsTouched).not.toHaveBeenCalled();
    });
  });
});
