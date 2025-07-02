import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export var TextDecorationType;
(function (TextDecorationType) {
    TextDecorationType["line-through"] = "line-through";
})(TextDecorationType || (TextDecorationType = {}));
export class TextDecorationDirective {
    renderer;
    el;
    textDecoration;
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        if (this.textDecoration) {
            this.renderer.addClass(this.el.nativeElement, 'text-decoration--' + this.textDecoration);
        }
    }
    static ɵfac = function TextDecorationDirective_Factory(t) { return new (t || TextDecorationDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TextDecorationDirective, selectors: [["", "tgTextDecoration", ""]], inputs: { textDecoration: [i0.ɵɵInputFlags.None, "tgTextDecoration", "textDecoration"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextDecorationDirective, [{
        type: Directive,
        args: [{
                selector: '[tgTextDecoration]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { textDecoration: [{
            type: Input,
            args: ['tgTextDecoration']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1kZWNvcmF0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL3RleHQvdGV4dC1kZWNvcmF0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7O0FBRWhGLE1BQU0sQ0FBTixJQUFZLGtCQUVYO0FBRkQsV0FBWSxrQkFBa0I7SUFDNUIsbURBQStCLENBQUE7QUFDakMsQ0FBQyxFQUZXLGtCQUFrQixLQUFsQixrQkFBa0IsUUFFN0I7QUFPRCxNQUFNLE9BQU8sdUJBQXVCO0lBSXpCO0lBQ0E7SUFKa0IsY0FBYyxDQUFxQjtJQUU5RCxZQUNTLFFBQW1CLEVBQ25CLEVBQWM7UUFEZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLE9BQUUsR0FBRixFQUFFLENBQVk7SUFDcEIsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVPLFVBQVU7UUFDaEIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzNGLENBQUM7SUFDSCxDQUFDO2lGQWhCVSx1QkFBdUI7NkRBQXZCLHVCQUF1Qjs7aUZBQXZCLHVCQUF1QjtjQUhuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjthQUMvQjttRUFFNEIsY0FBYztrQkFBeEMsS0FBSzttQkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgZW51bSBUZXh0RGVjb3JhdGlvblR5cGUge1xuICAnbGluZS10aHJvdWdoJyA9ICdsaW5lLXRocm91Z2gnLFxufVxuXG50eXBlIHRleHREZWNvcmF0aW9uVHlwZSA9ICdsaW5lLXRocm91Z2gnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGdUZXh0RGVjb3JhdGlvbl0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0RGVjb3JhdGlvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgndGdUZXh0RGVjb3JhdGlvbicpIHRleHREZWNvcmF0aW9uOiB0ZXh0RGVjb3JhdGlvblR5cGU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIGVsOiBFbGVtZW50UmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZENsYXNzZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkQ2xhc3NlcygpIHtcbiAgICBpZiAodGhpcy50ZXh0RGVjb3JhdGlvbikge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0ZXh0LWRlY29yYXRpb24tLScgKyB0aGlzLnRleHREZWNvcmF0aW9uKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==