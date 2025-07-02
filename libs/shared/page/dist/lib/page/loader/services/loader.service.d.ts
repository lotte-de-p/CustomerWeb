import { BehaviorSubject } from 'rxjs';
import { LoaderData } from '../loaderData.model';
import * as i0 from "@angular/core";
export declare class LoaderService {
    skipUrls: string[];
    loadingStatus: BehaviorSubject<LoaderData>;
    start(): void;
    stop(): void;
    shouldDisableLoader(url: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoaderService>;
}
//# sourceMappingURL=loader.service.d.ts.map