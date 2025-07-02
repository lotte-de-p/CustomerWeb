import { Component, Input, Optional } from '@angular/core';
import { DatalayerEventNames } from '@telenet/ng-lib-datalayer';
import { AbstractRadioCheckboxComponent } from '../abstract-radio-checkbox.component';
import { InputOptionWithSubscript } from '../../radio';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
import * as i2 from "../../../errors";
export class AbstractCheckboxComponent extends AbstractRadioCheckboxComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    selectedOptions = [];
    maxOptions;
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    getLabel() {
        if (this.customLabel) {
            return super.getLabel();
        }
        return 'controls.input-radio-image.choose';
    }
    writeValue(optionValues) {
        if (optionValues) {
            this.optionList.forEach((option) => {
                if (optionValues.includes(option.value)) {
                    this.selectedOptions.push(option);
                }
            });
            this.handleMaxOptions();
        }
        else {
            this.selectedOptions = [];
        }
    }
    selectOption(option) {
        if (this.selectedOptions.includes(option)) {
            this.selectedOptions = this.selectedOptions.filter((selectedOption) => selectedOption !== option);
        }
        else {
            this.handleToggle();
            this.selectedOptions.push(option);
            this.trackingEvent.emit({
                label: option.label,
                value: option.value,
                type: DatalayerEventNames.OPTION_SELECTED,
            });
        }
        this.onTouch(true);
        this.onChange(this.selectedOptions.map((selectedOption) => selectedOption.value));
        this.handleMaxOptions();
        this.selectEvent.emit();
    }
    hasSubscript(option) {
        return option instanceof InputOptionWithSubscript;
    }
    handleMaxOptions() {
        if (!this.maxOptions || this.maxOptions === 1) {
            return;
        }
        if (this.selectedOptions.length >= this.maxOptions) {
            this.optionList.forEach((option) => {
                if (!this.selectedOptions.includes(option)) {
                    option.disabled = true;
                }
            });
        }
        else {
            this.optionList.forEach((option) => {
                option.disabled = false;
            });
        }
    }
    handleToggle() {
        if (this.maxOptions === 1) {
            this.selectedOptions = [];
        }
    }
    static ɵfac = function AbstractCheckboxComponent_Factory(t) { return new (t || AbstractCheckboxComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i2.FormErrorService), i0.ɵɵdirectiveInject(i2.MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AbstractCheckboxComponent, selectors: [["tg-form-abstract-checkbox"]], inputs: { maxOptions: "maxOptions" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, template: function AbstractCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtext(0, "Do not use the abstract component!\n");
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbstractCheckboxComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-abstract-checkbox', template: "Do not use the abstract component!\n" }]
    }], () => [{ type: i1.LanguageService }, { type: i2.FormErrorService }, { type: i2.MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { maxOptions: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AbstractCheckboxComponent, { className: "AbstractCheckboxComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xzL3JhZGlvLWNoZWNrYm94L2NoZWNrYm94L2Fic3RyYWN0LWNoZWNrYm94LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9yYWRpby1jaGVja2JveC9jaGVja2JveC9hYnN0cmFjdC1jaGVja2JveC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFZLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEYsT0FBTyxFQUFlLHdCQUF3QixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBT3BFLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSw4QkFBOEI7SUFLekQ7SUFDQTtJQUNZO0lBQ1o7SUFQbEIsZUFBZSxHQUFrQixFQUFFLENBQUM7SUFDM0IsVUFBVSxDQUFTO0lBRTVCLFlBQ2tCLGVBQWdDLEVBQ2hDLFdBQTZCLEVBQ2pCLHFCQUE0QyxFQUN4RCxRQUFrQjtRQUVsQyxLQUFLLENBQUMsZUFBZSxFQUFFLFdBQVcsRUFBRSxxQkFBcUIsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUxyRCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQ2pCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDeEQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUdwQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JCLE9BQU8sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFC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eUI7WUNYdEMsb0RBQ0E7OztpRkRVYSx5QkFBeUI7Y0FKckMsU0FBUzsyQkFDRSwyQkFBMkI7O3NCQVVsQyxRQUFROzRDQUxGLFVBQVU7a0JBQWxCLEtBQUs7O2tGQUZLLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IsIElucHV0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLXBhZ2UnO1xuaW1wb3J0IHsgRGF0YWxheWVyRXZlbnROYW1lcyB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1kYXRhbGF5ZXInO1xuaW1wb3J0IHsgQWJzdHJhY3RSYWRpb0NoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi4vYWJzdHJhY3QtcmFkaW8tY2hlY2tib3guY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0T3B0aW9uLCBJbnB1dE9wdGlvbldpdGhTdWJzY3JpcHQgfSBmcm9tICcuLi8uLi9yYWRpbyc7XG5pbXBvcnQgeyBGb3JtRXJyb3JTZXJ2aWNlLCBNZXNzYWdlR3JvdXBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi8uLi9lcnJvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0Zy1mb3JtLWFic3RyYWN0LWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fic3RyYWN0LWNoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RDaGVja2JveENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0UmFkaW9DaGVja2JveENvbXBvbmVudCB7XG4gIHNlbGVjdGVkT3B0aW9uczogSW5wdXRPcHRpb25bXSA9IFtdO1xuICBASW5wdXQoKSBtYXhPcHRpb25zOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG92ZXJyaWRlIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHB1YmxpYyBvdmVycmlkZSBmb3JtU2VydmljZTogRm9ybUVycm9yU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgb3ZlcnJpZGUgbWVzc2FnZUdyb3VwRGlyZWN0aXZlOiBNZXNzYWdlR3JvdXBEaXJlY3RpdmUsXG4gICAgcHVibGljIG92ZXJyaWRlIGluamVjdG9yOiBJbmplY3RvclxuICApIHtcbiAgICBzdXBlcihsYW5ndWFnZVNlcnZpY2UsIGZvcm1TZXJ2aWNlLCBtZXNzYWdlR3JvdXBEaXJlY3RpdmUsIGluamVjdG9yKTtcbiAgfVxuXG4gIGdldExhYmVsKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuY3VzdG9tTGFiZWwpIHtcbiAgICAgIHJldHVybiBzdXBlci5nZXRMYWJlbCgpO1xuICAgIH1cbiAgICByZXR1cm4gJ2NvbnRyb2xzLmlucHV0LXJhZGlvLWltYWdlLmNob29zZSc7XG4gIH1cblxuICB3cml0ZVZhbHVlKG9wdGlvblZhbHVlczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICBpZiAob3B0aW9uVmFsdWVzKSB7XG4gICAgICB0aGlzLm9wdGlvbkxpc3QuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25WYWx1ZXMuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zLnB1c2gob3B0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmhhbmRsZU1heE9wdGlvbnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RPcHRpb24ob3B0aW9uOiBJbnB1dE9wdGlvbik6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9ucy5pbmNsdWRlcyhvcHRpb24pKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuc2VsZWN0ZWRPcHRpb25zLmZpbHRlcigoc2VsZWN0ZWRPcHRpb24pID0+IHNlbGVjdGVkT3B0aW9uICE9PSBvcHRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhbmRsZVRvZ2dsZSgpO1xuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMucHVzaChvcHRpb24pO1xuICAgICAgdGhpcy50cmFja2luZ0V2ZW50LmVtaXQoe1xuICAgICAgICBsYWJlbDogb3B0aW9uLmxhYmVsLFxuICAgICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxuICAgICAgICB0eXBlOiBEYXRhbGF5ZXJFdmVudE5hbWVzLk9QVElPTl9TRUxFQ1RFRCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLm9uVG91Y2godHJ1ZSk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnNlbGVjdGVkT3B0aW9ucy5tYXAoKHNlbGVjdGVkT3B0aW9uKSA9PiBzZWxlY3RlZE9wdGlvbi52YWx1ZSkpO1xuICAgIHRoaXMuaGFuZGxlTWF4T3B0aW9ucygpO1xuICAgIHRoaXMuc2VsZWN0RXZlbnQuZW1pdCgpO1xuICB9XG5cbiAgaGFzU3Vic2NyaXB0KG9wdGlvbjogSW5wdXRPcHRpb24pOiBib29sZWFuIHtcbiAgICByZXR1cm4gb3B0aW9uIGluc3RhbmNlb2YgSW5wdXRPcHRpb25XaXRoU3Vic2NyaXB0O1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVNYXhPcHRpb25zKCkge1xuICAgIGlmICghdGhpcy5tYXhPcHRpb25zIHx8IHRoaXMubWF4T3B0aW9ucyA9PT0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoID49IHRoaXMubWF4T3B0aW9ucykge1xuICAgICAgdGhpcy5vcHRpb25MaXN0LmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRPcHRpb25zLmluY2x1ZGVzKG9wdGlvbikpIHtcbiAgICAgICAgICBvcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcHRpb25MaXN0LmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICBvcHRpb24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlVG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLm1heE9wdGlvbnMgPT09IDEpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW107XG4gICAgfVxuICB9XG59XG4iLCJEbyBub3QgdXNlIHRoZSBhYnN0cmFjdCBjb21wb25lbnQhXG4iXX0=