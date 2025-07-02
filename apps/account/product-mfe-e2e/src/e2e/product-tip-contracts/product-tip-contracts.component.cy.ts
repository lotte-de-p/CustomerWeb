function checkTipContract(index: number, planName: string, tipMrc: string, tipNrc: string, tipUsage: string) {
  cy.getElement('plan-name')
    .eq(index)
    .then((el) => expect(el.text()).eq(planName));
  cy.getElement('dropdown').eq(index).click();
  cy.getElement('tip-mrc')
    .eq(index)
    .then((el) => expect(el.text()).contains(tipMrc));
  cy.getElement('tip-nrc')
    .eq(index)
    .then((el) => expect(el.text()).contains(tipNrc));
  cy.getElement('tip-usage')
    .eq(index)
    .then((el) => expect(el.text()).contains(tipUsage));
}

function checkTipContractMobile(index: number, planName: string, tipMrc: string, tipNrc: string, tipUsage: string) {
  cy.getElement('mobile-plan-name')
    .eq(index)
    .then((el) => expect(el.text()).contains(planName));
  cy.getElement('open-mobile-dropdown').eq(0).click();
  cy.getElement('tip-mrc')
    .eq(index)
    .then((el) => expect(el.text()).contains(tipMrc));
  cy.getElement('tip-nrc')
    .eq(index)
    .then((el) => expect(el.text()).contains(tipNrc));
  cy.getElement('tip-usage')
    .eq(index)
    .then((el) => expect(el.text()).contains(tipUsage));
}

function enableMobileView() {
  cy.viewport(411, 731);
}

function checkIfTipContractsComponentExists() {
  cy.get('tg-product-tip-contracts').should('exist');
}

const planNameFirstAndSecondRow = 'Telenet Incentive Plan / TIP0000000333';
const planNameThirdAndForthRow = 'Telenet Incentive Plan / TIP000000011';
const planNameFifthRow = 'Telenet Incentive Plan 2/ TIP000000011';

describe('when i have tip contracts', () => {
  beforeEach(() => cy.visit('/iframe.html?id=products-tip-contracts--primary'));

  it('i should be able to see all my tip contracts on desktop', () => {
    checkIfTipContractsComponentExists();
    checkTipContract(0, planNameFirstAndSecondRow, '45', '9', '80');
    checkTipContract(1, planNameFirstAndSecondRow, '45', '9', '80');
    checkTipContract(2, planNameThirdAndForthRow, '10', '10', '10');
    checkTipContract(3, planNameThirdAndForthRow, '10', '10', '10');
    checkTipContract(4, planNameFifthRow, '1', '10', '10');
  });

  it('i should be able to see all my tip contracts on mobile', () => {
    enableMobileView();
    checkIfTipContractsComponentExists();
    checkTipContractMobile(0, planNameFirstAndSecondRow, '45', '9', '80');
    checkTipContractMobile(1, planNameFirstAndSecondRow, '45', '9', '80');
    checkTipContractMobile(2, planNameThirdAndForthRow, '10', '10', '10');
    checkTipContractMobile(3, planNameThirdAndForthRow, '10', '10', '10');
    checkTipContractMobile(4, planNameFifthRow, '1', '10', '10');
  });
});
