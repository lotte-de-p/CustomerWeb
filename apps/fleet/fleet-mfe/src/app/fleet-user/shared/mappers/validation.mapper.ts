import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { ValidationInterface } from '../interfaces/validation.interface';
import { RawValidationInterface } from '../interfaces/raw/raw-sales-order.interface';

@Injectable({
  providedIn: 'root',
})
export class ValidationMapper implements MapperInterface<RawValidationInterface, ValidationInterface> {
  toModel(rawValidation: RawValidationInterface): ValidationInterface {
    return this.createValidation(rawValidation);
  }

  private createValidation(rawValidation: RawValidationInterface): ValidationInterface {
    const validation = {} as ValidationInterface;
    validation.message = rawValidation.message;
    validation.typeOfProblem = rawValidation.typeOfProblem;
    validation.validationPriority = rawValidation.validationPriority;
    if (rawValidation.targetOrderItemId) {
      validation.targetOrderItemId = rawValidation.targetOrderItemId;
    }
    return validation;
  }
}
