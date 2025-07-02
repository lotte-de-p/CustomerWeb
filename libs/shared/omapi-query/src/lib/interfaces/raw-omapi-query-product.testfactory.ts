import {
  RawColorInterface,
  RawImagesInterface,
  RawLocalizedContentInterface,
  RawOmapiQueryProductInterface,
  RawOmapiQueryProductInterfaceData,
  RawProductTypeInterface,
  RawVariantsInterface,
  VariantTagInterface,
  VariantTagOptionInterface,
} from '../interfaces/raw-omapi-query-product.interface';
import { makeFactory } from 'factory.ts';

export const rawLocalizedContentInterfaceFactory = makeFactory<RawLocalizedContentInterface>({
  key: '1',
  value: [],
  data: 'test',
  locale: 'nl',
});

export const rawProductTypeInterfaceFactory = makeFactory<RawProductTypeInterface>({
  code: '',
  localizedContent: [rawLocalizedContentInterfaceFactory.build()],
});

export const rawColorInterfaceFactory = makeFactory<RawColorInterface>({
  sortOrder: '',
  localizedContent: [],
  attributeGroup: rawProductTypeInterfaceFactory.build(),
});

export const variantTagOptionInterfaceFactory = makeFactory<VariantTagOptionInterface>({
  attributeKey: '',
  backOrderDescription: {
    localizedContent: [rawLocalizedContentInterfaceFactory.build()],
  },
  preOrderDescription: {
    localizedContent: [rawLocalizedContentInterfaceFactory.build()],
  },
});

export const variantTagInterfaceFactory = makeFactory<VariantTagInterface>({
  telenet: { options: [variantTagOptionInterfaceFactory.build()] },
  telenetSOHO: { options: [variantTagOptionInterfaceFactory.build()] },
  base: { options: [variantTagOptionInterfaceFactory.build()] },
  baseSOHO: { options: [variantTagOptionInterfaceFactory.build()] },
});

export const RawImagesInterfaceFactory = makeFactory<RawImagesInterface>({
  attributeKey: '',
  value: '',
  localizedContent: [],
});

export const rawVariantsInterfaceFactory = makeFactory<RawVariantsInterface>({
  productId: '',
  images: [],
  contractMonths: undefined,
  prices: {
    priceType: '',
  },
  color: rawColorInterfaceFactory.build(),
  manBrand: rawColorInterfaceFactory.build(),
  shortDescription: {
    localizedContent: [rawLocalizedContentInterfaceFactory.build()],
  },
  tag: variantTagInterfaceFactory.build(),
  characteristics: undefined,
});

export const rawBigItemVariantInterfaceFactory = rawVariantsInterfaceFactory.extend({
  extraAtHomeDelivery: true,
});

export const rawOmapiQueryProductInterfaceDataFactory = makeFactory<RawOmapiQueryProductInterfaceData>({
  labelKey: '',
  productFamily: '',
  variants: [],
  manBrand: rawColorInterfaceFactory.build(),
  isPreOrder: false,
  isBackOrder: false,
});

export const rawOmapiQueryProductTestfactory = makeFactory<RawOmapiQueryProductInterface>({
  products: rawOmapiQueryProductInterfaceDataFactory.buildList(2),
});

export const rawOmapiQueryProductInterfaceDataWithPreOrderFactory = rawOmapiQueryProductInterfaceDataFactory.extend({
  labelKey: '',
  productFamily: '',
  variants: [
    rawVariantsInterfaceFactory.build({
      tag: {
        telenet: {
          options: [
            variantTagOptionInterfaceFactory.build({
              attributeKey: 'pre_order_label',
            }),
          ],
        },
      },
    }),
  ],
  manBrand: rawColorInterfaceFactory.build(),
  isPreOrder: false,
  isBackOrder: false,
});

export const rawOmapiQueryProductInterfaceDataWithBackOrderFactory = rawOmapiQueryProductInterfaceDataFactory.extend({
  labelKey: '',
  productFamily: '',
  variants: [
    rawVariantsInterfaceFactory.build({
      tag: {
        telenet: {
          options: [
            variantTagOptionInterfaceFactory.build({
              attributeKey: 'back_order_label',
            }),
          ],
        },
      },
    }),
  ],
  manBrand: rawColorInterfaceFactory.build(),
  isPreOrder: false,
  isBackOrder: false,
});

export const rawOmapiQueryProductFactoryWithPreOrder = rawOmapiQueryProductTestfactory.extend({
  products: [
    rawOmapiQueryProductInterfaceDataFactory.build(),
    rawOmapiQueryProductInterfaceDataWithPreOrderFactory.build(),
  ],
});
