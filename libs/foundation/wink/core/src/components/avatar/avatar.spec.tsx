import { Avatar } from './avatar';
import { newSpecPage } from '@stencil/core/testing';

describe('wink-avatar', () => {
  it('should render the default avatar correctly', async () => {
    const page = await newSpecPage({
      components: [Avatar],
      html: `
        <wink-avatar>
        </wink-avatar>
        `,
    });
    expect(page.root).toEqualHtml(`
    <wink-avatar>
      <mock:shadow-root>
        <wink-icon appearance="secondary" icon="user" size="md"></wink-icon>
      </mock:shadow-root>
    </wink-avatar>
    `);
  });

  it('should render the avatar with an image if a src is set', async () => {
    const page = await newSpecPage({
      components: [Avatar],
      html: `
        <wink-avatar src="path/to/image">
        </wink-avatar>
        `,
    });
    expect(page.root).toEqualHtml(`
    <wink-avatar src="path/to/image">
      <mock:shadow-root>
        <img alt="avatar image" src="path/to/image">
      </mock:shadow-root>
    </wink-avatar>
    `);
  });

  it('should render the avatar different size if a size is set', async () => {
    const page = await newSpecPage({
      components: [Avatar],
      html: `
       <wink-avatar size="lg">
       </wink-avatar>
       `,
    });
    expect(page.root).toEqualHtml(`
   <wink-avatar size="lg">
     <mock:shadow-root>
       <wink-icon appearance="secondary" icon="user" size="lg"></wink-icon>
     </mock:shadow-root>
   </wink-avatar>
   `);
  });
});
