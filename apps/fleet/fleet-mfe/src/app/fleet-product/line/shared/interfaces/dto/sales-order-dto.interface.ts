import { RawOmapiProductInterface } from '@telenet/ng-lib-omapi';
import { PricesDto } from './prices-dto.interface';
import { DeliveryItemDto } from './delivery-item-dto.interface';
import { OnTopPromosInterface } from '../../models/sales-order/sales-order.model';
import { InstallationDto } from './installation-dto.interface';
import { OrderItemDto, ValidationDto } from './order-item-dto.interface';

export interface SalesOrderDto {
  status?: string;
  customerId?: string;
  id?: string;
  name?: string;
  lineCount?: string;
  token?: string;
  prices: PricesDto;
  oneTimeEarlyTerminationFee?: string;
  lineItems?: LineItemDto[];
  deliveryItems?: DeliveryItemDto[];
  validations?: ValidationDto[];
  code?: string;
  correlationId?: string;
  pricesWereUpdated?: boolean;
  manualAddress?: boolean;
  feasibilityCheckRequired: boolean;
  installation?: InstallationDto;
  modemSwapReq?: boolean;
  manualProcessingRequired?: boolean;
  contractSummaryReRequired?: boolean;
  isSlotAvailable?: boolean;
  isBundleFamilySame?: boolean;
  mobileLinesInNewBundle?: string;
  hwitems?: InstallationDto;
  isBillDeliveryMethodChanged?: boolean;
  promo?: OnTopPromosInterface;
  registration?: RegistrationDto;
  amountOfLimitedSims?: number;
  eSimAllowed?: boolean;
  taskGroupId?: string;
}

export interface DiscountDto {
  prices: PricesDto;
  specurl: string;
  rawOmapi?: RawOmapiProductInterface;
}

export interface RegistrationDto {
  orderItems: OrderItemDto[];
}

export interface LineItemDto {
  productIdentifier?: string;
  acquisitionType?: string;
  orderItems: OrderItemDto[];
  publicateNumber: boolean;
  noProductChanges?: boolean;
}

export interface DiscountItemDto {
  discountDescriptions?: DiscountDescriptionDto[];
  discounts?: DiscountDto[];
}

interface DiscountDescriptionDto {
  localizedNames: LocalizedDiscountNames;
  name: string;
}

interface LocalizedDiscountNames {
  EN?: string;
  FR?: string;
  NL?: string;
}
