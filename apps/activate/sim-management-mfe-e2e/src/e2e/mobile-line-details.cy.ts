import {
  RawMobileLine,
  mobileLineFactory,
  SimStatus,
  MobileLine,
  simCardFactory,
  SimType,
} from '@sim-management/data-access';
import { LoginDetails, LoginDetailsConstants } from '@telenet/ng-lib-ocapi';

const mobileLineDetailsPath = '/mobile-line-details';
const mobileLinesApiPath = '**/api/sim-management-cs/v1/mobile-lines';
const householdUsersApiPath = '**/api/sim-management-cs/v1/mobile-lines/{msisdn}/assignable-profiles';
const userDetailsApiPath = '**/ocapi/oauth/userdetails';
const patchMobileLineApiPath = '**/api/sim-management-cs/v1/mobile-lines';

const msisdnSelector = '[data-testid="sim-management-information-msisdn"]';
const pinSelector = '[data-testid="sim-management-information-pin"]';
const pukSelector = '[data-testid="sim-management-information-puk"]';
const iccidSelector = '[data-testid="sim-management-information-iccid"]';
const memberNotificationSelector = '[data-testid="sim-management-member-notification"]';
const blockActionSelector = '[data-testid="sim-management-block-action-card"]';
const partialBlockActionSelector = '[data-testid="sim-management-partial-block-action-card"]';
const reassignActionSelector = '[data-testid="sim-management-reassign-action-card"]';
const assignActionSelector = '[data-testid="sim-management-assign-action-card"]';
const unblockButton = '[data-testid="sim-management-information-unblock-link"]';
const blockDialogConfirmButtonSelector = '[data-testid="sim-management-block-dialog-confirm-button"]';
const blockDialogSelector = '[data-testid="sim-management-block-dialog"]';
const unblockDialogSelector = '[data-testid="sim-management-unblock-dialog"]';
const blockDialogCancelButtonSelector = '[data-testid="sim-management-block-dialog-cancel-button"]';
const blockDialogCloseIconSelector = '[data-testid="sim-management-block-dialog-close-icon"]';
const unblockDialogConfirmButtonSelector = '[data-testid="sim-management-unblock-dialog-confirm-button"]';
const unblockDialogCancelButtonSelector = '[data-testid="sim-management-unblock-dialog-cancel-button"]';
const unblockDialogCloseIconSelector = '[data-testid="sim-management-unblock-dialog-close-icon"]';
const mobileLineNameInputSelector = '[data-testid="sim-management-mobile-line-input"]';
const mobileLineNameLoadingIconSelector = '[data-testid="sim-management-mobile-line-name-loading-icon"]';
const mobileLineSelectorOpenButtonSelector = '[data-testid="change-mobile-line"]';
const mobileLineSelectorTitleSelector = '[data-testid="mobile-line-selector-title"]';
const assignDialogSelector = '[data-testid="sim-management-assign-dialog"]';
const assignDialogConfirmButtonSelector = '[data-testid="sim-management-assign-dialog-confirm-button"]';
const assignDialogCancelButtonSelector = '[data-testid="sim-management-assign-dialog-cancel-button"]';
const assignDialogCloseButtonSelector = '[data-testid="sim-management-assign-dialog-cancel-button"]';
const assignDialogUserNameSelector = '[data-testid="sim-management-assign-dialog-user-name"]';
const assignDialogUserRadioButtonSelector = '[data-testid="sim-management-assign-dialog-user-radio"]';
const skeletonSelector = '[data-testid="sim-management-skeleton"]';
const requestESimActionSelector = '[data-testid="sim-management-request-esim-action-card"]';
const requestPhysicalSimActionSelector = '[data-testid="sim-management-request-physical-sim-action-card"]';
const eSimSmartWatchActivationInfoActionSelector =
  '[data-testid="sim-management-esim-smartwatch-activation-info-action-card"]';
