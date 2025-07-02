import { Injectable } from '@angular/core';
import { PriceInterface } from '../interfaces/price.interface';

@Injectable()
export class LineOption {
  id?: string;
  productId?: string;
  label?: string;
  weight?: number;
  type?: string;
  category?: string;
  volume?: string;
  visible?: boolean;
  isSelected?: boolean;
  isDisabled?: boolean;
  isAffected?: boolean;
  isOptionUpgraded?: boolean;
  isOptionAdded?: boolean;
  price?: PriceInterface;
  description?: string;
  optionCategory?: string;
  status?: string;
  upgradedFrom?: string;
}
