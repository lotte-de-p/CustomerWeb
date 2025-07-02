import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class StepHostDirective {
    viewContainerRef;
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    static ɵfac = function StepHostDirective_Factory(t) { return new (t || StepHostDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StepHostDirective, selectors: [["", "step-host", ""]] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepHostDirective, [{
        type: Directive,
        args: [{
                selector: '[step-host]',
            }]
    }], () => [{ type: i0.ViewContainerRef }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1ob3N0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvc3RlcC1jb250YWluZXIvZGlyZWN0aXZlcy9zdGVwLWhvc3QuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLE1BQU0sZUFBZSxDQUFDOztBQUs1RCxNQUFNLE9BQU8saUJBQWlCO0lBQ1Q7SUFBbkIsWUFBbUIsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBRyxDQUFDOzJFQUQ5QyxpQkFBaUI7NkRBQWpCLGlCQUFpQjs7aUZBQWpCLGlCQUFpQjtjQUg3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3N0ZXAtaG9zdF0nLFxufSlcbmV4cG9ydCBjbGFzcyBTdGVwSG9zdERpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxufVxuIl19