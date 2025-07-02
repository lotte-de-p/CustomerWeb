import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ContainerDirective {
    renderer;
    el;
    partitioned = false;
    shadow = true;
    bordered = false;
    cursor = false;
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        this.renderer.addClass(this.el.nativeElement, 'Container');
        if (this.partitioned) {
            this.addContainerClass('partitioned');
        }
        if (this.bordered) {
            this.addContainerClass('bordered');
        }
        if (this.cursor) {
            this.renderer.addClass(this.el.nativeElement, 'cursor--pointer');
        }
        if (this.shadow) {
            this.addContainerClass('shadow--to-delete');
        }
    }
    addContainerClass(suffix) {
        this.renderer.addClass(this.el.nativeElement, 'Container--' + suffix);
    }
    static ɵfac = function ContainerDirective_Factory(t) { return new (t || ContainerDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ContainerDirective, selectors: [["div", "tgContainer", ""]], inputs: { partitioned: "partitioned", shadow: "shadow", bordered: "bordered", cursor: "cursor" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContainerDirective, [{
        type: Directive,
        args: [{
                selector: 'div[tgContainer]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { partitioned: [{
            type: Input
        }], shadow: [{
            type: Input
        }], bordered: [{
            type: Input
        }], cursor: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL2NvbnRhaW5lcnMvY29udGFpbmVyL2NvbnRhaW5lci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDOztBQUtoRixNQUFNLE9BQU8sa0JBQWtCO0lBT3BCO0lBQ0E7SUFQQSxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDZCxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ2pCLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFFeEIsWUFDUyxRQUFtQixFQUNuQixFQUFjO1FBRGQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQ3BCLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTyxVQUFVO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRTNELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25FLENBQUM7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUM5QyxDQUFDO0lBQ0gsQ0FBQztJQUVPLGlCQUFpQixDQUFDLE1BQWM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ3hFLENBQUM7NEVBckNVLGtCQUFrQjs2REFBbEIsa0JBQWtCOztpRkFBbEIsa0JBQWtCO2NBSDlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCO21FQUVVLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnZGl2W3RnQ29udGFpbmVyXScsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhaW5lckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHBhcnRpdGlvbmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNoYWRvdyA9IHRydWU7XG4gIEBJbnB1dCgpIGJvcmRlcmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGN1cnNvciA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRDbGFzc2VzKCk7XG4gIH1cblxuICBwcml2YXRlIGFkZENsYXNzZXMoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdDb250YWluZXInKTtcblxuICAgIGlmICh0aGlzLnBhcnRpdGlvbmVkKSB7XG4gICAgICB0aGlzLmFkZENvbnRhaW5lckNsYXNzKCdwYXJ0aXRpb25lZCcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmJvcmRlcmVkKSB7XG4gICAgICB0aGlzLmFkZENvbnRhaW5lckNsYXNzKCdib3JkZXJlZCcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmN1cnNvcikge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdjdXJzb3ItLXBvaW50ZXInKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaGFkb3cpIHtcbiAgICAgIHRoaXMuYWRkQ29udGFpbmVyQ2xhc3MoJ3NoYWRvdy0tdG8tZGVsZXRlJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRDb250YWluZXJDbGFzcyhzdWZmaXg6IHN0cmluZykge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnQ29udGFpbmVyLS0nICsgc3VmZml4KTtcbiAgfVxufVxuIl19