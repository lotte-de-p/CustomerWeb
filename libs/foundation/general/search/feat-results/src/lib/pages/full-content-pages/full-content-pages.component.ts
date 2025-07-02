import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPageComponent } from '../content-page/content-page.component';
import { SearchFacadeService, SearchResultItem } from '@general/data-access-search';
import { PaginationComponent } from '../../pagination/pagination.component';

@Component({
  selector: 'tg-foundation-general-search-full-content-pages',
  standalone: true,
  imports: [CommonModule, ContentPageComponent, PaginationComponent],
  template: `
    <div class="search__content__articles" aria-live="polite">
      <ol class="pl--n list-style--none flex-wrap--wrap">
        <ng-container *ngIf="keyMatches && keyMatches.length > 0">
          <tg-foundation-general-search-content-page
            [searchResult]="keyMatches[0]"
            [name]="keyMatches[0].name"
            [content]="keyMatches[0].content"
            [displayUrl]="keyMatches[0].url"
            [keyMatch]="true"
            [attr.data-testid]="'keymatches'">
          </tg-foundation-general-search-content-page>
        </ng-container>
        <ng-container *ngFor="let hit of hits">
          <tg-foundation-general-search-content-page
            [searchResult]="hit"
            [category]="getCategoryLabel(hit)"
            [name]="hit.name"
            [content]="hit.content"
            [displayUrl]="hit.displayUrl"
            [attr.data-testid]="'content-page'">
          </tg-foundation-general-search-content-page>
        </ng-container>
      </ol>
    </div>

    <tg-foundation-general-search-pagination
      *ngIf="((contentPagesPagination$ | async)?.totalNumberOfPages || 0) > 1"
      [currentPageNumber]="(contentPagesPagination$ | async)?.currentPage || 1"
      [totalPages]="(contentPagesPagination$ | async)?.totalNumberOfPages || 1"
      (pageChanged)="contentPagesPageChanged($event)"></tg-foundation-general-search-pagination>
  `,
})
export class FullContentPagesComponent {
  @Input() hits: SearchResultItem[] | undefined | null;
  @Input() keyMatches: SearchResultItem[] | undefined | null;

  readonly #searchFacadeService = inject(SearchFacadeService);
  readonly contentPagesPagination$ = this.#searchFacadeService.contentPagesPagination$;

  contentPagesPageChanged(page: number) {
    this.#searchFacadeService.selectContentPagesPage(page);
  }

  getCategoryLabel(searchResultItem: SearchResultItem): string {
    const category = searchResultItem.tags.find((tag) => 'category' === tag.name)?.value[0];
    if (category) {
      return `tags.category.${category}`;
    }
    return '';
  }
}
