import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class RecaptchaService {
    private readonly window;
    constructor(window: Window);
    getRecaptchaToken(action: string, siteKey: string): Observable<string>;
    private getRecaptcha;
    private executeRecaptcha;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecaptchaService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecaptchaService>;
}
//# sourceMappingURL=recaptcha.service.d.ts.map