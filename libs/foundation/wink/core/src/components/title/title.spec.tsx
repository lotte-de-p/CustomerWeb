import { newSpecPage } from '@stencil/core/testing';
import { Title } from './title';

describe('wink-title', () => {
  it('Should create an instance of Title comp', () => {
    const comp = new Title();

    expect(comp).toBeInstanceOf(Title);
  });

  it('should render the element wink-title', async () => {
    const page = await newSpecPage({
      components: [Title],
      html: `<wink-title></wink-title>`,
    });

    expect(page.root).toEqualHtml(`
    <wink-title class="">
      <mock:shadow-root>
      <h2></h2>
      </mock:shadow-root>
    </wink-title>
  `);
  });

  it('should render the element wink-title h1', async () => {
    const page = await newSpecPage({
      components: [Title],
      html: `<wink-title html-tag="h1"></wink-title>`,
    });

    expect(page.root).toEqualHtml(`
      <wink-title html-tag="h1" class="">
        <mock:shadow-root>
        <h1></h1>
        </mock:shadow-root>
      </wink-title>
    `);
  });

  it('should render the element wink-title h2 with no spacing', async () => {
    const page = await newSpecPage({
      components: [Title],
      html: `<wink-title spacing-y="none"></wink-title>`,
    });

    expect(page.root).toEqualHtml(`
    <wink-title class="spacing-none" spacing-y="none">
      <mock:shadow-root>
      <h2></h2>
      </mock:shadow-root>
    </wink-title>
    `);
  });

  it('should render the element wink-title with div that have h1 class', async () => {
    const page = await newSpecPage({
      components: [Title],
      html: `<wink-title html-tag="h1" no-seo></wink-title>`,
    });

    expect(page.root).toEqualHtml(`
    <wink-title  html-tag="h1" no-seo>
      <mock:shadow-root>
      <div class="h1"></div>
      </mock:shadow-root>
    </wink-title>
    `);
  });
});
