import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Appointment, AppointmentFacade } from '@product-journey/appointments/data-access';
import { ContactDetailFormComponent } from './contact-detail-form.component';
import { AppointmentTestFactory } from '@product-journey/appointments/ui';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DomService } from '@telenet/ng-lib-shared';

describe('ContactDetailFormComponent', () => {
  const CONTACT_VALUE = '#contactValueField';
  beforeEach(() => {
    cy.mount(ContactDetailFormComponent, {
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        TgTranslateTestingModule.forRoot({
          language: 'nl',
          translations: {
            'ng.appointments.email.contactvaluefield.pattern.error': 'Email pattern error',
            'ng.appointments.sms.contactvaluefield.pattern.error': 'SMS patter error',
            'ng.appointments.lbl.contact-method-sms': 'Sms',
          },
        }),
        EffectsModule.forRoot({}),
        StoreModule.forRoot({}),
      ],
      providers: [AppointmentFacade],
      componentProperties: {
        appointment: AppointmentTestFactory.getSelectedAppointment() as Appointment,
      },
    });
  });

  it('should show form contact detail', () => {
    cy.get('#contactNameField').should('have.value', 'Test Romeijnder');
    cy.get(CONTACT_VALUE).should('have.value', 'test@info.be');
  });

  it('should show error message when incorrect email pattern is typed', () => {
    cy.get(CONTACT_VALUE).type('12345');
    cy.get(CONTACT_VALUE).next('div').should('have.text', ' Email pattern error ');
  });

  it('should show error message when incorrect SMS pattern is typed', () => {
    cy.get('#contactMethodField').click();
    cy.get('li').contains('Sms').click();
    cy.get(CONTACT_VALUE).type('info@email.com');
    cy.get(CONTACT_VALUE).next('div').should('have.text', ' SMS patter error ');
  });

  it('should not submit form when the value is invalid', () => {
    cy.spy(AppointmentFacade.prototype, 'updateContactDetail').as('updateContactDetailSpy');
    cy.get(CONTACT_VALUE).type('12345');
    cy.get('[data-cy="save-contact-detail"]').click();
    cy.get('@updateContactDetailSpy').should('not.have.been.called');
  });

  it('should submit form', () => {
    cy.spy(AppointmentFacade.prototype, 'updateContactDetail').as('updateContactDetailSpy');
    cy.spy(DomService.prototype, 'scrollToStartElement').as('scrollToStartElement');
    cy.get('[data-cy="save-contact-detail"]').click();
    cy.get('@scrollToStartElement').should('have.been.calledWith', '#appointment-overview');
    cy.get('@updateContactDetailSpy').should(
      'have.been.calledWith',
      {
        contactName: 'Test Romeijnder',
        language: 'NL',
        notificationContact: 'test@info.be',
        notificationMethod: 'EMAIL',
      },
      'TI_1518555414_20230731_112499'
    );
  });
});
