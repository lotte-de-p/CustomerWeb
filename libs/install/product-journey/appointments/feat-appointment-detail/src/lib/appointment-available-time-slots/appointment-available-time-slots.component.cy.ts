import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Appointment, AppointmentFacade } from '@product-journey/appointments/data-access';
import { AppointmentAvailableTimeSlotsComponent } from './appointment-available-time-slots.component';
import { LOCALE_ID } from '@angular/core';
import localeNl from '@angular/common/locales/nl';
import { registerLocaleData } from '@angular/common';
import { AppointmentTestFactory } from '@product-journey/appointments/ui';
import { HttpClientTestingModule } from '@angular/common/http/testing';

registerLocaleData(localeNl);

describe('AppointmentAvailableTimeSlotsComponent', () => {
  beforeEach(() => {
    cy.mount(AppointmentAvailableTimeSlotsComponent, {
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        TgTranslateTestingModule.forRoot({
          language: 'nl',
          translations: {},
        }),
        EffectsModule.forRoot({}),
        StoreModule.forRoot({}),
      ],
      providers: [AppointmentFacade, { provide: LOCALE_ID, useValue: 'nl-BE' }],
      componentProperties: {
        selectedAppointment: AppointmentTestFactory.getSelectedAppointment() as Appointment,
        availableTimeSlots: [],
        updatedSlots: [],
        startDate: new Date(),
      },
    });
  });

  it('should select the date tab as active', () => {
    cy.get('[data-cy="appointment-time-slot-input-date"]').should('be.checked');
  });

  it('should select the active tab as time', () => {
    cy.get('[data-cy="appointment-time-slot-tab-time"]').click();
    cy.get('[data-cy="appointment-time-slot-input-time"]').should('be.checked');
    cy.get('[data-cy="appointment-time-slot-input-date"]').should('not.be.checked');
  });
});
