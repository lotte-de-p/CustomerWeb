import { PortalAuthService } from './portal-auth.service';
import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { HttpEvent, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { IonicPortalCoreService } from '../ionic-portal-core-service/ionic-portal-core.service';

describe('PortalAuthService', () => {
  let portalAuthService: PortalAuthService;
  const ionicPortalCoreServiceMock = {
    publishToTopic: jest.fn(),
  };
  const mockHandler = {
    handle: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortalAuthService, { provide: IonicPortalCoreService, useValue: ionicPortalCoreServiceMock }],
    });

    portalAuthService = TestBed.inject(PortalAuthService);
  });

  describe('intercept', () => {
    it('should not modify request on successful response', (done) => {
      const request = new HttpRequest('GET', '/api/data');
      mockHandler.handle.mockReturnValue(of(new HttpResponse({ status: 200 })));

      portalAuthService.intercept(request, mockHandler).subscribe({
        next: (event: HttpEvent<unknown>) => {
          expect(mockHandler.handle).toHaveBeenCalledWith(request);
          expect(event).toBeInstanceOf(HttpResponse);
          done();
        },
      });
    });

    it('should request token on 401 error and first attempt (COUNT === 0)', (done) => {
      const request = new HttpRequest('GET', '/api/data');
      sessionStorage.setItem('TOKEN-ACCESS', 'existing-token');
      localStorage.setItem('COUNT', '0');

      mockHandler.handle.mockReturnValue(throwError(new HttpErrorResponse({ error: 'Unauthorized', status: 401 })));

      portalAuthService.intercept(request, mockHandler).subscribe({
        error: () => {
          expect(ionicPortalCoreServiceMock.publishToTopic).toHaveBeenCalledWith('accessToken', {
            data: 'Requesting TOKEN',
          });
          done();
        },
      });
    });
  });
});
