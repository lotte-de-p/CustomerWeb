import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { ValidationInterface } from '../../models/sales-order/sales-order.model';
import { ValidationDto } from '../../interfaces/dto/order-item-dto.interface';

@Injectable({
  providedIn: 'root',
})
export class ValidationMapper implements MapperInterface<ValidationDto, ValidationInterface> {
  toModel(rawValidation: ValidationDto): ValidationInterface {
    return this.createValidation(rawValidation);
  }

  private createValidation(rawValidation: ValidationDto): ValidationInterface {
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
