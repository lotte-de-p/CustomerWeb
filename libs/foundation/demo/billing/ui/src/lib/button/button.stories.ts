import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'UI/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
} as Meta<ButtonComponent>;

type Story = StoryObj<ButtonComponent>;

const template = (label: string) => {
  return `<tg-demo-button
            [disabled]='disabled'
            [icon]='icon'
            [size]='size'
            [iconAlignment]='iconAlignment'
            [rendition]='rendition'>
            ${label}
        </tg-demo-button>`;
};

export const Primary: Story = {
  args: {
    rendition: 'primary',
  },
  render: (args) => ({
    props: args,
    template: template('Primary'),
  }),
};

export const PrimarySmall: Story = {
  args: {
    size: 'small',
    icon: 'plus',
    rendition: 'primary',
  },
  render: (args) => ({
    props: args,
    template: template('Select'),
  }),
};

export const PrimaryDisabled: Story = {
  args: {
    disabled: true,
    rendition: 'primary',
  },
  render: (args) => ({
    props: args,
    template: template('Primary Disabled'),
  }),
};

export const Secondary: Story = {
  args: {
    rendition: 'secondary',
  },
  render: (args) => ({
    props: args,
    template: template('Secondary'),
  }),
};
