import { resetIdsInTest } from "../../../utils/utils";
import { Input } from "./input";
import { newSpecPage } from "@stencil/core/testing";
describe('wink-input', () => {
    it('Should create an instance of Input comp', () => {
        const comp = new Input();
        expect(comp).toBeInstanceOf(Input);
    });
    it('Should create the label-id', () => {
        const comp = new Input();
        comp.inputId = 'inputId';
        expect(comp['getLabelId']()).toBe('inputId:Label');
    });
    it('Should create the label-helper-id', () => {
        const comp = new Input();
        comp.inputId = 'inputId';
        expect(comp['getHelperId']()).toBe('inputId:Helper');
    });
    it('Should create the error-message-id', () => {
        const comp = new Input();
        comp.inputId = 'inputId';
        expect(comp['getErrorMsgId']()).toBe('inputId:Error');
    });
    it('Should create the AriaDescribedBy value with label id, helper id and error id', () => {
        const comp = new Input();
        comp.inputId = 'inputId';
        comp.label = 'Label';
        comp.helper = 'Helper text';
        comp.error = ' ';
        expect(comp['getAriaDescribedby']()).toBe('inputId:Label inputId:Helper inputId:Error');
    });
    it('Should create the AriaDescribedBy value with helper id and error id', () => {
        const comp = new Input();
        comp.inputId = 'inputId';
        comp.helper = 'Helper text';
        comp.error = ' ';
        expect(comp['getAriaDescribedby']()).toBe('inputId:Helper inputId:Error');
    });
    it('Should create the AriaDescribedBy value with error id only when no any label', () => {
        const comp = new Input();
        comp.inputId = 'inputId';
        comp.error = ' ';
        expect(comp['getAriaDescribedby']()).toBe('inputId:Error');
    });
    it('Should render wink-input component', async () => {
        const page = await newSpecPage({
            components: [Input],
            html: `<wink-input></wink-input>`,
        });
        expect(resetIdsInTest(page.root)).toEqualLightHtml(`
    <wink-input appearance="default" size="md" value="">
      <div class="input-wrapper">
        <input aria-describedby="" autocomplete="off" class="input" enterkeyhint="none" id="" input-mode="text" type="text" value="">
      </div>
    </wink-input>

    `);
    });
    it('Should render wink-input component focused on load', async () => {
        const page = await newSpecPage({
            components: [Input],
            html: `<wink-input input-id="inputId" is-autofocused></wink-input>`,
        });
        expect(page.root).toEqualLightHtml(`<wink-input appearance="default" input-id="inputId" is-autofocused="" size="md" value="">
        <div class="input-wrapper">
          <input aria-describedby="" autocomplete="off" autofocus="" class="input" enterkeyhint="none" id="inputId" input-mode="text" type="text" value="">
        </div>
      </wink-input>`);
    });
    it('Should render wink-input component with the correct id', async () => {
        const page = await newSpecPage({
            components: [Input],
            html: `<wink-input input-id="inputId"></wink-input>`,
        });
        expect(page.root).toEqualLightHtml(`<wink-input appearance="default" input-id="inputId" size="md" value="">
        <div class="input-wrapper">
          <input aria-describedby="" autocomplete="off" class="input" enterkeyhint="none" id="inputId" input-mode="text" type="text" value="">
        </div>
      </wink-input>`);
    });
    it('Should render the default label', async () => {
        const page = await newSpecPage({
            components: [Input],
            html: `<wink-input input-id="inputId" label="Label"></wink-input>`,
        });
        expect(page.root).toEqualHtml(`
      <wink-input appearance="default" input-id="inputId" label="Label" size="md" value="">
          <label class="label" htmlfor="inputId" id="inputId:Label">
            <wink-form-label helper="" helper-id="inputId:Helper" label="Label" show-optional optional-text="Optional"></wink-form-label>
          </label>
          <div class="input-wrapper">
            <input aria-describedby="inputId:Label" autocomplete="off" class="input" enterkeyhint="none" id="inputId" input-mode="text"  type="text" value="">
          </div>
      </wink-input>`);
    });
    it('Should render the default label and helper text', async () => {
        const page = await newSpecPage({
            components: [Input],
            html: `<wink-input input-id="inputId" label="Label" helper="Helper text"></wink-input>`,
        });
        expect(page.root).toEqualHtml(`
    <wink-input appearance="default" helper="Helper text" input-id="inputId" label="Label" size="md" value="">
        <label class="label" htmlfor="inputId" id="inputId:Label">
          <wink-form-label helper="Helper text" helper-id="inputId:Helper" label="Label" show-optional optional-text="Optional"></wink-form-label>
        </label>
        <div class="input-wrapper">
          <input aria-describedby="inputId:Label inputId:Helper" autocomplete="off" class="input" enterkeyhint="none" id="inputId" input-mode="text" type="text" value="">
        </div>
    </wink-input>`);
    });
    it('Should render wink-input buttonLeft with icon-search', async () => {
        const page = await newSpecPage({
            components: [Input],
            html: `<wink-input input-id="inputId" icon-left="search""></wink-input>`,
        });
        expect(page.root).toEqualHtml(`
      <wink-input input-id="inputId" icon-left="search"" appearance="default" size="md" value="">
           <div class=" input-with-icon-button input-with-icon-button-left input-wrapper">
             <div class="input-icon-button input-icon-button-left">
               <button class="input-icon-button-button" type="button" aria-label="search">
                   <wink-icon appearance="default" icon="search" size="md"></wink-icon>
               </button>
             </div>
             <input aria-describedby="" autocomplete="off" class="input" enterkeyhint="none" id="inputId" input-mode="text" type="text" value=""  >
           </div>
       </wink-input>`);
    });
    it('Should render wink-input buttonRight with icon-backspace', async () => {
        const page = await newSpecPage({
            components: [Input],
            html: `<wink-input input-id="inputId" icon-right="backspace" ></wink-input>`,
        });
        expect(page.root).toEqualHtml(`
    <wink-input appearance="default" icon-right="backspace" input-id="inputId" size="md" value="">
        <div class="input-with-icon-button input-with-icon-button-right input-wrapper">
          <input aria-describedby="" autocomplete="off" class="input" enterkeyhint="none" id="inputId" input-mode="text" type="text" value="">
          <div class="input-icon-button input-icon-button-right">
            <button aria-label="backspace" class="input-icon-button-button" type="button">
              <wink-icon appearance="default" icon="backspace" size="md"></wink-icon>
            </button>
          </div>
        </div>
    </wink-input>`);
    });
    it('Should render wink-input buttonRight with icon-search and buttonRight with icon-backspace', async () => {
        const page = await newSpecPage({
            components: [Input],
            html: `<wink-input input-id="inputId"  icon-left="search" icon-right="backspace"></wink-input>`,
        });
        expect(page.root).toEqualHtml(`
    <wink-input appearance="default" icon-left="search" icon-right="backspace" input-id="inputId" size="md" value="">
        <div class="input-with-icon-button input-with-icon-button-left input-with-icon-button-right input-wrapper">
          <div class="input-icon-button input-icon-button-left">
            <button aria-label="search" class="input-icon-button-button" type="button">
              <wink-icon appearance="default" icon="search" size="md"></wink-icon>
            </button>
          </div>
          <input aria-describedby="" autocomplete="off" class="input" enterkeyhint="none" id="inputId" input-mode="text" type="text" value="">
          <div class="input-icon-button input-icon-button-right">
            <button aria-label="backspace" class="input-icon-button-button" type="button">
              <wink-icon appearance="default" icon="backspace" size="md"></wink-icon>
            </button>
          </div>
        </div>
    </wink-input>`);
    });
    it('Should render wink-input component with "www." prefix', async () => {
        const page = await newSpecPage({
            components: [Input],
            html: `<wink-input input-id="inputId" prefix-value="www." ></wink-input>`,
        });
        expect(page.root).toEqualHtml(`
      <wink-input input-id="inputId"  prefix-value="www." appearance="default" size="md" value="">
           <div class=" input-wrapper">
             <div class="input-affix input-affix-prefix">www.</div>
             <input aria-describedby="" autocomplete="off" class="input" enterkeyhint="none" id="inputId" input-mode="text" type="text" value=""  >
           </div>
       </wink-input>`);
    });
    it('Should render wink-input component with ".be" postfix', async () => {
        const page = await newSpecPage({
            components: [Input],
            html: `<wink-input input-id="inputId" postfix-value=".be"></wink-input>`,
        });
        expect(page.root).toEqualHtml(`
      <wink-input input-id="inputId" postfix-value=".be" appearance="default" size="md" value="">
           <div class=" input-wrapper">
             <input aria-describedby="" autocomplete="off" class="input" enterkeyhint="none" id="inputId" input-mode="text" type="text" value=""  >
             <div class="input-affix input-affix-postfix">.be</div>
           </div>
       </wink-input>`);
    });
    it('Should render error message for input component', async () => {
        const page = await newSpecPage({
            components: [Input],
            html: `<wink-input input-id="inputId"  error="Error description"></wink-input>`,
        });
        expect(page.root).toEqualHtml(`
      <wink-input input-id="inputId" error="Error description" appearance="default" size="md" value="">

           <div class=" input-wrapper">
            <input id="inputId" aria-describedby="inputId:Error" aria-invalid autocomplete="off" class="input invalid" enterkeyhint="none" id="inputId" input-mode="text" type="text" value="" >
           </div>
           <div id="inputId:Error" class="error-msg">
             <wink-validation-message message="Error description" />
           </div>

       </wink-input>`);
    });
    it('Should render wink-input component with ".be" postfix', async () => {
        const page = await newSpecPage({
            components: [Input],
            html: `<wink-input input-id="inputId" postfix-value=".be" ></wink-input>`,
        });
        expect(page.root).toEqualHtml(`
      <wink-input input-id="inputId" postfix-value=".be" value="" appearance="default" size="md">
           <div class=" input-wrapper">
             <input aria-describedby="" autocomplete="off" class="input" enterkeyhint="none" id="inputId" input-mode="text" type="text" value=""  >
             <div class="input-affix input-affix-postfix">.be</div>
           </div>
       </wink-input>`);
    });
    it('Should render the search input correctly', async () => {
        const page = await newSpecPage({
            components: [Input],
            html: `<wink-input appearance="search" size="sm" icon-left="search" icon-right="backspace" input-mode-option="text" type="text" value="search value" placeholder="search placeholder" input-id="search-id"  name="search id" ></wink-input>`,
        });
        expect(page.root).toEqualHtml(`
    <wink-input appearance="search" icon-left="search" icon-right="backspace" input-id="search-id" input-mode-option="text" name="search id" placeholder="search placeholder" size="sm" type="text" value="search value">
        <div class="input-with-icon-button input-with-icon-button-left input-with-icon-button-right input-wrapper">
          <div class="input-icon-button input-icon-button-left">
            <button aria-label="search" class="input-icon-button-button" type="button">
              <wink-icon appearance="default" icon="search" size="sm"></wink-icon>
            </button>
          </div>
          <input aria-describedby="" autocomplete="off" class="input" enterkeyhint="none" id="search-id" input-mode="text" name="search id" placeholder="search placeholder" type="text" value="search value">
          <div class="input-icon-button input-icon-button-right">
            <button aria-label="backspace" class="input-icon-button-button" type="button">
              <wink-icon appearance="default" icon="backspace" size="sm"></wink-icon>
            </button>
          </div>
        </div>
    </wink-input>
    `);
    });
    it('Should not render backspace icon in the search variant when the value is empty', async () => {
        const page = await newSpecPage({
            components: [Input],
            html: `<wink-input appearance="search" size="sm" icon-left="search" icon-right="backspace" input-mode-option="text" type="text" value="" placeholder="search placeholder" input-id="search-id"  name="search id" ></wink-input>`,
        });
        expect(page.root).toEqualHtml(`
    <wink-input appearance="search" icon-left="search" icon-right="backspace" input-id="search-id" input-mode-option="text" name="search id" placeholder="search placeholder" size="sm" type="text" value="">
        <div class="input-with-icon-button input-with-icon-button-left input-with-icon-button-right input-wrapper">
          <div class="input-icon-button input-icon-button-left">
            <button aria-label="search" class="input-icon-button-button" type="button">
              <wink-icon appearance="default" icon="search" size="sm"></wink-icon>
            </button>
          </div>
          <input aria-describedby="" autocomplete="off" class="input" enterkeyhint="none" id="search-id" input-mode="text" name="search id" placeholder="search placeholder" type="text" value="">
        </div>
    </wink-input>
    `);
    });
    it('Should render the date picker variant with the correct props', async () => {
        const page = await newSpecPage({
            components: [Input],
            html: `<wink-input
        input-id="test"
        type="date"
        label="Date picker"
        helper="Date picker helper text"
        name="date picker"
        value="2024-06-01"
        min-value="2014-06-01"
        max-value="2034-06-01"
      ></wink-input>`,
        });
        expect(page.root).toEqualHtml(`
    <wink-input appearance="default" helper="Date picker helper text" input-id="test" label="Date picker" max-value="2034-06-01" min-value="2014-06-01" name="date picker" size="md" type="date" value="2024-06-01">
  <label class="label" htmlfor="test" id="test:Label">
    <wink-form-label helper="Date picker helper text" helper-id="test:Helper" label="Date picker" optional-text="Optional" show-optional=""></wink-form-label>
  </label>
  <div class="input-wrapper input-wrapper-date">
    <input aria-describedby="test:Label test:Helper" autocomplete="off" class="input" enterkeyhint="none" id="test" input-mode="text" max="2034-06-01" min="2014-06-01" name="date picker" type="date" value="2024-06-01">
    <wink-icon appearance="transparent" icon="calendar"></wink-icon>
  </div>
</wink-input>
    `);
    });
});
//# sourceMappingURL=input.spec.js.map
