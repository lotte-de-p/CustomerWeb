import { Injectable } from '@angular/core';
import { LineOption } from './line-option.model';

@Injectable()
export class GroupedOptions {
  category?: string;
  subcategory?: LineOption[];
  isOpen?: boolean;
}
