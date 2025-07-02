import { Page } from '@tools/e2e';
import { Locator } from '@playwright/test';
import { MfeLoginComponent } from './mfe-login.component';

export class HardwareDiscountLocators {
  static readonly HARDWARE_DISCOUNT = '[data-testid="hardware-discount"]';
  static readonly HARDWARE_DISCOUNT_LOGIN_ROOT = 'tg-login';
  static readonly HARDWARE_DISCOUNT_OVERVIEW = 'tg-discount-overview';
  static readonly HARDWARE_DISCOUNT_DETAILS = 'tg-discount-details';
  static readonly HARDWARE_DISCOUNT_ADDITIONAL_INFO = 'tg-additional-discount-info';

  static readonly HARDWARE_DISCOUNT_HEADER_AVAILABLE = '[data-testid="hardware-discount-header-available"]';
  static readonly HARDWARE_DISCOUNT_PROMO_ICON = '[data-testid="hardware-discount-promo-icon"]';
  static readonly HARDWARE_DISCOUNT_AVAILABLE_SLOTS = '[data-testid="hardware-discount-available-slots"]';
  static readonly HARDWARE_DISCOUNT_OVERVIEW_SUBTEXT = '[data-testid="hardware-discount-overview-subtext"]';
  static readonly HARDWARE_DISCOUNT_USE_DISCOUNT_BUTTON = '[data-testid="hardware-discount-use-discount-btn"]';
  static readonly HARDWARE_DISCOUNT_TERMS_AND_CONDITIONS_TEXT =
    '[data-testid="hardware-discount-terms-and-conditions-text"]';
  static readonly HARDWARE_DISCOUNT_TERMS_AND_CONDITIONS_LINK =
    '[data-testid="hardware-discount-terms-and-conditions-link"]';

  static readonly HARDWARE_DISCOUNT_HEADER_IN_USE = '[data-testid="hardware-discount-header-in-use"]';
  static readonly HARDWARE_DISCOUNT_DEVICE_IMAGE = '[data-testid="hardware-discount-device-image"]';
  static readonly HARDWARE_DISCOUNT_NO_DEVICE_IMAGE = '[data-testid="hardware-discount-no-device-image"]';
  static readonly HARDWARE_DISCOUNT_DEVICE_BRAND = '[data-testid="hardware-discount-device-brand"]';
  static readonly HARDWARE_DISCOUNT_DEVICE_NAME = '[data-testid="hardware-discount-device-name"]';
  static readonly HARDWARE_DISCOUNT_PRICE = '[data-testid="hardware-discount-price"]';
  static readonly HARDWARE_DISCOUNT_DURATION_LEFT_BADGE = '[data-testid="hardware-discount-duration-left"]';
  static readonly HARDWARE_DISCOUNT_DELIVERED_DATE = '[data-testid="hardware-discount-delivered-date"]';
  static readonly HARDWARE_DISCOUNT_REMAINING_AMOUNT = '[data-testid="hardware-discount-remaining-amount"]';
  static readonly HARDWARE_DISCOUNT_SHOW_INVOICE_BUTTON = '[data-testid="hardware-discount-show-invoice-btn"]';
  static readonly HARDWARE_DISCOUNT_REMANINING_BUTTON = '[data-testid="hardware-discount-show-remaining-discount-btn"]';
  static readonly HARDWARE_DISCOUNT_DISCOUNT_TRACKER = '[data-testid="hardware-discount-device-discount-tracker"]';
  static readonly HARDWARE_DISCOUNT_ORDER_IN_PROGRESS_BADGE = '[data-testid="hardware-discount-order-in-progress"]';
  static readonly HARDWARE_DISCOUNT_PLANNED_DELIVERY_DATE = '[data-testid="hardware-discount-planned-delivery-date"]';
  static readonly HARDWARE_DISCOUNT_PARCEL_TRACKING_ORDER = '[data-testid="hardware-discount-parcel-tracking-order"]';
  static readonly HARDWARE_DISCOUNT_BAD_PAYER_MSG = '[data-testid="hardware-discount-bad-payer-msg"]';
  static readonly HARDWARE_DISCOUNT_DOWNLOAD_ERROR_DIALOG = '[data-testid="hardware-discount-download-error-dialog"]';

  static readonly HARDWARE_DISCOUNT_ANOTHER_DISCOUNT_ICON = '[data-testid="hardware-discount-another-discount-icon"]';
  static readonly HARDWARE_DISCOUNT_ANOTHER_DISCOUNT_INFO = '[data-testid="hardware-discount-another-discount-info"]';

  static readonly HARDWARE_DISCOUNT_PREVIOUS_BILLS_ICON = '[data-testid="hardware-discount-previous-bills-icon"]';
  static readonly HARDWARE_DISCOUNT_PREVIOUS_BILLS_TITLE = '[data-testid="hardware-discount-previous-bills-title"]';
  static readonly HARDWARE_DISCOUNT_PREVIOUS_BILLS_LINK = '[data-testid="hardware-discount-previous-bills-link"]';

  static readonly CONTRACT_DETAILS_DATE = '.steps-tracker__step__content__left';
  static readonly CONTRACT_DETAILS_ICON = '.steps-tracker__step__content__icon';
  static readonly CONTRACT_DETAILS_PRICE = '.steps-tracker__step__content__right';
}

export class HardwareDiscountOverviewComponent {
  constructor(private readonly componentRoot: Locator) {}

  get self() {
    return this.componentRoot;
  }

