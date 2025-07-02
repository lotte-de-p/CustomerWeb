export interface PriceAttributes {
    currency: string;
    deliveryCharge: string;
    oneTimeTotal: string;
    oneTimeDiscount: string;
    oneTimeDiscounted: string;
    oneTimeDiscountedOnNextInvoice: string;
    recurrentTotal: string;
    recurrentDiscount: string;
    recurrentDiscounted: string;
    upfrontTotal: string;
    discountPrice: string;
    yupUpfrontPayment?: YUPUpfrontPaymentInterface;
}
export interface YUPUpfrontPaymentInterface {
    recurrentDiscounted?: string;
    totalDiscounted?: string;
}
//# sourceMappingURL=price-attributes.interface.d.ts.map