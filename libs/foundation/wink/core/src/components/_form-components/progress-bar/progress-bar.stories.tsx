import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { BADGES } from '../../../models';
import { PROGRESS_BGS } from './models/progress-bar.types';

export default {
  title: 'FORM COMPONENTS/Progress bar',
  component: 'ProgressBar',
  parameters: {
    badges: [BADGES.ready],
  },
  tags: ['hidden'],
  argTypes: {
    percent: {
      description: 'The percentage of the progress bar that should be filled.',
      control: {
        type: 'number',
        max: 100,
      },
    },
    trailColor: {
      control: 'inline-radio',
      options: Object.values(PROGRESS_BGS),
      description: 'The color of the progress bar background.',
      table: {
        defaultValue: { summary: PROGRESS_BGS.default },
      },
    },
    ariaLabel: {
      description: 'The label to display above the progress bar.',
      control: {
        type: 'text',
      },
    },
    progressId: {
      description: 'The id of the progress bar.',
      control: {
        type: 'text',
      },
    },
    showLabel: {
      description: 'Whether or not to display the label.',
    },
  },
  args: {
    percent: 50,
    ariaLabel: 'Stap 3/6',
    trailColor: PROGRESS_BGS.default,
    progressId: 'progress-bar-01',
    showLabel: false,
  },
  render: (args) =>
    html`<wink-progress-bar
      percent="${args.percent}"
      aria-label="${args.ariaLabel}"
      trail-color="${args.trailColor}"
      progress-id="${args.progressId}"
      show-label="${args.showLabel}"></wink-progress-bar>`,
} as Meta;

export const Default = {};
