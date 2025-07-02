import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export var PaddingSize;
(function (PaddingSize) {
    PaddingSize["xxxSmall"] = "xxxs";
    PaddingSize["xSmall"] = "xxs";
    PaddingSize["small"] = "s";
    PaddingSize["medium"] = "m";
    PaddingSize["large"] = "l";
    PaddingSize["xLarge"] = "xl";
    PaddingSize["xxLarge"] = "xxl";
})(PaddingSize || (PaddingSize = {}));
export var PaddingPositions;
(function (PaddingPositions) {
    PaddingPositions[""] = "";
    PaddingPositions["top"] = "t";
    PaddingPositions["bottom"] = "b";
    PaddingPositions["left"] = "l";
    PaddingPositions["right"] = "r";
})(PaddingPositions || (PaddingPositions = {}));
export class PaddingDirective {
    renderer;
    el;
    padding;
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        if (!this.padding) {
            return;
        }
        if (Array.isArray(this.padding)) {
            this.padding.forEach((padding) => {
                if (!padding.position) {
                    padding.position = '';
                }
                this.renderer.addClass(this.el.nativeElement, `p${padding.position}--${padding.size}`);
            });
        }
        else {
            if (!this.padding.position) {
                this.padding.position = '';
            }
            this.renderer.addClass(this.el.nativeElement, `p${this.padding.position}--${this.padding.size}`);
        }
    }
    static ɵfac = function PaddingDirective_Factory(t) { return new (t || PaddingDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PaddingDirective, selectors: [["", "tgPadding", ""]], inputs: { padding: [i0.ɵɵInputFlags.None, "tgPadding", "padding"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaddingDirective, [{
        type: Directive,
        args: [{
                selector: '[tgPadding]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { padding: [{
            type: Input,
            args: ['tgPadding']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFkZGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy9wYWRkaW5nL3BhZGRpbmcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7QUFFaEYsTUFBTSxDQUFOLElBQVksV0FRWDtBQVJELFdBQVksV0FBVztJQUNyQixnQ0FBbUIsQ0FBQTtJQUNuQiw2QkFBZ0IsQ0FBQTtJQUNoQiwwQkFBYSxDQUFBO0lBQ2IsMkJBQWMsQ0FBQTtJQUNkLDBCQUFhLENBQUE7SUFDYiw0QkFBZSxDQUFBO0lBQ2YsOEJBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQVJXLFdBQVcsS0FBWCxXQUFXLFFBUXRCO0FBRUQsTUFBTSxDQUFOLElBQVksZ0JBTVg7QUFORCxXQUFZLGdCQUFnQjtJQUMxQix5QkFBTyxDQUFBO0lBQ1AsNkJBQVcsQ0FBQTtJQUNYLGdDQUFjLENBQUE7SUFDZCw4QkFBWSxDQUFBO0lBQ1osK0JBQWEsQ0FBQTtBQUNmLENBQUMsRUFOVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBTTNCO0FBVUQsTUFBTSxPQUFPLGdCQUFnQjtJQUlsQjtJQUNBO0lBSlcsT0FBTyxDQUFvQztJQUUvRCxZQUNTLFFBQW1CLEVBQ25CLEVBQWM7UUFEZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLE9BQUUsR0FBRixFQUFFLENBQVk7SUFDcEIsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVPLFVBQVU7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsQixPQUFPO1FBQ1QsQ0FBQztRQUNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQXVCLEVBQUUsRUFBRTtnQkFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDdEIsT0FBTyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBQ3hCLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3pGLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQzthQUFNLENBQUM7WUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQzdCLENBQUM7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNuRyxDQUFDO0lBQ0gsQ0FBQzswRUE3QlUsZ0JBQWdCOzZEQUFoQixnQkFBZ0I7O2lGQUFoQixnQkFBZ0I7Y0FINUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2FBQ3hCO21FQUVxQixPQUFPO2tCQUExQixLQUFLO21CQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgZW51bSBQYWRkaW5nU2l6ZSB7XG4gICd4eHhTbWFsbCcgPSAneHh4cycsXG4gICd4U21hbGwnID0gJ3h4cycsXG4gICdzbWFsbCcgPSAncycsXG4gICdtZWRpdW0nID0gJ20nLFxuICAnbGFyZ2UnID0gJ2wnLFxuICAneExhcmdlJyA9ICd4bCcsXG4gICd4eExhcmdlJyA9ICd4eGwnLFxufVxuXG5leHBvcnQgZW51bSBQYWRkaW5nUG9zaXRpb25zIHtcbiAgJycgPSAnJyxcbiAgJ3RvcCcgPSAndCcsXG4gICdib3R0b20nID0gJ2InLFxuICAnbGVmdCcgPSAnbCcsXG4gICdyaWdodCcgPSAncicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFkZGluZ09wdGlvbnMge1xuICBwb3NpdGlvbj86ICcnIHwgJ3QnIHwgJ2InIHwgJ2wnIHwgJ3InO1xuICBzaXplOiAneHh4cycgfCAneHhzJyB8ICdzJyB8ICdtJyB8ICdsJyB8ICd4bCcgfCAneHhsJztcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RnUGFkZGluZ10nLFxufSlcbmV4cG9ydCBjbGFzcyBQYWRkaW5nRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCd0Z1BhZGRpbmcnKSBwYWRkaW5nOiBQYWRkaW5nT3B0aW9ucyB8IFBhZGRpbmdPcHRpb25zW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIGVsOiBFbGVtZW50UmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZENsYXNzZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkQ2xhc3NlcygpIHtcbiAgICBpZiAoIXRoaXMucGFkZGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnBhZGRpbmcpKSB7XG4gICAgICB0aGlzLnBhZGRpbmcuZm9yRWFjaCgocGFkZGluZzogUGFkZGluZ09wdGlvbnMpID0+IHtcbiAgICAgICAgaWYgKCFwYWRkaW5nLnBvc2l0aW9uKSB7XG4gICAgICAgICAgcGFkZGluZy5wb3NpdGlvbiA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBgcCR7cGFkZGluZy5wb3NpdGlvbn0tLSR7cGFkZGluZy5zaXplfWApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5wYWRkaW5nLnBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMucGFkZGluZy5wb3NpdGlvbiA9ICcnO1xuICAgICAgfVxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGBwJHt0aGlzLnBhZGRpbmcucG9zaXRpb259LS0ke3RoaXMucGFkZGluZy5zaXplfWApO1xuICAgIH1cbiAgfVxufVxuIl19