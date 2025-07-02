import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class WindowService {
    paramMap = new Map();
    constructor() {
        this.init();
    }
    getParamValue(key) {
        return this.paramMap.get(key);
    }
    getParamMap() {
        return this.paramMap;
    }
    goTo(params) {
        const url = [];
        params.forEach((_value, _key) => {
            if (!!_key && !!_value) {
                url.push(_key + '=' + _value);
            }
        });
        window.location.search = '?' + url.join('&');
    }
    hasParam(key) {
        return this.paramMap.get(key) !== undefined;
    }
    init() {
        const search = window.location.search.substring(1);
        search.split('&').forEach((comb) => {
            const keyValue = comb.split('=');
            this.paramMap.set(keyValue[0], keyValue[1]);
        });
    }
    setWindowObjects(object, value) {
        window[object] = value;
    }
    static ɵfac = function WindowService_Factory(t) { return new (t || WindowService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: WindowService, factory: WindowService.ɵfac });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WindowService, [{
        type: Injectable
    }], () => [], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3dpbmRvdy93aW5kb3cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczQyxNQUFNLE9BQU8sYUFBYTtJQUNQLFFBQVEsR0FBd0IsSUFBSSxHQUFHLEVBQWtCLENBQUM7SUFFM0U7UUFDRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsYUFBYSxDQUFDLEdBQVc7UUFDdkIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxDQUFDLE1BQTJCO1FBQzlCLE1BQU0sR0FBRyxHQUFhLEVBQUUsQ0FBQztRQUV6QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBYyxFQUFFLElBQVksRUFBRSxFQUFFO1lBQzlDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3ZCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQztZQUNoQyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQVc7UUFDbEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLENBQUM7SUFDOUMsQ0FBQztJQUVPLElBQUk7UUFDVixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbkQsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNqQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnQkFBZ0IsQ0FBSSxNQUFjLEVBQUUsS0FBUTtRQUMxQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7dUVBMUNVLGFBQWE7Z0VBQWIsYUFBYSxXQUFiLGFBQWE7O2lGQUFiLGFBQWE7Y0FEekIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdpbmRvd1NlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IHBhcmFtTWFwOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGdldFBhcmFtVmFsdWUoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbU1hcC5nZXQoa2V5KTtcbiAgfVxuXG4gIGdldFBhcmFtTWFwKCk6IE1hcDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnBhcmFtTWFwO1xuICB9XG5cbiAgZ29UbyhwYXJhbXM6IE1hcDxzdHJpbmcsIHN0cmluZz4pOiB2b2lkIHtcbiAgICBjb25zdCB1cmw6IHN0cmluZ1tdID0gW107XG5cbiAgICBwYXJhbXMuZm9yRWFjaCgoX3ZhbHVlOiBzdHJpbmcsIF9rZXk6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKCEhX2tleSAmJiAhIV92YWx1ZSkge1xuICAgICAgICB1cmwucHVzaChfa2V5ICsgJz0nICsgX3ZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggPSAnPycgKyB1cmwuam9pbignJicpO1xuICB9XG5cbiAgaGFzUGFyYW0oa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbU1hcC5nZXQoa2V5KSAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCkge1xuICAgIGNvbnN0IHNlYXJjaCA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpO1xuXG4gICAgc2VhcmNoLnNwbGl0KCcmJykuZm9yRWFjaCgoY29tYikgPT4ge1xuICAgICAgY29uc3Qga2V5VmFsdWUgPSBjb21iLnNwbGl0KCc9Jyk7XG4gICAgICB0aGlzLnBhcmFtTWFwLnNldChrZXlWYWx1ZVswXSwga2V5VmFsdWVbMV0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0V2luZG93T2JqZWN0czxUPihvYmplY3Q6IHN0cmluZywgdmFsdWU6IFQpIHtcbiAgICB3aW5kb3dbb2JqZWN0XSA9IHZhbHVlO1xuICB9XG59XG4iXX0=