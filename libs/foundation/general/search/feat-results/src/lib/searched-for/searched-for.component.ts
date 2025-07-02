import { Component, ElementRef, inject, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NoResultsComponent } from '../pages/no-results/no-results.component';
import { DidyoumeanComponent } from '../didyoumean/didyoumean.component';
import { SearchFacadeService } from '@general/data-access-search';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'tg-foundation-general-search-searched-for',
  standalone: true,
  imports: [CommonModule, TranslateModule, NoResultsComponent, DidyoumeanComponent],
  template: `
    <div
      #hardwareTitle
      *ngIf="numberOfSearchResults && numberOfSearchResults > 0"
      class="search__content__header width--full display--flex align-items--center justify-content--between pb--l">
      <div class="font--body-large" [attr.data-testid]="'search-result'">
        <ng-container *ngIf="query">
          {{ 'ng.search-results-page.lbl.resultsfor' | translate }} <strong>{{ query }}</strong>
          <span class="font--caption-small color-shade_64"> ({{ numberOfSearchResults || 0 }})</span>
        </ng-container>
        <ng-container *ngIf="!query">
          {{ 'ng.search-results-page.lbl.allresults' | translate }}
          <span class="font--caption-small color-shade_64">({{ numberOfSearchResults || 0 }})</span>
        </ng-container>
      </div>
    </div>

    <tg-foundation-general-search-didyoumean *ngIf="!loading && didYouMean" [items]="didYouMean">
    </tg-foundation-general-search-didyoumean>

    <tg-foundation-general-search-no-results
      *ngIf="!loading && (!numberOfSearchResults || numberOfSearchResults === 0)"
      [noResultsExpFragmentLocation]="noResultsFragmentLocation">
    </tg-foundation-general-search-no-results>
  `,
})
export class SearchedForComponent implements OnInit {
  readonly #searchFacadeService = inject(SearchFacadeService);

  @Input() query: string | null;
  @Input() numberOfSearchResults: number | null;
  @Input() loading: boolean | null = true;
  @Input() didYouMean: string[] | null | undefined;
  @Input() noResultsFragmentLocation = '';
  @ViewChild('hardwareTitle') scrollTargetRef: ElementRef;

  ngOnInit(): void {
    this.#searchFacadeService.hardware$
      .pipe(
        tap((_) => {
          if (this.scrollTargetRef && this.scrollTargetRef.nativeElement) {
            this.scrollTargetRef.nativeElement.scrollIntoView();
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
