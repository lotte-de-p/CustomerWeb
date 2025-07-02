import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickPreventDefault]',
})
export class ClickPreventDefaultDirective {
  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent): void {
    event.preventDefault();
  }
}
