import { Component, Input } from '@angular/core';
import { AbstractRadioComponent } from '../abstract-radio.component';
import * as i0 from "@angular/core";
const EMPTY_INPUT_VALUE = 'EMPTY_INPUT';
export class AbstractInputRadioWithInputComponent extends AbstractRadioComponent {
    optionList = [];
    fieldLabel;
    inputPlaceholder;
    inputRadioSelected = false;
    inputValue;
    writeValue(optionValue) {
        if (optionValue) {
            this.selectedOption = this.optionList.find((optionOfList) => {
                return optionOfList.value === optionValue;
            });
            if (!this.selectedOption) {
                this.inputValue = optionValue === EMPTY_INPUT_VALUE ? '' : optionValue;
                this.selectInput();
            }
        }
        else {
            this.selectedOption = undefined;
        }
    }
    selectOption(option) {
        this.inputRadioSelected = false;
        this.selectedOption = option;
        this.inputValue = '';
        this.onTouch(option.value);
        this.onChange(option.value);
        this.selectEvent.emit();
        this.trackingEvent.emit({ label: this.getOptionLabel(option), value: option.value });
    }
    selectInput() {
        this.selectedOption = undefined;
        this.inputRadioSelected = true;
        let value = this.inputValue;
        if (!value) {
            value = EMPTY_INPUT_VALUE;
        }
        this.onTouch(value);
        this.onChange(value);
        this.selectEvent.emit();
    }
    focusOtherSelected() {
        this.selectInput();
        this.trackingEvent.emit({ label: this.getOptionLabel(this.optionList[0]), value: 'other' });
    }
    static ɵfac = /*@__PURE__*/ (() => { let ɵAbstractInputRadioWithInputComponent_BaseFactory; return function AbstractInputRadioWithInputComponent_Factory(t) { return (ɵAbstractInputRadioWithInputComponent_BaseFactory || (ɵAbstractInputRadioWithInputComponent_BaseFactory = i0.ɵɵgetInheritedFactory(AbstractInputRadioWithInputComponent)))(t || AbstractInputRadioWithInputComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AbstractInputRadioWithInputComponent, selectors: [["tg-form-abstract-radio-with-input"]], inputs: { optionList: "optionList", fieldLabel: "fieldLabel", inputPlaceholder: "inputPlaceholder" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 0, template: function AbstractInputRadioWithInputComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtext(1, "Do not use the abstract component");
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbstractInputRadioWithInputComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-abstract-radio-with-input', template: "<div>Do not use the abstract component</div>\n" }]
    }], null, { optionList: [{
            type: Input
        }], fieldLabel: [{
            type: Input
        }], inputPlaceholder: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AbstractInputRadioWithInputComponent, { className: "AbstractInputRadioWithInputComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtd2l0aC1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbHMvcmFkaW8tY2hlY2tib3gvcmFkaW8vd2l0aC1pbnB1dC9hYnN0cmFjdC13aXRoLWlucHV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9yYWRpby1jaGVja2JveC9yYWRpby93aXRoLWlucHV0L2Fic3RyYWN0LXdpdGgtaW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBR3JFLE1BQU0saUJBQWlCLEdBQUcsYUFBYSxDQUFDO0FBTXhDLE1BQU0sT0FBTyxvQ0FBcUMsU0FBUSxzQkFBc0I7SUFDckUsVUFBVSxHQUFrQixFQUFFLENBQUM7SUFDL0IsVUFBVSxDQUFTO0lBQ25CLGdCQUFnQixDQUFTO0lBRWxDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUMzQixVQUFVLENBQVM7SUFFbkIsVUFBVSxDQUFDLFdBQW1CO1FBQzVCLElBQUksV0FBVyxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFO2dCQUMxRCxPQUFPLFlBQVksQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLEtBQUssaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO2dCQUN2RSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckIsQ0FBQztRQUNILENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7UUFDbEMsQ0FBQztJQUNILENBQUM7SUFFRCxZQUFZLENBQUMsTUFBbUI7UUFDOUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNYLEtBQUssR0FBRyxpQkFBaUIsQ0FBQztRQUM1QixDQUFDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDOUYsQ0FBQzs2U0EvQ1Usb0NBQW9DLFNBQXBDLG9DQUFvQzs2REFBcEMsb0NBQW9DO1lDVmpELDJCQUFLO1lBQUEsaURBQWlDO1lBQUEsaUJBQU07OztpRkRVL0Isb0NBQW9DO2NBSmhELFNBQVM7MkJBQ0UsbUNBQW1DO2dCQUlwQyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSzs7a0ZBSEssb0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4uL2Fic3RyYWN0LXJhZGlvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dE9wdGlvbiB9IGZyb20gJy4uLy4uLy4uL3JhZGlvJztcblxuY29uc3QgRU1QVFlfSU5QVVRfVkFMVUUgPSAnRU1QVFlfSU5QVVQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0Zy1mb3JtLWFic3RyYWN0LXJhZGlvLXdpdGgtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWJzdHJhY3Qtd2l0aC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFic3RyYWN0SW5wdXRSYWRpb1dpdGhJbnB1dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0UmFkaW9Db21wb25lbnQge1xuICBASW5wdXQoKSBvcHRpb25MaXN0OiBJbnB1dE9wdGlvbltdID0gW107XG4gIEBJbnB1dCgpIGZpZWxkTGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgaW5wdXRQbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIGlucHV0UmFkaW9TZWxlY3RlZCA9IGZhbHNlO1xuICBpbnB1dFZhbHVlOiBzdHJpbmc7XG5cbiAgd3JpdGVWYWx1ZShvcHRpb25WYWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKG9wdGlvblZhbHVlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdGhpcy5vcHRpb25MaXN0LmZpbmQoKG9wdGlvbk9mTGlzdCkgPT4ge1xuICAgICAgICByZXR1cm4gb3B0aW9uT2ZMaXN0LnZhbHVlID09PSBvcHRpb25WYWx1ZTtcbiAgICAgIH0pO1xuICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IG9wdGlvblZhbHVlID09PSBFTVBUWV9JTlBVVF9WQUxVRSA/ICcnIDogb3B0aW9uVmFsdWU7XG4gICAgICAgIHRoaXMuc2VsZWN0SW5wdXQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RPcHRpb24ob3B0aW9uOiBJbnB1dE9wdGlvbik6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRSYWRpb1NlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IG9wdGlvbjtcbiAgICB0aGlzLmlucHV0VmFsdWUgPSAnJztcbiAgICB0aGlzLm9uVG91Y2gob3B0aW9uLnZhbHVlKTtcbiAgICB0aGlzLm9uQ2hhbmdlKG9wdGlvbi52YWx1ZSk7XG4gICAgdGhpcy5zZWxlY3RFdmVudC5lbWl0KCk7XG4gICAgdGhpcy50cmFja2luZ0V2ZW50LmVtaXQoeyBsYWJlbDogdGhpcy5nZXRPcHRpb25MYWJlbChvcHRpb24pLCB2YWx1ZTogb3B0aW9uLnZhbHVlIH0pO1xuICB9XG5cbiAgc2VsZWN0SW5wdXQoKSB7XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmlucHV0UmFkaW9TZWxlY3RlZCA9IHRydWU7XG4gICAgbGV0IHZhbHVlID0gdGhpcy5pbnB1dFZhbHVlO1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHZhbHVlID0gRU1QVFlfSU5QVVRfVkFMVUU7XG4gICAgfVxuICAgIHRoaXMub25Ub3VjaCh2YWx1ZSk7XG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgdGhpcy5zZWxlY3RFdmVudC5lbWl0KCk7XG4gIH1cblxuICBmb2N1c090aGVyU2VsZWN0ZWQoKSB7XG4gICAgdGhpcy5zZWxlY3RJbnB1dCgpO1xuICAgIHRoaXMudHJhY2tpbmdFdmVudC5lbWl0KHsgbGFiZWw6IHRoaXMuZ2V0T3B0aW9uTGFiZWwodGhpcy5vcHRpb25MaXN0WzBdKSwgdmFsdWU6ICdvdGhlcicgfSk7XG4gIH1cbn1cbiIsIjxkaXY+RG8gbm90IHVzZSB0aGUgYWJzdHJhY3QgY29tcG9uZW50PC9kaXY+XG4iXX0=