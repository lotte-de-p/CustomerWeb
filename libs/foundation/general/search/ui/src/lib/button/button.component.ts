import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-foundation-general-search-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="border-width--all--n" [ngClass]="[customClasses.join(''), hideMobile ? 'hide--mobile' : '']">
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Input() customClasses = [''];
  @Input() hideMobile = false;
}
