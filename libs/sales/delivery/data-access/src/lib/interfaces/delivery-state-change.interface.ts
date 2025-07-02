import { ViewStateEnum } from '../enums/view-state.enum';
import { ChangePersonalInfoInterface } from './change-personal-info-model.interface';

export interface DeliveryStateChangeInterface {
  state: ViewStateEnum;
  personalInfo: ChangePersonalInfoInterface;
}
