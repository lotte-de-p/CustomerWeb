import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '@general/ui-search';
import { TranslateModule } from '@ngx-translate/core';
import { SearchFacadeService, SearchResultItem } from '@general/data-access-search';

@Component({
  selector: 'tg-foundation-general-search-top-result',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, BadgeComponent, TranslateModule],
  template: `
    <a
      [href]="item?.type === 'product' ? this.detailsPagePath + '?productId=' + item?.product?.id : item?.displayUrl"
      (click)="goToPage($event, item)"
      class="display--flex flex-direction--row width--full text-decoration--none justify-content--between align-items--center color-text">
      <div class="header-search--autosuggest-results-item" [attr.aria-label]="item?.name">{{ item?.name }}</div>
      <tg-foundation-general-search-badge *ngIf="getCategoryLabel() as categoryLabel">
        {{ categoryLabel | translate }}
      </tg-foundation-general-search-badge>
    </a>
  `,
})
export class TopResultComponent {
  @Input() item: SearchResultItem;
  @Input() detailsPagePath: string;

  readonly #searchFacadeService = inject(SearchFacadeService);

  getCategoryLabel(): string {
    const category = this.item?.tags.find((tag) => 'category' === tag.name)?.value[0];
    if (category) {
      return `tags.category.${category}`;
    }
    return '';
  }

  goToPage($event: MouseEvent, searchResult: SearchResultItem) {
    if ($event.currentTarget?.['href']) {
      $event.preventDefault();
      this.#searchFacadeService.goToResult($event.currentTarget?.['href'], searchResult);
    }
  }
}
