import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { LanguageService } from '@telenet/ng-lib-page';
import { Injector } from '@angular/core';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MockModule } from 'ng-mocks';
import { MatSelectWithInputComponent } from './mat-select-with-input.component';
import { FormErrorService } from '../../../errors';
import { InputOption } from '../../radio';
import { By } from '@angular/platform-browser';

export class TestLanguageService extends LanguageService {}

describe('MatSelectWithInputComponent', () => {
  let component: MatSelectWithInputComponent;
  let fixture: ComponentFixture<MatSelectWithInputComponent>;
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
      declarations: [MatSelectWithInputComponent],
    });
    fixture = TestBed.createComponent(MatSelectWithInputComponent);
    component = fixture.componentInstance;
    jest.spyOn(formControlSpy, 'valueChanges', 'get').mockReturnValue(new Observable());
    fixture.detectChanges();
    jest.spyOn(formControlSpy, 'control', 'get').mockReturnValue(new FormControl());
  });

  describe('changeSelectedValue', () => {
    beforeEach(() => {
      component.ngAfterContentInit();
    });

    it('should write value of input option to control', () => {
      component.selectedOption = new InputOption('input1');
      expect(component.control?.control?.value).toEqual(undefined);

      component.changeSelectedValue();

      expect(component.control?.control?.value).toEqual('input1');
    });

    it('should trigger event emitter', () => {
      jest.spyOn(component.selectChange, 'emit');
      expect(component.control?.control?.value).toEqual(undefined);

      component.changeSelectedValue();

      expect(component.selectChange.emit).toHaveBeenCalled();
    });
  });

  describe('checkErrors', () => {
    it('should add errors if invalid', () => {
      formControlSpy.control.setErrors({ errorKey: 'errorMessage' });

      component.checkErrors();

      expect(component.error).toEqual('errorKey');
    });
  });

  describe('ngAfterContentInit', () => {
    it('should set default input option and write it to the control', () => {
      const expected = new InputOption('expected');
      component.optionList = [expected, new InputOption('input2'), new InputOption('input3')];
      component.value = 'expected';

      component.ngAfterContentInit();

      expect(component.selectedOption).toEqual(expected);
      expect(component.control?.control?.value).toEqual('expected');
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
