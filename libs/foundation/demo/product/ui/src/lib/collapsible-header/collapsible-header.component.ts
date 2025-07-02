import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'demo-product-collapsible-header',
  standalone: true,
  imports: [CommonModule],
  template: ` <div
      class="display--flex justify-content--between cur-pointer align-items--center"
      [attr.data-testid]="'collapsible-header'"
      (click)="toggleContentVisebility()">
      <span class="text-font-family--t7"> {{ header }} </span>
      <i
        class="icon icon-md product-overview__icon-section"
        [ngClass]="{ 'icon-chevron-up': showContent, 'icon-chevron-down': !showContent }"
        [attr.data-testid]="'dropdown'"></i>
    </div>
    <div *ngIf="showContent" [attr.data-testid]="'collapsible-content'">
      <ng-container *ngTemplateOutlet="detailRef"></ng-container>
    </div>`,
})
export class CollapsibleHeaderComponent {
  @ContentChild(TemplateRef) detailRef!: TemplateRef<unknown>;
  showContent = false;

  @Input() header!: string;

  toggleContentVisebility(): void {
    this.showContent = !this.showContent;
  }
}
