import { newSpecPage } from '@stencil/core/testing';
import { MainNavigation } from './main-navigation';
import { mainNavigationItems } from '../../../../assets/shared/data/global-header.data';
import { mainNavEventEmitterDetails } from './models/main-navigation.types';

describe('wink-main-navigation', () => {
  it('should create an instance of MainNavigation class component', () => {
    const comp = new MainNavigation();

    expect(comp).toBeInstanceOf(MainNavigation);
  });

  it('should assign the index of clicked element to the activeIndex and assign the right boolean to isOpen', () => {
    const comp = new MainNavigation();
    comp.mainNavigationItemClicked = { emit: jest.fn() } as any;

    comp.menuItems = JSON.stringify(mainNavigationItems);
    comp.componentWillLoad();

    comp['handleItemClick']({ index: 1 });

    expect(comp['activeIndex']).toBe(1);
    expect(comp['isOpen']).toBe(false);

    comp['handleItemClick']({ index: 2 });

    expect(comp['activeIndex']).toBe(2);
    expect(comp['isOpen']).toBe(true);
  });

  it('should assign the right boolean to isOpen when the element is hovered', async () => {
    const comp = new MainNavigation();
    comp.mainNavigationItemClicked = { emit: jest.fn() } as any;

    comp.menuItems = JSON.stringify(mainNavigationItems);
    comp.componentWillLoad();

    comp['handleItemMouseOver']({ index: 1 });

    expect(comp['isOpen']).toBe(false);

    comp['handleItemMouseOver']({ index: 3 });

    expect(comp['isOpen']).toBe(true);
  });

  it('should get the right classes for the link a tag', async () => {
    const comp = new MainNavigation();

    comp['activeIndex'] = 3;

    expect(comp['getATagCssClasses'](3)).toEqual({ active: true });
  });

  it('should emit mainNavigationItemClicked event with correct details when mainNavigationItemEmitter is called', async () => {
    const page = await newSpecPage({
      components: [MainNavigation],
      html: `<wink-main-navigation></wink-main-navigation>`,
    });

    const comp = page.rootInstance;
    const mockEmit = jest.fn();
    comp.mainNavigationItemClicked = { emit: mockEmit } as any;

    const mockItem: mainNavEventEmitterDetails = { index: 1, name: '' };
    comp.mainNavigationItemEmitter(mockItem);

    expect(mockEmit).toHaveBeenCalledWith(mockItem);
  });

  it('should render the element wink-main-navigation', async () => {
    const page = await newSpecPage({
      components: [MainNavigation],
      html: `<wink-main-navigation></wink-main-navigation>`,
    });

    expect(page.root).toEqualHtml(`
    <wink-main-navigation>
      <mock:shadow-root>
        <nav role="navigation">
          <ul aria-label="Main navigation menu" role="menu"></ul>
        </nav>
      </mock:shadow-root>
    </wink-main-navigation>
  `);
  });
});
