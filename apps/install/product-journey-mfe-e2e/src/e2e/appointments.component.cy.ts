describe('appointments', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=appointmentsoverviewcomponent--primary');
    cy.clock(new Date(2024, 3, 2), ['Date']);
  });

  it('successfully load appointments component', () => {
    cy.get('tg-appointments-overview').should('be.visible');
  });

  it('should successfully select timeslot and submit', () => {
    cy.get('tg-appointments-overview').should('be.visible');
    cy.get('[data-cy="confirm-reschedule"]').should('have.class', 'disabled-state').as('confirm-reschedule');
    cy.get('[data-cy="appointment-date-7"]').click();
    cy.get('[data-cy="appointment-time-2"]').click();
    cy.get('@confirm-reschedule').should('not.have.class', 'disabled-state');
    cy.get('@confirm-reschedule').click();
    cy.get('[data-cy="appointment-schedule-success"]').should('be.visible');
  });

  it('should select another appointment and reschedule', () => {
    cy.get('[data-cy="change-appointment"]').click();
    cy.get('[data-cy="appointment-selector-option-1"]').click();
    cy.get('[data-cy="request-reschedule"]').click();
    cy.get('[data-cy="appointment-date-8"]').click();
    cy.get('[data-cy="appointment-time-3"]').click();
    cy.get('[data-cy="confirm-reschedule"]').click();
    cy.get('[data-cy="appointment-reschedule-success"]').should('be.visible');
  });
});
