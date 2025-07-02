import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

export enum FontSize {
  'xxs' = 'xs',
  'xs' = 'xs',
  's' = 's',
  'm' = 'm',
  'xm' = 'xm',
  'r' = 'r',
}

type FontSizeType = 'xxs' | 'xs' | 's' | 'm' | 'xm' | 'r';

@Directive({
  selector: '[tgFontSize]',
})
export class FontSizeDirective implements OnInit {
  @Input('tgFontSize') fontSize: FontSizeType;

  constructor(
    public renderer: Renderer2,
    public el: ElementRef
  ) {}

  ngOnInit(): void {
    this.addClasses();
  }

  private addClasses() {
    if (this.fontSize) {
      this.renderer.addClass(this.el.nativeElement, 'text--' + this.fontSize);
    }
  }
}
