import { newSpecPage } from '@stencil/core/testing';
import { ColumnCount } from './column-count';

describe('wink-column-count', () => {
  it('should create an instance of ColumnCount class component', () => {
    const comp = new ColumnCount();

    expect(comp).toBeInstanceOf(ColumnCount);
  });

  it('should render the element wink-column-count', async () => {
    const page = await newSpecPage({
      components: [ColumnCount],
      html: `<wink-column-count></wink-column-count>`,
    });

    expect(page.root).toEqualHtml(`
    <wink-column-count>
      <mock:shadow-root>
         <div class="cols cols-count-4"><slot></slot></div>
      </mock:shadow-root>
    </wink-column-count>
  `);
  });
});
