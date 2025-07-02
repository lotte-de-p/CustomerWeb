import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { LanguageService } from '@telenet/ng-lib-page';
import { Injector } from '@angular/core';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { MatSelectModule } from '@angular/material/select';
import { MatOption, MatOptionModule } from '@angular/material/core';
import { MockModule } from 'ng-mocks';
import { MatMultipleSelectWithInputComponent } from '.';
import { FormErrorService } from '../../../errors';
import { InputOption } from '../../radio';
import { By } from '@angular/platform-browser';

export class TestLanguageService extends LanguageService {}

describe('MatMultipleSelectWithInputComponent', () => {
  let component: MatMultipleSelectWithInputComponent;
  let fixture: ComponentFixture<MatMultipleSelectWithInputComponent>;
  let matOption: ComponentFixture<MatOption>;
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
        FormsModule,
        ReactiveFormsModule,
        MockModule(MatSelectModule),
        MockModule(MatOptionModule),
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      declarations: [MatMultipleSelectWithInputComponent],
    });
    fixture = TestBed.createComponent(MatMultipleSelectWithInputComponent);
    component = fixture.componentInstance;
    jest.spyOn(formControlSpy, 'valueChanges', 'get').mockReturnValue(new Observable());
    matOption = TestBed.createComponent(MatOption);
    matOption.detectChanges();
    fixture.detectChanges();
  });

  describe('ngOnChanges', () => {
    it('should write selectedOptions to the control and update the count', () => {
      component.selectedOptions = [new InputOption('id1', 'expected1'), new InputOption('id2', 'expected2')];

      component.ngOnChanges();

      expect(component.selectedOptionsCount).toBe(2);
      expect(component.control.control?.value).toEqual(['id1', 'id2']);
    });
  });

  describe('updateValueAndPreventClosing', () => {
    const formControlControl = new FormControl();
    jest.spyOn(formControlSpy, 'control', 'get').mockReturnValue(formControlControl);

    it('should prevent the dropdown from closing and then updates value', () => {
      const input1 = new InputOption('input1');
      const input2 = new InputOption('input2');
      component.selectedOptions.push(input1);
      component.selectedOptions.push(input2);
      const event = new MouseEvent('click');
      const spyStopPropagation = jest.spyOn(event, 'stopPropagation');
      const deselect = jest.spyOn(component.multiSelect.options.first, 'deselect');

      component.updateValueAndPreventClosing(event);

      expect(spyStopPropagation).toHaveBeenCalled();
      expect(component.selectedOptionsCount).toBe(2);
      expect(component.control.control?.value).toEqual(['input1', 'input2']);
      expect(deselect).not.toHaveBeenCalled();
    });

    it('should prevent the dropdown from closing and deselect the select all option', () => {
      const input1 = new InputOption('input1');
      component.selectedOptions.push(input1);
      const event = new MouseEvent('click');
      const spyStopPropagation = jest.spyOn(event, 'stopPropagation');
      matOption.componentInstance.select();
      component.allSelectedOption = matOption.componentInstance;
      const deselect = jest.spyOn(component.multiSelect.options.first, 'deselect');

      component.updateValueAndPreventClosing(event);

      expect(spyStopPropagation).toHaveBeenCalled();
      expect(component.selectedOptionsCount).toBe(1);
      expect(component.control.control?.value).toEqual(['input1']);
      expect(deselect).toHaveBeenCalled();
    });
  });

  describe('toggleAllSelection', () => {
    it('should select all options when selected first', () => {
      const input1 = new InputOption('input1');
      const input2 = new InputOption('input2');
      component.selectedOptions = [input1, input2];
      const event = new MouseEvent('click');
      const spyStopPropagation = jest.spyOn(event, 'stopPropagation');
      matOption.componentInstance.select();
      component.allSelectedOption = matOption.componentInstance;

      component.toggleAllSelection(event);

      expect(spyStopPropagation).toHaveBeenCalled();
      expect(component.selectedOptionsCount).toBe(2);
      expect(component.control.control?.value).toEqual(['input1', 'input2']);
    });

    it('should deselect all options when selected second time', () => {
      component.selectedOptions = [];
      const event = new MouseEvent('click');
      const spyStopPropagation = jest.spyOn(event, 'stopPropagation');

      component.toggleAllSelection(event);

      expect(spyStopPropagation).toHaveBeenCalled();
      expect(component.selectedOptionsCount).toBe(0);
      expect(component.control.control?.value).toEqual([]);
    });
  });

  describe('tooltipAddedCheck', () => {
    it('should not add tooltip to the html content', () => {
      component.toolTipRequired = false;
      component.customLabel = true;
      fixture.detectChanges();

      const tooltip = fixture.debugElement.query(By.css('.tooltip'));
      expect(tooltip).toBe(null);
    });

    it('should add tooltip to the html content', () => {
      component.toolTipRequired = true;
      component.customLabel = true;
      fixture.detectChanges();

      const tooltip = fixture.debugElement.query(By.css('.tooltip'));
      expect(tooltip).not.toBeNull();
    });
  });
});
