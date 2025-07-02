import { EventEmitter } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import * as i0 from "@angular/core";
export declare class NoAvailableAppointmentDateComponent {
    readonly languageService: LanguageService;
    loadMoreSlots: EventEmitter<any>;
    messageGroup: string;
    disableLoadMore: boolean;
    constructor(languageService: LanguageService);
    loadSlots(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NoAvailableAppointmentDateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NoAvailableAppointmentDateComponent, "app-no-available-appointment-date", never, { "messageGroup": { "alias": "messageGroup"; "required": false; }; "disableLoadMore": { "alias": "disableLoadMore"; "required": false; }; }, { "loadMoreSlots": "loadMoreSlots"; }, never, never, false, never>;
}
//# sourceMappingURL=no-available-appointment-date.component.d.ts.map