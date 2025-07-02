import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class FullWidthDirective {
    renderer;
    el;
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        this.renderer.addClass(this.el.nativeElement, 'width--full');
    }
    static ɵfac = function FullWidthDirective_Factory(t) { return new (t || FullWidthDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FullWidthDirective, selectors: [["", "tgFullWidth", ""]] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FullWidthDirective, [{
        type: Directive,
        args: [{
                selector: '[tgFullWidth]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC13aWR0aC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy9sYXlvdXQvZnVsbC13aWR0aC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUMsTUFBTSxlQUFlLENBQUM7O0FBS3pFLE1BQU0sT0FBTyxrQkFBa0I7SUFFcEI7SUFDQTtJQUZULFlBQ1MsUUFBbUIsRUFDbkIsRUFBYztRQURkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUNwQixDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU8sVUFBVTtRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUMvRCxDQUFDOzRFQVpVLGtCQUFrQjs2REFBbEIsa0JBQWtCOztpRkFBbEIsa0JBQWtCO2NBSDlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RnRnVsbFdpZHRoXScsXG59KVxuZXhwb3J0IGNsYXNzIEZ1bGxXaWR0aERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRDbGFzc2VzKCk7XG4gIH1cblxuICBwcml2YXRlIGFkZENsYXNzZXMoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd3aWR0aC0tZnVsbCcpO1xuICB9XG59XG4iXX0=