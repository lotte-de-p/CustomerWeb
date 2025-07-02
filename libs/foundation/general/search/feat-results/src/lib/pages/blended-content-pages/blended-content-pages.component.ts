import { Component, ElementRef, inject, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFacadeService, SearchResultItem } from '@general/data-access-search';
import { ContentPageComponent } from '../content-page/content-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { FullContentPagesComponent } from '../full-content-pages/full-content-pages.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'tg-foundation-general-search-blended-content-pages',
  standalone: true,
  imports: [CommonModule, ContentPageComponent, TranslateModule, FullContentPagesComponent],
  template: `
    <div
      #contentTitle
      [attr.data-testid]="'blended-content-title'"
      class="search__content__header-hardware width--full display--flex align-items--center justify-content--between pt--l">
      <h4 class="font--body-large heading--4  heading--nomargin">
        {{ 'ng.search-results-page.lbl.articles' | translate }}
      </h4>
    </div>
    <tg-foundation-general-search-full-content-pages [hits]="hits"></tg-foundation-general-search-full-content-pages>
  `,
})
export class BlendedContentPagesComponent implements OnInit {
  readonly #searchFacadeService = inject(SearchFacadeService);

  @Input() hits: SearchResultItem[] | undefined | null;
  @ViewChild('contentTitle') scrollTargetRef: ElementRef;

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
