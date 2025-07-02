import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class DomService {
    findElementById(id) {
        return document.getElementById(id);
    }
    appendScript(src, id, onLoadCallback) {
        const script = document.createElement('script');
        script.src = src;
        script.id = id || '';
        script.onload = onLoadCallback || null;
        const head = document.getElementsByTagName('head')[0];
        head.appendChild(script);
    }
    scrollToElement(selector, delay) {
        setTimeout(() => {
            const elementToScroll = document.querySelector(selector);
            if (elementToScroll) {
                elementToScroll.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, delay);
    }
    scrollToStartElement(selector, delay) {
        setTimeout(() => {
            const elementToScrollAtStart = document.querySelector(selector);
            if (elementToScrollAtStart) {
                elementToScrollAtStart.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, delay);
    }
    scrollToTop() {
        setTimeout(() => {
            const elementToScroll = document.querySelector('#app');
            if (elementToScroll) {
                elementToScroll.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    getDomElement(selector) {
        return document.querySelector(selector);
    }
    toggleBodyOverflow(isBodyScrollable) {
        const domElement = this.getDomElement('body');
        if (domElement) {
            domElement.style.overflow = isBodyScrollable ? 'hidden' : '';
        }
    }
    scrollElementToTop(selector) {
        const domElement = this.getDomElement(selector);
        if (domElement) {
            domElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
    }
    scrollIntoViewBasedOnId(id) {
        const elementToScroll = document.getElementById(id);
        elementToScroll?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    static ɵfac = function DomService_Factory(t) { return new (t || DomService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DomService, factory: DomService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DomService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2RvbS9kb20tc2VydmljZS9kb20tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sVUFBVTtJQUNyQixlQUFlLENBQUMsRUFBVTtRQUN4QixPQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELFlBQVksQ0FBQyxHQUFXLEVBQUUsRUFBVyxFQUFFLGNBQTZCO1FBQ2xFLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDakIsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsY0FBYyxJQUFJLElBQUksQ0FBQztRQUN2QyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsZUFBZSxDQUFDLFFBQWdCLEVBQUUsS0FBYztRQUM5QyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6RCxJQUFJLGVBQWUsRUFBRSxDQUFDO2dCQUNwQixlQUFlLENBQUMsY0FBYyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUMxRSxDQUFDO1FBQ0gsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELG9CQUFvQixDQUFDLFFBQWdCLEVBQUUsS0FBYztRQUNuRCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxzQkFBc0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hFLElBQUksc0JBQXNCLEVBQUUsQ0FBQztnQkFDM0Isc0JBQXNCLENBQUMsY0FBYyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUNoRixDQUFDO1FBQ0gsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELFdBQVc7UUFDVCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2RCxJQUFJLGVBQWUsRUFBRSxDQUFDO2dCQUNwQixlQUFlLENBQUMsY0FBYyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDekQsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGFBQWEsQ0FBQyxRQUFnQjtRQUM1QixPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELGtCQUFrQixDQUFDLGdCQUF5QjtRQUMxQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLElBQUksVUFBVSxFQUFFLENBQUM7WUFDZixVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDL0QsQ0FBQztJQUNILENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxRQUFnQjtRQUNqQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELElBQUksVUFBVSxFQUFFLENBQUM7WUFDZixVQUFVLENBQUMsY0FBYyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNwRSxDQUFDO0lBQ0gsQ0FBQztJQUVELHVCQUF1QixDQUFDLEVBQVU7UUFDaEMsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwRCxlQUFlLEVBQUUsY0FBYyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMzRSxDQUFDO29FQTlEVSxVQUFVO2dFQUFWLFVBQVUsV0FBVixVQUFVLG1CQUZULE1BQU07O2lGQUVQLFVBQVU7Y0FIdEIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRG9tU2VydmljZSB7XG4gIGZpbmRFbGVtZW50QnlJZChpZDogc3RyaW5nKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICB9XG5cbiAgYXBwZW5kU2NyaXB0KHNyYzogc3RyaW5nLCBpZD86IHN0cmluZywgb25Mb2FkQ2FsbGJhY2s/OiBWb2lkRnVuY3Rpb24pOiB2b2lkIHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgIHNjcmlwdC5pZCA9IGlkIHx8ICcnO1xuICAgIHNjcmlwdC5vbmxvYWQgPSBvbkxvYWRDYWxsYmFjayB8fCBudWxsO1xuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgfVxuXG4gIHNjcm9sbFRvRWxlbWVudChzZWxlY3Rvcjogc3RyaW5nLCBkZWxheT86IG51bWJlcik6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudFRvU2Nyb2xsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICBpZiAoZWxlbWVudFRvU2Nyb2xsKSB7XG4gICAgICAgIGVsZW1lbnRUb1Njcm9sbC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdjZW50ZXInIH0pO1xuICAgICAgfVxuICAgIH0sIGRlbGF5KTtcbiAgfVxuXG4gIHNjcm9sbFRvU3RhcnRFbGVtZW50KHNlbGVjdG9yOiBzdHJpbmcsIGRlbGF5PzogbnVtYmVyKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50VG9TY3JvbGxBdFN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICBpZiAoZWxlbWVudFRvU2Nyb2xsQXRTdGFydCkge1xuICAgICAgICBlbGVtZW50VG9TY3JvbGxBdFN0YXJ0LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ3N0YXJ0JyB9KTtcbiAgICAgIH1cbiAgICB9LCBkZWxheSk7XG4gIH1cblxuICBzY3JvbGxUb1RvcCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnRUb1Njcm9sbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKTtcbiAgICAgIGlmIChlbGVtZW50VG9TY3JvbGwpIHtcbiAgICAgICAgZWxlbWVudFRvU2Nyb2xsLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0RG9tRWxlbWVudChzZWxlY3Rvcjogc3RyaW5nKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH1cblxuICB0b2dnbGVCb2R5T3ZlcmZsb3coaXNCb2R5U2Nyb2xsYWJsZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERvbUVsZW1lbnQoJ2JvZHknKTtcbiAgICBpZiAoZG9tRWxlbWVudCkge1xuICAgICAgZG9tRWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IGlzQm9keVNjcm9sbGFibGUgPyAnaGlkZGVuJyA6ICcnO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbEVsZW1lbnRUb1RvcChzZWxlY3Rvcjogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RG9tRWxlbWVudChzZWxlY3Rvcik7XG4gICAgaWYgKGRvbUVsZW1lbnQpIHtcbiAgICAgIGRvbUVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogJ3N0YXJ0JywgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbEludG9WaWV3QmFzZWRPbklkKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50VG9TY3JvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgZWxlbWVudFRvU2Nyb2xsPy5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdjZW50ZXInIH0pO1xuICB9XG59XG4iXX0=