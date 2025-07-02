import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { TelenetMissingTranslationService } from './missing-translation.service';
import * as i0 from "@angular/core";
export declare class TelenetMissingTranslationHandler implements MissingTranslationHandler {
    private readonly telenetMissingTranslationService;
    handle(params: MissingTranslationHandlerParams): string;
    constructor(telenetMissingTranslationService: TelenetMissingTranslationService);
    static ɵfac: i0.ɵɵFactoryDeclaration<TelenetMissingTranslationHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TelenetMissingTranslationHandler>;
}
//# sourceMappingURL=missing-translation.handler.d.ts.map