import { newSpecPage } from '@stencil/core/testing';
import { StickyFooter } from './sticky-footer';
import { resetIdsInTest } from '../../utils/utils';

describe('wink-sticky-footer', () => {
  it('should create an instance of StickyFooter class component', () => {
    const comp = new StickyFooter();

    expect(comp).toBeInstanceOf(StickyFooter);
  });

  it('should render the element wink-sticky-footer', async () => {
    const page = await newSpecPage({
      components: [StickyFooter],
      html: `<wink-sticky-footer></wink-sticky-footer>`,
    });

    expect(resetIdsInTest(page.root)).toEqualHtml(`
    <wink-sticky-footer>
        <div class="container">
         <div class="section-left">
           <wink-button appearance="secondary" element="button" size="md" status="none" text="Back" type="button" width="full"></wink-button>
         </div>
         <div class="section-right">
           <wink-button appearance="primary" element="button" size="md" status="none" text="Next" type="button" width="full"></wink-button>
         </div>
      </div>
    </wink-sticky-footer>
  `);
  });

  it('should render the element with button on left only, when buttonRightText is empty', async () => {
    const page = await newSpecPage({
      components: [StickyFooter],
      html: `<wink-sticky-footer button-right-text=""></wink-sticky-footer>`,
    });

    expect(resetIdsInTest(page.root)).toEqualHtml(`
      <wink-sticky-footer button-right-text="">
        <div class="container">
         <div class="section-left">
           <wink-button appearance="secondary" element="button" size="md" status="none" text="Back" type="button" width="full"></wink-button>
         </div>
         <div class="section-right"></div>
      </div>
    </wink-sticky-footer>
    `);
  });

  it('should render the element with button on right only, when buttonLeftText is empty', async () => {
    const page = await newSpecPage({
      components: [StickyFooter],
      html: `<wink-sticky-footer button-left-text=""></wink-sticky-footer>`,
    });

    expect(resetIdsInTest(page.root)).toEqualHtml(`
      <wink-sticky-footer button-left-text="">
        <div class="container">
         <div class="section-left"></div>
         <div class="section-right">
           <wink-button appearance="primary" element="button" size="md" status="none" text="Next" type="button" width="full"></wink-button>
         </div>
      </div>
    </wink-sticky-footer>
    `);
  });

  it('should render the element with ProgressBar and ProgressLabel, when final is larger then 0', async () => {
    const page = await newSpecPage({
      components: [StickyFooter],
      html: `<wink-sticky-footer final="3"></wink-sticky-footer>`,
    });

    expect(resetIdsInTest(page.root)).toEqualHtml(`
      <wink-sticky-footer final="3">
        <wink-progress-bar percent="0" progressid="" trail-color="default"></wink-progress-bar>
        </wink-progress-bar>
        <div class="container">
         <div class="section-left">
           <wink-button appearance="secondary" element="button" size="md" status="none" text="Back" type="button" width="full"></wink-button>
         </div>
         <wink-paragraph appearance="body" paragraph-color="default" size="regular">
           0/3
         </wink-paragraph>

         <div class="section-right">
           <wink-button appearance="primary" element="button" size="md" status="none" text="Next" type="button" width="full"></wink-button>
         </div>
      </div>
    </wink-sticky-footer>
    `);
  });
});
