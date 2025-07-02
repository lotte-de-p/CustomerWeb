import { Component, h, Host, Prop } from '@stencil/core';
import { PRICING_ALIGN, LANGUAGES, PRICING_TYPES, PricingAlign, Language, PricingType } from './models/pricing.types';

@Component({
  tag: 'wink-pricing',
  styleUrls: {
    telenet: 'styles/brands/pricing.telenet.scss',
    base: 'styles/brands/pricing.base.scss',
  },
  shadow: true,
})
export class Pricing {
  @Prop() price = '';
  @Prop() priceStrikethrough?: string = '';
  @Prop() startingFrom?: string = '';
  @Prop() frequency?: string = '';
  @Prop() duration?: string = '';
  @Prop() appearance: PricingType = PRICING_TYPES.text;
  @Prop() annotation: Language = LANGUAGES.nl;
  @Prop({ mutable: true }) alignment: PricingAlign = PRICING_ALIGN.left;

  private readonly normalText = '_normal';
  private readonly strikeThroughText = '_strikethrough';

  private readonly screenReaderAnnotations = new Map([
    [LANGUAGES.nl + this.strikeThroughText, 'Normale prijs'],
    [LANGUAGES.fr + this.strikeThroughText, 'Prix normal'],
    [LANGUAGES.en + this.strikeThroughText, 'Normal price'],
    [LANGUAGES.nl + this.normalText, 'Huidige prijs'],
    [LANGUAGES.fr + this.normalText, 'Prix Maintenant'],
    [LANGUAGES.en + this.normalText, 'Current price'],
  ]);

  private readonly pricingChild = (price: string, lang: Language, wrapperClassName: string) => {
    const currencyAfter = lang === LANGUAGES.fr ? 'currency-after' : '';
    const langDecimalPoint = lang !== LANGUAGES.en ? ',' : '.';
    const inputPrice = price ? price.replace(',', '.') : '';
    const integerPart = inputPrice.split('.')[0];
    const fractionalPart = inputPrice.split('.')[1] !== '00' ? inputPrice.split('.')[1] : '';
    const screenReaderText =
      wrapperClassName === 'pricing__promo-price'
        ? this.screenReaderAnnotations.get(lang + this.strikeThroughText)
        : this.screenReaderAnnotations.get(lang + this.normalText);

    let formatPriceHtml = (
      <div class={`${wrapperClassName} ${currencyAfter}`}>
        <span class="sr-only">{screenReaderText}</span>
        <i class="price__price-currency">€</i>
        <span class="price__price-value">{price}</span>
      </div>
    );
    if (inputPrice.includes('.')) {
      formatPriceHtml = (
        <div class={`${wrapperClassName} ${currencyAfter}`}>
          <span class="sr-only">{screenReaderText}</span>
          <i class="price__price-currency">€</i>
          <span class="price__price-value">
            {integerPart}
            {fractionalPart && <span class="price__price-decimal">{langDecimalPoint + fractionalPart}</span>}
          </span>
        </div>
      );
    }
    return formatPriceHtml;
  };

  private readonly alignmentClass = (alignment: PricingAlign) => {
    return this.alignment !== PRICING_ALIGN.left ? `price-align__${alignment}` : '';
  };

  componentWillRender(): void {
    if (this.appearance === PRICING_TYPES.patch) {
      this.alignment = PRICING_ALIGN.center;
    }
  }

  render() {
    return (
      <Host type="product price">
        {(this.startingFrom || this.priceStrikethrough) && (
          <div class={`pricing__header ${this.alignmentClass(this.alignment)}`}>
            {this.startingFrom && <div class="pricing__starting-from">{this.startingFrom} </div>}
            {this.priceStrikethrough &&
              this.pricingChild(this.priceStrikethrough, this.annotation, 'pricing__promo-price')}
          </div>
        )}

        {(this.price || this.frequency) && (
          <div class={`pricing__current-price-wrapper ${this.alignmentClass(this.alignment)}`}>
            {this.price && this.pricingChild(this.price, this.annotation, 'pricing__price-value-wrapper')}
            {this.frequency && <div class="pricing__price-frequency">{this.frequency}</div>}
          </div>
        )}

        {this.duration && (
          <div class={`pricing__footer ${this.alignmentClass(this.alignment)}`}>
            <div class="pricing__price-promo-duration">{this.duration}</div>
          </div>
        )}
      </Host>
    );
  }
}
