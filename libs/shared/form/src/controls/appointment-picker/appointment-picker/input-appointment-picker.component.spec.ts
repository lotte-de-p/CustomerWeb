import { FormsModule, NgControl, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable, of, Subscription } from 'rxjs';
import { MediaQueryService } from '@telenet/ng-lib-page';
import {
  AppointmentPickerComponentInterface,
  AppointmentPickerTypeEnum,
  AppointmentSlotOption,
  InputAppointmentPickerByDateComponent,
  InputAppointmentPickerByMomentComponent,
  InputAppointmentPickerComponent,
} from '../index';
import { TgFormsModule } from '../../..';
import { FormErrorService } from '../../../errors';
import { AppointmentTransformerSlot } from '../../../models';
import { TransformedAvailabilityInterface } from '../../../interfaces';
import { TimeslotMomentEnum } from '../../../enums';
import { SimpleChanges } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

const SIMPLE_CHANGES_TRUE = {
  firstChange: false,
  previousValue: undefined,
  isFirstChange(): boolean {
    return false;
  },
  currentValue: true,
};
const SIMPLE_CHANGES_FALSE = {
  firstChange: false,
  previousValue: undefined,
  isFirstChange(): boolean {
    return false;
  },
  currentValue: false,
};
describe('InputAppointmentPicker', function () {
  let component: InputAppointmentPickerComponent;
  let fixture;
  const simpleChanges: SimpleChanges = {};

  const formControlSpy = {
    get valueChanges() {
      return of(true);
    },
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        InputAppointmentPickerComponent,
        InputAppointmentPickerByDateComponent,
        InputAppointmentPickerByMomentComponent,
      ],
      imports: [
        TgFormsModule,
        ReactiveFormsModule,
        FormsModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useValue: TranslateFakeLoader },
        }),
      ],
      providers: [
        TranslateService,
        FormErrorService,
        MediaQueryService,
        DeviceDetectorService,
        { provide: 'Window', useValue: {} },
        { provide: NgControl, useValue: formControlSpy },
      ],
    });

    TestBed.configureTestingModule({
      teardown: { destroyAfterEach: false },
    });

    fixture = TestBed.createComponent(InputAppointmentPickerComponent);
    component = fixture.componentInstance;
    jest.spyOn(formControlSpy, 'valueChanges', 'get').mockReturnValue(new Observable());

    component.valueChangesSubscription$ = new Subscription();
    component.formSubscription$ = new Subscription();

    const startDay = new Date();
    const endDay = new Date();
    endDay.setDate(endDay.getDate() + 5);

    component.startDate = startDay;
    component.endDate = endDay;

    const timeslot1 = new AppointmentTransformerSlot();
    const slot1 = {} as TransformedAvailabilityInterface;
    slot1.code = TimeslotMomentEnum.MORNING;
    const slot2 = {} as TransformedAvailabilityInterface;
    slot2.code = TimeslotMomentEnum.LUNCH;
    timeslot1.date = new Date();
    timeslot1.timeSlots = [slot1, slot2];

    component.timeslots = [timeslot1];
  });

  it('should create a component', () => {
    expect(component).toBeTruthy();
  });

  describe('loadAppointmentPickerComponent', function () {
    beforeEach(() => {
      jest.spyOn(component.sendAnalytics, 'emit');
    });

    it('should be a date component instance when the date Type is set to date', () => {
      component.appointmentPickerType = AppointmentPickerTypeEnum.BY_DATE;
      component.ngOnInit();
      expect(component.componentRef.instance).toBeInstanceOf(InputAppointmentPickerByDateComponent);
      expect(component.sendAnalytics.emit).toHaveBeenCalled();
    });

    it('should be a date component instance when the date Type is set to moment', () => {
      component.appointmentPickerType = AppointmentPickerTypeEnum.BY_MOMENT;
      component.ngOnInit();
      expect(component.componentRef.instance).toBeInstanceOf(InputAppointmentPickerByMomentComponent);
      expect(component.sendAnalytics.emit).toHaveBeenCalled();
    });

    describe('setError', () => {
      it('should put a value on error', () => {
        component.ngOnInit();
        component.setError({ address: 'filed' });

        expect((component.componentRef.instance as AppointmentPickerComponentInterface).error).toBe('address');
      });

      it('should be undefined on error', () => {
        component.ngOnInit();
        component.setError(undefined);
        expect((component.componentRef.instance as AppointmentPickerComponentInterface).error).toBeNull();
      });

      it('should set enableAppointmentsUI flag and loadMore from input', () => {
        component.enableAppointmentsUI = true;
        component.loadMore.emit(true);
        component.ngOnInit();

        expect(
          (component.componentRef.instance as AppointmentPickerComponentInterface).enableAppointmentsUI
        ).toBeTruthy();
        (component.componentRef.instance as AppointmentPickerComponentInterface).loadMore?.subscribe((value) => {
          expect(component.loadMore.emit).toHaveBeenCalledWith(value);
          expect(value).toBeTruthy();
        });
      });
    });

    describe('ngOnChnage', () => {
      it('should put true on appointmentPickerType', () => {
        component.ngOnInit();
        simpleChanges['appointmentPickerType'] = SIMPLE_CHANGES_TRUE;
        component.ngOnChanges(simpleChanges as SimpleChanges);

        expect(component.appointmentPickerType).toBeTruthy();
      });
      it('should be true when currentValue is true', () => {
        component.showLoadMore = true;
        component.ngOnInit();
        simpleChanges['reset'] = SIMPLE_CHANGES_TRUE;
        component.ngOnChanges(simpleChanges as SimpleChanges);

        expect((component.componentRef.instance as AppointmentPickerComponentInterface).showLoadMore).toBeTruthy();
      });

      it('should be true when currentValue is false', () => {
        component.showLoadMore = true;
        component.ngOnInit();
        simpleChanges['reset'] = SIMPLE_CHANGES_FALSE;
        component.ngOnChanges(simpleChanges);

        expect((component.componentRef.instance as AppointmentPickerComponentInterface).showLoadMore).toBeTruthy();
      });
      it('should set showLoadMore when there is a change on showLoadMore', () => {
        component.showLoadMore = true;
        component.ngOnInit();
        simpleChanges['showLoadMore'] = SIMPLE_CHANGES_TRUE;
        component.ngOnChanges(simpleChanges);

        expect((component.componentRef.instance as AppointmentPickerComponentInterface).showLoadMore).toBeTruthy();
      });

      it('should set updateSlots when there is a change on updateSlots', () => {
        component.updateSlots = [];
        component.ngOnInit();
        simpleChanges['updateSlots'] = SIMPLE_CHANGES_TRUE;
        component.ngOnChanges(simpleChanges);

        expect((component.componentRef.instance as AppointmentPickerComponentInterface).updateSlots).toStrictEqual([]);
      });

      it('should set showLoadMore when there is a change on error', () => {
        component.error = { address: 'address' } as ValidationErrors;
        component.ngOnInit();
        simpleChanges['error'] = SIMPLE_CHANGES_TRUE;
        component.ngOnChanges(simpleChanges);

        expect((component.componentRef.instance as AppointmentPickerComponentInterface).error).toBe('address');
      });

      it('should set disableLoadMore when there is a change on disableLoadMore', () => {
        component.disableLoadMore = true;
        component.ngOnInit();
        simpleChanges['disableLoadMore'] = SIMPLE_CHANGES_TRUE;
        component.ngOnChanges(simpleChanges);

        expect((component.componentRef.instance as AppointmentPickerComponentInterface).disableLoadMore).toBeTruthy();
      });

      it('should set showLoadMore when there is a change on isDeviceLandscape', () => {
        component.isDeviceLandscape = true;
        component.ngOnInit();
        simpleChanges['isDeviceLandscape'] = SIMPLE_CHANGES_TRUE;
        component.ngOnChanges(simpleChanges);

        expect((component.componentRef.instance as AppointmentPickerComponentInterface).isDeviceLandscape).toBeTruthy();
      });

      it('should have no interaction', () => {
        component.ngOnInit();
        simpleChanges['showLoadMore'] = SIMPLE_CHANGES_TRUE;
        component.showLoadMore = true;
        component.ngOnChanges(simpleChanges);

        expect((component.componentRef.instance as AppointmentPickerComponentInterface).showLoadMore).toBeTruthy();
      });
    });

    describe('registerOnChange', () => {
      it('should set function on onChange', function () {
        const fn = () => {
          // empty function
        };
        component.registerOnChange(fn);

        expect(component.onChange).toBe(fn);
      });
    });

    describe('registerOnTouched', () => {
      it('should set function on onTouched', function () {
        const fn = () => {
          // empty function
        };
        component.registerOnTouched(fn);

        expect(component.onTouched).toBe(fn);
      });
    });

    describe('setDisabledState', () => {
      it('should set function on onChange', function () {
        component.setDisabledState(false);
      });
    });
    describe('writeValue', () => {
      it('should set value on selectedAppointmentSlotOption', function () {
        component.ngOnInit();
        const appointmentSlotOption = {} as AppointmentSlotOption;
        component.writeValue(appointmentSlotOption);

        expect(component.selectedAppointmentSlotOption).toStrictEqual(appointmentSlotOption);
      });

      it('should set value on selectedAppointmentSlotOption', function () {
        component.ngOnInit();
        component.writeValue(null);

        expect(component.selectedAppointmentSlotOption).toBeUndefined();
      });
    });
  });
});
