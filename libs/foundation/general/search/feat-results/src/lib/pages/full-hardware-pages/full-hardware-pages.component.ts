import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HardwarePageComponent } from '../hardware-page/hardware-page.component';
import { SearchFacadeService, SearchResultItem } from '@general/data-access-search';
import { PaginationComponent } from '../../pagination/pagination.component';

@Component({
  selector: 'tg-foundation-general-search-full-hardware-pages',
  standalone: true,
  imports: [CommonModule, HardwarePageComponent, PaginationComponent],
  template: `
    <div class="search__content__hardware" aria-live="polite" *ngIf="hits">
      <ol class="clear-both display--flex flex-wrap--wrap list-style--none pt--l pl--n">
        <ng-container *ngFor="let hit of hits">
          <li
            tg-general-search-hardware-page
            [searchResultItem]="hit"
            [detailsPagePath]="detailsPagePath"
            class="display--flex width--full mb--l mr--m"></li>
        </ng-container>
      </ol>
    </div>

    <tg-foundation-general-search-pagination
      *ngIf="((hardwarePagesPagination$ | async)?.totalNumberOfPages || 0) > 1"
      [currentPageNumber]="(hardwarePagesPagination$ | async)?.currentPage || 1"
      [totalPages]="(hardwarePagesPagination$ | async)?.totalNumberOfPages || 1"
      (pageChanged)="hardwarePagesPageChanged($event)"></tg-foundation-general-search-pagination>
  `,
})
export class FullHardwarePagesComponent {
  @Input() hits: SearchResultItem[] | undefined | null;
  @Input() detailsPagePath: string;

  readonly #searchFacadeService = inject(SearchFacadeService);
  readonly hardwarePagesPagination$ = this.#searchFacadeService.hardwarePagesPagination$;

  hardwarePagesPageChanged(page: number) {
    this.#searchFacadeService.selectHardwarePage(page);
  }
}
