import { applicationConfig, Meta } from '@storybook/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { provideHttpClient } from '@angular/common/http';
import { MobileLineDetailsComponent } from '@sim-management/feat-mobile-line-details';

const localhost = 'http://localhost:8080';

window['Config'] = {
  'ocapi-url': localhost,
  'omapi-url': localhost + '/omapi',
  'oauth-url': localhost,
  'openid-url': localhost,
  'oauth-client-id': 'ocapi',
};

export default {
  title: 'Sim management',
  component: MobileLineDetailsComponent,
  declareComponent: false,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(StoreModule.forRoot()),
        importProvidersFrom(BrowserAnimationsModule),
        importProvidersFrom(EffectsModule.forRoot()),
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        provideHttpClient(),
        { provide: 'Window', useValue: window },
      ],
    }),
  ],
  parameters: {},
} as Meta<MobileLineDetailsComponent>;

export const Primary = {
  render: (args: MobileLineDetailsComponent) => ({
    props: args,
  }),
};
