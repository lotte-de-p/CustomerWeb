import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_ROUTES } from './app.routes';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'AppComponent',
  component: AppComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(StoreModule.forRoot()),
        importProvidersFrom(EffectsModule.forRoot()),
        importProvidersFrom(RouterTestingModule.withRoutes(APP_ROUTES)),
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
      ],
    }),
  ],
} as Meta<AppComponent>;

type Story = StoryObj<AppComponent>;

export const Primary: Story = {
  args: {},
};
