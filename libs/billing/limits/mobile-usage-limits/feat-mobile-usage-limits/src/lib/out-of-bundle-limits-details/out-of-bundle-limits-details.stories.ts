import { CommonModule } from '@angular/common';
import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { OutOfBundleLimitsDetailsComponent } from './out-of-bundle-limits-details.component';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TgFormsModule } from '@telenet/ng-lib-form';

export default {
  title: 'MobileUsageLimits/feature/outofbundlelimits/Out Of Bundle Limits Details',
  component: OutOfBundleLimitsDetailsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        FormsModule,
        TgFormsModule,
        TgTranslateTestingModule.forRoot({
          language: 'en',
          translations: require('../../assets/i18n/en.json'),
        }),
      ],
    }),
    applicationConfig({
      providers: [{ provide: 'Window', useValue: window }, importProvidersFrom(BrowserAnimationsModule)],
    }),
  ],
  parameters: {},
} as Meta<OutOfBundleLimitsDetailsComponent>;

export const Primary = {
  render: (args: OutOfBundleLimitsDetailsComponent) => ({
    props: args,
  }),
  args: {
    currentOutOfBundleLimit: { currentUsage: 10, limit: { enabled: true, value: 50 } },
    isMember: false,
    outOfBundleLimits: ['0', '5', '10', '20', '50', 'NO LIMIT'],
    showOutOfBundleLimit: true,
  },
};

export const isMemberNoLimits = {
  render: (args: OutOfBundleLimitsDetailsComponent) => ({
    props: args,
  }),
  args: {
    currentOutOfBundleLimit: { currentUsage: 10, limit: { enabled: false, value: null } },
    isMember: true,
    outOfBundleLimits: ['0', '5', '10', '20', '50', 'NO LIMIT'],
    showOutOfBundleLimit: false,
  },
};

export const isMember = {
  render: (args: OutOfBundleLimitsDetailsComponent) => ({
    props: args,
  }),
  args: {
    currentOutOfBundleLimit: { currentUsage: 10, limit: { enabled: true, value: 20 } },
    isMember: true,
    outOfBundleLimits: ['0', '5', '10', '20', '50', 'NO LIMIT'],
    showOutOfBundleLimit: false,
  },
};
