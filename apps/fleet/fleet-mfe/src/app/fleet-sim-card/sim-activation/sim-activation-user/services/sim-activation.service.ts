import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { MobileService } from '../../../../shared/common/services/mobile/mobile.service';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { HttpErrorResponse } from '@angular/common/http';
import { SimActivationViewModel } from '../model/sim-activation.view-model';
import { SimActivationUserConstants } from '../constants/sim-activation-user.constants';
import { RecaptchaService } from '../../../../shared/common/services/recaptcha/recaptcha.service';
import { SimActivationStatusInterface } from '../../../../shared/common/interfaces/sim-activation-status.interface';

@Injectable({
  providedIn: 'root',
})
export class SimActivationService {
  constructor(
    private readonly mobileService: MobileService,
    private readonly recaptchaService: RecaptchaService
  ) {}

  getSimActivationStatus(msisdn: string, orderNumber: string): Observable<string> {
    return this.recaptchaService.getRecaptchaToken(SimActivationUserConstants.RECAPTCHA_ACTION_ACTIVATION_STATUS).pipe(
      mergeMap((token: string) => {
        return this.mobileService
          .getSimActivationStatus(SimActivationUserConstants.MESSAGE_GROUP, msisdn, orderNumber, token)
          .pipe(
            map((simActivationStatus: SimActivationStatusInterface) => {
              return simActivationStatus.status;
            }),
            catchError((errorResponse: unknown) => {
              return this.handleSimActivationStatusError(errorResponse as HttpErrorResponse);
            })
          );
      })
    );
  }

  activateSim(vm: SimActivationViewModel) {
    return this.mobileService
      .activateSim(SimActivationUserConstants.MESSAGE_GROUP, vm.msisdn, {
        orderNumber: vm.orderNumber,
        iccid: SimActivationUserConstants.SIM_CARD_NUMBER_PREFIX + vm.simCardNumber,
      })
      .pipe(
        catchError((errorResponse: unknown) => {
          return this.handleActivateSimError(errorResponse as HttpErrorResponse);
        })
      );
  }

  isSimActivated(): Observable<boolean> {
    return of(false);
  }

  private handleSimActivationStatusError(errorResponse: HttpErrorResponse): Observable<string> {
    if (this.isSimActivationStatusNotFoundError(errorResponse)) {
      return throwError(() => SimActivationUserConstants.ERROR_SIM_ACTIVATION_NOT_POSSIBLE);
    } else {
      return throwError(() => SimActivationUserConstants.ERROR_DEFAULT);
    }
  }

  private handleActivateSimError(errorResponse: HttpErrorResponse): Observable<string> {
    if (this.isWrongSimCardNumber(errorResponse)) {
      return throwError(() => SimActivationUserConstants.ERROR_WRONG_SIM_CARD_NUMBER);
    } else {
      return throwError(() => SimActivationUserConstants.ERROR_DEFAULT);
    }
  }

  private isWrongSimCardNumber(errorResponse: HttpErrorResponse): boolean {
    return errorResponse.error.code === SimActivationUserConstants.OCAPI_ERROR_CODE_WRONG_SIM_CARD_NUMBER;
  }

  private isSimActivationStatusNotFoundError(errorResponse: HttpErrorResponse): boolean {
    return SimActivationUserConstants.OCAPI_ERROR_CODES_SIM_ACTIVATION_STATUS_NOT_FOUND.includes(
      errorResponse.error.code
    );
  }
}
