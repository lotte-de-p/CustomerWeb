import { Locator, Page } from 'playwright/test';
import { MfeLoginComponent } from './mfe-login.component';
import NotificationBannerComponent from './notificationBanner.component';
import { BarringsGroupName } from '../support/enum/barrings-group-name.enum';
import { MobileLineSelectorComponent } from './mobileLineSelector.component';

export class BarringsLabelKeys {
  static readonly GENERAL = 'ng.mobile-barrings.group.title.general';
  static readonly ROAMING = 'ng.mobile-barrings.group.title.roaming';
  static readonly PREMIUM_VOICE = 'ng.mobile-barrings.group.title.premium-voice';
  static readonly PREMIUM_SMS = 'ng.mobile-barrings.group.title.premium-sms';
  static readonly PAY_BY_MOBILE = 'ng.mobile-barrings.group.title.pay-by-mobile';

  static readonly GENERAL_BARRINGS_DESCRIPTION = 'ng.mobile-barrings.group.description.general';
  static readonly ROAMING_BARRINGS_DESCRIPTION = 'ng.mobile-barrings.group.description.roaming';
  static readonly PREMIUM_VOICE_BARRINGS_DESCRIPTION = 'ng.mobile-barrings.group.description.premium-voice';
  static readonly PREMIUM_SMS_BARRINGS_DESCRIPTION = 'ng.mobile-barrings.group.description.premium-sms';
  static readonly PAY_BY_MOBILE_BARRINGS_DESCRIPTION = 'ng.mobile-barrings.group.description.pay-by-mobile';

  static readonly CURRENT_BARRINGS = 'ng.mobile-barrings.group.current-bar';
  static readonly NO_BARRINGS_RESTRICTIONS = 'ng.mobile-barrings.group.no-restrictions';
  static readonly NO_BARRINGS_RESTRICTIONS_ROAMING = 'ng.mobile-barrings.barring-name.roaming-data-guard';

  static readonly EDIT_BARRINGS_BUTTON = 'ng.mobile-barrings.selector-button';
  static readonly SAVE_BARRINGS_BUTTON = 'ng.mobile-barrings.selector.save';
  static readonly CONFIRMATION_SAVE_BARRINGS_BUTTON = 'ng.mobile-barrings.add-warning-save';
  static readonly BARRING_UPDATE_FAIL = 'ng.mobile-barrings.save-error';
  static readonly CANCEL_BARRINGS_BUTTON = 'ng.mobile-barrings.selector.cancel';
  static readonly CONFIRMATION_BARRINGS_TITLE = 'ng.mobile-barrings.add-warning';

  static readonly GENERAL_BARRINGS_ALL_SERVICES = 'ng.mobile-barrings.barring-name.all-incoming-and-outgoing';
  static readonly GENERAL_BARRINGS_INCOMING_CALLS = 'ng.mobile-barrings.barring-name.incoming-calls';
  static readonly GENERAL_BARRINGS_OUTGOING_CALLS = 'ng.mobile-barrings.barring-name.outgoing-calls';
  static readonly GENERAL_BARRINGS_INCOMING_SMS = 'ng.mobile-barrings.barring-name.incoming-texts';
  static readonly GENERAL_BARRINGS_OUTGOING_SMS = 'ng.mobile-barrings.barring-name.outgoing-texts';
  static readonly GENERAL_BARRINGS_MMS = 'ng.mobile-barrings.barring-name.mms';
  static readonly GENERAL_BARRINGS_MOBILE_DATA = 'ng.mobile-barrings.barring-name.mobile-data';
  static readonly GENERAL_BARRINGS_INTERNATIONAL_CALLS_FROM_BELGIUM =
    'ng.mobile-barrings.barring-name.international-calls-from-belgium';

  static readonly ROAMING_BARRINGS_ALL_SERVICES =
    'ng.mobile-barrings.barring-name.all-incoming-and-outgoing-while-roaming';
  static readonly ROAMING_BARRINGS_INCOMING_CALLS = 'ng.mobile-barrings.barring-name.incoming-calls-while-roaming';
  static readonly ROAMING_BARRINGS_OUTGOING_CALLS = 'ng.mobile-barrings.barring-name.outgoing-calls-while-roaming';
  static readonly ROAMING_BARRINGS_MOBILE_DATA = 'ng.mobile-barrings.barring-name.roaming-data';
  static readonly ROAMING_BARRINGS_MOBILE_DATA_EXCESS_AMOUNT = 'ng.mobile-barrings.barring-name.roaming-data-guard';