const eSimSmartWatchDeactivationActionCardSelector =
  '[data-testid="sim-management-esim-smartwatch-deactivation-action-card"]';
const eSimSmartWatchDeactivationDialogSelector = '[data-testid="sim-management-deactivate-e-sim-dialog"]';
const eSimSmartWatchDeactivationCloseIconSelector = '[data-testid="sim-management-deactivate-e-sim-dialog-close-icon"]';
const eSimSmartWatchDeactivationCancelButtonSelector =
  '[data-testid="sim-management-deactivate-e-sim-dialog-cancel-button"]';
const eSimSmartWatchDeactivateButtonSelector =
  '[data-testid="sim-management-deactivate-e-sim-dialog-deactivate-button"]';
const winkNotificationSelector = '[data-testid="sim-management-notification"]';
const selectedMobileLineSelector = '[data-testid="selected-mobile-line-name"]';
const eSimSwapOldSimTextSelector = '[data-testid="sim-management-swap-old-sim-information"]';
const eSimInformationSelector = '[data-testid="sim-management-pending-e-sim-information"]';
const eSimActivateButtonSelector = '[data-testid="sim-management-activate-esim-button"]';
const eSimStatusSelector = '[data-testid="sim-management-esim-status"]';
const whatIsESimLinkSelector = '[data-testid="sim-management-help-esim-what-is-e-sim-link"]';
const eSimDevicesSupportedLink = '[data-testid="sim-management-help-e-sim-devices-supported-link"]';

describe('Sim management Mobile line details as a manager', () => {
  beforeEach(() => {
    initializeUserDetailsInterception({ role: LoginDetailsConstants.MANAGER_ROLE });
    initializeHouseholdUsersInterception('0499999999');
    initializeMobileLinesInterception(mobileLineFactory.buildList(1));
    cy.visit(mobileLineDetailsPath);
  });

  it('should display correct mobile line details', () => {
    cy.get(skeletonSelector).should('not.exist');
    cy.get(msisdnSelector).should('have.text', '0499999999');
    cy.get(pinSelector).should('have.text', '1234');
    cy.get(pukSelector).should('have.text', '123456');
    cy.get(iccidSelector).should('have.text', '123456789');
    cy.get(mobileLineSelectorOpenButtonSelector).should('not.exist');
    cy.get(winkNotificationSelector).should('not.exist');
  });

  it('should hide member notification', () => {
    cy.get(memberNotificationSelector).should('not.exist');
  });

  it('should show block & hide unblock', () => {
    cy.get(blockActionSelector).should('exist');
    cy.get(unblockButton).should('not.exist');
  });

  it('should show reassign & hide assign', () => {
    cy.get(reassignActionSelector).should('exist');
    cy.get(assignActionSelector).should('not.exist');
  });
});

describe('Sim management Mobile line details as a contract holder', () => {
  beforeEach(() => {
    initializeUserDetailsInterception({ role: LoginDetailsConstants.CONTRACT_HOLDER_ROLE });
    initializeHouseholdUsersInterception('0499999999');
    initializeMobileLinesInterception(mobileLineFactory.buildList(1));
    cy.visit(mobileLineDetailsPath);
  });

  it('should hide member notification', () => {
    cy.get(memberNotificationSelector).should('not.exist');
  });

  it('should show block & hide unblock', () => {
    cy.get(blockActionSelector).should('exist');
    cy.get(unblockButton).should('not.exist');
  });

  it('should show reassign & hide assign', () => {
    cy.get(reassignActionSelector).should('exist');
    cy.get(assignActionSelector).should('not.exist');
  });
});

