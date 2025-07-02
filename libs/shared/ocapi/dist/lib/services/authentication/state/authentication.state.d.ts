import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class AuthenticationState {
    private readonly injector;
    private readonly authenticatedSubject;
    private isStatusKnown;
    constructor(injector: Injector);
    setAuthenticated(authenticated: boolean): void;
    getAuthenticated(): Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthenticationState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthenticationState>;
}
//# sourceMappingURL=authentication.state.d.ts.map