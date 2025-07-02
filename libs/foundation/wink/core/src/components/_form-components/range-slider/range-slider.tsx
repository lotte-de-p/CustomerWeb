import { AttachInternals, Component, h, Method, Prop, State } from '@stencil/core';
import { SliderType, SLIDER_TYPES, SliderDirections, SLIDER_DIRECTIONS } from './models/range-slider.types';

@Component({
  tag: 'wink-range-slider',
  styleUrls: {
    telenet: 'styles/brands/range-slider.telenet.scss',
    base: 'styles/brands/range-slider.base.scss',
  },
  scoped: true,
})
export class RangeSlider {
  @AttachInternals() internals!: ElementInternals;

  @Prop() sliderId = '';
  @Prop() label = '';
  @Prop() helper = '';
  @Prop() tooltip?: string;
  @Prop() minValue = 0;
  @Prop() maxValue = 100;
  @Prop() step = 1;
  @Prop() showValues = false;
  @Prop() showInput = false;
  @Prop() errorMessage = '';
  @Prop() sliderType: SliderType = SLIDER_TYPES.range;
  @Prop({ mutable: true, reflect: true }) bottomValue = 0;
  @Prop({ mutable: true, reflect: true }) value = 100;

  @State() topValueError?: string;
  @State() bottomValueError?: string;

  @Method()
  async showFromValue() {
    return this.bottomValue;
  }

  @Method()
  async showToValue() {
    return this.value;
  }

  @Method()
  async getDragValue() {
    return this.value;
  }

  componentWillRender() {
    this.checkForErrors();
  }

  private handleValueChanged(event: CustomEvent<string>, slider: SliderDirections) {
    const value = parseFloat(event.detail);
    this.updateValue(value, slider);
  }

