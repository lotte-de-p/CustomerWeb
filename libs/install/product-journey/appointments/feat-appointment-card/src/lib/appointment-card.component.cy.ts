import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
  AppointmentFacade,
  selectOpenAppointments,
  selectAppointmentError,
} from '@product-journey/appointments/data-access';
import { provideMockStore } from '@ngrx/store/testing';
import { AppointmentTestFactory } from '@product-journey/appointments/ui';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LOCALE_ID } from '@angular/core';
import localeNl from '@angular/common/locales/nl';
import { registerLocaleData } from '@angular/common';
import { AppointmentCardComponent } from './appointment-card.component';
import { LoginDetails, LoginService, UserDetailsService } from '@telenet/ng-lib-ocapi';
import { of } from 'rxjs';
registerLocaleData(localeNl);

describe('AppointmentCardComponent', () => {
  const loginDetails = new LoginDetails(200);
  loginDetails.role = 'MASTER_USER';
  loginDetails.scopes = ['customeraccount', 'appointments'];

  const commonImports = [
    TgTranslateTestingModule.forRoot({
      language: 'nl',
      translations: {
        'ng.appointments.lbl.appointment-scheduled': 'Afspraak ingepland',
        'ng.appointments.lbl.scheduled-for': 'Appointment booked for',
        'ng.appointments.lbl.appointment-complete': 'Afspraak afgerond',
        'ng.appointments.error.service-not-available': 'Appointment error message',
      },
    }),
    HttpClientTestingModule,
    EffectsModule.forRoot({}),
    StoreModule.forRoot({}),
  ];

  const commonProviders = [
    AppointmentFacade,
    LoginService,
    UserDetailsService,
    { provide: LOCALE_ID, useValue: 'nl-BE' },
  ];

  beforeEach(() => {
    cy.mount(AppointmentCardComponent, {
      imports: [...commonImports],
      providers: [
        ...commonProviders,
        provideMockStore({
          selectors: [
            {
              selector: selectOpenAppointments,
              value: AppointmentTestFactory.getOpenAppointmentsMock(),
            },
            {
              selector: selectAppointmentError,
              value: undefined,
            },
          ],
        }),
      ],
      componentProperties: {},
    });

    cy.stub(LoginService.prototype, 'getAuthenticationStatus').callsFake(() => {
      return of(true);
    });

    cy.stub(UserDetailsService.prototype, 'getUserDetails').callsFake(() => {
      return of(loginDetails);
    });
  });

  it('should contain plan heading when appointment is not scheduled', () => {
    cy.get('[data-cy="schedule-icon-calendar"]').should('have.class', 'icon-calendar');
    cy.get('[data-cy="schedule-card-heading"]').should('have.text', ' Afspraak ingepland ');
    cy.get('[data-cy="schedule-card-sub-heading"]').should('have.text', ' Appointment booked for ');
    cy.get('[data-cy="schedule-card-slot"]').should('have.text', ' 12 okt. 2023 (10:00 - 14:30) ');
    cy.get('[data-cy="schedule-card-complete"]').should('have.text', ' Afspraak afgerond ');
  });

  it('should contain error message when fetch appointment fails', () => {
    cy.mount(AppointmentCardComponent, {
      imports: [...commonImports],
      providers: [
        ...commonProviders,
        provideMockStore({
          selectors: [
            {
              selector: selectOpenAppointments,
              value: AppointmentTestFactory.getOpenAppointmentsMock(),
            },
            {
              selector: selectAppointmentError,
              value: 'Error fetching appointments',
            },
          ],
        }),
      ],
      componentProperties: {},
    });

    cy.get('[data-cy="appointments-error"]').should('have.text', ' Appointment error message ');
  });
});
