import { inject, Injectable } from '@angular/core';
import { DataLayerAttributes, DataLayerService, EventCategoryEnum, EventTypes } from '@telenet/ng-lib-datalayer';
import * as udl from 'udl';
import {
  EVENT_NAME_LINK_BUTTON_CLICKED,
  EVENT_NAME_LINK_CLICKED,
  EVENT_NAME_SELF_SERVICE_FLOW_STARTED,
} from '../constants/profile-datalayer.constants';
import { ManageSocialLoginConstants } from '../constants/manage-social-login.constant';
import { ProfileOverviewDataLayerEnum } from '../enums/profile-overview-data-layer.enums';
import { ManageAuthenticatorsConstants } from '../constants/manage-authenticators.constant';

@Injectable({
  providedIn: 'root',
})
export class ProfileDatalayerService {
  private readonly dataLayerService = inject(DataLayerService);

  readonly MESSAGE_GROUP_MANAGE_SOCIAL_LOGIN = ['manage-social-login'];
  readonly MESSAGE_GROUP_MANAGE_AUTHENTICATORS = ['manage-authenticators'];
  readonly MESSAGE_GROUP_PROFILE_OVERVIEW = ['profile-overview'];
  readonly FLOWTYPE_CARE = 'care';

  currentIntent: string;
  componentInstanceId: string;

  sendUnlinkSocialEvent(): void {
    const eventInfo = this.getEventInfo(
      EVENT_NAME_SELF_SERVICE_FLOW_STARTED,
      EventTypes.SELF_SERVICE_FLOW_STARTED,
      this.MESSAGE_GROUP_MANAGE_SOCIAL_LOGIN
    );
    this.currentIntent = ManageSocialLoginConstants.DATALAYER_INTENT_UNLINK_SOCIAL_LOGIN;
    const attributes = this.getAttributes();
    this.addEvent(eventInfo, attributes);
  }

  sendUpdate2faStatusEvent(): void {
    const eventInfo = this.getEventInfo(
      EVENT_NAME_SELF_SERVICE_FLOW_STARTED,
      EventTypes.SELF_SERVICE_FLOW_STARTED,
      this.MESSAGE_GROUP_MANAGE_AUTHENTICATORS
    );
    this.currentIntent = ManageAuthenticatorsConstants.DATALAYER_INTENT_UPDATE_2FA_STATUS;
    const attributes = this.getAttributes();
    this.addEvent(eventInfo, attributes);
  }

  sendUnenrollFactorEvent(): void {
    const eventInfo = this.getEventInfo(
      EVENT_NAME_SELF_SERVICE_FLOW_STARTED,
      EventTypes.SELF_SERVICE_FLOW_STARTED,
      this.MESSAGE_GROUP_MANAGE_AUTHENTICATORS
    );
    this.currentIntent = ManageAuthenticatorsConstants.DATALAYER_INTENT_UNENROLL_FACTOR;
    const attributes = this.getAttributes();
    this.addEvent(eventInfo, attributes);
  }

  sendNavLinkClickedEvent(itemType: string, destinationUrl?: string, isLink?: boolean): void {
    const itemName = ProfileOverviewDataLayerEnum[itemType] || itemType;
    const linkType = isLink ? EVENT_NAME_LINK_CLICKED : EVENT_NAME_LINK_BUTTON_CLICKED;
    const eventInfo = this.getEventInfo(linkType, EventTypes.CLICK, this.MESSAGE_GROUP_PROFILE_OVERVIEW);
    const attributes = this.getAttributes(itemName, '', destinationUrl);

    this.addEvent(eventInfo, attributes);
  }

  private getEventInfo(eventName: string, eventType: string, messageGroup: string[]): udl.EventInfo {
    return this.dataLayerService.createEventInfo(eventName, eventType, messageGroup);
  }

  private getAttributes(itemName = '', itemData = '', destinationURL = ''): DataLayerAttributes {
    return {
      itemName,
      itemData,
      intent: this.currentIntent,
      flowType: this.FLOWTYPE_CARE,
      destinationURL,
    } as DataLayerAttributes;
  }

  private addEvent(eventInfo: udl.EventInfo, attributes: DataLayerAttributes): void {
    this.dataLayerService.addEvent(eventInfo, attributes, this.category);
  }

  private get category(): udl.Category {
    return this.dataLayerService.createCategory(EventCategoryEnum.PRIMARY_CATEGORY_CARE, 'profile-management');
  }

  resetIntent(): void {
    this.currentIntent = '';
  }
}
