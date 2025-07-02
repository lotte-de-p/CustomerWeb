export interface PaymentResponseDataInterface {
  signature: string;
  payment: {
    template: string;
    language: string;
    device: string;
    email: string;
    amount: string;
    currency: string;
    ownerAddress: string;
    ownerZip: string;
    ownerTown: string;
    ownerCountry: string;
    ownerContactNumber: string;
    transactionId: string;
    paymentServiceProviderId: string;
    acceptURL: string;
    cancelURL: string;
    declineURL: string;
    exceptionURL: string;
    paramPlus: string;
    paramVar: string;
    contactName: string;
  };
}
