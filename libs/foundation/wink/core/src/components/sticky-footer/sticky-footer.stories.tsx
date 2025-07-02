import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { BADGES } from '../../models/badges.types';

export default {
  title: 'COMPONENTS/Sticky footer',
  component: 'StickyFooter',
  parameters: {
    badges: [BADGES.ready],
  },
  argTypes: {
    current: {
      description: 'Current describes the current position where you are in the progress.',
      control: {
        type: 'number',
      },
    },
    final: {
      description:
        'Final describes the final position of the progress and is a toggle to display both ProgressLabel and ProgressBar.',
      control: {
        type: 'number',
      },
    },
    buttonLeftText: {
      description: 'The buttonLeftText property, when filled in, adds the secondary button on the left side.',
      control: 'text',
      table: {
        defaultValue: { summary: 'Back' },
      },
    },
    buttonRightText: {
      description: 'The buttonRightText property, when filled in, adds the primary button on the right side.',
      control: 'text',
      table: {
        defaultValue: { summary: 'Next' },
      },
    },
  },
  args: {
    buttonLeftText: 'Back',
    buttonRightText: 'Next',
    current: 0,
    final: 0,
  },
  render: (args) =>
    html`<wink-sticky-footer
      current="${args.current}"
      final="${args.final}"
      has-progress="${args.hasProgress}"
      button-left-text="${args.buttonLeftText}"
      button-right-text="${args.buttonRightText}"></wink-sticky-footer>`,
} as Meta;

export const Default = {};
export const BackOnly = {
  args: {
    buttonRightText: '',
  },
};
export const NextOnly = {
  args: {
    buttonLeftText: '',
  },
};
export const Progress = {
  args: {
    current: 5,
    final: 12,
  },
};
