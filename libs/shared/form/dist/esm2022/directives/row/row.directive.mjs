import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class RowDirective {
    renderer;
    el;
    fullGutters;
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        this.renderer.addClass(this.el.nativeElement, 'row');
        this.checkGutter();
    }
    checkGutter() {
        if (this.fullGutters) {
            this.renderer.addClass(this.el.nativeElement, 'row--full-gutters');
        }
    }
    static ɵfac = function RowDirective_Factory(t) { return new (t || RowDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: RowDirective, selectors: [["div", "tgGridRow", ""]], inputs: { fullGutters: "fullGutters" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RowDirective, [{
        type: Directive,
        args: [{
                selector: 'div[tgGridRow]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { fullGutters: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL3Jvdy9yb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7QUFLaEYsTUFBTSxPQUFPLFlBQVk7SUFJZDtJQUNBO0lBSkEsV0FBVyxDQUFVO0lBRTlCLFlBQ1MsUUFBbUIsRUFDbkIsRUFBYztRQURkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUNwQixDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU8sVUFBVTtRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVPLFdBQVc7UUFDakIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUNyRSxDQUFDO0lBQ0gsQ0FBQztzRUFyQlUsWUFBWTs2REFBWixZQUFZOztpRkFBWixZQUFZO2NBSHhCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCO21FQUVVLFdBQVc7a0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdkaXZbdGdHcmlkUm93XScsXG59KVxuZXhwb3J0IGNsYXNzIFJvd0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZ1bGxHdXR0ZXJzOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRDbGFzc2VzKCk7XG4gIH1cblxuICBwcml2YXRlIGFkZENsYXNzZXMoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdyb3cnKTtcbiAgICB0aGlzLmNoZWNrR3V0dGVyKCk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrR3V0dGVyKCkge1xuICAgIGlmICh0aGlzLmZ1bGxHdXR0ZXJzKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3Jvdy0tZnVsbC1ndXR0ZXJzJyk7XG4gICAgfVxuICB9XG59XG4iXX0=