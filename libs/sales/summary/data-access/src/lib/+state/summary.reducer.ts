import { Action, createFeature, createReducer, on } from '@ngrx/store';

import { produce } from 'immer';
import { defaultState, SummaryState } from './summary.state';
import {
  addSummaryDeliveryNotification,
  addSummaryGeneralNotification,
  setIngenicoFormUrl,
  setSummaryContractSummaryRequired,
  setSummaryDeliveryAddress,
  setSummaryDeliveryInfo,
  setSummaryDeliveryPersonalInfo,
  setSummaryDepreciationItems,
  setSummaryIngenicoForm,
  setSummaryIngenicoFormReady,
  setSummaryInvoiceInfo,
  setSummaryOrderItems,
  setSummaryPersonalInfo,
  setSummaryPrices,
  setTermsAndConditionsUrl,
} from './summary.actions';
import { stateFeatureName } from '../constants/state.const';
import { SummaryPersonalInfo } from '../interfaces/personal-info.interface';
import { DeliveryInfo, DeliveryInfoAddress, DeliveryPersonalInfo } from '../interfaces/delivery-info.interface';
import { BillingAddress } from '../interfaces/invoice-info.interface';
import { DepreciationItem } from '../interfaces/depriciation-item.interface';
import { SummaryOrderItem, SummaryPrices } from '../interfaces/order-item.interface';
import { SummaryNotification } from '../interfaces/notification.interface';
import { IngenicoRequestForm } from '@sales/shared/data-access';

export const reducer = createReducer(
  defaultState,
  on(setSummaryPersonalInfo, (state: SummaryState, props: { personalInfo: SummaryPersonalInfo }) => {
    return produce(state, (draft: SummaryState) => {
      draft.personalInfo = props.personalInfo;
    });
  }),
  on(setSummaryDeliveryInfo, (state: SummaryState, props: { deliveryInfo: DeliveryInfo }) => {
    return produce(state, (draft: SummaryState) => {
      draft.deliveryInfo = props.deliveryInfo;
    });
  }),
  on(setSummaryDeliveryPersonalInfo, (state: SummaryState, props: { personalInfo: DeliveryPersonalInfo }) => {
    return produce(state, (draft: SummaryState) => {
      if (draft.deliveryInfo) {
        draft.deliveryInfo.personalInfo = props.personalInfo;
      }
    });
  }),
  on(setSummaryDeliveryAddress, (state: SummaryState, props: { deliveryAddress: DeliveryInfoAddress }) => {
    return produce(state, (draft: SummaryState) => {
      if (draft.deliveryInfo) {
        draft.deliveryInfo.address = props.deliveryAddress;
      }
    });
  }),
  on(setSummaryInvoiceInfo, (state: SummaryState, props: { billingAddress: BillingAddress }) => {
    return produce(state, (draft: SummaryState) => {
      draft.invoiceInfo = props.billingAddress;
    });
  }),
  on(setSummaryOrderItems, (state: SummaryState, props: { orderItems: SummaryOrderItem[] }) => {
    return produce(state, (draft: SummaryState) => {
      draft.orderItems = props.orderItems;
    });
  }),
  on(setSummaryPrices, (state: SummaryState, props: { prices: SummaryPrices }) => {
    return produce(state, (draft: SummaryState) => {
      draft.prices = props.prices;
    });
  }),
  on(setSummaryDepreciationItems, (state: SummaryState, props: { depreciationItems: DepreciationItem[] }) => {
    return produce(state, (draft: SummaryState) => {
      draft.depreciationItems = props.depreciationItems;
    });
  }),
  on(setSummaryContractSummaryRequired, (state: SummaryState, props: { contractSummaryRequired: boolean }) => {
    return produce(state, (draft: SummaryState) => {
      draft.contractSummaryRequired = props.contractSummaryRequired;
    });
  }),
  on(setSummaryIngenicoForm, (state: SummaryState, props: { ingenicoForm: IngenicoRequestForm }) => {
    return produce(state, (draft: SummaryState) => {
      draft.ingenicoRequest = props.ingenicoForm;
    });
  }),
  on(setSummaryIngenicoFormReady, (state: SummaryState, props: { ingenicoFormReady: boolean }) => {
    return produce(state, (draft: SummaryState) => {
      draft.ingenicoFormReady = props.ingenicoFormReady;
    });
  }),
  on(addSummaryGeneralNotification, (state: SummaryState, props: { notification: SummaryNotification }) => {
    return produce(state, (draft: SummaryState) => {
      const notificationExists = draft.generalNotifications.some(
        (notification) => notification.message === props.notification.message
      );
      if (!notificationExists) {
        draft.generalNotifications.push(props.notification);
      }
    });
  }),
  on(addSummaryDeliveryNotification, (state: SummaryState, props: { notification: SummaryNotification }) => {
    return produce(state, (draft: SummaryState) => {
      draft.deliveryNotifications.push(props.notification);
    });
  }),
  on(setIngenicoFormUrl, (state: SummaryState, props: { ingenicoFormUrl: string | undefined }) => {
    return produce(state, (draft: SummaryState) => {
      draft.ingenicoFormUrl = props.ingenicoFormUrl;
    });
  }),
  on(setTermsAndConditionsUrl, (state: SummaryState, props: { termsAndConditionsUrl: string | undefined }) => {
    return produce(state, (draft: SummaryState) => {
      draft.termsAndConditionsUrl = props.termsAndConditionsUrl;
    });
  })
);

export function summaryReducer(state: SummaryState = defaultState, action: Action): SummaryState {
  return reducer(state, action);
}

export const summaryFeature = createFeature({
  name: stateFeatureName,
  reducer: summaryReducer,
});
