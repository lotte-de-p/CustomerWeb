const SERVICE_CASE_ITEM = '[data-cy="service-case-item"]';
const CLOSED_SERVICE_CASES = '[data-cy="closed-service-cases"]';
const OPEN_SERVICE_CASES = '[data-cy="open-service-cases"]';
const CREATION_DATE = '[data-cy="service-case-creation-date"]';
const DEADLINE_DATE = '[data-cy="service-case-deadline-date"]';
const HAVE_LENGTH = 'have.length';
const ACCORDION_ITEM = '[data-cy="accordion"] [data-cy="accordion-item"]';
const ACCORDION_ITEM_CONTENT = '[data-cy="accordion-item-content"]';

const SERVICE_CASE_DETAIL = '[data-cy="service-case-detail"]';
const SERVICE_CASE_ID = '[data-cy="service-case-id"]';
const SERVICE_CASE_DETAIL_STATUS = '[data-cy="service-case-detail"] [data-cy="service-case-status"]';
const SERVICE_CASE_PRODUCT_TYPE = '[data-cy="service-case-product-type"]';
const PRODUCTS = 'Internet, DTV, fixed line';
const ACCORDION_HEADER = '[data-cy="accordion"] [data-cy="accordion-item"] [data-cy="accordion-item-header"]';
const SERVICE_CASE_IN_PROGRESS = 'In Progress';

describe('Service Cases Overview', () => {
  beforeEach(() => cy.visit('/iframe.html?id=service-cases-components-service-case-overview--primary'));

  it('should render the service cases list', () => {
    cy.get(OPEN_SERVICE_CASES).should('exist');
    cy.get(`${OPEN_SERVICE_CASES} ${SERVICE_CASE_ITEM}`).should(HAVE_LENGTH, 6);
    cy.get(`${OPEN_SERVICE_CASES} [data-cy="service-case-status"]`)
      .eq(0)
      .should('contain.text', SERVICE_CASE_IN_PROGRESS);
    cy.get(`${OPEN_SERVICE_CASES} [data-cy="service-case-item-id"]`).eq(0).should('contain.text', '#007008');
    cy.get(CLOSED_SERVICE_CASES).should('exist');
    cy.get(`${CLOSED_SERVICE_CASES} ${SERVICE_CASE_ITEM}`).should(HAVE_LENGTH, 0);
    cy.get(CLOSED_SERVICE_CASES).get('[data-cy="service-case-item-history-toggle"]').click();
    cy.get(`${CLOSED_SERVICE_CASES} ${SERVICE_CASE_ITEM}`).should(HAVE_LENGTH, 1);
    cy.get(`${CLOSED_SERVICE_CASES} [data-cy="service-case-status"]`).eq(0).should('contain.text', 'Closed');
    cy.get(`${CLOSED_SERVICE_CASES} [data-cy="service-case-item-id"]`).eq(0).should('contain.text', '#007009');
  });

  it('should render the detail on click', () => {
    cy.get(OPEN_SERVICE_CASES).should('exist');
    cy.get(`${OPEN_SERVICE_CASES} ${SERVICE_CASE_ITEM}`).should(HAVE_LENGTH, 6);
    cy.get(SERVICE_CASE_DETAIL).should('exist');
    cy.get(SERVICE_CASE_ID).should('contain.text', '007008');
    cy.get(SERVICE_CASE_DETAIL_STATUS).should('contain.text', SERVICE_CASE_IN_PROGRESS);
    cy.get('[data-cy="service-case-detail"] [data-cy="service-case-status"] span')
      .first()
      .should('have.class', 'background-notification--success--light');
    cy.get(SERVICE_CASE_PRODUCT_TYPE).should('contain.text', PRODUCTS);
    cy.get(CREATION_DATE).should('contain.text', '9 December 2023');
    cy.get(DEADLINE_DATE).should('contain.text', '29 November 2023');
    cy.get(ACCORDION_ITEM).should(HAVE_LENGTH, 3);
    cy.get(ACCORDION_ITEM).eq(0).get(ACCORDION_ITEM_CONTENT).should('not.exist');
    cy.get(ACCORDION_HEADER).first().click();
    cy.get(ACCORDION_ITEM).eq(0).get(ACCORDION_ITEM_CONTENT).should('exist');
  });

  it('should show selected service case', () => {
    cy.get(`${OPEN_SERVICE_CASES} ${SERVICE_CASE_ITEM}`).eq(1).click();
    cy.get(SERVICE_CASE_DETAIL).should('exist');
    cy.get(SERVICE_CASE_ID).should('contain.text', '419514');
    cy.get(SERVICE_CASE_DETAIL_STATUS).should('contain.text', SERVICE_CASE_IN_PROGRESS);
    cy.get(CREATION_DATE).should('contain.text', '22 September 2023');
    cy.get(DEADLINE_DATE).should('contain.text', '-');
    cy.get(SERVICE_CASE_PRODUCT_TYPE).should('contain.text', PRODUCTS);
    cy.get(ACCORDION_ITEM).should(HAVE_LENGTH, 1);
    cy.get(ACCORDION_ITEM).eq(0).get(ACCORDION_ITEM_CONTENT).should('not.exist');
    // click the first accordion item
    cy.get(ACCORDION_HEADER).first().click();
    cy.get(ACCORDION_ITEM).eq(0).get(ACCORDION_ITEM_CONTENT).should('exist');
  });
});

describe('Service Cases Overview with Client Service flag enabled', () => {
  beforeEach(() => cy.visit('/iframe.html?id=service-cases-components-service-case-overview--primary'));

  it('should list all service cases and show details on click', () => {
    cy.get(OPEN_SERVICE_CASES).should('exist');
    cy.get(`${OPEN_SERVICE_CASES} ${SERVICE_CASE_ITEM}`).should(HAVE_LENGTH, 6);
    cy.get(`${OPEN_SERVICE_CASES} ${SERVICE_CASE_ITEM}`).eq(1).click();
    cy.get(SERVICE_CASE_DETAIL).should('exist');
    cy.get(SERVICE_CASE_ID).should('contain.text', '419514');
    cy.get(SERVICE_CASE_DETAIL_STATUS).should('contain.text', SERVICE_CASE_IN_PROGRESS);
    cy.get(CREATION_DATE).should('contain.text', '22 September 2023');
    cy.get(DEADLINE_DATE).should('contain.text', '-');
    cy.get(SERVICE_CASE_PRODUCT_TYPE).should('contain.text', PRODUCTS);
    cy.get(ACCORDION_ITEM).should(HAVE_LENGTH, 1);
    cy.get(ACCORDION_ITEM).eq(0).get(ACCORDION_ITEM_CONTENT).should('not.exist');
    // click the first accordion item
    cy.get(ACCORDION_HEADER).first().click();
    cy.get(ACCORDION_ITEM).eq(0).get(ACCORDION_ITEM_CONTENT).should('exist');
  });
});