  get title() {
    return this.componentRoot.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_HEADER_AVAILABLE);
  }

  get promoIcon() {
    return this.componentRoot.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_PROMO_ICON);
  }

  get availableSlots() {
    return this.componentRoot.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_AVAILABLE_SLOTS);
  }

  get availableDescription() {
    return this.componentRoot.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_OVERVIEW_SUBTEXT);
  }

  get useDiscountButton() {
    return this.componentRoot.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_USE_DISCOUNT_BUTTON);
  }

  get termsAndConditionsText() {
    return this.componentRoot.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_TERMS_AND_CONDITIONS_TEXT);
  }

  get termsAndConditionsLink() {
    return this.componentRoot.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_TERMS_AND_CONDITIONS_LINK);
  }

  get badPayerMsg() {
    return this.componentRoot.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_BAD_PAYER_MSG);
  }
}

export class HardwareDiscountDetailsComponent {
  constructor(private readonly locator: Locator) {}

  get self() {
    return this.locator;
  }

  get deviceImage() {
    return this.locator.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_DEVICE_IMAGE);
  }

  get noDeviceImage() {
    return this.locator.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_NO_DEVICE_IMAGE);
  }

  get deviceBrand() {
    return this.locator.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_DEVICE_BRAND);
  }

  get deviceName() {
    return this.locator.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_DEVICE_NAME);
  }

  get price() {
    return this.locator.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_PRICE);
  }

  get durationLeftBadge() {
    return this.locator.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_DURATION_LEFT_BADGE);
  }

  get deliveredDate() {
    return this.locator.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_DELIVERED_DATE);
  }

  get remainingAmount() {
    return this.locator.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_REMAINING_AMOUNT);
  }

  get remainingButton() {
    return this.locator.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_REMANINING_BUTTON);
  }

  get showInvoiceButton() {
    return this.locator.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_SHOW_INVOICE_BUTTON);
  }

  get discountTracker() {
    return this.locator.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_DISCOUNT_TRACKER);
  }

  get orderInProgressBadge() {
    return this.locator.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_ORDER_IN_PROGRESS_BADGE);
  }

  get plannedDeliveryDate() {
    return this.locator.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_PLANNED_DELIVERY_DATE);
  }

  get parcelTrackingOrder() {
    return this.locator.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_PARCEL_TRACKING_ORDER);
  }

  get contractDetails() {
    return new ContractDetailsComponent(this.locator.locator('.steps-tracker__step'));
  }
}

export class ContractDetailsComponent {
  constructor(private readonly componentRoot: Locator) {}

  get self() {
    return this.componentRoot;
  }

  get date() {
    return this.componentRoot.locator(HardwareDiscountLocators.CONTRACT_DETAILS_DATE);
  }

  get icon() {
    return this.componentRoot.locator(HardwareDiscountLocators.CONTRACT_DETAILS_ICON);
  }

  get price() {
    return this.componentRoot.locator(HardwareDiscountLocators.CONTRACT_DETAILS_PRICE);
  }
}

export class HardwareDiscountDownloadErrorDialogComponent {
  private static readonly HARDWARE_DISCOUNT_DOWNLOAD_ERROR_DIALOG_CLOSE =
    '[data-testid="hardware-discount-download-error-dialog-close"]';

  constructor(private readonly componentRoot: Locator) {}

  get self() {
    return this.componentRoot;
  }

  get closeCross() {
    return this.componentRoot.locator('[icon=cross]');
  }

  get close() {
    return this.componentRoot.locator(
      HardwareDiscountDownloadErrorDialogComponent.HARDWARE_DISCOUNT_DOWNLOAD_ERROR_DIALOG_CLOSE
    );
  }
}

export class HardwareDiscountAnotherDiscountComponent {
  constructor(private readonly componentRoot: Locator) {}

  get self() {
    return this.componentRoot;
  }

  get icon() {
    return this.componentRoot.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_ANOTHER_DISCOUNT_ICON);
  }

  get info() {
    return this.componentRoot.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_ANOTHER_DISCOUNT_INFO);
  }
}

export class HardwareDiscountPreviousBillsComponent {
  constructor(private readonly componentRoot: Locator) {}

  get self() {
    return this.componentRoot;
  }

  get icon() {
    return this.componentRoot.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_PREVIOUS_BILLS_ICON);
  }

  get title() {
    return this.componentRoot.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_PREVIOUS_BILLS_TITLE);
  }

  get link() {
    return this.componentRoot.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_PREVIOUS_BILLS_LINK);
  }
}

export class HardwareDiscountPage {
  constructor(private readonly page: Page) {}

  get root() {
    return this.page.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT);
  }

  get login() {
    return new MfeLoginComponent(this.page.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_LOGIN_ROOT));
  }

  get hardwareDiscountOverview() {
    return new HardwareDiscountOverviewComponent(
      this.page.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_OVERVIEW)
    );
  }

  get hardwareDiscountDetailsTitle() {
    return this.page.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_HEADER_IN_USE);
  }

  get hardwareDiscountDetails() {
    return new HardwareDiscountDetailsComponent(this.page.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_DETAILS));
  }

  get hardwareDiscountAdditionalInfo() {
    return new HardwareDiscountAnotherDiscountComponent(
      this.page.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_ADDITIONAL_INFO)
    );
  }

  get hardwareDiscountPreviousBills() {
    return new HardwareDiscountPreviousBillsComponent(this.page.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT));
  }

  get hardwareDiscountNoDeviceImage() {
    return this.page.locator(HardwareDiscountPage.HARDWARE_DISCOUNT_NO_DEVICE_IMAGE);
  }

  get hardwareDiscountDownloadErrorDialog() {
    return new HardwareDiscountDownloadErrorDialogComponent(
      this.page.locator(HardwareDiscountLocators.HARDWARE_DISCOUNT_DOWNLOAD_ERROR_DIALOG)
    );
  }
  get pageError() {
    return new HardwareDiscountOverviewComponent(this.page.locator('[data-testid="hardware-discount"]'));
  }
}
