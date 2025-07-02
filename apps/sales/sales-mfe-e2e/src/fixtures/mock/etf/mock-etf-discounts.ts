export const mockEtfDiscounts = {
  basicDiscountSlots: {
    availableSlots: '5',
    totalAvailableSlotsRCA: '5',
    totalAvailableSlotsBCA: '5',
    startDateOfElegibility: '2018-01-01T00:00:00+01:00',
  },
  availableOnTopDisountSlots: [
    {
      id: '9519843980984398',
      name: 'WIGO On-Top Discount',
      relatedProductTrigger: {
        id: '951984398098434563',
        name: 'WIGO 9',
      },
      endValidityDate: '2020-01-01T00:00:00+01:00',
      validityPeriod: '135',
    },
    {
      id: '9519843980984353',
      name: 'YUGO On-Top Discount',
      endValidityDate: '2021-01-01T00:00:00+01:00',
      validityPeriod: '135',
    },
  ],
  usedSlots: [
    {
      id: '95198743984320987',
      name: 'Iphone X',
      discountSlotType: 'Basic',
      obligationPeriod: '12',
      endDateOfContract: '2019-01-01T00:00:00+02:00',
      initialPrice: {
        currency: 'Euro',
        value: '69,99',
      },
      discountedPrice: {
        currency: 'Euro',
        value: '49,99',
      },
      etf: {
        currency: 'Euro',
        value: '9,99',
      },
      appliedDiscount: {
        id: '951098432098432',
        name: 'Basic Discount',
      },
    },
    {
      id: '95198743984320976',
      name: 'Acer Monitor',
      discountSlotType: 'On-Top',
      obligationPeriod: '12',
      endDateOfContract: '2019-01-01T00:00:00+03:00',
      initialPrice: {
        currency: 'Euro',
        value: '109,99',
      },
      discountedPrice: {
        currency: 'Euro',
        value: '89,99',
      },
      etf: {
        currency: 'Euro',
        value: '19,99',
      },
      appliedDiscount: {
        id: '951098432098432',
        name: 'Basic Discount',
      },
    },
  ],
  historicalRecords: [
    {
      id: '95198743984320987',
      name: 'Iphone X',
      discountSlotType: 'Basic',
      obligationPeriod: '12',
      endDateOfContract: '2019-01-01T00:00:00+01:00',
      initialPrice: {
        currency: 'Euro',
        value: '69,99',
      },
      discountedPrice: {
        currency: 'Euro',
        value: '49,99',
      },
      appliedDiscount: {
        id: '951098432098432',
        name: 'Basic Discount',
      },
    },
    {
      id: '95198743984320987',
      name: 'Iphone X',
      discountSlotType: 'On-Top',
      obligationPeriod: '12',
      endDateOfContract: '2019-01-01T00:00:00+01:00',
      initialPrice: {
        currency: 'Euro',
        value: '69,99',
      },
      discountedPrice: {
        currency: 'Euro',
        value: '49,99',
      },
      appliedDiscount: {
        id: '951098432098432',
        name: 'Basic Discount',
      },
    },
  ],
};
