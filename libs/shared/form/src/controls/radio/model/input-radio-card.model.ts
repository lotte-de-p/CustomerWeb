import { InputOption } from './input-radio.model';

export class InputOptionWithCard extends InputOption {
  text: string;

  constructor(value?: string, label?: string, text: string = '') {
    super(value, label);
    this.text = text;
  }

  withValue(value: string): InputOptionWithCard {
    this.value = value;
    return this;
  }

  withLabel(label: string): InputOptionWithCard {
    this.label = label;
    return this;
  }

  withText(text: string): InputOptionWithCard {
    this.text = text;
    return this;
  }
}
