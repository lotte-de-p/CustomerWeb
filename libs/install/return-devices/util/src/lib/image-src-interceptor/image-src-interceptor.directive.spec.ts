import { ElementRef, SimpleChange, SimpleChanges } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ImageSrcInterceptorDirective } from './image-src-interceptor.directive';
import { ConfigService } from '@telenet/ng-lib-config';

const imagePath = 'https://localhost/telenet-touch/assets/image';
const remoteHost = 'https://remoteHost';

export class MockElementRef extends ElementRef {
  override nativeElement = {
    src: imagePath,
  };
}

const IMAGE_PATH = '/assets/telenet-logo.png';
const IMAGE_PATH_WITHOUT_ASSETS = '/telenet-logo.png';

const createFirstChange = (path: string): SimpleChanges => {
  return { src: new SimpleChange(null, path, true) };
};

const firstChange: SimpleChanges = createFirstChange(IMAGE_PATH);
const secondChange: SimpleChanges = createFirstChange(IMAGE_PATH_WITHOUT_ASSETS);

describe('ImageSrcInterceptorDirective ', () => {
  let configService: ConfigService;
  let imageSrcInterceptorDirective: ImageSrcInterceptorDirective;
  let elementRef: ElementRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ImageSrcInterceptorDirective],
      providers: [
        { provide: ElementRef, useClass: MockElementRef },
        {
          provide: 'Window',
          useValue: {
            location: {
              host: 'https://localhost',
            },
          },
        },
      ],
    }).compileComponents();
    configService = TestBed.inject(ConfigService);
    elementRef = TestBed.inject(ElementRef);
    imageSrcInterceptorDirective = new ImageSrcInterceptorDirective(elementRef, configService);
    imageSrcInterceptorDirective.moduleId = 'moduleId';
    imageSrcInterceptorDirective.imagePath = 'telenet/aem';
  });

  describe('ngOnChanges', () => {
    it('should not set src given no config for remote host', () => {
      imageSrcInterceptorDirective.ngOnChanges(firstChange);
      expect(elementRef.nativeElement.src).toEqual(imagePath);
    });

    it('should set src correctly given a remoteHost config was found', () => {
      configService.addRemoteHostConfig(imageSrcInterceptorDirective.moduleId, {
        remoteHost,
      });
      const expected = `telenet/aem/assets/telenet-logo.png`;

      imageSrcInterceptorDirective.ngOnChanges(firstChange);

      expect(elementRef.nativeElement.src).toEqual(expected);
    });

    it('should set src correctly given a remoteHost config was found and no assets folder', () => {
      elementRef.nativeElement.src = 'https://localhost/telenet-touch/image';
      configService.addRemoteHostConfig(imageSrcInterceptorDirective.moduleId, {
        remoteHost,
      });
      const expected = `telenet/aem/telenet-logo.png`;

      imageSrcInterceptorDirective.ngOnChanges(secondChange);

      expect(elementRef.nativeElement.src).toEqual(expected);
    });
  });
});
