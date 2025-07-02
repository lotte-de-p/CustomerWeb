import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class IconDirective {
    renderer;
    el;
    iconType;
    iconSize;
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        if (this.iconType) {
            this.renderer.addClass(this.el.nativeElement, `icon-${this.iconType}`);
        }
        if (this.iconSize) {
            this.renderer.addClass(this.el.nativeElement, `icon-${this.iconSize}`);
        }
    }
    static ɵfac = function IconDirective_Factory(t) { return new (t || IconDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: IconDirective, selectors: [["i", "tgIcon", ""]], inputs: { iconType: "iconType", iconSize: "iconSize" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconDirective, [{
        type: Directive,
        args: [{
                selector: 'i[tgIcon]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { iconType: [{
            type: Input
        }], iconSize: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy9pY29uL2ljb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7QUFLaEYsTUFBTSxPQUFPLGFBQWE7SUFLZjtJQUNBO0lBTEEsUUFBUSxDQUFTO0lBQ2pCLFFBQVEsQ0FBUztJQUUxQixZQUNTLFFBQW1CLEVBQ25CLEVBQWM7UUFEZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLE9BQUUsR0FBRixFQUFFLENBQVk7SUFDcEIsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVPLFVBQVU7UUFDaEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN6RSxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN6RSxDQUFDO0lBQ0gsQ0FBQzt1RUFwQlUsYUFBYTs2REFBYixhQUFhOztpRkFBYixhQUFhO2NBSHpCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsV0FBVzthQUN0QjttRUFFVSxRQUFRO2tCQUFoQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2lbdGdJY29uXScsXG59KVxuZXhwb3J0IGNsYXNzIEljb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpY29uVHlwZTogc3RyaW5nO1xuICBASW5wdXQoKSBpY29uU2l6ZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRDbGFzc2VzKCk7XG4gIH1cblxuICBwcml2YXRlIGFkZENsYXNzZXMoKSB7XG4gICAgaWYgKHRoaXMuaWNvblR5cGUpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBgaWNvbi0ke3RoaXMuaWNvblR5cGV9YCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmljb25TaXplKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgYGljb24tJHt0aGlzLmljb25TaXplfWApO1xuICAgIH1cbiAgfVxufVxuIl19