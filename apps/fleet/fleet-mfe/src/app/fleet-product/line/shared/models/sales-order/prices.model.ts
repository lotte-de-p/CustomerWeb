export class Prices {
  taxInclPrices?: PriceAttributes;
  taxExclPrices?: PriceAttributes;
  earlyTerminationFee?: string;
  currency?: string;
  recurrentDiscount?: string;
  recurrentTotal?: string;
  recurrentDiscounted?: string;
}

export interface PriceAttributes {
  currency: string;
  deliveryCharge?: string;
  oneTimeTotal?: string;
  oneTimeDiscount?: string;
  oneTimeDiscounted?: string;
  oneTimeDiscountedOnNextInvoice?: string;
  recurrentTotal: string;
  recurrentDiscount: string;
  recurrentDiscounted: string;
  upfrontTotal?: string;
  discountPrice?: string;
  yupUpfrontPayment?: YUPUpfrontPaymentInterface;
}

interface YUPUpfrontPaymentInterface {
  recurrentDiscounted?: string;
  totalDiscounted?: string;
}
