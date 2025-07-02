export class InputOption {
  value: string;
  label: string;
  disabled: boolean;

  constructor(value: string = '', label: string = '', disabled: boolean = false) {
    this.value = value;
    this.label = label;
    this.disabled = disabled;
  }

  withValue(value: string): InputOption {
    this.value = value;
    return this;
  }

  withLabel(label: string): InputOption {
    this.label = label;
    return this;
  }

  withValueAndLabel(valueAndLabel: string): InputOption {
    this.value = valueAndLabel;
    this.label = valueAndLabel;
    return this;
  }
}
