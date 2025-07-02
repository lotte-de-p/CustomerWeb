import {
  MYBASE_SERVICE_MOMENTS_CARD_APPOINTMENT,
  MYBASE_SERVICE_MOMENTS_CARD_BUTTON_APPOINTMENT,
  MYBASE_SERVICE_MOMENTS_CARD_BUTTON_ESIM_ACTIVATION,
  MYBASE_SERVICE_MOMENTS_CARD_BUTTON_SIM_ACTIVATION,
  MYBASE_SERVICE_MOMENTS_CARD_ESIM_ACTIVATION,
  MYBASE_SERVICE_MOMENTS_CARD_SIM_ACTIVATION,
  MYBASE_SERVICE_MOMENTS_CARD_SUBTITLE_ESIM_ACTIVATION,
  MYBASE_SERVICE_MOMENTS_CARD_SUBTITLE_PLANNED_APPOINTMENT,
  MYBASE_SERVICE_MOMENTS_CARD_SUBTITLE_SIM_ACTIVATION,
  MYBASE_SERVICE_MOMENTS_CARD_SUBTITLE_UNPLANNED_APPOINTMENT,
} from './cypress-constants';

describe('MyBase Service Moments SIM ACTIVATION', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-1-service-moments--sim-activation'));

  it('should render sim activation card', () => {
    cy.get(MYBASE_SERVICE_MOMENTS_CARD_SIM_ACTIVATION).should('exist');
    cy.get(MYBASE_SERVICE_MOMENTS_CARD_BUTTON_SIM_ACTIVATION).should('exist');
    cy.get(MYBASE_SERVICE_MOMENTS_CARD_SUBTITLE_SIM_ACTIVATION).should('exist');
  });
});

describe('MyBase Service Moments ESIM ACTIVATION', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-1-service-moments--e-sim-activation'));

  it('should render esim activation card', () => {
    cy.get(MYBASE_SERVICE_MOMENTS_CARD_ESIM_ACTIVATION).should('exist');
    cy.get(MYBASE_SERVICE_MOMENTS_CARD_BUTTON_ESIM_ACTIVATION).should('exist');
    cy.get(MYBASE_SERVICE_MOMENTS_CARD_SUBTITLE_ESIM_ACTIVATION).should('exist');
  });
});

describe('MyBase Service Moments planned APPOINTMENT', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-1-service-moments--planned-appointment'));

  it('should render planned appointment card', () => {
    cy.get(MYBASE_SERVICE_MOMENTS_CARD_APPOINTMENT).should('exist');
    cy.get(MYBASE_SERVICE_MOMENTS_CARD_BUTTON_APPOINTMENT).should('exist');
    cy.get(MYBASE_SERVICE_MOMENTS_CARD_SUBTITLE_PLANNED_APPOINTMENT).should('exist');
  });
});

describe('MyBase Service Moments unplanned APPOINTMENT', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-1-service-moments--unplanned-appointment'));

  it('should render planned appointment card', () => {
    cy.get(MYBASE_SERVICE_MOMENTS_CARD_APPOINTMENT).should('exist');
    cy.get(MYBASE_SERVICE_MOMENTS_CARD_BUTTON_APPOINTMENT).should('exist');
    cy.get(MYBASE_SERVICE_MOMENTS_CARD_SUBTITLE_UNPLANNED_APPOINTMENT).should('exist');
  });
});
