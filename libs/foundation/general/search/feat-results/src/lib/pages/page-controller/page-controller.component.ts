/* eslint-disable rxjs/no-internal */
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultItem } from '@general/data-access-search';
import { FullHardwarePagesComponent } from '../full-hardware-pages/full-hardware-pages.component';
import { FullContentPagesComponent } from '../full-content-pages/full-content-pages.component';
import { BlendedHardwarePagesComponent } from '../blended-hardware-pages/blended-hardware-pages.component';
import { NoResultsComponent } from '../no-results/no-results.component';
import { BlendedContentPagesComponent } from '../blended-content-pages/blended-content-pages.component';

enum ContentType {
  LOADING,
  NO_RESULTS,
  CONTENT,
  HARDWARE,
  BLENDED,
}

type SearchResultItemsType = SearchResultItem[] | undefined | null;

@Component({
  selector: 'tg-foundation-general-search-page-controller',
  standalone: true,
  imports: [
    CommonModule,
    FullHardwarePagesComponent,
    FullContentPagesComponent,
    NoResultsComponent,
    BlendedContentPagesComponent,
    BlendedHardwarePagesComponent,
  ],
  template: `
    <ng-container *ngIf="getContentType() === ContentType.HARDWARE">
      <hr class="divider divider--s__very-light-grey m--n" />
      <tg-foundation-general-search-full-hardware-pages [hits]="hardwareItems" [detailsPagePath]="detailsPagePath">
      </tg-foundation-general-search-full-hardware-pages>
    </ng-container>

    <ng-container *ngIf="getContentType() === ContentType.BLENDED">
      <hr class="divider divider--s__very-light-grey m--n" />
      <tg-foundation-general-search-blended-hardware-pages [hits]="hardwareItems" [detailsPagePath]="detailsPagePath">
      </tg-foundation-general-search-blended-hardware-pages>
      <tg-foundation-general-search-blended-content-pages [hits]="contentItems">
      </tg-foundation-general-search-blended-content-pages>
    </ng-container>

    <ng-container *ngIf="getContentType() === ContentType.CONTENT">
      <hr class="divider divider--s__very-light-grey m--n" />
      <tg-foundation-general-search-full-content-pages
        [hits]="contentItems"
        [keyMatches]="keyMatches"></tg-foundation-general-search-full-content-pages>
    </ng-container>
  `,
})
export class PageControllerComponent {
  @Input() loading: boolean | null = true;
  @Input() contentItems: SearchResultItemsType;
  @Input() keyMatches: SearchResultItemsType;
  @Input() hardwareItems: SearchResultItemsType;
  @Input() detailsPagePath: string;

  readonly ContentType = ContentType;

  getContentType = () => {
    if (this.loading) {
      return ContentType.LOADING;
    }

    const hasContent = this.contentItems && this.contentItems.length > 0;
    const hasHardware = this.hardwareItems && this.hardwareItems.length > 0;

    if (hasContent && hasHardware) {
      return ContentType.BLENDED;
    } else if (hasContent) {
      return ContentType.CONTENT;
    } else if (hasHardware) {
      return ContentType.HARDWARE;
    } else {
      return ContentType.NO_RESULTS;
    }
  };
}
