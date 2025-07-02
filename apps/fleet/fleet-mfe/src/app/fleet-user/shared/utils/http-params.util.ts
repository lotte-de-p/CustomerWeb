import { HttpParams } from '@angular/common/http';

export class HttpParamsUtil {
  static ignoreUndefinedParams(params: Record<string, string>): HttpParams {
    let httpParams: HttpParams = new HttpParams();
    Object.keys(params).forEach((element) => {
      if (params[element]) {
        httpParams = httpParams.set(element, params[element]);
      }
    });

    return httpParams;
  }

  static createEndpointWithQueryParams(endpoint: string, params: Record<string, string>): string {
    const httpParams = HttpParamsUtil.ignoreUndefinedParams(params);

    if (httpParams.keys().length > 0) {
      endpoint = `${endpoint}?`;
    }

    return `${endpoint}${httpParams.toString()}`;
  }
}
