import * as udl from 'udl';
import { DataLayerAttributes } from './data-layer-attributes';
export interface EventProperties {
    eventInfo: udl.EventInfo;
    attributes: DataLayerAttributes;
    strategy?: udl.AnalyticsCallFireStrategyEnum;
    category?: udl.Category;
    directCallLabel?: udl.DirectCallLabelEnum;
}
//# sourceMappingURL=udl-event-properties.d.ts.map