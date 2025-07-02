import { InputOption } from './input-radio.model';

export class InputOptionWithOptionalInputField extends InputOption {
  hasInputField: boolean;

  constructor(value?: string, label?: string, hasInputField?: boolean) {
    super(value, label);
    this.hasInputField = hasInputField ?? false;
  }
}
