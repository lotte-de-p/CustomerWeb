import { newSpecPage } from "@stencil/core/testing";
import { Image } from "./image";
describe('wink-image', () => {
    it('render image tags with no attributes ', async () => {
        const page = await newSpecPage({
            components: [Image],
            html: `<wink-img/>`,
        });
        expect(page.root).toEqualHtml(`
      <wink-img src-desktop="">
         <mock:shadow-root>
            <p>Please set src</p>
         </mock:shadow-root>
      </wink-img>
    `);
    });
    it('render image tags with prop loading-plan to eager ', async () => {
        const page = await newSpecPage({
            components: [Image],
            html: `<wink-img src-desktop="#" loading="eager"/>`,
        });
        expect(page.root).toEqualHtml(`
         <wink-img src-desktop="#" loading="eager">
            <mock:shadow-root>
               <picture>
               <img src="#" loading="eager" alt="Image of testing.stenciljs.com">
               </picture>
            </mock:shadow-root>
         </wink-img>
    `);
    });
    it('render image with correct src ', async () => {
        const page = await newSpecPage({
            components: [Image],
            html: `<wink-img src-desktop="path/to/img.svg">`,
        });
        expect(page.root).toEqualHtml(`
         <wink-img src-desktop="path/to/img.svg">
            <mock:shadow-root>
               <picture>
               <img loading="lazy" src="path/to/img.svg" alt="Image of testing.stenciljs.com">
               </picture>
            </mock:shadow-root>
         </wink-img>
    `);
    });
    it('render image with correct alt text ', async () => {
        const page = await newSpecPage({
            components: [Image],
            html: `<wink-img src-desktop="#" alt="text for testing">`,
        });
        expect(page.root).toEqualHtml(`
         <wink-img src-desktop="#" alt="text for testing">
            <mock:shadow-root>
               <picture>
               <img loading="lazy" src="#" alt="text for testing">
               </picture>
            </mock:shadow-root>
         </wink-img>
    `);
    });
    it('render image with mobile image source ', async () => {
        const page = await newSpecPage({
            components: [Image],
            html: `<wink-img src-desktop="#" src-mobile="#" >`,
        });
        expect(page.root).toEqualHtml(`
         <wink-img src-desktop="#" src-mobile="#">
            <mock:shadow-root>
               <picture>
                  <source srcSet="#" media="(max-width: 576px)" />
                  <img loading="lazy" src="#" alt="Image of testing.stenciljs.com">
               </picture>
            </mock:shadow-root>
         </wink-img>
    `);
    });
    it('render image with tablet image source and in the correct order ', async () => {
        const page = await newSpecPage({
            components: [Image],
            html: `<wink-img src-desktop="#" src-tablet="#" src-mobile="#" >`,
        });
        expect(page.root).toEqualHtml(`
         <wink-img src-desktop="#" src-tablet="#"  src-mobile="#">
            <mock:shadow-root>
               <picture>
                  <source srcSet="#" media="(max-width: 576px)" />
                  <source srcSet="#" media="(max-width: 769px)" />
                  <img loading="lazy" src="#" alt="Image of testing.stenciljs.com">
               </picture>
            </mock:shadow-root>
         </wink-img>
    `);
    });
});
//# sourceMappingURL=image.spec.js.map
