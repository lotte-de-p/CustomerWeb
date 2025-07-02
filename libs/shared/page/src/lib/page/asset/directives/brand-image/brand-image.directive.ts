import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

type ImageSrcSet = {
  desktop: string;
  mobile: string;
  tablet: string;
};

@Directive({
  selector: '[brandImage]',
  standalone: true,
})
export class BrandImageDirective implements OnChanges {
  @Input() isTelenet = false;
  @Input() img: ImageSrcSet | string = '';
  @Input() telenetImg: ImageSrcSet | string = '';
  @Input() baseImg: ImageSrcSet | string = '';

  constructor(private readonly el: ElementRef) {}

  ngOnChanges() {
    const image = this.getImageSrcSet();
    if (this.el.nativeElement.tagName === 'WINK-IMG') {
      this.el.nativeElement.setAttribute('src-desktop', image.desktop);
      this.el.nativeElement.setAttribute('src-mobile', image.mobile);
      this.el.nativeElement.setAttribute('src-tablet', image.tablet);
    }
    if (this.el.nativeElement.tagName === 'IMG') {
      this.el.nativeElement.setAttribute('src', image.desktop);
    }
  }

  get image() {
    if (this.isTelenet && this.telenetImg) {
      return this.telenetImg;
    }
    if (!this.isTelenet && this.baseImg) {
      return this.baseImg;
    }
    return this.img;
  }

  private getImageSrcSet(): ImageSrcSet {
    if (typeof this.image === 'string') {
      const image = this.image;
      return {
        desktop: image,
        tablet: image,
        mobile: image,
      };
    } else {
      const image = this.image;
      return {
        desktop: image.desktop,
        mobile: image.mobile,
        tablet: image.tablet,
      };
    }
  }
}
