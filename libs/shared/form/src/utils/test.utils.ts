import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

export class Tid {
  constructor(
    public de: DebugElement,
    public tid: string
  ) {}

  get nativeElement(): HTMLHtmlElement {
    return this.de.nativeElement as HTMLHtmlElement;
  }

  get inputElement(): HTMLInputElement {
    return this.de.nativeElement as HTMLInputElement;
  }

  get nativeElementSelectElement(): HTMLSelectElement {
    return this.de.nativeElement as HTMLSelectElement;
  }

  get text(): string {
    return (this.de?.nativeElement as HTMLHtmlElement)?.textContent?.trim() || '';
  }

  set text(text: string) {
    (this.de.nativeElement as HTMLHtmlElement).textContent = text;
  }

  get src(): string {
    return this.findAttribute('src');
  }

  get href(): string {
    return this.findAttribute('href');
  }

  get disabled(): boolean {
    const disabled = (this.de.nativeElement as HTMLButtonElement).attributes.getNamedItem('disabled');
    return disabled !== null && disabled.name === 'disabled';
  }

  get checked(): boolean {
    return (this.de.nativeElement as HTMLInputElement).checked;
  }

  findAttribute(attribute: string): string {
    return (this.de.nativeElement as HTMLHtmlElement)?.getAttribute(attribute) || '';
  }

  hasCssClass(cssClass: string) {
    return (this.de.nativeElement as HTMLHtmlElement).classList.contains(cssClass);
  }

  click() {
    this.nativeElement.click();
  }

  sendKeys(value: string) {
    const nativeElement: HTMLInputElement = this.de.nativeElement as HTMLInputElement;
    nativeElement.value = value;
    nativeElement.dispatchEvent(new Event('input'));
  }
}

export const queryAllByTid = (de: DebugElement, tid: string): Tid[] => {
  const elements = de.queryAll(By.css(`*[data-tid='${tid}']`));
  if (!elements) {
    return [];
  }
  return elements.map((element) => new Tid(element, tid));
};

const queryOptionalByTid = (de: DebugElement, tid: string): Tid | undefined => {
  const tids = queryAllByTid(de, tid);
  if (tids.length > 1) {
    throw new Error(`queryByTid(${tid}) : multiple elements : ${tids.length}`);
  } else if (tids.length === 1) {
    return tids[0];
  } else {
    return undefined;
  }
};

/**
 * Select an element from the DOM using a data-tid selector
 * Example of usage:
 * ```html
 * <p data-tid='name'>John Doe</p>
 * expect(queryByTid(de, 'name').text).toBe('John Doe');
 * ```
 *
 * @param de DebugElement from the fixture you are testing
 * @param tid Test id used to select pieces of the template:
 *
 * @return The selected element wrapped in a Tid object
 * @throws Throws an error if there is no such element, or if there are multiple.
 */
export const queryByTid = (de: DebugElement, tid: string): Tid | null => {
  const tidElem = queryOptionalByTid(de, tid);
  if (!tidElem) {
    return null;
  } else {
    return tidElem;
  }
};