describe('Sim management Mobile line details as a member', () => {
  beforeEach(() => {
    initializeUserDetailsInterception({ role: LoginDetailsConstants.MEMBER_ROLE });
    initializeHouseholdUsersInterception('0499999999');
    initializeMobileLinesInterception(mobileLineFactory.buildList(1));
    cy.visit(mobileLineDetailsPath);
  });

  it('should display correct mobile line details', () => {
    cy.get(memberNotificationSelector).should('exist');
  });

  it('should show block & hide unblock', () => {
    cy.get(blockActionSelector).should('exist');
    cy.get(unblockButton).should('not.exist');
  });

  it('should hide reassign & assign', () => {
    cy.get(reassignActionSelector).should('not.exist');
    cy.get(assignActionSelector).should('not.exist');
  });

  it('should show partial block', () => {
    cy.get(partialBlockActionSelector).should('exist');
  });

  it('should show esim activation info', () => {
    cy.get(eSimSmartWatchActivationInfoActionSelector).should('exist');
  });
});

describe('Mobile line selector & information is not shown', () => {
  beforeEach(() => {
    initializeUserDetailsInterception({ role: LoginDetailsConstants.MANAGER_ROLE });
    cy.visit(mobileLineDetailsPath);
  });

  it('should show error message when failed to retrieve mobile lines', () => {
    cy.intercept('GET', mobileLinesApiPath, {
      statusCode: 500,
    });
    cy.visit(mobileLineDetailsPath);

    cy.get(winkNotificationSelector).should('exist');
    cy.get(selectedMobileLineSelector).should('not.exist');
  });

  it('should show error message when no active mobile lines present', () => {
    initializeMobileLinesInterception([]);
    cy.visit(mobileLineDetailsPath);

    cy.get(winkNotificationSelector).should('exist');
    cy.get(selectedMobileLineSelector).should('not.exist');
  });
});

describe('Block & Unblock', () => {
  beforeEach(() => {
    initializeUserDetailsInterception({ role: LoginDetailsConstants.MANAGER_ROLE });
    initializeHouseholdUsersInterception('0499999999');
    initializeMobileLinesInterception(mobileLineFactory.buildList(1));
    initializeSetMobileLine('0499999999', { isSuspended: true });
    cy.visit(mobileLineDetailsPath);
  });

  it('should handle block functionality correctly & show/hide block/unblock correctly', () => {
    // should show block action because selected mobile line is not suspended
    cy.get(blockActionSelector).should('exist');

    // should hide unblock button because selected mobile line is not suspended
    cy.get(unblockButton).should('not.exist');

    // block mobile line
    cy.get(blockActionSelector).click();
    cy.get(blockDialogSelector).should('exist');
    cy.get(blockDialogConfirmButtonSelector).click();

    // Skeleton loader should be hidden after block action is completed
    cy.get(skeletonSelector).should('not.exist');
    cy.get(winkNotificationSelector).should('exist');

    cy.get(blockDialogSelector).should('not.exist');

    // block action is hidden now, and unblock action is shown
    cy.get(blockActionSelector).should('not.exist');
    cy.get(unblockButton).should('exist');

    // unblock mobile line
    cy.get(unblockButton).click();
    cy.get(unblockDialogConfirmButtonSelector).click();

    // Skeleton loader should be hidden after unblock action is completed
    cy.get(skeletonSelector).should('not.exist');
    cy.get(winkNotificationSelector).should('exist');

    // block action is visible, and unblock button is hidden
    cy.get(blockActionSelector).should('exist');
    cy.get(unblockButton).should('not.exist');
  });

  it('should open an external link when click on partial block', () => {
    cy.get(partialBlockActionSelector).should('exist');
    cy.get(partialBlockActionSelector).click();
    cy.url().should('contain', '/mobile?msisdn=0499999999#/nav_item=barring.html');
  });

  it('should open and close block/unblock dialog when clicking corresponding buttons or icons', () => {
    // open block dialog, then close & cancel it
    cy.get(blockActionSelector).click();
    cy.get(blockDialogSelector).should('exist');

    cy.get(blockDialogCancelButtonSelector).click();
    cy.get(blockDialogSelector).should('not.exist');

    cy.get(blockActionSelector).click();
    cy.get(blockDialogCloseIconSelector).click();
    cy.get(blockDialogSelector).should('not.exist');

    // block mobile line
    cy.get(blockActionSelector).click();
    cy.get(blockDialogConfirmButtonSelector).click();

    // open unblock dialog, then close & cancel it
    cy.get(unblockButton).click();
    cy.get(unblockDialogSelector).should('exist');

    cy.get(unblockDialogCancelButtonSelector).click();
    cy.get(unblockDialogSelector).should('not.exist');

    cy.get(unblockButton).click();
    cy.get(unblockDialogCloseIconSelector).click();
    cy.get(unblockDialogSelector).should('not.exist');
  });
});

