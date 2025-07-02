import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@general/ui-search';
import { SuggestionComponent } from '../suggestion/suggestion.component';
import { KeyboardNavigationService, Suggestions } from '@general/data-access-search';
import { Observable } from 'rxjs';

@Component({
  selector: 'tg-foundation-general-search-suggestions',
  standalone: true,
  imports: [CommonModule, IconComponent, SuggestionComponent],
  template: `
    <ul class="header-search--autosuggest-query display--flex flex-direction--column width--full" tabindex="0">
      <li
        (mouseenter)="setFocus(el)"
        #el
        class="header-search--autosuggest-query-items display--flex flex-direction--row width--full"
        *ngFor="let suggestionItem of (suggestions$ | async)?.[suggestionsFieldName]">
        <tg-foundation-general-search-suggestion class="width--full" [item]="suggestionItem">
        </tg-foundation-general-search-suggestion>
      </li>
    </ul>
  `,
})
export class SuggestionsComponent {
  @Input() suggestions$: Observable<Suggestions> = new Observable<Suggestions>();
  @Input() suggestionsFieldName: string;

  readonly #keyboardNavigationService = inject(KeyboardNavigationService);

  setFocus(el: HTMLElement) {
    this.#keyboardNavigationService.setFocusedElement(el);
  }
}
