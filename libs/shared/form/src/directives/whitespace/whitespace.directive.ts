import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

export type whitespaceOptions = 'tiny' | 'small' | 'medium' | 'large' | 'extra-large';

@Directive({
  selector: '[tgWhitespace]',
})
export class WhitespaceDirective implements OnInit {
  @Input('tgWhitespace') whitespaceSize: whitespaceOptions = 'small';

  constructor(
    public renderer: Renderer2,
    public el: ElementRef
  ) {}

  ngOnInit(): void {
    this.addClasses();
  }

  private addClasses() {
    this.renderer.addClass(this.el.nativeElement, 'whitespace');

    switch (this.whitespaceSize) {
      case 'small':
        this.renderer.addClass(this.el.nativeElement, 'whitespace--small');
        break;
      case 'medium':
        this.renderer.addClass(this.el.nativeElement, 'whitespace--medium');
        break;
      case 'large':
        this.renderer.addClass(this.el.nativeElement, 'whitespace--large');
        break;
      case 'extra-large':
        this.renderer.addClass(this.el.nativeElement, 'whitespace--xlarge');
        break;
      default:
        this.renderer.addClass(this.el.nativeElement, 'whitespace--small');
        break;
    }
  }
}