describe('Assign & Reassign', () => {
  beforeEach(() => {
    initializeUserDetailsInterception({ role: LoginDetailsConstants.MANAGER_ROLE });
    initializeHouseholdUsersInterception('0499999999');
    initializeMobileLinesInterception(mobileLineFactory.buildList(1));
    initializeSetMobileLine('0499999999', { isSuspended: false });
    cy.visit(mobileLineDetailsPath);
  });

  it('should handle assign/reassign functionality correctly & show/hide assign/reassign correctly', () => {
    // should show reassign action because selected mobile line is not suspended, assigned & user is a manager
    cy.get(reassignActionSelector).should('exist');
    cy.get(assignActionSelector).should('not.exist');

    // open and reassign mobile line
    cy.get(reassignActionSelector).click();

    cy.get(assignDialogUserNameSelector).first().click();
    cy.get(assignDialogUserRadioButtonSelector).first().should('be.checked');

    cy.get(assignDialogConfirmButtonSelector).click();

    // Skeleton loader should be hidden after assign action is completed
    cy.get(skeletonSelector).should('not.exist');
    cy.get(winkNotificationSelector).should('exist');

    cy.get(assignDialogSelector).should('not.exist');
  });

  it('should open and close assign dialog when clicking corresponding buttons or icons', () => {
    cy.get(reassignActionSelector).click();
    cy.get(assignDialogSelector).should('exist');

    cy.get(assignDialogCancelButtonSelector).click();
    cy.get(assignDialogSelector).should('not.exist');

    cy.get(reassignActionSelector).click();
    cy.get(assignDialogCloseButtonSelector).click();
    cy.get(assignDialogSelector).should('not.exist');
  });
});

describe('Change mobile line name', () => {
  beforeEach(() => {
    initializeUserDetailsInterception({ role: LoginDetailsConstants.MANAGER_ROLE });
    initializeHouseholdUsersInterception('0499999999');
    initializeMobileLinesInterception(mobileLineFactory.buildList(1));
    initializeSetMobileLine('0499999999', { name: 'Test Line123' });
    cy.visit(mobileLineDetailsPath);
  });

  it('should update mobile line name correctly', () => {
    cy.get(mobileLineNameInputSelector).should('exist');
    cy.get(mobileLineNameLoadingIconSelector).should('exist');
    cy.get(mobileLineNameInputSelector).should('have.value', 'Test Line');
    cy.get(mobileLineNameInputSelector).type('123');
    cy.get(mobileLineNameInputSelector).should('have.value', 'Test Line123');
  });
});

