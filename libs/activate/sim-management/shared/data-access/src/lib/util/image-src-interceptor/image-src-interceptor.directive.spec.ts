import { ElementRef, SimpleChange } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ImageSrcInterceptorDirective } from './image-src-interceptor.directive';
import { ConfigService } from '@telenet/ng-lib-config';
import { SimManagementComponentId } from '../../enums/component-id.enum';

const imagesRootPath = '/content/dam/www-telenet-touch/nl/common/components/sim-management';
const imageSourcePath = '/assets/image.png';
const imageSourceMultipleFoldersPath = '/assets/folder/image.png';
const remoteHost = 'https://remoteHost';

export class MockElementRef extends ElementRef {
  override nativeElement = {
    src: imageSourcePath,
  };
}

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
    imageSrcInterceptorDirective.imagesRootPath = '/content/dam/www-telenet-touch/nl/common/components/sim-management';
    imageSrcInterceptorDirective.moduleId = SimManagementComponentId.SIM_MANAGEMENT_SIM_ACTIVATION;
  });

  describe('ngOnChanges on a image served on localhost or storybook', () => {
    it('should set src correctly with only one image folder', () => {
      imageSrcInterceptorDirective.ngOnChanges({ src: new SimpleChange(null, imageSourcePath, true) });
      expect(elementRef.nativeElement.src).toEqual(imageSourcePath);
    });

    it('should set src correctly with only multiple image folders', () => {
      imageSrcInterceptorDirective.ngOnChanges({ src: new SimpleChange(null, imageSourceMultipleFoldersPath, true) });
      expect(elementRef.nativeElement.src).toEqual(imageSourceMultipleFoldersPath);
    });
  });

  describe('ngOnChanges on a image served remotely', () => {
    it('should set src correctly with only one image folder', () => {
      configService.addRemoteHostConfig('tg-sim-management-sim-activation', {
        remoteHost,
      });

      imageSrcInterceptorDirective.ngOnChanges({ src: new SimpleChange(null, imageSourcePath, true) });
      expect(elementRef.nativeElement.src).toEqual(`${imagesRootPath}/image.png`);
    });

    it('should set src correctly with only multiple image folders', () => {
      configService.addRemoteHostConfig('tg-sim-management-sim-activation', {
        remoteHost,
      });

      imageSrcInterceptorDirective.ngOnChanges({ src: new SimpleChange(null, imageSourceMultipleFoldersPath, true) });
      expect(elementRef.nativeElement.src).toEqual(`${imagesRootPath}/folder/image.png`);
    });
  });
});
