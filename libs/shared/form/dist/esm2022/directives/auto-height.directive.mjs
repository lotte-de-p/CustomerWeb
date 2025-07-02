import { Directive, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
export class AutoHeightDirective {
    el;
    document;
    matchWithClass;
    constructor(el, document) {
        this.el = el;
        this.document = document;
    }
    ngAfterViewChecked() {
        this.setHeight(this.el.nativeElement);
    }
    setHeight(element) {
        element.style.height = this.getHeight() + 'px';
    }
    getHeight() {
        if (this.matchWithClass) {
            return this.document?.getElementsByClassName?.(this.matchWithClass)?.item(0)?.clientHeight;
        }
        return 100;
    }
    static ɵfac = function AutoHeightDirective_Factory(t) { return new (t || AutoHeightDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(DOCUMENT)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AutoHeightDirective, selectors: [["", "autoHeight", ""]], inputs: { matchWithClass: "matchWithClass" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AutoHeightDirective, [{
        type: Directive,
        args: [{
                selector: '[autoHeight]',
            }]
    }], () => [{ type: i0.ElementRef }, { type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }], { matchWithClass: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1oZWlnaHQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RpcmVjdGl2ZXMvYXV0by1oZWlnaHQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFjLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUszQyxNQUFNLE9BQU8sbUJBQW1CO0lBS1g7SUFDa0I7SUFKckMsY0FBYyxDQUFTO0lBRXZCLFlBQ21CLEVBQWMsRUFDSSxRQUFrQjtRQURwQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ0ksYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUNwRCxDQUFDO0lBRUosa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsU0FBUyxDQUFDLE9BQW9CO1FBQzVCLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDakQsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN4QixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQztRQUM3RixDQUFDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzZFQXRCVSxtQkFBbUIsNERBTXBCLFFBQVE7NkRBTlAsbUJBQW1COztpRkFBbkIsbUJBQW1CO2NBSC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYzthQUN6Qjs7c0JBT0ksTUFBTTt1QkFBQyxRQUFRO3FCQUpsQixjQUFjO2tCQURiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdDaGVja2VkLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2F1dG9IZWlnaHRdJyxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b0hlaWdodERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQge1xuICBASW5wdXQoKVxuICBtYXRjaFdpdGhDbGFzczogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZWw6IEVsZW1lbnRSZWYsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSByZWFkb25seSBkb2N1bWVudDogRG9jdW1lbnRcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICB0aGlzLnNldEhlaWdodCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgc2V0SGVpZ2h0KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpICsgJ3B4JztcbiAgfVxuXG4gIGdldEhlaWdodCgpIHtcbiAgICBpZiAodGhpcy5tYXRjaFdpdGhDbGFzcykge1xuICAgICAgcmV0dXJuIHRoaXMuZG9jdW1lbnQ/LmdldEVsZW1lbnRzQnlDbGFzc05hbWU/Lih0aGlzLm1hdGNoV2l0aENsYXNzKT8uaXRlbSgwKT8uY2xpZW50SGVpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gMTAwO1xuICB9XG59XG4iXX0=