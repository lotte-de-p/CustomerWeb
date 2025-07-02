import { AppointmentDetailsComponent } from './appointment-detail.component';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
  AppointmentFacade,
  selectSelectedAppointment,
  selectAvailableTimeSlots,
  selectAvailableTimeSlotError,
  selectOutdoorAppointment,
} from '@product-journey/appointments/data-access';
import { provideMockStore } from '@ngrx/store/testing';
import availableTimeSlots from '../mock/availableTimeSlots.json';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppointmentTestFactory } from '@product-journey/appointments/ui';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

registerLocaleData(localeNl);

describe('AppointmentDetailsComponent', () => {
  const CANCEL_APPOINTMENT = 'tg-appointment-cancellation';
  beforeEach(() => {
    cy.clock(new Date('2023-10-29'));

    cy.mount(AppointmentDetailsComponent, {
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        TgTranslateTestingModule.forRoot({
          language: 'nl',
          translations: {
            'ng.appointments.date-thursday.lbl': 'Thursday',
            'ng.appointments.date-october.lbl': 'October',
            'ng.appointments.time-mi.lbl': 'Afternoon',
            'ng.appointments.details.cost.info': '€ {{appointmentCost}} (Exclusive hardware)',
          },
        }),
        EffectsModule.forRoot({}),
        StoreModule.forRoot({}),
      ],
      providers: [
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
              value: AppointmentTestFactory.outdoorAppointment(),
            },
          ],
        }),
        AppointmentFacade,
        { provide: LOCALE_ID, useValue: 'nl-BE' },
      ],
      componentProperties: {
        usefulInformationInstallUrl: '/install',
        usefulInformationRepairUrl: '/repair',
      },
    });
    cy.stub(HttpClient.prototype, 'get').callsFake((data) => {
      if (data === '/repair') {
        return of('Repair Info');
      }
      return of('Install Info');
    });
  });

  it('should show appointment date and product name', () => {
    cy.get('[data-cy="appointment-date"]').should('have.text', ' Thursday 12 October, 2023 ');
    cy.get('[data-cy="appointment-cost"]').eq(0).should('have.text', '€ 102,85 (Exclusive hardware)');
    cy.get('[data-cy="outdoor-appointment"]').should('exist');
  });

  it('should show additional information', () => {
    cy.get('[data-cy="appointment-show-useful-info"]').click();
    cy.get('[data-cy="appointment-useful-info"]').should('have.text', '/repair');
  });

  it('should show cancel appointment dialog box', () => {
    cy.get('[data-cy="cancel-appointment"]').click();
    cy.get(CANCEL_APPOINTMENT).should('be.visible');
    cy.get('[data-cy="close-cancel-appointment"]').click();
    cy.get(CANCEL_APPOINTMENT).should('not.exist');
  });

  it('should show confirm cancel appointment', () => {
    cy.get('[data-cy="cancel-appointment"]').click();
    cy.get(CANCEL_APPOINTMENT).should('be.visible');
    cy.get('[data-cy="cancel-appointment-date"]').should('have.text', ' Thursday 12 October ');
    cy.get('[data-cy="cancel-appointment-time"]').should('have.text', ' Afternoon (10:00 - 14:30) ');
    cy.get('[data-cy="confirm-cancel-appointment"]').click();
    cy.get(CANCEL_APPOINTMENT).should('not.exist');
  });
});
