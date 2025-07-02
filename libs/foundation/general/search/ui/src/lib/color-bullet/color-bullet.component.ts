import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[tg-general-search-color-bullets]',
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-container *ngIf="colors && colors.length > 0">
      <span
        [attr.data-testid]="'color-span'"
        *ngFor="let color of this.sortedColors"
        [style]="'background: ' + color"
        class="search-product__content__configurations-color border-radius--all--l  border-width--all--r border-style--all--solid border-color--all--mid-grey mt--xxs mr--xs"></span>
    </ng-container>
  `,
})
export class ColorBulletComponent implements OnInit {
  @Input() colors?: string[];
  sortedColors: string[];

  ngOnInit(): void {
    this.sortedColors = this.colors ? [...this.colors].sort() : [];
  }
}
