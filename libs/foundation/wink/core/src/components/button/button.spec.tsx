import { Button } from './button';
import { newSpecPage } from '@stencil/core/testing';

describe('wink-button', () => {
  it('should render default button correctly', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
        <wink-button text="test button" element="button" type="button" appearance="primary" size="md" status="none">
        </wink-button>
        `,
    });
    expect(page.root).toEqualHtml(`
      <wink-button text="test button" size="md" status="none" element="button" type="button" appearance="primary">
         <mock:shadow-root>
         <button class="button primary" type="button" aria-label="test button">test button</button>
         </mock:shadow-root>
      </wink-button>
    `);
  });
  it('should render small secondary button correctly', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
       <wink-button text="button secondary" element="input" type="button" appearance="secondary" size="sm" status="none" >
       </wink-button>
          `,
    });
    expect(page.root).toEqualHtml(`
       <wink-button text="button secondary" element="input" type="button" appearance="secondary" size="sm" status="none">
          <mock:shadow-root>
          <input class="button type-input secondary size-sm" type="button" value="button secondary" role="button" aria-label="button secondary">
          </mock:shadow-root>
       </wink-button>
     `);
  });
  it('should render tertiary button with left icon correctly', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
      <wink-button text="button tertiary" element="a" appearance="tertiary" size="md" status="none" href="telenet.be" has-icon icon-position="left" icon="arrow-left">
      </wink-button>
         `,
    });
    expect(page.root).toEqualHtml(`
      <wink-button text="button tertiary" element="a" exportparts="icon, icon-arrow-left" appearance="tertiary" size="md" status="none" href="telenet.be" has-icon icon-position="left" icon="arrow-left">
         <mock:shadow-root>
         <a href="telenet.be" class="button type-a tertiary icon-left" target="_self" aria-label="button tertiary" role="button">
            <wink-icon appearance="default" icon="arrow-left" size="md"></wink-icon>
            button tertiary
         </a>
         </mock:shadow-root>
      </wink-button>
    `);
  });
  it('should render secondary button with right icon correctly', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
      <wink-button text="button" element="button" appearance="secondary" size="md" state="none" has-icon="true" icon-position="right" icon="arrow-left">
      </wink-button>
         `,
    });
    expect(page.root).toEqualHtml(`
      <wink-button text="button" element="button" exportparts="icon, icon-arrow-left" appearance="secondary" size="md" state="none" has-icon="true" icon-position="right" icon="arrow-left">
        <mock:shadow-root>
         <button class="button icon-right secondary" type="button" aria-label="button">
            <wink-icon appearance="default" icon="arrow-left" size="md"></wink-icon>
            button
          </button>
        </mock:shadow-root>
      </wink-button>
    `);
  });
  it('should render primary loading button correctly', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
       <wink-button text="" loading-text="Loading" element="button" appearance="primary" size="md" status="loading" type="button">
       </wink-button>
          `,
    });
    expect(page.root).toEqualHtml(`
       <wink-button text="" loading-text="Loading" element="button" appearance="primary" size="md" status="loading" type="button" >
          <mock:shadow-root>
          <button class="button primary state-loading" disabled aria-disabled="true" type="button">
            <svg aria-hidden="" enable-background="new 0 0 40 40" height="24px" id="loader-1" version="1.1" viewBox="0 0 40 40" width="24px" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px">
             <path d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z" fill="#000" opacity="0.2"></path>
             <path d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z" fill="#000">
               <animateTransform attributeName="transform" attributeType="xml" dur="0.5s" from="0 20 20" repeatCount="indefinite" to="360 20 20" type="rotate"></animateTransform>
             </path>
           </svg>
            Loading
          </button>
          </mock:shadow-root>
       </wink-button>
     `);
  });
  it('should render primary icon button correctly', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
      <wink-button element="button" appearance="primary" size="md" status="none" type="button" has-icon icon-position="left" icon="accessibility">
      </wink-button>
         `,
    });
    expect(page.root).toEqualHtml(`
      <wink-button element="button" exportparts="icon, icon-accessibility" appearance="primary" size="md" status="none" type="button" has-icon icon-position="left" icon="accessibility">
         <mock:shadow-root>
         <button class="button icon-button primary icon-left" type="button">
            <wink-icon appearance="default" icon="accessibility" size="md"></wink-icon>
         </button>
         </mock:shadow-root>
      </wink-button>
    `);
  });
});
