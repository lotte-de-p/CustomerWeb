import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class OmapiCacheService<T> {
    private cache;
    get(key: string): Observable<T>;
    add(key: string, response$: Observable<T>): void;
    remove(key: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OmapiCacheService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OmapiCacheService<any>>;
}
//# sourceMappingURL=omapi-cache.service.d.ts.map