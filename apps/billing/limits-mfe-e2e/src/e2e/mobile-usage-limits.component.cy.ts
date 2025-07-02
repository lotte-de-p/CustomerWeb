const mobileUsageLimitsComponent = 'care-billing-mobile-usage-limits';
const mobileUsageLimitsMobileLineSelectorComponent = 'tg-mobile-line-selector';
const mobileUsageLimitsUpdateWarningDialog = 'care-billing-mobile-usage-limits-update-warning-dialog';
const mobileUsageLimitsMemberNotificationHeader = 'care-billing-mobile-usage-limits-member-notification-header';
const mobileUsageLimitsOutOfBundleLimitsHeader = 'care-billing-mobile-usage-limits-out-of-bundle-limits-header';
const mobileUsageLimitsOutOfBundleLimitsDetails = 'care-billing-mobile-usage-limits-out-of-bundle-limits-details';
const mobileUsageLimitsPremiumServices = 'care-billing-mobile-usage-limits-premium-services';
const mobileUsageLimitsPremiumServicesHeader = 'care-billing-mobile-usage-limits-premium-services-header';
const mobileUsageLimitsPremiumServicesNotification = 'care-billing-mobile-usage-limits-premium-limits-notification';
const mobileUsageLimitsManageLimits = 'care-billing-mobile-usage-limits-manage-limits';
const hasLength = 'have.length';
const containsText = 'contain.text';
const mobileLineSelectorMsisdn = '[data-cy="selected-mobile-line-msisdn"]';

describe('Mobile Usage Limits Component', () => {
  it('should render mobile usage limits skeleton component', () => {
    cy.visit('/iframe.html?id=mobileusagelimits-dumb-ui-skeletons-mobile-usage-limits-skeleton--skeleton');
    cy.get('[data-cy="mobile-usage-limits-skeleton"]').should('exist');
  });

  describe('Mobile Line Selector', () => {
    it('check mobile line selector', () => {
      cy.visit('/iframe.html?id=mobileusagelimits-feature');
      cy.get(mobileUsageLimitsMobileLineSelectorComponent).should('exist');
      cy.contains('[data-cy="selected-mobile-line-name"]', 'Peter').should('exist');
      cy.contains(mobileLineSelectorMsisdn, '0489 55 21 37').should('exist');
      cy.get('[data-cy="change-mobile-line"]').should('exist').click();
      cy.get('[data-cy="mobile-lines-list"] .mobile-line').should('have.length', 2).eq(1).click();
      cy.contains(mobileLineSelectorMsisdn, '0489 12 97 46').should('exist');
    });
  });

  describe('Mobile Usage Limits Content', () => {
    it('should render mobile usage section with warning', () => {
      cy.visit('/iframe.html?id=mobileusagelimits-feature-mobileusagelimits--mobile-usage-limits-with-warning');
      cy.get('[data-cy="update-warning-dialog"]').should('exist');
      cy.get(mobileUsageLimitsComponent).find(mobileUsageLimitsUpdateWarningDialog).should(hasLength, 1);
      cy.get('[data-cy="update-warning-dialog"]').should(containsText, 'Adapt your out-of-plan limit');
      cy.get('[data-cy="update-warning-dialog-confirm-button-text"]').should(containsText, 'Submit');
    });

    it('should render mobile usage section', () => {
      cy.visit('/iframe.html?id=mobileusagelimits-feature-mobileusagelimits--mobile-usage-limits-loaded');
      cy.get('[data-cy="mobile-usage-limits-out-of-bundle-section-header"]').should('exist');
      cy.get(mobileUsageLimitsComponent).find(mobileUsageLimitsOutOfBundleLimitsHeader).should(hasLength, 1);
      cy.get('[data-cy="mobile-usage-limits-out-of-bundle-section-header"]').should(
        containsText,
        'Manage your out-of-plan limit'
      );
      cy.get('[data-cy="mobile-usage-limits-out-of-bundle-section"]').should('exist');
      cy.get('[data-cy="mobile-usage-limits-out-of-bundle-current-limit"]').should(containsText, 'Current limit');
      cy.get('[data-cy="mobile-usage-limits-out-of-bundle-current-limit-price"]').should(containsText, '€20');
      cy.get(mobileUsageLimitsComponent).find(mobileUsageLimitsOutOfBundleLimitsDetails).should(hasLength, 1);

      cy.get(mobileUsageLimitsComponent).find(mobileUsageLimitsPremiumServicesHeader).should(hasLength, 1);
      cy.get(mobileUsageLimitsComponent).find(mobileUsageLimitsPremiumServices).should(hasLength, 1);
      cy.get('[data-cy="premium-services-header"]').should(hasLength, 1);
      cy.get('[data-cy="premium-services-header-description"]').should(hasLength, 1);
      cy.get(mobileUsageLimitsComponent).find(mobileUsageLimitsManageLimits).should(hasLength, 2);
    });

    it('should render mobile usage section for member customers', () => {
      cy.visit(
        '/iframe.html?id=mobileusagelimits-feature-mobileusagelimits--mobile-usage-limits-with-limits-for-member'
      );
      cy.get('[data-cy="mobile-usage-limits.member-notification-admin"]').should('exist');
      cy.get(mobileUsageLimitsComponent).find(mobileUsageLimitsMemberNotificationHeader).should(hasLength, 1);
      cy.get('[data-cy="mobile-usage-limits.member-notification-admin"]').should(
        containsText,
        'Please contact the subscription manager'
      );
      cy.get(mobileUsageLimitsComponent).find(mobileUsageLimitsPremiumServicesHeader).should(hasLength, 1);
      cy.get('[data-cy="premium-services-header"]').should(hasLength, 1);
      cy.get('[data-cy="premium-services-header-description"]').should('exist');
      cy.get(mobileUsageLimitsComponent).find(mobileUsageLimitsPremiumServicesNotification).should(hasLength, 1);
    });

    it('should display the update premium limit form when edit premium link is clicked', () => {
      cy.visit('/iframe.html?id=mobileusagelimits-feature-mobileusagelimits--mobile-usage-limits-loaded');
      cy.get(mobileUsageLimitsComponent).find(mobileUsageLimitsPremiumServices).should(hasLength, 1);
      cy.get(mobileUsageLimitsComponent).find(mobileUsageLimitsManageLimits).should(hasLength, 2);
      cy.get('[data-cy="mobile-usage-limits-manage-premium-services"]').click();
    });
  });
});
