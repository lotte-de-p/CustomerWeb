import { newSpecPage } from '@stencil/core/testing';
import { Pricing } from './pricing';

describe('wink-pricing', () => {
  it('should render the no price element wink-pricing', async () => {
    const page = await newSpecPage({
      components: [Pricing],
      html: `<wink-pricing></wink-pricing>`,
    });

    expect(page.root).toEqualHtml(`
      <wink-pricing  type="product price">
        <mock:shadow-root>
        </mock:shadow-root>
      </wink-pricing>
    `);
  });

  it('should render the no price element wink-pricing if value is set to empty string', async () => {
    const page = await newSpecPage({
      components: [Pricing],
      html: `<wink-pricing price=""></wink-pricing>`,
    });

    expect(page.root).toEqualHtml(`
      <wink-pricing price=""  type="product price">
        <mock:shadow-root>
        </mock:shadow-root>
      </wink-pricing>
    `);
  });

  it('should render the element wink-pricing with a decimal-price ', async () => {
    const page = await newSpecPage({
      components: [Pricing],
      html: `<wink-pricing appearance="text" price="65.95"></wink-pricing>`,
    });

    expect(page.root).toEqualHtml(`
         <wink-pricing type="product price" price="65.95" appearance="text"  >
            <mock:shadow-root>
            <div class="pricing__current-price-wrapper">
               <div class="pricing__price-value-wrapper">
                  <span class="sr-only">
                     Huidige prijs
                  </span>
                  <i class="price__price-currency">€</i>
                  <span class="price__price-value">65
                     <span class="price__price-decimal">,95</span>
                  </span>
               </div>
            </div>
            </mock:shadow-root>
         </wink-pricing>
    `);
  });

  it('should render the element wink-pricing without a decimal-price if no decimal given', async () => {
    const page = await newSpecPage({
      components: [Pricing],
      html: `<wink-pricing appearance="text" price="65"></wink-pricing>`,
    });

    expect(page.root).toEqualHtml(`
         <wink-pricing type="product price" price="65" appearance="text"  >
            <mock:shadow-root>
            <div class="pricing__current-price-wrapper">
               <div class="pricing__price-value-wrapper">
                  <span class="sr-only">
                     Huidige prijs
                  </span>
                  <i class="price__price-currency">€</i>
                  <span class="price__price-value">65</span>
               </div>
            </div>
            </mock:shadow-root>
         </wink-pricing>
    `);
  });
  it('should render the element wink-pricing correct based on annotation fr', async () => {
    const page = await newSpecPage({
      components: [Pricing],
      html: `<wink-pricing appearance="text" price="65.95" annotation="FR"></wink-pricing>`,
    });

    expect(page.root).toEqualHtml(`
         <wink-pricing type="product price" price="65.95" appearance="text" annotation="FR" >
            <mock:shadow-root>
            <div class="pricing__current-price-wrapper">
               <div class="pricing__price-value-wrapper currency-after">
                  <span class="sr-only">
                     Prix Maintenant
                  </span>
                  <i class="price__price-currency">€</i>
                  <span class="price__price-value">65
                     <span class="price__price-decimal">,95</span>
                  </span>
               </div>
            </div>
            </mock:shadow-root>
         </wink-pricing>
    `);
  });

  it('should render the element wink-pricing correct based on annotation en', async () => {
    const page = await newSpecPage({
      components: [Pricing],
      html: `<wink-pricing appearance="text" price="65,95" annotation="EN"></wink-pricing>`,
    });

    expect(page.root).toEqualHtml(`
         <wink-pricing type="product price" price="65,95" appearance="text" annotation="EN" >
            <mock:shadow-root>
            <div class="pricing__current-price-wrapper">
               <div class="pricing__price-value-wrapper">
                  <span class="sr-only">
                     Current price
                  </span>
                  <i class="price__price-currency">€</i>
                  <span class="price__price-value">65
                     <span class="price__price-decimal">.95</span>
                  </span>
               </div>
            </div>
            </mock:shadow-root>
         </wink-pricing>
    `);
  });

  it('should render the promoprice when set', async () => {
    const page = await newSpecPage({
      components: [Pricing],
      html: `<wink-pricing appearance="text" price="65,95" annotation="EN" price-strikethrough="59,99"></wink-pricing>`,
    });

    expect(page.root).toEqualHtml(`
         <wink-pricing type="product price" price="65,95" appearance="text" annotation="EN" price-strikethrough="59,99">
            <mock:shadow-root>
            <div class="pricing__header">
            <div class="pricing__promo-price">
               <span class="sr-only">
                  Normal price
               </span>
               <i class="price__price-currency">€</i>
               <span class="price__price-value">
                  59<span class="price__price-decimal"> .99</span>
               </span>
            </div>
            </div>
            <div class="pricing__current-price-wrapper">
               <div class="pricing__price-value-wrapper">
                  <span class="sr-only">
                     Current price
                  </span>
                  <i class="price__price-currency">€</i>
                  <span class="price__price-value">65
                     <span class="price__price-decimal">.95</span>
                  </span>
               </div>
            </div>
            </mock:shadow-root>
         </wink-pricing>
    `);
  });

  it('should render the startlabel when set', async () => {
    const page = await newSpecPage({
      components: [Pricing],
      html: `<wink-pricing appearance="text" price="65,95" starting-from="From"></wink-pricing>`,
    });

    expect(page.root).toEqualHtml(`
         <wink-pricing type="product price" price="65,95" appearance="text"  starting-from="From">
            <mock:shadow-root>
            <div class="pricing__header">
               <div class="pricing__starting-from">From</div>
            </div>
            <div class="pricing__current-price-wrapper">
               <div class="pricing__price-value-wrapper">
                  <span class="sr-only">
                     Huidige prijs
                  </span>
                  <i class="price__price-currency">€</i>
                  <span class="price__price-value">65
                     <span class="price__price-decimal">,95</span>
                  </span>
               </div>
            </div>
            </mock:shadow-root>
         </wink-pricing>
    `);
  });

  it('should render the frequencylabel when set', async () => {
    const page = await newSpecPage({
      components: [Pricing],
      html: `<wink-pricing appearance="text" price="65,95" frequency="per month"></wink-pricing>`,
    });

    expect(page.root).toEqualHtml(`
         <wink-pricing type="product price" price="65,95" appearance="text" frequency="per month">
            <mock:shadow-root>
            <div class="pricing__current-price-wrapper">
               <div class="pricing__price-value-wrapper">
                  <span class="sr-only">
                     Huidige prijs
                  </span>
                  <i class="price__price-currency">€</i>
                  <span class="price__price-value">65
                     <span class="price__price-decimal">,95</span>
                  </span>
               </div>
               <div class="pricing__price-frequency">per month</div>
            </div>
            </mock:shadow-root>
         </wink-pricing>
    `);
  });

  it('should render the frequencylabel when set', async () => {
    const page = await newSpecPage({
      components: [Pricing],
      html: `<wink-pricing duration="During three months"></wink-pricing>`,
    });

    expect(page.root).toEqualHtml(`
         <wink-pricing type="product price" duration="During three months">
            <mock:shadow-root>
            <div class="pricing__footer">
               <div class="pricing__price-promo-duration">During three months</div>
            </div>
            </mock:shadow-root>
         </wink-pricing>
    `);
  });

  it('should render the the alignement correct when set', async () => {
    const page = await newSpecPage({
      components: [Pricing],
      html: `<wink-pricing  price="65.95" starting-from="From" alignment="center"></wink-pricing>`,
    });

    expect(page.root).toEqualHtml(`
         <wink-pricing type="product price" price="65.95" starting-from="From" alignment="center">
            <mock:shadow-root>
            <div class="pricing__header price-align__center">
               <div class="pricing__starting-from">From</div>
            </div>
            <div class="pricing__current-price-wrapper price-align__center">
               <div class="pricing__price-value-wrapper">
                  <span class="sr-only">
                     Huidige prijs
                  </span>
                  <i class="price__price-currency">€</i>
                  <span class="price__price-value">65<span class="price__price-decimal">,95</span></span>
               </div>
            </div>
            </mock:shadow-root>
         </wink-pricing>
    `);
  });

  it('should render the the center align even if left if set on component but type is patch', async () => {
    const page = await newSpecPage({
      components: [Pricing],
      html: `<wink-pricing appearance="patch" price="64.95" starting-from="From" price-strikethrough="129,99" annotation="NL" frequency="per month" duration="During three months" alignment="left"></wink-pricing>`,
    });

    expect(page.root).toEqualHtml(`
         <wink-pricing appearance="patch" price="64.95" starting-from="From" price-strikethrough="129,99" annotation="NL" frequency="per month" duration="During three months" alignment="left" type="product price">
            <mock:shadow-root>
            <div class="pricing__header price-align__center"><div class="pricing__starting-from">From</div><div class="pricing__promo-price"><span class="sr-only">Normale prijs</span><i class="price__price-currency">€</i><span class="price__price-value">129<span class="price__price-decimal">,99</span></span></div></div>
            <div class="pricing__current-price-wrapper price-align__center"><div class="pricing__price-value-wrapper"><span class="sr-only">Huidige prijs</span><i class="price__price-currency">€</i><span class="price__price-value">64<span class="price__price-decimal">,95</span></span></div><div class="pricing__price-frequency">per month</div></div>
            <div class="pricing__footer price-align__center"><div class="pricing__price-promo-duration">During three months</div></div>
            </mock:shadow-root>
         </wink-pricing>
    `);
  });
});

it('should render the element wink-pricing without trailing 00', async () => {
  const page = await newSpecPage({
    components: [Pricing],
    html: `<wink-pricing appearance="text" price="65,00"></wink-pricing>`,
  });

  expect(page.root).toEqualHtml(`
        <wink-pricing type="product price" price="65,00" appearance="text"  >
           <mock:shadow-root>
           <div class="pricing__current-price-wrapper">
              <div class="pricing__price-value-wrapper">
                  <span class="sr-only">
                     Huidige prijs
                  </span>
                  <i class="price__price-currency">€</i>
                  <span class="price__price-value">65</span>
              </div>
           </div>
           </mock:shadow-root>
        </wink-pricing>
   `);
});
