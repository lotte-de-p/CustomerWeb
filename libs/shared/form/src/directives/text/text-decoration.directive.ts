import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

export enum TextDecorationType {
  'line-through' = 'line-through',
}

type textDecorationType = 'line-through';

@Directive({
  selector: '[tgTextDecoration]',
})
export class TextDecorationDirective implements OnInit {
  @Input('tgTextDecoration') textDecoration: textDecorationType;

  constructor(
    public renderer: Renderer2,
    public el: ElementRef
  ) {}

  ngOnInit(): void {
    this.addClasses();
  }

  private addClasses() {
    if (this.textDecoration) {
      this.renderer.addClass(this.el.nativeElement, 'text-decoration--' + this.textDecoration);
    }
  }
}
