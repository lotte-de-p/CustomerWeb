import { Component, Input, Optional } from '@angular/core';
import { DatalayerEventNames } from '@telenet/ng-lib-datalayer';
import { AbstractRadioCheckboxComponent } from '../abstract-radio-checkbox.component';
import { InputOptionWithSubscript } from '../../radio';
import { LabelUtil } from '../../../utils';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
import * as i2 from "../../../errors";
export class AbstractRadioComponent extends AbstractRadioCheckboxComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    customOptionExplanationText = false;
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    getOptionText(option) {
        return LabelUtil.getLabelKeyWithTypeText(super.getKey(option.label));
    }
    getLabel() {
        if (this.customLabel) {
            return super.getLabel();
        }
        return 'controls.input-radio-image.choose';
    }
    writeValue(optionValue = '') {
        if (optionValue) {
            this.selectedOption = this.optionList.find((optionOfList) => {
                return optionOfList.value === optionValue;
            });
        }
        else {
            this.selectedOption = undefined;
        }
    }
    selectOption(option) {
        this.selectedOption = option;
        this.onTouch(option.value);
        this.onChange(option.value);
        this.selectEvent.emit(option.value);
        this.trackingEvent.emit({
            label: this.getLabel(),
            value: option.value,
            type: DatalayerEventNames.OPTION_SELECTED,
        });
    }
    hasSubscript(option) {
        return option instanceof InputOptionWithSubscript;
    }
    getSubscript(option) {
        return option.subScript || '';
    }
    static ɵfac = function AbstractRadioComponent_Factory(t) { return new (t || AbstractRadioComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i2.FormErrorService), i0.ɵɵdirectiveInject(i2.MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AbstractRadioComponent, selectors: [["tg-form-abstract-radio"]], inputs: { customOptionExplanationText: "customOptionExplanationText" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 0, template: function AbstractRadioComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtext(1, "Do not use the abstract component");
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbstractRadioComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-abstract-radio', template: "<div>Do not use the abstract component</div>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: i2.FormErrorService }, { type: i2.MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { customOptionExplanationText: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AbstractRadioComponent, { className: "AbstractRadioComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xzL3JhZGlvLWNoZWNrYm94L3JhZGlvL2Fic3RyYWN0LXJhZGlvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9yYWRpby1jaGVja2JveC9yYWRpby9hYnN0cmFjdC1yYWRpby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFZLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFdEYsT0FBTyxFQUFlLHdCQUF3QixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQU0zQyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsOEJBQThCO0lBSS9EO0lBQ0E7SUFDWTtJQUNaO0lBTkEsMkJBQTJCLEdBQUcsS0FBSyxDQUFDO0lBRTdDLFlBQ1MsZUFBZ0MsRUFDaEMsV0FBNkIsRUFDakIscUJBQTRDLEVBQ3hELFFBQWtCO1FBRXpCLEtBQUssQ0FBQyxlQUFlLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBTDlELG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDakIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUN4RCxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBRzNCLENBQUM7SUFFRCxhQUFhLENBQUMsTUFBbUI7UUFDL0IsT0FBTyxTQUFTLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JCLE9BQU8sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFCLENBQUM7UUFDRCxPQUFPLG1DQUFtQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxVQUFVLENBQUMsY0FBc0IsRUFBRTtRQUNqQyxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRTtnQkFDMUQsT0FBTyxZQUFZLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7UUFDbEMsQ0FBQztJQUNILENBQUM7SUFFRCxZQUFZLENBQUMsTUFBbUI7UUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3RCLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3RCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixJQUFJLEVBQUUsbUJBQW1CLENBQUMsZUFBZTtTQUMxQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBWSxDQUFDLE1BQW1CO1FBQzlCLE9BQU8sTUFBTSxZQUFZLHdCQUF3QixDQUFDO0lBQ3BELENBQUM7SUFFRCxZQUFZLENBQUMsTUFBbUI7UUFDOUIsT0FBUSxNQUFtQyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7SUFDOUQsQ0FBQztnRkFuRFUsc0JBQXNCOzZEQUF0QixzQkFBc0I7WUNabkMsMkJBQUs7WUFBQSxpREFBaUM7WUFBQSxpQkFBTTs7O2lGRFkvQixzQkFBc0I7Y0FKbEMsU0FBUzsyQkFDRSx3QkFBd0I7O3NCQVMvQixRQUFROzRDQUxGLDJCQUEyQjtrQkFBbkMsS0FBSzs7a0ZBREssc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgSW5wdXQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItcGFnZSc7XG5pbXBvcnQgeyBEYXRhbGF5ZXJFdmVudE5hbWVzIH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLWRhdGFsYXllcic7XG5pbXBvcnQgeyBBYnN0cmFjdFJhZGlvQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuLi9hYnN0cmFjdC1yYWRpby1jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybUVycm9yU2VydmljZSwgTWVzc2FnZUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vZXJyb3JzJztcbmltcG9ydCB7IElucHV0T3B0aW9uLCBJbnB1dE9wdGlvbldpdGhTdWJzY3JpcHQgfSBmcm9tICcuLi8uLi9yYWRpbyc7XG5pbXBvcnQgeyBMYWJlbFV0aWwgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RnLWZvcm0tYWJzdHJhY3QtcmFkaW8nLFxuICB0ZW1wbGF0ZVVybDogJy4vYWJzdHJhY3QtcmFkaW8uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBYnN0cmFjdFJhZGlvQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RSYWRpb0NoZWNrYm94Q29tcG9uZW50IHtcbiAgQElucHV0KCkgY3VzdG9tT3B0aW9uRXhwbGFuYXRpb25UZXh0ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHB1YmxpYyBmb3JtU2VydmljZTogRm9ybUVycm9yU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgbWVzc2FnZUdyb3VwRGlyZWN0aXZlOiBNZXNzYWdlR3JvdXBEaXJlY3RpdmUsXG4gICAgcHVibGljIGluamVjdG9yOiBJbmplY3RvclxuICApIHtcbiAgICBzdXBlcihsYW5ndWFnZVNlcnZpY2UsIGZvcm1TZXJ2aWNlLCBtZXNzYWdlR3JvdXBEaXJlY3RpdmUsIGluamVjdG9yKTtcbiAgfVxuXG4gIGdldE9wdGlvblRleHQob3B0aW9uOiBJbnB1dE9wdGlvbik6IHN0cmluZyB7XG4gICAgcmV0dXJuIExhYmVsVXRpbC5nZXRMYWJlbEtleVdpdGhUeXBlVGV4dChzdXBlci5nZXRLZXkob3B0aW9uLmxhYmVsKSk7XG4gIH1cblxuICBnZXRMYWJlbCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmN1c3RvbUxhYmVsKSB7XG4gICAgICByZXR1cm4gc3VwZXIuZ2V0TGFiZWwoKTtcbiAgICB9XG4gICAgcmV0dXJuICdjb250cm9scy5pbnB1dC1yYWRpby1pbWFnZS5jaG9vc2UnO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShvcHRpb25WYWx1ZTogc3RyaW5nID0gJycpOiB2b2lkIHtcbiAgICBpZiAob3B0aW9uVmFsdWUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSB0aGlzLm9wdGlvbkxpc3QuZmluZCgob3B0aW9uT2ZMaXN0KSA9PiB7XG4gICAgICAgIHJldHVybiBvcHRpb25PZkxpc3QudmFsdWUgPT09IG9wdGlvblZhbHVlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0T3B0aW9uKG9wdGlvbjogSW5wdXRPcHRpb24pOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gb3B0aW9uO1xuICAgIHRoaXMub25Ub3VjaChvcHRpb24udmFsdWUpO1xuICAgIHRoaXMub25DaGFuZ2Uob3B0aW9uLnZhbHVlKTtcbiAgICB0aGlzLnNlbGVjdEV2ZW50LmVtaXQob3B0aW9uLnZhbHVlKTtcbiAgICB0aGlzLnRyYWNraW5nRXZlbnQuZW1pdCh7XG4gICAgICBsYWJlbDogdGhpcy5nZXRMYWJlbCgpLFxuICAgICAgdmFsdWU6IG9wdGlvbi52YWx1ZSxcbiAgICAgIHR5cGU6IERhdGFsYXllckV2ZW50TmFtZXMuT1BUSU9OX1NFTEVDVEVELFxuICAgIH0pO1xuICB9XG5cbiAgaGFzU3Vic2NyaXB0KG9wdGlvbjogSW5wdXRPcHRpb24pOiBib29sZWFuIHtcbiAgICByZXR1cm4gb3B0aW9uIGluc3RhbmNlb2YgSW5wdXRPcHRpb25XaXRoU3Vic2NyaXB0O1xuICB9XG5cbiAgZ2V0U3Vic2NyaXB0KG9wdGlvbjogSW5wdXRPcHRpb24pOiBzdHJpbmcge1xuICAgIHJldHVybiAob3B0aW9uIGFzIElucHV0T3B0aW9uV2l0aFN1YnNjcmlwdCkuc3ViU2NyaXB0IHx8ICcnO1xuICB9XG59XG4iLCI8ZGl2PkRvIG5vdCB1c2UgdGhlIGFic3RyYWN0IGNvbXBvbmVudDwvZGl2PlxuIl19