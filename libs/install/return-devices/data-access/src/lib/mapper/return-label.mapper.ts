import { Injectable } from '@angular/core';
import { ReturnLabel, RawReturnLabel } from '../entities/return-label.model';

@Injectable({
  providedIn: 'root',
})
export class ReturnLabelMapper {
  toModel(rawLabel: RawReturnLabel): ReturnLabel {
    return {
      label: rawLabel.label,
    };
  }
}
