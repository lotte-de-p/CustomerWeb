import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { SimpleChange, SimpleChanges } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { of } from 'rxjs';
import { FormErrorService } from '../../../../errors';
import { InputOption } from '../../../radio';
import { MonthDropdownComponent } from './month-dropdown.component';
import { CommonModule } from '@angular/common';

describe('MonthDropdownComponent', () => {
  let component: MonthDropdownComponent;
  let fixture: ComponentFixture<MonthDropdownComponent>;
  const formControlSpy = {
    get valueChanges() {
      return of(null);
    },
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
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
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
      ],
      declarations: [MonthDropdownComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthDropdownComponent);
    component = fixture.componentInstance;
    jest.spyOn(formControlSpy, 'valueChanges', 'get').mockReturnValue(of(null));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnChanges', function () {
    beforeEach(() => {
      component.optionList = [new InputOption('3'), new InputOption('5', 'May')];
    });

    it('should set optionLabel', function () {
      component.month = 5;
      component.optionList = [new InputOption('3'), new InputOption('5', 'May')];

      const changesObj: SimpleChanges = {
        month: new SimpleChange(3, 5, true),
      };
      component.ngOnChanges(changesObj);

      expect(component.optionLabel).toEqual('May');
    });

    it('should set empty optionLabel', function () {
      component.month = 6;

      const changesObj: SimpleChanges = {
        month: new SimpleChange(3, 6, true),
      };
      component.ngOnChanges(changesObj);

      expect(component.optionLabel).toEqual('');
    });
  });

  describe('selectOptionValue', () => {
    it('should set new value', () => {
      const expectedLabel = 'testLabel';
      const option = new InputOption('1', expectedLabel);
      jest.spyOn(component, 'updateValue');

      component.selectOptionValue(option);

      expect(component.optionLabel).toBe(expectedLabel);
      expect(component.updateValue).toHaveBeenCalledWith(option);
    });
  });
});
