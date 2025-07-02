/* eslint-disable */
// @ts-nocheck
import { Directive, ElementRef, HostListener, Input, Renderer2, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@Directive({
  selector: '[tgLoadPage]',
})
@UntilDestroy()
export class LoadPageDirective {
  @Input() tgLoadPage: string;

  constructor(
    private readonly el: ElementRef,
    private readonly renderer: Renderer2,
    @Inject('Window') private readonly window: Window,
    private http: HttpClient,
    @Inject(DOCUMENT) private document: Document
  ) {}

  @HostListener('click', ['$event']) onClick($event) {
    const url = this.tgLoadPage;
    if (!url) {
      return;
    }
    this.storeUrlParamsInSessionStorage(url);
    this.isOverlay(url) ? this.showOverlayContent(url) : this.window.open(url, '_self');
  }

  private showOverlayContent(url): void {
    const overlayContainer = this.renderer.createElement('div');
    this.renderer.setProperty(overlayContainer, 'id', 'overlayPage');
    this.renderer.setProperty(overlayContainer, 'class', 'overlay-page');

    this.http
      .get(url, { responseType: 'text' })
      .pipe(untilDestroyed(this))
      .subscribe((response) => {
        const overlayElement = this.document.querySelector('#overlayPage');

        if (overlayElement) {
          this.renderer.removeChild(this.document.body, overlayElement);
        }

        this.renderer.appendChild(this.document.body, overlayContainer);
        overlayContainer.innerHTML = response;
        this.recompileAngularJS();
        this.document.dispatchEvent(new Event('overlay-content-rendered'));
      });
  }

  private recompileAngularJS(): void {
    if (window.angular) {
      const bodyEl = window.document.body;
      window.angular
        .element(bodyEl)
        .injector()
        .invoke([
          '$rootScope',
          '$compile',
          ($rootScope, $compile) => {
            const $scope = window.angular.element(bodyEl).scope();
            $compile(bodyEl)($scope);
            $rootScope.$digest();
          },
        ]);
    }
  }

  protected isOverlay(url) {
    return url?.indexOf('.overlay-content') !== -1;
  }

  protected storeUrlParamsInSessionStorage(urlString: string) {
    // Extract the query string from the URL string
    const queryString = urlString.split('?')[1];

    // Check if there's a query string
    if (queryString) {
      // Use URLSearchParams to parse the query string
      const params = new URLSearchParams(queryString);

      // Iterate over each parameter and store it in session storage
      for (const [key, value] of params.entries()) {
        sessionStorage.setItem(key, value);
      }
    }
  }
}
