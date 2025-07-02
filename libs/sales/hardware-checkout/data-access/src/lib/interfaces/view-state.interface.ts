import { ViewStateEnum } from '../enums/view-state.enum';
import { ErrorViewModel } from '@sales/error/data-access';

export interface ViewState {
  key: ViewStateEnum;
  showNavigation: boolean;
  showBackButton: boolean;
  error?: ErrorViewModel;
}
