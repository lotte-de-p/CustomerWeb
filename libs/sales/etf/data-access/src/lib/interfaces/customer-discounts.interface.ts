export interface AvailableOnTopDiscountSlot {
  id: string;
  name: string;
  relatedProductTrigger?: {
    id: string;
    name: string;
  };
  endValidityDate: string;
  validityPeriod: string;
}

export interface UsedSlot {
  id: string;
  name: string;
  discountSlotType: string;
  obligationPeriod: string;
  endDateOfContract: string;
  initialPrice: {
    currency: {
      name: string;
      code: string;
    };
    value: string;
  };
  discountedPrice: {
    currency: {
      name: string;
      code: string;
    };
    value: string;
  };
  etf: {
    currency: {
      name: string;
      code: string;
    };
    value: string;
  };
  appliedDiscount: {
    id: string;
    name: string;
  };
  shouldBeTerminated?: boolean;
}

export interface HistoricalRecord {
  id: string;
  name: string;
  discountSlotType: string;
  obligationPeriod: string;
  endDateOfContract: string;
  initialPrice: {
    currency: string;
    value: string;
  };
  discountedPrice: {
    currency: string;
    value: string;
  };
  appliedDiscount: {
    id: string;
    name: string;
  };
}

export interface CustomerDiscounts {
  basicDiscountSlots: {
    availableSlots: string;
    totalAvailableSlotsRCA: string;
    totalAvailableSlotsBCA: string;
    startDateOfElegibility: string;
  };
  availableOnTopDisountSlots: AvailableOnTopDiscountSlot[];
  usedSlots: UsedSlot[];
  historicalRecords: HistoricalRecord[];
}
