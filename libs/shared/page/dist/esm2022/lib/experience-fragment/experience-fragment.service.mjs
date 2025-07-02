import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LanguageService } from '../page';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class ExperienceFragmentService {
    baseUrl = `/content/experience-fragments`;
    #http = inject(HttpClient);
    #languageService = inject(LanguageService);
    fetchExpFragment(experienceFragmentName, expFragmentLocation) {
        const expFragmentPath = this.generateExpFragmentFullPath(experienceFragmentName, expFragmentLocation);
        const expFragmentUrl = new URL(window.location.href).origin.concat(expFragmentPath);
        return this.#http
            .get(expFragmentUrl + '?wcmmode=disabled', { responseType: 'text' })
            .pipe(map((result) => this.getSectionContent(result)));
    }
    generateExpFragmentFullPath(experienceFragmentName, expFragmentLocation) {
        const breakpoint = /\/nl\/|\/fr\/|\/en\//;
        const splitPathWithLanguage = expFragmentLocation?.split(breakpoint);
        if (splitPathWithLanguage?.length >= 2 && experienceFragmentName) {
            return `${splitPathWithLanguage[0]}/${this.#languageService.getLanguage()}/${splitPathWithLanguage[1]}/${experienceFragmentName}`;
        }
        return '';
    }
    getSectionContent(result) {
        const startStr = '<div class="cmp cmp-responsivegrid">';
        const endStrPos = result.lastIndexOf('</div>');
        return result.slice(result.indexOf(startStr), endStrPos);
    }
    static ɵfac = function ExperienceFragmentService_Factory(t) { return new (t || ExperienceFragmentService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ExperienceFragmentService, factory: ExperienceFragmentService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExperienceFragmentService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZXJpZW5jZS1mcmFnbWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9leHBlcmllbmNlLWZyYWdtZW50L2V4cGVyaWVuY2UtZnJhZ21lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUMxQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBS3JDLE1BQU0sT0FBTyx5QkFBeUI7SUFDcEMsT0FBTyxHQUFHLCtCQUErQixDQUFDO0lBRWpDLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0IsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRXBELGdCQUFnQixDQUFDLHNCQUE4QixFQUFFLG1CQUEyQjtRQUMxRSxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUMsc0JBQXNCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUN0RyxNQUFNLGNBQWMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFcEYsT0FBTyxJQUFJLENBQUMsS0FBSzthQUNkLEdBQUcsQ0FBQyxjQUFjLEdBQUcsbUJBQW1CLEVBQUUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLENBQUM7YUFDbkUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRU8sMkJBQTJCLENBQUMsc0JBQThCLEVBQUUsbUJBQTJCO1FBQzdGLE1BQU0sVUFBVSxHQUFHLHNCQUFzQixDQUFDO1FBQzFDLE1BQU0scUJBQXFCLEdBQUcsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXJFLElBQUkscUJBQXFCLEVBQUUsTUFBTSxJQUFJLENBQUMsSUFBSSxzQkFBc0IsRUFBRSxDQUFDO1lBQ2pFLE9BQU8sR0FBRyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQ3ZFLHFCQUFxQixDQUFDLENBQUMsQ0FDekIsSUFBSSxzQkFBc0IsRUFBRSxDQUFDO1FBQy9CLENBQUM7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxNQUFjO1FBQ3RDLE1BQU0sUUFBUSxHQUFHLHNDQUFzQyxDQUFDO1FBQ3hELE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQzttRkEvQlUseUJBQXlCO2dFQUF6Qix5QkFBeUIsV0FBekIseUJBQXlCLG1CQUZ4QixNQUFNOztpRkFFUCx5QkFBeUI7Y0FIckMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IGluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vcGFnZSc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBFeHBlcmllbmNlRnJhZ21lbnRTZXJ2aWNlIHtcbiAgYmFzZVVybCA9IGAvY29udGVudC9leHBlcmllbmNlLWZyYWdtZW50c2A7XG5cbiAgcmVhZG9ubHkgI2h0dHAgPSBpbmplY3QoSHR0cENsaWVudCk7XG4gIHJlYWRvbmx5ICNsYW5ndWFnZVNlcnZpY2UgPSBpbmplY3QoTGFuZ3VhZ2VTZXJ2aWNlKTtcblxuICBmZXRjaEV4cEZyYWdtZW50KGV4cGVyaWVuY2VGcmFnbWVudE5hbWU6IHN0cmluZywgZXhwRnJhZ21lbnRMb2NhdGlvbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBjb25zdCBleHBGcmFnbWVudFBhdGggPSB0aGlzLmdlbmVyYXRlRXhwRnJhZ21lbnRGdWxsUGF0aChleHBlcmllbmNlRnJhZ21lbnROYW1lLCBleHBGcmFnbWVudExvY2F0aW9uKTtcbiAgICBjb25zdCBleHBGcmFnbWVudFVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLm9yaWdpbi5jb25jYXQoZXhwRnJhZ21lbnRQYXRoKTtcblxuICAgIHJldHVybiB0aGlzLiNodHRwXG4gICAgICAuZ2V0KGV4cEZyYWdtZW50VXJsICsgJz93Y21tb2RlPWRpc2FibGVkJywgeyByZXNwb25zZVR5cGU6ICd0ZXh0JyB9KVxuICAgICAgLnBpcGUobWFwKChyZXN1bHQpID0+IHRoaXMuZ2V0U2VjdGlvbkNvbnRlbnQocmVzdWx0KSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUV4cEZyYWdtZW50RnVsbFBhdGgoZXhwZXJpZW5jZUZyYWdtZW50TmFtZTogc3RyaW5nLCBleHBGcmFnbWVudExvY2F0aW9uOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGJyZWFrcG9pbnQgPSAvXFwvbmxcXC98XFwvZnJcXC98XFwvZW5cXC8vO1xuICAgIGNvbnN0IHNwbGl0UGF0aFdpdGhMYW5ndWFnZSA9IGV4cEZyYWdtZW50TG9jYXRpb24/LnNwbGl0KGJyZWFrcG9pbnQpO1xuXG4gICAgaWYgKHNwbGl0UGF0aFdpdGhMYW5ndWFnZT8ubGVuZ3RoID49IDIgJiYgZXhwZXJpZW5jZUZyYWdtZW50TmFtZSkge1xuICAgICAgcmV0dXJuIGAke3NwbGl0UGF0aFdpdGhMYW5ndWFnZVswXX0vJHt0aGlzLiNsYW5ndWFnZVNlcnZpY2UuZ2V0TGFuZ3VhZ2UoKX0vJHtcbiAgICAgICAgc3BsaXRQYXRoV2l0aExhbmd1YWdlWzFdXG4gICAgICB9LyR7ZXhwZXJpZW5jZUZyYWdtZW50TmFtZX1gO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBwcml2YXRlIGdldFNlY3Rpb25Db250ZW50KHJlc3VsdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdGFydFN0ciA9ICc8ZGl2IGNsYXNzPVwiY21wIGNtcC1yZXNwb25zaXZlZ3JpZFwiPic7XG4gICAgY29uc3QgZW5kU3RyUG9zID0gcmVzdWx0Lmxhc3RJbmRleE9mKCc8L2Rpdj4nKTtcbiAgICByZXR1cm4gcmVzdWx0LnNsaWNlKHJlc3VsdC5pbmRleE9mKHN0YXJ0U3RyKSwgZW5kU3RyUG9zKTtcbiAgfVxufVxuIl19