import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class CacheService {
    private cache;
    get(key: string): Observable<unknown>;
    add(key: string, response$: Observable<unknown | Object>): void;
    remove(key: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CacheService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CacheService>;
}
//# sourceMappingURL=cache.service.d.ts.map