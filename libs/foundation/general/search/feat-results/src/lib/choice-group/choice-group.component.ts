import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacetGroup } from '@general/data-access-search';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[tg-general-search-choice-group]',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="search-product--nav__items mb--l">
      <legend class="search-product--nav__items-name heading--6 heading--notopmargin mb--xxs mb--m--md">
        {{ facetGroup.title | translate }}
      </legend>
      <fieldset>
        <div
          class="search-product--nav__items-select display--flex align-items--center mb--s"
          *ngFor="let facet of facetGroup.facets; index as i">
          <div [ngClass]="type === ChoiceType.SINGLE ? 'form__radio' : 'form__checkbox'">
            <input
              [type]="type === ChoiceType.SINGLE ? 'radio' : 'checkbox'"
              [ngClass]="type === ChoiceType.SINGLE ? 'form__radio__input' : 'form__checkbox__input'"
              id="{{ getGroup() + '_' + i }}"
              name="{{ facet.label }}"
              [checked]="facet.selected"
              (change)="notifySelection(i)" />
            <label
              [ngClass]="type === ChoiceType.SINGLE ? 'form__radio__label' : 'form__checkbox__label'"
              for="{{ getGroup() + '_' + i }}"
              >&nbsp;</label
            >
          </div>
          <label
            [attr.data-testid]="facet.label"
            for="{{ getGroup() + '_' + i }}"
            [ngClass]="type === ChoiceType.SINGLE ? 'label--large' : 'form__checkbox__label--default label--large'"
            >{{ facet.label | translate }}
            <ng-container *ngIf="facet.count">({{ facet.count }})</ng-container>
          </label>
        </div>
      </fieldset>
    </div>
  `,
  styles: [],
})
export class ChoiceGroupComponent {
  protected readonly ChoiceType = ChoiceType;
  @Input() facetGroup: FacetGroup;
  @Input() groupPrefix = '';
  @Input() type: ChoiceType = ChoiceType.MULTI;
  @Output() selectionChanged = new EventEmitter<number>();

  getGroup() {
    return `${this.groupPrefix}_${this.facetGroup.title.replace(/\s/g, '').toLowerCase()}`;
  }

  notifySelection(index: number) {
    this.selectionChanged.emit(index);
  }
}

export enum ChoiceType {
  SINGLE,
  MULTI,
}
