import * as i0 from '@angular/core';
import { Injectable } from '@angular/core';
import { map, isEmpty, isNil, sum, filter, uniqBy, flatten, flatMap, concat, groupBy, min, sumBy, minBy, isUndefined } from 'lodash-es';
import * as Factory from 'factory.ts';
import { OmapiProductType } from '@telenet/ng-lib-omapi';
import { of } from 'rxjs';
import { take, catchError } from 'rxjs/operators';
import * as i2 from '@telenet/ng-lib-page';
import { CustomerBrandEnum, LabelUtil } from '@telenet/ng-lib-page';
import * as i3 from '@telenet/ng-lib-config';
import { ConfigConstants } from '@telenet/ng-lib-config';
import * as i1 from '@angular/common/http';

var SofyPromoType;
(function (SofyPromoType) {
    SofyPromoType["PROMO_MOBILE"] = "promo_mobile";
    SofyPromoType["PROMO_INTERNET"] = "promo_internet";
})(SofyPromoType || (SofyPromoType = {}));
const SAFE_SPOT_PRO = '36738';

class ConnectFiveConstants {
    static MESSAGE_GROUP = 'c5-checkout';
    static SOHO_LABEL_APPENDIX = 'tbf';
    static MODULE_NAME = 'CONNECT_FIVE';
    static BIRTH_DATE_MASK = '90/00/0000';
    static ID_CARD_MASK = '900-0000000-00';
    static MINIMUM_SOHO_SIM_TRANSFERS = 1;
}

var InstallTypeEnum;
(function (InstallTypeEnum) {
    InstallTypeEnum["SELF_INSTALL"] = "selfinstall";
    InstallTypeEnum["PRE_INSTALL"] = "preinstall";
    InstallTypeEnum["COMFORT_INSTALL"] = "comfortinstall";
    InstallTypeEnum["BUSINESS_INSTALL"] = "businessinstall";
    InstallTypeEnum["BUSINESS_INSTALL_SWAP"] = "businessinstall_swap";
})(InstallTypeEnum || (InstallTypeEnum = {}));

var FlowTypeEnum;
(function (FlowTypeEnum) {
    FlowTypeEnum["SOHO"] = "soho";
    FlowTypeEnum["RES"] = "res";
})(FlowTypeEnum || (FlowTypeEnum = {}));

var SelfInstallTypeEnum;
(function (SelfInstallTypeEnum) {
    SelfInstallTypeEnum["PICKUP"] = "pick_up";
    SelfInstallTypeEnum["HOME_DELIVERY"] = "home_delivery";
})(SelfInstallTypeEnum || (SelfInstallTypeEnum = {}));

var ServiceTypeEnum;
(function (ServiceTypeEnum) {
    ServiceTypeEnum["MOBILE_INTERNET"] = "MOBILE_INTERNET";
    ServiceTypeEnum["FIXED_CALLING"] = "FIXED_CALLING";
})(ServiceTypeEnum || (ServiceTypeEnum = {}));

class SalesOfferCost {
    name;
    price;
    priceexclvat;
    promotions;
    recurring;
}

class PromoModel {
    backendid;
    duration;
    legalid;
    name;
    period;
    price;
    priceexclvat;
    puk;
    tags;
    getNormalizedName() {
        if (this.name) {
            return this.name
                .replace(/ /g, '-')
                .replace(/\./g, '-')
                .replace(/[^0-9a-zA-Z_-]/g, '')
                .toLowerCase();
        }
        return '';
    }
    getAbsoluteAmount() {
        return Math.abs(this.price);
    }
}

class PeriodModel {
    endDate;
    startDate;
}

class PromoMapper {
    map(rawPromo) {
        const promo = new PromoModel();
        promo.backendid = rawPromo.backendid;
        promo.duration = rawPromo.duration;
        promo.legalid = rawPromo.legalid;
        promo.name = rawPromo.name;
        promo.price = rawPromo.price;
        promo.priceexclvat = rawPromo.priceexclvat;
        promo.puk = rawPromo.puk;
        promo.period = Object.assign(new PeriodModel(), rawPromo.period);
        promo.tags = rawPromo.tags;
        return promo;
    }
    static ɵfac = function PromoMapper_Factory(t) { return new (t || PromoMapper)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PromoMapper, factory: PromoMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PromoMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

class CostMapper {
    promoMapper;
    constructor(promoMapper) {
        this.promoMapper = promoMapper;
    }
    map(rawCost) {
        const cost = new SalesOfferCost();
        cost.name = rawCost.name;
        cost.price = rawCost.price;
        cost.priceexclvat = rawCost.priceexclvat;
        cost.recurring = rawCost.recurring;
        cost.promotions = this.mapPromotions(rawCost.promotions);
        return cost;
    }
    mapPromotions(rawPromotions) {
        const promotions = [];
        if (rawPromotions) {
            rawPromotions.forEach((rawPromo) => promotions.push(this.promoMapper.map(rawPromo)));
        }
        return promotions;
    }
    static ɵfac = function CostMapper_Factory(t) { return new (t || CostMapper)(i0.ɵɵinject(PromoMapper)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CostMapper, factory: CostMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CostMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: PromoMapper }], null); })();

class InstallTypeModel {
    description;
    mutuallyexclusive;
    price;
    priceexclvat;
    promos;
    selected;
    options;
    withSelected() {
        this.selected = true;
        return this;
    }
    withDescription(description) {
        this.description = description;
        return this;
    }
    withPrice(price) {
        this.price = price;
        return this;
    }
    isPreInstall() {
        return this.description === 'preinstall';
    }
    isComfortInstall() {
        return this.description === 'comfortinstall';
    }
    isSelfInstall() {
        return this.description === 'selfinstall';
    }
    isModemSwap() {
        return !this.description.includes('_swap');
    }
}

