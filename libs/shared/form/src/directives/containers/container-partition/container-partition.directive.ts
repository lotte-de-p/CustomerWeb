import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: 'div[tgContainerPartition]',
})
export class ContainerPartitionDirective implements OnInit {
  @Input() firstItem: boolean;
  @Input() lastItem: boolean;
  @Input() inverted: boolean;
  @Input() dashed: boolean;
  @Input() noBorders: boolean;
  @Input() noPadding: boolean;

  constructor(
    public renderer: Renderer2,
    public el: ElementRef
  ) {}

  ngOnInit(): void {
    this.addClasses();
  }

  private addClasses() {
    this.renderer.addClass(this.el.nativeElement, 'Container--partitioned--partition');

    if (this.firstItem) {
      this.addContainerClass('first-item');
    }

    if (this.lastItem) {
      this.addContainerClass('last-item');
    }

    if (this.inverted) {
      this.addContainerClass('inverted');
    }

    if (this.dashed) {
      this.addContainerClass('dashed');
    }

    if (this.noBorders) {
      this.addContainerClass('no-borders');
    }

    if (this.noPadding) {
      this.addContainerClass('no-padding');
    }
  }

  private addContainerClass(suffix: string) {
    this.renderer.addClass(this.el.nativeElement, 'Container--partitioned--partition--' + suffix);
  }
}
