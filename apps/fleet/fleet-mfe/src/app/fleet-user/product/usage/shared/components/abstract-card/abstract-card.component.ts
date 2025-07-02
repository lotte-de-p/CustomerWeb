import { ElementRef } from '@angular/core';
import { AbstractBaseComponent } from '@telenet/ng-lib-page';

export abstract class AbstractCardComponent extends AbstractBaseComponent {
  parentCardElementCheckInterval = 200;
  parentCardElementCheckMaxDuration = 8000;

  protected constructor(
    protected elementRef: ElementRef,
    protected document?: Document
  ) {
    super();
  }

  hideCard(): void {
    this.waitForParentCardElementAndExecute((parentElement: Element) => {
      this.dispatchEvent(parentElement, 'card:hide');
    });
  }

  showSimpleCard(): void {
    this.waitForParentCardElementAndExecute((parentElement: Element) => {
      this.dispatchEvent(parentElement, 'card:show-simple-view');
    });
  }

  hideSimpleCard(): void {
    this.waitForParentCardElementAndExecute((parentElement: Element) => {
      this.dispatchEvent(parentElement, 'card:hide-simple-view');
    });
  }

  showCardWithData(data: unknown): void {
    setTimeout(() => {
      this.parentCardElement?.dispatchEvent(new CustomEvent('card:show-data', { bubbles: true, detail: data }));
    }, 800);
  }

  updateCardTarget(url: string): void {
    setTimeout(() => {
      this.parentCardElement?.dispatchEvent(new CustomEvent('card:updateTarget', { bubbles: true, detail: url }));
    }, 800);
  }

  processClick(url: string): void {
    setTimeout(() => {
      this.parentCardElement?.dispatchEvent(new CustomEvent('card:click', { bubbles: true, detail: { url: url } }));
    }, 800);
  }

  disableCardClickEvent(selectorString: string): void {
    const currentNode: HTMLElement = this.document.querySelector(selectorString);
    const parentCardNode = currentNode && currentNode.closest('a');
    if (currentNode && parentCardNode) {
      parentCardNode.style.pointerEvents = 'none';
      currentNode.style.pointerEvents = 'none';
      currentNode.addEventListener('click', (e) => e.stopPropagation());
      parentCardNode.removeAttribute('href');
    }
  }

  dispatchEvent(element: Element, eventName: string, detail?: object): void {
    element?.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        detail,
      })
    );
  }

  get parentCardElement(): Element {
    const cardElement = this.elementRef.nativeElement;
    const parentElement =
      cardElement?.closest('[data-tg-cmp-dashboard-card-instance-id]') ||
      cardElement?.closest('[data-component-instance-id]');
    return parentElement?.hasAttribute('data-tg-cmp-is') ? null : parentElement;
  }

  waitForParentCardElementAndExecute(callback: (el: Element) => void): void {
    let elapsedTime = 0;

    if (this.parentCardElement) {
      callback(this.parentCardElement);
      return;
    }

    const interval = setInterval(() => {
      elapsedTime += this.parentCardElementCheckInterval;
      const parentElement = this.parentCardElement;
      if (parentElement) {
        clearInterval(interval);
        callback(parentElement);
      } else if (elapsedTime >= this.parentCardElementCheckMaxDuration) {
        clearInterval(interval);
      }
    }, this.parentCardElementCheckInterval);
  }
}
