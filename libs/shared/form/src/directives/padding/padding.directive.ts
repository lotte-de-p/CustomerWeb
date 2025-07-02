import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

export enum PaddingSize {
  'xxxSmall' = 'xxxs',
  'xSmall' = 'xxs',
  'small' = 's',
  'medium' = 'm',
  'large' = 'l',
  'xLarge' = 'xl',
  'xxLarge' = 'xxl',
}

export enum PaddingPositions {
  '' = '',
  'top' = 't',
  'bottom' = 'b',
  'left' = 'l',
  'right' = 'r',
}

export interface PaddingOptions {
  position?: '' | 't' | 'b' | 'l' | 'r';
  size: 'xxxs' | 'xxs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
}

@Directive({
  selector: '[tgPadding]',
})
export class PaddingDirective implements OnInit {
  @Input('tgPadding') padding: PaddingOptions | PaddingOptions[];

  constructor(
    public renderer: Renderer2,
    public el: ElementRef
  ) {}

  ngOnInit(): void {
    this.addClasses();
  }

  private addClasses() {
    if (!this.padding) {
      return;
    }
    if (Array.isArray(this.padding)) {
      this.padding.forEach((padding: PaddingOptions) => {
        if (!padding.position) {
          padding.position = '';
        }
        this.renderer.addClass(this.el.nativeElement, `p${padding.position}--${padding.size}`);
      });
    } else {
      if (!this.padding.position) {
        this.padding.position = '';
      }
      this.renderer.addClass(this.el.nativeElement, `p${this.padding.position}--${this.padding.size}`);
    }
  }
}
