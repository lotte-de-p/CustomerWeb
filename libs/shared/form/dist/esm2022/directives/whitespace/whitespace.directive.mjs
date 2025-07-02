import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class WhitespaceDirective {
    renderer;
    el;
    whitespaceSize = 'small';
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        this.renderer.addClass(this.el.nativeElement, 'whitespace');
        switch (this.whitespaceSize) {
            case 'small':
                this.renderer.addClass(this.el.nativeElement, 'whitespace--small');
                break;
            case 'medium':
                this.renderer.addClass(this.el.nativeElement, 'whitespace--medium');
                break;
            case 'large':
                this.renderer.addClass(this.el.nativeElement, 'whitespace--large');
                break;
            case 'extra-large':
                this.renderer.addClass(this.el.nativeElement, 'whitespace--xlarge');
                break;
            default:
                this.renderer.addClass(this.el.nativeElement, 'whitespace--small');
                break;
        }
    }
    static ɵfac = function WhitespaceDirective_Factory(t) { return new (t || WhitespaceDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: WhitespaceDirective, selectors: [["", "tgWhitespace", ""]], inputs: { whitespaceSize: [i0.ɵɵInputFlags.None, "tgWhitespace", "whitespaceSize"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WhitespaceDirective, [{
        type: Directive,
        args: [{
                selector: '[tgWhitespace]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { whitespaceSize: [{
            type: Input,
            args: ['tgWhitespace']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2hpdGVzcGFjZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy93aGl0ZXNwYWNlL3doaXRlc3BhY2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7QUFPaEYsTUFBTSxPQUFPLG1CQUFtQjtJQUlyQjtJQUNBO0lBSmMsY0FBYyxHQUFzQixPQUFPLENBQUM7SUFFbkUsWUFDUyxRQUFtQixFQUNuQixFQUFjO1FBRGQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQ3BCLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTyxVQUFVO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRTVELFFBQVEsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzVCLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO2dCQUNuRSxNQUFNO1lBQ1IsS0FBSyxRQUFRO2dCQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLG9CQUFvQixDQUFDLENBQUM7Z0JBQ3BFLE1BQU07WUFDUixLQUFLLE9BQU87Z0JBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztnQkFDbkUsTUFBTTtZQUNSLEtBQUssYUFBYTtnQkFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztnQkFDcEUsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDLENBQUM7Z0JBQ25FLE1BQU07UUFDVixDQUFDO0lBQ0gsQ0FBQzs2RUFoQ1UsbUJBQW1COzZEQUFuQixtQkFBbUI7O2lGQUFuQixtQkFBbUI7Y0FIL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7bUVBRXdCLGNBQWM7a0JBQXBDLEtBQUs7bUJBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIHdoaXRlc3BhY2VPcHRpb25zID0gJ3RpbnknIHwgJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJyB8ICdleHRyYS1sYXJnZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0Z1doaXRlc3BhY2VdJyxcbn0pXG5leHBvcnQgY2xhc3MgV2hpdGVzcGFjZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgndGdXaGl0ZXNwYWNlJykgd2hpdGVzcGFjZVNpemU6IHdoaXRlc3BhY2VPcHRpb25zID0gJ3NtYWxsJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWZcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkQ2xhc3NlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRDbGFzc2VzKCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnd2hpdGVzcGFjZScpO1xuXG4gICAgc3dpdGNoICh0aGlzLndoaXRlc3BhY2VTaXplKSB7XG4gICAgICBjYXNlICdzbWFsbCc6XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnd2hpdGVzcGFjZS0tc21hbGwnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3doaXRlc3BhY2UtLW1lZGl1bScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd3aGl0ZXNwYWNlLS1sYXJnZScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2V4dHJhLWxhcmdlJzpcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd3aGl0ZXNwYWNlLS14bGFyZ2UnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3doaXRlc3BhY2UtLXNtYWxsJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIl19