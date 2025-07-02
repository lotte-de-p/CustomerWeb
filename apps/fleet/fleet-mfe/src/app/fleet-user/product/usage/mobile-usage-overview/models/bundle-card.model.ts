import { ChartConfiguration } from '../../shared/components/liquid-chart/models/chart-configuration';
import { ProductSubscriptionsInterface } from '../../../../shared/interfaces/product/product-subscriptions.interface';

export class BundleCard {
  bundleName?: string;
  lineIdentifier?: string;
  nextUpdateDate?: number;
  isGroupView?: boolean;
  hasTableView?: boolean;
  chartConfig?: ChartConfiguration;
  chartConfigs?: ChartConfiguration[];
  bundleTableData?: ProductSubscriptionsInterface[];
  redirectionUrl?: string;
  outOfBundle?: string;
}
