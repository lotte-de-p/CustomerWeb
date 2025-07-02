import { InputOptionWithImage } from '.';

describe('InputOptionWithImage', () => {
  it('when a non parameterized instantiation', function () {
    const input = new InputOptionWithImage();
    expect(input.imagePath).toEqual('');
    expect(input.label).toEqual('');
    expect(input.value).toEqual('');
    expect(input.price).toBeUndefined();
    expect(input.promoPrice).toBeUndefined();
    expect(input.isPromo).toBeUndefined();
    expect(input.installTypePrice).toBeUndefined();
  });

  it('when an instantiation with value', function () {
    const input = new InputOptionWithImage('value');
    expect(input.imagePath).toEqual('');
    expect(input.label).toEqual('');
    expect(input.value).toBe('value');
  });

  it('when an instantiation with label and value', function () {
    const input = new InputOptionWithImage('value', 'label');
    expect(input.imagePath).toEqual('');
    expect(input.label).toBe('label');
    expect(input.value).toBe('value');
  });

  it('when an instantiation with label and value and hasInputField', function () {
    const input = new InputOptionWithImage('value', 'label', 'text');
    expect(input.imagePath).toBe('text');
    expect(input.label).toBe('label');
    expect(input.value).toBe('value');
  });

  it('when a non parameterized instantiation and executing withValue', function () {
    const input = new InputOptionWithImage();
    input.withValue('value');
    expect(input.value).toBe('value');
  });

  it('when a non parameterized instantiation and executing withLabel', function () {
    const input = new InputOptionWithImage();
    input.withLabel('label');
    expect(input.label).toBe('label');
  });

  it('when a non parameterized instantiation and executing withImage', function () {
    const input = new InputOptionWithImage();
    input.withImage('image');
    expect(input.imagePath).toBe('image');
  });

  it('when a non parameterized instantiation and executing withPrice', function () {
    const input = new InputOptionWithImage();
    input.withPrice(3);
    expect(input.price).toBe(3);
  });

  it('when a non parameterized instantiation and executing withPromoPrice', function () {
    const input = new InputOptionWithImage();
    input.withPromoPrice(32);
    expect(input.promoPrice).toBe(32);
  });

  it('when a non parameterized instantiation and executing withPriceAndPromoPrice then price after promo = -1', function () {
    const input = new InputOptionWithImage();
    input.withPriceAndPromoPrice(2, 3);
    expect(input.price).toBe(2);
    expect(input.promoPrice).toBe(3);
    expect(input.isPromo).toBe(true);
    expect(input.priceAfterPromo).toBe(-1);
  });

  it('when a non parameterized instantiation and executing withPriceAndPromoPrice then price after promo is 1', function () {
    const input = new InputOptionWithImage();
    input.withPriceAndPromoPrice(4, 3);
    expect(input.price).toBe(4);
    expect(input.promoPrice).toBe(3);
    expect(input.isPromo).toBe(true);
    expect(input.priceAfterPromo).toBe(1);
  });

  it('when a non parameterized instantiation and executing withPriceAndPromoPrice with promo price is 0 then price after promo is 1', function () {
    const input = new InputOptionWithImage();
    input.withPriceAndPromoPrice(4, 0);
    expect(input.price).toBe(4);
    expect(input.promoPrice).toBe(0);
    expect(input.isPromo).toBe(false);
    expect(input.priceAfterPromo).toBe(4);
  });

  it('when a non parameterized instantiation and executing withPriceAndPromoPrice with price is 0 then price after promo is 0', function () {
    const input = new InputOptionWithImage();
    input.withPriceAndPromoPrice(0, 1);
    expect(input.price).toBe(0);
    expect(input.promoPrice).toBe(1);
    expect(input.isPromo).toBe(false);
    expect(input.priceAfterPromo).toBe(0);
  });
});
