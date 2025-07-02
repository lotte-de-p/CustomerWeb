import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

type fontFamilyType = 't1' | 't2' | 't3' | 't4' | 't5' | 't6' | 't7';

@Directive({
  selector: '[tgFontFamily]',
})
export class FontFamilyDirective implements OnInit {
  @Input('tgFontFamily') fontFamily: fontFamilyType = 't4';

  constructor(
    public renderer: Renderer2,
    public el: ElementRef
  ) {}

  ngOnInit(): void {
    this.addClasses();
  }

  private addClasses() {
    this.renderer.addClass(this.el.nativeElement, 'text-font-family--' + this.fontFamily);
  }
}
