export interface PricesDto {
  taxInclPrices?: PriceAttributeDto;
  taxExclPrices?: PriceAttributeDto;
  earlyTerminationFee?: string;
  currency?: string;
}

export interface PriceAttributeDto {
  currency: string;
  oneTimeDiscount?: string;
  oneTimeTotal?: string;
  oneTimeDiscounted?: string;
  recurrentDiscount?: string;
  recurrentTotal?: string;
  recurrentDiscounted?: string;
  oneTimeDiscountedOnNextInvoice?: string;
  upfrontTotal?: string;
  discountPrice?: string;
  yupUpfrontPayment?: YUPUpfrontPayment;
}

interface YUPUpfrontPayment {
  recurrentDiscounted?: string;
  totalDiscounted?: string;
}
