import { Injectable } from '@angular/core';

@Injectable()
export class WindowService {
  private readonly paramMap: Map<string, string> = new Map<string, string>();

  constructor() {
    this.init();
  }

  getParamValue(key: string) {
    return this.paramMap.get(key);
  }

  getParamMap(): Map<string, string> {
    return this.paramMap;
  }

  goTo(params: Map<string, string>): void {
    const url: string[] = [];

    params.forEach((_value: string, _key: string) => {
      if (!!_key && !!_value) {
        url.push(_key + '=' + _value);
      }
    });

    window.location.search = '?' + url.join('&');
  }

  hasParam(key: string): boolean {
    return this.paramMap.get(key) !== undefined;
  }

  private init() {
    const search = window.location.search.substring(1);

    search.split('&').forEach((comb) => {
      const keyValue = comb.split('=');
      this.paramMap.set(keyValue[0], keyValue[1]);
    });
  }

  setWindowObjects<T>(object: string, value: T) {
    window[object] = value;
  }
}
