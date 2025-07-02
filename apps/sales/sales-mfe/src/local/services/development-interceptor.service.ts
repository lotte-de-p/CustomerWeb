import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  EndPointConfiguration,
  InterceptorClientServiceConfiguration,
  ocapiClientServiceConfiguration,
  OmapiClientServiceConfiguration,
  SalesClientServiceConfiguration,
} from '../interfaces/interceptor-configuration.interface';

@Injectable()
export class DevelopmentInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const enabled = this.isInterceptorEnabled();
    if (enabled) {
      const interceptorServices: InterceptorClientServiceConfiguration[] = [
        ocapiClientServiceConfiguration,
        SalesClientServiceConfiguration,
        OmapiClientServiceConfiguration,
      ];

      const endpoints: EndPointConfiguration[] = this.getEndpoints(interceptorServices);
      const matchingEndpointConfiguration = endpoints.find((endpoint) => {
        return endpoint.enabled && this.checkUrlPathMatch(req.url, endpoint.path);
      });

      if (matchingEndpointConfiguration) {
        console.groupCollapsed('Interceptor found matching path:', matchingEndpointConfiguration.path);
        console.info(matchingEndpointConfiguration);
        console.info(matchingEndpointConfiguration.callback());
        console.groupEnd();
        return of(new HttpResponse({ status: 200, body: matchingEndpointConfiguration.callback() }));
      }
    }
    return next.handle(req);
  }

  private getEndpoints(interceptorServices: InterceptorClientServiceConfiguration[]) {
    return interceptorServices.flatMap((service) => {
      if (service.enabled) {
        return service.endpoints;
      }
      return [];
    });
  }

  private checkUrlPathMatch(url: string, expectedPath: string): boolean {
    try {
      const parsedUrl = new URL(url);
      const fullExpectedUrl = new URL(expectedPath, parsedUrl.origin);

      if (parsedUrl.pathname !== fullExpectedUrl.pathname) {
        return false;
      }

      const searchParams = parsedUrl.searchParams;
      const expectedSearchParams = fullExpectedUrl.searchParams;

      for (const [key, val] of expectedSearchParams) {
        if (val === '*') {
          if (!searchParams.has(key)) {
            return false;
          }
        } else {
          if (searchParams.get(key) !== val) {
            return false;
          }
        }
      }

      return true;
    } catch (e) {
      console.log('Url', url);
    }
    return false;
  }

  private isInterceptorEnabled() {
    return localStorage.getItem('interceptorEnabled') === 'true';
  }
}
