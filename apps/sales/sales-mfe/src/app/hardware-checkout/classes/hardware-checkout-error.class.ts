import { ErrorObject } from '../interfaces/error.interface';
import { HttpErrorResponse } from '@angular/common/http';

export class HardwareCheckoutError extends Error {
  errorObject: ErrorObject;
  constructor(errorObject: ErrorObject, error?: Error) {
    super(errorObject.key);
    if (error && error instanceof HttpErrorResponse) {
      this.errorObject = { ...errorObject, apiRequest: error.url };
    } else {
      this.errorObject = errorObject;
    }
  }
}
