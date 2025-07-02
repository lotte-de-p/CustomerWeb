import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { AccordionListComponent } from './accordion-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';

export default {
  title: 'UI/Accordion',
  component: AccordionListComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, BrowserAnimationsModule, AccordionItemComponent],
    }),
  ],
  parameters: {
    backgrounds: {
      default: 'grey',
      values: [
        {
          name: 'grey',
          value: '#f7f6f6',
        },
      ],
    },
  },
  argTypes: {
    accordionHeaderRef: {
      table: {
        disable: true,
      },
    },
    accordionContentRef: {
      table: {
        disable: true,
      },
    },
    isNotLastItem: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<AccordionListComponent<{ title: string; content: string }>>;

type Story = StoryObj<AccordionListComponent<{ title: string; content: string }>>;

const items = Array.from({ length: 5 }, (_, i: number) => {
  return {
    title: `Title ${++i}`,
    content: `Content ${i} ... Bacon ipsum dolor amet ham hock fatback ground round brisket shankle filet mignon picanha.
            Venison chuck buffalo jowl beef beef ribs shankle spare ribs chislic fatback ham hock.`,
  };
});

const template = `<tg-demo-accordion-list [items]='items'
          [rendition]='rendition'
          [accordionHeaderRef]='headerTemplateRef'
          [accordionContentRef]='contentTemplateRef'>

        <ng-template #headerTemplateRef let-item=''>
            <h5 class='heading--nomargin'>{{item.title}}</h5>
        </ng-template>

        <ng-template #contentTemplateRef let-item=''>
            <div>{{item.content}}</div>
        </ng-template>

    </tg-demo-accordion-list>`;

export const Primary: Story = {
  args: {
    items,
  },
  render: (args) => ({
    props: args,
    template,
  }),
};

export const Panel: Story = {
  args: {
    rendition: 'panel',
    items,
  },
  render: (args) => ({
    props: args,
    template,
  }),
};
