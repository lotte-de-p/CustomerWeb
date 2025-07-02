import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ContainerPartitionDirective {
    renderer;
    el;
    firstItem;
    lastItem;
    inverted;
    dashed;
    noBorders;
    noPadding;
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        this.renderer.addClass(this.el.nativeElement, 'Container--partitioned--partition');
        if (this.firstItem) {
            this.addContainerClass('first-item');
        }
        if (this.lastItem) {
            this.addContainerClass('last-item');
        }
        if (this.inverted) {
            this.addContainerClass('inverted');
        }
        if (this.dashed) {
            this.addContainerClass('dashed');
        }
        if (this.noBorders) {
            this.addContainerClass('no-borders');
        }
        if (this.noPadding) {
            this.addContainerClass('no-padding');
        }
    }
    addContainerClass(suffix) {
        this.renderer.addClass(this.el.nativeElement, 'Container--partitioned--partition--' + suffix);
    }
    static ɵfac = function ContainerPartitionDirective_Factory(t) { return new (t || ContainerPartitionDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ContainerPartitionDirective, selectors: [["div", "tgContainerPartition", ""]], inputs: { firstItem: "firstItem", lastItem: "lastItem", inverted: "inverted", dashed: "dashed", noBorders: "noBorders", noPadding: "noPadding" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContainerPartitionDirective, [{
        type: Directive,
        args: [{
                selector: 'div[tgContainerPartition]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { firstItem: [{
            type: Input
        }], lastItem: [{
            type: Input
        }], inverted: [{
            type: Input
        }], dashed: [{
            type: Input
        }], noBorders: [{
            type: Input
        }], noPadding: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLXBhcnRpdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy9jb250YWluZXJzL2NvbnRhaW5lci1wYXJ0aXRpb24vY29udGFpbmVyLXBhcnRpdGlvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDOztBQUtoRixNQUFNLE9BQU8sMkJBQTJCO0lBUzdCO0lBQ0E7SUFUQSxTQUFTLENBQVU7SUFDbkIsUUFBUSxDQUFVO0lBQ2xCLFFBQVEsQ0FBVTtJQUNsQixNQUFNLENBQVU7SUFDaEIsU0FBUyxDQUFVO0lBQ25CLFNBQVMsQ0FBVTtJQUU1QixZQUNTLFFBQW1CLEVBQ25CLEVBQWM7UUFEZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLE9BQUUsR0FBRixFQUFFLENBQVk7SUFDcEIsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVPLFVBQVU7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztRQUVuRixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7SUFDSCxDQUFDO0lBRU8saUJBQWlCLENBQUMsTUFBYztRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxxQ0FBcUMsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNoRyxDQUFDO3FGQS9DVSwyQkFBMkI7NkRBQTNCLDJCQUEyQjs7aUZBQTNCLDJCQUEyQjtjQUh2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjthQUN0QzttRUFFVSxTQUFTO2tCQUFqQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2Rpdlt0Z0NvbnRhaW5lclBhcnRpdGlvbl0nLFxufSlcbmV4cG9ydCBjbGFzcyBDb250YWluZXJQYXJ0aXRpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmaXJzdEl0ZW06IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxhc3RJdGVtOiBib29sZWFuO1xuICBASW5wdXQoKSBpbnZlcnRlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgZGFzaGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBub0JvcmRlcnM6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG5vUGFkZGluZzogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWZcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkQ2xhc3NlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRDbGFzc2VzKCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnQ29udGFpbmVyLS1wYXJ0aXRpb25lZC0tcGFydGl0aW9uJyk7XG5cbiAgICBpZiAodGhpcy5maXJzdEl0ZW0pIHtcbiAgICAgIHRoaXMuYWRkQ29udGFpbmVyQ2xhc3MoJ2ZpcnN0LWl0ZW0nKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sYXN0SXRlbSkge1xuICAgICAgdGhpcy5hZGRDb250YWluZXJDbGFzcygnbGFzdC1pdGVtJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW52ZXJ0ZWQpIHtcbiAgICAgIHRoaXMuYWRkQ29udGFpbmVyQ2xhc3MoJ2ludmVydGVkJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGFzaGVkKSB7XG4gICAgICB0aGlzLmFkZENvbnRhaW5lckNsYXNzKCdkYXNoZWQnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ub0JvcmRlcnMpIHtcbiAgICAgIHRoaXMuYWRkQ29udGFpbmVyQ2xhc3MoJ25vLWJvcmRlcnMnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ub1BhZGRpbmcpIHtcbiAgICAgIHRoaXMuYWRkQ29udGFpbmVyQ2xhc3MoJ25vLXBhZGRpbmcnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZENvbnRhaW5lckNsYXNzKHN1ZmZpeDogc3RyaW5nKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdDb250YWluZXItLXBhcnRpdGlvbmVkLS1wYXJ0aXRpb24tLScgKyBzdWZmaXgpO1xuICB9XG59XG4iXX0=