  private handleValueSlider(event: Event, slider: SliderDirections) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      const value = parseFloat(inputElement.value);
      this.updateValue(value, slider);
    }
  }

  private updateValue(value: number, slider: SliderDirections) {
    if (slider === SLIDER_DIRECTIONS.from) {
      this.bottomValue = value;
    }

    if (slider === SLIDER_DIRECTIONS.to) {
      this.value = value;
    }

    if (value < this.minValue) {
      slider === SLIDER_DIRECTIONS.from ? (this.bottomValue = this.minValue) : (this.value = this.minValue);
    }

    if (value > this.maxValue) {
      this.value = this.maxValue;
    }

    if (this.bottomValue > this.value) {
      this.invertValues();
    }
  }

  private invertValues() {
    const tempValue = this.bottomValue;
    this.bottomValue = this.value;
    this.value = tempValue;
  }

  private calculateTooltipPosition(value: number) {
    const newValue = Number(((value - this.minValue) * 100) / (this.maxValue - this.minValue));
    const newPosition = 10 - newValue * 0.2;

    if (newValue < 0) {
      return '3%';
    }

    if (newValue > 100) {
      return '97%';
    }

    return `calc(${newValue}% + (${newPosition}px))`;
  }

  private calculateBackground() {
    const lowTopValue = this.minValue || 0;
    const highTopValue = this.maxValue || 100;
    const lowValue = this.bottomValue || lowTopValue;
    const highValue = this.value || highTopValue;

    const sliderLength = highTopValue - lowTopValue;
    const toPercentage = Math.round((((highValue - lowTopValue) / sliderLength) * 100) / this.step) * this.step;

    if (this.sliderType === SLIDER_TYPES.single) {
      return `linear-gradient(to right, var(--semantic-color-background-surface-action-default) ${toPercentage}%, var(--semantic-color-background-surface-bold-hovered) ${toPercentage}%)`;
    }

    const fromPercentage = Math.round((((lowValue - lowTopValue) / sliderLength) * 100) / this.step) * this.step;
    return `linear-gradient(to right, var(--semantic-color-background-surface-bold-hovered) ${fromPercentage}% , var(--semantic-color-background-surface-action-default) ${fromPercentage}% , var(--semantic-color-background-surface-action-default) ${toPercentage}%, var(--semantic-color-background-surface-bold-hovered) ${toPercentage}%)`;
  }

  private renderSpecific() {
    const fromValueProps = this.bottomValueError ? { error: this.bottomValueError } : {};
    const toValueProps =
      this.topValueError && this.sliderType === SLIDER_TYPES.range ? { error: this.topValueError } : {};

    return (
      <div class="slider-specific">
        {this.sliderType === SLIDER_TYPES.range && (
          <wink-input
            class="slider-specific-from"
            type="number"
            inputId={this.sliderId + 'from-value'}
            name="fromValue"
            label="From"
            value={this.bottomValue.toString()}
            min-value={this.minValue}
            max-value={this.maxValue}
            step={this.step}
            isRequired
            {...fromValueProps}
            onValueChanged={(event) => this.handleValueChanged(event, SLIDER_DIRECTIONS.from)}></wink-input>
        )}
        <wink-input
          class="slider-specific-to"
          type="number"
          inputId={this.sliderId + 'to-value'}
          name="toValue"
          label={this.sliderType === SLIDER_TYPES.range ? 'To' : ''}
          value={this.value.toString()}
          min-value={this.minValue}
          max-value={this.maxValue}
          step={this.step}
          isRequired
          {...toValueProps}
          onValueChanged={(event) => this.handleValueChanged(event, SLIDER_DIRECTIONS.to)}></wink-input>
      </div>
    );
  }

  private checkForErrors() {
    if ((!this.bottomValue && this.bottomValue !== 0) || this.bottomValue % this.step !== 0) {
      this.bottomValueError = this.errorMessage;
    } else {
      this.bottomValueError = undefined;
    }
    if ((!this.value && this.value !== 0) || this.value % this.step !== 0) {
      this.topValueError = this.errorMessage;
    } else {
      this.topValueError = undefined;
    }
  }

  render() {
    return (
      <label class={`slider-container slider-container-${this.sliderType}`}>
        <wink-form-label label={this.label} helper={this.helper} tooltip={this.tooltip}></wink-form-label>
        <div class="slider-wrapper">
          {this.showValues && <span>{this.minValue}</span>}
          <div class="slider-controls">
            <div class={`slider-tooltip-wrapper ${!this.showInput ? 'slider-tooltip-shown' : ''}`}>
              {this.sliderType === SLIDER_TYPES.range && (
                <div style={{ left: this.calculateTooltipPosition(this.bottomValue) }} class="slider-tooltip">
                  {this.bottomValue}
                </div>
              )}
              <div style={{ left: this.calculateTooltipPosition(this.value) }} class="slider-tooltip">
                {this.value}
              </div>
            </div>
            <div style={{ background: this.calculateBackground() }} class="slider-track"></div>
            {this.sliderType === SLIDER_TYPES.range && (
              <input
                class="slider slider-from"
                type="range"
                value={this.bottomValue}
                min={this.minValue}
                max={this.maxValue}
                step={this.step}
                onInput={(event: Event) => this.handleValueSlider(event, SLIDER_DIRECTIONS.from)}
              />
            )}
            <input
              class="slider slider-to"
              type="range"
              value={this.value}
              min={this.minValue}
              max={this.maxValue}
              step={this.step}
              onInput={(event: Event) => this.handleValueSlider(event, SLIDER_DIRECTIONS.to)}
            />
          </div>
          {this.showValues && <span>{this.maxValue}</span>}
          {this.sliderType === SLIDER_TYPES.single && this.showInput && this.renderSpecific()}
        </div>
        {this.sliderType === SLIDER_TYPES.range && this.showInput && this.renderSpecific()}
        {this.topValueError && this.sliderType === SLIDER_TYPES.single && (
          <wink-validation-message message={this.topValueError} type="error" />
        )}
      </label>
    );
  }
}
