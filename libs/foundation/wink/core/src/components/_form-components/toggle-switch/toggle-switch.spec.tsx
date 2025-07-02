import { newSpecPage } from '@stencil/core/testing';
import { ToggleSwitch } from './toggle-switch';
import { resetIdsInTest } from '../../../utils/utils';

describe('wink-toggle-switch', () => {
  it('should create an instance of ToggleSwitch class component', () => {
    const comp = new ToggleSwitch();

    expect(comp).toBeInstanceOf(ToggleSwitch);
  });

  it('should render the element wink-toggle-switch', async () => {
    const page = await newSpecPage({
      components: [ToggleSwitch],
      html: `<wink-toggle-switch></wink-toggle-switch>`,
    });
    expect(resetIdsInTest(page.root)).toEqualHtml(`
     <wink-toggle-switch class="toggle-switch--nexttoeachother">
       <p class="toggle-switch--label"></p>
       <div class="toggle-switch--wrapper">
         <input id="" type="checkbox">
           <div class="toggle-switch--icon">
            <wink-icon icon="cross-small" size="sm"></wink-icon>
            <wink-icon icon="tick-small" size="sm"></wink-icon>
         </div>
         <label htmlfor=""></label>
       </div>
     </wink-toggle-switch>
   `);
  });

  it('should render the element wink-toggle-switch with id correctly', async () => {
    const page = await newSpecPage({
      components: [ToggleSwitch],
      html: `<wink-toggle-switch toggle-switch-id="test-id"></wink-toggle-switch>`,
    });

    expect(page.root).toEqualHtml(`
    <wink-toggle-switch class="toggle-switch--nexttoeachother" toggle-switch-id="test-id">
      <p class="toggle-switch--label"></p>
      <div class="toggle-switch--wrapper">
        <input id="test-id" type="checkbox">
         <div class="toggle-switch--icon">
          <wink-icon icon="cross-small" size="sm"></wink-icon>
          <wink-icon icon="tick-small" size="sm"></wink-icon>
        </div>
        <label htmlfor="test-id"></label>
      </div>
    </wink-toggle-switch>
  `);
  });

  it('should render the element wink-toggle-switch alignment class correctly', async () => {
    const page = await newSpecPage({
      components: [ToggleSwitch],
      html: `<wink-toggle-switch  alignment="spaceBetween" toggle-switch-id="test-id"></wink-toggle-switch>`,
    });

    expect(page.root).toEqualHtml(`
    <wink-toggle-switch alignment="spaceBetween" toggle-switch-id="test-id" class="toggle-switch--spacebetween">
      <p class="toggle-switch--label"></p>
      <div class="toggle-switch--wrapper">
        <input id="test-id" type="checkbox">
         <div class="toggle-switch--icon">
          <wink-icon icon="cross-small" size="sm"></wink-icon>
          <wink-icon icon="tick-small" size="sm"></wink-icon>
        </div>
        <label htmlfor="test-id"></label>
      </div>
    </wink-toggle-switch>
  `);
  });

  it('should render the element wink-toggle-switch disabled correctly', async () => {
    const page = await newSpecPage({
      components: [ToggleSwitch],
      html: `<wink-toggle-switch  disabled></wink-toggle-switch>`,
    });

    expect(resetIdsInTest(page.root)).toEqualHtml(`
    <wink-toggle-switch disabled class="toggle-switch--nexttoeachother">
      <p class="toggle-switch--label toggle-switch--label--disabled"></p>
      <div class="toggle-switch--wrapper">
        <input id="" type="checkbox" disabled>
        <div class="toggle-switch--icon">
          <wink-icon icon="cross-small" size="sm"></wink-icon>
          <wink-icon icon="tick-small" size="sm"></wink-icon>
        </div>
        <label htmlfor=""></label>
      </div>
    </wink-toggle-switch>
  `);
  });

  it('should render the element wink-toggle-switch checked correctly', async () => {
    const page = await newSpecPage({
      components: [ToggleSwitch],
      html: `<wink-toggle-switch checked></wink-toggle-switch>`,
    });

    expect(resetIdsInTest(page.root)).toEqualHtml(`
    <wink-toggle-switch checked class="toggle-switch--nexttoeachother">
      <p class="toggle-switch--label"></p>
      <div class="toggle-switch--wrapper">
        <input id="" type="checkbox" checked>
        <div class="toggle-switch--icon">
          <wink-icon icon="cross-small" size="sm"></wink-icon>
          <wink-icon icon="tick-small" size="sm"></wink-icon>
        </div>
        <label htmlfor=""></label>
      </div>
    </wink-toggle-switch>
  `);
  });
});
