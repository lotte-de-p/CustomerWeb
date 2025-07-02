import { CommonModule } from '@angular/common';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PayByMobileSkeletonComponent } from './pay-by-mobile-skeleton.component';

export default {
  title: 'PayByMobile/dumb/ui/skeletons/Pay By Mobile Page Skeleton',
  component: PayByMobileSkeletonComponent,
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
  render: (args: PayByMobileSkeletonComponent) => ({
    props: args,
  }),
};
