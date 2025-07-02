import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export var MarginSize;
(function (MarginSize) {
    MarginSize["xSmall"] = "xxs";
    MarginSize["xxSmall"] = "xxxs";
    MarginSize["small"] = "s";
    MarginSize["medium"] = "m";
    MarginSize["large"] = "l";
    MarginSize["xLarge"] = "xl";
    MarginSize["xxLarge"] = "xxl";
})(MarginSize || (MarginSize = {}));
export var MarginPosition;
(function (MarginPosition) {
    MarginPosition["top"] = "t";
    MarginPosition["bottom"] = "b";
    MarginPosition["left"] = "l";
    MarginPosition["right"] = "r";
})(MarginPosition || (MarginPosition = {}));
export class MarginDirective {
    renderer;
    el;
    margin;
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        if (!this.margin) {
            return;
        }
        if (Array.isArray(this.margin)) {
            this.margin.forEach((margin) => {
                this.renderer.addClass(this.el.nativeElement, `m${margin.position}--${margin.size}`);
            });
        }
        else {
            this.renderer.addClass(this.el.nativeElement, `m${this.margin.position}--${this.margin.size}`);
        }
    }
    static ɵfac = function MarginDirective_Factory(t) { return new (t || MarginDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: MarginDirective, selectors: [["", "tgMargin", ""]], inputs: { margin: [i0.ɵɵInputFlags.None, "tgMargin", "margin"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MarginDirective, [{
        type: Directive,
        args: [{
                selector: '[tgMargin]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { margin: [{
            type: Input,
            args: ['tgMargin']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFyZ2luLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL21hcmdpbi9tYXJnaW4uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7QUFFaEYsTUFBTSxDQUFOLElBQVksVUFRWDtBQVJELFdBQVksVUFBVTtJQUNwQiw0QkFBZ0IsQ0FBQTtJQUNoQiw4QkFBa0IsQ0FBQTtJQUNsQix5QkFBYSxDQUFBO0lBQ2IsMEJBQWMsQ0FBQTtJQUNkLHlCQUFhLENBQUE7SUFDYiwyQkFBZSxDQUFBO0lBQ2YsNkJBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQVJXLFVBQVUsS0FBVixVQUFVLFFBUXJCO0FBRUQsTUFBTSxDQUFOLElBQVksY0FLWDtBQUxELFdBQVksY0FBYztJQUN4QiwyQkFBVyxDQUFBO0lBQ1gsOEJBQWMsQ0FBQTtJQUNkLDRCQUFZLENBQUE7SUFDWiw2QkFBYSxDQUFBO0FBQ2YsQ0FBQyxFQUxXLGNBQWMsS0FBZCxjQUFjLFFBS3pCO0FBVUQsTUFBTSxPQUFPLGVBQWU7SUFJakI7SUFDQTtJQUpVLE1BQU0sQ0FBa0M7SUFFM0QsWUFDUyxRQUFtQixFQUNuQixFQUFjO1FBRGQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQ3BCLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTyxVQUFVO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDakIsT0FBTztRQUNULENBQUM7UUFDRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFxQixFQUFFLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksTUFBTSxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUN2RixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDakcsQ0FBQztJQUNILENBQUM7eUVBdkJVLGVBQWU7NkRBQWYsZUFBZTs7aUZBQWYsZUFBZTtjQUgzQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7YUFDdkI7bUVBRW9CLE1BQU07a0JBQXhCLEtBQUs7bUJBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBlbnVtIE1hcmdpblNpemUge1xuICAneFNtYWxsJyA9ICd4eHMnLFxuICAneHhTbWFsbCcgPSAneHh4cycsXG4gICdzbWFsbCcgPSAncycsXG4gICdtZWRpdW0nID0gJ20nLFxuICAnbGFyZ2UnID0gJ2wnLFxuICAneExhcmdlJyA9ICd4bCcsXG4gICd4eExhcmdlJyA9ICd4eGwnLFxufVxuXG5leHBvcnQgZW51bSBNYXJnaW5Qb3NpdGlvbiB7XG4gICd0b3AnID0gJ3QnLFxuICAnYm90dG9tJyA9ICdiJyxcbiAgJ2xlZnQnID0gJ2wnLFxuICAncmlnaHQnID0gJ3InLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmdpbk9wdGlvbnMge1xuICBwb3NpdGlvbjogJ3QnIHwgJ2InIHwgJ2wnIHwgJ3InO1xuICBzaXplOiAneHh4cycgfCAneHhzJyB8ICd4cycgfCAncycgfCAnbScgfCAnbCcgfCAneGwnIHwgJ3h4bCcgfCAnZycgfCAnYXV0byc7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0Z01hcmdpbl0nLFxufSlcbmV4cG9ydCBjbGFzcyBNYXJnaW5EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ3RnTWFyZ2luJykgbWFyZ2luOiBNYXJnaW5PcHRpb25zIHwgTWFyZ2luT3B0aW9uc1tdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRDbGFzc2VzKCk7XG4gIH1cblxuICBwcml2YXRlIGFkZENsYXNzZXMoKSB7XG4gICAgaWYgKCF0aGlzLm1hcmdpbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLm1hcmdpbikpIHtcbiAgICAgIHRoaXMubWFyZ2luLmZvckVhY2goKG1hcmdpbjogTWFyZ2luT3B0aW9ucykgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgYG0ke21hcmdpbi5wb3NpdGlvbn0tLSR7bWFyZ2luLnNpemV9YCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGBtJHt0aGlzLm1hcmdpbi5wb3NpdGlvbn0tLSR7dGhpcy5tYXJnaW4uc2l6ZX1gKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==