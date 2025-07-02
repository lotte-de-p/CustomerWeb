import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: 'i[tgIcon]',
})
export class IconDirective implements OnInit {
  @Input() iconType: string;
  @Input() iconSize: string;

  constructor(
    public renderer: Renderer2,
    public el: ElementRef
  ) {}

  ngOnInit(): void {
    this.addClasses();
  }

  private addClasses() {
    if (this.iconType) {
      this.renderer.addClass(this.el.nativeElement, `icon-${this.iconType}`);
    }
    if (this.iconSize) {
      this.renderer.addClass(this.el.nativeElement, `icon-${this.iconSize}`);
    }
  }
}
