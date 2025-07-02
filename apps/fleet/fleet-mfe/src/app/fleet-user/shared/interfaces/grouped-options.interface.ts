import { LineOption } from './line-option.interface';

export interface GroupedOptions {
  category?: string;
  lineOptions?: LineOption[];
  isOpen?: boolean;
}
