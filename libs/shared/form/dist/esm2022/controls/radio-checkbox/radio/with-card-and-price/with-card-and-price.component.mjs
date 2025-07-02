import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractRadioComponent } from '../abstract-radio.component';
import { ScreenType } from '../../../../enums';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@telenet/ng-lib-page";
import * as i3 from "../../../../components/install-type-price.component";
import * as i4 from "@ngx-translate/core";
function InputRadioWithCardAndPriceComponent_label_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 2);
    i0.ɵɵlistener("click", function InputRadioWithCardAndPriceComponent_label_2_Template_label_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const option_r1 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.selectOption(option_r1)); });
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelement(2, "img", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 5)(4, "div", 6)(5, "div", 7)(6, "div", 8)(7, "div", 9)(8, "div", 10);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "translate");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelement(11, "div", 11);
    i0.ɵɵpipe(12, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 12);
    i0.ɵɵelement(14, "app-install-type-price", 13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 14);
    i0.ɵɵelement(16, "input", 15);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate2("for", "choice-", i_r2, "-", option_r1.value, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", option_r1.imagePath, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 11, ctx_r0.getOptionLabel(option_r1)));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(12, 13, ctx_r0.getOptionText(option_r1)), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("installTypePrice", option_r1.installTypePrice);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate1("name", "choice-", ctx_r0.key, "");
    i0.ɵɵpropertyInterpolate("value", option_r1.value);
    i0.ɵɵpropertyInterpolate2("id", "choice-", i_r2, "-", option_r1.value, "");
    i0.ɵɵproperty("checked", ctx_r0.selectedOption && option_r1.value === ctx_r0.selectedOption.value);
} }
export class InputRadioWithCardAndPriceComponent extends AbstractRadioComponent {
    optionList = [];
    amountOfColumnsClass;
    screenTypeEnum = ScreenType;
    ngOnInit() {
        super.ngOnInit();
        this.amountOfColumnsClass = this.calculateAmountOfColumnsClass();
    }
    calculateAmountOfColumnsClass() {
        if (this.optionList && this.optionList.length <= 5) {
            const amountOfColumns = this.optionList.length;
            return `grid-template-column--${amountOfColumns}--md`;
        }
        return 'grid-template-column--3--md';
    }
    static ɵfac = /*@__PURE__*/ (() => { let ɵInputRadioWithCardAndPriceComponent_BaseFactory; return function InputRadioWithCardAndPriceComponent_Factory(t) { return (ɵInputRadioWithCardAndPriceComponent_BaseFactory || (ɵInputRadioWithCardAndPriceComponent_BaseFactory = i0.ɵɵgetInheritedFactory(InputRadioWithCardAndPriceComponent)))(t || InputRadioWithCardAndPriceComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputRadioWithCardAndPriceComponent, selectors: [["tg-form-radio-with-card-and-price"]], inputs: { optionList: "optionList" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputRadioWithCardAndPriceComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 4, consts: [[1, "display--flex", "flex-direction--row--md", "flex-direction--column", "position--full-height", "col-12", "gap--s"], ["class", "background-white select-tile display--flex flex-direction--column m--n color-text animation-show-slide-up flex-direction--column p--m px--l--sm", "style", "--animation-delay: 2", 3, "for", "click", 4, "ngFor", "ngForOf"], [1, "background-white", "select-tile", "display--flex", "flex-direction--column", "m--n", "color-text", "animation-show-slide-up", "flex-direction--column", "p--m", "px--l--sm", 2, "--animation-delay", "2", 3, "for", "click"], [1, "select-tile__content--image", "width--full", "pointer-events--none", "display--inline-flex", "justify-content--center", "hide-until-md", "px--l", "pb--l"], ["alt", "telenet", 3, "src"], [1, "select-tile__content", "display--flex", "flex-direction--column--md", "flex-direction--row", "flex-grow", "gap--xxs", "gap--xs--sm", "justify-content--between", "align-items--start", "align-items--center--md"], [1, "display--flex", "height--full", "flex-direction--column", "justify-content--between"], [1, "select-tile__content--inner", "display--flex", "flex-direction--column"], [1, "display--flex", "gap--m", "gap--l--sm"], [1, "select-tile__content_text", "display--flex", "flex-direction--column", "flex-grow", "gap--xxs"], [1, "heading--6", "heading--nomargin"], [1, "font--body-regular", "py--m", 3, "innerHTML"], [1, "mt--auto"], [3, "installTypePrice"], [1, "display--flex", "justify-content--center--md"], ["type", "radio", 1, "select-tile__input", "display--flex", "align-items--center", "justify-content--center", "align-self--center", "font--caption", "align-self--center", "order--last", "cursor--pointer", "border-radius--circle", 3, "name", "value", "id", "checked"]], template: function InputRadioWithCardAndPriceComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div");
            i0.ɵɵtemplate(2, InputRadioWithCardAndPriceComponent_label_2_Template, 17, 15, "label", 1);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("select-tile--group display--grid ", ctx.amountOfColumnsClass, " gap--xm position--full-height--md");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.optionList);
        } }, dependencies: [i1.NgForOf, i2.ImageSrcPathDirective, i3.InstallTypePriceComponent, i4.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputRadioWithCardAndPriceComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-radio-with-card-and-price', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputRadioWithCardAndPriceComponent),
                        multi: true,
                    },
                ], template: "<div class=\"display--flex flex-direction--row--md flex-direction--column position--full-height col-12 gap--s\">\n  <div class=\"select-tile--group display--grid {{ amountOfColumnsClass }} gap--xm position--full-height--md\">\n    <label\n      *ngFor=\"let option of optionList; let i = index\"\n      for=\"choice-{{ i }}-{{ option.value }}\"\n      class=\"background-white select-tile display--flex flex-direction--column m--n color-text animation-show-slide-up flex-direction--column p--m px--l--sm\"\n      style=\"--animation-delay: 2\"\n      (click)=\"selectOption(option)\">\n      <div\n        class=\"select-tile__content--image width--full pointer-events--none display--inline-flex justify-content--center hide-until-md px--l pb--l\">\n        <img alt=\"telenet\" [src]=\"option.imagePath\" />\n      </div>\n      <div\n        class=\"select-tile__content display--flex flex-direction--column--md flex-direction--row flex-grow gap--xxs gap--xs--sm justify-content--between align-items--start align-items--center--md\">\n        <div class=\"display--flex height--full flex-direction--column justify-content--between\">\n          <div class=\"select-tile__content--inner display--flex flex-direction--column\">\n            <div class=\"display--flex gap--m gap--l--sm\">\n              <div class=\"select-tile__content_text display--flex flex-direction--column flex-grow gap--xxs\">\n                <div class=\"heading--6 heading--nomargin\">{{ getOptionLabel(option) | translate }}</div>\n              </div>\n            </div>\n            <div class=\"font--body-regular py--m\" [innerHTML]=\"getOptionText(option) | translate\"></div>\n          </div>\n          <div class=\"mt--auto\">\n            <app-install-type-price [installTypePrice]=\"option.installTypePrice\"></app-install-type-price>\n          </div>\n        </div>\n        <div class=\"display--flex justify-content--center--md\">\n          <input\n            type=\"radio\"\n            name=\"choice-{{ key }}\"\n            value=\"{{ option.value }}\"\n            id=\"choice-{{ i }}-{{ option.value }}\"\n            class=\"select-tile__input display--flex align-items--center justify-content--center align-self--center font--caption align-self--center order--last cursor--pointer border-radius--circle\"\n            [checked]=\"selectedOption && option.value === selectedOption.value\" />\n        </div>\n      </div>\n    </label>\n  </div>\n</div>\n" }]
    }], null, { optionList: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputRadioWithCardAndPriceComponent, { className: "InputRadioWithCardAndPriceComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aC1jYXJkLWFuZC1wcmljZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbHMvcmFkaW8tY2hlY2tib3gvcmFkaW8vd2l0aC1jYXJkLWFuZC1wcmljZS93aXRoLWNhcmQtYW5kLXByaWNlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9yYWRpby1jaGVja2JveC9yYWRpby93aXRoLWNhcmQtYW5kLXByaWNlL3dpdGgtY2FyZC1hbmQtcHJpY2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXJFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7SUNGM0MsZ0NBS2lDO0lBQS9CLDhPQUFTLGVBQUEsOEJBQW9CLENBQUEsSUFBQztJQUM5Qiw4QkFDOEk7SUFDNUkseUJBQThDO0lBQ2hELGlCQUFNO0lBQ04sOEJBQytMLGFBQUEsYUFBQSxhQUFBLGFBQUEsY0FBQTtJQUszSSxZQUF3Qzs7SUFBQSxpQkFBTSxFQUFBLEVBQUE7SUFHNUYsMkJBQTRGOztJQUM5RixpQkFBTTtJQUNOLGdDQUFzQjtJQUNwQiw4Q0FBOEY7SUFDaEcsaUJBQU0sRUFBQTtJQUVSLGdDQUF1RDtJQUNyRCw2QkFNd0U7SUFDMUUsaUJBQU0sRUFBQSxFQUFBOzs7OztJQS9CUiwyRUFBdUM7SUFNbEIsZUFBd0I7SUFBeEIsMkRBQXdCO0lBUU8sZUFBd0M7SUFBeEMsOEVBQXdDO0lBR2hELGVBQStDO0lBQS9DLHNHQUErQztJQUc3RCxlQUE0QztJQUE1Qyw2REFBNEM7SUFNcEUsZUFBdUI7SUFBdkIsNERBQXVCO0lBQ3ZCLGtEQUEwQjtJQUMxQiwwRUFBc0M7SUFFdEMsa0dBQW1FOztBRGpCL0UsTUFBTSxPQUFPLG1DQUFvQyxTQUFRLHNCQUFzQjtJQUNwRSxVQUFVLEdBQTJCLEVBQUUsQ0FBQztJQUNqRCxvQkFBb0IsQ0FBUztJQUN0QixjQUFjLEdBQUcsVUFBVSxDQUFDO0lBRW5DLFFBQVE7UUFDTixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO0lBQ25FLENBQUM7SUFFTyw2QkFBNkI7UUFDbkMsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ25ELE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1lBQy9DLE9BQU8seUJBQXlCLGVBQWUsTUFBTSxDQUFDO1FBQ3hELENBQUM7UUFDRCxPQUFPLDZCQUE2QixDQUFDO0lBQ3ZDLENBQUM7eVNBaEJVLG1DQUFtQyxTQUFuQyxtQ0FBbUM7NkRBQW5DLG1DQUFtQyw2SEFSbkM7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztvQkFDbEUsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtZQ2ZILDhCQUE4RyxVQUFBO1lBRTFHLDBGQW1DUTtZQUNWLGlCQUFNLEVBQUE7O1lBckNELGNBQXFHO1lBQXJHLDhIQUFxRztZQUVuRixjQUFlO1lBQWYsd0NBQWU7OztpRkRjM0IsbUNBQW1DO2NBWC9DLFNBQVM7MkJBQ0UsbUNBQW1DLGFBRWxDO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLG9DQUFvQyxDQUFDO3dCQUNsRSxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjtnQkFHUSxVQUFVO2tCQUFsQixLQUFLOztrRkFESyxtQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWJzdHJhY3RSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4uL2Fic3RyYWN0LXJhZGlvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dE9wdGlvbldpdGhJbWFnZSB9IGZyb20gJy4uLy4uLy4uL3JhZGlvJztcbmltcG9ydCB7IFNjcmVlblR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9lbnVtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RnLWZvcm0tcmFkaW8td2l0aC1jYXJkLWFuZC1wcmljZScsXG4gIHRlbXBsYXRlVXJsOiAnLi93aXRoLWNhcmQtYW5kLXByaWNlLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJbnB1dFJhZGlvV2l0aENhcmRBbmRQcmljZUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dFJhZGlvV2l0aENhcmRBbmRQcmljZUNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0UmFkaW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBvcHRpb25MaXN0OiBJbnB1dE9wdGlvbldpdGhJbWFnZVtdID0gW107XG4gIGFtb3VudE9mQ29sdW1uc0NsYXNzOiBzdHJpbmc7XG4gIHB1YmxpYyBzY3JlZW5UeXBlRW51bSA9IFNjcmVlblR5cGU7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICB0aGlzLmFtb3VudE9mQ29sdW1uc0NsYXNzID0gdGhpcy5jYWxjdWxhdGVBbW91bnRPZkNvbHVtbnNDbGFzcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVBbW91bnRPZkNvbHVtbnNDbGFzcygpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLm9wdGlvbkxpc3QgJiYgdGhpcy5vcHRpb25MaXN0Lmxlbmd0aCA8PSA1KSB7XG4gICAgICBjb25zdCBhbW91bnRPZkNvbHVtbnMgPSB0aGlzLm9wdGlvbkxpc3QubGVuZ3RoO1xuICAgICAgcmV0dXJuIGBncmlkLXRlbXBsYXRlLWNvbHVtbi0tJHthbW91bnRPZkNvbHVtbnN9LS1tZGA7XG4gICAgfVxuICAgIHJldHVybiAnZ3JpZC10ZW1wbGF0ZS1jb2x1bW4tLTMtLW1kJztcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImRpc3BsYXktLWZsZXggZmxleC1kaXJlY3Rpb24tLXJvdy0tbWQgZmxleC1kaXJlY3Rpb24tLWNvbHVtbiBwb3NpdGlvbi0tZnVsbC1oZWlnaHQgY29sLTEyIGdhcC0tc1wiPlxuICA8ZGl2IGNsYXNzPVwic2VsZWN0LXRpbGUtLWdyb3VwIGRpc3BsYXktLWdyaWQge3sgYW1vdW50T2ZDb2x1bW5zQ2xhc3MgfX0gZ2FwLS14bSBwb3NpdGlvbi0tZnVsbC1oZWlnaHQtLW1kXCI+XG4gICAgPGxhYmVsXG4gICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbkxpc3Q7IGxldCBpID0gaW5kZXhcIlxuICAgICAgZm9yPVwiY2hvaWNlLXt7IGkgfX0te3sgb3B0aW9uLnZhbHVlIH19XCJcbiAgICAgIGNsYXNzPVwiYmFja2dyb3VuZC13aGl0ZSBzZWxlY3QtdGlsZSBkaXNwbGF5LS1mbGV4IGZsZXgtZGlyZWN0aW9uLS1jb2x1bW4gbS0tbiBjb2xvci10ZXh0IGFuaW1hdGlvbi1zaG93LXNsaWRlLXVwIGZsZXgtZGlyZWN0aW9uLS1jb2x1bW4gcC0tbSBweC0tbC0tc21cIlxuICAgICAgc3R5bGU9XCItLWFuaW1hdGlvbi1kZWxheTogMlwiXG4gICAgICAoY2xpY2spPVwic2VsZWN0T3B0aW9uKG9wdGlvbilcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJzZWxlY3QtdGlsZV9fY29udGVudC0taW1hZ2Ugd2lkdGgtLWZ1bGwgcG9pbnRlci1ldmVudHMtLW5vbmUgZGlzcGxheS0taW5saW5lLWZsZXgganVzdGlmeS1jb250ZW50LS1jZW50ZXIgaGlkZS11bnRpbC1tZCBweC0tbCBwYi0tbFwiPlxuICAgICAgICA8aW1nIGFsdD1cInRlbGVuZXRcIiBbc3JjXT1cIm9wdGlvbi5pbWFnZVBhdGhcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwic2VsZWN0LXRpbGVfX2NvbnRlbnQgZGlzcGxheS0tZmxleCBmbGV4LWRpcmVjdGlvbi0tY29sdW1uLS1tZCBmbGV4LWRpcmVjdGlvbi0tcm93IGZsZXgtZ3JvdyBnYXAtLXh4cyBnYXAtLXhzLS1zbSBqdXN0aWZ5LWNvbnRlbnQtLWJldHdlZW4gYWxpZ24taXRlbXMtLXN0YXJ0IGFsaWduLWl0ZW1zLS1jZW50ZXItLW1kXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkaXNwbGF5LS1mbGV4IGhlaWdodC0tZnVsbCBmbGV4LWRpcmVjdGlvbi0tY29sdW1uIGp1c3RpZnktY29udGVudC0tYmV0d2VlblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QtdGlsZV9fY29udGVudC0taW5uZXIgZGlzcGxheS0tZmxleCBmbGV4LWRpcmVjdGlvbi0tY29sdW1uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzcGxheS0tZmxleCBnYXAtLW0gZ2FwLS1sLS1zbVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0LXRpbGVfX2NvbnRlbnRfdGV4dCBkaXNwbGF5LS1mbGV4IGZsZXgtZGlyZWN0aW9uLS1jb2x1bW4gZmxleC1ncm93IGdhcC0teHhzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRpbmctLTYgaGVhZGluZy0tbm9tYXJnaW5cIj57eyBnZXRPcHRpb25MYWJlbChvcHRpb24pIHwgdHJhbnNsYXRlIH19PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udC0tYm9keS1yZWd1bGFyIHB5LS1tXCIgW2lubmVySFRNTF09XCJnZXRPcHRpb25UZXh0KG9wdGlvbikgfCB0cmFuc2xhdGVcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtLWF1dG9cIj5cbiAgICAgICAgICAgIDxhcHAtaW5zdGFsbC10eXBlLXByaWNlIFtpbnN0YWxsVHlwZVByaWNlXT1cIm9wdGlvbi5pbnN0YWxsVHlwZVByaWNlXCI+PC9hcHAtaW5zdGFsbC10eXBlLXByaWNlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRpc3BsYXktLWZsZXgganVzdGlmeS1jb250ZW50LS1jZW50ZXItLW1kXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgbmFtZT1cImNob2ljZS17eyBrZXkgfX1cIlxuICAgICAgICAgICAgdmFsdWU9XCJ7eyBvcHRpb24udmFsdWUgfX1cIlxuICAgICAgICAgICAgaWQ9XCJjaG9pY2Ute3sgaSB9fS17eyBvcHRpb24udmFsdWUgfX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJzZWxlY3QtdGlsZV9faW5wdXQgZGlzcGxheS0tZmxleCBhbGlnbi1pdGVtcy0tY2VudGVyIGp1c3RpZnktY29udGVudC0tY2VudGVyIGFsaWduLXNlbGYtLWNlbnRlciBmb250LS1jYXB0aW9uIGFsaWduLXNlbGYtLWNlbnRlciBvcmRlci0tbGFzdCBjdXJzb3ItLXBvaW50ZXIgYm9yZGVyLXJhZGl1cy0tY2lyY2xlXCJcbiAgICAgICAgICAgIFtjaGVja2VkXT1cInNlbGVjdGVkT3B0aW9uICYmIG9wdGlvbi52YWx1ZSA9PT0gc2VsZWN0ZWRPcHRpb24udmFsdWVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGFiZWw+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=