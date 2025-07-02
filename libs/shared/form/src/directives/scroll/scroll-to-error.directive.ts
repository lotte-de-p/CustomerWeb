import { Directive, ElementRef, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { FormErrorService } from '../../errors';

@Directive({
  selector: '[scrollToError]',
})
export class ScrollToErrorDirective implements OnDestroy {
  formSubscription: Subscription;

  constructor(
    private readonly elmRef: ElementRef,
    private readonly formErrorService: FormErrorService
  ) {
    this.formSubscription = this.formErrorService.submit$.subscribe(() => {
      this.scrollToFirstInvalidControl();
    });
  }

  private scrollToFirstInvalidControl() {
    const firstInvalidControl: HTMLElement = this.elmRef.nativeElement.querySelector(
      'form input.ng-invalid, form input.ng-invalid-custom'
    );

    if (firstInvalidControl) {
      window.scroll({
        top: ScrollToErrorDirective.getTopOffset(firstInvalidControl),
        left: 0,
        behavior: 'smooth',
      });
    }
  }

  private static getTopOffset(controlEl: HTMLElement): number {
    const labelOffset = 50;
    return controlEl.getBoundingClientRect().top + window.scrollY - labelOffset;
  }

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
  }
}
