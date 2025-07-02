import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './search-input/search-input.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { TopResultsComponent } from './top-results/top-results.component';
import { Collection, SearchFacadeService } from '@general/data-access-search';

@Component({
  standalone: true,
  selector: 'tg-foundation-general-search-header',
  imports: [CommonModule, SearchInputComponent, SuggestionsComponent, TopResultsComponent],
  template: ` <tg-foundation-general-search-search-input
    [detailsPagePath]="detailsPagePath"
    [suggestionsFieldName]="suggestionsFieldName"
    [includeHardwareResults]="includeHardwareResultsBool">
  </tg-foundation-general-search-search-input>`,
})
export class SearchHeaderComponent implements OnInit {
  @Input() searchResultsCollection = '';
  @Input() searchResultsPage = '';
  @Input() detailsPagePath: string;
  @Input() suggestionsFieldName: string;
  @Input() brand: string;
  @Input() language: string;
  @Input() includeHardwareResults: string;

  readonly #searchFacadeService = inject(SearchFacadeService);

  includeHardwareResultsBool: boolean;

  ngOnInit(): void {
    const collection: Collection = JSON.parse(this.searchResultsCollection);
    this.includeHardwareResultsBool = JSON.parse(this.includeHardwareResults);

    this.#searchFacadeService.setInputParameters(collection.value, this.searchResultsPage, this.brand, this.language);
    const searchResultId = sessionStorage.getItem('searchResultId');
    if (searchResultId && this.brand && this.language) {
      this.#searchFacadeService.postClick(searchResultId, this.brand, this.language);
    }
  }
}
