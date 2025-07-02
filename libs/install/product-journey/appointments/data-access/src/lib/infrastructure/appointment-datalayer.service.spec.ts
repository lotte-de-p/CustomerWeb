import { AppointmentDatalayerService } from './appointment-datalayer.service';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { jest } from '@jest/globals';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { Appointment } from '../entities/appointment.model';
import { AppointmentStatusEnum, AppointmentTypeEnum } from '../entities/raw-appointment.model';

describe('AppointmentDatalayerService', () => {
  let appointmentDatalayerService: AppointmentDatalayerService;
  let dataLayerService: DataLayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [{ provide: 'Window', useValue: {} }],
    });
    appointmentDatalayerService = TestBed.inject(AppointmentDatalayerService);
    dataLayerService = TestBed.inject(DataLayerService);
    appointmentDatalayerService.currentIntent = appointmentDatalayerService.INTENT_RESCHEDULE_APPOINTMENT;
  });

  it('should send event when customer has no appointments planned', () => {
    const eventSpy = jest.spyOn(dataLayerService, 'addEvent');
    appointmentDatalayerService.resetIntent();
    appointmentDatalayerService.sendNoAppointmentPlannedEvent();
    expect(dataLayerService.addEvent).toHaveBeenCalled();
    expect(eventSpy.mock.calls[0][0].getType()).toBe('impression');
    expect(eventSpy.mock.calls[0][0].getEventName()).toBe('no appointment planned');
    expect(eventSpy.mock.calls[0][0].getEventStatus()).toBe('success');
  });

  it('should send event when appointment data is loaded', () => {
    const eventSpy = jest.spyOn(dataLayerService, 'addEvent');
    appointmentDatalayerService.resetIntent();
    const appointment = {
      appointmentStatus: AppointmentStatusEnum.NEW,
      appointmentType: AppointmentTypeEnum.REPAIR,
    } as Appointment;
    appointmentDatalayerService.sendAppointmentEventData(appointment);
    expect(dataLayerService.addEvent).toHaveBeenCalled();
    expect(eventSpy.mock.calls[0][0].getType()).toBe('impression');
    expect(eventSpy.mock.calls[0][0].getEventName()).toBe('appointment viewed');
    expect(eventSpy.mock.calls[0][0].getEventStatus()).toBe('success');
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
