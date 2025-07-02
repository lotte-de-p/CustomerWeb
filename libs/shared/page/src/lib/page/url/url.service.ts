import { UrlParam } from './url-param.model';
import { Inject, Injectable } from '@angular/core';
import { find, keyBy, map } from 'lodash-es';
import { ClientBrowserTypeService } from '../client-browser-type/client-browser-type.service';
import { QueryParamEnum } from '../enums/query-param.enum';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { forkJoin, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  constructor(
    @Inject('Window') protected window: Window,
    private readonly dataLayerService: DataLayerService,
    private readonly clientBrowserTypeService: ClientBrowserTypeService
  ) {}

  getCurrentUrl(): string {
    if (this.window.location && this.window.location.href) {
      return this.window.location.href;
    }
    return '';
  }

  openWindow(url: string): void {
    this.window.open(url, '_self');
  }

  openNewTab(url: string): void {
    if (this.clientBrowserTypeService.isClientUsingSafari()) {
      this.openNewTabForSafari(url);
    } else {
      this.window.open(url, '_blank');
    }
  }

  reloadWindow() {
    this.window.location.reload();
  }

  getParameterByName(name: string): string | null {
    const match = RegExp('[?&]' + name + '=([^&]*)').exec(this.window.location.search);
    return match && decodeURIComponent(match[1]);
  }

  getParamsValueFromUrl(url: string, paramKey: string): string | null {
    const match = RegExp('[?&]' + paramKey + '=([^&]*)').exec(url);
    return match && decodeURIComponent(match[1]);
  }

  getUrlWithParams(url: string, params: UrlParam[]): string {
    const keyValues = map(params, (param) => {
      return param.getKeyValue();
    });

    return url + '?' + keyValues.join('&');
  }

  redirectTo(url: string): void {
    const promiseArray = this.dataLayerService.getAnalyticsPromises();
    if (promiseArray?.length === 0) {
      this.window.location.href = url;
    } else {
      forkJoin(promiseArray)
        .pipe(
          timeout(5000) // timeout after 5 seconds
        )
        .subscribe({
          next: () => {
            this.window.location.href = url;
          },
          error: () => {
            // This block will be executed if the timeout occurs, this way we can ensure that the user is redirected even if the analytics are not loaded
            console.warn("Timeout: Datalayer promises couldn't be resolved. Redirecting to the url");
            this.window.location.href = url;
          },
        });
    }
  }

  doHistoryBack(): void {
    if (this.window.history) {
      this.window.history.back();
    }
  }

  getRequestParametersAsString(): string {
    if (this.window.location && this.window.location.search) {
      return this.window.location.search;
    }
    return '';
  }

  getRequestParameters(): Record<string, string> {
    const obj: Record<string, string> = {};
    if (this.window.location && this.window.location.search) {
      const pairs = this.window.location.search.substring(1).split('&');
      let keyValue: string[] = [];
      pairs.forEach((pair) => {
        if (pair !== '') {
          keyValue = pair.split('=');
          obj[decodeURIComponent(keyValue[0])] = decodeURIComponent(keyValue[1]);
        }
      });
    }
    return obj;
  }

  getRequestParameterOrDefault(key: string, defaultValue: string): string {
    return (
      find(this.getRequestParameters(), function (_paramValue, paramKey) {
        return paramKey.toLowerCase() === key.toLowerCase();
      }) || defaultValue
    );
  }

  getRequestParamValue(key: string, defaultValue: string): string {
    return this.getRequestParameterOrDefault(key, defaultValue);
  }

  requestParamsContains(key: string): boolean {
    return this.getRequestParameters()[key] !== undefined;
  }

  getHashParameter(key: string): string | null {
    const hashParam = this.getHashParameters()[key];

    if (hashParam !== undefined) {
      return hashParam.value;
    }

    return null;
  }

  getUrlWithOnlyHashParam(): string {
    if (this.window && this.window.location && this.window.location.hash) {
      return this.window.location.hash;
    }
    return '';
  }

  removeURLParameters(removeParams: string[]) {
    const deleteRegex = new RegExp(removeParams.join('=|') + '=');
    const params = this.window.location.search.slice(1).split('&');
    const search: string[] = [];
    for (const value of params) {
      if (value.length > 0 && !deleteRegex.test(value)) {
        search.push(value);
      }
    }
    const path =
      this.window.location.pathname + (search.length ? '?' + search.join('&') : '') + this.window.location.hash;
    this.window.history.replaceState({}, this.window.document.title, path);
  }

  removeParametersFromUrl(url: string, parameters: string | string[]) {
    if (!Array.isArray(parameters)) {
      parameters = [parameters];
    }

    if (!url?.startsWith('http')) {
      return url;
    }
    const urlObject = new URL(url);
    const params = urlObject.searchParams;
    parameters.forEach((param) => {
      params.delete(param);
    });

    return urlObject.href;
  }

  replaceURLParameters(data: { key: string; value: string }[]) {
    const params = this.window.location.search.slice(1).split('&');
    const search: string[] = [];
    for (const value of params) {
      if (value.length > 0) {
        const split = value.split('=');
        const key = decodeURIComponent(split[0]);
        const newValue = data.find((d) => d.key === key)?.value ?? decodeURIComponent(split[1]);
        search.push(`${encodeURIComponent(key)}=${encodeURIComponent(newValue)}`);
      }
    }
    data
      .filter((d) => !params.find((p) => decodeURIComponent(p.split('=')[0]) === d.key))
      .forEach((d) => search.push(`${encodeURIComponent(d.key)}=${encodeURIComponent(d.value)}`));
    const path =
      this.window.location.pathname + (search.length ? '?' + search.join('&') : '') + this.window.location.hash;
    this.window.history.replaceState({}, this.window.document.title, path);
  }

  fromSource(value: QueryParamEnum): boolean {
    let source = this.getRequestParamValue(QueryParamEnum.SOURCE, '');
    source = source && source.toUpperCase();
    return source === value.toUpperCase();
  }

  public getHashParameters() {
    if (this.window && this.window.location && this.window.location.hash) {
      const hash = this.window.location.hash.replace(/^#/, '');

      if (hash !== '') {
        const pairs = decodeURI(hash).split('/');

        return keyBy(
          map(pairs, (pair) => {
            const keyValue = pair.split('=');

            return {
              key: keyValue[0],
              value: keyValue[1],
            };
          }),
          (p) => p.key
        );
      }
    }
    return [];
  }

  public buildUrlWithParams(url: string, params: Map<string, string>): string {
    const paramList: string[] = [];

    params.forEach((value: string, key: string) => {
      paramList.push(`${key}=${value}`);
    });

    return url + (paramList.length > 0 ? `?${paramList.join('&')}` : '');
  }

  public buildUrlWithHashParams(url: string, params: Map<string, string>): string {
    const paramList: string[] = [];

    params.forEach((value: string, key: string) => {
      paramList.push(`${key}=${value}`);
    });

    return url + (paramList.length > 0 ? '/#/' + `${paramList.join('/')}` : '');
  }

  getOrigin(): string {
    return this.window.location.origin;
  }

  getActionParametersRemovedURL(): string {
    const paramArray: string[] = [];
    const params = this.getCurrentUrl().split('&');
    for (const value of params) {
      if (value.length > 0 && value !== 'action=register') {
        paramArray.push(value);
      }
    }
    return paramArray.join('&');
  }

  getParameters(urlString: string): Map<string, string> {
    const url = new URL(urlString);
    const paramMap = new Map();
    for (const [key, value] of url.searchParams.entries()) {
      paramMap.set(key, decodeURIComponent(value));
    }

    return paramMap;
  }

  private openNewTabForSafari(url: string) {
    const anchorElement = this.window.document.createElement('a');
    anchorElement.target = '_blank';
    anchorElement.href = url;

    const event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
      detail: 0,
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      ctrlKey: false,
      altKey: false,
      shiftKey: false,
      metaKey: false,
      button: 0,
      relatedTarget: null,
    });
    anchorElement.dispatchEvent(event);
  }
}
