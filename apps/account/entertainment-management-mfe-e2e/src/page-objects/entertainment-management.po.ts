import { Page } from '@playwright/test';

export class EntertainmentManagementPage {
  static readonly ENTERTAINMENT_MANAGEMENT = '[data-testid="entertainment-management"]';
  static readonly ENTERTAINMENT_OPTION_NAME = '[data-testid="entertainment-option-name"]';
  static readonly ENTERTAINMENT_OPTION_PRICE = '[data-testid="entertainment-option-price"]';
  static readonly ENTERTAINMENT_OPTION_LOGO = '[data-testid="entertainment-option-logo"]';
  static readonly ENTERTAINMENT_MANAGEMENT_LABEL_ACTIVE_OPTIONS =
    '[data-testid="entertainment-management-label-active-option"]';
  static readonly ENTERTAINMENT_MANAGEMENT_LABEL_STREAMING_SERVICES =
    '[data-testid="entertainment-management-label-streaming-services"]';
  static readonly ENTERTAINMENT_MANAGEMENT_LABEL_CONTENT_PACKAGES =
    '[data-testid="entertainment-management-label-content-packages"]';

  constructor(private readonly page: Page) {}

  get root() {
    return this.page.locator(EntertainmentManagementPage.ENTERTAINMENT_MANAGEMENT);
  }

  get entertainmentOptionName() {
    return this.page.locator(EntertainmentManagementPage.ENTERTAINMENT_OPTION_NAME);
  }

  get entertainmentOptionPrice() {
    return this.page.locator(EntertainmentManagementPage.ENTERTAINMENT_OPTION_PRICE);
  }

  get entertainmentOptionLogo() {
    return this.page.locator(EntertainmentManagementPage.ENTERTAINMENT_OPTION_LOGO);
  }

  get entertainmentManagementLabelActiveOptions() {
    return this.page.locator(EntertainmentManagementPage.ENTERTAINMENT_MANAGEMENT_LABEL_ACTIVE_OPTIONS);
  }

  get entertainmentManagementLabelStramingServices() {
    return this.page.locator(EntertainmentManagementPage.ENTERTAINMENT_MANAGEMENT_LABEL_STREAMING_SERVICES);
  }

  get entertainmentManagementLabelContentPackages() {
    return this.page.locator(EntertainmentManagementPage.ENTERTAINMENT_MANAGEMENT_LABEL_CONTENT_PACKAGES);
  }
}
