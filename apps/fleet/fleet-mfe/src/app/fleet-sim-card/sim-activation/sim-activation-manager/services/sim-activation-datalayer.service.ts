import { AnalyticsConstants, DataLayerService } from '@telenet/ng-lib-datalayer';
import { Injectable } from '@angular/core';
import { SimActivationConstants } from '../constants/sim-activation.constants';

@Injectable({
  providedIn: 'root',
})
export class SimActivationDataLayerService {
  constructor(private readonly dataLayerService: DataLayerService) {}

  public addPageEvent(): void {
    this.dataLayerService.addPageEvent(AnalyticsConstants.STEP_ACTIVATE_SIM_OVERLAY, {
      intent: AnalyticsConstants.INTENT_ACTIVATE_SIM,
      stepId: AnalyticsConstants.STEP_ACTIVATE_SIM_OVERLAY,
    });
  }

  public sendDataLayerEvent(name: string, type: string) {
    const attributes: Record<string, unknown> = {};

    attributes[AnalyticsConstants.ATTRIBUTES_INTENT] = AnalyticsConstants.INTENT_ACTIVATE_SIM;
    attributes[AnalyticsConstants.ATTRIBUTES_FLOW_TYPE] = type;
    const category = this.dataLayerService.createCategory(
      AnalyticsConstants.CATEGORY_FLEET,
      AnalyticsConstants.SUB_CATEGORY_SIM_CARD
    );
    const eventInfo = this.dataLayerService.createEventInfo(name, type, [SimActivationConstants.MESSAGE_GROUP]);
    this.dataLayerService.sendEvent({ eventInfo, attributes, category });
  }
}
