import { applicationConfig, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PaginationComponent } from './pagination.component';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'search/Pagination',
  component: PaginationComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        importProvidersFrom(StoreModule.forRoot()),
        importProvidersFrom(EffectsModule.forRoot()),
        importProvidersFrom(StoreDevtoolsModule.instrument()),
      ],
    }),
  ],
  argTypes: {
    pageChanged: { action: 'Page Changed' },
  },
} as Meta<PaginationComponent>;

type Story = StoryObj<PaginationComponent>;

export const Default: Story = {
  args: {
    totalPages: 10,
    currentPageNumber: 1,
  },
};
