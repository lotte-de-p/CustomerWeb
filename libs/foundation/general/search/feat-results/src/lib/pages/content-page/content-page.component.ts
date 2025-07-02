import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '@general/ui-search';
import { TranslateModule } from '@ngx-translate/core';
import { SearchResultComponent } from '../search-result/search-result.component';
import { SearchResultItem } from '@general/data-access-search';

@Component({
  selector: 'tg-foundation-general-search-content-page',
  standalone: true,
  imports: [CommonModule, BadgeComponent, TranslateModule],
  template: `
    <li
      class="width-full border--b--r border-width--b--r border-color--b--light-grey border-style--b--solid py--l"
      [ngClass]="{
        'border--all--r border-width--all--b border-color--all--light-grey border-style--all--solid highlighted px--l':
          keyMatch
      }">
      <a
        [href]="displayUrl"
        (click)="goToResult($event, searchResult)"
        class="search__content__articles__link text-decoration--none color-text">
        <div
          class="search-article__content__header justify-content--start display--flex width-full align-items--center mb--xs">
          <tg-foundation-general-search-badge
            *ngIf="keyMatch"
            [color]="'best-result'"
            [attr.data-testid]="'keymatch-badge'">
            {{ 'ng.search-results-page.lbl.bestresult' | translate }}
          </tg-foundation-general-search-badge>
          <tg-foundation-general-search-badge [attr.data-testid]="'badge'" *ngIf="category">
            {{ category | translate }}
          </tg-foundation-general-search-badge>
          <div
            class="font--body-small color-shade_64"
            [ngClass]="{ 'ml--s': category }"
            [innerHTML]="displayUrl"
            [attr.data-testid]="'url'"></div>
        </div>
        <h6 class="heading--6 heading--notopmargin mb--xs" [innerHTML]="name" [attr.data-testid]="'name'"></h6>
        <div class="search-article__content" [innerHTML]="content" [attr.data-testid]="'content'"></div>
      </a>
    </li>
  `,
})
export class ContentPageComponent extends SearchResultComponent {
  @Input() displayUrl: string;
  @Input() category: string;
  @Input() name: string;
  @Input() content: string;
  @Input() keyMatch: boolean;
  @Input() searchResult: SearchResultItem;

  constructor() {
    super();
  }
}
