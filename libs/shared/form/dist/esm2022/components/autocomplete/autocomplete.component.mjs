import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = a0 => ({ "dropdown-suggest__selector-menu--active": a0 });
function AutocompleteComponent_div_2_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 7);
    i0.ɵɵlistener("mousedown", function AutocompleteComponent_div_2_li_3_Template_li_mousedown_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const item_r2 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.selectItem(item_r2)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("id", ctx_r1.getItemId(item_r2))("ngClass", i0.ɵɵpureFunction1(3, _c0, ctx_r1.highlightedItem === item_r2));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.getLabel(item_r2), " ");
} }
function AutocompleteComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "ul", 5);
    i0.ɵɵtemplate(3, AutocompleteComponent_div_2_li_3_Template, 2, 5, "li", 6);
    i0.ɵɵpipe(4, "slice");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", ctx_r0.name + "-listbox")("scrollTop", ctx_r0.scrollTo);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(4, 3, ctx_r0.filteredItems, 0, ctx_r0.maxResults));
} }
const _c1 = a0 => ({ "form__input--error": a0 });
export class AutocompleteComponent {
    searchTerm;
    autocompleteItems;
    createLabel;
    placeholder = '';
    maxResults = 5;
    name = 'autocomplete';
    showListOnFocus;
    setErrorState = false;
    selectionChange = new EventEmitter();
    inputTextChange = new EventEmitter();
    showSuggestions = false;
    highlightedItem;
    filteredItems;
    selectedItem;
    scrollTo = 0;
    highlightedItemHeight = 44;
    listItemHeight = 36;
    ngOnInit() {
        if (!this.createLabel) {
            this.createLabel = this.fallbackCreateLabel;
        }
    }
    fallbackCreateLabel(item) {
        if (typeof item !== 'string') {
            throw new TypeError(`Unable to determine how to retrieve the label from type. The 'createLabel' property should be passed.`);
        }
        return item;
    }
    handleKeyEvent(key) {
        switch (key) {
            case 'Enter':
                this.selectItem(this.highlightedItem);
                break;
            case 'Escape':
                this.onBlur();
                break;
            case 'ArrowUp':
                this.handleArrowUp();
                break;
            case 'ArrowDown':
                this.handleArrowDown();
                break;
            default:
                this.updateModelWithSearchTerm();
        }
    }
    updateModelWithSearchTerm() {
        this.showSuggestions = false;
        this.filteredItems = this.updateFilteredItems();
        this.showSuggestions = this.showListOnFocus || this.hasSearchTerm();
        this.setHighlightedItem(this.filteredItems);
    }
    getHighlightedItemIndex() {
        return this.filteredItems.findIndex((item) => item === this.highlightedItem);
    }
    handleArrowUp() {
        if (this.showListBox()) {
            const indexOfCurrentHighlightedItem = this.getHighlightedItemIndex();
            this.scrollTo = indexOfCurrentHighlightedItem * this.listItemHeight - this.highlightedItemHeight;
            if (indexOfCurrentHighlightedItem >= 1) {
                this.highlightedItem = this.filteredItems[indexOfCurrentHighlightedItem - 1];
            }
        }
    }
    handleArrowDown() {
        if (this.showListBox()) {
            const indexOfCurrentHighlightedItem = this.getHighlightedItemIndex();
            if (indexOfCurrentHighlightedItem > 4) {
                this.scrollTo = indexOfCurrentHighlightedItem * this.listItemHeight;
            }
            if (indexOfCurrentHighlightedItem + 1 < this.filteredItems.length) {
                this.highlightedItem = this.filteredItems[indexOfCurrentHighlightedItem + 1];
            }
        }
    }
    setSearchTerm(keyword) {
        this.searchTerm = keyword;
    }
    showListBox() {
        return this.showSuggestions && (this.hasSearchTerm() || this.showListOnFocus) && this.hasSuggestions();
    }
    getLabel(item) {
        return this.createLabel(item);
    }
    selectItem(item) {
        if (item) {
            this.setSearchTerm(this.getLabel(item));
        }
        this.selectedItem = item;
        this.showSuggestions = false;
        if (this.selectedItem) {
            this.selectionChange.emit(this.selectedItem);
        }
        else {
            this.selectionChange.emit();
        }
    }
    setHighlightedItem(filteredItems) {
        if (filteredItems.length === 0) {
            this.highlightedItem = null;
        }
        else {
            this.highlightedItem = filteredItems[0];
        }
    }
    onBlur(event) {
        if (!this.selectedItem) {
            this.selectItem(null);
        }
        const element = event?.currentTarget;
        this.inputTextChange.emit(element?.value);
        this.showSuggestions = false;
    }
    onFocus() {
        if (this.showListOnFocus) {
            this.updateModelWithSearchTerm();
        }
    }
    hasSearchTerm() {
        return !!this.searchTerm && this.searchTerm.length > 0;
    }
    hasSuggestions() {
        return !!this.filteredItems.length;
    }
    updateFilteredItems() {
        let filteredItems = this.autocompleteItems;
        if (this.hasSearchTerm()) {
            filteredItems = filteredItems
                .filter((filteredItem) => this.getLabel(filteredItem))
                .filter((filteredItem) => this.getLabel(filteredItem).toLowerCase().startsWith(this.searchTerm.toLowerCase()));
            // Modified 'contains' to 'startWith'. this can be handled using a configuration property in future if necessary.
        }
        return filteredItems.slice(0, this.maxResults);
    }
    getItemId(highlightedItem) {
        return window.btoa(JSON.stringify(highlightedItem));
    }
    getActiveItemId() {
        if (this.highlightedItem) {
            return this.getItemId(this.highlightedItem);
        }
        return '';
    }
    static ɵfac = function AutocompleteComponent_Factory(t) { return new (t || AutocompleteComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AutocompleteComponent, selectors: [["tg-autocomplete"]], inputs: { searchTerm: "searchTerm", autocompleteItems: "autocompleteItems", createLabel: "createLabel", placeholder: "placeholder", maxResults: "maxResults", name: "name", showListOnFocus: "showListOnFocus", setErrorState: "setErrorState" }, outputs: { selectionChange: "selectionChange", inputTextChange: "inputTextChange" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 3, vars: 10, consts: [[1, "AutoComplete"], ["type", "text", "autocomplete", "off", "role", "combobox", "aria-autocomplete", "list", 1, "form__input", "m--n", 3, "ngModel", "name", "placeholder", "ngClass", "ngModelChange", "keyup", "blur", "focus"], ["class", "cmp dropdown dropdown-suggest dropdown-suggest--max5results", 4, "ngIf"], [1, "cmp", "dropdown", "dropdown-suggest", "dropdown-suggest--max5results"], [1, "dropdown-suggest__menu"], ["role", "listbox", "aria-label", "List of pages", 1, "dropdown-menu__menuitems__list", 3, "id", "scrollTop"], ["class", "dropdown-menu__menuitems__list-item", 3, "id", "ngClass", "mousedown", 4, "ngFor", "ngForOf"], [1, "dropdown-menu__menuitems__list-item", 3, "id", "ngClass", "mousedown"]], template: function AutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "input", 1);
            i0.ɵɵlistener("ngModelChange", function AutocompleteComponent_Template_input_ngModelChange_1_listener($event) { return ctx.searchTerm = $event; })("keyup", function AutocompleteComponent_Template_input_keyup_1_listener($event) { return ctx.handleKeyEvent($event.key); })("blur", function AutocompleteComponent_Template_input_blur_1_listener($event) { return ctx.onBlur($event); })("focus", function AutocompleteComponent_Template_input_focus_1_listener() { return ctx.onFocus(); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, AutocompleteComponent_div_2_Template, 5, 7, "div", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngModel", ctx.searchTerm)("name", ctx.name)("placeholder", ctx.placeholder)("ngClass", i0.ɵɵpureFunction1(8, _c1, ctx.setErrorState));
            i0.ɵɵattribute("aria-controls", ctx.name + "-listbox")("aria-expanded", ctx.hasSearchTerm() && ctx.showSuggestions && ctx.hasSuggestions())("aria-activedescendant", ctx.getActiveItemId());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showListBox());
        } }, dependencies: [CommonModule, i1.NgClass, i1.NgForOf, i1.NgIf, i1.SlicePipe, FormsModule, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AutocompleteComponent, [{
        type: Component,
        args: [{ standalone: true, selector: 'tg-autocomplete', imports: [CommonModule, FormsModule], template: "<div class=\"AutoComplete\">\n  <input\n    [(ngModel)]=\"searchTerm\"\n    [name]=\"name\"\n    [placeholder]=\"placeholder\"\n    type=\"text\"\n    autocomplete=\"off\"\n    class=\"form__input m--n\"\n    [ngClass]=\"{ 'form__input--error': setErrorState }\"\n    role=\"combobox\"\n    [attr.aria-controls]=\"name + '-listbox'\"\n    aria-autocomplete=\"list\"\n    [attr.aria-expanded]=\"hasSearchTerm() && showSuggestions && hasSuggestions()\"\n    [attr.aria-activedescendant]=\"getActiveItemId()\"\n    (keyup)=\"handleKeyEvent($event.key)\"\n    (blur)=\"onBlur($event)\"\n    (focus)=\"onFocus()\" />\n\n  <div class=\"cmp dropdown dropdown-suggest dropdown-suggest--max5results\" *ngIf=\"showListBox()\">\n    <div class=\"dropdown-suggest__menu\">\n      <ul\n        class=\"dropdown-menu__menuitems__list\"\n        [id]=\"name + '-listbox'\"\n        role=\"listbox\"\n        aria-label=\"List of pages\"\n        [scrollTop]=\"scrollTo\">\n        <li\n          *ngFor=\"let item of filteredItems | slice: 0 : maxResults\"\n          [id]=\"getItemId(item)\"\n          class=\"dropdown-menu__menuitems__list-item\"\n          [ngClass]=\"{ 'dropdown-suggest__selector-menu--active': highlightedItem === item }\"\n          (mousedown)=\"selectItem(item)\">\n          {{ getLabel(item) }}\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n" }]
    }], null, { searchTerm: [{
            type: Input
        }], autocompleteItems: [{
            type: Input
        }], createLabel: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], maxResults: [{
            type: Input
        }], name: [{
            type: Input
        }], showListOnFocus: [{
            type: Input
        }], setErrorState: [{
            type: Input
        }], selectionChange: [{
            type: Output
        }], inputTextChange: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AutocompleteComponent, { className: "AutocompleteComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7SUN3QnJDLDZCQUtpQztJQUEvQix1T0FBYSxlQUFBLDBCQUFnQixDQUFBLElBQUM7SUFDOUIsWUFDRjtJQUFBLGlCQUFLOzs7O0lBTEgsOENBQXNCLDJFQUFBO0lBSXRCLGNBQ0Y7SUFERSx5REFDRjs7O0lBZk4sOEJBQStGLGFBQUEsWUFBQTtJQVF6RiwwRUFPSzs7SUFDUCxpQkFBSyxFQUFBLEVBQUE7OztJQVpILGVBQXdCO0lBQXhCLDZDQUF3Qiw4QkFBQTtJQUtMLGNBQXdDO0lBQXhDLDBGQUF3Qzs7O0FEakJuRSxNQUFNLE9BQU8scUJBQXFCO0lBQ3ZCLFVBQVUsQ0FBUztJQUNuQixpQkFBaUIsQ0FBTTtJQUN2QixXQUFXLENBQXNCO0lBQ2pDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDakIsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUNmLElBQUksR0FBRyxjQUFjLENBQUM7SUFDdEIsZUFBZSxDQUFVO0lBQ3pCLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFFckIsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7SUFDeEMsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFFdkQs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aW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgc2VsZWN0b3I6ICd0Zy1hdXRvY29tcGxldGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5odG1sJyxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVDb21wb25lbnQ8VD4gaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBzZWFyY2hUZXJtOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGF1dG9jb21wbGV0ZUl0ZW1zOiBUW107XG4gIEBJbnB1dCgpIGNyZWF0ZUxhYmVsOiAoaXRlbTogVCkgPT4gc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICcnO1xuICBASW5wdXQoKSBtYXhSZXN1bHRzID0gNTtcbiAgQElucHV0KCkgbmFtZSA9ICdhdXRvY29tcGxldGUnO1xuICBASW5wdXQoKSBzaG93TGlzdE9uRm9jdXM6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNldEVycm9yU3RhdGUgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuICBAT3V0cHV0KCkgaW5wdXRUZXh0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgc2hvd1N1Z2dlc3Rpb25zID0gZmFsc2U7XG4gIGhpZ2hsaWdodGVkSXRlbTogVCB8IG51bGw7XG4gIGZpbHRlcmVkSXRlbXM6IFRbXTtcbiAgc2VsZWN0ZWRJdGVtOiBUIHwgbnVsbDtcbiAgc2Nyb2xsVG8gPSAwO1xuICBoaWdobGlnaHRlZEl0ZW1IZWlnaHQgPSA0NDtcbiAgbGlzdEl0ZW1IZWlnaHQgPSAzNjtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY3JlYXRlTGFiZWwpIHtcbiAgICAgIHRoaXMuY3JlYXRlTGFiZWwgPSB0aGlzLmZhbGxiYWNrQ3JlYXRlTGFiZWw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmYWxsYmFja0NyZWF0ZUxhYmVsKGl0ZW06IFQpIHtcbiAgICBpZiAodHlwZW9mIGl0ZW0gIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICBgVW5hYmxlIHRvIGRldGVybWluZSBob3cgdG8gcmV0cmlldmUgdGhlIGxhYmVsIGZyb20gdHlwZS4gVGhlICdjcmVhdGVMYWJlbCcgcHJvcGVydHkgc2hvdWxkIGJlIHBhc3NlZC5gXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIGhhbmRsZUtleUV2ZW50KGtleTogc3RyaW5nKSB7XG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgdGhpcy5zZWxlY3RJdGVtKHRoaXMuaGlnaGxpZ2h0ZWRJdGVtKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICB0aGlzLm9uQmx1cigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICB0aGlzLmhhbmRsZUFycm93VXAoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICB0aGlzLmhhbmRsZUFycm93RG93bigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxXaXRoU2VhcmNoVGVybSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlTW9kZWxXaXRoU2VhcmNoVGVybSgpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dTdWdnZXN0aW9ucyA9IGZhbHNlO1xuICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IHRoaXMudXBkYXRlRmlsdGVyZWRJdGVtcygpO1xuICAgIHRoaXMuc2hvd1N1Z2dlc3Rpb25zID0gdGhpcy5zaG93TGlzdE9uRm9jdXMgfHwgdGhpcy5oYXNTZWFyY2hUZXJtKCk7XG4gICAgdGhpcy5zZXRIaWdobGlnaHRlZEl0ZW0odGhpcy5maWx0ZXJlZEl0ZW1zKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGlnaGxpZ2h0ZWRJdGVtSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJlZEl0ZW1zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbSA9PT0gdGhpcy5oaWdobGlnaHRlZEl0ZW0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBcnJvd1VwKCkge1xuICAgIGlmICh0aGlzLnNob3dMaXN0Qm94KCkpIHtcbiAgICAgIGNvbnN0IGluZGV4T2ZDdXJyZW50SGlnaGxpZ2h0ZWRJdGVtID0gdGhpcy5nZXRIaWdobGlnaHRlZEl0ZW1JbmRleCgpO1xuICAgICAgdGhpcy5zY3JvbGxUbyA9IGluZGV4T2ZDdXJyZW50SGlnaGxpZ2h0ZWRJdGVtICogdGhpcy5saXN0SXRlbUhlaWdodCAtIHRoaXMuaGlnaGxpZ2h0ZWRJdGVtSGVpZ2h0O1xuICAgICAgaWYgKGluZGV4T2ZDdXJyZW50SGlnaGxpZ2h0ZWRJdGVtID49IDEpIHtcbiAgICAgICAgdGhpcy5oaWdobGlnaHRlZEl0ZW0gPSB0aGlzLmZpbHRlcmVkSXRlbXNbaW5kZXhPZkN1cnJlbnRIaWdobGlnaHRlZEl0ZW0gLSAxXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFycm93RG93bigpIHtcbiAgICBpZiAodGhpcy5zaG93TGlzdEJveCgpKSB7XG4gICAgICBjb25zdCBpbmRleE9mQ3VycmVudEhpZ2hsaWdodGVkSXRlbSA9IHRoaXMuZ2V0SGlnaGxpZ2h0ZWRJdGVtSW5kZXgoKTtcbiAgICAgIGlmIChpbmRleE9mQ3VycmVudEhpZ2hsaWdodGVkSXRlbSA+IDQpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxUbyA9IGluZGV4T2ZDdXJyZW50SGlnaGxpZ2h0ZWRJdGVtICogdGhpcy5saXN0SXRlbUhlaWdodDtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleE9mQ3VycmVudEhpZ2hsaWdodGVkSXRlbSArIDEgPCB0aGlzLmZpbHRlcmVkSXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRJdGVtID0gdGhpcy5maWx0ZXJlZEl0ZW1zW2luZGV4T2ZDdXJyZW50SGlnaGxpZ2h0ZWRJdGVtICsgMV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRTZWFyY2hUZXJtKGtleXdvcmQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoVGVybSA9IGtleXdvcmQ7XG4gIH1cblxuICBzaG93TGlzdEJveCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaG93U3VnZ2VzdGlvbnMgJiYgKHRoaXMuaGFzU2VhcmNoVGVybSgpIHx8IHRoaXMuc2hvd0xpc3RPbkZvY3VzKSAmJiB0aGlzLmhhc1N1Z2dlc3Rpb25zKCk7XG4gIH1cblxuICBnZXRMYWJlbChpdGVtOiBUKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVMYWJlbChpdGVtKTtcbiAgfVxuXG4gIHNlbGVjdEl0ZW0oaXRlbTogVCB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgdGhpcy5zZXRTZWFyY2hUZXJtKHRoaXMuZ2V0TGFiZWwoaXRlbSkpO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgdGhpcy5zaG93U3VnZ2VzdGlvbnMgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW0pIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZEl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRIaWdobGlnaHRlZEl0ZW0oZmlsdGVyZWRJdGVtczogVFtdKSB7XG4gICAgaWYgKGZpbHRlcmVkSXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmhpZ2hsaWdodGVkSXRlbSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRJdGVtID0gZmlsdGVyZWRJdGVtc1swXTtcbiAgICB9XG4gIH1cblxuICBvbkJsdXIoZXZlbnQ/OiBFdmVudCkge1xuICAgIGlmICghdGhpcy5zZWxlY3RlZEl0ZW0pIHtcbiAgICAgIHRoaXMuc2VsZWN0SXRlbShudWxsKTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudCA9IGV2ZW50Py5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy5pbnB1dFRleHRDaGFuZ2UuZW1pdChlbGVtZW50Py52YWx1ZSk7XG4gICAgdGhpcy5zaG93U3VnZ2VzdGlvbnMgPSBmYWxzZTtcbiAgfVxuXG4gIG9uRm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuc2hvd0xpc3RPbkZvY3VzKSB7XG4gICAgICB0aGlzLnVwZGF0ZU1vZGVsV2l0aFNlYXJjaFRlcm0oKTtcbiAgICB9XG4gIH1cblxuICBoYXNTZWFyY2hUZXJtKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuc2VhcmNoVGVybSAmJiB0aGlzLnNlYXJjaFRlcm0ubGVuZ3RoID4gMDtcbiAgfVxuXG4gIGhhc1N1Z2dlc3Rpb25zKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuZmlsdGVyZWRJdGVtcy5sZW5ndGg7XG4gIH1cblxuICB1cGRhdGVGaWx0ZXJlZEl0ZW1zKCkge1xuICAgIGxldCBmaWx0ZXJlZEl0ZW1zID0gdGhpcy5hdXRvY29tcGxldGVJdGVtcztcbiAgICBpZiAodGhpcy5oYXNTZWFyY2hUZXJtKCkpIHtcbiAgICAgIGZpbHRlcmVkSXRlbXMgPSBmaWx0ZXJlZEl0ZW1zXG4gICAgICAgIC5maWx0ZXIoKGZpbHRlcmVkSXRlbSkgPT4gdGhpcy5nZXRMYWJlbChmaWx0ZXJlZEl0ZW0pKVxuICAgICAgICAuZmlsdGVyKChmaWx0ZXJlZEl0ZW0pID0+IHRoaXMuZ2V0TGFiZWwoZmlsdGVyZWRJdGVtKS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgodGhpcy5zZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpKTtcbiAgICAgIC8vIE1vZGlmaWVkICdjb250YWlucycgdG8gJ3N0YXJ0V2l0aCcuIHRoaXMgY2FuIGJlIGhhbmRsZWQgdXNpbmcgYSBjb25maWd1cmF0aW9uIHByb3BlcnR5IGluIGZ1dHVyZSBpZiBuZWNlc3NhcnkuXG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXJlZEl0ZW1zLnNsaWNlKDAsIHRoaXMubWF4UmVzdWx0cyk7XG4gIH1cblxuICBnZXRJdGVtSWQoaGlnaGxpZ2h0ZWRJdGVtOiBUKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5idG9hKEpTT04uc3RyaW5naWZ5KGhpZ2hsaWdodGVkSXRlbSkpO1xuICB9XG5cbiAgZ2V0QWN0aXZlSXRlbUlkKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuaGlnaGxpZ2h0ZWRJdGVtKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRJdGVtSWQodGhpcy5oaWdobGlnaHRlZEl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJBdXRvQ29tcGxldGVcIj5cbiAgPGlucHV0XG4gICAgWyhuZ01vZGVsKV09XCJzZWFyY2hUZXJtXCJcbiAgICBbbmFtZV09XCJuYW1lXCJcbiAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgIGNsYXNzPVwiZm9ybV9faW5wdXQgbS0tblwiXG4gICAgW25nQ2xhc3NdPVwieyAnZm9ybV9faW5wdXQtLWVycm9yJzogc2V0RXJyb3JTdGF0ZSB9XCJcbiAgICByb2xlPVwiY29tYm9ib3hcIlxuICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwibmFtZSArICctbGlzdGJveCdcIlxuICAgIGFyaWEtYXV0b2NvbXBsZXRlPVwibGlzdFwiXG4gICAgW2F0dHIuYXJpYS1leHBhbmRlZF09XCJoYXNTZWFyY2hUZXJtKCkgJiYgc2hvd1N1Z2dlc3Rpb25zICYmIGhhc1N1Z2dlc3Rpb25zKClcIlxuICAgIFthdHRyLmFyaWEtYWN0aXZlZGVzY2VuZGFudF09XCJnZXRBY3RpdmVJdGVtSWQoKVwiXG4gICAgKGtleXVwKT1cImhhbmRsZUtleUV2ZW50KCRldmVudC5rZXkpXCJcbiAgICAoYmx1cik9XCJvbkJsdXIoJGV2ZW50KVwiXG4gICAgKGZvY3VzKT1cIm9uRm9jdXMoKVwiIC8+XG5cbiAgPGRpdiBjbGFzcz1cImNtcCBkcm9wZG93biBkcm9wZG93bi1zdWdnZXN0IGRyb3Bkb3duLXN1Z2dlc3QtLW1heDVyZXN1bHRzXCIgKm5nSWY9XCJzaG93TGlzdEJveCgpXCI+XG4gICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLXN1Z2dlc3RfX21lbnVcIj5cbiAgICAgIDx1bFxuICAgICAgICBjbGFzcz1cImRyb3Bkb3duLW1lbnVfX21lbnVpdGVtc19fbGlzdFwiXG4gICAgICAgIFtpZF09XCJuYW1lICsgJy1saXN0Ym94J1wiXG4gICAgICAgIHJvbGU9XCJsaXN0Ym94XCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIkxpc3Qgb2YgcGFnZXNcIlxuICAgICAgICBbc2Nyb2xsVG9wXT1cInNjcm9sbFRvXCI+XG4gICAgICAgIDxsaVxuICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZpbHRlcmVkSXRlbXMgfCBzbGljZTogMCA6IG1heFJlc3VsdHNcIlxuICAgICAgICAgIFtpZF09XCJnZXRJdGVtSWQoaXRlbSlcIlxuICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24tbWVudV9fbWVudWl0ZW1zX19saXN0LWl0ZW1cIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cInsgJ2Ryb3Bkb3duLXN1Z2dlc3RfX3NlbGVjdG9yLW1lbnUtLWFjdGl2ZSc6IGhpZ2hsaWdodGVkSXRlbSA9PT0gaXRlbSB9XCJcbiAgICAgICAgICAobW91c2Vkb3duKT1cInNlbGVjdEl0ZW0oaXRlbSlcIj5cbiAgICAgICAgICB7eyBnZXRMYWJlbChpdGVtKSB9fVxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==