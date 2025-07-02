import { Injectable } from '@angular/core';
import { LineOption } from './line-option.model';

@Injectable()
export class GroupedOptions {
  category?: string;
  lineOptions?: LineOption[];
  isOpen?: boolean;
}
