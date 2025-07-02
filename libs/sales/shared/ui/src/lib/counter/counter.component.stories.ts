import { Meta } from '@storybook/angular';
import { CounterComponent } from './counter.component';

export default {
  title: 'sales/shared/ui/CounterComponent',
  component: CounterComponent,
} as Meta<CounterComponent>;

export const Primary = {
  render: (args: CounterComponent) => ({
    props: args,
  }),
  args: {
    minValue: 0,
    maxValue: 5,
    value: 0,
  },
};
