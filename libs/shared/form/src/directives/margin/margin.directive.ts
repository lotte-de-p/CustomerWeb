import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

export enum MarginSize {
  'xSmall' = 'xxs',
  'xxSmall' = 'xxxs',
  'small' = 's',
  'medium' = 'm',
  'large' = 'l',
  'xLarge' = 'xl',
  'xxLarge' = 'xxl',
}

export enum MarginPosition {
  'top' = 't',
  'bottom' = 'b',
  'left' = 'l',
  'right' = 'r',
}

export interface MarginOptions {
  position: 't' | 'b' | 'l' | 'r';
  size: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'g' | 'auto';
}

@Directive({
  selector: '[tgMargin]',
})
export class MarginDirective implements OnInit {
  @Input('tgMargin') margin: MarginOptions | MarginOptions[];

  constructor(
    public renderer: Renderer2,
    public el: ElementRef
  ) {}

  ngOnInit(): void {
    this.addClasses();
  }

  private addClasses() {
    if (!this.margin) {
      return;
    }
    if (Array.isArray(this.margin)) {
      this.margin.forEach((margin: MarginOptions) => {
        this.renderer.addClass(this.el.nativeElement, `m${margin.position}--${margin.size}`);
      });
    } else {
      this.renderer.addClass(this.el.nativeElement, `m${this.margin.position}--${this.margin.size}`);
    }
  }
}
