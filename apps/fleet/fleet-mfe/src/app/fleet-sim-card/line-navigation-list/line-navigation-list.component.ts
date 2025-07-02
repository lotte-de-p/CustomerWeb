import { Component, inject, Input, OnInit } from '@angular/core';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { LoaderModule, LoaderService, UrlService } from '@telenet/ng-lib-page';
import { take, tap } from 'rxjs/operators';
import { SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { isEmpty } from 'lodash-es';
import { NavItem } from './interfaces/nav-item.interfaces';
import { LineNavigationListService } from './services/line-navigation-list.service';
import { LineNavigationListConstants } from './constants/line-navigation-list.constants';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf, NgClass, NgFor, AsyncPipe } from '@angular/common';
import { MessagesModule } from '@telenet/ng-lib-message';

@Component({
  selector: 'tg-line-navigation-list',
  templateUrl: './line-navigation-list.component.html',
  standalone: true,
  imports: [LoaderModule, MessagesModule, NgIf, NgClass, NgFor, AsyncPipe, TranslateModule],
})
export class LineNavigationListComponent implements OnInit {
  @Input() tabs;
  @Input() defaultQueryParam;
  navItems$: Observable<NavItem[]>;
  content$: Observable<SafeHtml>;
  activeNavItem: NavItem;
  hideNavMenuWhenMobile = false;

  readonly #urlService = inject(UrlService);
  readonly #loaderService = inject(LoaderService);
  readonly #lineNavigationListService = inject(LineNavigationListService);
  readonly #dataLayerService = inject(DataLayerService);

  ngOnInit(): void {
    this.navItems$ = this.createNavItems$();
  }

  loadContent(navItem: NavItem): void {
    this.content$ = this.#lineNavigationListService.getSafeHtmlContent$(navItem.tabLink).pipe(
      tap({
        next: () => {
          this.pushPageStepDataToAnalytics(navItem.tabName);
          this.hideNavMenuWhenMobile = true;
          this.activeNavItem = navItem;
        },
        error: (err) => {
          console.error('Error loading content for navItem: ', navItem, err);
        },
      })
    );
  }

  isNavItemActive(navItem: NavItem): boolean {
    return !isEmpty(this.activeNavItem) && navItem.tabName === this.activeNavItem.tabName;
  }

  showNavMenu(): void {
    this.hideNavMenuWhenMobile = false;
  }

  private createNavItems$(): Observable<NavItem[]> {
    this.#loaderService.start();
    const msisdn = this.#urlService.getParameterByName(LineNavigationListConstants.MSISDN);
    const navItemsFromAuthor = JSON.parse(this.tabs);
    return this.#lineNavigationListService.createNavItems$(navItemsFromAuthor, msisdn).pipe(
      take(1),
      tap({
        next: (navItems: NavItem[]) => {
          if (!isEmpty(navItems)) {
            this.loadContentOfDefaultNavItem(navItems);
          }
          this.#loaderService.stop();
        },
        error: (err) => {
          console.error('Error loading nav items', err);
          this.#loaderService.stop();
        },
      })
    );
  }

  private loadContentOfDefaultNavItem(navItems: NavItem[]): void {
    const defaultNavItemFromUrl = this.#urlService.getRequestParameterOrDefault(this.defaultQueryParam, '');
    this.loadContent(this.#lineNavigationListService.getDefaultNavItem(navItems, defaultNavItemFromUrl));
  }

  private pushPageStepDataToAnalytics(stepId): void {
    if (stepId) {
      stepId = stepId.replace(/\s/g, '-');
      const attributes = {};
      attributes['stepId'] = stepId;
      this.#dataLayerService.addStepViewEvent(attributes);
    }
  }
}
