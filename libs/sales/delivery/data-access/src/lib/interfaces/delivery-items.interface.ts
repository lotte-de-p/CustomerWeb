export interface DeliveryItemDetails {
  iconType: string;
  name: string;
}

export interface DeliveryItem {
  productType: string;
  quantity: number;
  deliveryInfo: DeliveryItemDetails;
}
