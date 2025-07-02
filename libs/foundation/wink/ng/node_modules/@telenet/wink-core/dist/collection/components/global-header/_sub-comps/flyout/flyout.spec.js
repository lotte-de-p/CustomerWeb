import { newSpecPage } from "@stencil/core/testing";
import { Flyout } from "./flyout";
describe('wink-flyout', () => {
    it('should should create an instance of Flyout class component', () => {
        const comp = new Flyout();
        expect(comp).toBeInstanceOf(Flyout);
    });
    it('should set activeId and backLabel when handleMainNavigationItemClicked is triggered', async () => {
        const comp = new Flyout();
        comp.flyoutId = 2;
        comp['handleMainNavigationItemClicked'](new CustomEvent('mainNavigationItemClicked', { detail: { index: 1, name: 'some-name' } }));
        expect(comp['activeId']).toBe(1);
        expect(comp['backLabel']).toBe('some-name');
    });
    it('should set isFlyoutOpen to true when activeId equals flyoutId', async () => {
        const comp = new Flyout();
        comp.flyoutId = 2;
        comp['handleMainNavigationItemClicked'](new CustomEvent('mainNavigationItemClicked', {
            detail: { index: 2, name: 'some-other-name', eventType: 'mouse' },
        }));
        expect(comp['isFlyoutOpen']).toBe(true);
    });
    it('should not call getAllFocusableElements when eventType is mouse', async () => {
        const comp = new Flyout();
        comp.flyoutId = 3;
        const getAllFocusableElementsSpy = jest.spyOn(comp, 'getAllFocusableElements');
        comp['handleMainNavigationItemClicked'](new CustomEvent('mainNavigationItemClicked', {
            detail: { index: 3, name: '', eventType: 'mouse' },
        }));
        expect(getAllFocusableElementsSpy).not.toHaveBeenCalled();
    });
    it('should call getAllFocusableElements when eventType is not mouse and shouldFetchFocusableElements returns true', async () => {
        const comp = new Flyout();
        comp.flyoutId = 2;
        comp['shouldFetchFocusableElements'] = () => true;
        const getAllFocusableElementsSpy = jest.spyOn(comp, 'getAllFocusableElements');
        comp['handleMainNavigationItemClicked'](new CustomEvent('mainNavigationItemClicked', {
            detail: { index: 2, name: '', eventType: 'keyboard' },
        }));
        expect(getAllFocusableElementsSpy).toHaveBeenCalled();
    });
    it('should call resetFocusableElements when shouldFetchFocusableElements returns false', async () => {
        const comp = new Flyout();
        comp.flyoutId = 3;
        comp['shouldFetchFocusableElements'] = () => false;
        const resetFocusableElementsSpy = jest.spyOn(comp, 'resetFocusableElements');
        comp['handleMainNavigationItemClicked'](new CustomEvent('mainNavigationItemClicked', {
            detail: { index: 3, name: '', eventType: 'keyboard' },
        }));
        expect(resetFocusableElementsSpy).toHaveBeenCalled();
    });
    it('should reset focusableElements and focusedElementTracker when resetFocusableElements is called', () => {
        const comp = new Flyout();
        comp.focusableElements = ['element1', 'element2'];
        comp.focusedElementTracker = 1;
        comp['resetFocusableElements']();
        expect(comp.focusableElements).toEqual([]);
        expect(comp.focusedElementTracker).toBe(0);
    });
    it('should focus on the first focusable element when focusOnElement is called', () => {
        const comp = new Flyout();
        const mockElement = { focus: jest.fn() };
        comp.focusableElements = [mockElement];
        comp.focusedElementTracker = 0;
        comp['focusOnElement']();
        expect(mockElement.focus).toHaveBeenCalled();
    });
    it('should render the element wink-flyout', async () => {
        const page = await newSpecPage({
            components: [Flyout],
            html: `<wink-flyout flyout-id="1" open></wink-flyout>`,
        });
        expect(page.root).toEqualHtml(`
    <wink-flyout id="flyout-1" flyout-id="1" aria-label=" " tabindex="-1" open>
      <mock:shadow-root>
        <div class="container">
          <div class="content">
            <wink-link appearance="menu-back" href="#" icon="arrow-left" icon-appearance="default" icon-position="left" is-disabled="false" size="caption-bold">
              <wink-icon appearance="default" exportparts="icon, icon-arrow-left" icon="arrow-left" size="md" slot="link-icon"></wink-icon>
            </wink-link>
            <slot name="col-1"></slot>
            <slot name="col-2"></slot>
            <slot name="col-3"></slot>
            <slot name="col-4"></slot>
         </div>
      </mock:shadow-root>
    </wink-flyout>
  `);
    });
});
//# sourceMappingURL=flyout.spec.js.map
