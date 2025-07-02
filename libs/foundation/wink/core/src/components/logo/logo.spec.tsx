import { newSpecPage } from '@stencil/core/testing';
import { Logo } from './logo';

describe('wink-logo', () => {
  it('render logo tags with no attributes ', async () => {
    const page = await newSpecPage({
      components: [Logo],
      html: `<wink-logo/>`,
    });

    expect(page.root).toEqualHtml(`
        <wink-logo>
         <mock:shadow-root>
           <picture>
               <source media="(max-width: 576px)" srcset="/assets/shared/logos/telenet/telenet-yellow.svg">
               <img alt="logo telenet" src="/assets/shared/logos/telenet/telenet-yellow.svg">
           </picture>
        </mock:shadow-root>
    `);
  });

  it('will render another logo based on the appearance prop ', async () => {
    const page = await newSpecPage({
      components: [Logo],
      html: `<wink-logo appearance="base"/>`,
    });

    expect(page.root).toEqualHtml(`
      <wink-logo appearance="base">
       <mock:shadow-root>
         <picture>
             <img alt="logo base" src="/assets/shared/logos/base/base.svg">
         </picture>
      </mock:shadow-root>
    `);
  });

  it("will render the default alt tag when it get 'Inspect element to check' value on alt prop ", async () => {
    const page = await newSpecPage({
      components: [Logo],
      html: `<wink-logo appearance="base" alt="Inspect element to check"/>`,
    });

    expect(page.root).toEqualHtml(`
      <wink-logo appearance="base" alt="Inspect element to check" >
       <mock:shadow-root>
         <picture>
             <img alt="logo base" src="/assets/shared/logos/base/base.svg">
         </picture>
      </mock:shadow-root>
    `);
  });

  it('will render a clickable logo based on the href prop', async () => {
    const page = await newSpecPage({
      components: [Logo],
      html: `<wink-logo href="https://www2.telenet.be/residential/nl" appearance="base" />`,
    });

    expect(page.root).toEqualHtml(`
          <wink-logo href="https://www2.telenet.be/residential/nl" appearance="base" >
           <mock:shadow-root>
           <a href="https://www2.telenet.be/residential/nl"  target="_self" >
              <picture>
                  <img alt="logo base" src="/assets/shared/logos/base/base.svg">
              </picture>
             </a>
          </mock:shadow-root>
      `);
  });

  it('will change the target of link (if the href prop is not empty) based on the target prop', async () => {
    const page = await newSpecPage({
      components: [Logo],
      html: `<wink-logo href="https://www2.telenet.be/residential/nl" appearance="base" />`,
    });

    expect(page.root).toEqualHtml(`
          <wink-logo href="https://www2.telenet.be/residential/nl" appearance="base" >
           <mock:shadow-root>
           <a href="https://www2.telenet.be/residential/nl"  target="_self" >
              <picture>
                  <img alt="logo base" src="/assets/shared/logos/base/base.svg">
              </picture>
             </a>
          </mock:shadow-root>
      `);
  });
});