  static readonly PREMIUM_VOICE_BARRINGS_RATE_NUMBERS = 'ng.mobile-barrings.barring-name.all-premium-rate-numbers';
  static readonly PREMIUM_VOICE_BARRINGS_EROTIC_SERVICES =
    'ng.mobile-barrings.barring-name.premium-rate-erotic-services';
  static readonly PREMIUM_VOICE_BARRINGS_GAMES_ETC =
    'ng.mobile-barrings.barring-name.premium-rate-services-for-games-etc';
  static readonly PREMIUM_VOICE_BARRINGS_TELEVISION_GAMES =
    'ng.mobile-barrings.barring-name.premium-rate-television-games';

  static readonly PREMIUM_SMS_BARRINGS_GAMES_ETC = 'ng.mobile-barrings.barring-name.texts-for-games-etc';
  static readonly PREMIUM_SMS_BARRINGS_PAYMENTS =
    'ng.mobile-barrings.barring-name.texts-for-making-payments-for-de-lijn-etc';
  static readonly PREMIUM_SMS_BARRINGS_EROTIC_SERVICES = 'ng.mobile-barrings.barring-name.texts-for-erotic-services-18';
  static readonly PREMIUM_SMS_BARRINGS_FREE_SERVICES = 'ng.mobile-barrings.barring-name.texts-for-free-services';

  static readonly PAY_BY_MOBILE_BARRINGS = 'ng.mobile-barrings.barring-name.pay-by-mobile';
}

export class BarringsPage {
  readonly login: MfeLoginComponent;
  readonly mobileLineSelector: MobileLineSelectorComponent;
  readonly noActiveProductBanner: NotificationBannerComponent;
  readonly backendErrorBanner: NotificationBannerComponent;
  readonly errorBanner: NotificationBannerComponent;
  readonly notificationBanner: NotificationBannerComponent;
  readonly BARRINGS_GROUP = 'tg-barring';

  constructor(private readonly page: Page) {
    this.login = new MfeLoginComponent(this.page.locator('tg-login'));
    this.mobileLineSelector = new MobileLineSelectorComponent(this.page.locator('tg-mobile-line-selector'));
    this.noActiveProductBanner = new NotificationBannerComponent(
      this.page.locator('tg-mobile-activation-in-progress-notification')
    );
    this.backendErrorBanner = new NotificationBannerComponent(this.page.locator('.notification--errorfield'));
    this.errorBanner = new NotificationBannerComponent(this.page.locator('tg-error-notification'));
    this.notificationBanner = new NotificationBannerComponent(
      this.page.locator('[class^="background-notification--"]')
    );
  }

  generalBarringsGroup(barringsGroupIndex: number = BarringsGroupName.General.valueOf()) {
    return new BarringsGroupComponent(
      this.page.locator(this.BARRINGS_GROUP).nth(barringsGroupIndex),
      BarringsGroupName.General
    );
  }

  roamingBarringsGroup(barringsGroupIndex: number = BarringsGroupName.Roaming.valueOf()) {
    return new BarringsGroupComponent(
      this.page.locator(this.BARRINGS_GROUP).nth(barringsGroupIndex),
      BarringsGroupName.Roaming
    );
  }

  premiumVoiceBarringsGroup(barringsGroupIndex: number = BarringsGroupName.PremiumVoice.valueOf()) {
    return new BarringsGroupComponent(
      this.page.locator(this.BARRINGS_GROUP).nth(barringsGroupIndex),
      BarringsGroupName.PremiumVoice
    );
  }

  premiumSmsBarringsGroup(barringsGroupIndex: number = BarringsGroupName.PremiumSms.valueOf()) {
    return new BarringsGroupComponent(
      this.page.locator(this.BARRINGS_GROUP).nth(barringsGroupIndex),
      BarringsGroupName.PremiumSms
    );
  }

