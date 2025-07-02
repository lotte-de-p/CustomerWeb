import { Category } from 'udl';
import { DataLayerService, DatalayerEventNames, DataLayerAttributes } from '@telenet/ng-lib-datalayer';
import { TrackingInfoDirective } from './tracking-info.directive';
import { TranslateService } from '@ngx-translate/core';
import { TrackEventInfo } from './track-event-info.interface';
import { TrackingEvent } from '../../interfaces';
import * as i0 from "@angular/core";
export declare class TrackInputEventDirective {
    private readonly dataLayerService;
    private readonly trackingInfoDirective;
    private readonly translateService;
    trackInputEvent?: TrackEventInfo;
    blockData: boolean;
    constructor(dataLayerService: DataLayerService, trackingInfoDirective: TrackingInfoDirective, translateService: TranslateService);
    trackingEvent(event: TrackingEvent): void;
    addFormFieldCompletedEvent(attributes: DataLayerAttributes, category?: Category, type?: DatalayerEventNames): Promise<boolean>;
    private getCart;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrackInputEventDirective, [null, { host: true; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TrackInputEventDirective, "tg-form-input[trackInputEvent], tg-form-input-checkbox[trackInputEvent], tg-form-radio-with-input-vertical[trackInputEvent], tg-form-radio-horizontal[trackInputEvent],tg-form-radio-with-input-horizontal[trackInputEvent], tg-form-checkbox[trackInputEvent],tg-form-checkbox-with-card[trackInputEvent], tg-form-radio-with-card[trackInputEvent],tg-form-dropdown[trackInputEvent], tg-form-radio-with-card-mini-no-select-box-labels[trackInputEvent],tg-form-dropdown[trackInputEvent], tg-form-radio-with-card-mini-with-select-box-labels[trackInputEvent]", never, { "trackInputEvent": { "alias": "trackInputEvent"; "required": false; }; "blockData": { "alias": "blockData"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=track-input-event.directive.d.ts.map