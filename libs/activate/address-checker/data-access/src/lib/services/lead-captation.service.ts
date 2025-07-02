import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { FiberAddressCheckerEnum } from '../models/fiber-address-checker.enum';
import { LeadCaptationInterface } from '../interfaces/lead-captation.interface';
import { LeadCaptationMapper } from '../mappers/lead-captation.mapper';
import { LeadCaptationPayloadInterface } from '../interfaces/lead-captation-payload.interface';
import { MarketoLeadInterface } from '../interfaces/marketo-lead.interface';
import { mergeMap } from 'rxjs/operators';
import { RecaptchaService } from '@telenet/ng-lib-shared';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';

@Injectable({
  providedIn: 'root',
})
export class LeadCaptationService {
  private readonly MARKETO_ACTION = 'submitContactUsWebforms';

  constructor(
    private readonly ocapiService: OcapiService,
    private readonly mapper: LeadCaptationMapper,
    private readonly recaptchaService: RecaptchaService,
    private readonly configService: ConfigService
  ) {}

  submitLead(messageGroup: string, payload: LeadCaptationPayloadInterface): Observable<LeadCaptationInterface> {
    return this.ocapiService.doPost(
      new OcapiCallConfig(messageGroup, FiberAddressCheckerEnum.LEAD_CAPTATION_AEMSIM, this.mapper, payload)
    );
  }

  submitMarketoLead(messageGroup: string, payload: MarketoLeadInterface): Observable<LeadCaptationInterface> {
    return this.getRecaptchaToken().pipe(
      mergeMap((token: string) => {
        payload['g-recaptcha-response'] = token;
        return this.ocapiService.doPost(
          new OcapiCallConfig(messageGroup, FiberAddressCheckerEnum.LEAD_CAPTATION_MARKETO, this.mapper, payload)
        );
      })
    );
  }

  getRecaptchaToken(): Observable<string> {
    return this.recaptchaService.getRecaptchaToken(
      this.MARKETO_ACTION,
      this.configService.getConfig(ConfigConstants.RECAPTCHA_V3_SITE_KEY)
    );
  }
}
