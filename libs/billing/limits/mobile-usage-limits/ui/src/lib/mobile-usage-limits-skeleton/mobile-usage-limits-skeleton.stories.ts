import { CommonModule } from '@angular/common';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobileUsageLimitsSkeletonComponent } from './mobile-usage-limits-skeleton.component';

export default {
  title: 'MobileUsageLimits/dumb/ui/skeletons/Mobile Usage Limits Skeleton',
  component: MobileUsageLimitsSkeletonComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, BrowserAnimationsModule],
    }),
    applicationConfig({
      providers: [{ provide: 'Window', useValue: {} }],
    }),
  ],
  parameters: {},
};

export const Skeleton = {
  render: (args: MobileUsageLimitsSkeletonComponent) => ({
    props: args,
  }),
};
