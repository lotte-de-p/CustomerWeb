import { Locator } from 'playwright/test';

export class MobileLineSelectorComponent {
  readonly selectedLine: Locator;
  readonly selectedNickname: Locator;
  readonly changeMobileLine: Locator;
  readonly sideSheetMenu: Locator;
  readonly sideSheetContent: Locator;
  readonly mobileLines: Locator;
  readonly closeLineSelectorButton: Locator;
  readonly self: Locator;

  public static readonly MOBILE_LINE_SELECTOR_ERROR_MESSAGE_TITLE_LABEL_KEY = 'ng.mobile-line-selector.lbl.error-label';
  public static readonly MOBILE_LINE_SELECTOR_ERROR_MESSAGE_DESCRIPTION_LABEL_KEY =
    'ng.mobile-line-selector.lbl.error-description';
  public static readonly MOBILE_LINE_SELECTOR_OTHER_NUMBER_LABEL_KEY = 'ng.mobile-line-selector.lbl.change-line';

  constructor(private readonly componentRoot: Locator) {
    this.self = componentRoot;
    this.selectedLine = this.componentRoot.locator('[data-cy="selected-mobile-line-msisdn"]');
    this.selectedNickname = this.componentRoot.locator('[data-cy="selected-mobile-line-name"]');
    this.changeMobileLine = this.componentRoot.locator('[data-cy="change-mobile-line"]');
    this.sideSheetMenu = this.componentRoot.locator('.sidebar__menu');
    this.sideSheetContent = this.componentRoot.locator('.sidebar__content');
    this.mobileLines = this.sideSheetContent.locator('[data-cy^="mobile-line-selector-option-"]');
    this.closeLineSelectorButton = this.sideSheetMenu.locator('.icon-cross');
  }

  getMobileLineByIndex(index: number) {
    return this.mobileLines.nth(index);
  }
}
