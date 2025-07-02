import { ComponentFixture, TestBed, fakeAsync, waitForAsync } from '@angular/core/testing';
import { LanguageService } from '@telenet/ng-lib-page';
import { BrowserModule } from '@angular/platform-browser';
import { ChangeDetectorRef, EventEmitter, NO_ERRORS_SCHEMA, SimpleChange, Type } from '@angular/core';
import { spy, verify } from 'ts-mockito';
import { InputAppointmentDatePickerComponent } from '.';
import { AppointmentPickerTypeEnum, NoAvailableAppointmentDateComponent } from '../';
import { AppointmentTransformerSlot } from '../../../models';
import { AppointmentPickerConsumerTypeEnum } from '../../../interfaces';
import { TimeslotMomentEnum } from '../../../enums';
import { TimeslotUtil } from '../../../utils';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';

const date = '2020-08-21T00:00:00.000Z';
const specUrl = 'https://api.int.telenet.be/omapi/public/product/APPT0000';
const someValue = 'some value';
const twentySixOfAugustTwentyTwenty = '2020-08-26T00:00:00.000Z';
export class StubSlickCarouselComponent {
  slickGoTo(index: number): void {
    console.log(index);
  }
}
function createTimeSlots(): AppointmentTransformerSlot[] {
  return [
    {
      date: new Date(date),
      timeSlots: [],
      hasAvailableMoment() {
        return false;
      },
      hasAvailableMoments() {
        return false;
      },
      getTimeslotMoment: jest.fn(),
    },
    {
      date: new Date('2020-08-22T00:00:00.000Z'),
      timeSlots: [],
      hasAvailableMoment() {
        return false;
      },
      hasAvailableMoments() {
        return false;
      },
      getTimeslotMoment: jest.fn(),
    },
    {
      getTimeslotMoment: jest.fn(),
      date: new Date('2020-08-23T00:00:00.000Z'),
      timeSlots: [],
      hasAvailableMoment() {
        return false;
      },
      hasAvailableMoments() {
        return false;
      },
    },
    {
      getTimeslotMoment: jest.fn(),
      date: new Date('2020-08-24T00:00:00.000Z'),
      timeSlots: [],
      hasAvailableMoment() {
        return false;
      },
      hasAvailableMoments() {
        return false;
      },
    },
    {
      getTimeslotMoment: jest.fn(),
      date: new Date('2020-08-25T00:00:00.000Z'),
      timeSlots: [],
      hasAvailableMoment() {
        return false;
      },
      hasAvailableMoments() {
        return false;
      },
    },
    {
      date: new Date(twentySixOfAugustTwentyTwenty),
      timeSlots: [],
      hasAvailableMoment() {
        return false;
      },
      hasAvailableMoments() {
        return false;
      },
      getTimeslotMoment: jest.fn(),
    },
    {
      date: new Date('2020-08-27T00:00:00.000Z'),
      timeSlots: [],
      hasAvailableMoment() {
        return false;
      },
      hasAvailableMoments() {
        return false;
      },
      getTimeslotMoment: jest.fn(),
    },
    {
      date: new Date('2020-08-28T00:00:00.000Z'),
      timeSlots: [],
      hasAvailableMoment() {
        return false;
      },
      hasAvailableMoments() {
        return false;
      },
      getTimeslotMoment: jest.fn(),
    },
    {
      getTimeslotMoment: jest.fn(),
      date: new Date('2020-08-29T00:00:00.000Z'),
      timeSlots: [],
      hasAvailableMoment() {
        return false;
      },
      hasAvailableMoments() {
        return false;
      },
    },
    {
      getTimeslotMoment: jest.fn(),
      date: new Date('2020-08-30T00:00:00.000Z'),
      timeSlots: [],
      hasAvailableMoment() {
        return false;
      },
      hasAvailableMoments() {
        return false;
      },
    },
    {
      getTimeslotMoment: jest.fn(),
      date: new Date('2020-08-31T00:00:00.000Z'),
      timeSlots: [],
      hasAvailableMoment() {
        return false;
      },
      hasAvailableMoments() {
        return false;
      },
    },
    {
      date: new Date('2020-09-01T00:00:00.000Z'),
      timeSlots: [],
      hasAvailableMoment() {
        return false;
      },
      hasAvailableMoments() {
        return false;
      },
      getTimeslotMoment: jest.fn(),
    },
    {
      date: new Date('2020-09-02T00:00:00.000Z'),
      timeSlots: [],
      hasAvailableMoment() {
        return false;
      },
      hasAvailableMoments() {
        return false;
      },
      getTimeslotMoment: jest.fn(),
    },
    {
      date: new Date('2020-09-03T00:00:00.000Z'),
      timeSlots: [],
      hasAvailableMoment() {
        return false;
      },
      hasAvailableMoments() {
        return false;
      },
      getTimeslotMoment: jest.fn(),
    },
  ];
}

