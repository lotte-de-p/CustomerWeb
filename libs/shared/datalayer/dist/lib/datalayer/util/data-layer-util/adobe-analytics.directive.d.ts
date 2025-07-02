import { DataLayerService } from '../../datalayer.service';
import { DatalayerEventNames } from '../../enums/datalayer-event-names.enum';
import * as i0 from "@angular/core";
export declare class AdobeAnalyticsDirective {
    private readonly dataLayerService;
    clickPushToAnalytics: {
        attributeName: string;
        eventName: DatalayerEventNames;
        messageGroupName: string;
    };
    onClick(): void;
    constructor(dataLayerService: DataLayerService);
    pushToAnalytics(attributeName: string, eventName: DatalayerEventNames, messageGroupName: string): void;
    private addEventToDataLayer;
    static ɵfac: i0.ɵɵFactoryDeclaration<AdobeAnalyticsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AdobeAnalyticsDirective, "[clickPushToAnalytics]", never, { "clickPushToAnalytics": { "alias": "clickPushToAnalytics"; "required": false; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=adobe-analytics.directive.d.ts.map