import { Page } from 'playwright/test';
import { Locator } from '@playwright/test';
import { MfeLoginComponent } from './mfe-login.component';

export class EntertainmentLocators {
  static readonly ENTERTAINMENT_DTV_BOX_OVERVIEW = '[data-cy="dtv-box-overview"]';
  static readonly DTV_BOX_DETAILS = '[data-cy="dtv-box-detail-row"]';

  static readonly LOGIN_ROOT = 'tg-login';
  static readonly TITLE = '.cmp-title';
  static readonly ADDRESS_SELECTOR = '.account-selector__list';
  static readonly DTV_BOX_PIN_RESET_NOTIFICATION = '[data-cy="dtv-box-reset-pin-notification"]';

  static readonly DTV_BOX_IMAGE = '[data-cy="dtv-box-detail-type-image"]';
  static readonly DTV_BOX_TYPE_NAME = '[data-cy="dtv-box-detail-type-name"]';
  static readonly DTV_BOX_NAME_MODEL_NUMBER = '[data-cy="dtv-box-name-model-number"]';
  static readonly DTV_BOX_MAC_ADDRESS = '[data-cy="dtv-box-detail-mac-address"]';
  static readonly DTV_BOX_SERIAL_NUMBER = '[data-cy="dtv-box-detail-serial-number"]';

  static readonly DTV_BOX_RESET_PIN_BUTTON = '[data-cy="dtv-box-reset-pin-code-button"]';
  static readonly DTV_BOX_RESET_PIN_INFO = '[data-cy="dtv-box-reset-pin-code-more-info"]';
  static readonly FEEDBACK_IFRAME = '[id="usabilla_live_button_container_iframe952625253"]';
}

export class DtvBoxOverviewComponent {
  constructor(private readonly componentRoot: Locator) {}

  get self() {
    return this.componentRoot;
  }

  get pinResetNotification() {
    return this.componentRoot.locator(EntertainmentLocators.DTV_BOX_PIN_RESET_NOTIFICATION);
  }

  get resetPinButton() {
    return this.componentRoot.locator(EntertainmentLocators.DTV_BOX_RESET_PIN_BUTTON);
  }

  get addressSelector() {
    return this.componentRoot.locator(EntertainmentLocators.ADDRESS_SELECTOR);
  }
}

export class DtvBoxDetailsComponent {
  constructor(private readonly componentRoot: Locator) {}

  get self() {
    return this.componentRoot;
  }

  get deviceImage() {
    return this.componentRoot.locator(EntertainmentLocators.DTV_BOX_IMAGE);
  }

  get serialNumber() {
    return this.componentRoot.locator(EntertainmentLocators.DTV_BOX_SERIAL_NUMBER);
  }

  get macAddress() {
    return this.componentRoot.locator(EntertainmentLocators.DTV_BOX_MAC_ADDRESS);
  }

  get modelNameAndNumber() {
    return this.componentRoot.locator(EntertainmentLocators.DTV_BOX_NAME_MODEL_NUMBER);
  }

  get typeName() {
    return this.componentRoot.locator(EntertainmentLocators.DTV_BOX_TYPE_NAME);
  }
}

export class EntertainmentPage {
  constructor(private readonly page: Page) {}

  get title() {
    return this.page.locator(EntertainmentLocators.TITLE);
  }

  get login() {
    return new MfeLoginComponent(this.page.locator(EntertainmentLocators.LOGIN_ROOT));
  }

  get dtvBoxOverview() {
    return new DtvBoxOverviewComponent(this.page.locator(EntertainmentLocators.ENTERTAINMENT_DTV_BOX_OVERVIEW));
  }

  get dtvBoxDetails() {
    return new DtvBoxDetailsComponent(this.page.locator(EntertainmentLocators.DTV_BOX_DETAILS).first());
  }
}
