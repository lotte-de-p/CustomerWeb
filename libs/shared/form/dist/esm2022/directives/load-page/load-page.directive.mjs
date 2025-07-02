var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* eslint-disable */
// @ts-nocheck
import { Directive, HostListener, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
let LoadPageDirective = class LoadPageDirective {
    el;
    renderer;
    window;
    http;
    document;
    tgLoadPage;
    constructor(el, renderer, window, http, document) {
        this.el = el;
        this.renderer = renderer;
        this.window = window;
        this.http = http;
        this.document = document;
    }
    onClick($event) {
        const url = this.tgLoadPage;
        if (!url) {
            return;
        }
        this.storeUrlParamsInSessionStorage(url);
        this.isOverlay(url) ? this.showOverlayContent(url) : this.window.open(url, '_self');
    }
    showOverlayContent(url) {
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
        });
    }
    recompileAngularJS() {
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
    isOverlay(url) {
        return url?.indexOf('.overlay-content') !== -1;
    }
    storeUrlParamsInSessionStorage(urlString) {
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
    static ɵfac = function LoadPageDirective_Factory(t) { return new (t || LoadPageDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject('Window'), i0.ɵɵdirectiveInject(i1.HttpClient), i0.ɵɵdirectiveInject(DOCUMENT)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: LoadPageDirective, selectors: [["", "tgLoadPage", ""]], hostBindings: function LoadPageDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function LoadPageDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } }, inputs: { tgLoadPage: "tgLoadPage" } });
};
LoadPageDirective = __decorate([
    UntilDestroy()
], LoadPageDirective);
export { LoadPageDirective };
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadPageDirective, [{
        type: Directive,
        args: [{
                selector: '[tgLoadPage]',
            }]
    }], () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: Window, decorators: [{
                type: Inject,
                args: ['Window']
            }] }, { type: i1.HttpClient }, { type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }], { tgLoadPage: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1wYWdlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL2xvYWQtcGFnZS9sb2FkLXBhZ2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixjQUFjO0FBQ2QsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBTTlELElBQU0saUJBQWlCLEdBQXZCLE1BQU0saUJBQWlCO0lBSVQ7SUFDQTtJQUNrQjtJQUMzQjtJQUNrQjtJQVBuQixVQUFVLENBQVM7SUFFNUIsWUFDbUIsRUFBYyxFQUNkLFFBQW1CLEVBQ0QsTUFBYyxFQUN6QyxJQUFnQixFQUNFLFFBQWtCO1FBSjNCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ0QsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN6QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ0UsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUMzQyxDQUFDO0lBRStCLE9BQU8sQ0FBQyxNQUFNO1FBQy9DLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ1QsT0FBTztRQUNULENBQUM7UUFDRCxJQUFJLENBQUMsOEJBQThCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFB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LGlCQUFpQjtJQUQ3QixZQUFZLEVBQUU7R0FDRixpQkFBaUIsQ0E4RTdCOztpRkE5RVksaUJBQWlCO2NBSjdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYzthQUN6Qjs7c0JBUUksTUFBTTt1QkFBQyxRQUFROztzQkFFZixNQUFNO3VCQUFDLFFBQVE7cUJBUFQsVUFBVTtrQkFBbEIsS0FBSztZQVU2QixPQUFPO2tCQUF6QyxZQUFZO21CQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBSZW5kZXJlcjIsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFVudGlsRGVzdHJveSwgdW50aWxEZXN0cm95ZWQgfSBmcm9tICdAbmduZWF0L3VudGlsLWRlc3Ryb3knO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGdMb2FkUGFnZV0nLFxufSlcbkBVbnRpbERlc3Ryb3koKVxuZXhwb3J0IGNsYXNzIExvYWRQYWdlRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgdGdMb2FkUGFnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBJbmplY3QoJ1dpbmRvdycpIHByaXZhdGUgcmVhZG9ubHkgd2luZG93OiBXaW5kb3csXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50XG4gICkge31cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIG9uQ2xpY2soJGV2ZW50KSB7XG4gICAgY29uc3QgdXJsID0gdGhpcy50Z0xvYWRQYWdlO1xuICAgIGlmICghdXJsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3RvcmVVcmxQYXJhbXNJblNlc3Npb25TdG9yYWdlKHVybCk7XG4gICAgdGhpcy5pc092ZXJsYXkodXJsKSA/IHRoaXMuc2hvd092ZXJsYXlDb250ZW50KHVybCkgOiB0aGlzLndpbmRvdy5vcGVuKHVybCwgJ19zZWxmJyk7XG4gIH1cblxuICBwcml2YXRlIHNob3dPdmVybGF5Q29udGVudCh1cmwpOiB2b2lkIHtcbiAgICBjb25zdCBvdmVybGF5Q29udGFpbmVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KG92ZXJsYXlDb250YWluZXIsICdpZCcsICdvdmVybGF5UGFnZScpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkob3ZlcmxheUNvbnRhaW5lciwgJ2NsYXNzJywgJ292ZXJsYXktcGFnZScpO1xuXG4gICAgdGhpcy5odHRwXG4gICAgICAuZ2V0KHVybCwgeyByZXNwb25zZVR5cGU6ICd0ZXh0JyB9KVxuICAgICAgLnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpXG4gICAgICAuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zdCBvdmVybGF5RWxlbWVudCA9IHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXlQYWdlJyk7XG5cbiAgICAgICAgaWYgKG92ZXJsYXlFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLmRvY3VtZW50LmJvZHksIG92ZXJsYXlFbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5kb2N1bWVudC5ib2R5LCBvdmVybGF5Q29udGFpbmVyKTtcbiAgICAgICAgb3ZlcmxheUNvbnRhaW5lci5pbm5lckhUTUwgPSByZXNwb25zZTtcbiAgICAgICAgdGhpcy5yZWNvbXBpbGVBbmd1bGFySlMoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZWNvbXBpbGVBbmd1bGFySlMoKTogdm9pZCB7XG4gICAgaWYgKHdpbmRvdy5hbmd1bGFyKSB7XG4gICAgICBjb25zdCBib2R5RWwgPSB3aW5kb3cuZG9jdW1lbnQuYm9keTtcbiAgICAgIHdpbmRvdy5hbmd1bGFyXG4gICAgICAgIC5lbGVtZW50KGJvZHlFbClcbiAgICAgICAgLmluamVjdG9yKClcbiAgICAgICAgLmludm9rZShbXG4gICAgICAgICAgJyRyb290U2NvcGUnLFxuICAgICAgICAgICckY29tcGlsZScsXG4gICAgICAgICAgKCRyb290U2NvcGUsICRjb21waWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkc2NvcGUgPSB3aW5kb3cuYW5ndWxhci5lbGVtZW50KGJvZHlFbCkuc2NvcGUoKTtcbiAgICAgICAgICAgICRjb21waWxlKGJvZHlFbCkoJHNjb3BlKTtcbiAgICAgICAgICAgICRyb290U2NvcGUuJGRpZ2VzdCgpO1xuICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBpc092ZXJsYXkodXJsKSB7XG4gICAgcmV0dXJuIHVybD8uaW5kZXhPZignLm92ZXJsYXktY29udGVudCcpICE9PSAtMTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzdG9yZVVybFBhcmFtc0luU2Vzc2lvblN0b3JhZ2UodXJsU3RyaW5nOiBzdHJpbmcpIHtcbiAgICAvLyBFeHRyYWN0IHRoZSBxdWVyeSBzdHJpbmcgZnJvbSB0aGUgVVJMIHN0cmluZ1xuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gdXJsU3RyaW5nLnNwbGl0KCc/JylbMV07XG5cbiAgICAvLyBDaGVjayBpZiB0aGVyZSdzIGEgcXVlcnkgc3RyaW5nXG4gICAgaWYgKHF1ZXJ5U3RyaW5nKSB7XG4gICAgICAvLyBVc2UgVVJMU2VhcmNoUGFyYW1zIHRvIHBhcnNlIHRoZSBxdWVyeSBzdHJpbmdcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xuXG4gICAgICAvLyBJdGVyYXRlIG92ZXIgZWFjaCBwYXJhbWV0ZXIgYW5kIHN0b3JlIGl0IGluIHNlc3Npb24gc3RvcmFnZVxuICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgcGFyYW1zLmVudHJpZXMoKSkge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19