import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ImageSrcInterceptorDirective } from './image-src-interceptor.directive';
import { ConfigService } from '@telenet/ng-lib-config';

const IMAGE_PATH = '/telenet-logo.png';
const HTTP_URL = 'http://somehost/somepath/';

export class MockElementRef extends ElementRef {
  nativeElement = {
    src: IMAGE_PATH,
    tagName: 'IMG',
  };
}

describe('ImageSrcInterceptorDirective ', () => {
  let configService: ConfigService;

  describe('ngOnInit', function () {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          { provide: ElementRef, useClass: MockElementRef },
          {
            provide: 'Window',
            useValue: {
              location: {
                host: 'http://host/pop/',
              },
            },
          },
        ],
      }).compileComponents();
      configService = TestBed.inject(ConfigService);
    });
    it('should set src correctly given no config for a module', function () {
      const elementRef = TestBed.inject(ElementRef);
      const imageSrcPathDirective = new ImageSrcInterceptorDirective(elementRef, configService);
      imageSrcPathDirective.ngOnInit();
      expect(TestBed.inject(ElementRef).nativeElement.src).toEqual('/assets/telenet-logo.png');
    });
    it('should set src correctly given a remoteHost config was set', function () {
      const elementRef = TestBed.inject(ElementRef);
      configService.addRemoteHostConfig('MarketingModule', { remoteHost: 'https://some-root-path/sup' });
      const imageSrcPathDirective = new ImageSrcInterceptorDirective(elementRef, configService);
      imageSrcPathDirective.ngOnInit();
      expect(TestBed.inject(ElementRef).nativeElement.src).toEqual(
        'https://some-root-path/sup/assets/telenet-logo.png'
      );
    });

    it('should not override src given override', function () {
      const elementRef = TestBed.inject(ElementRef);
      elementRef.nativeElement.src = HTTP_URL;
      const imageSrcPathDirective = new ImageSrcInterceptorDirective(elementRef, configService);
      imageSrcPathDirective.override = true;
      imageSrcPathDirective.ngOnInit();
      expect(TestBed.inject(ElementRef).nativeElement.src).toEqual(HTTP_URL);
    });
  });
});
