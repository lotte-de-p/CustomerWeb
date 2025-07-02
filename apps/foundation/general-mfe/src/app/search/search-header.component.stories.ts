import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { SearchHeaderComponent } from '@general/search/feat-header';
import { provideHttpClient } from '@angular/common/http';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'SearchHeaderComponent',
  component: SearchHeaderComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(StoreModule.forRoot()),
        importProvidersFrom(EffectsModule.forRoot()),
        provideHttpClient(),
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        { provide: 'Window', useValue: window },
        SearchHeaderComponent,
      ],
    }),
  ],
} as Meta<SearchHeaderComponent>;

type Story = StoryObj<SearchHeaderComponent>;
export const Primary: Story = {
  args: {},
};
