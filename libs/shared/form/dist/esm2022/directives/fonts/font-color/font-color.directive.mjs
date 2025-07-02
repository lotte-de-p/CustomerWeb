import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export var FontColor;
(function (FontColor) {
    FontColor["brand-2e"] = "brand-2e";
    FontColor["brand-1e"] = "brand-1e";
})(FontColor || (FontColor = {}));
export class FontColorDirective {
    renderer;
    el;
    fontColor = '';
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        const fontColor = FontColor[this.fontColor] ?? this.fontColor;
        this.renderer.addClass(this.el.nativeElement, 'color-' + fontColor);
    }
    static ɵfac = function FontColorDirective_Factory(t) { return new (t || FontColorDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FontColorDirective, selectors: [["", "tgFontColor", ""]], inputs: { fontColor: [i0.ɵɵInputFlags.None, "tgFontColor", "fontColor"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FontColorDirective, [{
        type: Directive,
        args: [{
                selector: '[tgFontColor]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { fontColor: [{
            type: Input,
            args: ['tgFontColor']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9udC1jb2xvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy9mb250cy9mb250LWNvbG9yL2ZvbnQtY29sb3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7QUFFaEYsTUFBTSxDQUFOLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQixrQ0FBdUIsQ0FBQTtJQUN2QixrQ0FBdUIsQ0FBQTtBQUN6QixDQUFDLEVBSFcsU0FBUyxLQUFULFNBQVMsUUFHcEI7QUFLRCxNQUFNLE9BQU8sa0JBQWtCO0lBSXBCO0lBQ0E7SUFKYSxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBRXJDLFlBQ1MsUUFBbUIsRUFDbkIsRUFBYztRQURkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUNwQixDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU8sVUFBVTtRQUNoQixNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQW1DLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQztJQUN0RSxDQUFDOzRFQWZVLGtCQUFrQjs2REFBbEIsa0JBQWtCOztpRkFBbEIsa0JBQWtCO2NBSDlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTthQUMxQjttRUFFdUIsU0FBUztrQkFBOUIsS0FBSzttQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGVudW0gRm9udENvbG9yIHtcbiAgJ2JyYW5kLTJlJyA9ICdicmFuZC0yZScsXG4gICdicmFuZC0xZScgPSAnYnJhbmQtMWUnLFxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGdGb250Q29sb3JdJyxcbn0pXG5leHBvcnQgY2xhc3MgRm9udENvbG9yRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCd0Z0ZvbnRDb2xvcicpIGZvbnRDb2xvciA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRDbGFzc2VzKCk7XG4gIH1cblxuICBwcml2YXRlIGFkZENsYXNzZXMoKSB7XG4gICAgY29uc3QgZm9udENvbG9yID0gRm9udENvbG9yW3RoaXMuZm9udENvbG9yIGFzIGtleW9mIHR5cGVvZiBGb250Q29sb3JdID8/IHRoaXMuZm9udENvbG9yO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnY29sb3ItJyArIGZvbnRDb2xvcik7XG4gIH1cbn1cbiJdfQ==