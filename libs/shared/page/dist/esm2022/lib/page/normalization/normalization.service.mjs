import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class NormalizationService {
    normalizeKey(key) {
        if (key) {
            return key
                .replace(/ /g, '-')
                .replace(/\./g, '-')
                .replace(/[^0-9a-zA-Z_-]/g, '')
                .toLowerCase();
        }
        return '';
    }
    normalizeList(list) {
        if (list?.length) {
            return list.map((item) => this.normalizeKey(item));
        }
        return [];
    }
    static ɵfac = function NormalizationService_Factory(t) { return new (t || NormalizationService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NormalizationService, factory: NormalizationService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NormalizationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9ybWFsaXphdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9wYWdlL25vcm1hbGl6YXRpb24vbm9ybWFsaXphdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxvQkFBb0I7SUFDL0IsWUFBWSxDQUFDLEdBQW1CO1FBQzlCLElBQUksR0FBRyxFQUFFLENBQUM7WUFDUixPQUFPLEdBQUc7aUJBQ1AsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7aUJBQ2xCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO2lCQUNuQixPQUFPLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDO2lCQUM5QixXQUFXLEVBQUUsQ0FBQztRQUNuQixDQUFDO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsYUFBYSxDQUFDLElBQXNCO1FBQ2xDLElBQUksSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7OEVBakJVLG9CQUFvQjtnRUFBcEIsb0JBQW9CLFdBQXBCLG9CQUFvQixtQkFGbkIsTUFBTTs7aUZBRVAsb0JBQW9CO2NBSGhDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE5vcm1hbGl6YXRpb25TZXJ2aWNlIHtcbiAgbm9ybWFsaXplS2V5KGtleT86IHN0cmluZyB8IG51bGwpIHtcbiAgICBpZiAoa2V5KSB7XG4gICAgICByZXR1cm4ga2V5XG4gICAgICAgIC5yZXBsYWNlKC8gL2csICctJylcbiAgICAgICAgLnJlcGxhY2UoL1xcLi9nLCAnLScpXG4gICAgICAgIC5yZXBsYWNlKC9bXjAtOWEtekEtWl8tXS9nLCAnJylcbiAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIG5vcm1hbGl6ZUxpc3QobGlzdD86IHN0cmluZ1tdIHwgbnVsbCkge1xuICAgIGlmIChsaXN0Py5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBsaXN0Lm1hcCgoaXRlbSkgPT4gdGhpcy5ub3JtYWxpemVLZXkoaXRlbSkpO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cbn1cbiJdfQ==