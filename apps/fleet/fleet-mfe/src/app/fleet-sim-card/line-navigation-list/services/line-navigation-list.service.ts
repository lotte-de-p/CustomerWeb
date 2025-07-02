import { inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { NavItem } from '../interfaces/nav-item.interfaces';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { LineNavigationListConstants } from '../constants/line-navigation-list.constants';
import { catchError, map, take } from 'rxjs/operators';
import { CustomerProductHolding } from '../../../shared/common/models/customer-product-holding.model';
import { ProductsService } from '../../../shared/common/services/products/products.service';
import { isEmpty } from 'lodash-es';

@Injectable({
  providedIn: 'root',
})
export class LineNavigationListService {
  readonly #productService = inject(ProductsService);
  readonly #http = inject(HttpClient);
  readonly #sanitizer = inject(DomSanitizer);
  private readonly ADDRESS_TAB_NAME = 'address';

  createNavItems$(navItemsFromAuthor: NavItem[], msisdn: string): Observable<NavItem[]> {
    return this.#productService.getProductByIdentifier(LineNavigationListConstants.MESSAGE_GROUP, msisdn).pipe(
      take(1),
      map((productHolding: CustomerProductHolding) => {
        return navItemsFromAuthor
          .filter((navItem: NavItem) => this.isNavItemLinkNotEmpty(navItem))
          .filter((navItem: NavItem) => this.showAddressNavItem(navItem, productHolding));
      }),
      catchError((error) => {
        console.error('An error occurred:', error);
        return throwError(() => error);
      })
    );
  }

  getDefaultNavItem(navItems: NavItem[], defaultNavItemNameFromUrl: string): NavItem {
    const defaultNavItemIndexFromUrl = this.findDefaultNavItemIndexWithName(navItems, defaultNavItemNameFromUrl);
    const defaultNavItemIndexWithDefaultFlag = this.findDefaultNavItemIndexWithDefaultFlag(navItems);
    if (defaultNavItemIndexFromUrl !== -1) {
      return navItems[defaultNavItemIndexFromUrl];
    }
    if (defaultNavItemIndexWithDefaultFlag !== -1) {
      return navItems[defaultNavItemIndexWithDefaultFlag];
    }
    return navItems[0];
  }

  getSafeHtmlContent$(url): Observable<SafeHtml> {
    return this.#http
      .get(url + '.html', { responseType: 'text' })
      .pipe(map((html) => this.#sanitizer.bypassSecurityTrustHtml(html)));
  }

  private isNavItemLinkNotEmpty(navItem: NavItem): boolean {
    return !isEmpty(navItem.tabLink);
  }

  private showAddressNavItem(navItem: NavItem, productHolding: CustomerProductHolding): boolean {
    if (navItem.tabName === this.ADDRESS_TAB_NAME) {
      return !isEmpty(productHolding.splitBillProfile);
    }
    return true;
  }
  private findDefaultNavItemIndexWithName(navItems: NavItem[], defaultNavItemNameFromUrl: string): number {
    return navItems.findIndex((navItem: NavItem) => navItem.tabName === defaultNavItemNameFromUrl);
  }

  private findDefaultNavItemIndexWithDefaultFlag(navItems: NavItem[]): number {
    return navItems.findIndex((navItem: NavItem) => navItem.default);
  }
}
