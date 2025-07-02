import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNewAppointmentPickerComponent } from '.';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LanguageService } from '@telenet/ng-lib-page';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { EventEmitter } from '@angular/core';
import { FormErrorService } from '../../../../errors';
import { TimeslotMomentEnum } from '../../../../enums';
import { AppointmentTransformerSlotModelTestFactory } from '../../../../models/appointment-transformer-slot.model.testfactory';
import { appointmentInterfaceFactory } from '../../interfaces/appointment.interface.testfactory';
import { spy, verify } from 'ts-mockito';
import { InputDatePickerComponent } from '../date-picker';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MockComponent } from 'ng-mocks';
import { TimeslotUtil } from '../../../../utils';

describe('NewAppointmentPickerComponent', () => {
  let component: InputNewAppointmentPickerComponent;
  let fixture: ComponentFixture<InputNewAppointmentPickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputNewAppointmentPickerComponent, MockComponent(InputDatePickerComponent)],
      providers: [FormBuilder, FormErrorService, LanguageService, { provide: 'Window', useValue: {} }],
      imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InputNewAppointmentPickerComponent);
    component = fixture.componentInstance;
    component.appointment = {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('registerOnChange', () => {
    it('should the registerOnChange function', function () {
      const testFunction = jest.fn();
      component.registerOnChange(testFunction);
      expect(component.onChange).toBe(testFunction);
    });
  });

  describe('registerOnTouched', () => {
    it('should set the registerOnTouch function', function () {
      const testFunction = jest.fn();
      component.registerOnTouched(testFunction);
      expect(component.onTouch).toBe(testFunction);
    });
  });

  describe('writeValue', () => {
    it('should set the appointment and initiate the form fields', function () {
      const value = appointmentInterfaceFactory.build();
      component.selectableMoments = [TimeslotMomentEnum.MORNING, TimeslotMomentEnum.EVENING];
      component.messageGroupDirective = {
        messageGroup: 'test',
      };
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
      ];

      component.writeValue(value);

      expect(component.form.get('appointment')?.value).toBe(value.date);
      expect(component.form.get('moment')?.value).toBe(value.moment);
      TimeslotUtil.calculateTimeSlotsAvailability(component.timeslots).subscribe((isAvailable: boolean) => {
        expect(isAvailable).toBe(true);
      });
    });
    it('should reset form if no appointments are available', function () {
      const value = appointmentInterfaceFactory.build();

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

      component.writeValue(value);

      TimeslotUtil.calculateTimeSlotsAvailability(component.timeslots).subscribe((isAvailable: boolean) => {
        expect(isAvailable).toBe(false);
      });
    });
  });

  describe('selectInstallSlotDay', () => {
    it('should set the install slot day and show moment picker', function () {
      const value = AppointmentTransformerSlotModelTestFactory.build();
      const currentDate = new Date();
      const previousDate: Date = new Date();
      previousDate.setDate(currentDate.getDate() - 1);
      component.timeslots = [
        {
          timeSlots: [],
          date: previousDate,
          hasAvailableMoment() {
            return true;
          },
          getTimeslotMoment: jest.fn(),
          hasAvailableMoments() {
            return true;
          },
        },
      ];

      component.selectInstallSlotDay(value);

      expect(component.appointment.date).toBe(value);
      expect(component.form.get('moment')?.value).toBeNull();
      TimeslotUtil.calculateTimeSlotsAvailability(component.timeslots).subscribe((isAvailable: boolean) => {
        expect(isAvailable).toBe(true);
      });
    });
  });

  describe('selectMoment', () => {
    it('should set the moment', function () {
      component.appointment = {
        date: undefined,
        moment: undefined,
      };

      component.selectMoment(TimeslotMomentEnum.MORNING);

      expect(component.appointment.moment).toBe(TimeslotMomentEnum.MORNING);
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
