/* eslint-disable sonarjs/no-duplicate-string */
import { Page } from '@playwright/test';

export const DATA_TESTID = 'data-testid=';
export const FEAT_ERROR = DATA_TESTID + 'feat-error';

const hardware = {
  product: {
    productid: 'HWTO0107',
    externalProductCode: 'HWTO0107',
    labelkey: 'Hardware TLO B2B',
    customercategories: ['Business', 'Production Test Business'],
    category: ['Others', 'Post-Paid Mobile'],
    visible: false,
    localizedcontent: [
      {
        locale: 'nl',
        name: 'Hardware TLO',
        logo: 'https://customerzone.prd.base.be/content/dam/www-base-be/img/self-service/products/hardware-tlo-b2b.png',
      },
      {
        locale: 'fr',
        name: 'Hardware TLO',
        logo: 'https://customerzone.prd.base.be/content/dam/www-base-be/img/self-service/products/hardware-tlo-b2b.png',
      },
      {
        locale: 'en',
        name: 'Hardware TLO',
        logo: 'https://customerzone.prd.base.be/content/dam/www-base-be/img/self-service/products/hardware-tlo-b2b.png',
      },
    ],
    characteristics: {
      salespricevatincl: {
        value: 0,
        unit: 'EUR',
      },
      prices: {},
      productsegment: 'TB',
      productgroup: 'OTHER',
    },
    visibilityrules: {
      conditionalvisibility: false,
    },
    unlimited: false,
    unlimitedInternet: false,
    priceType: 'Recurrent Charge',
    constituents: [],
    eligibleForDiscount: false,
    languageSpecifications: [],
    requiresInstallation: false,
    usageBasedRatePlan: false,
  },
};

