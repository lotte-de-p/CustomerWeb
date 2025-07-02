import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

export enum FontWeight {
  'regular' = 'r',
  'medium' = 'm',
  'large' = 'l',
  'giant' = 'g',
  'xxl' = 'xxl',
}

type fontWeightType = 'r' | 'm' | 'g' | 'l' | 'xl' | 'xxl';

@Directive({
  selector: '[tgFontWeight]',
})
export class FontWeightDirective implements OnInit {
  @Input('tgFontWeight') fontWeight: fontWeightType;

  constructor(
    public renderer: Renderer2,
    public el: ElementRef
  ) {}

  ngOnInit(): void {
    this.addClasses();
  }

  private addClasses() {
    if (this.fontWeight) {
      this.renderer.addClass(this.el.nativeElement, 'text-weight--' + this.fontWeight);
    }
  }
}
