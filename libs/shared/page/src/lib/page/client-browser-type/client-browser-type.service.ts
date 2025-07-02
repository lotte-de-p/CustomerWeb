import { Injectable } from '@angular/core';
import { BrowserTypeEnum } from './browser-type.enum';

@Injectable({ providedIn: 'root' })
export class ClientBrowserTypeService {
  private static readonly SUBSTRING_NOT_IN_STRING_DELIMETER = -1;

  clientBrowserType(): BrowserTypeEnum {
    const agent = window.navigator.userAgent.toLowerCase();

    if (agent.indexOf('edge') > ClientBrowserTypeService.SUBSTRING_NOT_IN_STRING_DELIMETER) {
      return BrowserTypeEnum.EDGE;
    } else if (agent.indexOf('opr') > ClientBrowserTypeService.SUBSTRING_NOT_IN_STRING_DELIMETER && !!window['opr']) {
      return BrowserTypeEnum.OPERA;
    } else if (
      agent.indexOf('chrome') > ClientBrowserTypeService.SUBSTRING_NOT_IN_STRING_DELIMETER &&
      !!window['chrome']
    ) {
      return BrowserTypeEnum.CHROME;
    } else if (agent.indexOf('trident') > ClientBrowserTypeService.SUBSTRING_NOT_IN_STRING_DELIMETER) {
      return BrowserTypeEnum.INTERNET_EXPLORER;
    } else if (agent.indexOf('firefox') > ClientBrowserTypeService.SUBSTRING_NOT_IN_STRING_DELIMETER) {
      return BrowserTypeEnum.FIREFOX;
    } else if (agent.indexOf('safari') > ClientBrowserTypeService.SUBSTRING_NOT_IN_STRING_DELIMETER) {
      return BrowserTypeEnum.SAFARI;
    } else {
      return BrowserTypeEnum.UNKNOWN;
    }
  }

  isClientUsingSafari(): boolean {
    return this.clientBrowserType() === BrowserTypeEnum.SAFARI;
  }
}
