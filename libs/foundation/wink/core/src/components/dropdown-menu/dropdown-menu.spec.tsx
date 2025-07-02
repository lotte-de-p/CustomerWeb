import { DropdownMenu } from './dropdown-menu';
import { newSpecPage } from '@stencil/core/testing';
describe('wink-dropdown-menu', () => {
  it('dropdown menu toggle open', () => {
    const comp = new DropdownMenu();
    const e = {} as Event;

    comp['toggleDropdown'](e);
    expect(comp.isExpanded).toBe(true);
  });

  it('should render dropdown correctly', async () => {
    const page = await newSpecPage({
      components: [DropdownMenu],
      html: `
      <wink-dropdown-menu item-selected="option 1">
         <wink-link>option 1</wink-link>
         <wink-link>option 2</wink-link>
         <wink-link>option 3</wink-link>
         <wink-link>option 4</wink-link>
      </wink-dropdown-menu>
         `,
    });
    expect(page.root).toEqualHtml(`

       <wink-dropdown-menu class="dropdown-menu--align-list--top-left" exportparts="icon, icon-chevron-down-small" item-selected="option 1">
            <mock:shadow-root>
               <button class="dropdown-menu--heading" tabindex="1">
               <slot name="dropdown-menu--avatar"></slot>
               default-1
               <div class="dropdown-menu--chevron">
                  <wink-icon icon="chevron-down-small" size="sm"></wink-icon>
               </button>
            </div>
            <ul class="dropdown-menu--list">
               <slot></slot>
           </ul>
         </mock:shadow-root>
         <wink-link  class="active">option 1</wink-link>
         <wink-link >option 2</wink-link>
         <wink-link >option 3</wink-link>
         <wink-link >option 4</wink-link>
      </wink-dropdown-menu>
      `);
  });
});

it('should render dropdown with correct tab index', async () => {
  const page = await newSpecPage({
    components: [DropdownMenu],
    html: `
     <wink-dropdown-menu item-selected="option 1" dropdown-tab-index=3>
        <wink-link>option 1</wink-link>
        <wink-link>option 2</wink-link>
        <wink-link>option 3</wink-link>
        <wink-link>option 4</wink-link>
     </wink-dropdown-menu>
        `,
  });
  expect(page.root).toEqualHtml(`
      <wink-dropdown-menu class="dropdown-menu--align-list--top-left" exportparts="icon, icon-chevron-down-small" item-selected="option 1" dropdown-tab-index=3>
           <mock:shadow-root>
              <button class="dropdown-menu--heading" tabindex="3">
              <slot name="dropdown-menu--avatar"></slot>
              default-1
              <div class="dropdown-menu--chevron">
                 <wink-icon icon="chevron-down-small" size="sm"></wink-icon>
              </button>
           </div>
           <ul class="dropdown-menu--list">
             <slot></slot>
          </ul>
        </mock:shadow-root>
        <wink-link class="active">option 1</wink-link>
        <wink-link >option 2</wink-link>
        <wink-link >option 3</wink-link>
        <wink-link >option 4</wink-link>
     </wink-dropdown-menu>
     `);
});
