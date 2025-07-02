import { Directive, ElementRef, AfterViewChecked, Input } from '@angular/core';
import { ClientBrowserTypeService } from '@telenet/ng-lib-page';

@Directive({
  selector: '[matchHeightClass]',
})
export class MatchHeightDirective implements AfterViewChecked {
  private static readonly SAFARI_HEIGHT_CALCULATION_DIFFERENCE_COMPENSATOR = 1.4;

  @Input()
  matchHeightClass: string;

  constructor(
    private readonly el: ElementRef,
    private readonly clientBrowserTypeService: ClientBrowserTypeService
  ) {}

  ngAfterViewChecked() {
    this.matchHeight(this.el.nativeElement);
  }

  matchHeight(parent: HTMLElement) {
    if (!parent) {
      return;
    }
    const children = parent.getElementsByClassName(this.matchHeightClass) as HTMLCollectionOf<HTMLElement>;

    if (!children) {
      return;
    }

    Array.from(children).forEach((x: HTMLElement) => {
      x.style.height = 'initial';
    });

    const itemHeights = Array.from(children).map((x) => {
      if (this.clientBrowserTypeService.isClientUsingSafari()) {
        return x.clientHeight * MatchHeightDirective.SAFARI_HEIGHT_CALCULATION_DIFFERENCE_COMPENSATOR;
      } else {
        return x.clientHeight;
      }
    });

    const maxHeight = itemHeights.reduce((prev, curr) => {
      return curr > prev ? curr : prev;
    }, 0);

    Array.from(children).forEach((x: HTMLElement) => (x.style.height = `${maxHeight}px`));
  }
}
