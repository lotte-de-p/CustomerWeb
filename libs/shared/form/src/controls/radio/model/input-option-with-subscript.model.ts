import { InputOption } from './input-radio.model';

export class InputOptionWithSubscript extends InputOption {
  subScript?: string;

  constructor(value?: string, label?: string, subScript?: string) {
    super(value, label);
    this.subScript = subScript;
  }
}