export const allInternet = {
  product: {
    externalProductCode: 'INTF0200',
    weight: 130,
    apps: [],
    category: [
      'For Rules - (9) Personeelskorting Telenet',
      'For Rules - Partner Discount',
      'For Sponsor Discount - All TLO Products',
      'For Rules - (453) Externe medewerkers korting',
      'For Rules - TLOs with Speedboost',
      'Internet',
      'For Rules - Fixed and Bundles Category',
      'For Rules - Price reduction during 3 months',
      'For Discount - offerings for Free Activation discount',
      'For Rules - Product Holding',
      'For Discount - 2nd Home Promo 3P bundles + Internet',
      'For Discount - 2P/3P Bundles + Internet',
      'For Rules - All-Internet, Internet Fiber 200',
      'For Rules - 2nd Home Promo (manual)',
      'For Discount - Group discount (manual)',
      'For Rules - For (112721) discount',
      'For Rules - For (113410) discount',
      'For Discounts - for (120800) and (120820)',
      'For Rules -TLOs for 3TB FUP Internet Service Policies',
      'For Rules - TLO Internet tariff plans + B2B',
      'Post-Paid Mobile',
      'For Rules - Partner Discount (except ONEup)',
      'For Discount - offerings for Coastal Promo',
      'For Discounts - (143) promo',
      'For Discounts - (26) promo',
      'For Discounts - (159) promo',
      'For Discounts - (132941) promo',
      'For Discounts - (133331) promo',
      'For Discounts - (133121) promo',
      'For Discounts - (137) promo',
      'For Rules - 4P/2P/1P plans where Safespot+ is payable',
      'For Rules - 2P/1P plans where Safespot+ is payable',
    ],
    services: [
      {
        experience: {
          experiencetype: 'SURF',
        },
        specifications: [
          {
            value: 'unlimited',
            unit: 'GB',
            visible: true,
            weight: '10',
            labelkey: 'spec.fixedinternet.volume.download.fup',
            localizedcontent: [
              {
                locale: 'en',
                name: 'Onbeperkt surfen(en)',
              },
              {
                locale: 'nl',
                name: 'Onbeperkt surfen',
              },
              {
                locale: 'fr',
                name: 'Surfer sans limites',
              },
            ],
          },
          {
            value: '5',
            unit: 'GB',
            visible: true,
            weight: '20',
            labelkey: 'spec.fixedinternet.mailbox.volume',
            localizedcontent: [
              {
                locale: 'en',
                name: 'Per mailbox(en)',
              },
              {
                locale: 'nl',
                name: 'Per mailbox',
              },
              {
                locale: 'fr',
                name: 'Par boîte e-mail',
              },
            ],
          },
          {
            value: '300',
            unit: 'Mbps',
            visible: true,
            weight: '40',
            labelkey: 'spec.fixedinternet.speed.download',
            localizedcontent: [
              {
                locale: 'en',
                name: 'Downloadsnelheid: tot(en)',
              },
              {
                locale: 'nl',
                name: 'Downloadsnelheid: tot',
              },
              {
                locale: 'fr',
                name: "Vitesse de téléchargement : jusqu'à",
              },
            ],
          },
          {
            value: '20',
            unit: 'Mbps',
            visible: true,
            weight: '50',
            labelkey: 'spec.fixedinternet.speed.upload',
            localizedcontent: [
              {
                locale: 'en',
                name: 'Uploadsnelheid: tot(en)',
              },
              {
                locale: 'nl',
                name: 'Uploadsnelheid: tot',
              },
              {
                locale: 'fr',
                name: "Vitesse d'envoi: jusqu'à",
              },
            ],
          },
          {
            value: '10',
            visible: true,
            weight: '60',
            labelkey: 'spec.fixedinternet.mailbox.included',
            localizedcontent: [
              {
                locale: 'en',
                name: 'Mailboxes',
              },
              {
                locale: 'nl',
                name: 'Mailboxen',
              },
              {
                locale: 'fr',
                name: 'Boîtes e-mail',
              },
            ],
          },
        ],
        servicetype: 'FIXED_INTERNET',
      },
    ],
    characteristics: {
      salespricevatincl: {
        value: '63,27',
        unit: 'EUR',
      },
      productsegment: 'RMD',
      productgroup: 'OTHER',
      esimAvailable: false,
      elementarycharacteristics: [
        {
          key: 'internet_usage_limit',
          value: '3000',
          unit: 'GB',
        },
        {
          key: 'internet_usage_initial_threshold',
          value: '2400',
          unit: 'GB',
        },
        {
          key: 'internet_usage_alert_threshold',
          value: '2700',
          unit: 'GB',
        },
      ],
      service_category: 'FUP',
    },
    unlimited: false,
    priceType: 'Recurrent Charge',
    constituents: [],
    requiresInstallation: true,
    languageSpecifications: [],
    usageBasedRatePlan: false,
    productid: 'INTF0200',
    labelkey: 'All-Internet',
    producttype: 'Internet',
    customercategories: ['Residential', 'Event/Demo', 'Production Test'],
    visible: true,
    localizedcontent: [
      {
        locale: 'en',
        name: 'All-Internet',
        logo: 'https://customerzone.prd.base.be/content/dam/www-base-be/img/self-service/products/all-internet.png',
      },
      {
        locale: 'nl',
        name: 'All-Internet',
        logo: 'https://customerzone.prd.base.be/content/dam/www-base-be/img/self-service/products/all-internet.png',
      },
      {
        locale: 'fr',
        name: 'All-Internet',
        logo: 'https://customerzone.prd.base.be/content/dam/www-base-be/img/self-service/products/all-internet.png',
      },
    ],
    shortdescription: {
      localizedcontent: [
        {
          locale: 'en',
          name: 'All-Internet',
        },
        {
          locale: 'nl',
          name: 'All-Internet',
        },
        {
          locale: 'fr',
          name: 'All-Internet',
        },
      ],
    },
    visibilityrules: {
      conditionalvisibility: false,
    },
    usagenotifications: {
      internet: [
        {
          category: 'FUP',
          preferenceGroup: 'InternetFUP',
          threshold: [
            {
              communicationPreferenceType: 'Internet90',
              communicationPreferenceTypeValue: '90',
              isEditable: false,
              values: [],
            },
            {
              communicationPreferenceType: 'Internet100',
              communicationPreferenceTypeValue: '100',
              isEditable: false,
              values: [],
            },
          ],
        },
      ],
    },
    isYupProduct: false,
    isEligibleForPauseProfile: false,
    isEligibleForAutoPause: false,
    isEligibleForSettinglimits: false,
    isFPBProduct: false,
  },
};

export const CustomerOrderingNotInstallableProduct = async (page: Page) => {
  await page.route('**/omapi/public/product/HWTO0107', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(hardware),
    });
  });
};

export const CustomerOrderingAllInternetProduct = async (page: Page) => {
  await page.route('**/omapi/public/product/INTF0200', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(allInternet),
    });
  });
};
