import { AfterViewChecked, Directive, ElementRef, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[autoHeight]',
})
export class AutoHeightDirective implements AfterViewChecked {
  @Input()
  matchWithClass: string;

  constructor(
    private readonly el: ElementRef,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  ngAfterViewChecked() {
    this.setHeight(this.el.nativeElement);
  }

  setHeight(element: HTMLElement) {
    element.style.height = this.getHeight() + 'px';
  }

  getHeight() {
    if (this.matchWithClass) {
      return this.document?.getElementsByClassName?.(this.matchWithClass)?.item(0)?.clientHeight;
    }
    return 100;
  }
}