describe('Request a new eSim', () => {
  beforeEach(() => {
    initializeUserDetailsInterception({ role: LoginDetailsConstants.MANAGER_ROLE });
    initializeHouseholdUsersInterception('0499999999');
    initializeMobileLinesInterception(mobileLineFactory.buildList(1));
    initializeSetMobileLine('0499999999', { name: 'Test Line123' });
    cy.visit(mobileLineDetailsPath);
  });

  it('should show the request esim action card when logged in as a manager and no pending esim in mobile lines, then redirect correctly', () => {
    initializeUserDetailsInterception({ role: LoginDetailsConstants.MANAGER_ROLE });
    cy.visit(mobileLineDetailsPath);
    cy.get(requestESimActionSelector).should('exist');
    cy.get(requestESimActionSelector).click();
    cy.url().should('contain', '/sms-verification');
  });

  it('should not show the request esim action card when logged in as a member', () => {
    initializeUserDetailsInterception({ role: LoginDetailsConstants.MEMBER_ROLE });
    cy.visit(mobileLineDetailsPath);
    cy.get(requestESimActionSelector).should('not.exist');
  });

  it('should not show the request esim action card when there is a pending esim in mobile lines', () => {
    initializeUserDetailsInterception({ role: LoginDetailsConstants.MANAGER_ROLE });
    initializeMobileLinesInterception([
      mobileLineFactory.build({
        name: 'Test Line 1',
        simCards: [
          simCardFactory.build(),
          simCardFactory.build({
            type: SimType.E_SIM,
            status: SimStatus.ACTIVATION_IN_PROGRESS,
          }),
        ],
      }),
    ]);
    cy.visit(mobileLineDetailsPath);
    cy.get(requestESimActionSelector).should('not.exist');
  });
});

describe('Request a new Physical Sim', () => {
  beforeEach(() => {
    initializeUserDetailsInterception({ role: LoginDetailsConstants.MANAGER_ROLE });
    initializeHouseholdUsersInterception('0499999999');
    initializeMobileLinesInterception(mobileLineFactory.buildList(1));
    initializeSimSwap('0499999999');
    cy.visit(mobileLineDetailsPath);
  });

  it('should show the request new physical sim action card when the mobile line is not suspended ', () => {
    cy.get(requestPhysicalSimActionSelector).should('exist');
    cy.get(requestPhysicalSimActionSelector).click();
    cy.url().should(
      'contain',
      '/residential/nl/sales?flow=review&pid=0499999999&sid=9170345405813555000&statuses=ADD&intent=sim-add&source=sim-add'
    );
  });

  it('should show the request new physical sim action card when the mobile line is not suspended and sim card is lost', () => {
    initializeMobileLinesInterception([
      mobileLineFactory.build({
        name: 'Test Line 2',
        simCards: [simCardFactory.build({ status: SimStatus.SIM_CARD_LOST })],
      }),
    ]);
    cy.visit(mobileLineDetailsPath);

    cy.get(requestPhysicalSimActionSelector).should('exist');
  });

  it('should not show the request new physical sim action card when the mobile line is suspended', () => {
    initializeUserDetailsInterception({ role: LoginDetailsConstants.MANAGER_ROLE });
    initializeMobileLinesInterception([
      mobileLineFactory.build({
        name: 'Test Line 1',
        suspended: true,
      }),
    ]);
    cy.visit(mobileLineDetailsPath);
    cy.get(requestPhysicalSimActionSelector).should('not.exist');
  });

  it('should not show the request new physical sim action card when the sim card is in activation in progress', () => {
    initializeUserDetailsInterception({ role: LoginDetailsConstants.MANAGER_ROLE });
    initializeMobileLinesInterception([
      mobileLineFactory.build({
        name: 'Test Line 2',
        simCards: [simCardFactory.build({ type: SimType.PHYSICAL_SIM, status: SimStatus.ACTIVATION_IN_PROGRESS })],
      }),
    ]);
    cy.visit(mobileLineDetailsPath);
    cy.get(requestPhysicalSimActionSelector).should('not.exist');
  });
});

describe('Mobile line selector', () => {
  beforeEach(() => {
    initializeUserDetailsInterception({ role: LoginDetailsConstants.MEMBER_ROLE });
    initializeHouseholdUsersInterception('0499001111');
    initializeHouseholdUsersInterception('0499001112');
    initializeMobileLinesInterception([
      mobileLineFactory.build({
        tariffPlan: 'Test Plan 1',
        name: 'Test Line 1',
        msisdn: '0499001111',
      }),
      mobileLineFactory.build({
        tariffPlan: 'Test Plan 2',
        name: 'Test Line 2',
        msisdn: '0499001112',
      }),
    ]);
    cy.visit(mobileLineDetailsPath);
  });

  it('should display first msisdn as default', () => {
    cy.get(msisdnSelector).should('have.text', '0499001111');
    cy.get(mobileLineSelectorTitleSelector).should('exist');
    cy.get(mobileLineSelectorOpenButtonSelector).should('exist');
  });

  it('should display msisdn of selected mobile line after selecting other line', () => {
    cy.get(mobileLineSelectorOpenButtonSelector).click();
    cy.get('[data-testid="mobile-line-selector-option-0499001112"]').click();
    cy.get(msisdnSelector).should('have.text', '0499001112');
  });
});

