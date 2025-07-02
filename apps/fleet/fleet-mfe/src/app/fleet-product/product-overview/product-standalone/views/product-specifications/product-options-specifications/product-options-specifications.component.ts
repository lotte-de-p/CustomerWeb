import { Component, Input } from '@angular/core';
import { ServiceInterface } from '@telenet/ng-lib-omapi';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'tg-product-options-specifications',
  templateUrl: './product-options-specifications.component.html',
  standalone: true,
  imports: [NgFor, NgIf],
})
export class ProductOptionsSpecificationsComponent {
  @Input() services: ServiceInterface[] | undefined;

  getFormattedSpecifications(specification?: string): string {
    // Specification is in the form:
    // -abc\n-def\n-ghi
    if (specification) {
      return specification.replace(/^-/g, '').replace(/\n-/g, '<li>');
    }
    return '';
  }
}
