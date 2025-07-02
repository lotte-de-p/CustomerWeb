import { OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as i0 from "@angular/core";
type ObsTypes = unknown | string | boolean | object;
export declare abstract class AbstractBaseComponent implements OnDestroy {
    protected unsubscribe$: Subject<unknown>;
    onDestroy(): void;
    ngOnDestroy(): void;
    obs<T>(obs: Observable<T>): Observable<T>;
    obs(obs: Observable<ObsTypes>): Observable<ObsTypes>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AbstractBaseComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AbstractBaseComponent, "app-abstract-base", never, {}, {}, never, never, false, never>;
}
export {};
//# sourceMappingURL=abstract-base.component.d.ts.map