const twentyOfAugustTwentyTwenty = '2020-08-20T00:00:00.000Z';
const fourthOfSeptemberTwenty = '2020-09-04T00:00:00.000Z';
const twelfthOfDecemberTwentyTwenty = '2020-12-12T00:00:00.000Z';
describe('InputAppointmentDatePickerComponent', () => {
  let component: InputAppointmentDatePickerComponent;
  let fixture: ComponentFixture<InputAppointmentDatePickerComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InputAppointmentDatePickerComponent, NoAvailableAppointmentDateComponent],
      imports: [
        SlickCarouselModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [
        LanguageService,
        BrowserModule,
        { provide: 'Window', useValue: {} },
        { provide: ChangeDetectorRef, useValue: {} },
        {
          provide: SlickCarouselComponent,
          useExisting: StubSlickCarouselComponent,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(InputAppointmentDatePickerComponent);
    component = fixture.debugElement.componentInstance;
    component.timeslots = createTimeSlots();
    component.updateSlots = createTimeSlots();
    fixture.detectChanges();
  }));

  describe('getSlideUpAnimationStyling', () => {
    it('should return the styling string for the slide up animation', waitForAsync(() => {
      expect(component.getSlideUpAnimationStyling(1)).toEqual('--animation-delay: 1');
    }));
  });

  describe('ngOnInit', () => {
    it('should enable arrows and set slidesToScroll, slidesToShow to 6 for desktop when slideToScroll is passed', function () {
      component.slidesToShow = 6;
      component.timeslots = createTimeSlots();
      component.ngOnInit();
      expect(component.slideConfig.arrows).toBe(true);
      expect(component.slideConfig.slidesToScroll).toBe(1);
      expect(component.slideConfig.slidesToShow).toBe(6);
    });
    it('should enable arrows and set slidesToScroll to 1, slidesToShow to 1 for desktop if slideToScroll not passed', function () {
      component.timeslots = createTimeSlots();
      component.updateSlots = createTimeSlots();
      component.ngOnInit();
      expect(component.slideConfig.arrows).toBe(true);
      expect(component.slideConfig.slidesToScroll).toBe(1);
      expect(component.slideConfig.slidesToShow).toBe(1);
    });
    it('should set the initial slider to selectedSlot if customer is not NC', function () {
      component.timeslots = createTimeSlots();
      component.updateSlots = createTimeSlots();

      const mockSelectedSlot = new AppointmentTransformerSlot();
      mockSelectedSlot.date = new Date(twentySixOfAugustTwentyTwenty);
      component.selectedTimeslot = mockSelectedSlot;
      component.ngOnInit();
      expect(component.slideConfig.initialSlide).toBe(5);
    });

    it('should set the initial slider to 5 if customer is NC', function () {
      component.timeslots = createTimeSlots();
      component.updateSlots = createTimeSlots();

      const mockSelectedSlot = new AppointmentTransformerSlot();
      mockSelectedSlot.date = new Date(twentySixOfAugustTwentyTwenty);
      component.selectedTimeslot = mockSelectedSlot;
      component.consumerType = AppointmentPickerConsumerTypeEnum.NC;
      component.ngOnInit();
      expect(component.slideConfig.initialSlide).toBe(5);
    });

    it('should update current slot as updateSlots if enableAppointmentsUI UI is true and updateSlots lenght isnot empty', function () {
      component.timeslots = [
        {
          timeSlots: [{ specUrl: specUrl, code: TimeslotMomentEnum.DAY, availabiltyId: '9158093522413781595' }],
          date: new Date(twentyOfAugustTwentyTwenty),
          hasAvailableMoment() {
            return true;
          },
          getTimeslotMoment: jest.fn(),
          hasAvailableMoments() {
            return true;
          },
        },
      ];
      component.enableAppointmentsUI = true;
      component.updateSlots = [
        {
          getTimeslotMoment: jest.fn(),
          timeSlots: [{ specUrl: specUrl, code: TimeslotMomentEnum.DAY, availabiltyId: '9158093522413781595' }],
          date: new Date(date),
          hasAvailableMoment() {
            return true;
          },
          hasAvailableMoments() {
            return true;
          },
        },
      ];
      component.ngOnInit();
      expect(component.currentSlots).toEqual(component.updateSlots);
    });

    it('should update current slot as timeSlots if enableAppointmentsUI UI is true and updateSlots lenght is empty', function () {
      component.timeslots = [
        {
          timeSlots: [{ specUrl: specUrl, code: TimeslotMomentEnum.DAY, availabiltyId: '9158093522413781595' }],
          date: new Date(twentyOfAugustTwentyTwenty),
          hasAvailableMoment() {
            return true;
          },
          getTimeslotMoment: jest.fn(),
          hasAvailableMoments() {
            return true;
          },
        },
      ];
      component.enableAppointmentsUI = true;
      component.updateSlots = [];
      component.ngOnInit();
      expect(component.currentSlots).toEqual(component.timeslots);
    });
  });

  describe('ngOnChanges', () => {
    it('should call the renderer to refresh when it contains new timeslots', waitForAsync(() => {
      component.timeslots = createTimeSlots();
      component.reRender = true;

      component.ngOnChanges({
        momentFilter: new SimpleChange(null, someValue, true),
      });
      fixture.detectChanges();
      setTimeout(function () {
        expect(component.reRender).toEqual(false);
      }, 1);
      TimeslotUtil.calculateTimeSlotsAvailability(component.timeslots).subscribe((isAvailable: boolean) => {
        expect(isAvailable).toBe(false);
      });
    }));

    it('should set the slide config to start with 0 if loaded with new moment when customer is NC', () => {
      component.timeslots = createTimeSlots();
      component.slideConfig.initialSlide = 10;
      component.selectedTimeslot = undefined;
      component.consumerType = AppointmentPickerConsumerTypeEnum.NC;
      component.ngOnChanges({
        momentFilter: new SimpleChange(null, someValue, true),
      });
      expect(component.slideConfig.initialSlide).toBe(0);
      TimeslotUtil.calculateTimeSlotsAvailability(component.timeslots).subscribe((isAvailable: boolean) => {
        expect(isAvailable).toBe(false);
      });
    });

    it('should update the show load more if contains new value', () => {
      component.timeslots = createTimeSlots();
      component.showLoadMore = true;
      component.ngOnChanges({
        showLoadMore: new SimpleChange(null, false, true),
      });
      fixture.detectChanges();
      expect(component.showLoadMore).toEqual(false);
      TimeslotUtil.calculateTimeSlotsAvailability(component.timeslots).subscribe((isAvailable: boolean) => {
        expect(isAvailable).toBe(false);
      });
    });

    it('should NOT call the renderer to refresh when it contains new timeslots', () => {
      component.timeslots = createTimeSlots();
      component.reRender = true;

      component.ngOnChanges({
        notMomentFilter: new SimpleChange(null, someValue, true),
      });
      fixture.detectChanges();
      expect(component.reRender).toEqual(true);
      TimeslotUtil.calculateTimeSlotsAvailability(component.timeslots).subscribe((isAvailable: boolean) => {
        expect(isAvailable).toBe(false);
      });
    });

    it('should concat timeslot with update slots on changes detection if both is different and assign to currentSlots if enableAppointmentsFlag is enabled', () => {
      component.timeslots = [
        {
          timeSlots: [{ specUrl: specUrl, code: TimeslotMomentEnum.DAY, availabiltyId: '9158093522413781595' }],
          date: new Date(twentyOfAugustTwentyTwenty),
          hasAvailableMoment() {
            return true;
          },
          getTimeslotMoment: jest.fn(),
          hasAvailableMoments() {
            return true;
          },
        },
      ];
      component.enableAppointmentsUI = true;
      component.endDate = new Date(twelfthOfDecemberTwentyTwenty);
      component.currentDate = new Date(twelfthOfDecemberTwentyTwenty);
      component.updateSlots = [
        {
          getTimeslotMoment: jest.fn(),
          timeSlots: [{ specUrl: specUrl, code: TimeslotMomentEnum.DAY, availabiltyId: '9158093522413781595' }],
          date: new Date(date),
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
      fixture.detectChanges();
      expect(detectChangesSpy).toHaveBeenCalled();
      expect(component.timeslots.length).toBe(2);
      expect(component.currentSlots).toEqual(component.updateSlots);
      expect(component.disablePrevious).toBeFalsy();
      expect(component.disableNext).toBeTruthy();
      TimeslotUtil.calculateTimeSlotsAvailability(component.updateSlots).subscribe((isAvailable: boolean) => {
        expect(isAvailable).toBe(true);
      });
    });

    it('should concat timeslot with update slots on changes detection if both is different and assign to currentSlots, disable previous  if enableAppointmentsFlag is enabled', () => {
      component.timeslots = [
        {
          timeSlots: [{ specUrl: specUrl, code: TimeslotMomentEnum.DAY, availabiltyId: '9158093522413781595' }],
          date: new Date(twentyOfAugustTwentyTwenty),
          hasAvailableMoment() {
            return true;
          },
          getTimeslotMoment: jest.fn(),
          hasAvailableMoments() {
            return true;
          },
        },
      ];
      component.enableAppointmentsUI = true;
      component.currentDate = new Date(date);
      component.updateSlots = [
        {
          getTimeslotMoment: jest.fn(),
          timeSlots: [{ specUrl: specUrl, code: TimeslotMomentEnum.DAY, availabiltyId: '9158093522413781595' }],
          date: new Date(date),
          hasAvailableMoment() {
            return true;
          },
          hasAvailableMoments() {
            return true;
          },
        },
      ];
      component.startDate = new Date(date);
      const changeDetectorRef = fixture.debugElement.injector.get<ChangeDetectorRef>(
        ChangeDetectorRef as Type<ChangeDetectorRef>
      );
      const detectChangesSpy = jest.spyOn(changeDetectorRef.constructor.prototype, 'detectChanges');
      component.ngOnChanges({
        updateSlots: new SimpleChange(null, component.updateSlots, true),
      });
      fixture.detectChanges();
      expect(detectChangesSpy).toHaveBeenCalled();
      expect(component.timeslots.length).toBe(2);
      expect(component.currentSlots).toEqual(component.updateSlots);
      expect(component.disablePrevious).toBeTruthy();
      TimeslotUtil.calculateTimeSlotsAvailability(component.updateSlots).subscribe((isAvailable: boolean) => {
        expect(isAvailable).toBe(true);
      });
    });

    it('should not concat timeslot with update slots on changes detection if both is same', waitForAsync(() => {
      component.timeslots = [
        {
          timeSlots: [{ specUrl: specUrl, code: TimeslotMomentEnum.DAY, availabiltyId: '9158093522413781595' }],
          date: new Date(twentyOfAugustTwentyTwenty),
          hasAvailableMoment() {
            return true;
          },
          getTimeslotMoment: jest.fn(),
          hasAvailableMoments() {
            return true;
          },
        },
      ];
      component.startDate = new Date(twentyOfAugustTwentyTwenty);
      component.updateSlots = component.timeslots;
      component.enableAppointmentsUI = true;
      component.currentDate = new Date(twentyOfAugustTwentyTwenty);
      component.ngOnChanges({
        updateSlots: new SimpleChange(null, component.updateSlots, true),
      });
      expect(component.timeslots.length).toBe(1);
      expect(component.disablePrevious).toBeTruthy();
      TimeslotUtil.calculateTimeSlotsAvailability(component.updateSlots).subscribe((isAvailable: boolean) => {
        expect(isAvailable).toEqual(true);
      });
    }));

    it('should update the slides config to desktop config if changes detected for isLandscape is true for NC', () => {
      component.timeslots = createTimeSlots();
      component.reRender = true;
      component.consumerType = AppointmentPickerConsumerTypeEnum.NC;
      component.isDeviceLandscape = true;
      component.slidesToShow = 4;

      component.ngOnChanges({
        isDeviceLandscape: new SimpleChange(null, component.isDeviceLandscape, true),
      });
      fixture.detectChanges();
      expect(component.slideConfig.arrows).toBe(true);
      expect(component.slideConfig.slidesToScroll).toBe(4);
      expect(component.slideConfig.slidesToShow).toBe(4);
      setTimeout(function () {
        expect(component.reRender).toEqual(false);
      }, 1);
      TimeslotUtil.calculateTimeSlotsAvailability(component.timeslots).subscribe((isAvailable: boolean) => {
        expect(isAvailable).toBe(true);
      });
    });
    it('should update slides to desktop config if device is landscape for NC and slidesToShow is not present', () => {
      component.timeslots = createTimeSlots();
      component.reRender = true;
      component.consumerType = AppointmentPickerConsumerTypeEnum.NC;
      component.isDeviceLandscape = true;

      component.ngOnChanges({
        isDeviceLandscape: new SimpleChange(null, component.isDeviceLandscape, true),
      });
      fixture.detectChanges();
      expect(component.slideConfig.arrows).toBe(true);
      expect(component.slideConfig.slidesToScroll).toBe(4);
      expect(component.slideConfig.slidesToShow).toBe(1);
      setTimeout(function () {
        expect(component.reRender).toEqual(false);
      }, 1);
      TimeslotUtil.calculateTimeSlotsAvailability(component.timeslots).subscribe((isAvailable: boolean) => {
        expect(isAvailable).toBe(true);
      });
    });
    it('should update the slides config to mobile config if changes detected for isLandscape is false for NC', () => {
      component.timeslots = createTimeSlots();
      component.reRender = true;
      component.consumerType = AppointmentPickerConsumerTypeEnum.NC;
      component.isDeviceLandscape = false;
      component.slidesToShow = 4;

      component.ngOnChanges({
        isDeviceLandscape: new SimpleChange(null, component.isDeviceLandscape, true),
      });
      fixture.detectChanges();
      expect(component.slideConfig.arrows).toBe(false);
      expect(component.slideConfig.slidesToScroll).toBe(2);
      expect(component.slideConfig.slidesToShow).toBe(2);
      setTimeout(function () {
        expect(component.reRender).toEqual(false);
      }, 1);
      TimeslotUtil.calculateTimeSlotsAvailability(component.timeslots).subscribe((isAvailable: boolean) => {
        expect(isAvailable).toBe(true);
      });
    });
    it('should keep slides config to default config if changes detected for isLandscape is true but consumer is not NC', () => {
      component.timeslots = createTimeSlots();
      component.reRender = true;
      component.isDeviceLandscape = true;

      component.ngOnChanges({
        isDeviceLandscape: new SimpleChange(null, component.isDeviceLandscape, true),
      });
      fixture.detectChanges();
      expect(component.slideConfig.arrows).toBe(true);
      expect(component.slideConfig.slidesToScroll).toBe(1);
      expect(component.slideConfig.slidesToShow).toBe(1);
      TimeslotUtil.calculateTimeSlotsAvailability(component.timeslots).subscribe((isAvailable: boolean) => {
        expect(isAvailable).toBe(true);
      });
    });
  });

  describe('loadMoreSlots()', () => {
    let eventEmitter: EventEmitter<boolean>;
    let mockedEventEmitter = new EventEmitter<boolean>();
    beforeEach(() => {
      eventEmitter = new EventEmitter<boolean>();
      component.loadMore = eventEmitter;
      mockedEventEmitter = spy(eventEmitter);
    });

    it('should emit loadMore event on button click', () => {
      component.loadMoreSlots();
      verify(mockedEventEmitter.emit()).once();
    });
    it('should emit loadMore event, NOT disable next when enableAppointmentsUI flag is enabled and start date < end date', () => {
      component.startDate = new Date(fourthOfSeptemberTwenty);
      component.endDate = new Date('2020-09-10T00:00:00.000Z');
      component.enableAppointmentsUI = true;
      jest.spyOn(component.appointmentSelected, 'emit');
      component.loadMoreSlots();
      verify(mockedEventEmitter.emit()).once();
      expect(component.disableNext).toBeFalsy();
      expect(component.disablePrevious).toBeFalsy();
      expect(component.appointmentSelected.emit).toHaveBeenCalledWith(undefined);
    });

    it('should emit loadMore event, disable next when enableAppointmentsUI flag is enabled and start date >= end date', () => {
      component.startDate = new Date('2020-12-14T00:00:00.000Z');
      component.endDate = new Date(twelfthOfDecemberTwentyTwenty);
      component.enableAppointmentsUI = true;
      jest.spyOn(component.appointmentSelected, 'emit');
      component.loadMoreSlots();
      verify(mockedEventEmitter.emit()).once();
      expect(component.disableNext).toBeTruthy();
      expect(component.disablePrevious).toBeFalsy();
      expect(component.appointmentSelected.emit).toHaveBeenCalledWith(undefined);
    });
  });

  describe('selectInstallSlotDay()', () => {
    let eventEmitter, mockedEventEmitter: EventEmitter<AppointmentPickerTypeEnum>;
    beforeEach(() => {
      eventEmitter = new EventEmitter<AppointmentPickerTypeEnum>();
      component.scrollTo = eventEmitter;
      mockedEventEmitter = spy(eventEmitter);
    });

    it('should emit scrollTo moment event on card selected', () => {
      const selectedSlot = {
        getTimeslotMoment: jest.fn(),
        timeSlots: [{ specUrl: specUrl, code: TimeslotMomentEnum.DAY, availabiltyId: '9158093522413781595' }],
        date: new Date(twentyOfAugustTwentyTwenty),
        hasAvailableMoment() {
          return true;
        },
        hasAvailableMoments() {
          return true;
        },
      };
      component.selectInstallSlotDay(selectedSlot);
      verify(mockedEventEmitter.emit(AppointmentPickerTypeEnum.BY_MOMENT)).once();
    });
  });

  describe('shouldRenderMoment()', () => {
    it('should return false when customer is NC and picker is set to by_moment', () => {
      component.consumerType = AppointmentPickerConsumerTypeEnum.NC;
      component.appointmentPickerType = AppointmentPickerTypeEnum.BY_MOMENT;
      expect(component.shouldRenderMoment()).toBe(false);
    });
    it('should return true when customer is NC and picker is set to by_date', () => {
      component.consumerType = AppointmentPickerConsumerTypeEnum.NC;
      component.appointmentPickerType = AppointmentPickerTypeEnum.BY_DATE;
      expect(component.shouldRenderMoment()).toBe(true);
    });
    it('should return true when customer is NOT NC and picker is set to by_date', () => {
      component.appointmentPickerType = AppointmentPickerTypeEnum.BY_DATE;
      expect(component.shouldRenderMoment()).toBe(true);
    });
    it('should return true when customer is NOT NC and picker is set to by_moment', () => {
      component.appointmentPickerType = AppointmentPickerTypeEnum.BY_MOMENT;
      expect(component.shouldRenderMoment()).toBe(true);
    });
  });

  describe('loadPreviousSlots()', () => {
    let eventEmitter: EventEmitter<boolean>;
    let mockedEventEmitter = new EventEmitter<boolean>();
    beforeEach(() => {
      eventEmitter = new EventEmitter<boolean>();
      component.loadMore = eventEmitter;
      mockedEventEmitter = spy(eventEmitter);
    });

    it('should emit loadMore event on button click', () => {
      jest.spyOn(component.appointmentSelected, 'emit');
      component.loadPreviousSlots();
      verify(mockedEventEmitter.emit(true)).once();
      expect(component.disableNext).toBeFalsy();
      expect(component.appointmentSelected.emit).toHaveBeenCalledWith(undefined);
    });
  });
});
