import { CommonModule } from '@angular/common';
import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { PremiumServicesComponent } from './premium-services.component';
import { PremiumService } from '@billing/mobile-usage-limits/data-access';
import { importProvidersFrom } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { provideNgxMask } from 'ngx-mask';

export default {
  title: 'MobileUsageLimits/feature/premiumservices/Premium Service Details',
  component: PremiumServicesComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        TgTranslateTestingModule.forRoot({
          translations: require('../../assets/i18n/en.json'),
        }),
      ],
    }),
    applicationConfig({
      providers: [
        { provide: 'Window', useValue: {} },
        importProvidersFrom(BrowserAnimationsModule),
        importProvidersFrom(StoreModule.forRoot()),
        importProvidersFrom(EffectsModule.forRoot()),
        provideHttpClient(),
        provideNgxMask(),
      ],
    }),
  ],
  parameters: {},
} as Meta<PremiumServicesComponent>;

export const Primary = {
  render: (args: PremiumServicesComponent) => ({
    props: args,
  }),
  args: {
    isMember: false,
    currentPremiumLimit: 30,
    currentPremiumUsageLimit: { limit: { value: 30, enabled: true }, currentUsage: 100 } as PremiumService,
    showPremiumServices: true,
  },
};

export const onLoadPremiumServices = {
  render: (args: PremiumServicesComponent) => ({
    props: args,
  }),
  args: {
    isMember: false,
    currentPremiumLimit: 30,
    currentPremiumUsageLimit: { limit: { value: 30, enabled: true }, currentUsage: 100 } as PremiumService,
    showPremiumServices: true,
  },
};

export const isMember = {
  render: (args: PremiumServicesComponent) => ({
    props: args,
  }),
  args: {
    isMember: true,
    currentPremiumLimit: 30,
    currentPremiumUsageLimit: { limit: { value: 30, enabled: true }, currentUsage: 100 } as PremiumService,
    showPremiumServices: false,
  },
};