class InstallTypeMapper {
    promoMapper;
    constructor(promoMapper) {
        this.promoMapper = promoMapper;
    }
    map(rawInstallType) {
        const installType = new InstallTypeModel();
        installType.description = rawInstallType.description;
        installType.mutuallyexclusive = rawInstallType.mutuallyexclusive;
        installType.price = rawInstallType.price;
        installType.priceexclvat = rawInstallType.priceexclvat;
        installType.selected = rawInstallType.selected;
        installType.promos = this.mapPromos(rawInstallType.promos);
        return installType;
    }
    mapPromos(rawPromos) {
        const promos = [];
        if (rawPromos) {
            rawPromos.forEach((rawPromo) => promos.push(this.promoMapper.map(rawPromo)));
        }
        return promos;
    }
    static ɵfac = function InstallTypeMapper_Factory(t) { return new (t || InstallTypeMapper)(i0.ɵɵinject(PromoMapper)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InstallTypeMapper, factory: InstallTypeMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InstallTypeMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: PromoMapper }], null); })();

class OptionModel {
    description;
    mutuallyExclusive;
    omapiId;
    originalprice;
    price;
    priceexclvat;
    promos;
    selected;
    specUrl;
}

class OptionMapper {
    promoMapper;
    constructor(promoMapper) {
        this.promoMapper = promoMapper;
    }
    map(rawOption) {
        const option = new OptionModel();
        option.description = rawOption.description;
        option.mutuallyExclusive = rawOption.mutuallyExclusive;
        option.omapiId = rawOption.omapiId;
        option.originalprice = rawOption.originalprice;
        option.price = rawOption.price;
        option.priceexclvat = rawOption.priceexclvat;
        option.selected = rawOption.selected;
        option.specUrl = rawOption.specUrl;
        option.promos = this.mapPromos(rawOption.promos);
        return option;
    }
    mapPromos(rawPromos) {
        const promos = [];
        if (rawPromos) {
            rawPromos.forEach((rawPromo) => promos.push(this.promoMapper.map(rawPromo)));
        }
        return promos;
    }
    static ɵfac = function OptionMapper_Factory(t) { return new (t || OptionMapper)(i0.ɵɵinject(PromoMapper)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OptionMapper, factory: OptionMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OptionMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: PromoMapper }], null); })();

class ProductModel {
    correlationId;
    costs;
    description;
    installtypes;
    omapiId;
    options;
    price;
    priceexclvat;
    promos;
    specUrl;
    getMonthlyTotalCost() {
        return this.price;
    }
    hasCompatibleModem() {
        return this.installtypes.length > 0 ? this.installtypes[0].isModemSwap() : true;
    }
}

class ProductMapper {
    costMapper;
    installTypeMapper;
    optionMapper;
    promoMapper;
    constructor(costMapper, installTypeMapper, optionMapper, promoMapper) {
        this.costMapper = costMapper;
        this.installTypeMapper = installTypeMapper;
        this.optionMapper = optionMapper;
        this.promoMapper = promoMapper;
    }
    map(rawProduct) {
        const product = new ProductModel();
        product.correlationId = rawProduct.correlationId;
        product.description = rawProduct.description;
        product.omapiId = rawProduct.omapiid;
        product.price = rawProduct.price;
        product.priceexclvat = rawProduct.priceexclvat;
        product.specUrl = rawProduct.specUrl;
        product.costs = this.mapCosts(rawProduct.costs);
        product.installtypes = this.mapInstallTypes(rawProduct.installtypes);
        product.options = this.mapOptions(rawProduct.options);
        product.promos = this.mapPromos(rawProduct.promos);
        return product;
    }
    mapCosts(rawCosts) {
        const costs = [];
        if (rawCosts) {
            rawCosts.forEach((rawCost) => costs.push(this.costMapper.map(rawCost)));
        }
        return costs;
    }
    mapInstallTypes(rawInstallTypes) {
        const installTypes = [];
        if (rawInstallTypes) {
            rawInstallTypes.forEach((rawInstallType) => installTypes.push(this.installTypeMapper.map(rawInstallType)));
        }
        return installTypes;
    }
    mapOptions(rawOptions) {
        const options = [];
        if (rawOptions) {
            rawOptions.forEach((rawOption) => options.push(this.optionMapper.map(rawOption)));
        }
        return options;
    }
    mapPromos(rawPromos) {
        const promos = [];
        if (rawPromos) {
            rawPromos.forEach((rawPromo) => promos.push(this.promoMapper.map(rawPromo)));
        }
        return promos;
    }
    static ɵfac = function ProductMapper_Factory(t) { return new (t || ProductMapper)(i0.ɵɵinject(CostMapper), i0.ɵɵinject(InstallTypeMapper), i0.ɵɵinject(OptionMapper), i0.ɵɵinject(PromoMapper)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ProductMapper, factory: ProductMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: CostMapper }, { type: InstallTypeMapper }, { type: OptionMapper }, { type: PromoMapper }], null); })();

class SalesOfferModel {
    products;
    standaloneOptions;
    ownedProducts;
}

class SalesOfferMapper {
    productMapper;
    constructor(productMapper) {
        this.productMapper = productMapper;
    }
    map(rawSalesOffer) {
        const salesOffer = new SalesOfferModel();
        salesOffer.products = this.mapProducts(rawSalesOffer.products);
        salesOffer.ownedProducts = this.mapProducts(rawSalesOffer.ownedProducts);
        salesOffer.standaloneOptions = this.mapProducts(rawSalesOffer.standaloneOptions);
        return salesOffer;
    }
    mapProducts(rawProducts) {
        const products = [];
        if (rawProducts) {
            rawProducts.forEach((rawProduct) => products.push(this.productMapper.map(rawProduct)));
        }
        return products;
    }
    static ɵfac = function SalesOfferMapper_Factory(t) { return new (t || SalesOfferMapper)(i0.ɵɵinject(ProductMapper)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SalesOfferMapper, factory: SalesOfferMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SalesOfferMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: ProductMapper }], null); })();

