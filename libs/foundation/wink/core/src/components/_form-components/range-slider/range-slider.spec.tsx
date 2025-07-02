import { newSpecPage } from '@stencil/core/testing';
import { RangeSlider } from './range-slider';

describe('wink-range-slider', () => {
  it('should create an instance of RangeSlider class component', () => {
    const comp = new RangeSlider();

    expect(comp).toBeInstanceOf(RangeSlider);
  });

  it('should render the element wink-range-slider', async () => {
    const page = await newSpecPage({
      components: [RangeSlider],
      html: `<wink-range-slider
            slider-type="range"
            show-input="true"
            show-values="true"
            min-value="0"
            max-value="100"
            bottom-value="28"
            value="59"
            step="1"
            label="Range Slider"
            helper="Slider"
            slider-id="range-slider"
          ></wink-range-slider>`,
    });

    expect(page.root).toEqualHtml(`
<wink-range-slider bottom-value="28" helper="Slider" label="Range Slider" max-value="100" min-value="0" show-input="true" show-values="true" slider-id="range-slider" slider-type="range" step="1" value="59">
      <label class="slider-container slider-container-range">
        <wink-form-label helper="Slider" label="Range Slider"></wink-form-label>
        <div class="slider-wrapper">
          <span>
            0
          </span>
          <div class="slider-controls">
            <div class="slider-tooltip-wrapper">
              <div class="slider-tooltip" style="left: calc(28% + (4.3999999999999995px));">
                28
              </div>
              <div class="slider-tooltip" style="left: calc(59% + (-1.8000000000000007px));">
                59
              </div>
            </div>
            <div class="slider-track" style="background: linear-gradient(to right, var(--semantic-color-background-surface-bold-hovered) 28% , var(--semantic-color-background-surface-action-default) 28% , var(--semantic-color-background-surface-action-default) 59%, var(--semantic-color-background-surface-bold-hovered) 59%);"></div>
            <input class="slider slider-from" max="100" min="0" step="1" type="range" value="28">
            <input class="slider slider-to" max="100" min="0" step="1" type="range" value="59">
          </div>
          <span>
            100
          </span>
        </div>
        <div class="slider-specific">
          <wink-input class="slider-specific-from" inputid="range-sliderfrom-value" isrequired="" label="From" max-value="100" min-value="0" name="fromValue" step="1" type="number" value="28"></wink-input>
          <wink-input class="slider-specific-to" inputid="range-sliderto-value" isrequired="" label="To" max-value="100" min-value="0" name="toValue" step="1" type="number" value="59"></wink-input>
        </div>
      </label>
    </wink-range-slider>
  `);
  });

  it('should render the element wink-range-slider single', async () => {
    const page = await newSpecPage({
      components: [RangeSlider],
      html: `<wink-range-slider
            slider-type="single"
            show-input="true"
            show-values="true"
            min-value="0"
            max-value="100"
            value="10"
            step="1"
            label="Range Slider"
            helper="Slider"
            slider-id="range-slider"
          ></wink-range-slider>`,
    });

    expect(page.root).toEqualHtml(`
<wink-range-slider bottom-value="0" helper="Slider" label="Range Slider" max-value="100" min-value="0" show-input="true" show-values="true" slider-id="range-slider" slider-type="single" step="1" value="10">
      <label class="slider-container slider-container-single">
        <wink-form-label helper="Slider" label="Range Slider"></wink-form-label>
        <div class="slider-wrapper">
          <span>
            0
          </span>
          <div class="slider-controls">
            <div class="slider-tooltip-wrapper">
              <div class="slider-tooltip" style="left: calc(10% + (8px));">
                10
              </div>
            </div>
            <div class="slider-track" style="background: linear-gradient(to right, var(--semantic-color-background-surface-action-default) 10%, var(--semantic-color-background-surface-bold-hovered) 10%);"></div>
            <input class="slider slider-to" max="100" min="0" step="1" type="range" value="10">
          </div>
          <span>
            100
          </span>
          <div class="slider-specific">
            <wink-input class="slider-specific-to" inputid="range-sliderto-value" isrequired="" label="" max-value="100" min-value="0" name="toValue" step="1" type="number" value="10"></wink-input>
          </div>
        </div>
      </label>
    </wink-range-slider>
  `);
  });
});
