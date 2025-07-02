import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export var TextFlowType;
(function (TextFlowType) {
    TextFlowType["body"] = "body";
    TextFlowType["h1"] = "h1";
    TextFlowType["h3"] = "h3";
    TextFlowType["h4"] = "h4";
    TextFlowType["legal"] = "legal";
    TextFlowType["label"] = "label";
    TextFlowType["detail"] = "detail";
    TextFlowType["details"] = "details";
    TextFlowType["button"] = "button";
})(TextFlowType || (TextFlowType = {}));
export class TextFlowDirective {
    renderer;
    el;
    textFlow;
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        if (this.textFlow) {
            this.renderer.addClass(this.el.nativeElement, 'text-flow');
            this.renderer.addClass(this.el.nativeElement, 'text-flow--' + this.textFlow);
        }
    }
    static ɵfac = function TextFlowDirective_Factory(t) { return new (t || TextFlowDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TextFlowDirective, selectors: [["", "tgTextFlow", ""]], inputs: { textFlow: [i0.ɵɵInputFlags.None, "tgTextFlow", "textFlow"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextFlowDirective, [{
        type: Directive,
        args: [{
                selector: '[tgTextFlow]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { textFlow: [{
            type: Input,
            args: ['tgTextFlow']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1mbG93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL3RleHQvdGV4dC1mbG93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7O0FBRWhGLE1BQU0sQ0FBTixJQUFZLFlBVVg7QUFWRCxXQUFZLFlBQVk7SUFDdEIsNkJBQWUsQ0FBQTtJQUNmLHlCQUFXLENBQUE7SUFDWCx5QkFBVyxDQUFBO0lBQ1gseUJBQVcsQ0FBQTtJQUNYLCtCQUFpQixDQUFBO0lBQ2pCLCtCQUFpQixDQUFBO0lBQ2pCLGlDQUFtQixDQUFBO0lBQ25CLG1DQUFxQixDQUFBO0lBQ3JCLGlDQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFWVyxZQUFZLEtBQVosWUFBWSxRQVV2QjtBQU9ELE1BQU0sT0FBTyxpQkFBaUI7SUFJbkI7SUFDQTtJQUpZLFFBQVEsQ0FBZ0I7SUFFN0MsWUFDUyxRQUFtQixFQUNuQixFQUFjO1FBRGQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQ3BCLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTyxVQUFVO1FBQ2hCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0UsQ0FBQztJQUNILENBQUM7MkVBakJVLGlCQUFpQjs2REFBakIsaUJBQWlCOztpRkFBakIsaUJBQWlCO2NBSDdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYzthQUN6QjttRUFFc0IsUUFBUTtrQkFBNUIsS0FBSzttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGVudW0gVGV4dEZsb3dUeXBlIHtcbiAgJ2JvZHknID0gJ2JvZHknLFxuICAnaDEnID0gJ2gxJyxcbiAgJ2gzJyA9ICdoMycsXG4gICdoNCcgPSAnaDQnLFxuICAnbGVnYWwnID0gJ2xlZ2FsJyxcbiAgJ2xhYmVsJyA9ICdsYWJlbCcsXG4gICdkZXRhaWwnID0gJ2RldGFpbCcsXG4gICdkZXRhaWxzJyA9ICdkZXRhaWxzJyxcbiAgJ2J1dHRvbicgPSAnYnV0dG9uJyxcbn1cblxudHlwZSB0ZXh0Rmxvd1R5cGUgPSAnYm9keScgfCAnaDEnIHwgJ2gzJyB8ICdoNCcgfCAnbGVnYWwnIHwgJ2xhYmVsJyB8ICdkZXRhaWwnIHwgJ2RldGFpbHMnIHwgJ2J1dHRvbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0Z1RleHRGbG93XScsXG59KVxuZXhwb3J0IGNsYXNzIFRleHRGbG93RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCd0Z1RleHRGbG93JykgdGV4dEZsb3c/OiB0ZXh0Rmxvd1R5cGU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIGVsOiBFbGVtZW50UmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZENsYXNzZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkQ2xhc3NlcygpIHtcbiAgICBpZiAodGhpcy50ZXh0Rmxvdykge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0ZXh0LWZsb3cnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndGV4dC1mbG93LS0nICsgdGhpcy50ZXh0Rmxvdyk7XG4gICAgfVxuICB9XG59XG4iXX0=