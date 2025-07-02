import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Collection, SearchFacadeService, SearchNgrxModule } from '@general/data-access-search';
import { AccessibilitySpanComponent } from '@general/ui-search';
import { TranslateModule } from '@ngx-translate/core';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { SearchInputComponent } from './search-input/search-input.component';

@Component({
  selector: 'tg-foundation-general-search-inpage-search',
  standalone: true,
  imports: [
    CommonModule,
    SearchNgrxModule,
    AccessibilitySpanComponent,
    TranslateModule,
    SuggestionsComponent,
    SearchInputComponent,
  ],
  template: `
    <tg-foundation-general-search-inpage-search-input
      [suggestionsFieldName]="suggestionsFieldName"
      [query]="query$ | async"
      [includeHardwareResults]="includeHardwareResultsBool"
      [attr.data-testid]="'tgFoundationGeneralSearchInpageSearch'">
    </tg-foundation-general-search-inpage-search-input>
  `,
})
export class InpageSearchComponent implements OnInit {
  readonly #searchFacadeService = inject(SearchFacadeService);

  @Input() searchCollection = '';
  @Input() searchResultsPage = '';
  @Input() suggestionsFieldName = '';
  @Input() includeHardwareResults: string;
  @Input() brand: string;
  @Input() language: string;

  includeHardwareResultsBool: boolean;

  query$ = this.#searchFacadeService.inPageQuery$;

  ngOnInit(): void {
    const collection: Collection = JSON.parse(this.searchCollection);
    this.includeHardwareResultsBool = JSON.parse(this.includeHardwareResults);
    this.#searchFacadeService.initInPage(collection.value, this.searchResultsPage);

    if (!this.#searchFacadeService.getBrand() && !this.#searchFacadeService.getLanguage()) {
      this.#searchFacadeService.setInputParameters(collection.value, this.searchResultsPage, this.brand, this.language);
    }
  }
}
