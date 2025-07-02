import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { User } from '../entities/user.interface';
import { RawUser } from '../entities/raw/raw-user-interface';
import { MobileLine } from '../entities/mobile-line.interface';
import { RawMobileLine } from '../entities/raw/raw-mobile-line.interface';
import { MobileLineMapper } from '../mapper/mobile-line.mapper';
import { MobileLinesMapper } from '../mapper/mobile-lines.mapper';
import { ActivationParams } from '../entities/activation-params.interface';
import { HttpResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class SimManagementService {
  private readonly messageGroup = 'sim-management';
  private readonly endpoint = '/public/api/sim-management-cs/v1/';
  private readonly ocapiService = inject(OcapiService);
  private readonly MOBILE_LINES_PATH = 'mobile-lines/';

  getMobileLines(): Observable<MobileLine[]> {
    return this.ocapiService.doGet(
      new OcapiCallConfig<RawMobileLine[], MobileLine[]>(
        this.messageGroup,
        `${this.endpoint}mobile-lines`,
        new MobileLinesMapper()
      )
    );
  }

  getHouseholdUsers(mobileLine: MobileLine): Observable<User[]> {
    return this.ocapiService.doGet(
      new OcapiCallConfig<RawUser[], User[]>(
        this.messageGroup,
        `${this.endpoint}${this.MOBILE_LINES_PATH}${mobileLine.msisdn}/assignable-profiles`
      )
    );
  }

  setMobileLine(mobileLine: MobileLine, changes: Partial<MobileLine>): Observable<MobileLine> {
    return this.ocapiService.doPatch(
      new OcapiCallConfig<RawMobileLine, MobileLine>(
        this.messageGroup,
        `${this.endpoint}${this.MOBILE_LINES_PATH}${mobileLine.msisdn}`,
        new MobileLineMapper(),
        changes
      )
    );
  }

  getSimSwapSalesOrderId(msisdn: string): Observable<string> {
    return this.ocapiService.doPost(
      new OcapiCallConfig(this.messageGroup, `${this.endpoint}${this.MOBILE_LINES_PATH}${msisdn}/swap-sim/sim`)
    );
  }

  validateSim(orderNumber: string, msisdn: string, iccid: string): Observable<{ orderType: string; lineType: string }> {
    return this.ocapiService.doPost(
      new OcapiCallConfig(
        this.messageGroup,
        `${this.endpoint}${this.MOBILE_LINES_PATH}${msisdn}/sim-cards/${iccid}/validation`,
        undefined,
        { orderNumber }
      )
    );
  }

  activateSim(activationParams: ActivationParams): Observable<HttpResponse<null>> {
    return this.ocapiService.doPost(
      new OcapiCallConfig(
        this.messageGroup,
        `${this.endpoint}${this.MOBILE_LINES_PATH}${activationParams.msisdn}/sim-cards/${activationParams.iccid}/activation`,
        undefined,
        {
          accountType: activationParams.accountType,
          iccidThirdParty: activationParams.iccidThirdParty,
          accountNumberThirdParty: activationParams.accountNumberThirdParty,
          orderNumber: activationParams.orderNumber,
          homeFlow: true,
        }
      )
    );
  }

  generateSMSVerificationCode(msisdn: string): Observable<HttpResponse<null>> {
    return this.ocapiService.doPost(
      new OcapiCallConfig(
        this.messageGroup,
        `${this.endpoint}${this.MOBILE_LINES_PATH}${msisdn}/generate-verification-code`
      )
    );
  }

  getESimSwapSalesOrderId(msisdn: string, code: string): Observable<string> {
    return this.ocapiService.doPost(
      new OcapiCallConfig(
        this.messageGroup,
        `${this.endpoint}${this.MOBILE_LINES_PATH}${msisdn}/swap-sim/esim`,
        undefined,
        { verificationCode: code }
      )
    );
  }

  deactivateESimWearable(mobileLine: MobileLine): Observable<MobileLine> {
    return this.ocapiService.doDelete(
      new OcapiCallConfig(this.messageGroup, `${this.endpoint}${this.MOBILE_LINES_PATH}${mobileLine.msisdn}/wearable`)
    );
  }
}
