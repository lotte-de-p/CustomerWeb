import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class BrandImageDirective {
    el;
    isTelenet = false;
    img = '';
    telenetImg = '';
    baseImg = '';
    constructor(el) {
        this.el = el;
    }
    ngOnChanges() {
        const image = this.getImageSrcSet();
        if (this.el.nativeElement.tagName === 'WINK-IMG') {
            this.el.nativeElement.setAttribute('src-desktop', image.desktop);
            this.el.nativeElement.setAttribute('src-mobile', image.mobile);
            this.el.nativeElement.setAttribute('src-tablet', image.tablet);
        }
        if (this.el.nativeElement.tagName === 'IMG') {
            this.el.nativeElement.setAttribute('src', image.desktop);
        }
    }
    get image() {
        if (this.isTelenet && this.telenetImg) {
            return this.telenetImg;
        }
        if (!this.isTelenet && this.baseImg) {
            return this.baseImg;
        }
        return this.img;
    }
    getImageSrcSet() {
        if (typeof this.image === 'string') {
            const image = this.image;
            return {
                desktop: image,
                tablet: image,
                mobile: image,
            };
        }
        else {
            const image = this.image;
            return {
                desktop: image.desktop,
                mobile: image.mobile,
                tablet: image.tablet,
            };
        }
    }
    static ɵfac = function BrandImageDirective_Factory(t) { return new (t || BrandImageDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BrandImageDirective, selectors: [["", "brandImage", ""]], inputs: { isTelenet: "isTelenet", img: "img", telenetImg: "telenetImg", baseImg: "baseImg" }, standalone: true, features: [i0.ɵɵNgOnChangesFeature] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BrandImageDirective, [{
        type: Directive,
        args: [{
                selector: '[brandImage]',
                standalone: true,
            }]
    }], () => [{ type: i0.ElementRef }], { isTelenet: [{
            type: Input
        }], img: [{
            type: Input
        }], telenetImg: [{
            type: Input
        }], baseImg: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhbmQtaW1hZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9wYWdlL2Fzc2V0L2RpcmVjdGl2ZXMvYnJhbmQtaW1hZ2UvYnJhbmQtaW1hZ2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDOztBQVl4RSxNQUFNLE9BQU8sbUJBQW1CO0lBTUQ7SUFMcEIsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUNsQixHQUFHLEdBQXlCLEVBQUUsQ0FBQztJQUMvQixVQUFVLEdBQXlCLEVBQUUsQ0FBQztJQUN0QyxPQUFPLEdBQXlCLEVBQUUsQ0FBQztJQUU1QyxZQUE2QixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFHLENBQUM7SUFFL0MsV0FBVztRQUNULE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLE9BQU8sS0FBSyxVQUFVLEVBQUUsQ0FBQztZQUNqRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRSxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFLENBQUM7WUFDNUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0QsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3RDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7SUFFTyxjQUFjO1FBQ3BCLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQ25DLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekIsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxNQUFNLEVBQUUsS0FBSztnQkFDYixNQUFNLEVBQUUsS0FBSzthQUNkLENBQUM7UUFDSixDQUFDO2FBQU0sQ0FBQztZQUNOLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekIsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87Z0JBQ3RCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtnQkFDcEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO2FBQ3JCLENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQzs2RUE5Q1UsbUJBQW1COzZEQUFuQixtQkFBbUI7O2lGQUFuQixtQkFBbUI7Y0FKL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixVQUFVLEVBQUUsSUFBSTthQUNqQjsyQ0FFVSxTQUFTO2tCQUFqQixLQUFLO1lBQ0csR0FBRztrQkFBWCxLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG50eXBlIEltYWdlU3JjU2V0ID0ge1xuICBkZXNrdG9wOiBzdHJpbmc7XG4gIG1vYmlsZTogc3RyaW5nO1xuICB0YWJsZXQ6IHN0cmluZztcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ticmFuZEltYWdlXScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEJyYW5kSW1hZ2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBpc1RlbGVuZXQgPSBmYWxzZTtcbiAgQElucHV0KCkgaW1nOiBJbWFnZVNyY1NldCB8IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSB0ZWxlbmV0SW1nOiBJbWFnZVNyY1NldCB8IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBiYXNlSW1nOiBJbWFnZVNyY1NldCB8IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLmdldEltYWdlU3JjU2V0KCk7XG4gICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudC50YWdOYW1lID09PSAnV0lOSy1JTUcnKSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdzcmMtZGVza3RvcCcsIGltYWdlLmRlc2t0b3ApO1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3JjLW1vYmlsZScsIGltYWdlLm1vYmlsZSk7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdzcmMtdGFibGV0JywgaW1hZ2UudGFibGV0KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudC50YWdOYW1lID09PSAnSU1HJykge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgaW1hZ2UuZGVza3RvcCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGltYWdlKCkge1xuICAgIGlmICh0aGlzLmlzVGVsZW5ldCAmJiB0aGlzLnRlbGVuZXRJbWcpIHtcbiAgICAgIHJldHVybiB0aGlzLnRlbGVuZXRJbWc7XG4gICAgfVxuICAgIGlmICghdGhpcy5pc1RlbGVuZXQgJiYgdGhpcy5iYXNlSW1nKSB7XG4gICAgICByZXR1cm4gdGhpcy5iYXNlSW1nO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pbWc7XG4gIH1cblxuICBwcml2YXRlIGdldEltYWdlU3JjU2V0KCk6IEltYWdlU3JjU2V0IHtcbiAgICBpZiAodHlwZW9mIHRoaXMuaW1hZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBpbWFnZSA9IHRoaXMuaW1hZ2U7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkZXNrdG9wOiBpbWFnZSxcbiAgICAgICAgdGFibGV0OiBpbWFnZSxcbiAgICAgICAgbW9iaWxlOiBpbWFnZSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGltYWdlID0gdGhpcy5pbWFnZTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRlc2t0b3A6IGltYWdlLmRlc2t0b3AsXG4gICAgICAgIG1vYmlsZTogaW1hZ2UubW9iaWxlLFxuICAgICAgICB0YWJsZXQ6IGltYWdlLnRhYmxldCxcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG4iXX0=