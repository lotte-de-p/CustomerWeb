import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KeyboardNavigationService {
  private focusedList: HTMLElement | null = null;
  private focusedElement: HTMLElement | null = null;

  setFocusedList(element: HTMLElement | null) {
    this.focusedList = element;
  }

  getFocusedList(): HTMLElement | null {
    return this.focusedList;
  }

  setFocusedElement(element: HTMLElement | null) {
    this.focusedElement = element;
    this.focusedElement?.querySelector('a')?.focus();
  }

  getFocusedElement(): HTMLElement | null {
    return this.focusedElement;
  }
}
