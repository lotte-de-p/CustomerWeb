import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ColDirective {
    renderer;
    el;
    columns = 12;
    breakpoint;
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        if (this.breakpoint) {
            this.renderer.addClass(this.el.nativeElement, 'col-' + this.breakpoint + '-' + this.columns);
        }
        else {
            this.renderer.addClass(this.el.nativeElement, 'col-' + this.columns);
        }
    }
    static ɵfac = function ColDirective_Factory(t) { return new (t || ColDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ColDirective, selectors: [["div", "tgGridCol", ""]], inputs: { columns: "columns", breakpoint: "breakpoint" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ColDirective, [{
        type: Directive,
        args: [{
                selector: 'div[tgGridCol]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { columns: [{
            type: Input
        }], breakpoint: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL2dyaWQvY29sL2NvbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDOztBQUtoRixNQUFNLE9BQU8sWUFBWTtJQUtkO0lBQ0E7SUFMQSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2IsVUFBVSxDQUFTO0lBRTVCLFlBQ1MsUUFBbUIsRUFDbkIsRUFBYztRQURkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUNwQixDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU8sVUFBVTtRQUNoQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9GLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RSxDQUFDO0lBQ0gsQ0FBQztzRUFuQlUsWUFBWTs2REFBWixZQUFZOztpRkFBWixZQUFZO2NBSHhCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCO21FQUVVLE9BQU87a0JBQWYsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdkaXZbdGdHcmlkQ29sXScsXG59KVxuZXhwb3J0IGNsYXNzIENvbERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbHVtbnMgPSAxMjtcbiAgQElucHV0KCkgYnJlYWtwb2ludDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRDbGFzc2VzKCk7XG4gIH1cblxuICBwcml2YXRlIGFkZENsYXNzZXMoKSB7XG4gICAgaWYgKHRoaXMuYnJlYWtwb2ludCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdjb2wtJyArIHRoaXMuYnJlYWtwb2ludCArICctJyArIHRoaXMuY29sdW1ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnY29sLScgKyB0aGlzLmNvbHVtbnMpO1xuICAgIH1cbiAgfVxufVxuIl19