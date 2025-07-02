import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LanguageService, MediaQueryService } from '@telenet/ng-lib-page';
import { EventEmitter, SimpleChange } from '@angular/core';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CookieService } from 'ngx-cookie-service';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { InputAppointmentMomentPickerComponent } from './input-appointment-moment-picker.component';
import { TimeslotPipe } from '../../../pipes';
import { TimeslotMomentEnum } from '../../../enums';
import { AppointmentTransformerSlot } from '../../../models';
import { AppointmentPickerConsumerTypeEnum, TransformedAvailabilityInterface } from '../../../interfaces';
import { AppointmentPickerTypeEnum } from '../appointment-picker-type.enum';
import { DeviceDetectorService } from 'ngx-device-detector';
import { TimeslotUtil } from '../../../utils';
import { NoAvailableAppointmentDateComponent } from '../no-available-appointment-date';
import { spy, verify } from 'ts-mockito';
const date = '2020-08-21T00:00:00.000Z';
const twentySixOfAugustTwentyTwenty = '2020-08-26T00:00:00.000Z';

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
describe('InputAppointmentMomentPickerComponent', () => {
  const specUrl = 'https://api.int.telenet.be/omapi/public/product/APPT0000';
  let component: InputAppointmentMomentPickerComponent;
  let fixture: ComponentFixture<InputAppointmentMomentPickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InputAppointmentMomentPickerComponent, TimeslotPipe, NoAvailableAppointmentDateComponent],
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [
        CookieService,
        LanguageService,
        MediaQueryService,
        DeviceDetectorService,
        { provide: 'Window', useValue: {} },
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(InputAppointmentMomentPickerComponent);
        component = fixture.debugElement.componentInstance;
        component.messageGroup = 'test';
        fixture.detectChanges();
      });
  }));

  describe('getSlideUpAnimationStyling', () => {
    it('should return the styling string for the slide up animation', waitForAsync(() => {
      expect(component.getSlideUpAnimationStyling(1)).toEqual('--animation-delay: 1');
    }));
  });

  describe('isDisabled', function () {
    it('should return true when selectedTimeslot is undefined', function () {
      component.selectedTimeslot = undefined;
      expect(component.isDisabled(TimeslotMomentEnum.LUNCH)).toEqual(true);
    });
    it('should return true when selectedTimeslot and timeslots are undefined', function () {
      component.selectedTimeslot = undefined;
      component.timeslots = [];
      expect(component.isDisabled(TimeslotMomentEnum.LUNCH)).toEqual(true);
    });
    it('should return true when selectedTimeslot has no available moment', function () {
      component.selectedTimeslot = new AppointmentTransformerSlot();
      component.selectedTimeslot.timeSlots = [{ code: TimeslotMomentEnum.AFTERNOON }];
      expect(component.isDisabled(TimeslotMomentEnum.LUNCH)).toEqual(true);
    });
    it('should return true when timeslots has no available moment', function () {
      component.selectedTimeslot = undefined;
      const appointmentTransformerSlot = new AppointmentTransformerSlot();
      appointmentTransformerSlot.timeSlots = [{ code: TimeslotMomentEnum.AFTERNOON }];
      component.timeslots = [appointmentTransformerSlot];
      expect(component.isDisabled(TimeslotMomentEnum.LUNCH)).toEqual(true);
    });
    it('should return false when selectedTimeslot has available moment', function () {
      component.selectedTimeslot = new AppointmentTransformerSlot();
      component.selectedTimeslot.timeSlots = [{ code: TimeslotMomentEnum.LUNCH }];
      expect(component.isDisabled(TimeslotMomentEnum.LUNCH)).toEqual(false);
    });
    it('should return false timeslots has available moment', function () {
      component.selectedTimeslot = undefined;
      const appointmentTransformerSlot = new AppointmentTransformerSlot();
      appointmentTransformerSlot.timeSlots = [{ code: TimeslotMomentEnum.LUNCH }];
      component.timeslots = [appointmentTransformerSlot];
      expect(component.isDisabled(TimeslotMomentEnum.LUNCH)).toEqual(false);
    });
  });

  describe('ngOnInit', () => {
    it(
      'should update carousel index to start with selected moments if momemts is preselected ' + 'and device is mobile',
      waitForAsync(() => {
        component.consumerType = AppointmentPickerConsumerTypeEnum.NC;
        component.selectedMoment = TimeslotMomentEnum.AFTERNOON;
        component.isDeviceLandscape = false;
        component.timeslots = createTimeSlots();
        component.timeslots.push({
          getTimeslotMoment: jest.fn(),
          timeSlots: [{ specUrl: specUrl, code: TimeslotMomentEnum.DAY, availabiltyId: '9158093522413781595' }],
          date: new Date(date),
          hasAvailableMoment() {
            return true;
          },
          hasAvailableMoments() {
            return true;
          },
        });
        component.updateSlots = createTimeSlots();
        component.startDate = new Date(date);
        component.ngOnInit();
        fixture.detectChanges();
        setTimeout(function () {
          expect(component.reRender).toEqual(false);
          expect(component.slideConfig.initialSlide).toBe(3);
        }, 1);
      })
    );

    it(
      'should update carousel index to start with selected moments if momemts is ' +
        'preselected and device is not mobile',
      waitForAsync(() => {
        component.consumerType = AppointmentPickerConsumerTypeEnum.NC;
        component.selectedMoment = TimeslotMomentEnum.AFTERNOON;
        component.isDeviceLandscape = true;
        component.timeslots = createTimeSlots();
        component.updateSlots = createTimeSlots();
        component.startDate = new Date(date);
        component.ngOnInit();
        fixture.detectChanges();
        setTimeout(function () {
          expect(component.reRender).toEqual(false);
          expect(component.slideConfig.initialSlide).toBe(0);
        }, 1);
      })
    );
  });

  describe('ngOnChanges', () => {
    it('should call the renderer to refresh when it contains new moments', waitForAsync(() => {
      component.reRender = true;

      component.ngOnChanges({
        moments: new SimpleChange(null, 'some value', true),
      });
      fixture.detectChanges();
      setTimeout(function () {
        expect(component.reRender).toEqual(false);
      }, 1);
    }));

    it('should call the renderer to refresh when it contains new moments', waitForAsync(() => {
      component.reRender = true;

      component.ngOnChanges({
        notMoments: new SimpleChange(null, 'some value', true),
      });
      fixture.detectChanges();
      setTimeout(function () {
        expect(component.reRender).toEqual(true);
      }, 1);
    }));

    it('should not concate timeslot with update slots on changes detection if both is same', waitForAsync(() => {
      component.timeslots = [
        {
          timeSlots: [
            {
              specUrl: specUrl,
              code: TimeslotMomentEnum.DAY,
              availabiltyId: '9158093522413781595',
            },
          ],
          getTimeslotMoment: jest.fn(),
          date: new Date('2020-08-20T00:00:00.000Z'),
          hasAvailableMoment() {
            return true;
          },
          hasAvailableMoments() {
            return true;
          },
        },
      ];

      component.updateSlots = component.timeslots;
      component.ngOnChanges({
        updateSlots: new SimpleChange(null, component.updateSlots, true),
      });
      setTimeout(function () {
        expect(component.timeslots.length).toBe(1);
        TimeslotUtil.calculateTimeSlotsAvailability(component.timeslots).subscribe((isAvailable: boolean) => {
          expect(isAvailable).toBe(true);
        });
      }, 1);
    }));

    it('should concate timeslot with update slots on changes detection if both is different', waitForAsync(() => {
      component.timeslots = [
        {
          getTimeslotMoment: jest.fn(),
          timeSlots: [
            {
              specUrl: specUrl,
              code: TimeslotMomentEnum.DAY,
              availabiltyId: '9158093522413781595',
            },
          ],
          date: new Date('2020-08-20T00:00:00.000Z'),
          hasAvailableMoment() {
            return true;
          },
          hasAvailableMoments() {
            return true;
          },
        },
      ];

      component.updateSlots = [
        {
          getTimeslotMoment: jest.fn(),
          timeSlots: [
            {
              specUrl: specUrl,
              code: TimeslotMomentEnum.DAY,
              availabiltyId: '9158093522413781595',
            },
          ],
          date: new Date(date),
          hasAvailableMoment() {
            return true;
          },
          hasAvailableMoments() {
            return true;
          },
        },
      ];
      component.ngOnChanges({
        updateSlots: new SimpleChange(null, component.updateSlots, true),
      });
      setTimeout(function () {
        expect(component.timeslots.length).toBe(2);
        TimeslotUtil.calculateTimeSlotsAvailability(component.timeslots).subscribe((isAvailable: boolean) => {
          expect(isAvailable).toBe(true);
        });
      }, 1);
    }));
    it('should update the slides config to desktop config if changes detected for isLandscape is true', waitForAsync(() => {
      component.reRender = true;
      component.isDeviceLandscape = true;

      component.ngOnChanges({
        isDeviceLandscape: new SimpleChange(null, component.isDeviceLandscape, true),
      });
      fixture.detectChanges();
      expect(component.slideConfig.arrows).toBe(true);
      expect(component.slideConfig.slidesToScroll).toBe(3);
      expect(component.slideConfig.slidesToShow).toBe(2);
      setTimeout(function () {
        expect(component.reRender).toEqual(false);
      }, 1);
    }));
    it('should update the slides config to mobile config if changes detected for isLandscape is false', waitForAsync(() => {
      component.reRender = true;
      component.isDeviceLandscape = false;

      component.ngOnChanges({
        isDeviceLandscape: new SimpleChange(null, component.isDeviceLandscape, true),
      });
      fixture.detectChanges();
      expect(component.slideConfig.arrows).toBe(false);
      expect(component.slideConfig.slidesToScroll).toBe(1);
      expect(component.slideConfig.slidesToShow).toBe(1);
      setTimeout(function () {
        expect(component.reRender).toEqual(false);
      }, 1);
    }));
  });

  describe('getIcon', function () {
    it('should return an icon string', function () {
      expect(component.getIcon(TimeslotMomentEnum.ALL_DAY)).toBe('allday');
      expect(component.getIcon(TimeslotMomentEnum.DAY)).toBe('day');
      expect(component.getIcon(TimeslotMomentEnum.MORNING)).toBe('morning');
      expect(component.getIcon(TimeslotMomentEnum.LUNCH)).toBe('lunch');
      expect(component.getIcon(TimeslotMomentEnum.EVENING)).toBe('evening');
      expect(component.getIcon(TimeslotMomentEnum.AFTERNOON)).toBe('afternoon');
    });
  });

  describe('getLabel', function () {
    it('should return the label depending on the moment key', function () {
      expect(component.getLabel(TimeslotMomentEnum.ALL_DAY)).toBe('ng.test.timeslots.all-day.lbl');
      expect(component.getLabel(TimeslotMomentEnum.DAY)).toBe('ng.test.timeslots.day.lbl');
      expect(component.getLabel(TimeslotMomentEnum.MORNING)).toBe('ng.test.timeslots.morning.lbl');
      expect(component.getLabel(TimeslotMomentEnum.LUNCH)).toBe('ng.test.timeslots.lunch.lbl');
      expect(component.getLabel(TimeslotMomentEnum.AFTERNOON)).toBe('ng.test.timeslots.afternoon.lbl');
      expect(component.getLabel(TimeslotMomentEnum.EVENING)).toBe('ng.test.timeslots.evening.lbl');
    });
  });

  describe('generateMoments', function () {
    it('should return the day slots in moment keys based on consumer type if provided', function () {
      component.consumerType = AppointmentPickerConsumerTypeEnum.NC;

      const actuals = component.generateMoments();

      expect(actuals[0]).toBe(TimeslotMomentEnum.DAY);
      expect(actuals[1]).toBe(TimeslotMomentEnum.MORNING);
      expect(actuals[2]).toBe(TimeslotMomentEnum.LUNCH);
      expect(actuals[3]).toBe(TimeslotMomentEnum.AFTERNOON);
      expect(actuals[4]).toBe(TimeslotMomentEnum.EVENING);
    });

    it('should not return the day slots the moment keys if consumer type not provided', function () {
      const actuals = component.generateMoments();

      expect(actuals[0]).toBe(TimeslotMomentEnum.MORNING);
      expect(actuals[1]).toBe(TimeslotMomentEnum.LUNCH);
      expect(actuals[2]).toBe(TimeslotMomentEnum.AFTERNOON);
      expect(actuals[3]).toBe(TimeslotMomentEnum.EVENING);
    });
  });

  describe('selectMoment', function () {
    it('should emit event', function () {
      component.momentSelected.emit = jest.fn();
      component.scrollTo.emit = jest.fn();
      component.selectMoment(TimeslotMomentEnum.LUNCH);
      expect(component.momentSelected.emit).toHaveBeenCalledWith(TimeslotMomentEnum.LUNCH);
      expect(component.scrollTo.emit).toHaveBeenCalledWith(AppointmentPickerTypeEnum.BY_DATE);
    });
  });

  describe('getTimeslotMomentDisplay', () => {
    it('should display the timeslot moments correctly', () => {
      component.selectedTimeslot = new AppointmentTransformerSlot();
      component.selectedTimeslot.timeSlots = [
        {
          timeslotMoment: {
            key: TimeslotMomentEnum.MORNING,
            startHours: '08',
            endHours: '11',
            endMinutes: '00',
            startMinutes: '00',
          },
          code: TimeslotMomentEnum.MORNING,
        } as TransformedAvailabilityInterface,
        {
          timeslotMoment: {
            key: TimeslotMomentEnum.EVENING,
            startHours: '17',
            endHours: '20',
            endMinutes: '00',
            startMinutes: '00',
          },
          code: TimeslotMomentEnum.EVENING,
        } as TransformedAvailabilityInterface,
      ];
      expect(component.getTimeslotMomentDisplay(TimeslotMomentEnum.MORNING)).toEqual('08:00 - 11:00');
      expect(component.getTimeslotMomentDisplay(TimeslotMomentEnum.EVENING)).toEqual('17:00 - 20:00');
    });

    it(
      'should display the timeslot moments based on label keys when selectedTimeslot is undefined and ' +
        'isCustomMoment is true',
      () => {
        component.selectedTimeslot = undefined;
        component.messageGroup = 'message-group';
        component.timeslots = [
          {
            getTimeslotMoment: jest.fn(),
            date: new Date(date),
            hasAvailableMoment() {
              return true;
            },
            hasAvailableMoments() {
              return true;
            },
            isCustomMoment: true,
            timeSlots: [
              {
                timeslotMoment: {
                  key: TimeslotMomentEnum.MORNING,
                  startHours: '08',
                  endHours: '11',
                  endMinutes: '00',
                  startMinutes: '00',
                },
                code: TimeslotMomentEnum.MORNING,
              } as TransformedAvailabilityInterface,
              {
                timeslotMoment: {
                  key: TimeslotMomentEnum.EVENING,
                  startHours: '17',
                  endHours: '20',
                  endMinutes: '00',
                  startMinutes: '00',
                },
                code: TimeslotMomentEnum.EVENING,
              } as TransformedAvailabilityInterface,
            ],
          },
        ];
        expect(component.getTimeslotMomentDisplay(TimeslotMomentEnum.MORNING)).toEqual(
          'ng.message-group.timeslots.morning.timings.lbl'
        );
        expect(component.getTimeslotMomentDisplay(TimeslotMomentEnum.EVENING)).toEqual(
          'ng.message-group.timeslots.evening.timings.lbl'
        );
      }
    );

    it(
      'should return moment objects from class constants when selectedTimeslot is undefined and ' +
        'isCustomMoment is false by default',
      () => {
        component.selectedTimeslot = undefined;
        expect(component.getTimeslotMomentDisplay(TimeslotMomentEnum.MORNING)).toEqual('08:00 - 13:00');
        expect(component.getTimeslotMomentDisplay(TimeslotMomentEnum.EVENING)).toEqual('17:00 - 20:00');
      }
    );
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
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
