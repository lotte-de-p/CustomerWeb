import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { importProvidersFrom } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { ProfileManagementComponent } from './profile-management.component';
import { profileManagementRoutes } from './profile-management.routes';

export default {
  title: 'ProfileManagementComponent',
  component: ProfileManagementComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterModule],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(StoreModule.forRoot()),
        importProvidersFrom(EffectsModule.forRoot()),
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        importProvidersFrom(HttpClientTestingModule),
        importProvidersFrom(RouterTestingModule.withRoutes(profileManagementRoutes)),
      ],
    }),
  ],
} as Meta<ProfileManagementComponent>;

export const Primary = {
  render: (args: ProfileManagementComponent) => ({
    props: args,
  }),
  args: {},
};
