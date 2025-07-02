import { Type } from '@angular/core';

export interface ComponentStep {
  key: string;
  component: Type<unknown>;
}