describe('Activate for smartwatch', () => {
  beforeEach(() => {
    initializeUserDetailsInterception({ role: LoginDetailsConstants.MANAGER_ROLE });
    initializeHouseholdUsersInterception('0499001111');
  });

  it('should display esim activation info card for non suspended, eligible for esim mobile line with active sim card', () => {
    initializeMobileLinesInterception([
      mobileLineFactory.build({
        name: 'Test Line 1',
        eSimAvailable: true,
        suspended: false,
        status: SimStatus.ACTIVE,
      }),
      mobileLineFactory.build({
        name: 'Test Line 2',
        eSimAvailable: false,
        status: SimStatus.ACTIVE,
      }),
      mobileLineFactory.build({
        name: 'Test Line 3',
        eSimAvailable: true,
        status: SimStatus.ACTIVATION_IN_PROGRESS,
      }),
    ]);
    cy.visit(mobileLineDetailsPath);
    cy.get(eSimSmartWatchActivationInfoActionSelector).should('exist');
    cy.get(eSimSmartWatchActivationInfoActionSelector).click();
    cy.url().should('contain', '/klantenservice/mobiel-en-vast/simkaart-en-toestellen/alles-over-telenet-one-number');
  });

  it('should not display esim activation info card for suspended mobile line', () => {
    initializeMobileLinesInterception([
      mobileLineFactory.build({
        tariffPlan: 'Test Plan 1',
        name: 'Test Line 1',
        msisdn: '0499001111',
        eSimAvailable: true,
        suspended: true,
        status: SimStatus.ACTIVE,
      }),
    ]);
    cy.visit(mobileLineDetailsPath);
    cy.get(eSimSmartWatchActivationInfoActionSelector).should('not.exist');
  });

  it('should not display esim activation info card when there is a in progress esim mobile line present', () => {
    initializeMobileLinesInterception([
      mobileLineFactory.build({
        name: 'Test Line 1',
        eSimAvailable: true,
        suspended: false,
        status: SimStatus.ACTIVE,
      }),
      mobileLineFactory.build({
        name: 'Test Line 2',
        eSimAvailable: false,
        status: SimStatus.ACTIVE,
      }),
      mobileLineFactory.build({
        name: 'Test Line 3',
        eSimAvailable: true,
        status: SimStatus.ACTIVATION_IN_PROGRESS,
        simCards: [simCardFactory.build({ type: SimType.E_SIM })],
      }),
    ]);
    cy.visit(mobileLineDetailsPath);
    cy.get(eSimSmartWatchActivationInfoActionSelector).should('not.exist');
  });
});

