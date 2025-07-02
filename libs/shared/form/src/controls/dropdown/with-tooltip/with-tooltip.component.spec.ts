import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '@telenet/ng-lib-page';
import { FormControl, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Injector } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DropdownWithTooltipComponent } from '.';
import { FormErrorService } from '../../../errors';
import { InputOption } from '../../radio';
import { BrowserModule } from '@angular/platform-browser';

describe('DropdownWithTooltipComponent', () => {
  let component: DropdownWithTooltipComponent;
  let fixture: ComponentFixture<DropdownWithTooltipComponent>;
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
        LanguageService,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        Injector,
        { provide: 'Window', useValue: {} },
        { provide: NgControl, useValue: formControlSpy },
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      declarations: [DropdownWithTooltipComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownWithTooltipComponent);
    component = fixture.componentInstance;
    jest.spyOn(formControlSpy, 'valueChanges', 'get').mockReturnValue(new Observable());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call write value when an option is selected', () => {
    const option = new InputOption('test', 'test');
    jest.spyOn(component, 'writeValue');
    jest.spyOn(component, 'onChange');

    component.updateValue(option);

    expect(component.writeValue).toHaveBeenCalledWith(option.value);
    expect(component.onChange).toHaveBeenCalledWith(option.value);
    expect(component.shouldShowDropdown).toBe(true);
  });

  describe('focusOut', () => {
    const formControlControl = new FormControl();
    beforeEach(() => {
      jest.spyOn(formControlSpy, 'control', 'get').mockReturnValue(formControlControl);
      jest.spyOn(formControlSpy.control, 'markAllAsTouched');
      jest.spyOn(component, 'toggle');
    });
    it('should not call toggle', () => {
      component.shouldShowDropdown = false;

      component.focusOut();

      expect(component.toggle).not.toHaveBeenCalled();
      expect(component.control.control?.markAllAsTouched).not.toHaveBeenCalled();
    });
    it('should call toggle with errors', () => {
      component.shouldShowDropdown = true;
      formControlSpy.control.setErrors({ required: true });

      component.focusOut();
      expect(component.toggle).toHaveBeenCalled();
      expect(component.error).toBeDefined();
      expect(component.control.control?.markAllAsTouched).toHaveBeenCalled();
    });
  });
});
