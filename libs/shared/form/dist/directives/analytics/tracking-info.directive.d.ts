import { Cart } from 'udl';
import * as i0 from "@angular/core";
export interface TrackingInfo {
    category?: string;
    primaryCategory?: string;
    subCategory?: string;
    intent: string;
    flowType: string;
    cart?: Cart;
}
export declare class TrackingInfoDirective {
    trackingInfo: TrackingInfo;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrackingInfoDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TrackingInfoDirective, "[trackingInfo]", never, { "trackingInfo": { "alias": "trackingInfo"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=tracking-info.directive.d.ts.map