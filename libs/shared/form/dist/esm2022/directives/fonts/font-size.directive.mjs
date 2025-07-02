import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export var FontSize;
(function (FontSize) {
    FontSize["xxs"] = "xs";
    FontSize["xs"] = "xs";
    FontSize["s"] = "s";
    FontSize["m"] = "m";
    FontSize["xm"] = "xm";
    FontSize["r"] = "r";
})(FontSize || (FontSize = {}));
export class FontSizeDirective {
    renderer;
    el;
    fontSize;
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        if (this.fontSize) {
            this.renderer.addClass(this.el.nativeElement, 'text--' + this.fontSize);
        }
    }
    static ɵfac = function FontSizeDirective_Factory(t) { return new (t || FontSizeDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FontSizeDirective, selectors: [["", "tgFontSize", ""]], inputs: { fontSize: [i0.ɵɵInputFlags.None, "tgFontSize", "fontSize"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FontSizeDirective, [{
        type: Directive,
        args: [{
                selector: '[tgFontSize]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { fontSize: [{
            type: Input,
            args: ['tgFontSize']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9udC1zaXplLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL2ZvbnRzL2ZvbnQtc2l6ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDOztBQUVoRixNQUFNLENBQU4sSUFBWSxRQU9YO0FBUEQsV0FBWSxRQUFRO0lBQ2xCLHNCQUFZLENBQUE7SUFDWixxQkFBVyxDQUFBO0lBQ1gsbUJBQVMsQ0FBQTtJQUNULG1CQUFTLENBQUE7SUFDVCxxQkFBVyxDQUFBO0lBQ1gsbUJBQVMsQ0FBQTtBQUNYLENBQUMsRUFQVyxRQUFRLEtBQVIsUUFBUSxRQU9uQjtBQU9ELE1BQU0sT0FBTyxpQkFBaUI7SUFJbkI7SUFDQTtJQUpZLFFBQVEsQ0FBZTtJQUU1QyxZQUNTLFFBQW1CLEVBQ25CLEVBQWM7UUFEZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLE9BQUUsR0FBRixFQUFFLENBQVk7SUFDcEIsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVPLFVBQVU7UUFDaEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxRSxDQUFDO0lBQ0gsQ0FBQzsyRUFoQlUsaUJBQWlCOzZEQUFqQixpQkFBaUI7O2lGQUFqQixpQkFBaUI7Y0FIN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2FBQ3pCO21FQUVzQixRQUFRO2tCQUE1QixLQUFLO21CQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgZW51bSBGb250U2l6ZSB7XG4gICd4eHMnID0gJ3hzJyxcbiAgJ3hzJyA9ICd4cycsXG4gICdzJyA9ICdzJyxcbiAgJ20nID0gJ20nLFxuICAneG0nID0gJ3htJyxcbiAgJ3InID0gJ3InLFxufVxuXG50eXBlIEZvbnRTaXplVHlwZSA9ICd4eHMnIHwgJ3hzJyB8ICdzJyB8ICdtJyB8ICd4bScgfCAncic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0Z0ZvbnRTaXplXScsXG59KVxuZXhwb3J0IGNsYXNzIEZvbnRTaXplRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCd0Z0ZvbnRTaXplJykgZm9udFNpemU6IEZvbnRTaXplVHlwZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWZcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkQ2xhc3NlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRDbGFzc2VzKCkge1xuICAgIGlmICh0aGlzLmZvbnRTaXplKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3RleHQtLScgKyB0aGlzLmZvbnRTaXplKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==