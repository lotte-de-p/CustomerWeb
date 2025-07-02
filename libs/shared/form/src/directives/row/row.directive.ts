import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: 'div[tgGridRow]',
})
export class RowDirective implements OnInit {
  @Input() fullGutters: boolean;

  constructor(
    public renderer: Renderer2,
    public el: ElementRef
  ) {}

  ngOnInit(): void {
    this.addClasses();
  }

  private addClasses() {
    this.renderer.addClass(this.el.nativeElement, 'row');
    this.checkGutter();
  }

  private checkGutter() {
    if (this.fullGutters) {
      this.renderer.addClass(this.el.nativeElement, 'row--full-gutters');
    }
  }
}
