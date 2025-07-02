import { newSpecPage } from '@stencil/core/testing';
import { Tooltip } from './tooltip';

describe('wink-tooltip', () => {
  it('should create an instance of Tooltip class component', () => {
    const comp = new Tooltip();

    expect(comp).toBeInstanceOf(Tooltip);
  });

  it('should render the element wink-tooltip with the question mark icon if withIcon is true and no icon is set', async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<wink-tooltip>
        test content
      </wink-tooltip>`,
    });

    expect(page.root).toEqualHtml(`
    <wink-tooltip>
      <mock:shadow-root>
         <div class="tooltip">
           <wink-icon appearance="default" icon="question-shape" icon-color="subtlest" size="md"></wink-icon>
           <span class="center tooltip__content top">
             <slot></slot>
           </span>
         </div>
      </mock:shadow-root>
      test content
    </wink-tooltip>
  `);
  });

  it('should render the element wink-tooltip with the correct mark icon if withIcon is true and an icon is set', async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<wink-tooltip
        icon="search">
        test content
      </wink-tooltip>`,
    });

    expect(page.root).toEqualHtml(`
      <wink-tooltip icon="search">
       <mock:shadow-root>
         <div class="tooltip">
           <wink-icon appearance="default" icon="search" icon-color="subtlest" size="md"></wink-icon>
           <span class="center tooltip__content top">
             <slot></slot>
           </span>
         </div>
       </mock:shadow-root>
       test content
     </wink-tooltip>
  `);
  });

  it('should render the element wink-tooltip with the correct class for vertical position', async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<wink-tooltip
        vertical-position="bottom">
        test content
      </wink-tooltip>`,
    });

    expect(page.root).toEqualHtml(`
    <wink-tooltip vertical-position="bottom">
       <mock:shadow-root>
         <div class="tooltip">
           <wink-icon appearance="default" icon="question-shape" icon-color="subtlest" size="md"></wink-icon>
           <span class="bottom center tooltip__content">
             <slot></slot>
           </span>
         </div>
       </mock:shadow-root>
       test content
     </wink-tooltip>
  `);
  });

  it('should render the element wink-tooltip with the correct class for horizontal position', async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<wink-tooltip
        horizontal-position="bottom">
        test content
      </wink-tooltip>`,
    });

    expect(page.root).toEqualHtml(`
    <wink-tooltip horizontal-position="bottom">
       <mock:shadow-root>
         <div class="tooltip">
           <wink-icon appearance="default" icon="question-shape" icon-color="subtlest" size="md"></wink-icon>
           <span class="bottom tooltip__content top">
             <slot></slot>
           </span>
         </div>
       </mock:shadow-root>
       test content
     </wink-tooltip>
  `);
  });

  it('should render the element wink-tooltip with the link as the trigger if withicon is set', async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<wink-tooltip
        hide-icon>
        test content
        <wink-link appearance="default" size="inherit" slot="trigger"> Onze klanten zijn onze prioriteit. </wink-link>
      </wink-tooltip>`,
    });

    expect(page.root).toEqualHtml(`
   <wink-tooltip hide-icon>
       <mock:shadow-root>
         <div class="tooltip">
           <slot name="trigger"></slot>
           <span class="center tooltip__content top">
             <slot></slot>
           </span>
         </div>
       </mock:shadow-root>
       test content
       <wink-link appearance="default" size="inherit" slot="trigger">
         Onze klanten zijn onze prioriteit.
       </wink-link>
     </wink-tooltip>
  `);
  });
});
