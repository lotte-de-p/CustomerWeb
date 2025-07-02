import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollFocusInvalidInput]',
})
export class ScrollFocusInvalidInputDirective {
  @Input() submitButtonClassName: string;

  constructor(private readonly el: ElementRef) {}

  @HostListener('submit')
  onFormSubmit() {
    this.focusElement(this.el.nativeElement);
  }

  @HostListener('click', ['$event.target'])
  onClick(targetElement: HTMLElement) {
    if (targetElement) {
      this.focusElement(document);
    }
  }

  private focusElement(element: HTMLElement | Document) {
    const invalidInput: HTMLInputElement | null = element.querySelector('.form-control.ng-invalid.ng-touched')
      ? element.querySelector('.form-control.ng-invalid.ng-touched')
      : element.querySelector('.ng-pristine.ng-touched.error:not(form)');

    if (invalidInput) {
      invalidInput.focus();

      window.scroll({
        top: this.getTopOffset(invalidInput),
        left: 0,
        behavior: 'smooth',
      });
    }
  }

  private getTopOffset(controlEl: HTMLElement): number {
    const labelOffset = 50;
    return controlEl.getBoundingClientRect().top + window.scrollY - labelOffset;
  }
}
