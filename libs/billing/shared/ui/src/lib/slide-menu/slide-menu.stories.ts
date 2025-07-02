import { CommonModule } from '@angular/common';
import { applicationConfig, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SlideMenuComponent } from './slide-menu.component';

const localhost = 'http://localhost:8080';

window['Config'] = {
  'ocapi-url': localhost,
  'openid-auth-url': localhost,
  'openid-url': localhost,
  'openid-client-id': 'ocapi',
};

interface ExtraArgs {
  content: string;
}

export default {
  title: 'Shared/ui/Slide Menu',
  component: SlideMenuComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, BrowserAnimationsModule],
    }),
    applicationConfig({
      providers: [{ provide: 'Window', useValue: window }],
    }),
  ],
  parameters: {},
} as Meta<SlideMenuComponent & ExtraArgs>;

export const Primary: StoryObj<SlideMenuComponent & ExtraArgs> = {
  render: (args) => {
    const { content, title, showMenu, ...props } = args;

    return {
      props,
      template: `<tg-slide-menu [showMenu]="${showMenu}" title="${title}">${content}</tg-slide-menu>`,
    };
  },
  args: {
    content: 'This is the content',
    title: 'This is the title',
    showMenu: false,
  },
  argTypes: {
    title: {
      control: 'text',
    },
    content: {
      control: 'text',
    },
    showMenu: {
      control: 'boolean',
    },
  },
};
