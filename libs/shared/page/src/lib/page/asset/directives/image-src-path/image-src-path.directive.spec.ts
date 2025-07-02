import { ImageSrcPathDirective } from './image-src-path.directive';
import { ElementRef, SimpleChange, SimpleChanges } from '@angular/core';
import { TestBed } from '@angular/core/testing';

const IMAGE_PATH = 'telenet-logo.png';
const OTHER_IMAGE_PATH = 'device.png';
const HTTP_URL = 'http://telenet-logo.png';

const createFirstChange = (path: string): SimpleChanges => {
  return { src: new SimpleChange(null, path, true) };
};

const firstChange: SimpleChanges = createFirstChange(IMAGE_PATH);
const firstChangeHttp: SimpleChanges = createFirstChange(HTTP_URL);
const firstChangeSlash: SimpleChanges = createFirstChange(`/${IMAGE_PATH}`);

const otherChange: SimpleChanges = {
  src: new SimpleChange(IMAGE_PATH, OTHER_IMAGE_PATH, false),
};

export class MockElementRef extends ElementRef {
  nativeElement = {
    src: IMAGE_PATH,
    tagName: 'IMG',
  };
}

export class MockElementRefWithHttpSrc extends ElementRef {
  nativeElement = {
    src: HTTP_URL,
    tagName: 'IMG',
  };
}

describe('ImageSrcPathDirective ', () => {
  it('should return http url when override is true and tagname is img', function () {
    TestBed.configureTestingModule({
      declarations: [ImageSrcPathDirective],
      providers: [
        { provide: 'IMAGE_BASE_PATH', useValue: 'image' },
        { provide: ElementRef, useClass: MockElementRefWithHttpSrc },
        {
          provide: window,
          useValue: {
            location: {
              host: 'http://host/pop',
            },
          },
        },
      ],
    }).compileComponents();
    const imageSrcPathDirective = new ImageSrcPathDirective(TestBed.inject(ElementRef), 'image');
    imageSrcPathDirective.override = true;
    imageSrcPathDirective.ngOnChanges(firstChangeHttp);
    expect(TestBed.inject(ElementRef).nativeElement.src).toEqual(HTTP_URL);
  });

  describe('ngOnChanges', function () {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ImageSrcPathDirective],
        providers: [
          { provide: 'IMAGE_BASE_PATH', useValue: 'image' },
          { provide: ElementRef, useClass: MockElementRef },
          {
            provide: window,
            useValue: {
              location: {
                host: 'http://host/pop',
              },
            },
          },
        ],
      }).compileComponents();
    });

    it('should return url when override is false and tagname is div', function () {
      const elementRef = TestBed.inject(ElementRef);
      elementRef.nativeElement.tagName = 'DIV';
      const imageSrcPathDirective = new ImageSrcPathDirective(elementRef, 'image');
      imageSrcPathDirective.override = false;
      imageSrcPathDirective.ngOnChanges(firstChange);
      expect(TestBed.inject(ElementRef).nativeElement.src).toEqual(IMAGE_PATH);
    });

    it('should return url when override is true and tagname is div', function () {
      const elementRef = TestBed.inject(ElementRef);
      elementRef.nativeElement.tagName = 'DIV';
      const imageSrcPathDirective = new ImageSrcPathDirective(elementRef, 'image');
      imageSrcPathDirective.override = true;
      imageSrcPathDirective.ngOnChanges(firstChange);
      expect(TestBed.inject(ElementRef).nativeElement.src).toEqual(IMAGE_PATH);
    });

    it('should return url when override is true and tagname is IMG', function () {
      const imageSrcPathDirective = new ImageSrcPathDirective(TestBed.inject(ElementRef), 'image');
      imageSrcPathDirective.override = true;
      imageSrcPathDirective.ngOnChanges(firstChange);
      expect(TestBed.inject(ElementRef).nativeElement.src).toEqual(IMAGE_PATH);
    });

    it('should split the src and return prefix with url', function () {
      const imageSrcPathDirective = new ImageSrcPathDirective(TestBed.inject(ElementRef), 'image');
      imageSrcPathDirective.override = false;
      imageSrcPathDirective.ngOnChanges(firstChange);
      expect(TestBed.inject(ElementRef).nativeElement.src).toEqual('image/' + IMAGE_PATH);
    });

    it('should do nothing if it is not the first change', function () {
      const imageSrcPathDirective = new ImageSrcPathDirective(TestBed.inject(ElementRef), 'image');
      imageSrcPathDirective.override = false;
      imageSrcPathDirective.ngOnChanges(firstChange);
      expect(TestBed.inject(ElementRef).nativeElement.src).toEqual('image/' + IMAGE_PATH);
      imageSrcPathDirective.ngOnChanges(otherChange);
      expect(TestBed.inject(ElementRef).nativeElement.src).toEqual('image/' + IMAGE_PATH);
    });

    it('should avoid double slashes when both image and prefix path contain slashes', function () {
      TestBed.overrideProvider('IMAGE_BASE_PATH', { useValue: 'image/' });
      const imageSrcPathDirective = new ImageSrcPathDirective(TestBed.inject(ElementRef), 'image');
      imageSrcPathDirective.override = false;
      imageSrcPathDirective.ngOnChanges(firstChangeSlash);
      expect(TestBed.inject(ElementRef).nativeElement.src).toEqual('image/' + IMAGE_PATH);
    });
  });
});
