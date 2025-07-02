import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { MessageComponent } from './message.component';
import { MessageService } from '../message.service';
import { TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { MockMessageService } from '../mock/mock-message.service';

export default {
  title: 'Message',
  component: MessageComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TranslateModule.forRoot()],
      providers: [
        TranslateService,
        TranslateStore,
        {
          provide: MessageService,
          useClass: MockMessageService,
        },
      ],
    }),
  ],
} as Meta<MessageComponent>;

type Story = StoryObj<MessageComponent>;

export const Success: Story = {
  args: {
    messageGroupName: 'message-group-1',
  },
};

export const Error: Story = {
  args: {
    messageGroupName: 'message-group-2',
  },
};

export const Warning: Story = {
  args: {
    messageGroupName: 'message-group-3',
  },
};

export const Information: Story = {
  args: {
    messageGroupName: 'message-group-4',
  },
};

export const InformationWarning: Story = {
  args: {
    messageGroupName: 'message-group-5',
  },
};
