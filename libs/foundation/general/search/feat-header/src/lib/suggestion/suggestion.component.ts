import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@general/ui-search';
import { SearchFacadeService, SuggestionItem } from '@general/data-access-search';
import { firstValueFrom, Observable } from 'rxjs';

@Component({
  selector: 'tg-foundation-general-search-suggestion',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <a
      *ngIf="getSearchResultsPageUrl() | async as url"
      (click)="goToResultsPage(url)"
      (focus)="selectSuggestion()"
      (mouseover)="selectSuggestion()"
      tabindex="0"
      [attr.data-testid]="'suggestion-item'"
      class="display--flex flex-direction--row width--full text-decoration--none pr--xxxs color-text"
      [attr.aria-label]="item?.text">
      <div class="header-search--autosuggest-query-item-icon" aria-hidden="true">
        <tg-foundation-general-search-icon [attr.data-testid]="'general-search-icon'" type="search">
        </tg-foundation-general-search-icon>
      </div>
      <div
        [attr.data-testid]="'suggestion-text'"
        class="header-search--autosuggest-query-item"
        [innerHTML]="item?.highlight"></div>
    </a>
  `,
})
export class SuggestionComponent {
  @Input() item?: SuggestionItem;

  readonly #searchFacadeService = inject(SearchFacadeService);

  getSearchResultsPageUrl(): Observable<string> {
    return this.#searchFacadeService.getSearchResultsPageUrl(this.item?.text);
  }

  async goToResultsPage(url: string) {
    await this.#searchFacadeService.setQuery(this.item?.text ?? '');
    await firstValueFrom(this.#searchFacadeService.redirectOrUpdateSearchResultsPage(url, true));
    this.#searchFacadeService.setHeaderExpanded(false);
  }

  selectSuggestion() {
    if (this.item) {
      this.#searchFacadeService.selectSuggestion(this.item);
    }
  }
}
