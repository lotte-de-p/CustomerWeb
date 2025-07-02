import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class JsonUrlService {
    private readonly window;
    private static readonly JSON_URL;
    private readonly libng;
    constructor(window: Window);
    compress(object: unknown): Observable<string>;
    decompress(compressedString: string): Observable<unknown>;
    static ɵfac: i0.ɵɵFactoryDeclaration<JsonUrlService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<JsonUrlService>;
}
//# sourceMappingURL=json-url.service.d.ts.map