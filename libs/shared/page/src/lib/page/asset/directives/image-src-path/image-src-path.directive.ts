import { Directive, ElementRef, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[src]',
})
export class ImageSrcPathDirective implements OnChanges {
  @Input() override = false;

  @Input() src = '';

  constructor(
    private readonly el: ElementRef,
    @Inject('IMAGE_BASE_PATH') private readonly imageBasePath: string
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['src']?.isFirstChange()) {
      const imagePath = changes['src'].currentValue;

      if (this.el.nativeElement.tagName !== 'IMG' || this.override) {
        this.el.nativeElement.src = imagePath;
        return;
      }

      const imageBasePathWithoutSlash = this.imageBasePath.endsWith('/')
        ? this.imageBasePath.slice(0, -1)
        : this.imageBasePath;
      const imagePathWithoutLeadingSlash = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
      this.el.nativeElement.src = `${imageBasePathWithoutSlash}/${imagePathWithoutLeadingSlash}`;
    }
  }
}
