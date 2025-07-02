import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

export enum FontColor {
  'brand-2e' = 'brand-2e',
  'brand-1e' = 'brand-1e',
}

@Directive({
  selector: '[tgFontColor]',
})
export class FontColorDirective implements OnInit {
  @Input('tgFontColor') fontColor = '';

  constructor(
    public renderer: Renderer2,
    public el: ElementRef
  ) {}

  ngOnInit(): void {
    this.addClasses();
  }

  private addClasses() {
    const fontColor = FontColor[this.fontColor as keyof typeof FontColor] ?? this.fontColor;
    this.renderer.addClass(this.el.nativeElement, 'color-' + fontColor);
  }
}
