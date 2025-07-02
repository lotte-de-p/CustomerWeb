import { newSpecPage } from '@stencil/core/testing';
import { NotificationBadge } from './notification-badge';

describe('wink-notification-badge', () => {
  it('should create an instance of NotificationBadge class component', () => {
    const comp = new NotificationBadge();

    expect(comp).toBeInstanceOf(NotificationBadge);
  });

  it('should render the element wink-notification-badge', async () => {
    const page = await newSpecPage({
      components: [NotificationBadge],
      html: `<wink-notification-badge></wink-notification-badge>`,
    });

    expect(page.root).toEqualHtml(`
   <wink-notification-badge size="md">
      <mock:shadow-root>
        <span class="notification-badge">
           <div class="dot"></div>
        </span>
        <slot></slot>
      </mock:shadow-root>
    </wink-notification-badge>
  `);
  });

  it('should render the element wink-notification-badge with size md and the dot', async () => {
    const page = await newSpecPage({
      components: [NotificationBadge],
      html: `<wink-notification-badge size="md"></wink-notification-badge>`,
    });

    expect(page.root).toEqualHtml(`
    <wink-notification-badge size="md">
      <mock:shadow-root>
        <span class="notification-badge">
          <div class="dot"></div>
        </span>
        <slot></slot>
      </mock:shadow-root>
    </wink-notification-badge>
  `);
  });

  it('should render the element wink-notification-badge with size md and the numerical-text', async () => {
    const page = await newSpecPage({
      components: [NotificationBadge],
      html: `<wink-notification-badge size="md" show-number amount="1"></wink-notification-badge>`,
    });

    expect(page.root).toEqualHtml(`
    <wink-notification-badge amount="1" show-number size="md">
      <mock:shadow-root>
        <span class="notification-badge">
          1
        </span>
        <slot></slot>
      </mock:shadow-root>
    </wink-notification-badge>
  `);
  });

  it('should render the element wink-notification-badge with size sm and no text', async () => {
    const page = await newSpecPage({
      components: [NotificationBadge],
      html: `<wink-notification-badge size="sm"></wink-notification-badge>`,
    });

    expect(page.root).toEqualHtml(`
    <wink-notification-badge size="sm">
      <mock:shadow-root>
         <span class="notification-badge"></span>
         <slot></slot>
       </mock:shadow-root>
    </wink-notification-badge>
  `);
  });
});
