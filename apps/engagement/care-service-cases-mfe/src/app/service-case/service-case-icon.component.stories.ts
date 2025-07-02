import { Meta, moduleMetadata } from '@storybook/angular';
import { ServiceCaseIconComponent } from '@care-service-cases/service-case/ui';
import { Type } from '@care-service-cases/service-case/data-access';

export default {
  title: 'Service Cases/Library/Service case icon',
  component: ServiceCaseIconComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  argTypes: {
    type: {
      options: Object.values(Type),
      control: { type: 'radio' },
    },
  },
} as Meta<ServiceCaseIconComponent>;

export const ServiceCaseIcon = {
  render: (params: { type: Type }) => ({
    props: {
      type: params.type,
    },
  }),
  args: {
    type: Type.OTHER,
  },
};
