import { ElementRef } from '@angular/core';
import { DataLayerAttributes, DataLayerService } from '@telenet/ng-lib-datalayer';
import { Category } from 'udl';
import { TrackEventInfo } from './track-event-info.interface';
import { TrackingInfoDirective } from './tracking-info.directive';
import * as i0 from "@angular/core";
export declare class ButtonClickDirective {
    private readonly dataLayerService;
    private readonly trackingInfoDirective;
    clickEvent: TrackEventInfo;
    constructor(_elmRef: ElementRef, dataLayerService: DataLayerService, trackingInfoDirective: TrackingInfoDirective);
    eventHandler(): void;
    addEvent(attributes: DataLayerAttributes, category?: Category): Promise<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonClickDirective, [null, null, { host: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ButtonClickDirective, "button[clickEvent]", never, { "clickEvent": { "alias": "clickEvent"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=button-click.directive.d.ts.map