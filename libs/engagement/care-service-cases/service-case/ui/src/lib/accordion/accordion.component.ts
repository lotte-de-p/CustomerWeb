import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'care-accordion',
  imports: [CommonModule],
  standalone: true,
  template: ` <div class="accordion" data-cy="accordion">
    <ng-content></ng-content>
  </div>`,
})
export class AccordionComponent {}

@Component({
  selector: 'care-accordion-item',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="accordion__item" data-cy="accordion-item">
    <div class="accordion__header">
      <button
        class="accordion__button display--flex justify-content--between align-content--center background-transparent width--full border-none cursor--pointer py--m px--n"
        aria-expanded="true"
        data-cy="accordion-item-header"
        (click)="toggle()">
        <h5 class="heading--nomargin text-align--left">{{ title }}</h5>
        <i
          class="accordion__icon icon icon-no-size-override icon-md"
          [ngClass]="show ? 'icon-chevron-up' : 'icon-chevron-down'"></i>
      </button>
    </div>
    <div class="accordion__panel transition--ease-3ms" *ngIf="show" data-cy="accordion-item-content">
      <ng-content></ng-content>
    </div>
    <hr *ngIf="divider" style="margin: 0" />
  </div>`,
})
export class AccordionItemComponent implements OnChanges {
  @Input() title = '';
  @Input() divider = false;
  @Output() faqToggle = new EventEmitter<boolean>();

  show = false;

  toggle() {
    this.show = !this.show;
    this.faqToggle.emit(this.show);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['title']) {
      this.show = false;
    }
  }
}
