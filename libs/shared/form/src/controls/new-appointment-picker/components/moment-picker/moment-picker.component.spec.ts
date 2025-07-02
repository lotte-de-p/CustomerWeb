import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputMomentPickerComponent } from '../index';
import { FormBuilder, NgControl } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { FormErrorService } from '../../../../errors';
import { timeslotAvailabilityInterfaceFactory } from '../../interfaces/timeslot-availability.interface.testfactory';
import { TimeslotMomentEnum } from '../../../../enums';
import { SlickCarouselModule } from 'ngx-slick-carousel';

describe('MomentPickerComponent', () => {
  let component: InputMomentPickerComponent;
  let fixture: ComponentFixture<InputMomentPickerComponent>;
  const formControlSpy = {
    get valueChanges() {
      return of(true);
    },
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputMomentPickerComponent],
      providers: [
        FormBuilder,
        FormErrorService,
        { provide: 'Window', useValue: {} },
        { provide: NgControl, useValue: formControlSpy },
      ],
      imports: [
        HttpClientTestingModule,
        SlickCarouselModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMomentPickerComponent);
    component = fixture.componentInstance;
    jest.spyOn(component, 'onChange');
    jest.spyOn(formControlSpy, 'valueChanges', 'get').mockReturnValue(new Observable());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('registerOnChange', () => {
    it('should the registerOnChange function', function () {
      const someFunction = jest.fn();
      component.registerOnChange(someFunction);
      expect(component.onChange).toEqual(someFunction);
    });
  });

  describe('registerOnTouched', () => {
    it('should set the registerOnTouch function', function () {
      const someFunction = jest.fn();
      component.registerOnTouched(someFunction);
      expect(component.onTouch).toEqual(someFunction);
    });
  });

  describe('writeValue', () => {
    it('should set the value if value is present', function () {
      component.availableMoments = [
        timeslotAvailabilityInterfaceFactory.build({ timeslot: TimeslotMomentEnum.MORNING }),
        timeslotAvailabilityInterfaceFactory.build({ timeslot: TimeslotMomentEnum.LUNCH }),
        timeslotAvailabilityInterfaceFactory.build({ timeslot: TimeslotMomentEnum.EVENING }),
      ];
      component.writeValue(TimeslotMomentEnum.EVENING);
      expect(component.selectedMoment).toBe(TimeslotMomentEnum.EVENING);
    });

    it('should set the selected moment to null and reset the error', function () {
      component.error = 'test';
      component.selectedMoment = TimeslotMomentEnum.LUNCH;
      component.writeValue(null);
      expect(component.selectedMoment).toBeUndefined();
    });
  });

  describe('selectMoment', () => {
    it('should trigger onchange', function () {
      component.selectMoment(timeslotAvailabilityInterfaceFactory.build({ timeslot: TimeslotMomentEnum.MORNING }));
      expect(component.onChange).toHaveBeenCalled();
    });
  });
});
