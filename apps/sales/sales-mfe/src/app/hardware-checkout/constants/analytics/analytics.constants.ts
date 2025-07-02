import { CategoryBuilder } from 'udl';
import { EventCategoryEnum } from '@telenet/ng-lib-datalayer';

export const HardwareCheckoutAnalytics = {
  PAGE_ID: 'sales',
  PAGE_NAME: 'sales',
  FLOW: 'MARKETING',
  SOURCE: 'MARKETING',
  INTENT: 'hardware',
};

export const PrimaryCategories = {
  SALES: new CategoryBuilder().withPrimaryCategory(EventCategoryEnum.PRIMARY_CATEGORY_SALES).build(),
};

export const Errors = {
  CONSOLE_MESSAGE: 'Analytics issue: ',
};
