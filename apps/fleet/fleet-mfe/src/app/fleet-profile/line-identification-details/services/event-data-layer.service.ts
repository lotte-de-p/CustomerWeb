import { FormGroup } from '@angular/forms';
import { DataLayerAttributes, DataLayerService } from '@telenet/ng-lib-datalayer';
import { Injectable } from '@angular/core';
import { LineIdentificationDetailsDatalayerConstants } from '../constants/line-identification-details-datalayer.constants';
import { LineIdentificationDetailsConstants } from '../constants/line-identification-details.constants';

@Injectable({
  providedIn: 'root',
})
export class EventDataLayerService {
  constructor(private readonly dataLayerService: DataLayerService) {}

  addEventToDataLayer(formGroup: FormGroup): void {
    const category = this.dataLayerService.createCategory(
      LineIdentificationDetailsDatalayerConstants.PRIMARY_CATEGORY_FLEET,
      LineIdentificationDetailsDatalayerConstants.SUB_CATEGORY1_FLEET_PROFILE
    );
    const eventInfo = this.dataLayerService.createEventInfo(
      LineIdentificationDetailsDatalayerConstants.EVENT_NAME_LINE_DETAILS_CHANGED,
      LineIdentificationDetailsDatalayerConstants.EVENT_TYPE_CHANGE_PROFILE,
      [LineIdentificationDetailsConstants.MESSAGE_GROUP]
    );

    const dataLayerAttributes: DataLayerAttributes = {
      itemName: LineIdentificationDetailsDatalayerConstants.EVENT_ATTRIBUTE_ITEM_NAME,
      itemData: this.getChangedFormData(formGroup),
    };
    this.dataLayerService.sendEvent({ eventInfo, attributes: dataLayerAttributes, category });
  }

  private getChangedFormData(formGroup: FormGroup): string {
    const changedProperties: string[] = [];

    Object.keys(formGroup.controls).forEach((name) => {
      const currentControl = formGroup.controls[name];
      if (currentControl.dirty) {
        changedProperties.push(name);
      }
    });
    return changedProperties.join();
  }
}
