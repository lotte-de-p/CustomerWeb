import { ManageProductsRequest } from '../../../../../shared/interfaces/manage-product-request.interface';
import { SalesOrder } from '../../../../../shared/models/sales-order.model';

export enum SalesActionTypes {
  GET_SALES_ORDER = '[SALES] Get Sales Order',
  UPDATE_IS_ABANDONABLE_TO_FALSE = '[SALES] Update isAbandonable to false',
  VALIDATE_OPTIONS_CHECKOUT = '[SALES] Validate Options Checkout',
  SET_E_SIM_ALLOWED = '[SALES] Set eSim allowed',
  CALCULATE_INTENT = '[SALES] Calculate Intent',
  CALCULATE_INTENT_STATUS = '[SALES] Calculate Intent Status',
  MANAGE_PROMOTIONS = '[SALES] Manage Promotions',
  ADD_SIM = '[SALES] Add SIM',
  MANAGE_CONTENT_PACK = '[SALES] Content Pack',
  SET_ERROR_MESSAGE = '[SALES] Set Error Message',
}

export interface GetSalesOrderActionPayload {
  messageGroupName: string;
  salesOrderId?: string;
  force?: boolean;
  source?: string;
  statuses?: string;
  orderEligibility?: boolean;
  token?: string;
  truncated?: boolean;
  isContentPack?: boolean;
}

export interface CalculateIntentActionPayload {
  messageGroupName: string;
  salesOrder: SalesOrder;
}

export interface Intents {
  intent: string;
  analyticsIntent: string;
}

export interface UpdateIntent {
  salesOrder: SalesOrder;
  messageGroupName: string;
}

export interface ManageProductsActionPayload {
  messageGroupName: string;
  salesOrderId?: string;
  data: ManageProductsRequest[];
  source?: string;
  statuses?: string;
  isPIDAndPrepaidMember?: boolean;
}
