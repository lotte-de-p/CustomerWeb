import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class MapFunctionPipe {
    transform(value, functionToMap) {
        return functionToMap(value);
    }
    static ɵfac = function MapFunctionPipe_Factory(t) { return new (t || MapFunctionPipe)(); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "mapTo", type: MapFunctionPipe, pure: true, standalone: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MapFunctionPipe, [{
        type: Pipe,
        args: [{
                name: 'mapTo',
                standalone: true,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLXRvLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3BpcGVzL21hcC10by5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQU1wRCxNQUFNLE9BQU8sZUFBZTtJQUMxQixTQUFTLENBQU8sS0FBUSxFQUFFLGFBQWtDO1FBQzFELE9BQU8sYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7eUVBSFUsZUFBZTt3RUFBZixlQUFlOztpRkFBZixlQUFlO2NBSjNCLElBQUk7ZUFBQztnQkFDSixJQUFJLEVBQUUsT0FBTztnQkFDYixVQUFVLEVBQUUsSUFBSTthQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnbWFwVG8nLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBNYXBGdW5jdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtPFQsIFI+KHZhbHVlOiBULCBmdW5jdGlvblRvTWFwOiAoLi4uYXJnczogVFtdKSA9PiBSKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9NYXAodmFsdWUpO1xuICB9XG59XG4iXX0=