const PRINT_RETURN_LABEL_BUTTON = '[data-cy="header-print-button"]';
const RETURN_DEVICES_OVERVIEW_DETAIL = '[data-cy="return-devices-overview-details"] tg-return-devices-detail';
const FIRST_DEVICE = '@firstDevice';
const SECOND_DEVICE = '@secondDevice';
const DEVICE_DETAILS = '[data-cy="device-detail-prepare-package-details"]';
const DEVICE_DETAILS_STATUS = '[data-cy="device-detail-status"]';
const ADDRESS_SELECTOR = '@addressSelector';
const ADDRESS_VALUE = '[data-cy="address-value"]';
const HAVE_LENGTH = 'have.length';

describe('Return Devices Overview', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=return-devices-overview--primary');
  });

  it('should render return devices correctly and open details on click', () => {
    cy.get('[data-cy="return-devices-overview"]').should('exist');
    cy.get('[data-cy="header-info-box-text"]').should('exist');
    cy.get(RETURN_DEVICES_OVERVIEW_DETAIL).should(HAVE_LENGTH, 4);
    cy.get(RETURN_DEVICES_OVERVIEW_DETAIL).first().as('firstDevice');

    cy.get(FIRST_DEVICE).within(() => {
      cy.get(DEVICE_DETAILS).should('not.exist');
      cy.get(DEVICE_DETAILS_STATUS).should('exist').as('device-detail-status');
    });

    cy.get(RETURN_DEVICES_OVERVIEW_DETAIL)

      .last()
      .within(() => {
        cy.get(DEVICE_DETAILS).should('not.exist');
        cy.get(DEVICE_DETAILS_STATUS).should('exist').as('device-detail-status');
      });

    cy.get(FIRST_DEVICE).click();

    cy.get(FIRST_DEVICE).within(() => {
      cy.get(DEVICE_DETAILS).should('exist');
      cy.get('[data-cy="device-detail-print-button"]').as('print-button');

      cy.get('@print-button').should('exist');
      cy.get('@print-button').click();
    });

    cy.get('[data-cy="print-return-label-overlay"]').should('exist');
  });

  it('should show the return devices of the corresponding address', () => {
    cy.get('[data-cy="address-selector-click"]').should('exist').as('addressSelector');
    cy.get(ADDRESS_VALUE).contains('Darwin Loadteststraat 7606, 2800 Mechelen');

    cy.get(ADDRESS_SELECTOR).click();
    cy.get('[data-cy="address-selector-list"]').find('li').should('have.length', 2).as('addressSelectorList');

    cy.get('@addressSelectorList').last().click();

    cy.get(ADDRESS_VALUE).contains('Darwin Loadteststraat 7607, 2800 Mechelen');

    cy.get(RETURN_DEVICES_OVERVIEW_DETAIL).should(HAVE_LENGTH, 1);

    cy.get('[data-cy="device-serialnumber"]').should('have.text', '181987698715');
  });

  it('should close currently opened device details and open details of clicked device', () => {
    cy.get(RETURN_DEVICES_OVERVIEW_DETAIL).first().as('firstDevice');
    cy.get(RETURN_DEVICES_OVERVIEW_DETAIL).last().as('secondDevice');

    cy.get(FIRST_DEVICE).click();

    cy.get(FIRST_DEVICE).within(() => {
      cy.get(DEVICE_DETAILS).should('exist');
    });

    cy.get(SECOND_DEVICE).click();

    cy.get(SECOND_DEVICE).within(() => {
      cy.get(DEVICE_DETAILS).should('exist');
    });

    cy.get(FIRST_DEVICE).within(() => {
      cy.get(DEVICE_DETAILS).should('not.exist');
    });
  });

  it('should download the return label pdf with correct name when clicked on download button', () => {
    const time = new Date().getTime();
    cy.clock(new Date(time), ['Date']);

    cy.get(PRINT_RETURN_LABEL_BUTTON).click();
    cy.get('[data-cy="print-return-label-overlay-download-button"]').click();

    cy.readFile(
      `../../../dist/cypress/apps/install/return-devices-mfe-e2e/downloads/Telenet_ReturnLabel_${time}.pdf`
    ).should('exist');
  });

  it('should open the print dialog of the browser when clicked on print button', () => {
    cy.get(PRINT_RETURN_LABEL_BUTTON).click();

    cy.get('#printReturnLabel')
      .its('0.contentWindow')
      .then((iframeWindow) => {
        cy.stub(iframeWindow, 'print').as('print');
      });

    cy.get('#printReturnLabel').its('0.contentWindow').should('exist');

    cy.get('[data-cy="print-return-label-overlay-print-button"]').click();
    cy.get('@print').should('be.called');
  });
});
