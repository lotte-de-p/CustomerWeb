import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class FontFamilyDirective {
    renderer;
    el;
    fontFamily = 't4';
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        this.renderer.addClass(this.el.nativeElement, 'text-font-family--' + this.fontFamily);
    }
    static ɵfac = function FontFamilyDirective_Factory(t) { return new (t || FontFamilyDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FontFamilyDirective, selectors: [["", "tgFontFamily", ""]], inputs: { fontFamily: [i0.ɵɵInputFlags.None, "tgFontFamily", "fontFamily"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FontFamilyDirective, [{
        type: Directive,
        args: [{
                selector: '[tgFontFamily]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { fontFamily: [{
            type: Input,
            args: ['tgFontFamily']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9udC1mYW1pbHkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2RpcmVjdGl2ZXMvZm9udHMvZm9udC1mYW1pbHkvZm9udC1mYW1pbHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7QUFPaEYsTUFBTSxPQUFPLG1CQUFtQjtJQUlyQjtJQUNBO0lBSmMsVUFBVSxHQUFtQixJQUFJLENBQUM7SUFFekQsWUFDUyxRQUFtQixFQUNuQixFQUFjO1FBRGQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQ3BCLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTyxVQUFVO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLG9CQUFvQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4RixDQUFDOzZFQWRVLG1CQUFtQjs2REFBbkIsbUJBQW1COztpRkFBbkIsbUJBQW1CO2NBSC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCO21FQUV3QixVQUFVO2tCQUFoQyxLQUFLO21CQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG50eXBlIGZvbnRGYW1pbHlUeXBlID0gJ3QxJyB8ICd0MicgfCAndDMnIHwgJ3Q0JyB8ICd0NScgfCAndDYnIHwgJ3Q3JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RnRm9udEZhbWlseV0nLFxufSlcbmV4cG9ydCBjbGFzcyBGb250RmFtaWx5RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCd0Z0ZvbnRGYW1pbHknKSBmb250RmFtaWx5OiBmb250RmFtaWx5VHlwZSA9ICd0NCc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIGVsOiBFbGVtZW50UmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZENsYXNzZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkQ2xhc3NlcygpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3RleHQtZm9udC1mYW1pbHktLScgKyB0aGlzLmZvbnRGYW1pbHkpO1xuICB9XG59XG4iXX0=