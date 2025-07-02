export const customerHardMatchResponse = {
  type: 'hard',
};

export const customerSoftMatchResponse = {
  type: 'soft',
};

export const customerNoMatchResponse = {};

export const prepaidMobileResponse = {
  product: {
    externalProductCode: 'MYPR0000',
    category: ['PrePaid Mobile', 'For Rules - All 1.1/1.2 Mobile Plans'],
  },
};

export const postpaidBundleResponse = {
  product: {
    externalProductCode: 'C5FA0006',
    category: [
      '4P Bundle',
      'For Rules - Fixed and Bundles Category',
      'For Rules - ONE/ONEup',
      'For Rules - TLOs with Telenet TV 2.0',
      'For Rules - ONE/ONEup with YUP',
      'For Rules - 4P/2P/1P plans where Safespot+ is payable',
      'For Rules - ONE bundles',
      'For Rules - 1 PAX',
      'For Rules - One(up) for X CVP Evolution',
      'For Rules - One for X only CVP Evolution',
      'Post-Paid Mobile',
      'For Rules -TLOs for 3TB FUP Internet Service Policies',
      'For Rules -  Top Offering with Service Policies',
      'Settlers: New one and oneup lines',
      'For Rules - Origin migration: reduction of 1,5€  during 6 months',
      'For Rules - One/Oneup (CVP)',
      'For Rules - Reduction_of_10/15/20/30_during_3_months',
      'For Rules - One for 1 /One(Up) 2/3/4/5 with CVP',
      'For Rules - 1P/2P/3P/4P Internet lines',
      'For Rules - (177018) promo',
      'For Rules -Play sports(klik,oneup,wigo)',
      'For Discounts - (109085) Extend products',
    ],
  },
};

export const fixedProductResponse = {
  product: {
    requiresInstallation: true,
    externalProductCode: 'INF00000',
  },
};

function calculateChecksum(number: string) {
  return 97 - (parseInt(number) % 97);
}

function generateBelgianNationalNumber(year: number, month: number, day: number): string {
  const padWithZero = (num: number): string => (num < 10 ? `0${num}` : num.toString());

  const yearLastTwoDigits = padWithZero(year % 100);
  const monthPadded = padWithZero(month);
  const dayPadded = padWithZero(day);
  const base = (year >= 2000 ? '2' : '') + yearLastTwoDigits + monthPadded + dayPadded + '123';

  const checksum = calculateChecksum(base);
  const formattedChecksum = checksum.toString().padStart(2, '0');

  return `${yearLastTwoDigits}${monthPadded}${dayPadded}123${formattedChecksum}`;
}

export function generateNRNWithOffset(minAge: number) {
  const today = new Date();
  const yearMinusSixteen = today.getFullYear() - minAge;
  return generateBelgianNationalNumber(yearMinusSixteen, today.getMonth() + 1, today.getDate());
}
