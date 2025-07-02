import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFacadeService, SearchNgrxModule } from '@general/data-access-search';
import { map } from 'rxjs/operators';
import { TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';
import { FacetExperienceComponent } from './facet-experience/facet-experience.component';
import { SearchedForComponent } from './searched-for/searched-for.component';
import { FullHardwarePagesComponent } from './pages/full-hardware-pages/full-hardware-pages.component';
import { FullContentPagesComponent } from './pages/full-content-pages/full-content-pages.component';
import { PaginationComponent } from './pagination/pagination.component';
import { BlendedHardwarePagesComponent } from './pages/blended-hardware-pages/blended-hardware-pages.component';
import { PageControllerComponent } from './pages/page-controller/page-controller.component';
import { DidyoumeanComponent } from './didyoumean/didyoumean.component';

@Component({
  standalone: true,
  selector: 'tg-foundation-general-search-results-page',
  imports: [
    CommonModule,
    SearchNgrxModule,
    FacetExperienceComponent,
    TranslateModule,
    SearchedForComponent,
    FullHardwarePagesComponent,
    FullContentPagesComponent,
    PaginationComponent,
    BlendedHardwarePagesComponent,
    PageControllerComponent,
    DidyoumeanComponent,
  ],
  templateUrl: './search-results.component.html',
})
export class SearchResultsComponent implements OnInit {
  readonly #searchFacadeService = inject(SearchFacadeService);
  readonly #urlService = inject(UrlService);
  filtersOverlayActive = false;

  @Input() searchResultsCollections = '[]';
  @Input() searchResultsFacets = '[]';
  @Input() detailsPagePath = '';
  @Input() includeHardwareResults: string;
  @Input() noResultsFragmentLocation = '';
  @Input() brand: string;
  @Input() language: string;

  includeHardwareResultsBool: boolean;

  facetGroups$ = this.#searchFacadeService.facetsGroups$;
  collections$ = this.#searchFacadeService.collections$;
  appliedFilters$ = this.#searchFacadeService.appliedFilters$;
  query$ = this.#searchFacadeService.query$;
  numberOfSearchResults$ = this.#searchFacadeService.numberOfSearchResults$;
  contentItems$ = this.#searchFacadeService.contentPages$.pipe(map((content) => content?.hits));
  keyMatches$ = this.#searchFacadeService.contentPages$.pipe(map((content) => content?.keymatches));
  didYouMean$ = this.#searchFacadeService.contentPages$.pipe(map((content) => content?.didYouMean));
  hardwareItems$ = this.#searchFacadeService.hardware$.pipe(map((hw) => hw?.hits));
  loading$ = this.#searchFacadeService.resultsLoading$;

  ngOnInit(): void {
    this.#searchFacadeService.setResultsComponentFound(true);
    this.setQueryParams();
    this.includeHardwareResultsBool = JSON.parse(this.includeHardwareResults);
    if (!this.#searchFacadeService.getBrand() && !this.#searchFacadeService.getLanguage()) {
      this.#searchFacadeService.setInputParameters('', '', this.brand, this.language);
    }
    this.#searchFacadeService.initialSearch(
      JSON.parse(this.searchResultsCollections),
      JSON.parse(this.convertInputToJson(this.searchResultsFacets)),
      this.includeHardwareResultsBool
    );
  }

  facetChanged(groupIndex: number, facetIndex: number) {
    this.#searchFacadeService.selectFacet(groupIndex, facetIndex, this.includeHardwareResultsBool);
  }

  facetsCleared() {
    this.#searchFacadeService.clearFacets(this.includeHardwareResultsBool);
  }

  collectionChanged(collectionIndex: number) {
    this.#searchFacadeService.selectCollection(collectionIndex, this.includeHardwareResultsBool);
  }

  toggleFiltersOverlay() {
    this.filtersOverlayActive = !this.filtersOverlayActive;
  }

  private setQueryParams(): void {
    const queryParams = this.#urlService.getRequestParameters();
    const query = queryParams['q'];
    const collection = queryParams['collection'];
    const page = Number.parseInt(queryParams['page']);

    if (query) {
      this.#searchFacadeService.setQuery(query);
    }

    if (collection) {
      this.processAndSetCollection(collection);
    }

    if (page) {
      this.#searchFacadeService.setPage(page);
    }
  }

  convertInputToJson(input: string) {
    return `[${input
      .slice(1, -1)
      .split(',')
      .map((value) => `"${value}"`)
      .join(', ')}]`;
  }

  private processAndSetCollection(collection: string): void {
    const baseSearchValue = collection.replace(/_[a-zA-Z]{2}$/, '');
    const regex = new RegExp(`"value":\\s*"(${baseSearchValue}(?:_[a-zA-Z]{2})?)"`);
    const matches = this.searchResultsCollections.match(regex);

    if (matches) {
      this.#urlService.replaceURLParameters([{ key: 'collection', value: matches[1] }]);
      this.#searchFacadeService.setCollection(matches[1]);
    } else {
      this.#urlService.removeURLParameters(['collection']);
    }
  }
}
