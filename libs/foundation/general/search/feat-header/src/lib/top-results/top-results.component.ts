import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFacadeService, SearchResults } from '@general/data-access-search';
import { TopResultComponent } from '../top-result/top-result.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'tg-foundation-general-search-top-results',
  standalone: true,
  imports: [CommonModule, TopResultComponent],
  template: `
    <ul class="header-search--autosuggest-results width--full">
      <li
        *ngFor="let topResult of (topResults$ | async)?.hits"
        class="header-search--autosuggest-results-items display--flex flex-direction-row border-width--b--r border-style--b--solid border-color--b--light-grey">
        <tg-foundation-general-search-top-result
          class="width--full display--flex"
          [item]="topResult"
          [detailsPagePath]="detailsPagePath">
        </tg-foundation-general-search-top-result>
      </li>
    </ul>
  `,
})
export class TopResultsComponent {
  @Input() detailsPagePath: string;

  private readonly searchFacade: SearchFacadeService = inject(SearchFacadeService);
  readonly topResults$: Observable<SearchResults> = this.searchFacade.topResults$;
}
