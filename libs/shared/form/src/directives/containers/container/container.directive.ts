import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: 'div[tgContainer]',
})
export class ContainerDirective implements OnInit {
  @Input() partitioned = false;
  @Input() shadow = true;
  @Input() bordered = false;
  @Input() cursor = false;

  constructor(
    public renderer: Renderer2,
    public el: ElementRef
  ) {}

  ngOnInit(): void {
    this.addClasses();
  }

  private addClasses() {
    this.renderer.addClass(this.el.nativeElement, 'Container');

    if (this.partitioned) {
      this.addContainerClass('partitioned');
    }

    if (this.bordered) {
      this.addContainerClass('bordered');
    }

    if (this.cursor) {
      this.renderer.addClass(this.el.nativeElement, 'cursor--pointer');
    }

    if (this.shadow) {
      this.addContainerClass('shadow--to-delete');
    }
  }

  private addContainerClass(suffix: string) {
    this.renderer.addClass(this.el.nativeElement, 'Container--' + suffix);
  }
}
