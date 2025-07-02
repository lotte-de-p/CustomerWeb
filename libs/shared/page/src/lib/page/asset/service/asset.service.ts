import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AssetService {
  private static readonly imagePaths = {
    SALES: '/components/sales/nc/sales-checkout/media/',
    HARDWARE_CHECKOUT: '/content/dam/www-telenet-touch/default/images/hardware-checkout/',
    MOVE: '/components/care/administration/cafe/move/media/',
    CHANGE_FLAVOUR: '/components/sales/cafe/change-flavour/media/',
    CONNECT_FIVE: '/components/sales/cafe/connect-five/media/',
    PRODUCT_DASHBOARD: '/components/sales/cafe/product-dashboard/media/',
    TIP: '/components/tip/nc/media/',
    INTENT_FINDER: '/components/navigation/common/intent-finder/media/',
    CONTACT_SCHEDULER: '/components/general/common/contact-scheduler/media/',
    FLEET_HARDWARE: '/components/fleet/hardware/nc/media/',
    FLEET_PROFILE: '/components/fleet/create-profile/nc/media/',
    DWN_MOVE_FLOW: '/components/care/administration/nc/move-flow/media/',
    SELF_INSTALL: '/components/care/administration/nc/self-install/media/',
    FLEET_REMOVE_OPTIONS: '/components/fleet/product/nc/lineremoveoptions/media/',
    FLEET_ADD_OPTIONS: '/components/fleet/product/nc/lineaddoptions/media/',
    FLEET_LINE_CHANGE_TARIFF_PLAN: '/components/fleet/product/nc/linechangetariffplan/media/',
    MANAGE_EASY_SWITCH: '/components/care/administration/nc/manage-easy-switch/media/',
    CENTRAL_LOGIN: '/components/common/central-login/media/',
    DEFAULT_PROFILE_PIC: '/components/general/common/telenet-login/media/',
    FLEET_LINE_NAVIGATION_LIST: '/components/fleet/sim-swap/nc/line-navigation-list/media/',
    IN_HOME_CONNECTIVITY: '/components/sales/nc/in-home-connectivity/media/',
    FLEET_ACCOUNT: '/components/fleet/account/nc/media/',
    FLEET_SWITCH_LINE: '/components/fleet/contact/switch-line/nc/media/',
    ONLINE_PAYMENT: '/components/sales/online-payment/media/',
    FPB: '/components/fpb/search-contacts/nc/media/',
    STORE_FINDER: '/components/general/common/store-finder/media/',
    FTTH: '/content/dam/www-telenet-bus/nl/producten/ftth/',
  };

  static getImagePath(moduleName: string, imageName: string, customerBrand?: string): string {
    const basePath: string = AssetService.imagePaths[moduleName] || '';
    const brand: string = customerBrand ? customerBrand.toLocaleLowerCase().concat('/') : '';
    return basePath + brand + imageName;
  }
}