class SofyCustomerProductHoldingProduct {
    specurl;
    address;
    identifier;
    products;
    options;
}

class SofyCustomerProductHoldingProductMapper {
    mapToSofyCustomerProductHoldingProduct(rawProductHoldings) {
        return map(rawProductHoldings, (rawProductHolding) => {
            const sofyCustomerProductHoldingProduct = new SofyCustomerProductHoldingProduct();
            sofyCustomerProductHoldingProduct.identifier = rawProductHolding.identifier;
            sofyCustomerProductHoldingProduct.specurl = rawProductHolding.specurl;
            sofyCustomerProductHoldingProduct.address = rawProductHolding.address;
            sofyCustomerProductHoldingProduct.products = this.mapToSofyCustomerProductHoldingProduct(rawProductHolding.products);
            sofyCustomerProductHoldingProduct.options = this.mapOptions(rawProductHolding.options);
            return sofyCustomerProductHoldingProduct;
        });
    }
    mapOptions(options) {
        return map(options, (rawProductHoldingOption) => {
            const sofyCustomerProductHoldingOption = new SofyCustomerProductHoldingProduct();
            sofyCustomerProductHoldingOption.specurl = rawProductHoldingOption.specurl;
            return sofyCustomerProductHoldingOption;
        });
    }
    static ɵfac = function SofyCustomerProductHoldingProductMapper_Factory(t) { return new (t || SofyCustomerProductHoldingProductMapper)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SofyCustomerProductHoldingProductMapper, factory: SofyCustomerProductHoldingProductMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SofyCustomerProductHoldingProductMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

class SofyModemDetails {
    macaddress;
    modemtype;
    hardware;
    cableroutername;
    internetlineidentifier;
    installationaddress;
}

class SofyAddress {
    addressid;
    municipality;
    postalcode;
    street;
    housenr;
    country;
}

class SofyModemDetailsMapper {
    mapSofyModemDetails(modemDetails) {
        const sofyModemDetails = [];
        if (modemDetails) {
            modemDetails.modemDetails.forEach((modemDetail) => {
                const sofyModemDetail = new SofyModemDetails();
                sofyModemDetail.macaddress = modemDetail.macAddress;
                sofyModemDetail.cableroutername = modemDetail.cableRouterName;
                sofyModemDetail.hardware = modemDetail.hardwareType;
                sofyModemDetail.installationaddress = this.mapInstallationAddress(modemDetail.installationAddress);
                sofyModemDetail.internetlineidentifier = modemDetail.internetLineIdentifier;
                sofyModemDetail.modemtype = modemDetail.modemType;
                sofyModemDetails.push(sofyModemDetail);
            });
        }
        return sofyModemDetails;
    }
    mapInstallationAddress(address) {
        const sofyAddress = new SofyAddress();
        sofyAddress.housenr = address.houseNumber;
        sofyAddress.street = address.street;
        sofyAddress.postalcode = address.postalCode;
        sofyAddress.municipality = address.municipality;
        sofyAddress.addressid = address.addressId;
        sofyAddress.country = address.country;
        return sofyAddress;
    }
    static ɵfac = function SofyModemDetailsMapper_Factory(t) { return new (t || SofyModemDetailsMapper)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SofyModemDetailsMapper, factory: SofyModemDetailsMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SofyModemDetailsMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

class SofyProduct {
    omapiid;
    options;
    isnewline;
    installationaddress;
    move;
    needscableinstallation;
    installtype;
}

class SofyProductMapper {
    mapSelectedProductToSofyProduct(omapiProduct, address, installType) {
        const sofyProducts = [];
        const sofyProduct = new SofyProduct();
        sofyProduct.omapiid = omapiProduct?.productId;
        sofyProduct.options = [];
        sofyProduct.needscableinstallation = !!installType;
        sofyProduct.installtype = installType;
        sofyProduct.installationaddress = this.mapAddress(address);
        sofyProduct.isnewline = false;
        sofyProduct.move = false;
        sofyProducts.push(sofyProduct);
        return sofyProducts;
    }
    mapAddress(address) {
        const sofyAddress = new SofyAddress();
        if (address) {
            sofyAddress.addressid = address.addressId;
            sofyAddress.municipality = address.municipality;
            sofyAddress.postalcode = address.postalCode;
            sofyAddress.street = address.street;
            sofyAddress.housenr = address.houseNumber;
        }
        return sofyAddress;
    }
    static ɵfac = function SofyProductMapper_Factory(t) { return new (t || SofyProductMapper)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SofyProductMapper, factory: SofyProductMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SofyProductMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

const sofyRequestAddressBuilder = Factory.Sync.makeFactory({
    addressid: 'adress-id',
    municipality: 'Merksplas',
    postalcode: '2330',
    street: 'Steenweg op Beerse',
    housenr: '123',
    country: 'Belgie',
});
const sofyRequestProductFactory = Factory.Sync.makeFactory({
    correlationid: '1',
    omapiid: '568',
    options: [],
    streamingservices: [],
    optinproducts: [],
    installationaddress: sofyRequestAddressBuilder.build(),
});

var SalesOfferProductType;
(function (SalesOfferProductType) {
    SalesOfferProductType["OPTIONS"] = "options";
    SalesOfferProductType["OPTINS"] = "optinproducts";
    SalesOfferProductType["STREAMING_SERVICES"] = "streamingservices";
})(SalesOfferProductType || (SalesOfferProductType = {}));

const salesOfferPromoPeriodFactory = Factory.Sync.makeFactory({
    startDate: '12/01/2020',
    endDate: '12/03/2020',
});
const salesOfferPromoFactory = Factory.Sync.makeFactory({
    backendid: 123,
    duration: 3,
    legalid: 'legal-id',
    name: 'promo-one',
    period: salesOfferPromoPeriodFactory.build(),
    price: -5,
    priceexclvat: -3,
    puk: '1234',
    tags: [],
    legalInformation: undefined,
});
const salesOfferProductOptionFactory = Factory.Sync.makeFactory({
    specurl: 'url/100',
    omapiid: '100',
    mutuallyexclusive: 'none',
    mutuallyexclusivelist: [],
    selected: true,
    description: 'description',
    price: 20,
    priceexclvat: 18,
    originalprice: 15,
    productInfo: {},
    promos: [salesOfferPromoFactory.build()],
});
const salesOfferProductStreamingServiceFactory = Factory.Sync.makeFactory({
    options: [salesOfferProductOptionFactory.build()],
    specurl: 'url/100',
    omapiid: '100',
    mutuallyexclusive: 'none',
    mutuallyexclusivelist: [],
    selected: true,
    description: 'description',
    price: 20,
    priceexclvat: 18,
    originalprice: 15,
    productInfo: {},
    promos: [salesOfferPromoFactory.build()],
});
const salesOfferProductOptinFactory = Factory.Sync.makeFactory({
    specurl: 'url/100',
    omapiid: '100',
    mutuallyexclusive: 'none',
    selected: true,
    description: 'description',
    price: 0,
    priceexclvat: 0,
    originalprice: 15,
    productInfo: {
        hasServiceType(_) {
            return false;
        },
    },
    promos: [],
});
const SalesOfferSetupModelFactory = Factory.Sync.makeFactory({
    easyswitcheligible: true,
});
const salesOfferProductPreInstallTypeFactory = Factory.Sync.makeFactory({
    description: InstallTypeEnum.PRE_INSTALL,
    price: 0,
    mutuallyexclusive: '',
    priceexclvat: 0,
    selected: false,
    promos: [],
});
const salesOfferProductComfortInstallTypeFactory = Factory.Sync.makeFactory({
    description: InstallTypeEnum.COMFORT_INSTALL,
    price: 85,
    mutuallyexclusive: '',
    priceexclvat: 70.25,
    selected: false,
    promos: [],
});
const salesOfferProductSelfInstallTypeFactory = Factory.Sync.makeFactory({
    description: InstallTypeEnum.SELF_INSTALL,
    price: 0,
    mutuallyexclusive: '',
    priceexclvat: 0,
    selected: false,
    promos: [],
});
const salesOfferCostFactory = Factory.Sync.makeFactory({
    name: 'cable-installation',
    price: 50,
    priceexclvat: 45,
    promotions: [],
    recurring: 0,
});
const salesOfferProductFactory = Factory.Sync.makeFactory({
    omapiid: '87',
    correlationid: 'id',
    specurl: 'url/123',
    description: 'description',
    price: 100,
    priceexclvat: 89,
    options: [salesOfferProductOptionFactory.build()],
    optinproducts: [salesOfferProductOptinFactory.build()],
    productInfo: {},
    promos: [],
    installtypes: [salesOfferProductComfortInstallTypeFactory.build(), salesOfferProductSelfInstallTypeFactory.build()],
    costs: [salesOfferCostFactory.build()],
    streamingservices: [],
});
const salesOfferStandaloneOptionsFactory = Factory.Sync.makeFactory({
    omapiid: '100',
    correlationid: 'id',
    specurl: 'url/100',
    description: 'description',
    price: 100,
    priceexclvat: 89,
    options: [],
    optinproducts: [salesOfferProductOptinFactory.build()],
    productInfo: {},
    promos: [salesOfferPromoFactory.build()],
    installtypes: [salesOfferProductComfortInstallTypeFactory.build(), salesOfferProductSelfInstallTypeFactory.build()],
    costs: [salesOfferCostFactory.build()],
    streamingservices: [],
});
const salesOfferTestFactory = Factory.Sync.makeFactory({
    products: [salesOfferProductFactory.build()],
    setup: SalesOfferSetupModelFactory.build(),
    standaloneoptions: [],
});
const salesOfferTestStandaloneOptionsFactory = Factory.Sync.makeFactory({
    products: [],
    setup: SalesOfferSetupModelFactory.build(),
    standaloneoptions: [salesOfferStandaloneOptionsFactory.build()],
});
const salesOfferError = { error: { type: 'error' } };

class PromoModelTestfactory {
    static build(properties) {
        const promo = new PromoModel();
        promo.backendid = 1;
        promo.duration = 1;
        promo.legalid = 'test-promo';
        promo.name = 'test-promo';
        promo.period = new PeriodModel();
        promo.period.startDate = '2020-01-01';
        promo.period.endDate = '2050-01-01';
        promo.price = 50;
        promo.priceexclvat = 40;
        promo.puk = '123456';
        if (properties) {
            Object.keys(properties).forEach((key) => {
                if (properties[key] === null) {
                    delete promo[key];
                }
                else {
                    promo[key] = properties[key];
                }
            });
        }
        return promo;
    }
}

const sofyAddressFactory = Factory.Sync.makeFactory({
    addressid: 'adress-id',
    municipality: 'Merksplas',
    postalcode: '2330',
    street: 'Steenweg op Beerse',
    housenr: '123',
    country: 'Belgie',
});
const sofyCustomerProductHoldingProductFactory = Factory.Sync.makeFactory({
    specurl: '568',
    address: sofyAddressFactory.build(),
    identifier: '123',
    products: [],
    options: [],
});

class Promotion {
    description;
    startdate;
    enddate;
}

class Address {
    addressId;
    type;
    houseNumber;
    boxNumber;
    subHouseNumber;
    street;
    streetId;
    postalCode;
    municipality;
    country;
    countryCode;
    floorNumber;
    addressType;
    tinaLocationId;
    plannedMaintenance;
}

class CafeRawCustomerproductholdingModel {
    identifier;
    customerproductid;
    accountnumber;
    label;
    rateclassid;
    rateclassdescription;
    specurl;
    products;
    options;
    address;
    rawOmapi;
    isProductTypeBundle() {
        return OmapiProductType.BUNDLE === this.rawOmapi?.product?.producttype;
    }
}
class CafeRawCustomerproductholdingRawomapiProductModel {
    product;
}
class CafeRawCustomerproductholdingRawomapiModel {
    productid;
    externalProductCode;
    labelkey;
    visible;
    family;
    salesofferingid;
    producttype;
    weight;
    apps;
    services;
    characteristics;
    customercategories;
    category;
    subcategory;
    localizedcontent;
    shortdescription;
    rates;
    visibilityrules;
    unlimited;
    priceType;
}

class CafeRawCustomerproductholdingOptionModel {
    specurl;
    label;
    rawOmapi;
}

class CafeModemDetailsModel {
    modemDetails;
    withModemDetails(modemDetails) {
        this.modemDetails = modemDetails;
        return this;
    }
}

class CafeModemDetailModel {
    macAddress;
    modemType;
    hardwareType;
    cableRouterName;
    internetLineIdentifier;
    installationAddress;
}

class SofyService {
    http;
    urlService;
    configService;
    pathCategorisationService;
    PARAM_DATE = 'date';
    constructor(http, urlService, configService, pathCategorisationService) {
        this.http = http;
        this.urlService = urlService;
        this.configService = configService;
        this.pathCategorisationService = pathCategorisationService;
    }
    // Deprecated,
    // products model is the same as the one used in the response
    // makes no sense to have the exact same model as it's just not the same
    // Use getSalesOffer instead
    sofyProducts(products, rawCustomerProductHolding, targetGroups, rawModemDetails, voucherPromo, campaignCode, messageGroup) {
        const data = {
            products: products,
            promotions: targetGroups,
            customerproductholding: rawCustomerProductHolding,
            modemdetails: rawModemDetails,
            voucherpromo: voucherPromo,
            campaigncode: campaignCode,
        };
        return this.doPost(data, messageGroup);
    }
    getSalesOfferWithOmapiId(products, messageGroup) {
        const data = {
            products: products,
            promotions: [],
            customerproductholding: [],
            modemdetails: [],
        };
        return this.doPost(data, messageGroup);
    }
    getSalesOffer(products, promotions, rawModemDetails, rawCustomerProductHolding, voucherPromo, campaignCode, messageGroup, installationDetails, standaloneOptions) {
        const data = {
            promotions: promotions,
            customerproductholding: rawCustomerProductHolding,
            modemdetails: rawModemDetails,
            voucherpromo: voucherPromo,
            campaigncode: campaignCode,
            customerinstallationdetails: installationDetails,
            products: products,
            standaloneoptions: standaloneOptions,
        };
        if (!isEmpty(this.getDateFromUrl())) {
            data['salesofferdate'] = this.getDateFromUrl();
        }
        return this.doPost(data, messageGroup);
    }
    doPost(data, _) {
        const options = this.getHttpOptions();
        return this.http.post(this.getSofyUrl(), data, options).pipe(take(1), catchError((error) => {
            return of(error);
        }));
    }
    getHttpOptions() {
        return {
            headers: this.createHttpHeaders(),
            timeout: 10000,
            cache: true,
        };
    }
    createHttpHeaders() {
        return {
            'x-alt-referer': this.urlService.getCurrentUrl(),
            'X-Requested-With': 'XMLHttpRequest',
        };
    }
    getSofyUrl() {
        if (this.isBaseCustomer()) {
            return this.configService.getConfig(ConfigConstants.SOFY_URL) + '/sofy/base/public/';
        }
        return this.configService.getConfig(ConfigConstants.SOFY_URL) + '/sofy/public/';
    }
    isBaseCustomer() {
        return this.pathCategorisationService.getCustomerBrand() === CustomerBrandEnum.BRAND_BASE;
    }
    getDateFromUrl() {
        return this.urlService.getRequestParamValue(this.PARAM_DATE, '');
    }
    static ɵfac = function SofyService_Factory(t) { return new (t || SofyService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.UrlService), i0.ɵɵinject(i3.ConfigService), i0.ɵɵinject(i2.PathCategorisationService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SofyService, factory: SofyService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SofyService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.HttpClient }, { type: i2.UrlService }, { type: i3.ConfigService }, { type: i2.PathCategorisationService }], null); })();

class SalesOfferProductUtil {
    static RMD_PRODUCT = 'RMD';
    static SOHO_PRODUCT = 'TB';
    static isResidentialProduct(product) {
        return product.productInfo?.getCharacteristic('productSegment') === SalesOfferProductUtil.RMD_PRODUCT;
    }
    static isSohoProduct(product) {
        return product.productInfo?.getCharacteristic('productSegment') === SalesOfferProductUtil.SOHO_PRODUCT;
    }
    static hasAnyInstallTypes(product) {
        return product.installtypes && product.installtypes.length > 0;
    }
}

class SalesOfferPromoUtil {
    static PROMOTION_DICTIONARY = 'promotions';
    static DEFAULT_LABEL = 'default';
    static DEFAULT_PERMANENT_LABEL = 'default-permanent';
    static containsTag(promo, tag) {
        return promo.some((promo) => promo.tags.some((promoTag) => promoTag === tag));
    }
    static hasDiscount(promo) {
        return promo && promo.duration > 0 && promo.price < 0;
    }
    static getShortestPromoExcludingZeroDurations(promos) {
        const nonZeroDurationPromos = promos.filter((promo) => promo.duration > 0);
        return nonZeroDurationPromos.length === 0
            ? undefined
            : nonZeroDurationPromos.reduce((prev, curr) => (prev.duration < curr.duration ? prev : curr));
    }
    static getPromoWithZeroDurationAndZeroDiscount(promos) {
        return promos.find((promo) => promo.duration === 0 && promo.price === 0);
    }
    static getTotalDiscountWithZeroDuration(promos, sohoFlow) {
        return promos
            .filter((promo) => promo.duration === 0)
            .map((promo) => (sohoFlow ? promo.priceexclvat : promo.price))
            .reduce((curr, prev) => curr + prev, 0);
    }
    static getOverviewLabel(promo, product, translateService, isSoho, discount) {
        const labelKey = SalesOfferPromoUtil.getLabelKey([SalesOfferPromoUtil.PROMOTION_DICTIONARY, LabelUtil.normalizeKey(promo.name)], isSoho);
        const params = { amount: this.transformPrice(discount), product: product, duration: promo.duration };
        let copy = translateService.instant(labelKey, params);
        if (copy === undefined || copy === null || copy === '' || copy === labelKey) {
            copy = this.getDefaultCopy(promo, isSoho, translateService, params, labelKey);
        }
        return copy;
    }
    static getDefaultCopy(promo, isSoho, translateService, params, labelKey) {
        const defaultKeyWord = SalesOfferPromoUtil.isPermanentPromotion(promo)
            ? SalesOfferPromoUtil.DEFAULT_PERMANENT_LABEL
            : SalesOfferPromoUtil.DEFAULT_LABEL;
        const defaultLabelKey = SalesOfferPromoUtil.getLabelKey([SalesOfferPromoUtil.PROMOTION_DICTIONARY, defaultKeyWord], isSoho);
        let copy = translateService.instant(defaultLabelKey, params);
        if (copy === undefined || copy === null || copy === '' || copy === defaultLabelKey) {
            copy = labelKey;
        }
        return copy;
    }
    static getLabelKey(keyWords, isSoho) {
        if (isSoho) {
            keyWords.push(ConnectFiveConstants.SOHO_LABEL_APPENDIX);
        }
        return LabelUtil.getLabelKeyWithTypeText(keyWords.join('.'));
    }
    static isPermanentPromotion(promo) {
        return promo.duration === 0 && promo.price < 0;
    }
    static transformPrice(price) {
        return !isNil(price) ? price.toFixed(2).replace('.', ',') : '';
    }
}

class SalesOfferUtil {
    static getTotalMonthlyPrice(offer, exclusiveVat) {
        return sum([
            SalesOfferUtil.getMonthlyPriceForProducts(offer, exclusiveVat),
            SalesOfferUtil.getMonthlyPriceForSelectedProductOptions(offer, exclusiveVat),
            SalesOfferUtil.getMonthlyPriceForStandaloneOptions(offer, exclusiveVat),
        ]);
    }
    static getTotalMonthlyPriceInclPromos(offer, exclusiveVat) {
        return sum([this.getTotalMonthlyPrice(offer, exclusiveVat), this.getTotalMonthlyPromoPrice(offer, exclusiveVat)]);
    }
    static getSafeSpotProOption(offer) {
        const allSelectedProductOptions = SalesOfferUtil.getAllSelectedProductOptions(offer);
        return allSelectedProductOptions.find((option) => option.omapiid === SAFE_SPOT_PRO);
    }
    static getAllSelectedProductOptions(offer) {
        return filter(this.getAllProductOptions(offer), (o) => o.selected);
    }
    static getAllProductOptions(offer) {
        if (offer === undefined) {
            return [];
        }
        return SalesOfferUtil.getAllProductItemsByType(offer, SalesOfferProductType.OPTIONS);
    }
    static getAllSelectedProductStreamingServices(offer) {
        return filter(this.getAllProductStreamingServices(offer), (o) => o.selected);
    }
    static getAllProductStreamingServices(offer) {
        if (offer === undefined) {
            return [];
        }
        return SalesOfferUtil.getAllProductItemsByType(offer, SalesOfferProductType.STREAMING_SERVICES);
    }
    static getAllSelectedProductOptins(offer) {
        return filter(this.getAllProductOptins(offer), (o) => o.selected);
    }
    static getAllProductOptins(offer) {
        if (offer === undefined) {
            return [];
        }
        return SalesOfferUtil.getAllProductItemsByType(offer, SalesOfferProductType.OPTINS);
    }
    static getAllProductItemsByType(offer, type) {
        return uniqBy(flatten(map(offer.products, (product) => product[type])), (o) => o.omapiid);
    }
    static getMonthlyPriceForSelectedProductOptions(offer, exclusiveVat) {
        const allSelectedProductOptions = SalesOfferUtil.getAllSelectedProductOptions(offer);
        return (SalesOfferUtil.getMonthlyPriceForItems(allSelectedProductOptions, !!exclusiveVat) +
            SalesOfferUtil.getMonthlyPermanentPromoDiscountForItems(allSelectedProductOptions, !!exclusiveVat));
    }
    static getMonthlyPriceForProducts(offer, exclusiveVat) {
        return (SalesOfferUtil.getMonthlyPriceForItems(offer.products, !!exclusiveVat) +
            SalesOfferUtil.getMonthlyPermanentPromoDiscountForItems(offer.products, !!exclusiveVat));
    }
    static getMonthlyPriceForStandaloneOptions(offer, exclusiveVat) {
        return (SalesOfferUtil.getMonthlyPriceForItems(offer.standaloneoptions, !!exclusiveVat) +
            SalesOfferUtil.getMonthlyPermanentPromoDiscountForItems(offer.standaloneoptions, !!exclusiveVat));
    }
    static getMonthlyPromosForSelectedProductOptions(offer, exclusiveVat) {
        return sum(map(SalesOfferUtil.getMonthlyPromotions(SalesOfferUtil.getAllSelectedProductOptions(offer)), (p) => (exclusiveVat ? p.priceexclvat : p.price)));
    }
    static getMonthlyPromosForProducts(offer, exclusiveVat) {
        return sum(map(SalesOfferUtil.getMonthlyPromotions(offer.products), (p) => exclusiveVat ? p.priceexclvat : p.price));
    }
    static getMonthlyPromosForStandaloneOptions(offer, exclusiveVat) {
        return sum(map(SalesOfferUtil.getMonthlyPromotions(offer.standaloneoptions), (p) => exclusiveVat ? p.priceexclvat : p.price));
    }
    static getMonthlyPromos(offer) {
        return flatMap(offer.products, (product) => SalesOfferUtil.getMonthlyProductPromos(product));
    }
    static getAllPromos(offer) {
        return concat(SalesOfferUtil.getMonthlyPromos(offer), flatMap(offer.products, (product) => SalesOfferUtil.getCostPromos(product)), flatMap(offer.products, (product) => SalesOfferUtil.getInstallPromos(product)));
    }
    static findProduct(offer, omapiId) {
        return offer && offer.products ? offer.products.find((product) => product.omapiid === omapiId) : undefined;
    }
    static getCostPromos(product) {
        return flatMap(product.costs, (cost) => cost.promotions);
    }
    static getInstallPromos(product) {
        return flatMap(product.installtypes.filter((installType) => installType.selected), (installType) => installType.promos);
    }
    static getMonthlyProductPromos(product) {
        return concat(product.promos, flatMap(product.optinproducts, (optin) => optin.promos), flatMap(product.options.filter((option) => option.selected), (option) => option.promos));
    }
    static getMonthlyPromosGroupedByDuration(offer) {
        return map(groupBy(SalesOfferUtil.getMonthlyPromos(offer).filter((promo) => promo.duration > 0), (promo) => promo.duration), (promos, key) => {
            return {
                duration: Number(key),
                promos: promos,
            };
        });
    }
    static getPromoDurationGroupsTotal(salesOfferPromoGroups, exclusiveVat) {
        return sum(map(flatMap(salesOfferPromoGroups, (group) => group.promos), (promo) => (exclusiveVat ? promo.priceexclvat : promo.price)));
    }
    static getBundle(offer) {
        const bundle = offer.products.find((product) => {
            return product.productInfo && product.productInfo.isBundle();
        });
        if (!bundle) {
            throw new Error('Salesoffer does not contain a bundle');
        }
        return bundle;
    }
    static containsResidentialProduct(offer) {
        return offer.products.some((product) => SalesOfferProductUtil.isResidentialProduct(product));
    }
    static containsSohoProduct(offer) {
        return offer.products.some((product) => SalesOfferProductUtil.isSohoProduct(product));
    }
    static containsPromoTag(offer, tag) {
        return SalesOfferPromoUtil.containsTag(offer.promos, tag);
    }
    static getMonthlyPriceForItems(items, exclusiveVat) {
        return sum(map(items, (p) => (exclusiveVat ? p.priceexclvat : p.price)));
    }
    static getMonthlyPermanentPromoDiscountForItems(items, exclusiveVat) {
        return SalesOfferUtil.getPermanentPromotions(items)
            .map((promo) => SalesOfferUtil.getPrice(promo, exclusiveVat))
            .reduce((curr, previous) => curr + previous, 0);
    }
    static getPermanentPromotions(items) {
        return SalesOfferUtil.getPromotionsWithDuration(items, (promo) => promo?.duration === 0);
    }
    static getMonthlyPromotions(items) {
        return SalesOfferUtil.getPromotionsWithDuration(items, (promo) => promo?.duration > 0);
    }
    static getPromotionsWithDuration(items, durationFilter) {
        return (items || [])
            .map((item) => item.promos)
            .reduce((accumulator, value) => accumulator.concat(value), [])
            .filter(durationFilter);
    }
    static getShortestDurationOfAllPromos(salesOffer) {
        return min([
            this.getShortestPromoDurationOfProducts(salesOffer),
            this.getShortestPromoDurationOfProductOptions(salesOffer),
            this.getShortestPromoDurationOfStandaloneOptions(salesOffer),
        ]);
    }
    static getPriceInclPromo(salesOfferProduct, business) {
        return this.getPrice(salesOfferProduct, business) + sumBy(salesOfferProduct.promos, this.getPriceTag(business));
    }
    static getTotalTemporaryDiscount(salesOfferProduct, business) {
        const temporaryPromos = salesOfferProduct.promos.filter((promo) => promo.duration !== 0);
        return sumBy(temporaryPromos, this.getPriceTag(business));
    }
    static getShortestPromoDuration(salesOfferProduct) {
        return this.calculateShortestPromoDuration(salesOfferProduct.promos);
    }
    static getTotalMonthlyPromoPrice(offer, exclusiveVat) {
        return sum([
            SalesOfferUtil.getMonthlyPromosForProducts(offer, exclusiveVat),
            SalesOfferUtil.getMonthlyPromosForSelectedProductOptions(offer, exclusiveVat),
            SalesOfferUtil.getMonthlyPromosForStandaloneOptions(offer, exclusiveVat),
        ]);
    }
    static getPrice(salesOfferProduct, business) {
        return business ? salesOfferProduct.priceexclvat : salesOfferProduct.price;
    }
    static getPriceTag(business) {
        return business ? 'priceexclvat' : 'price';
    }
    static calculateShortestPromoDuration(salesOfferPromos) {
        const shortestDurationPromo = minBy(salesOfferPromos, 'duration');
        return !isUndefined(shortestDurationPromo) ? shortestDurationPromo.duration : 0;
    }
    static getShortestPromoDurationOfProducts(salesOffer) {
        return min(map(SalesOfferUtil.getMonthlyPromotions(salesOffer.products), (promo) => promo.duration));
    }
    static getShortestPromoDurationOfStandaloneOptions(salesOffer) {
        return min(map(SalesOfferUtil.getMonthlyPromotions(salesOffer.standaloneoptions), (promo) => promo.duration));
    }
    static getShortestPromoDurationOfProductOptions(salesOffer) {
        return min(map(SalesOfferUtil.getMonthlyPromotions(this.getAllSelectedProductOptions(salesOffer)), (promo) => promo.duration));
    }
    static getCosts(salesOffer, nameFilter = null) {
        const flat = (someFunction, arr) => arr.reduce((salesOfferCosts, salesOfferProduct) => [
            ...salesOfferCosts,
            ...someFunction(salesOfferProduct),
        ], []);
        const costs = flat((product) => {
            if (product.costs) {
                return product.costs;
            }
            else {
                return [];
            }
        }, salesOffer.products);
        if (nameFilter) {
            return costs.filter((cost) => cost.name === nameFilter);
        }
        return costs;
    }
    static getInstallTypes(salesOffer) {
        return flatMap(salesOffer.products, (product) => product.installtypes);
    }
    static isOrderingHighTier(salesOffer) {
        return salesOffer.products.some((product) => {
            return product.productInfo && product.productInfo.isHighTier();
        });
    }
    static containsAll(offer, omapiIds) {
        return omapiIds.every((omapiId) => this.contains(offer, omapiId));
    }
    static containsAny(offer, omapiIds) {
        return omapiIds.some((omapiId) => this.contains(offer, omapiId));
    }
    static contains(offer, omapiId) {
        return offer.products.some((product) => product.omapiid === omapiId);
    }
}

class ConnectFivePriceFromFlowTypeUtil {
    static connectFivePriceWithFlowTypeConsidered(flowType, objectContainingPriceWithVatAndPriceWithoutVat) {
        if (flowType === FlowTypeEnum.SOHO) {
            return objectContainingPriceWithVatAndPriceWithoutVat.priceexclvat;
        }
        else {
            return objectContainingPriceWithVatAndPriceWithoutVat.price;
        }
    }
}

class SalesOfferInstallTypeUtil {
    static getInstallType(type, installTypes) {
        return installTypes.find((installType) => installType.description === type);
    }
    static getInstallTypeForFlowType(type, installTypes, flowType) {
        const foundInstallType = this.getInstallType(type, installTypes);
        if (typeof foundInstallType === 'undefined') {
            return undefined;
        }
        const installType = JSON.parse(JSON.stringify(foundInstallType));
        installType.price = ConnectFivePriceFromFlowTypeUtil.connectFivePriceWithFlowTypeConsidered(flowType, installType);
        installType.promos.forEach((promo) => (promo.price = ConnectFivePriceFromFlowTypeUtil.connectFivePriceWithFlowTypeConsidered(flowType, promo)));
        return installType;
    }
    static getDeliveryOption(type, installType) {
        return installType?.options
            ? installType.options.find((installTypeOption) => installTypeOption?.description === type)
            : undefined;
    }
    static hasHomeDelivery(installType) {
        return !!installType.options?.some((installTypeOption) => installTypeOption?.description === SelfInstallTypeEnum.HOME_DELIVERY);
    }
    static hasPickup(installType) {
        return !!installType.options?.some((installTypeOption) => installTypeOption?.description === SelfInstallTypeEnum.PICKUP);
    }
}

class SalesOfferProductOptinUtil {
    static hasMobileInternetOptin(optins) {
        return SalesOfferProductOptinUtil.hasOptinWithServiceType(optins, ServiceTypeEnum.MOBILE_INTERNET);
    }
    static hasOptinWithServiceType(optins, serviceType) {
        return optins && optins.some((optin) => optin.productInfo && optin.productInfo.hasServiceType(serviceType));
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { Address, CafeModemDetailModel, CafeModemDetailsModel, CafeRawCustomerproductholdingModel, CafeRawCustomerproductholdingOptionModel, CafeRawCustomerproductholdingRawomapiModel, CafeRawCustomerproductholdingRawomapiProductModel, ConnectFiveConstants, CostMapper, FlowTypeEnum, InstallTypeEnum, InstallTypeMapper, InstallTypeModel, OptionMapper, OptionModel, PeriodModel, ProductMapper, ProductModel, PromoMapper, PromoModel, PromoModelTestfactory, Promotion, SAFE_SPOT_PRO, SalesOfferCost, SalesOfferInstallTypeUtil, SalesOfferMapper, SalesOfferModel, SalesOfferProductOptinUtil, SalesOfferProductType, SalesOfferProductUtil, SalesOfferPromoUtil, SalesOfferSetupModelFactory, SalesOfferUtil, SelfInstallTypeEnum, ServiceTypeEnum, SofyAddress, SofyCustomerProductHoldingProduct, SofyCustomerProductHoldingProductMapper, SofyModemDetails, SofyModemDetailsMapper, SofyProduct, SofyProductMapper, SofyPromoType, SofyService, salesOfferCostFactory, salesOfferError, salesOfferProductComfortInstallTypeFactory, salesOfferProductFactory, salesOfferProductOptinFactory, salesOfferProductOptionFactory, salesOfferProductPreInstallTypeFactory, salesOfferProductSelfInstallTypeFactory, salesOfferProductStreamingServiceFactory, salesOfferPromoFactory, salesOfferPromoPeriodFactory, salesOfferStandaloneOptionsFactory, salesOfferTestFactory, salesOfferTestStandaloneOptionsFactory, sofyAddressFactory, sofyCustomerProductHoldingProductFactory, sofyRequestAddressBuilder, sofyRequestProductFactory };
//# sourceMappingURL=telenet-ng-lib-sofy.mjs.map
