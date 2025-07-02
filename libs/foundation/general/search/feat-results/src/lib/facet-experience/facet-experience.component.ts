import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacetGroup } from '@general/data-access-search';
import { ChoiceGroupComponent, ChoiceType } from '../choice-group/choice-group.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[tg-general-search-facets]',
  standalone: true,
  imports: [CommonModule, ChoiceGroupComponent, TranslateModule],
  templateUrl: `./facet-experience.component.html`,
})
export class FacetExperienceComponent {
  protected readonly ChoiceType = ChoiceType;
  @Input() facetGroups: FacetGroup[] | undefined | null = [];
  @Input() collections: FacetGroup | undefined | null;
  @Input() overlayActive = false;
  @Output() overlayActiveChange = new EventEmitter<boolean>();
  @Output() facetChanged = new EventEmitter<{ groupIndex: number; facetIndex: number }>();
  @Output() collectionChanged = new EventEmitter<number>();
  @Output() facetsCleared = new EventEmitter<void>();

  notifyFacetsChanged(groupIndex: number, facetIndex: number) {
    this.facetChanged.emit({ groupIndex, facetIndex });
  }
  notifyCollectionChanged(collectionIndex: number) {
    this.collectionChanged.emit(collectionIndex);
  }
  notifyFacetsCleared() {
    this.facetsCleared.emit();
  }

  toggleOverlay() {
    this.overlayActive = !this.overlayActive;
    this.overlayActiveChange.emit(this.overlayActive);
  }
}
