import { importProvidersFrom, LOCALE_ID } from '@angular/core';
import { applicationConfig, componentWrapperDecorator, Meta } from '@storybook/angular';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { MyBaseDashboardManageProductsComponent } from '@mybase-dashboard/feat-mybase-dashboard';

const MOCK_MOBILE_LINK = 'https://mobile-link';
const MOCK_INTERNET_LINK = 'https://internet-link';
const MOCK_DTV_LINK = 'https://dtv-link';
const BASE_UNLIMITED = 'BASE Unlimited';
const BASE_LIMITED = 'BASE Limited';

export default {
  title: 'MyBase Dashboard/Level 1/Manage Products',
  component: MyBaseDashboardManageProductsComponent,
  decorators: [
    componentWrapperDecorator((story) => `<div class="row"><div class="col-8">${story}</div></div>`),
    applicationConfig({
      providers: [
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        { provide: LOCALE_ID, useValue: 'en' },
      ],
    }),
  ],
} as Meta<MyBaseDashboardManageProductsComponent>;

export const AllProductTypesOneProduct = {
  render: (args: MyBaseDashboardManageProductsComponent) => ({
    props: args,
  }),
  args: {
    data: {
      showCard: true,
      mobile: {
        pending: false,
        products: [{ productName: 'BASE 29' }],
      },
      dtv: {
        pending: false,
        products: [{ productName: 'BASE TV' }],
      },
      internet: {
        pending: false,
        products: [{ productName: BASE_UNLIMITED }],
      },
    },
    manageProductsMobileLink: MOCK_MOBILE_LINK,
    manageProductsDTVLink: MOCK_DTV_LINK,
    manageProductsInternetLink: MOCK_INTERNET_LINK,
  },
};

export const AllProductTypesMultipleProducts = {
  render: (args: MyBaseDashboardManageProductsComponent) => ({
    props: args,
  }),
  args: {
    data: {
      showCard: true,
      mobile: {
        pending: false,
        products: [{ productName: 'BASE 29' }, { productName: 'BASE 9' }, { productName: 'BASE 19' }],
      },
      dtv: {
        pending: false,
        products: [{ productName: 'BASE TV' }],
      },
      internet: {
        pending: false,
        products: [{ productName: BASE_UNLIMITED }, { productName: BASE_LIMITED }],
      },
    },
    manageProductsMobileLink: MOCK_MOBILE_LINK,
    manageProductsDTVLink: MOCK_DTV_LINK,
    manageProductsInternetLink: MOCK_INTERNET_LINK,
  },
};

export const OneProductTypeOneProduct = {
  render: (args: MyBaseDashboardManageProductsComponent) => ({
    props: args,
  }),
  args: {
    data: {
      showCard: true,
      mobile: {
        pending: false,
        products: [{ productName: 'BASE 29' }],
      },
    },
    manageProductsMobileLink: MOCK_MOBILE_LINK,
    manageProductsDTVLink: MOCK_DTV_LINK,
    manageProductsInternetLink: MOCK_INTERNET_LINK,
  },
};

export const FewCardsPendingForOnboarding = {
  render: (args: MyBaseDashboardManageProductsComponent) => ({
    props: args,
  }),
  args: {
    data: {
      showCard: true,
      mobile: {
        pending: true,
        products: [{ productName: 'BASE 29' }],
      },
      dtv: {
        pending: false,
        products: [{ productName: 'BASE TV' }],
      },
      internet: {
        pending: false,
        products: [{ productName: BASE_UNLIMITED }, { productName: BASE_LIMITED }],
      },
    },
    manageProductsMobileLink: MOCK_MOBILE_LINK,
    manageProductsDTVLink: MOCK_DTV_LINK,
    manageProductsInternetLink: MOCK_INTERNET_LINK,
  },
};

export const AllCardsPendingForOnboarding = {
  render: (args: MyBaseDashboardManageProductsComponent) => ({
    props: args,
  }),
  args: {
    data: {
      showCard: true,
      mobile: {
        pending: true,
        products: [{ productName: 'BASE 29' }],
      },
      dtv: {
        pending: true,
        products: [{ productName: 'BASE TV' }],
      },
      internet: {
        pending: true,
        products: [{ productName: BASE_UNLIMITED }, { productName: BASE_LIMITED }],
      },
    },
    manageProductsMobileLink: MOCK_MOBILE_LINK,
    manageProductsDTVLink: MOCK_DTV_LINK,
    manageProductsInternetLink: MOCK_INTERNET_LINK,
  },
};
