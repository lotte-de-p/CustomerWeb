import { InputOption } from './input-radio.model';

export class InputOptionWithIcon extends InputOption {
  icon: string;
  text: string | undefined;

  constructor(value?: string, label?: string, icon: string = '', text?: string) {
    super(value, label);
    this.icon = icon;
    this.text = text;
  }

  withValue(value: string): InputOptionWithIcon {
    this.value = value;
    return this;
  }

  withLabel(label: string): InputOptionWithIcon {
    this.label = label;
    return this;
  }

  withIcon(icon: string): InputOptionWithIcon {
    this.icon = icon;
    return this;
  }

  withText(text: string): InputOptionWithIcon {
    this.text = text;
    return this;
  }
}
