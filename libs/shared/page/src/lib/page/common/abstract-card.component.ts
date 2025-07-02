import { ElementRef } from '@angular/core';
import { AbstractBaseComponent } from './abstract-base.component';

const TIMEOUT = 800;

export abstract class AbstractCardComponent extends AbstractBaseComponent {
  protected constructor(
    protected elementRef: ElementRef,
    protected document?: Document
  ) {
    super();
  }

  hideCard(): void {
    setTimeout(() => {
      this.parentCardElement?.dispatchEvent(new CustomEvent('card:hide', { bubbles: true }));
    }, TIMEOUT);
  }

  showSimpleCard(): void {
    setTimeout(() => {
      this.parentCardElement?.dispatchEvent(new CustomEvent('card:show-simple-view', { bubbles: true }));
    }, TIMEOUT);
  }

  hideSimpleCard(): void {
    setTimeout(() => {
      this.parentCardElement?.dispatchEvent(new CustomEvent('card:hide-simple-view', { bubbles: true }));
    }, TIMEOUT);
  }

  showCardWithData<T>(data: T): void {
    setTimeout(() => {
      this.parentCardElement?.dispatchEvent(new CustomEvent('card:show-data', { bubbles: true, detail: data }));
    }, TIMEOUT);
  }

  updateCardTarget(url: string): void {
    setTimeout(() => {
      this.parentCardElement?.dispatchEvent(new CustomEvent('card:updateTarget', { bubbles: true, detail: url }));
    }, TIMEOUT);
  }

  processClick(url: string): void {
    setTimeout(() => {
      this.parentCardElement?.dispatchEvent(new CustomEvent('card:click', { bubbles: true, detail: { url: url } }));
    }, TIMEOUT);
  }

  private get parentCardElement(): Element {
    const cardElement = this.elementRef.nativeElement;
    return (
      cardElement?.closest('[data-tg-cmp-dashboard-card-instance-id]') ||
      cardElement?.closest('[data-component-instance-id]')
    );
  }
}