  payByMobileBarringsGroup(barringsGroupIndex: number = BarringsGroupName.PayByMobile.valueOf()) {
    return new BarringsGroupComponent(
      this.page.locator(this.BARRINGS_GROUP).nth(barringsGroupIndex),
      BarringsGroupName.PayByMobile
    );
  }
}

export class BarringsGroupComponent {
  readonly self: Locator;
  readonly notificationBanner: NotificationBannerComponent;
  readonly title: Locator;
  readonly description: Locator;
  readonly currentBarringsTitle: Locator;
  readonly currentBarringsDescription: Locator;
  readonly editBarringsButton: Locator;

  groupIndex: number;
  editSideSheet: EditBarringsSideSheetComponent;
  confirmationSideSheet: EditBarringsSideSheetComponent;

  constructor(
    private readonly componentRoot: Locator,
    groupName: BarringsGroupName
  ) {
    this.groupIndex = groupName.valueOf();
    this.self = this.componentRoot;
    this.notificationBanner = new NotificationBannerComponent(
      this.self.locator('[class^="background-notification--"]')
    );
    this.title = this.componentRoot.locator('.barring-header > .title');
    this.description = this.componentRoot.locator('.barring-details > .barring-text');
    this.currentBarringsTitle = this.componentRoot.locator('.barring-details > .current-barring-title');
    this.currentBarringsDescription = this.componentRoot.locator('.barring-details > .current-barring');
    this.editBarringsButton = this.componentRoot.locator('.barring-header > tg-barring-selector');
    this.editSideSheet = new EditBarringsSideSheetComponent(this.self.locator('tg-slide-menu'), 'edit');
    this.confirmationSideSheet = new EditBarringsSideSheetComponent(this.self.locator('tg-slide-menu'), 'confirmation');
  }

  getEditSideSheetComponent(): EditBarringsSideSheetComponent | null {
    return this.editSideSheet;
  }

  getConfirmationSideSheetComponent(): EditBarringsSideSheetComponent | null {
    return this.confirmationSideSheet;
  }

  setGroupIndex(groupName: BarringsGroupName) {
    this.groupIndex = groupName.valueOf();
  }
}

export default class EditBarringsSideSheetComponent {
  readonly self: Locator;
  readonly title: Locator;
  readonly sideSheetContent: Locator;
  readonly allBarrings: Locator;
  readonly barringDescription: Locator;
  readonly cancelButton: Locator;
  readonly saveButton: Locator;
  readonly confirmationButton: Locator;
  readonly confirmationCancelButton: Locator;
  readonly closeSidebarButton: Locator;
  readonly barrings: Locator;
  typeIndex: number;

  constructor(
    private readonly componentRoot: Locator,
    type = 'edit'
  ) {
    if (type === 'confirmation') {
      this.typeIndex = 1;
    } else {
      this.typeIndex = 0;
    }
    this.self = this.componentRoot.nth(this.typeIndex);
    this.title = this.self.locator('[data-cy="sheet-title"]');
    this.sideSheetContent = this.self.locator('.sidebar__content');
    this.allBarrings = this.sideSheetContent.locator('.barrings');
    this.barringDescription = this.sideSheetContent.locator('.barring-settings-subtitle');
    this.cancelButton = this.self.locator('[data-cy="mobile-barring-selector-cancel"]');
    this.saveButton = this.self.locator('[data-cy="mobile-barring-selector-save"]');
    this.confirmationButton = this.self.locator('.button--primary');
    this.confirmationCancelButton = this.self.locator('.button--secondary');
    this.closeSidebarButton = this.self.locator('.icon-cross');
    this.barrings = this.allBarrings.locator(':scope > div');
  }

  getBarringWithName(name: string) {
    return this.allBarrings.locator(`text=/.*${name}.*/`).locator('..');
  }

  getBarringWithNameSwitch(name: string) {
    return this.getBarringWithName(name);
  }

  getBarringWithIndex(index: number) {
    return this.allBarrings.locator(':scope > div').nth(index);
  }

  getBarringSwitchWithIndex(index: number) {
    return this.allBarrings.locator(':scope > div > label > div').nth(index);
  }
}
