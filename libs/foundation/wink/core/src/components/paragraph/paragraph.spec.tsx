import { newSpecPage } from '@stencil/core/testing';
import { Paragraph } from './paragraph';

describe('wink-paragraph', () => {
  it('Should create an instance of Paragraph comp', () => {
    const comp = new Paragraph();

    expect(comp).toBeInstanceOf(Paragraph);
  });

  it('should render the element wink-paragraph', async () => {
    const page = await newSpecPage({
      components: [Paragraph],
      html: `<wink-paragraph></wink-paragraph>`,
    });

    expect(page.root).toEqualHtml(`
      <wink-paragraph class="font--body-regular">
        <mock:shadow-root>
        <slot></slot>
        </mock:shadow-root>
      </wink-paragraph>
    `);
  });

  it('should render the element wink-paragraph of appearance caption', async () => {
    const page = await newSpecPage({
      components: [Paragraph],
      html: `<wink-paragraph appearance="caption"></wink-paragraph>`,
    });

    expect(page.root).toEqualHtml(`
    <wink-paragraph class="font--caption-regular" appearance="caption">
        <mock:shadow-root>
        <slot></slot>
        </mock:shadow-root>
      </wink-paragraph>
    `);
  });

  it('should render the element wink-paragraph of appearance caption and size bold', async () => {
    const page = await newSpecPage({
      components: [Paragraph],
      html: `<wink-paragraph appearance="caption" size="bold"></wink-paragraph>`,
    });

    expect(page.root).toEqualHtml(`
    <wink-paragraph class="font--caption-bold" appearance="caption" size="bold">
        <mock:shadow-root>
        <slot></slot>
        </mock:shadow-root>
      </wink-paragraph>
    `);
  });
});
