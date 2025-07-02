import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { CircularPlayerComponent } from './circular-player.component';

export default {
  title: 'Form/CircularPlayerComponent',
  component: CircularPlayerComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<CircularPlayerComponent>;

type Story = StoryObj<CircularPlayerComponent>;
export const Primary: Story = {
  args: {
    audio: 'test',
  },
};
