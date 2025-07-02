import { Component, EventEmitter, inject, Input, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  KeyboardNavigationService,
  SearchFacadeService,
  SuggestionItem,
  Suggestions,
} from '@general/data-access-search';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'tg-foundation-general-search-inpage-search-suggestions',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <ul class="in-page-search--results-query display--flex flex-direction--column width--full">
      <li
        (mouseenter)="setFocus(el)"
        #el
        class="in-page-search--results-query-items display--flex flex-direction--row width--full pb--xs"
        [attr.data-testid]="'tgFoundationGeneralSearchSuggestions'"
        *ngFor="let suggestion of suggestions?.[suggestionsFieldName]">
        <a
          class="display--block width--full text-decoration--none pr--xxxs color-text"
          (click)="select($event, suggestion)"
          [href]="getDeepLink(suggestion.text) | async"
          [innerHTML]="suggestion.highlight"
          [attr.data-testid]="'tgFoundationGeneralSearchSuggestion'"></a>
      </li>
    </ul>
  `,
})
export class SuggestionsComponent {
  @Input() suggestions: Suggestions | null = { locale: '', hits: [], asYouType: [] };
  @Input() suggestionsFieldName: string;
  @Output() selectSuggestion = new EventEmitter<SuggestionItem>();

  readonly #searchFacadeService = inject(SearchFacadeService);
  readonly #keyboardNavigationService = inject(KeyboardNavigationService);

  getDeepLink(query: string) {
    return this.#searchFacadeService.getSearchResultsPageForInPage(query);
  }

  setFocus(el: HTMLElement) {
    this.#keyboardNavigationService.setFocusedElement(el);
  }

  select($event: MouseEvent, suggestion: SuggestionItem) {
    if ($event.currentTarget?.['href']) {
      $event.preventDefault();
      this.#searchFacadeService.selectSuggestionInPage(suggestion, $event.currentTarget?.['href']);
    }
  }
}
