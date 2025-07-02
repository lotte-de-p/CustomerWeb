import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Authenticator, FactorSessionStorage, ManageAuthenticatorsConstants } from '@profile-management/data-access';

@Component({
  selector: 'tg-pm-abstract-manage-authenticators',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export abstract class AbstractManageAuthenticatorsComponent {
  getRedirectUrl(successPageUrl: string): string {
    const currentDomain = window.location.origin;
    return this.isAbsoluteUrl(successPageUrl) ? successPageUrl : `${currentDomain}${successPageUrl}`;
  }

  isAbsoluteUrl(url: string): boolean {
    const absoluteUrlPattern = /^(?:[a-z]+:)?\/\//i;
    return absoluteUrlPattern.test(url);
  }

  navigateToEnrollmentUrl(url: string): void {
    window.location.href = url;
  }

  getFactorSessionStorage(): FactorSessionStorage | undefined {
    const type = window.sessionStorage.getItem(ManageAuthenticatorsConstants.FACTOR_TYPE);
    const id = window.sessionStorage.getItem(ManageAuthenticatorsConstants.FACTOR_ID);
    const url = window.sessionStorage.getItem(ManageAuthenticatorsConstants.SUCCESS_PAGE_URL);

    if (type && id && url) {
      return new FactorSessionStorage(type, id, url);
    } else {
      return undefined;
    }
  }

  setFactorSessionStorage(authenticator: Authenticator | undefined | null, successPageUrl: string) {
    window.sessionStorage.setItem(ManageAuthenticatorsConstants.FACTOR_TYPE, JSON.stringify(authenticator?.type));
    window.sessionStorage.setItem(
      ManageAuthenticatorsConstants.FACTOR_ID,
      JSON.stringify(authenticator?.factors?.[0].id)
    );
    window.sessionStorage.setItem(ManageAuthenticatorsConstants.SUCCESS_PAGE_URL, JSON.stringify(successPageUrl));
  }

  removeFactorSessionStorage(): void {
    window.sessionStorage.removeItem(ManageAuthenticatorsConstants.FACTOR_TYPE);
    window.sessionStorage.removeItem(ManageAuthenticatorsConstants.FACTOR_ID);
    window.sessionStorage.removeItem(ManageAuthenticatorsConstants.SUCCESS_PAGE_URL);
    window.sessionStorage.clear();
  }
}
