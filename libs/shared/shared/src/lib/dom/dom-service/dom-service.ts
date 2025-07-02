import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DomService {
  findElementById(id: string): HTMLElement | null {
    return document.getElementById(id);
  }

  appendScript(src: string, id?: string, onLoadCallback?: VoidFunction): void {
    const script = document.createElement('script');
    script.src = src;
    script.id = id || '';
    script.onload = onLoadCallback || null;
    const head = document.getElementsByTagName('head')[0];
    head.appendChild(script);
  }

  scrollToElement(selector: string, delay?: number): void {
    setTimeout(() => {
      const elementToScroll = document.querySelector(selector);
      if (elementToScroll) {
        elementToScroll.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, delay);
  }

  scrollToStartElement(selector: string, delay?: number): void {
    setTimeout(() => {
      const elementToScrollAtStart = document.querySelector(selector);
      if (elementToScrollAtStart) {
        elementToScrollAtStart.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, delay);
  }

  scrollToTop(): void {
    setTimeout(() => {
      const elementToScroll = document.querySelector('#app');
      if (elementToScroll) {
        elementToScroll.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  getDomElement(selector: string): HTMLElement | null {
    return document.querySelector(selector);
  }

  toggleBodyOverflow(isBodyScrollable: boolean): void {
    const domElement = this.getDomElement('body');
    if (domElement) {
      domElement.style.overflow = isBodyScrollable ? 'hidden' : '';
    }
  }

  scrollElementToTop(selector: string): void {
    const domElement = this.getDomElement(selector);
    if (domElement) {
      domElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }

  scrollIntoViewBasedOnId(id: string): void {
    const elementToScroll = document.getElementById(id);
    elementToScroll?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
