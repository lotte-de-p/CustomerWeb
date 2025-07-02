import { newSpecPage } from '@stencil/core/testing';
import { Search } from './search';

describe('wink-search', () => {
  it('should create an instance of Search class component', () => {
    const comp = new Search();

    expect(comp).toBeInstanceOf(Search);
  });

  it('should render the element wink-search', async () => {
    const page = await newSpecPage({
      components: [Search],
      html: `<wink-search></wink-search>`,
    });

    expect(page.root).toEqualHtml(`
    <wink-search value="">
       <wink-input appearance="search" enterkeyhint-option="none" icon-left="search" icon-right="backspace" input-mode-option="text" placeholder="" type="text" value=""></wink-input>
    </wink-search>
  `);
  });
});
