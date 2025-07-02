export interface DeliveryItemDetails {
  iconType: string;
  name: string;
}

export interface DeliveryContentItem {
  productType: string;
  quantity: number;
  deliveryInfo: DeliveryItemDetails;
}
