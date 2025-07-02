import { DevelopmentInterceptorService } from './development-interceptor.service';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';

describe('DevelopmentInterceptorService', () => {
  let developmentInterceptorService: DevelopmentInterceptorService;
  const mockHandler = {
    handle: jest.fn(() => of(new HttpResponse({ status: 200, body: { data: 'thisIsWhatImTesting' } }))),
  };

  beforeAll(() => {
    console.group = jest.fn();
    console.groupCollapsed = jest.fn();
    console.log = jest.fn();
    console.groupEnd = jest.fn();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevelopmentInterceptorService],
    });

    localStorage.removeItem('interceptorEnabled');
    developmentInterceptorService = TestBed.inject(DevelopmentInterceptorService);
  });

  describe('intercept', () => {
    it('should not intercept if the interceptor is disabled', (done) => {
      localStorage.setItem('interceptorEnabled', 'false');

      developmentInterceptorService
        .intercept(new HttpRequest<unknown>('GET', 'https://testing.com/ocapi/oauth/userdetails'), mockHandler)
        .subscribe({
          next: (event: HttpEvent<unknown>) => {
            expect(console.log).not.toHaveBeenCalled();
            expect(event['body']).toEqual({ data: 'thisIsWhatImTesting' });
            done();
          },
          error: (error) => {
            console.log(error);
            done();
          },
        });
    });

    it('should not intercept if there is no matching route', (done) => {
      localStorage.setItem('interceptorEnabled', 'true');

      developmentInterceptorService
        .intercept(new HttpRequest<unknown>('GET', 'https://testing.com/ocapi/oauth/not/existing'), mockHandler)
        .subscribe({
          next: (event: HttpEvent<unknown>) => {
            expect(event['body']).toEqual({ data: 'thisIsWhatImTesting' });
            expect(console.log).not.toHaveBeenCalled();
            done();
          },
        });
    });

    it('should intercept if the interceptor is enabled and a matching route is found', (done) => {
      localStorage.setItem('interceptorEnabled', 'true');

      developmentInterceptorService
        .intercept(new HttpRequest<unknown>('GET', 'https://testing.com/ocapi/oauth/userdetails'), mockHandler)
        .subscribe({
          next: (event: HttpEvent<unknown>) => {
            expect(console.groupCollapsed).toHaveBeenCalled();
            expect(event['body']).toHaveProperty('username');
            done();
          },
        });
    });
  });

  afterAll(() => {
    localStorage.removeItem('interceptorEnabled');
  });
});
