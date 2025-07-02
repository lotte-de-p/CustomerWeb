import { applicationConfig, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { ImageSrcPathModule, TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { AutocompleteComponent } from './autocomplete.component';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'Form/Autocomplete',
  component: AutocompleteComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule, ImageSrcPathModule.forRoot('')],
    }),
    applicationConfig({
      providers: [importProvidersFrom(TgTranslateTestingModule.forRoot())],
    }),
  ],
} as Meta<AutocompleteComponent<string>>;

type Story = StoryObj<AutocompleteComponent<string>>;

export const Primary: Story = {
  args: {
    autocompleteItems: ['test', 'name', 'pony'],
    createLabel: (item: string) => item,
    placeholder: 'Zoek',
  },
};
