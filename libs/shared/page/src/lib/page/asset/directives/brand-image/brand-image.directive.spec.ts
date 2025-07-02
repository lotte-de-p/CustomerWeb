import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BrandImageDirective } from './brand-image.directive';

const IMAGE_PATH = 'telenet-logo.png';
const desktop = `/desktop/${IMAGE_PATH}`;
const tablet = `/tablet/${IMAGE_PATH}`;
const mobile = `/mobile/${IMAGE_PATH}`;

const setAttribute = jest.fn();

export class MockImageElementRef extends ElementRef {
  nativeElement = {
    tagName: 'IMG',
    setAttribute,
  };
}

export class MockWinkImageElementRef extends ElementRef {
  nativeElement = {
    tagName: 'WINK-IMG',
    setAttribute,
  };
}

const srcDesktop = 'src-desktop';
const srcMobile = 'src-mobile';
const srcTablet = 'src-tablet';
describe('BrandImageDirective ', () => {
  beforeEach(() => {
    setAttribute.mockClear();
  });

  describe('image', () => {
    it('should set the default image src', function () {
      const brandImageDirective = setup(MockImageElementRef);
      brandImageDirective.img = IMAGE_PATH;
      brandImageDirective.ngOnChanges();
      expect(setAttribute).toHaveBeenCalledWith('src', IMAGE_PATH);
    });

    it('should set the telenet image', function () {
      const brandImageDirective = setup(MockImageElementRef);
      brandImageDirective.telenetImg = IMAGE_PATH;
      brandImageDirective.baseImg = `/base/${IMAGE_PATH}`;
      brandImageDirective.isTelenet = true;
      brandImageDirective.ngOnChanges();
      expect(setAttribute).toHaveBeenCalledWith('src', IMAGE_PATH);
    });

    it('should set the base image', function () {
      const brandImageDirective = setup(MockImageElementRef);
      brandImageDirective.telenetImg = IMAGE_PATH;
      brandImageDirective.baseImg = `/base/${IMAGE_PATH}`;
      brandImageDirective.isTelenet = false;
      brandImageDirective.ngOnChanges();
      expect(setAttribute).toHaveBeenCalledWith('src', `/base/${IMAGE_PATH}`);
    });

    it('should set the desktop image as src', function () {
      const brandImageDirective = setup(MockImageElementRef);
      brandImageDirective.img = {
        desktop,
        tablet,
        mobile,
      };
      brandImageDirective.ngOnChanges();
      expect(setAttribute).toHaveBeenCalledWith('src', desktop);
    });

    it('should set the telenet image for src set', function () {
      const brandImageDirective = setup(MockImageElementRef);
      brandImageDirective.telenetImg = {
        desktop,
        mobile,
        tablet,
      };
      brandImageDirective.baseImg = {
        desktop: `/base/${desktop}`,
        mobile: `/base/${mobile}`,
        tablet: `/base/${tablet}`,
      };
      brandImageDirective.isTelenet = true;
      brandImageDirective.ngOnChanges();
      expect(setAttribute).toHaveBeenCalledWith('src', desktop);
    });

    it('should set the base image for src set', function () {
      const brandImageDirective = setup(MockImageElementRef);
      brandImageDirective.telenetImg = {
        desktop,
        mobile,
        tablet,
      };
      brandImageDirective.baseImg = {
        desktop: `/base/${desktop}`,
        mobile: `/base/${mobile}`,
        tablet: `/base/${tablet}`,
      };
      brandImageDirective.isTelenet = false;
      brandImageDirective.ngOnChanges();
      expect(setAttribute).toHaveBeenCalledWith('src', `/base/${desktop}`);
    });
  });

  describe('wink-image', () => {
    it('should set the default image src for wink', function () {
      const brandImageDirective = setup(MockWinkImageElementRef);
      brandImageDirective.img = IMAGE_PATH;
      brandImageDirective.ngOnChanges();
      expect(setAttribute).toHaveBeenCalledTimes(3);
      expect(setAttribute).toHaveBeenNthCalledWith(1, srcDesktop, IMAGE_PATH);
      expect(setAttribute).toHaveBeenNthCalledWith(2, srcMobile, IMAGE_PATH);
      expect(setAttribute).toHaveBeenNthCalledWith(3, srcTablet, IMAGE_PATH);
    });

    it('should set the telenet image for wink', function () {
      const brandImageDirective = setup(MockWinkImageElementRef);
      brandImageDirective.telenetImg = IMAGE_PATH;
      brandImageDirective.baseImg = `/base/${IMAGE_PATH}`;
      brandImageDirective.isTelenet = true;
      brandImageDirective.ngOnChanges();
      expect(setAttribute).toHaveBeenCalledTimes(3);
      expect(setAttribute).toHaveBeenNthCalledWith(1, srcDesktop, IMAGE_PATH);
      expect(setAttribute).toHaveBeenNthCalledWith(2, srcMobile, IMAGE_PATH);
      expect(setAttribute).toHaveBeenNthCalledWith(3, srcTablet, IMAGE_PATH);
    });

    it('should set the base image for wink', function () {
      const brandImageDirective = setup(MockWinkImageElementRef);
      brandImageDirective.telenetImg = IMAGE_PATH;
      brandImageDirective.baseImg = `/base/${IMAGE_PATH}`;
      brandImageDirective.isTelenet = false;
      brandImageDirective.ngOnChanges();
      expect(setAttribute).toHaveBeenCalledTimes(3);
      expect(setAttribute).toHaveBeenNthCalledWith(1, srcDesktop, `/base/${IMAGE_PATH}`);
      expect(setAttribute).toHaveBeenNthCalledWith(2, srcMobile, `/base/${IMAGE_PATH}`);
      expect(setAttribute).toHaveBeenNthCalledWith(3, srcTablet, `/base/${IMAGE_PATH}`);
    });

    it('should set the desktop image as src for wink', function () {
      const brandImageDirective = setup(MockWinkImageElementRef);
      brandImageDirective.img = {
        desktop,
        tablet,
        mobile,
      };
      brandImageDirective.ngOnChanges();
      expect(setAttribute).toHaveBeenCalledTimes(3);
      expect(setAttribute).toHaveBeenNthCalledWith(1, srcDesktop, desktop);
      expect(setAttribute).toHaveBeenNthCalledWith(2, srcMobile, mobile);
      expect(setAttribute).toHaveBeenNthCalledWith(3, srcTablet, tablet);
    });

    it('should set the telenet image for wink', function () {
      const brandImageDirective = setup(MockWinkImageElementRef);
      brandImageDirective.telenetImg = {
        desktop,
        mobile,
        tablet,
      };
      brandImageDirective.baseImg = {
        desktop: `/base/${desktop}`,
        mobile: `/base/${mobile}`,
        tablet: `/base/${tablet}`,
      };
      brandImageDirective.isTelenet = true;
      brandImageDirective.ngOnChanges();
      expect(setAttribute).toHaveBeenCalledTimes(3);
      expect(setAttribute).toHaveBeenNthCalledWith(1, srcDesktop, desktop);
      expect(setAttribute).toHaveBeenNthCalledWith(2, srcMobile, mobile);
      expect(setAttribute).toHaveBeenNthCalledWith(3, srcTablet, tablet);
    });

    it('should set the base image for wink', function () {
      const brandImageDirective = setup(MockWinkImageElementRef);
      brandImageDirective.telenetImg = {
        desktop,
        mobile,
        tablet,
      };
      brandImageDirective.baseImg = {
        desktop: `/base/${desktop}`,
        mobile: `/base/${mobile}`,
        tablet: `/base/${tablet}`,
      };
      brandImageDirective.isTelenet = false;
      brandImageDirective.ngOnChanges();
      expect(setAttribute).toHaveBeenCalledTimes(3);
      expect(setAttribute).toHaveBeenNthCalledWith(1, srcDesktop, `/base/${desktop}`);
      expect(setAttribute).toHaveBeenNthCalledWith(2, srcMobile, `/base/${mobile}`);
      expect(setAttribute).toHaveBeenNthCalledWith(3, srcTablet, `/base/${tablet}`);
    });
  });

  function setup(clazz: new (nativeElement: ElementRef) => ElementRef) {
    TestBed.configureTestingModule({
      imports: [BrandImageDirective],
      declarations: [],
      providers: [{ provide: ElementRef, useClass: clazz }],
    }).compileComponents();
    return new BrandImageDirective(TestBed.inject(ElementRef));
  }
});
