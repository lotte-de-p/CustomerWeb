import { TestBed, waitForAsync } from '@angular/core/testing';
import { RecaptchaService } from './recaptcha.service';
import { of } from 'rxjs';

describe('RecaptchaService', () => {
  let recaptchaService: RecaptchaService;
  const mockWindow = {
    grecaptcha: {
      ready: (callback: () => void) => callback(),
      execute: () => of('unique-grecaptcha-token'),
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RecaptchaService,
        {
          provide: 'Window',
          useValue: mockWindow,
        },
      ],
    });

    recaptchaService = TestBed.inject(RecaptchaService);
  });

  describe('getRecaptchaToken', () => {
    it('should call the window grecaptcha functions and return the token', waitForAsync(() => {
      const readySpy = jest.spyOn(mockWindow.grecaptcha, 'ready');
      recaptchaService.getRecaptchaToken('actionName', 'siteKey').subscribe((token) => {
        expect(token).toBe('unique-grecaptcha-token');
      });
      mockWindow.grecaptcha.ready(() => null);
      expect(readySpy).toHaveBeenCalled();
    }));
  });
});
