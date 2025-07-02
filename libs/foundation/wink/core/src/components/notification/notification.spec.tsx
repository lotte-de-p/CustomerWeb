import { newSpecPage } from '@stencil/core/testing';
import { Notification } from './notification';

describe('wink-notification', () => {
  let comp: Notification;

  beforeEach(() => {
    comp = new Notification();
  });

  it('should assign false value to isNotificationVisible', () => {
    comp.isNotificationVisible = true;

    comp['closeNotification']();

    expect(comp.isNotificationVisible).toBe(false);
  });

  it('should render the notification component by information', async () => {
    const page = await newSpecPage({
      components: [Notification],
      html: `<wink-notification></wink-notification>`,
    });
    expect(page.root).toEqualHtml(`
      <wink-notification exportparts="icon, icon-cross-small, icon-information-shape">
        <mock:shadow-root>
          <div class="notification information">
            <wink-icon icon="information-shape" size="md"></wink-icon>
            <div class="notification-text">
                <slot name="heading"></slot>
               <slot name="content"></slot>
            </div>
          </div>
        </mock:shadow-root>
      </wink-notification>
    `);
  });

  it('should render the success of the notification component', async () => {
    const page = await newSpecPage({
      components: [Notification],
      html: `<wink-notification appearance="success"></wink-notification>`,
    });
    expect(page.root).toEqualHtml(`
      <wink-notification appearance="success" exportparts="icon, icon-cross-small, icon-check-shape">
        <mock:shadow-root>
          <div class="notification success">
            <wink-icon icon="check-shape" size="md"></wink-icon>
           <div class="notification-text">
                <slot name="heading"></slot>
               <slot name="content"></slot>
            </div>
          </div>
        </mock:shadow-root>
      </wink-notification>
    `);
  });

  it('should render the error variant of notification component', async () => {
    const page = await newSpecPage({
      components: [Notification],
      html: `<wink-notification appearance="error"></wink-notification>`,
    });
    expect(page.root).toEqualHtml(`
     <wink-notification appearance="error" exportparts="icon, icon-cross-small, icon-error-shape">
        <mock:shadow-root>
          <div class="notification error">
            <wink-icon icon="error-shape" size="md"></wink-icon>
               <div class="notification-text">
                <slot name="heading"></slot>
               <slot name="content"></slot>
            </div>
          </div>
        </mock:shadow-root>
      </wink-notification>
    `);
  });

  it('should render the warning variant of notification component', async () => {
    const page = await newSpecPage({
      components: [Notification],
      html: `<wink-notification appearance="warning"></wink-notification>`,
    });
    expect(page.root).toEqualHtml(`
      <wink-notification appearance="warning" exportparts="icon, icon-cross-small, icon-alert-shape">
        <mock:shadow-root>
          <div class="notification warning">
            <wink-icon icon="alert-shape" size="md"></wink-icon>
               <div class="notification-text">
                <slot name="heading"></slot>
               <slot name="content"></slot>
            </div>
          </div>
        </mock:shadow-root>
      </wink-notification>
    `);
  });

  it('should render the notification component by information', async () => {
    const page = await newSpecPage({
      components: [Notification],
      html: `<wink-notification></wink-notification>`,
    });
    expect(page.root).toEqualHtml(`
      <wink-notification exportparts="icon, icon-cross-small, icon-information-shape">
        <mock:shadow-root>
          <div class="notification information">
            <wink-icon icon="information-shape" size="md"></wink-icon>
            <div class="notification-text">
                <slot name="heading"></slot>
               <slot name="content"></slot>
            </div>
          </div>
        </mock:shadow-root>
      </wink-notification>
    `);
  });
});
