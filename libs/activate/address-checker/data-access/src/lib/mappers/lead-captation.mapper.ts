import { MapperInterface } from '@telenet/ng-lib-shared';
import { RawLeadCaptationInterface } from '../interfaces/raw-lead-captation.interface';
import { LeadCaptationInterface } from '../interfaces/lead-captation.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LeadCaptationMapper implements MapperInterface<RawLeadCaptationInterface, LeadCaptationInterface> {
  toModel(data: RawLeadCaptationInterface): LeadCaptationInterface {
    return this.createLeadCaptation(data);
  }

  private createLeadCaptation(data: RawLeadCaptationInterface): LeadCaptationInterface {
    return {
      success: !!(data?.id ?? data?.success),
    };
  }
}
