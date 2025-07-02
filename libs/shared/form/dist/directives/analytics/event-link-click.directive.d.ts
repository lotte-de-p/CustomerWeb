import { ElementRef } from '@angular/core';
import { DataLayerAttributes, DataLayerService } from '@telenet/ng-lib-datalayer';
import { Category } from 'udl';
import { TrackingInfoDirective } from './tracking-info.directive';
import { TrackEventInfo } from './track-event-info.interface';
import * as i0 from "@angular/core";
export declare class EventLinkClickDirective {
    private readonly dataLayerService;
    private readonly trackingInfoDirective;
    clickEvent?: TrackEventInfo;
    constructor(_elmRef: ElementRef, dataLayerService: DataLayerService, trackingInfoDirective: TrackingInfoDirective);
    trackingEvent(event: Event & {
        value: string;
    }): void;
    addEvent(attributes: DataLayerAttributes, category?: Category): Promise<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EventLinkClickDirective, [null, null, { host: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EventLinkClickDirective, "a[clickEvent], span[clickEvent]", never, { "clickEvent": { "alias": "clickEvent"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=event-link-click.directive.d.ts.map