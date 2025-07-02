import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[tgSalesProductFinderAlignRecommendationHtmlElements]',
})
export class AlignRecommendationHtmlElementsDirective implements OnInit, AfterViewInit {
  @Input('tgSalesProductFinderAlignRecommendationHtmlElements') className!: string;

  constructor(
    private readonly el: ElementRef,
    private readonly renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, this.className);
  }

  ngAfterViewInit(): void {
    this.alignRecommendationHTMLElements();
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.alignRecommendationHTMLElements();
  }

  private alignRecommendationHTMLElements(): void {
    const elements: Element[] = Array.from(document.getElementsByClassName(this.className));
    this.resetHeightToAuto(elements);
    this.setHeightToMaxHeight(elements);
  }

  private resetHeightToAuto(elements: Element[]): void {
    elements
      .map((el: Element) => el as HTMLElement)
      .forEach((htmlElement: HTMLElement) => {
        htmlElement.style.height = 'auto';
      });
  }

  private setHeightToMaxHeight(elements: Element[]): void {
    const maxHeight: number = this.getMaxHeight(elements);
    elements
      .map((el: Element) => el as HTMLElement)
      .forEach((htmlElement: HTMLElement) => {
        htmlElement.style.height = maxHeight + 'px';
      });
  }

  private getMaxHeight(elements: Element[]): number {
    return Math.max(...elements.map((el: Element) => el.scrollHeight));
  }
}