describe('Deactivate E-Sim for smartwatch', () => {
  beforeEach(() => {
    initializeUserDetailsInterception({ role: LoginDetailsConstants.MANAGER_ROLE });
  });

  it('should display deactivate for smartwatch action card for non suspended, eligible for esim mobile line with active e sim', () => {
    initializeMobileLinesInterception([
      mobileLineFactory.build({
        name: 'Test Line 1',
        eSimAvailable: true,
        suspended: false,
        status: SimStatus.ACTIVE,
        simCards: [simCardFactory.build({ type: SimType.E_SIM, status: SimStatus.ACTIVE })],
      }),
    ]);
    cy.visit(mobileLineDetailsPath);
    cy.get(eSimSmartWatchDeactivationActionCardSelector).should('exist');
    cy.get(eSimSmartWatchDeactivationActionCardSelector).click();
    cy.get(eSimSmartWatchDeactivationDialogSelector).should('exist');
    cy.get(eSimSmartWatchDeactivationCloseIconSelector).should('exist');
    cy.get(eSimSmartWatchDeactivationCancelButtonSelector).should('exist');
    cy.get(eSimSmartWatchDeactivateButtonSelector).should('exist');
    cy.get(eSimSmartWatchDeactivateButtonSelector).click();
    cy.get(eSimSmartWatchDeactivationDialogSelector).should('not.exist');
  });

  beforeEach(() => {
    initializeUserDetailsInterception({ role: LoginDetailsConstants.MANAGER_ROLE });
    initializeHouseholdUsersInterception('0499001111');
  });

  it('should not display deactivate esim for smartwatch info card for non suspended, eligible for esim mobile line with active sim card', () => {
    initializeMobileLinesInterception([
      mobileLineFactory.build({
        name: 'Test Line 1',
        eSimAvailable: true,
        suspended: false,
        status: SimStatus.ACTIVE,
        simCards: [simCardFactory.build({ type: SimType.PHYSICAL_SIM, status: SimStatus.ACTIVE })],
      }),
    ]);
    cy.visit(mobileLineDetailsPath);
    cy.get(eSimSmartWatchActivationInfoActionSelector).should('not.exist');
  });
});

describe('ESim Swap in Progress', () => {
  beforeEach(() => {
    initializeUserDetailsInterception({ role: LoginDetailsConstants.MANAGER_ROLE });
    initializeHouseholdUsersInterception('0499001111');
    cy.visit(mobileLineDetailsPath);
  });

  it('should display esim information card with pending status when there is a pending sim card and no qr code value', () => {
    initializeMobileLinesInterception([
      mobileLineFactory.build({
        name: 'Test Line 1',
        eSimAvailable: true,
        suspended: false,
        status: SimStatus.ACTIVE,
        simCards: [
          simCardFactory.build({ type: SimType.PHYSICAL_SIM }),
          simCardFactory.build({ type: SimType.E_SIM, status: SimStatus.ACTIVATION_IN_PROGRESS }),
        ],
      }),
    ]);
    cy.visit(mobileLineDetailsPath);

    cy.get(eSimInformationSelector).should('exist');
    cy.get(eSimSwapOldSimTextSelector).should('exist');
    cy.get(msisdnSelector).should('not.exist');
    cy.get(eSimActivateButtonSelector).should('not.exist');
    cy.get(eSimStatusSelector).should('exist');
    cy.get(eSimStatusSelector).should('have.class', 'status-indicator--warning');
  });

  it('should display esim information card with ready status when there is a pending sim card with qr code value', () => {
    initializeMobileLinesInterception([
      mobileLineFactory.build({
        name: 'Test Line 1',
        eSimAvailable: true,
        suspended: false,
        status: SimStatus.ACTIVE,
        simCards: [
          simCardFactory.build({ type: SimType.PHYSICAL_SIM }),
          simCardFactory.build({
            type: SimType.E_SIM,
            status: SimStatus.ACTIVATION_IN_PROGRESS,
            eSimProfileData: 'something',
          }),
        ],
      }),
    ]);
    cy.visit(mobileLineDetailsPath);

    cy.get(eSimInformationSelector).should('exist');
    cy.get(eSimSwapOldSimTextSelector).should('exist');
    cy.get(msisdnSelector).should('not.exist');
    cy.get(eSimActivateButtonSelector).should('exist');
    cy.get(eSimStatusSelector).should('exist');
    cy.get(eSimStatusSelector).should('have.class', 'status-indicator--positive');
  });
});

