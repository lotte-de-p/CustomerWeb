import { Component, inject } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'tg-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [FormsModule],
})
export class HomeComponent {
  readonly #router = inject(Router);

  routeFilter = '';
  includeBillingAccountSelector = false;
  includeMobileLineSelector = false;
  routes: string[];

  constructor() {
    this.routes = this.setRoutes();
  }

  updateFilter(value: string): void {
    this.routeFilter = value;
    this.routes = this.setRoutes();
  }

  truncate(s: string): string {
    if (s.length > 30) {
      return `${s.slice(0, 26)}...`;
    }
    return s;
  }

  navigate(route: string): void {
    if (this.includeBillingAccountSelector) {
      route = route + '?includeBillingAccountSelector=true';
    }
    if (this.includeMobileLineSelector) {
      route = route + '?includeMobileLineSelector=true';
    }
    void this.#router.navigateByUrl(route);
  }

  private setRoutes(): string[] {
    const allRoutes: string[] = [];

    function getRoutes(parent: string, routes: Route[]) {
      routes.forEach((route) => {
        if (route.path !== '**') {
          allRoutes.push(`${parent}${route.path}`);
        }
        if (route.children) {
          getRoutes(`${parent}${route.path}/`, route.children);
        }
      });
    }

    getRoutes('/', this.#router.config);

    return allRoutes.filter((route) => route.toLowerCase().includes(this.routeFilter.toLowerCase()));
  }
}
