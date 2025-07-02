import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';

@Component({
  selector: 'tg-foundation-general-search-didyoumean',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="searh__content__term pb--l" *ngIf="items?.length ?? 0 > 0">
      <p>
        {{ 'ng.search-results-page.lbl.didyoumean' | translate }}:
        <ng-container *ngFor="let item of items; let last = last">
          <a [attr.data-testid]="'didyoumean'" href="javascript:void(0);" class="link" (click)="searchFor(item)">{{
            item
          }}</a
          >{{ !last ? ',' : '?' }}
        </ng-container>
      </p>
    </div>
  `,
})
export class DidyoumeanComponent {
  @Input() items: string[];

  private readonly urlService: UrlService = inject(UrlService);

  searchFor(item: string) {
    this.urlService.replaceURLParameters([{ key: 'q', value: item }]);
    this.urlService.redirectTo(this.urlService.getCurrentUrl());
  }
}
