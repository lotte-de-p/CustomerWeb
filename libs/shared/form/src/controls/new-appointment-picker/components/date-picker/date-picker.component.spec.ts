import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormBuilder, NgControl } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Observable, of } from 'rxjs';
import { FormErrorService } from '../../../../errors';
import { AppointmentTransformerSlotModelTestFactory } from '../../../../models/appointment-transformer-slot.model.testfactory';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ChangeDetectorRef, EventEmitter, SimpleChange, Type } from '@angular/core';
import { spy, verify } from 'ts-mockito';
import { BrowserModule } from '@angular/platform-browser';
import { InputDatePickerComponent } from '.';
import { TimeslotMomentEnum } from '../../../../enums';
import { NewNoAvailableAppointmentDateComponent } from '../';
import { TimeslotUtil } from '../../../../utils';

describe('DatePickerComponent', () => {
  let component: InputDatePickerComponent;
  let fixture: ComponentFixture<InputDatePickerComponent>;
  const formControlSpy = {
    get valueChanges() {
      return of(true);
    },
  };
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InputDatePickerComponent, NewNoAvailableAppointmentDateComponent],
      providers: [
        FormBuilder,
        BrowserModule,
        FormErrorService,
        { provide: 'Window', useValue: {} },
        { provide: NgControl, useValue: formControlSpy },
        { provide: ChangeDetectorRef, useValue: {} },
      ],
      imports: [
        SlickCarouselModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDatePickerComponent);
    component = fixture.debugElement.componentInstance;
    jest.spyOn(formControlSpy, 'valueChanges', 'get').mockReturnValue(new Observable());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnChanges', () => {
    it('should update the show load more if contains new value', () => {
      component.showLoadMore = false;
      component.ngOnChanges({
        showLoadMore: new SimpleChange(null, true, true),
      });
      fixture.detectChanges();
      expect(component.showLoadMore).toEqual(true);
    });

    it('should update the timeslots if contains new value', () => {
      const currentDate = new Date();
      const previousDate: Date = new Date();
      previousDate.setDate(currentDate.getDate() - 1);

      component.timeslots = [
        {
          timeSlots: [{ code: TimeslotMomentEnum.DAY }],
          date: previousDate,
          hasAvailableMoment() {
            return true;
          },
          getTimeslotMoment: jest.fn(),
          hasAvailableMoments() {
            return true;
          },
        },
        {
          timeSlots: [{ code: TimeslotMomentEnum.DAY }],
          date: currentDate,
          hasAvailableMoment() {
            return true;
          },
          hasAvailableMoments() {
            return true;
          },
          getTimeslotMoment: jest.fn(),
        },
      ];

      component.updateSlots = [
        {
          getTimeslotMoment: jest.fn(),
          timeSlots: [{ code: TimeslotMomentEnum.DAY, availabiltyId: '9158093522413781595' }],
          date: currentDate,
          hasAvailableMoment() {
            return true;
          },
          hasAvailableMoments() {
            return true;
          },
        },
      ];

      const changeDetectorRef = fixture.debugElement.injector.get<ChangeDetectorRef>(
        ChangeDetectorRef as Type<ChangeDetectorRef>
      );
      const detectChangesSpy = jest.spyOn(changeDetectorRef.constructor.prototype, 'detectChanges');

      component.ngOnChanges({
        updateSlots: new SimpleChange(null, component.updateSlots, true),
      });
      setTimeout(() => {
        expect(detectChangesSpy).toHaveBeenCalled();
        expect(component.timeslots.length).toBe(2);
      });
    });

    it('should update the timeslots with update slots if to available appointments', () => {
      const currentDate = new Date();
      const previousDate: Date = new Date();
      previousDate.setDate(currentDate.getDate() - 1);

      component.timeslots = [
        {
          timeSlots: [],
          date: previousDate,
          hasAvailableMoment() {
            return false;
          },
          getTimeslotMoment: jest.fn(),
          hasAvailableMoments() {
            return false;
          },
        },
      ];

      component.updateSlots = [
        {
          getTimeslotMoment: jest.fn(),
          timeSlots: [{ code: TimeslotMomentEnum.DAY, availabiltyId: '9158093522413789674' }],
          date: currentDate,
          hasAvailableMoment() {
            return true;
          },
          hasAvailableMoments() {
            return true;
          },
        },
      ];

      const expectedTimeSlots = component.updateSlots;

      const timeSlotAvailability = jest.spyOn(TimeslotUtil, 'calculateTimeSlotsAvailability');

      component.ngOnChanges({
        updateSlots: new SimpleChange(null, component.updateSlots, true),
      });

      const availabilities = component.timeslots.flatMap((slot) =>
        slot.timeSlots.map((timeslot) => timeslot.availabiltyId)
      );
      expect(availabilities).toContain('9158093522413789674');
      expect(component.timeslots).toEqual(expectedTimeSlots);
      expect(timeSlotAvailability).toHaveBeenCalledWith(component.updateSlots, false);
      expect(component.timeslots.length).toBe(1);
      TimeslotUtil.calculateTimeSlotsAvailability(component.timeslots).subscribe((isAvailable: boolean) => {
        expect(isAvailable).toBe(true);
      });
    });
  });

  describe('registerOnChange', () => {
    it('should the registerOnChange function', function () {
      jest.spyOn(component, 'onChange');
      const someFunction = jest.fn();
      component.registerOnChange(someFunction);
      expect(component.onChange).toBe(someFunction);
    });
  });

  describe('registerOnTouched', () => {
    it('should set the registerOnTouch function', function () {
      const someFunction = jest.fn();
      component.registerOnTouched(someFunction);
      expect(component.onTouch).toBe(someFunction);
    });
  });

  describe('writeValue', () => {
    it('should set the value and scroll to the selected slide of a value is present', function () {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      const slot1 = AppointmentTransformerSlotModelTestFactory.build({ date: tomorrow });
      const writeValue = AppointmentTransformerSlotModelTestFactory.build({ date: today });
      component.timeslots = [slot1, writeValue];
      component.writeValue(writeValue);
      expect(component.selectedTimeslot).toBe(writeValue);
      expect(component.dateSlideConfig.initialSlide).toBe(1);
    });
  });

  describe('selectInstallSlotDay', () => {
    it('should set the selected timeslot', function () {
      jest.spyOn(component, 'onChange');
      const today = new Date();
      const slot = AppointmentTransformerSlotModelTestFactory.build({ date: today });
      component.selectInstallSlotDay(slot);

      expect(component.selectedTimeslot).toBe(slot);
      expect(component.onChange).toHaveBeenCalled();
    });
  });

  describe('loadMoreSlots()', () => {
    let eventEmitter, mockedEventEmitter: EventEmitter<boolean>;
    beforeEach(() => {
      eventEmitter = new EventEmitter<boolean>();
      component.loadMore = eventEmitter;
      mockedEventEmitter = spy(eventEmitter);
    });

    it('should emit loadMore event on button click', () => {
      component.loadMoreSlots();
      verify(mockedEventEmitter.emit()).once();
    });
  });
});
