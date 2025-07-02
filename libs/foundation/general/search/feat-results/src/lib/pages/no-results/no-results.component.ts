import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SearchFacadeService } from '@general/data-access-search';
import { Observable } from 'rxjs';
import { ExperienceFragmentService } from '@telenet/ng-lib-page';

@Component({
  selector: 'tg-foundation-general-search-no-results',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="search__content" [attr.data-testid]="'no-results'">
      <div class="search__content__no-result pb--l">
        <div class="heading--4 heading--notopmargin">{{ 'ng.search-results-page.lbl.noresults' | translate }}</div>
        <p class="font-body-regular pb--s">
          {{ 'ng.search-results-page.lbl.sorrymessage' | translate }} <strong>{{ query$ | async }}</strong
          >.
        </p>
      </div>
      <ng-container *ngIf="noResultsExpFragment | async as fragment">
        <div [innerHTML]="fragment"></div>
      </ng-container>
    </div>
  `,
})
export class NoResultsComponent implements OnInit {
  @Input() noResultsExpFragmentLocation = '';

  readonly #searchFacadeService = inject(SearchFacadeService);
  readonly #experienceFragmentService = inject(ExperienceFragmentService);
  readonly query$ = this.#searchFacadeService.query$;

  noResultsExpFragment: Observable<string>;

  ngOnInit(): void {
    if (this.noResultsExpFragmentLocation) {
      const lastIndexOfSlash = this.noResultsExpFragmentLocation.lastIndexOf('/');
      const name = this.noResultsExpFragmentLocation.substring(lastIndexOfSlash + 1);
      const location = this.noResultsExpFragmentLocation.substring(0, lastIndexOfSlash);
      this.noResultsExpFragment = this.#experienceFragmentService.fetchExpFragment(name, location);
    }
  }
}
