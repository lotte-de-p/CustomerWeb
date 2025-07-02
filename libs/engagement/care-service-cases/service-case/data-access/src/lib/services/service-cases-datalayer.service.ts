import { Injectable } from '@angular/core';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { ServiceCasesConstants } from '../constants/service-cases.constants';
import { Page, PageInfo } from 'udl';

@Injectable({
  providedIn: 'root',
})
export class ServiceCasesDatalayerService {
  constructor(private readonly dataLayerService: DataLayerService) {}

  public setPageProperties(): void {
    const pageInfo = new PageInfo();
    pageInfo.setPageID(ServiceCasesConstants.MESSAGE_GROUP);
    pageInfo.setPageName(ServiceCasesConstants.MESSAGE_GROUP);
    const pageJSON = {
      pageInfo: pageInfo,
    };
    const page = new Page(pageJSON);
    this.dataLayerService.setPage(page);
  }

  public addPageEvent(): void {
    this.dataLayerService.addPageEvent(ServiceCasesConstants.STEP_SERVICE_CASES, {
      intent: ServiceCasesConstants.INTENT_VIEW_SERVICE_CASES,
      stepId: ServiceCasesConstants.STEP_SERVICE_CASES,
    });
  }

  public sendDataLayerEventWithAttributes(
    name: string,
    type: string,
    itemName?: string,
    itemData?: string,
    itemGroup?: string
  ) {
    const attributes: Record<string, unknown> = {};

    if (itemName !== null) {
      attributes[ServiceCasesConstants.ATTRIBUTES_ITEM_NAME] = itemName;
    }
    if (itemData !== null) {
      attributes[ServiceCasesConstants.ATTRIBUTES_ITEM_DATA] = itemData;
    }
    if (itemGroup !== null) {
      attributes[ServiceCasesConstants.ATTRIBUTES_ITEM_GROUP] = itemGroup;
    }
    const category = this.dataLayerService.createCategory(
      ServiceCasesConstants.CATEGORY_CARE,
      ServiceCasesConstants.MESSAGE_GROUP
    );
    const eventInfo = this.dataLayerService.createEventInfo(name, type, [ServiceCasesConstants.MESSAGE_GROUP]);
    this.dataLayerService.sendEvent({ eventInfo, attributes, category });
  }
}
