import { HttpHeaders } from '@angular/common/http';

export class HeaderUtil {
  static createHttpHeaders(currentUrl: string): HttpHeaders {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('x-alt-referer', currentUrl);
    httpHeaders = httpHeaders.set('X-Requested-With', 'XMLHttpRequest');
    return httpHeaders;
  }
}
