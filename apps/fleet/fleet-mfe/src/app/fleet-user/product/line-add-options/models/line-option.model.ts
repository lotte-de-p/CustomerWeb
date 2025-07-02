import { Injectable } from '@angular/core';
import { PriceInterface } from '../../../shared/interfaces/price.interface';

@Injectable()
export class LineOption {
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
  optionCategory?: string;
  status?: string;
  upgradedFrom?: string;
}
