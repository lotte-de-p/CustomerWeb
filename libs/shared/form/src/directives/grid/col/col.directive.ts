import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: 'div[tgGridCol]',
})
export class ColDirective implements OnInit {
  @Input() columns = 12;
  @Input() breakpoint: string;

  constructor(
    public renderer: Renderer2,
    public el: ElementRef
  ) {}

  ngOnInit(): void {
    this.addClasses();
  }

  private addClasses() {
    if (this.breakpoint) {
      this.renderer.addClass(this.el.nativeElement, 'col-' + this.breakpoint + '-' + this.columns);
    } else {
      this.renderer.addClass(this.el.nativeElement, 'col-' + this.columns);
    }
  }
}
