import { SearchFacadeService, SearchResultItem } from '@general/data-access-search';
import { inject } from '@angular/core';

export class SearchResultComponent {
  private readonly searchFacadeService = inject(SearchFacadeService);

  goToResult($event: MouseEvent, searchResultItem: SearchResultItem) {
    if ($event.currentTarget?.['href']) {
      $event.preventDefault();
      sessionStorage.setItem('searchResultId', searchResultItem.id);
      this.searchFacadeService.goToResultFromResultsPage($event.currentTarget?.['href'], searchResultItem);
    }
  }
}
