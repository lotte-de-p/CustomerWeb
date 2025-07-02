import { StepLayoutOptionsInterface } from '../step-layout-options.interface';
import { StepAnalyticsOptions } from './step-analytics-options.interface';
export interface StepConfig {
    key: string;
    imagePath?: string;
    header?: string;
    component: unknown;
    isFinalState?: boolean;
    headerDescription?: boolean;
    headerSubDescription?: boolean;
    layoutOptions?: StepLayoutOptionsInterface;
    analyticsOptions?: StepAnalyticsOptions;
}
//# sourceMappingURL=step-config.interface.d.ts.map