import { PriceInterface } from './price.interface';

export interface LineOption {
  id?: string;
  label?: string;
  weight?: number;
  type?: string;
  category?: string;
  volume?: string;
  visible?: boolean;
  isSelected?: boolean;
  isDisabled?: boolean;
  isAffected?: boolean;
  price?: PriceInterface;
  description?: string;
  shortDescription?: string;
}
