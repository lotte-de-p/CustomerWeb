import { Directive, Inject, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ImageSrcPathDirective {
    el;
    imageBasePath;
    override = false;
    src = '';
    constructor(el, imageBasePath) {
        this.el = el;
        this.imageBasePath = imageBasePath;
    }
    ngOnChanges(changes) {
        if (changes['src']?.isFirstChange()) {
            const imagePath = changes['src'].currentValue;
            if (this.el.nativeElement.tagName !== 'IMG' || this.override) {
                this.el.nativeElement.src = imagePath;
                return;
            }
            const imageBasePathWithoutSlash = this.imageBasePath.endsWith('/')
                ? this.imageBasePath.slice(0, -1)
                : this.imageBasePath;
            const imagePathWithoutLeadingSlash = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
            this.el.nativeElement.src = `${imageBasePathWithoutSlash}/${imagePathWithoutLeadingSlash}`;
        }
    }
    static ɵfac = function ImageSrcPathDirective_Factory(t) { return new (t || ImageSrcPathDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject('IMAGE_BASE_PATH')); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ImageSrcPathDirective, selectors: [["", "src", ""]], inputs: { override: "override", src: "src" }, features: [i0.ɵɵNgOnChangesFeature] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImageSrcPathDirective, [{
        type: Directive,
        args: [{
                selector: '[src]',
            }]
    }], () => [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                type: Inject,
                args: ['IMAGE_BASE_PATH']
            }] }], { override: [{
            type: Input
        }], src: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utc3JjLXBhdGguZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9wYWdlL2Fzc2V0L2RpcmVjdGl2ZXMvaW1hZ2Utc3JjLXBhdGgvaW1hZ2Utc3JjLXBhdGguZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsTUFBTSxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7O0FBSy9GLE1BQU0sT0FBTyxxQkFBcUI7SUFNYjtJQUMyQjtJQU5yQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBRWpCLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFFbEIsWUFDbUIsRUFBYyxFQUNhLGFBQXFCO1FBRGhELE9BQUUsR0FBRixFQUFFLENBQVk7UUFDYSxrQkFBYSxHQUFiLGFBQWEsQ0FBUTtJQUNoRSxDQUFDO0lBRUosV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUM7WUFDcEMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQztZQUU5QyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLE9BQU8sS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUM3RCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO2dCQUN0QyxPQUFPO1lBQ1QsQ0FBQztZQUVELE1BQU0seUJBQXlCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO2dCQUNoRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUN2QixNQUFNLDRCQUE0QixHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNoRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsR0FBRyx5QkFBeUIsSUFBSSw0QkFBNEIsRUFBRSxDQUFDO1FBQzdGLENBQUM7SUFDSCxDQUFDOytFQXpCVSxxQkFBcUIsNERBT3RCLGlCQUFpQjs2REFQaEIscUJBQXFCOztpRkFBckIscUJBQXFCO2NBSGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsT0FBTzthQUNsQjs7c0JBUUksTUFBTTt1QkFBQyxpQkFBaUI7cUJBTmxCLFFBQVE7a0JBQWhCLEtBQUs7WUFFRyxHQUFHO2tCQUFYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc3JjXScsXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlU3JjUGF0aERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG92ZXJyaWRlID0gZmFsc2U7XG5cbiAgQElucHV0KCkgc3JjID0gJyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBlbDogRWxlbWVudFJlZixcbiAgICBASW5qZWN0KCdJTUFHRV9CQVNFX1BBVEgnKSBwcml2YXRlIHJlYWRvbmx5IGltYWdlQmFzZVBhdGg6IHN0cmluZ1xuICApIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzWydzcmMnXT8uaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICBjb25zdCBpbWFnZVBhdGggPSBjaGFuZ2VzWydzcmMnXS5jdXJyZW50VmFsdWU7XG5cbiAgICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudGFnTmFtZSAhPT0gJ0lNRycgfHwgdGhpcy5vdmVycmlkZSkge1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3JjID0gaW1hZ2VQYXRoO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGltYWdlQmFzZVBhdGhXaXRob3V0U2xhc2ggPSB0aGlzLmltYWdlQmFzZVBhdGguZW5kc1dpdGgoJy8nKVxuICAgICAgICA/IHRoaXMuaW1hZ2VCYXNlUGF0aC5zbGljZSgwLCAtMSlcbiAgICAgICAgOiB0aGlzLmltYWdlQmFzZVBhdGg7XG4gICAgICBjb25zdCBpbWFnZVBhdGhXaXRob3V0TGVhZGluZ1NsYXNoID0gaW1hZ2VQYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IGltYWdlUGF0aC5zbGljZSgxKSA6IGltYWdlUGF0aDtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zcmMgPSBgJHtpbWFnZUJhc2VQYXRoV2l0aG91dFNsYXNofS8ke2ltYWdlUGF0aFdpdGhvdXRMZWFkaW5nU2xhc2h9YDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==