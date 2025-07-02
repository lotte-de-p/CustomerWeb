import { Accordion } from "./accordion";
import { newSpecPage } from "@stencil/core/testing";
describe('wink-accordion', () => {
    it('should should create an instance of Accordion class component', () => {
        const comp = new Accordion();
        expect(comp).toBeInstanceOf(Accordion);
    });
    it('should create an id', () => {
        const comp = new Accordion();
        comp.heading = 'some title text for the accordion';
        expect(comp['dynamicIdBasedOnTitle']).toBe('some-ti');
    });
    it('should toggle the isExpanded prop to true', () => {
        const comp = new Accordion();
        comp['onButtonClick']();
        expect(comp.isExpanded).toBe(true);
    });
    it('should toggle the isExpanded prop to false', () => {
        const comp = new Accordion();
        comp.isExpanded = true;
        comp['onButtonClick']();
        expect(comp.isExpanded).toBe(false);
    });
    it('should expand and render the element wink-accordion with the title and the panel slot content', async () => {
        const page = await newSpecPage({
            components: [Accordion],
            html: `<wink-accordion heading="some title text for the accordion" is-expanded="true">some panel text!</wink-accordion>`,
        });
        expect(page.root).toEqualHtml(`
       <wink-accordion heading="some title text for the accordion" is-expanded="true">
       <mock:shadow-root>
         <div class="accordion" id="accordion">
           <div aria-level="5" role="heading">
             <button aria-controls="section-some-ti" aria-expanded="true" class="accordion-trigger" id="accordion1id" type="button">
               <div class="accordion-title">
                 some title text for the accordion
               </div>
               <wink-icon class="accordion-icon" icon="chevron-down" size="md" appearance="default"></wink-icon>
             </button>
           </div>
           <div aria-hidden="true" aria-labelledby="accordion1id" class="accordion-panel" id="section-some-ti" role="region">
             <div id="content">
               <slot></slot>
             </div>
           </div>
         </div>
       </mock:shadow-root>
       some panel text!
     </wink-accordion>
    `);
    });
    it('should collapse and render the element wink-accordion with the title with icon and no panel slot content', async () => {
        const page = await newSpecPage({
            components: [Accordion],
            html: `<wink-accordion heading="some title text for the accordion" icon="bell" is-expanded="false">some panel text!</wink-accordion>`,
        });
        expect(page.root).toEqualHtml(`
       <wink-accordion heading="some title text for the accordion" is-expanded="false" icon="bell">
       <mock:shadow-root>
         <div class="accordion" id="accordion">
           <div aria-level="5" role="heading">
             <button aria-controls="section-some-ti" aria-expanded="false" class="accordion-trigger" id="accordion1id" type="button">
               <div class="accordion-title">
                  <wink-icon appearance="default" icon="bell" size="md"></wink-icon>
                 some title text for the accordion
               </div>
                <wink-icon appearance="default" class="accordion-icon" icon="chevron-down" size="md"></wink-icon>
             </button>
           </div>
           <div aria-hidden="false" aria-labelledby="accordion1id" class="accordion-panel" hidden id="section-some-ti" role="region">
             <div id="content" class="with-icon" style="display: none;">
               <slot></slot>
             </div>
           </div>
         </div>
       </mock:shadow-root>
       some panel text!
     </wink-accordion>
    `);
    });
});
//# sourceMappingURL=accordion.spec.js.map
