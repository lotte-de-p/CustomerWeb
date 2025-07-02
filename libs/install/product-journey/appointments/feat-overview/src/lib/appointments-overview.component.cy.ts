import { AppointmentsOverviewComponent } from './appointments-overview.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
  AppointmentFacade,
  selectAppointmentError,
  selectAppointments,
  selectCompletedAppointments,
  selectOpenAppointments,
  selectOutdoorAppointment,
  selectSelectedAppointment,
  selectAppointmentDetailsLoaded,
} from '@product-journey/appointments/data-access';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
import { LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { LoginDetails, LoginService, UserDetailsService } from '@telenet/ng-lib-ocapi';
import { of } from 'rxjs';
registerLocaleData(localeNl);

describe('AppointmentsOverviewComponent', () => {
  const loginDetails = new LoginDetails(200);
  loginDetails.role = 'MANAGER';
  loginDetails.scopes = ['appointments'];

  beforeEach(() => {
    cy.mount(AppointmentsOverviewComponent, {
      imports: [
        TgTranslateTestingModule.forRoot({}),
        EffectsModule.forRoot({}),
        StoreModule.forRoot({}),
        BrowserAnimationsModule,
        HttpClientTestingModule,
      ],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: selectOpenAppointments,
              value: [],
            },
            {
              selector: selectAppointmentDetailsLoaded,
              value: true,
            },
            {
              selector: selectCompletedAppointments,
              value: [],
            },
            {
              selector: selectSelectedAppointment,
              value: undefined,
            },
            {
              selector: selectAppointments,
              value: [],
            },
            {
              selector: selectAppointmentError,
              value: undefined,
            },
            {
              selector: selectOutdoorAppointment,
              value: undefined,
            },
          ],
        }),
        AppointmentFacade,
        { provide: LOCALE_ID, useValue: 'nl-BE' },
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

  it('should show no appointment message', () => {
    cy.get('[data-cy="noAppointments"]').should('be.visible');
    cy.get('[data-cy="outdoor-appointment"]').should('not.exist');
  });
});
