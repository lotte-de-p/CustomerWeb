import { Directive, ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[appSalesStepperDirective]',
  standalone: true,
})
export class SalesStepperDirective {
  constructor(public viewContainer: ViewContainerRef) {}
}
