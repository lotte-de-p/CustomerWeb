import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[tgFullWidth]',
})
export class FullWidthDirective implements OnInit {
  constructor(
    public renderer: Renderer2,
    public el: ElementRef
  ) {}

  ngOnInit(): void {
    this.addClasses();
  }

  private addClasses() {
    this.renderer.addClass(this.el.nativeElement, 'width--full');
  }
}
