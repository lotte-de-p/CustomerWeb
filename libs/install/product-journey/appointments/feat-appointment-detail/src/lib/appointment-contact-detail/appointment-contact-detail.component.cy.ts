import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Appointment } from '@product-journey/appointments/data-access';
import { LOCALE_ID } from '@angular/core';
import { AppointmentContactDetailComponent } from './appointment-contact-detail.component';
import { AppointmentTestFactory } from '@product-journey/appointments/ui';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppointmentContactDetailComponent', () => {
  beforeEach(() => {
    cy.mount(AppointmentContactDetailComponent, {
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        TgTranslateTestingModule.forRoot({
          language: 'nl',
          translations: {
            'ng.appointments.contact.lbl.email': 'Email',
          },
        }),
        EffectsModule.forRoot({}),
        StoreModule.forRoot({}),
      ],
      providers: [{ provide: LOCALE_ID, useValue: 'nl-BE' }],
      componentProperties: {
        appointment: AppointmentTestFactory.getSelectedAppointment() as Appointment,
      },
    });
  });

  it('should show contact detail', () => {
    cy.get('[data-cy="contact-name"]').should('have.text', ' Test Romeijnder ');
    cy.get('[data-cy="contact-value"]').should('have.text', ' test@info.be ');
  });

  it('should show update contact detail', () => {
    cy.get('[data-cy="update-contact-detail"]').click();
    cy.get('tg-contact-detail-form').should('be.visible');
  });
});
