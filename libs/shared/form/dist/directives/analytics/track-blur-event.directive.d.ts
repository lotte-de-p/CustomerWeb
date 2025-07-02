import { DataLayerAttributes, DataLayerService } from '@telenet/ng-lib-datalayer';
import { Category } from 'udl';
import { TrackingInfoDirective } from './tracking-info.directive';
import { TranslateService } from '@ngx-translate/core';
import { TrackEventInfo } from './track-event-info.interface';
import * as i0 from "@angular/core";
export declare class TrackBlurEventDirective {
    private readonly dataLayerService;
    private readonly trackingInfoDirective;
    private readonly translateService;
    trackBlurEvent?: TrackEventInfo;
    blockData: boolean;
    constructor(dataLayerService: DataLayerService, trackingInfoDirective: TrackingInfoDirective, translateService: TranslateService);
    trackingEvent(event: Event & {
        target: HTMLInputElement;
    }): void;
    addFormFieldCompletedEvent(attributes: DataLayerAttributes, category?: Category): Promise<boolean>;
    private getCart;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrackBlurEventDirective, [null, { host: true; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TrackBlurEventDirective, "input[trackBlurEvent]", never, { "trackBlurEvent": { "alias": "trackBlurEvent"; "required": false; }; "blockData": { "alias": "blockData"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=track-blur-event.directive.d.ts.map