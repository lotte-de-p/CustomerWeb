import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export var FontWeight;
(function (FontWeight) {
    FontWeight["regular"] = "r";
    FontWeight["medium"] = "m";
    FontWeight["large"] = "l";
    FontWeight["giant"] = "g";
    FontWeight["xxl"] = "xxl";
})(FontWeight || (FontWeight = {}));
export class FontWeightDirective {
    renderer;
    el;
    fontWeight;
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        if (this.fontWeight) {
            this.renderer.addClass(this.el.nativeElement, 'text-weight--' + this.fontWeight);
        }
    }
    static ɵfac = function FontWeightDirective_Factory(t) { return new (t || FontWeightDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FontWeightDirective, selectors: [["", "tgFontWeight", ""]], inputs: { fontWeight: [i0.ɵɵInputFlags.None, "tgFontWeight", "fontWeight"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FontWeightDirective, [{
        type: Directive,
        args: [{
                selector: '[tgFontWeight]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { fontWeight: [{
            type: Input,
            args: ['tgFontWeight']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9udC13ZWlnaHQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2RpcmVjdGl2ZXMvZm9udHMvZm9udC13ZWlnaHQvZm9udC13ZWlnaHQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7QUFFaEYsTUFBTSxDQUFOLElBQVksVUFNWDtBQU5ELFdBQVksVUFBVTtJQUNwQiwyQkFBZSxDQUFBO0lBQ2YsMEJBQWMsQ0FBQTtJQUNkLHlCQUFhLENBQUE7SUFDYix5QkFBYSxDQUFBO0lBQ2IseUJBQWEsQ0FBQTtBQUNmLENBQUMsRUFOVyxVQUFVLEtBQVYsVUFBVSxRQU1yQjtBQU9ELE1BQU0sT0FBTyxtQkFBbUI7SUFJckI7SUFDQTtJQUpjLFVBQVUsQ0FBaUI7SUFFbEQsWUFDUyxRQUFtQixFQUNuQixFQUFjO1FBRGQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQ3BCLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTyxVQUFVO1FBQ2hCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkYsQ0FBQztJQUNILENBQUM7NkVBaEJVLG1CQUFtQjs2REFBbkIsbUJBQW1COztpRkFBbkIsbUJBQW1CO2NBSC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCO21FQUV3QixVQUFVO2tCQUFoQyxLQUFLO21CQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgZW51bSBGb250V2VpZ2h0IHtcbiAgJ3JlZ3VsYXInID0gJ3InLFxuICAnbWVkaXVtJyA9ICdtJyxcbiAgJ2xhcmdlJyA9ICdsJyxcbiAgJ2dpYW50JyA9ICdnJyxcbiAgJ3h4bCcgPSAneHhsJyxcbn1cblxudHlwZSBmb250V2VpZ2h0VHlwZSA9ICdyJyB8ICdtJyB8ICdnJyB8ICdsJyB8ICd4bCcgfCAneHhsJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RnRm9udFdlaWdodF0nLFxufSlcbmV4cG9ydCBjbGFzcyBGb250V2VpZ2h0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCd0Z0ZvbnRXZWlnaHQnKSBmb250V2VpZ2h0OiBmb250V2VpZ2h0VHlwZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWZcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkQ2xhc3NlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRDbGFzc2VzKCkge1xuICAgIGlmICh0aGlzLmZvbnRXZWlnaHQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndGV4dC13ZWlnaHQtLScgKyB0aGlzLmZvbnRXZWlnaHQpO1xuICAgIH1cbiAgfVxufVxuIl19