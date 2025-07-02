import { RawOmapiProductInterfaceData } from '@telenet/ng-lib-omapi';
import { RawProduct, RawProductPrice } from '../interfaces/raw-product.interface';

export class RawProductFactory {
  public static rawProduct(props: Partial<RawProduct>): RawProduct {
    const ALL_INTERNET = 'All-Internet';

    return {
      simCardType: 'PHYSICAL_SIM',
      simCardNumber: '8932030000205509128',
      pukCode: '51212812',
      hasOldSocialTariffDiscount: true,
      id: '9166723571113919705',
      identifier: 'INT000060174',
      msisdn: undefined,
      accountNumber: '501320430',
      label: ALL_INTERNET,
      locationId: '9166723569713917825',
      specurl: 'https://api.int.telenet.be/omapi/public/product/INTF0200',
      status: 'ACTIVE',
      handsets: [],
      options: [
        {
          label: 'Internet Service',
          specurl: 'https://api.int.telenet.be/omapi/public/product/INLN0001',
          status: 'ACTIVE',
          isIncludedOption: true,
          price: {} as RawProductPrice,
          contract: {
            obligationEndDate: '2025-01-01',
            duration: 1,
            price: {} as RawProductPrice,
          },
          activeOptions: 'activeOptions',
          rawOmapi: {
            product: {
              salesofferingid: 'salesofferingid',
              productid: 'INLN0001',
              externalProductCode: 'INLN0001',
              labelkey: 'Internet Service',
              producttype: 'Internet Line',
              weight: 10,
              apps: [],
              customercategories: ['Residential', 'Event/Demo', 'Production Test'],
              category: [],
              visible: true,
              localizedcontent: [],
              services: [
                {
                  servicetype: 'FIXED_INTERNET',
                  experience: {
                    experiencetype: 'SURF',
                  },
                  specifications: [],
                },
              ],
              characteristics: {
                salespricevatincl: {
                  value: '0,0',
                  unit: 'EUR',
                },
                productsegment: 'RMD',
                productgroup: 'OTHER',
                esimAvailable: false,
              },
              visibilityrules: {
                conditionalvisibility: false,
              },
              unlimited: false,
              priceType: 'Recurrent Charge',
              requiresInstallation: false,
              isYupProduct: false,
              isEligibleForPauseProfile: false,
              isEligibleForAutoPause: false,
              isEligibleForSettinglimits: false,
              isFPBProduct: false,
              usageBasedRatePlan: false,
            },
          },
        },
      ],
      addressId: '9165638564313171772',
      productType: 'internet',
      children: [],
      price: {} as RawProductPrice,
      activationDate: '2023-05-17T10:49:47+02:00',
      rawOmapi: {
        product: {
          salesofferingid: 'salesofferingid',
          productid: 'INTF0200',
          externalProductCode: 'INTF0200',
          labelkey: ALL_INTERNET,
          producttype: 'Internet',
          weight: 130,
          apps: [],
          customercategories: ['Residential', 'Event/Demo', 'Production Test'],
          category: ['Post-Paid Mobile'],
          visible: true,
          localizedcontent: [],
          shortdescription: {
            localizedcontent: [
              {
                locale: 'en',
                name: ALL_INTERNET,
              },
              {
                locale: 'nl',
                name: ALL_INTERNET,
              },
              {
                locale: 'fr',
                name: ALL_INTERNET,
              },
            ],
          },
          services: [
            {
              servicetype: 'FIXED_INTERNET',
              experience: {
                experiencetype: 'SURF',
              },
              specifications: [
                {
                  labelkey: 'spec.fixedinternet.volume.download.fup',
                  value: 'unlimited',
                  unit: 'GB',
                  visible: true,
                  weight: '10',
                  localizedcontent: [],
                },
                {
                  labelkey: 'spec.fixedinternet.mailbox.volume',
                  value: '5',
                  unit: 'GB',
                  visible: true,
                  weight: '20',
                  localizedcontent: [],
                },
                {
                  labelkey: 'spec.fixedinternet.speed.download',
                  value: '300',
                  unit: 'Mbps',
                  visible: true,
                  weight: '40',
                  localizedcontent: [],
                },
                {
                  labelkey: 'spec.fixedinternet.speed.upload',
                  value: '20',
                  unit: 'Mbps',
                  visible: true,
                  weight: '50',
                  localizedcontent: [],
                },
                {
                  labelkey: 'spec.fixedinternet.mailbox.included',
                  value: '10',
                  visible: true,
                  weight: '60',
                  localizedcontent: [],
                },
              ],
            },
          ],
          visibilityrules: {
            conditionalvisibility: false,
          },
          unlimited: false,
          priceType: 'Recurrent Charge',
          constituents: [],
          requiresInstallation: true,
          isYupProduct: false,
          isEligibleForPauseProfile: false,
          isEligibleForAutoPause: false,
          isEligibleForSettinglimits: false,
          isFPBProduct: false,
          usageBasedRatePlan: false,
        } as RawOmapiProductInterfaceData,
      },
      splitBillProfile: {
        id: '9166723571113919705',
        name: 'New Split Billing Profile #1',
        type: 'SB20',
      },
      ...props,
    };
  }
}
