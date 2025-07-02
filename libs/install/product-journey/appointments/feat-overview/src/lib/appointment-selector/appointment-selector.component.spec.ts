import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppointmentSelectorComponent } from './appointment-selector.component';
import {
  Appointment,
  AppointmentFacade,
  selectCompletedAppointments,
  selectOpenAppointments,
  selectSelectedAppointment,
} from '@product-journey/appointments/data-access';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppointmentTestFactory } from '@product-journey/appointments/ui';
import { jest } from '@jest/globals';

describe('AppointmentSelectorComponent', () => {
  let component: AppointmentSelectorComponent;
  let fixture: ComponentFixture<AppointmentSelectorComponent>;
  let facade: AppointmentFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        CommonModule,
        HttpClientTestingModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
      ],
      providers: [
        AppointmentFacade,
        provideMockStore({
          selectors: [
            {
              selector: selectOpenAppointments,
              value: [],
            },
            {
              selector: selectCompletedAppointments,
              value: [],
            },
            {
              selector: selectSelectedAppointment,
              value: undefined,
            },
          ],
        }),
        {
          provide: 'Window',
          useValue: {},
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppointmentSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    facade = TestBed.inject(AppointmentFacade);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have defined observables', () => {
    expect(component.openAppointments$).toBeDefined();
    expect(component.selectedAppointment$).toBeDefined();
    expect(component.completedAppointments$).toBeDefined();
  });

  it('should open and close the menu', () => {
    expect(component.showMenu).toBe(false);
    component.open();
    expect(component.showMenu).toBe(true);
    component.close();
    expect(component.showMenu).toBe(false);
  });

  it('should select the appointment', () => {
    jest.spyOn(facade, 'setSelectAppointment');
    component.selectAppointment(AppointmentTestFactory.getSelectedAppointment() as Appointment, true);
    expect(facade.setSelectAppointment).toHaveBeenCalledWith(AppointmentTestFactory.getSelectedAppointment());
    expect(component.showMenu).toBe(false);
    expect(component.showHistory).toBe(true);
  });
});
