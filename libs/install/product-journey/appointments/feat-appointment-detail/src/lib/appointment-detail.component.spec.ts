import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule } from '@ngx-translate/core';
import { AppointmentDetailsComponent } from './appointment-detail.component';
import {
  Appointment,
  AppointmentFacade,
  AppointmentStatusEnum,
  AppointmentTypeEnum,
  selectAvailableTimeSlotError,
  selectAvailableTimeSlots,
  selectOutdoorAppointment,
  selectSelectedAppointment,
} from '@product-journey/appointments/data-access';
import { AppointmentTestFactory } from '@product-journey/appointments/ui';
import { provideMockStore } from '@ngrx/store/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppointmentAvailableTimeSlotsComponent } from './appointment-available-time-slots/appointment-available-time-slots.component';
import { DomService } from '@telenet/ng-lib-shared';
import { jest } from '@jest/globals';
import availableTimeSlots from '../mock/availableTimeSlots.json';

describe('AppointmentDetailsComponent', () => {
  let component: AppointmentDetailsComponent;
  let fixture: ComponentFixture<AppointmentDetailsComponent>;
  let facade: AppointmentFacade;
  let httpMock: HttpTestingController;
  const appointmentDate = new Date('2023-11-03');

  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2023-10-30'));
    TestBed.configureTestingModule({
      imports: [
        AppointmentDetailsComponent,
        AppointmentAvailableTimeSlotsComponent,
        TranslateModule.forRoot(),
        CommonModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
      ],
      providers: [
        FormBuilder,
        DomService,
        AppointmentFacade,
        provideMockStore({
          selectors: [
            {
              selector: selectSelectedAppointment,
              value: AppointmentTestFactory.getSelectedAppointment(),
            },
            {
              selector: selectAvailableTimeSlots,
              value: availableTimeSlots,
            },
            {
              selector: selectAvailableTimeSlotError,
              value: undefined,
            },
            {
              selector: selectOutdoorAppointment,
              value: {
                locationIds: ['9169507398513822922'],
              },
            },
          ],
        }),
        {
          provide: 'Window',
          useValue: {},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppointmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    facade = TestBed.inject(AppointmentFacade);
    httpMock = TestBed.inject(HttpTestingController);
    component.timeSlotsComponent = TestBed.createComponent(AppointmentAvailableTimeSlotsComponent).componentInstance;
    component.timeSlotsComponent.timeSlotForm = TestBed.inject(FormBuilder).group({
      appointment: [
        {
          date: appointmentDate,
          moment: 'AFTERNOON',
        },
      ],
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reschedule appointment with selected time slot', () => {
    jest.spyOn(facade, 'rescheduleAppointment');
    component.rescheduleAppointment(AppointmentTestFactory.getSelectedAppointment() as Appointment);

    expect(facade.rescheduleAppointment).toHaveBeenCalledWith(
      {
        appointmentType: AppointmentTypeEnum.RESCHEDULE,
        availabilityId: '417234512',
        date: appointmentDate,
        salesOrderId: '',
      },
      'TI_1518555414_20230731_112499'
    );
  });

  it('should reschedule appointment from POSTPONE_NEEDRESCHEDULE status to selected time slot and SCHEDULE appointmentType', () => {
    jest.spyOn(facade, 'rescheduleAppointment');
    const postponedAppointment = AppointmentTestFactory.getSelectedAppointmentWithStatus(
      AppointmentStatusEnum.POSTPONE_NEEDRESCHEDULE
    ) as Appointment;
    postponedAppointment.isNewAppointment = true;
    postponedAppointment.isPostponedAppointmentNeedsReschedule = true;
    component.rescheduleAppointment(postponedAppointment);

    expect(facade.rescheduleAppointment).toHaveBeenCalledWith(
      {
        appointmentType: AppointmentTypeEnum.SCHEDULE,
        availabilityId: '417234512',
        date: appointmentDate,
        salesOrderId: '',
      },
      'TI_1518555414_20230731_112499'
    );
  });

  it('should reschedule new appointment with MOVE appointmentType', () => {
    jest.spyOn(facade, 'rescheduleAppointment');
    const moveAppointment = AppointmentTestFactory.getSelectedAppointment() as Appointment;
    moveAppointment.appointmentType = AppointmentTypeEnum.MOVE;
    moveAppointment.isNewAppointment = true;
    moveAppointment.isPostponedAppointmentNeedsReschedule = false;
    component.rescheduleAppointment(moveAppointment);

    expect(facade.rescheduleAppointment).toHaveBeenCalledWith(
      {
        appointmentType: AppointmentTypeEnum.MOVE,
        availabilityId: '417234512',
        date: appointmentDate,
        salesOrderId: '',
      },
      'TI_1518555414_20230731_112499'
    );
  });

  it('should reschedule REPAIR appointment with RESCHEDULE appointmentType', () => {
    jest.spyOn(facade, 'rescheduleAppointment');
    const moveAppointment = AppointmentTestFactory.getSelectedAppointment() as Appointment;
    moveAppointment.isNewAppointment = false;
    moveAppointment.isPostponedAppointmentNeedsReschedule = false;
    component.rescheduleAppointment(moveAppointment);

    expect(facade.rescheduleAppointment).toHaveBeenCalledWith(
      {
        appointmentType: AppointmentTypeEnum.RESCHEDULE,
        availabilityId: '417234512',
        date: appointmentDate,
        salesOrderId: '',
      },
      'TI_1518555414_20230731_112499'
    );
  });

  it('should reschedule REPAIR appointment with RESCHEDULE appointmentType', () => {
    jest.spyOn(facade, 'rescheduleAppointment');
    const appointment = undefined;
    component.rescheduleAppointment(appointment);

    expect(facade.rescheduleAppointment).toHaveBeenCalled();
  });

  it('should reschedule appointment with SCHEDULE appointmentType', () => {
    jest.spyOn(facade, 'rescheduleAppointment');
    const moveAppointment = AppointmentTestFactory.getSelectedAppointment() as Appointment;
    moveAppointment.appointmentType = AppointmentTypeEnum.MOVE;
    moveAppointment.isNewAppointment = false;
    moveAppointment.isPostponedAppointmentNeedsReschedule = true;
    component.rescheduleAppointment(moveAppointment);

    expect(facade.rescheduleAppointment).toHaveBeenCalledWith(
      {
        appointmentType: AppointmentTypeEnum.SCHEDULE,
        availabilityId: '417234512',
        date: appointmentDate,
        salesOrderId: '9167375606013226000',
      },
      'TI_1518555414_20230731_112499'
    );
  });

  it('should load available time slots', () => {
    jest.spyOn(facade, 'getAvailableTimeSlots');
    const appointment = AppointmentTestFactory.getSelectedAppointment() as Appointment;
    component.requestRescheduleAppointment(appointment);

    expect(facade.getAvailableTimeSlots).toHaveBeenCalledWith(expect.any(Date), 'TI_1518555414_20230731_112499');
  });

  it('should reschedule appointment with MOVE appointmentType', () => {
    jest.spyOn(facade, 'rescheduleAppointment');
    const postponedAppointment = AppointmentTestFactory.getSelectedAppointment() as Appointment;
    component.rescheduleAppointment(postponedAppointment);

    expect(facade.rescheduleAppointment).toHaveBeenCalledWith(
      {
        appointmentType: AppointmentTypeEnum.RESCHEDULE,
        availabilityId: '417234512',
        date: appointmentDate,
        salesOrderId: '',
      },
      'TI_1518555414_20230731_112499'
    );
  });

  describe('loadMoreAvailableSlot', () => {
    it('should load time slot from new 14 days', () => {
      jest.spyOn(facade, 'getAvailableTimeSlots');
      component.startDate = new Date('2023-10-03');
      component.loadMoreAvailableSlot(false, AppointmentTestFactory.getSelectedAppointment() as Appointment);

      expect(facade.getAvailableTimeSlots).toHaveBeenCalledWith(
        new Date('2023-10-16'),
        'TI_1518555414_20230731_112499'
      );
    });

    it('should load time slot from previous 14 days', () => {
      jest.spyOn(facade, 'getAvailableTimeSlots');
      component.startDate = new Date('2023-10-03');
      component.loadMoreAvailableSlot(true, AppointmentTestFactory.getSelectedAppointment() as Appointment);

      expect(facade.getAvailableTimeSlots).toHaveBeenCalledWith(
        new Date('2023-09-20'),
        'TI_1518555414_20230731_112499'
      );
    });
  });

  describe('setUseFulInformationHtml', () => {
    function mockGetHtml(url: string) {
      const mockHtml = '<p>Mock HTML</p>';
      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush(mockHtml);
    }

    it('should set correct URLs for MOVE appointment type', () => {
      component.usefulInformationMoveUrl = 'moveUrl';
      component.postInstallationInstructionMoveUrl = 'postInstallationInstructionMoveUrl';
      component['setUseFulInformationHtml'](AppointmentTypeEnum.MOVE, false);

      mockGetHtml(component.usefulInformationMoveUrl);
      mockGetHtml(component.postInstallationInstructionMoveUrl);

      expect(component.usefulInformationHtml).toEqual(component.usefulInformationMoveUrl);
      expect(component.postInstallationHtml).toEqual(component.postInstallationInstructionMoveUrl);
    });

    it('should set correct URLs for REPAIR appointment type', () => {
      component.usefulInformationRepairUrl = 'repairUrl';
      component.postInstallationInstructionRepairUrl = 'postInstallationInstructionRepairUrl';
      component['setUseFulInformationHtml'](AppointmentTypeEnum.REPAIR, false);

      mockGetHtml(component.usefulInformationRepairUrl);
      mockGetHtml(component.postInstallationInstructionRepairUrl);

      expect(component.usefulInformationHtml).toEqual(component.usefulInformationRepairUrl);
      expect(component.postInstallationHtml).toEqual(component.postInstallationInstructionRepairUrl);
    });

    it('should set correct URLs for INSTALL appointment type', () => {
      component.usefulInformationInstallUrl = 'installUrl';
      component.postInstallationInstructionInstallUrl = 'postInstallationInstructionInstallUrl';
      component['setUseFulInformationHtml'](AppointmentTypeEnum.INSTALL, false);

      mockGetHtml(component.usefulInformationInstallUrl);
      mockGetHtml(component.postInstallationInstructionInstallUrl);

      expect(component.usefulInformationHtml).toEqual(component.usefulInformationInstallUrl);
      expect(component.postInstallationHtml).toEqual(component.postInstallationInstructionInstallUrl);
    });

    it('should set correct URLs for fiber MOVE appointment type', () => {
      component.usefulInformationFiberMoveUrl = 'usefulInformationFiberMoveUrl';
      component.postInstallationInstructionFiberMoveUrl = 'postInstallationInstructionFiberMoveUrl';
      component['setUseFulInformationHtml'](AppointmentTypeEnum.MOVE, true);

      mockGetHtml(component.usefulInformationFiberMoveUrl);
      mockGetHtml(component.postInstallationInstructionFiberMoveUrl);

      expect(component.usefulInformationHtml).toEqual(component.usefulInformationFiberMoveUrl);
      expect(component.postInstallationHtml).toEqual(component.postInstallationInstructionFiberMoveUrl);
    });

    it('should set correct URLs for fiber REPAIR appointment type', () => {
      component.usefulInformationFiberRepairUrl = 'usefulInformationFiberRepairUrl';
      component.postInstallationInstructionFiberRepairUrl = 'postInstallationInstructionFiberRepairUrl';
      component['setUseFulInformationHtml'](AppointmentTypeEnum.REPAIR, true);

      mockGetHtml(component.usefulInformationFiberRepairUrl);
      mockGetHtml(component.postInstallationInstructionFiberRepairUrl);

      expect(component.usefulInformationHtml).toEqual(component.usefulInformationFiberRepairUrl);
      expect(component.postInstallationHtml).toEqual(component.postInstallationInstructionFiberRepairUrl);
    });

    it('should set correct URLs for fiber INSTALL appointment type', () => {
      component.usefulInformationFiberInstallUrl = 'usefulInformationFiberInstallUrl';
      component.postInstallationInstructionFiberInstallUrl = 'postInstallationInstructionFiberInstallUrl';
      component['setUseFulInformationHtml'](AppointmentTypeEnum.INSTALL, true);

      mockGetHtml(component.usefulInformationFiberInstallUrl);
      mockGetHtml(component.postInstallationInstructionFiberInstallUrl);

      expect(component.usefulInformationHtml).toEqual(component.usefulInformationFiberInstallUrl);
      expect(component.postInstallationHtml).toEqual(component.postInstallationInstructionFiberInstallUrl);
    });
  });

  describe('showOutdoorAppointmentInfo', () => {
    it('should return true if the selected appointment has fiber access enabled', () => {
      const result = component.showOutdoorAppointmentInfo(
        AppointmentTestFactory.getSelectedAppointment() as Appointment,
        AppointmentTestFactory.outdoorAppointment()
      );

      expect(result).toBeTruthy();
    });

    it('should return false if the selected appointment has fiber access enabled', () => {
      const result = component.showOutdoorAppointmentInfo(
        AppointmentTestFactory.getCompletedAppointmentsMock() as Appointment,
        AppointmentTestFactory.outdoorAppointment()
      );

      expect(result).toBeFalsy();
    });
  });
});
