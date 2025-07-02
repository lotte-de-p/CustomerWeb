export interface HardwareDiscount {
  availableSlots: number;
  totalSlots: number;
  creditCheck: string;
  usedDiscounts: UsedDiscounts[];
}

export interface UsedDiscounts {
  device: {
    manufacturer: string;
    name: string;
    imageUrl: string;
    itemCode: string;
  };
  deliveryOrder: {
    id: string;
    expectedDeliveryDate: string;
    tracking: {
      number: string;
      url: string;
    };
  };
  originalPrice: number;
  discountedPrice: number;
  invoice: HardwareInvoice;
  contract: {
    remainingMonths: number;
    obligationInMonths: number;
    remainingValue: number;
  };
  depreciations: Depreciations[];
}

export interface HardwareInvoice {
  billingAccountNumber: string;
  documentReferenceNumber: string;
}

export interface Depreciations {
  date: string;
  remainingValue: number;
  status: string;
}

export interface HardwareDiscountDatalayerEvent {
  eventName: string;
  eventType: string;
}
