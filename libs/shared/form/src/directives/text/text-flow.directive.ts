import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

export enum TextFlowType {
  'body' = 'body',
  'h1' = 'h1',
  'h3' = 'h3',
  'h4' = 'h4',
  'legal' = 'legal',
  'label' = 'label',
  'detail' = 'detail',
  'details' = 'details',
  'button' = 'button',
}

type textFlowType = 'body' | 'h1' | 'h3' | 'h4' | 'legal' | 'label' | 'detail' | 'details' | 'button';

@Directive({
  selector: '[tgTextFlow]',
})
export class TextFlowDirective implements OnInit {
  @Input('tgTextFlow') textFlow?: textFlowType;

  constructor(
    public renderer: Renderer2,
    public el: ElementRef
  ) {}

  ngOnInit(): void {
    this.addClasses();
  }

  private addClasses() {
    if (this.textFlow) {
      this.renderer.addClass(this.el.nativeElement, 'text-flow');
      this.renderer.addClass(this.el.nativeElement, 'text-flow--' + this.textFlow);
    }
  }
}
