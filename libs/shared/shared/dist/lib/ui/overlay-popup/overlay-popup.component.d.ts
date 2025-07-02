import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class OverlayPopupComponent {
    title: string;
    subtitle: string;
    content: string;
    enableClose: boolean;
    primaryButtonText: string;
    secondaryButtonText: string;
    primaryButtonClicked: EventEmitter<void>;
    secondaryButtonClicked: EventEmitter<void>;
    closeButtonClicked: EventEmitter<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<OverlayPopupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OverlayPopupComponent, "app-overlay-popup", never, { "title": { "alias": "title"; "required": false; }; "subtitle": { "alias": "subtitle"; "required": false; }; "content": { "alias": "content"; "required": false; }; "enableClose": { "alias": "enableClose"; "required": false; }; "primaryButtonText": { "alias": "primaryButtonText"; "required": false; }; "secondaryButtonText": { "alias": "secondaryButtonText"; "required": false; }; }, { "primaryButtonClicked": "primaryButtonClicked"; "secondaryButtonClicked": "secondaryButtonClicked"; "closeButtonClicked": "closeButtonClicked"; }, never, never, true, never>;
}
//# sourceMappingURL=overlay-popup.component.d.ts.map