import { Component, Input, Optional } from '@angular/core';
import { DatalayerEventNames } from '@telenet/ng-lib-datalayer';
import { InputAbstractComponent } from '../input-abstract.component';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
import * as i2 from "../../errors";
export class AbstractDropdownComponent extends InputAbstractComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    showPlaceHolder = true;
    optionList = [];
    customLabel = false;
    labelStyle = 'label-input-flow';
    value = '';
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    onChange = (_) => {
        // This is intentional
    };
    onTouched = (_) => {
        // This is intentional
    };
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(_isDisabled) {
        // This is intentional
    }
    writeValue(value) {
        if (value) {
            this.value = value;
        }
    }
    updateValue(value) {
        this.trackingEvent.emit({
            label: this.getLabel(),
            value: value?.toString() || '',
            type: DatalayerEventNames.OPTION_SELECTED,
        });
        this.onTouched(true);
        this.onChange(value);
    }
    static ɵfac = function AbstractDropdownComponent_Factory(t) { return new (t || AbstractDropdownComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i2.FormErrorService), i0.ɵɵdirectiveInject(i2.MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AbstractDropdownComponent, selectors: [["abstract-dropdown-component"]], inputs: { showPlaceHolder: "showPlaceHolder", optionList: "optionList", customLabel: "customLabel", labelStyle: "labelStyle" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, template: function AbstractDropdownComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtext(0, "Do not use the abstract component!\n");
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbstractDropdownComponent, [{
        type: Component,
        args: [{ selector: 'abstract-dropdown-component', template: "Do not use the abstract component!\n" }]
    }], () => [{ type: i1.LanguageService }, { type: i2.FormErrorService }, { type: i2.MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { showPlaceHolder: [{
            type: Input
        }], optionList: [{
            type: Input
        }], customLabel: [{
            type: Input
        }], labelStyle: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AbstractDropdownComponent, { className: "AbstractDropdownComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xzL2Ryb3Bkb3duL2Fic3RyYWN0LWRyb3Bkb3duLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9kcm9wZG93bi9hYnN0cmFjdC1kcm9wZG93bi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFZLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7QUFRckUsTUFBTSxPQUFPLHlCQUEwQixTQUFRLHNCQUFzQjtJQVFqRDtJQUNBO0lBQ1k7SUFDWjtJQVZULGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDdkIsVUFBVSxHQUFrQixFQUFFLENBQUM7SUFDL0IsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUNwQixVQUFVLEdBQUcsa0JBQWtCLENBQUM7SUFDekMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUVYLFlBQ2tCLGVBQWdDLEVBQ2hDLFdBQTZCLEVBQ2pCLHFCQUE0QyxFQUN4RCxRQUFrQjtRQUVsQyxLQUFLLENBQUMsZUFBZSxFQUFFLFdBQVcsRUFBRSxxQkFBcUIsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUxyRCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQ2pCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDeEQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUdwQyxDQUFDO0lBRUQsUUFBUSxHQUFHLENBQUMsQ0FBVSxFQUFFLEVBQUU7UUFDeEIsc0JBQXNCO0lBQ3hCLENBQUMsQ0FBQztJQUNGLFNBQVMsR0FBRyxDQUFDLENBQVUsRUFBRSxFQUFFO1FBQ3pCLHNCQUFzQjtJQUN4QixDQUFDLENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxFQUFnQjtRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRVEsaUJBQWlCLENBQUMsRUFBZ0I7UUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVRLGdCQUFnQixDQUFDLFdBQW9CO1FBQzVDLHNCQUFzQjtJQUN4QixDQUFDO0lBRVEsVUFBVSxDQUFDLEtBQWE7UUFDL0IsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLENBQUM7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDdEIsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDdEIsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO1lBQzlCLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxlQUFlO1NBQzFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDO21GQWpEVSx5QkFBeUI7NkRBQXpCLHlCQUF5QjtZQ1h0QyxvREFDQTs7O2lGRFVhLHlCQUF5QjtjQUpyQyxTQUFTOzJCQUNFLDZCQUE2Qjs7c0JBYXBDLFFBQVE7NENBVEYsZUFBZTtrQkFBdkIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSzs7a0ZBSksseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgSW5wdXQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItcGFnZSc7XG5pbXBvcnQgeyBEYXRhbGF5ZXJFdmVudE5hbWVzIH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLWRhdGFsYXllcic7XG5pbXBvcnQgeyBJbnB1dEFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vaW5wdXQtYWJzdHJhY3QuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0T3B0aW9uIH0gZnJvbSAnLi4vcmFkaW8nO1xuaW1wb3J0IHsgRm9ybUVycm9yU2VydmljZSwgTWVzc2FnZUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZXJyb3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWJzdHJhY3QtZHJvcGRvd24tY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fic3RyYWN0LWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQWJzdHJhY3REcm9wZG93bkNvbXBvbmVudCBleHRlbmRzIElucHV0QWJzdHJhY3RDb21wb25lbnQge1xuICBASW5wdXQoKSBzaG93UGxhY2VIb2xkZXIgPSB0cnVlO1xuICBASW5wdXQoKSBvcHRpb25MaXN0OiBJbnB1dE9wdGlvbltdID0gW107XG4gIEBJbnB1dCgpIGN1c3RvbUxhYmVsID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxhYmVsU3R5bGUgPSAnbGFiZWwtaW5wdXQtZmxvdyc7XG4gIHZhbHVlID0gJyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG92ZXJyaWRlIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHB1YmxpYyBvdmVycmlkZSBmb3JtU2VydmljZTogRm9ybUVycm9yU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgb3ZlcnJpZGUgbWVzc2FnZUdyb3VwRGlyZWN0aXZlOiBNZXNzYWdlR3JvdXBEaXJlY3RpdmUsXG4gICAgcHVibGljIG92ZXJyaWRlIGluamVjdG9yOiBJbmplY3RvclxuICApIHtcbiAgICBzdXBlcihsYW5ndWFnZVNlcnZpY2UsIGZvcm1TZXJ2aWNlLCBtZXNzYWdlR3JvdXBEaXJlY3RpdmUsIGluamVjdG9yKTtcbiAgfVxuXG4gIG9uQ2hhbmdlID0gKF86IHVua25vd24pID0+IHtcbiAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsXG4gIH07XG4gIG9uVG91Y2hlZCA9IChfOiB1bmtub3duKSA9PiB7XG4gICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbFxuICB9O1xuXG4gIG92ZXJyaWRlIHJlZ2lzdGVyT25DaGFuZ2UoZm46IFZvaWRGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIG92ZXJyaWRlIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBWb2lkRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgb3ZlcnJpZGUgc2V0RGlzYWJsZWRTdGF0ZShfaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxcbiAgfVxuXG4gIG92ZXJyaWRlIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKHZhbHVlOiB1bmtub3duKTogdm9pZCB7XG4gICAgdGhpcy50cmFja2luZ0V2ZW50LmVtaXQoe1xuICAgICAgbGFiZWw6IHRoaXMuZ2V0TGFiZWwoKSxcbiAgICAgIHZhbHVlOiB2YWx1ZT8udG9TdHJpbmcoKSB8fCAnJyxcbiAgICAgIHR5cGU6IERhdGFsYXllckV2ZW50TmFtZXMuT1BUSU9OX1NFTEVDVEVELFxuICAgIH0pO1xuICAgIHRoaXMub25Ub3VjaGVkKHRydWUpO1xuICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICB9XG59XG4iLCJEbyBub3QgdXNlIHRoZSBhYnN0cmFjdCBjb21wb25lbnQhXG4iXX0=