describe('ESim Swap in Progress', () => {
  beforeEach(() => {
    initializeUserDetailsInterception({ role: LoginDetailsConstants.MANAGER_ROLE });
    initializeHouseholdUsersInterception('0499999999');
    initializeMobileLinesInterception([
      mobileLineFactory.build({
        name: 'Test Line 1',
        eSimAvailable: false,
        suspended: false,
        status: SimStatus.ACTIVE,
        simCards: [
          simCardFactory.build({ type: SimType.PHYSICAL_SIM, status: SimStatus.ACTIVE }),
          simCardFactory.build({
            type: SimType.E_SIM,
            status: SimStatus.ACTIVATION_IN_PROGRESS,
            eSimProfileData: 'something',
          }),
        ],
      }),
    ]);
    cy.visit(mobileLineDetailsPath);
  });

  it('should display sim information card with ready for activation when there is a pending sim card', () => {
    cy.get(eSimInformationSelector).should('exist');
    cy.get(eSimActivateButtonSelector).should('exist');
    cy.get(eSimStatusSelector).should('have.class', 'status-indicator--positive');
  });

  it('should go to correct url when clicking activate button for pending esim', () => {
    cy.get(eSimActivateButtonSelector).should('exist');
    cy.get(eSimActivateButtonSelector).click();
    cy.url().should('contain', 'eSimProfileData=something&pin=1234&puk=123456');
  });
});

describe('Help with eSIM', () => {
  beforeEach(() => {
    initializeUserDetailsInterception({});
    initializeMobileLinesInterception([mobileLineFactory.build()]);
    cy.visit(mobileLineDetailsPath);
  });

  it('should display help with e-sim card containing 2 links', () => {
    cy.get(whatIsESimLinkSelector).should('exist');
    cy.get(eSimDevicesSupportedLink).click();
  });

  it('should redirect to correct URL when clicking links', () => {
    cy.get(whatIsESimLinkSelector).click();
    cy.url().should('contain', '/mobiel-en-vast/simkaart-en-toestellen/alles-over-esim-voor-smartphones');
    cy.go('back');
    cy.get(eSimDevicesSupportedLink).click();
    cy.url().should('contain', '/content/www-telenet-touch/nl/producten/mobiel/esim#checkdevice');
  });
});

function initializeSetMobileLine(msisdn: string, changes: Partial<MobileLine>): void {
  cy.intercept('PATCH', patchMobileLineApiPath + '/' + msisdn, {
    statusCode: 200,
    body: mobileLineFactory.build(changes),
  });
}

function initializeSimSwap(msisdn: string): void {
  cy.intercept('POST', mobileLinesApiPath + '/' + msisdn + '/swap-sim/sim', {
    statusCode: 200,
    body: '9170345405813555000',
  });
}

function initializeMobileLinesInterception(mobileLines: RawMobileLine[]): void {
  cy.intercept('GET', mobileLinesApiPath, {
    statusCode: 200,
    body: mobileLines,
  });
}

function initializeHouseholdUsersInterception(msisdn: string): void {
  cy.intercept('GET', householdUsersApiPath.replace('{msisdn}', msisdn), {
    statusCode: 200,
    body: [
      {
        firstName: 'Zatte',
        lastName: 'Rita',
        identityId: '123456789',
        msisdn: '0469441314',
      },
      {
        firstName: 'Fré',
        lastName: 'Van Zakkemakke',
        identityId: '987654321',
        msisdn: null,
      },
    ],
  });
}

function initializeUserDetailsInterception(params: Partial<LoginDetails>) {
  cy.intercept('GET', userDetailsApiPath, {
    statusCode: 200,
    body: {
      customer_number: '1209003924',
      identity_id: '418948108',
      username: 'Manager_1209003924_csfsis@telenetgroup.be',
      login_alias: 'bbaae42e-054f-47d9-864e-66a1b78773bc',
      first_name: 'William manager',
      last_name: 'Blanc',
      scopes: ['D_simcarddetails'],
      explicit_login: true,
      narrowed_scope: false,
      bss_system: 'NETCRACKER',
      auth_age: 264874,
      is_pid: true,
      role: params.role || 'MANAGER',
    },
  });
}
