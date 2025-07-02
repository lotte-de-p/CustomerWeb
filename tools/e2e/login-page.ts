import { Page } from '@playwright/test';

const COOKIES_ACCEPT = '#onetrust-accept-btn-handler';
const LOGIN_BUTTON = '[data-cy="login-button-link"]';
const USERNAME_FIELD = '.o-form-input-name-identifier input';
const PASSWORD_FIELD = 'input[type="password"]';
const LOGIN_NEXT_BUTTON = 'input.button[type="submit"]';

const BASE_LOGIN_USER = '#j_username_input';
const BASE_LOGIN_PASSWORD = '#j_password_input';
const BASE_LOGIN_BUTTON = '#login_button';

const MY_TELENET_SECTION = 'i.display--block.ml--xxs.icon.icon-chevron-down.display--none.display--block--md';
const LOGIN_DROPDOWN_BUTTON = 'a.button--login-v2-header';

export class LoginPage {
  constructor(public readonly page: Page) {}

  async login(username: string, password: string) {
    await this.page.locator(COOKIES_ACCEPT).click();
    await this.page.waitForSelector(LOGIN_BUTTON);
    await this.page.locator(LOGIN_BUTTON).click();
    await this.page.locator(USERNAME_FIELD).fill(username);
    await this.page.locator(LOGIN_NEXT_BUTTON).click();
    await this.page.locator(PASSWORD_FIELD).fill(password);
    await this.page.locator(LOGIN_NEXT_BUTTON).click();
  }

  async loginBase(username: string, password: string) {
    await this.page.locator(COOKIES_ACCEPT).click();
    await this.page.waitForSelector(LOGIN_BUTTON);
    await this.page.locator(LOGIN_BUTTON).click();
    await this.page.locator(BASE_LOGIN_USER).fill(username);
    await this.page.locator(BASE_LOGIN_PASSWORD).fill(password);
    await this.page.locator(BASE_LOGIN_BUTTON).click();
  }

  async loginViaHeader(username: string, password: string) {
    await this.page.locator(COOKIES_ACCEPT).click();
    await this.page.locator(MY_TELENET_SECTION).hover();
    await this.page.waitForSelector(LOGIN_DROPDOWN_BUTTON, { visible: true });
    await this.page.click(LOGIN_DROPDOWN_BUTTON);
    await this.page.locator(USERNAME_FIELD).fill(username);
    await this.page.locator(LOGIN_NEXT_BUTTON).click();
    await this.page.locator(PASSWORD_FIELD).fill(password);
    await this.page.locator(LOGIN_NEXT_BUTTON).click();
  }
}
