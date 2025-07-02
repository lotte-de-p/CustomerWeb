import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[tgMarketingTogglePanel]',
  standalone: true,
})
export class TogglePanelDirective {
  static readonly CLASS_PANEL_COLLAPSED = 'accordion--panel__collapsed';
  @Input('tgMarketingTogglePanel') panelClass: string;

  constructor(
    private readonly elRef: ElementRef,
    private readonly renderer: Renderer2
  ) {}

  @HostListener('click')
  handleClick() {
    const header: HTMLElement = this.elRef.nativeElement;
    const panel: HTMLElement = this.panelClass
      ? header?.parentElement?.querySelector(`.${this.panelClass}`)
      : this.renderer.nextSibling(header);

    if (panel && !panel.classList.contains(TogglePanelDirective.CLASS_PANEL_COLLAPSED)) {
      this.renderer.addClass(panel, TogglePanelDirective.CLASS_PANEL_COLLAPSED);
      return;
    }

    if (panel && panel.style.maxHeight) {
      this.setHeight(panel, 'scrollHeight');
      requestAnimationFrame(() => {
        this.setHeight(panel, null);
      });
      return;
    }

    this.setHeight(panel, 'scrollHeight');

    const eventHandler = function () {
      if (getComputedStyle(panel).maxHeight !== '0px') {
        panel.style.maxHeight = 'unset';
      }
      panel.removeEventListener('transitionend', eventHandler);
    };

    panel.addEventListener('transitionend', eventHandler);
  }
  private setHeight(el: HTMLElement, heightProperty: string | null): void {
    this.renderer.setStyle(el, 'maxHeight', heightProperty ? el[heightProperty] + 'px' : null);
  }
}
