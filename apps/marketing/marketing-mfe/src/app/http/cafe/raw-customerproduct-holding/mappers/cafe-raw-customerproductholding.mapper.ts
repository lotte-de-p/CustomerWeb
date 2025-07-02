import { MapperInterface } from '@telenet/ng-lib-shared';
import { Injectable } from '@angular/core';
import {
  CafeRawCustomerproductholdingAddressInterface,
  CafeRawCustomerproductholdingInterface,
  CafeRawCustomerproductholdingOptionInterface,
  CafeRawCustomerproductholdingRawOmapiAppInterface,
  CafeRawCustomerproductholdingRawOmapiCharacteristicsInterface,
  CafeRawCustomerproductholdingRawOmapiCharacteristicsUnitValueInterface,
  CafeRawCustomerproductholdingRawOmapiLocalizedContentInterface,
  CafeRawCustomerproductholdingRawOmapiProductInterface,
  CafeRawCustomerproductholdingRawOmapiRateInterface,
  CafeRawCustomerproductholdingRawOmapiServicesExperienceInterface,
  CafeRawCustomerproductholdingRawOmapiServicesInterface,
  CafeRawCustomerproductholdingRawOmapiServicesSpecificationInterface,
  CafeRawCustomerproductholdingRawOmapiShortDescriptionInterface,
  CafeRawCustomerproductholdingRawOmapiSubCategoryInterface,
  CafeRawCustomerproductholdingRawOmapiVisibilityrulesInterface,
  CafeRawCustomerproductholdingsInterface,
} from '../interfaces/cafe-raw-customerproductholding.interface';
import { CafeRawCustomerproductholdingModel } from '../models/cafe-raw-customerproductholding.model';
import { CafeRawCustomerproductholdingProductModel } from '../models/cafe-raw-customerproductholding-product.model';
import { CafeRawCustomerproductholdingOptionModel } from '../models/cafe-raw-customerproductholding-option.model';
import { CafeRawCustomerproductholdingAddressModel } from '../models/cafe-raw-customerproductholding-address.model';
import { CafeRawCustomerproductholdingRawomapiModel } from '../models/cafe-raw-customerproductholding-rawomapi.model';
import { CafeRawCustomerproductholdingRawomapiProductModel } from '../models/cafe-raw-customerproductholding-rawomapi-product.model';
import { CafeRawCustomerproductholdingRawomapiAppModel } from '../models/cafe-raw-customerproductholding-rawomapi-app.model';
import { CafeRawCustomerproductholdingRawomapiServicesModel } from '../models/cafe-raw-customerproductholding-rawomapi-services.model';
import { CafeRawCustomerproductholdingRawomapiServicesExperienceModel } from '../models/cafe-raw-customerproductholding-rawomapi-services-experience.model';
import { CafeRawCustomerproductholdingRawomapiServicesSpecificationModel } from '../models/cafe-raw-customerproductholding-rawomapi-services-specification.model';
import { CafeRawCustomerproductholdingRawomapiLocalizedContentModel } from '../models/cafe-raw-customerproductholding-rawomapi-localizedContent.model';
import { CafeRawCustomerproductholdingRawomapiCharacteristicsModel } from '../models/cafe-raw-customerproductholding-rawomapi-characteristics.model';
import { CafeRawCustomerproductholdingRawomapiCharactersiticsUnitvalue } from '../models/cafe-raw-customerproductholding-rawomapi-charactersitics-unitvalue';
import { CafeRawCustomerproductholdingRawomapiSubcategoryModel } from '../models/cafe-raw-customerproductholding-rawomapi-subcategory.model';
import { CafeRawCustomerproductholdingRawomapiShortdescriptionModel } from '../models/cafe-raw-customerproductholding-rawomapi-shortdescription.model';
import { CafeRawCustomerproductholdingRawomapiRateModel } from '../models/cafe-raw-customerproductholding-rawomapi-rate.model';
import { CafeRawCustomerproductholdingRawomapiVisibilityrulesModel } from '../models/cafe-raw-customerproductholding-rawomapi-visibilityrules.model';

@Injectable({
  providedIn: 'root',
})
export class CafeRawCustomerproductholdingMapper
  implements MapperInterface<CafeRawCustomerproductholdingsInterface, CafeRawCustomerproductholdingModel[]>
{
  toModel(data: CafeRawCustomerproductholdingsInterface, _httpStatus?: number): CafeRawCustomerproductholdingModel[] {
    return this.createCustomerproductholdings(data.customerproductholding);
  }

  private createCustomerproductholdings(
    rawCustomerproductholdings: CafeRawCustomerproductholdingInterface[]
  ): CafeRawCustomerproductholdingModel[] {
    const cafeRawCustomerproductholdings: CafeRawCustomerproductholdingModel[] = [];
    rawCustomerproductholdings.forEach((rawCustomerproductholding) => {
      cafeRawCustomerproductholdings.push(this.createCustomerproductholding(rawCustomerproductholding));
    });
    return cafeRawCustomerproductholdings;
  }

  private createCustomerproductholding(rawCustomerproductholding: CafeRawCustomerproductholdingInterface) {
    const cafeRawCustomerproductholdingModel = new CafeRawCustomerproductholdingModel();
    if (rawCustomerproductholding.identifier) {
      cafeRawCustomerproductholdingModel.identifier = rawCustomerproductholding.identifier;
    }
    if (rawCustomerproductholding.customerproductid) {
      cafeRawCustomerproductholdingModel.customerproductid = rawCustomerproductholding.customerproductid;
    }
    if (rawCustomerproductholding.accountnumber) {
      cafeRawCustomerproductholdingModel.accountnumber = rawCustomerproductholding.accountnumber;
    }
    if (rawCustomerproductholding.label) {
      cafeRawCustomerproductholdingModel.label = rawCustomerproductholding.label;
    }
    if (rawCustomerproductholding.rateclassid) {
      cafeRawCustomerproductholdingModel.rateclassid = rawCustomerproductholding.rateclassid;
    }
    if (rawCustomerproductholding.rateclassdescription) {
      cafeRawCustomerproductholdingModel.rateclassdescription = rawCustomerproductholding.rateclassdescription;
    }
    if (rawCustomerproductholding.specurl) {
      cafeRawCustomerproductholdingModel.specurl = rawCustomerproductholding.specurl;
    }
    cafeRawCustomerproductholdingModel.products = [];
    if (rawCustomerproductholding.products) {
      rawCustomerproductholding.products.forEach((rawCustomerproductholdingProduct) => {
        cafeRawCustomerproductholdingModel.products.push(
          this.createCustomerproductholdingProduct(rawCustomerproductholdingProduct)
        );
      });
    }

    cafeRawCustomerproductholdingModel.options = [];
    if (rawCustomerproductholding.options) {
      rawCustomerproductholding.options.forEach((rawCustomerproductholdingOption) => {
        cafeRawCustomerproductholdingModel.options.push(
          this.createCustomerproductholdingOption(rawCustomerproductholdingOption)
        );
      });
    }

    if (rawCustomerproductholding.address) {
      cafeRawCustomerproductholdingModel.address = this.createCustomerproductholdingAddress(
        rawCustomerproductholding.address
      );
    }

    if (rawCustomerproductholding.rawOmapi) {
      cafeRawCustomerproductholdingModel.rawOmapi = this.createRawOmapi(rawCustomerproductholding.rawOmapi);
    }

    return cafeRawCustomerproductholdingModel;
  }

  private createCustomerproductholdingProduct(
    rawCustomerproductholdingProduct: CafeRawCustomerproductholdingInterface
  ) {
    const cafeRawCustomerproductholdingProductModel = new CafeRawCustomerproductholdingProductModel();
    if (rawCustomerproductholdingProduct.identifier) {
      cafeRawCustomerproductholdingProductModel.identifier = rawCustomerproductholdingProduct.identifier;
    }
    if (rawCustomerproductholdingProduct.customerproductid) {
      cafeRawCustomerproductholdingProductModel.customerproductid = rawCustomerproductholdingProduct.customerproductid;
    }
    if (rawCustomerproductholdingProduct.accountnumber) {
      cafeRawCustomerproductholdingProductModel.accountnumber = rawCustomerproductholdingProduct.accountnumber;
    }
    if (rawCustomerproductholdingProduct.label) {
      cafeRawCustomerproductholdingProductModel.label = rawCustomerproductholdingProduct.label;
    }
    if (rawCustomerproductholdingProduct.rateclassid) {
      cafeRawCustomerproductholdingProductModel.rateclassid = rawCustomerproductholdingProduct.rateclassid;
    }
    if (rawCustomerproductholdingProduct.rateclassdescription) {
      cafeRawCustomerproductholdingProductModel.rateclassdescription =
        rawCustomerproductholdingProduct.rateclassdescription;
    }
    if (rawCustomerproductholdingProduct.specurl) {
      cafeRawCustomerproductholdingProductModel.specurl = rawCustomerproductholdingProduct.specurl;
    }

    cafeRawCustomerproductholdingProductModel.products = [];
    if (rawCustomerproductholdingProduct.products) {
      rawCustomerproductholdingProduct.products.forEach((rawCustomerproductholdingProductProduct) => {
        cafeRawCustomerproductholdingProductModel.products.push(
          this.createCustomerproductholdingProduct(rawCustomerproductholdingProductProduct)
        );
      });
    }

    cafeRawCustomerproductholdingProductModel.options = [];
    if (rawCustomerproductholdingProduct.options) {
      rawCustomerproductholdingProduct.options.forEach((rawCustomerproductholdingProductOption) => {
        cafeRawCustomerproductholdingProductModel.options.push(
          this.createCustomerproductholdingOption(rawCustomerproductholdingProductOption)
        );
      });
    }

    if (rawCustomerproductholdingProduct.address) {
      cafeRawCustomerproductholdingProductModel.address = this.createCustomerproductholdingAddress(
        rawCustomerproductholdingProduct.address
      );
    }

    if (rawCustomerproductholdingProduct.rawOmapi) {
      cafeRawCustomerproductholdingProductModel.rawOmapi = this.createRawOmapi(
        rawCustomerproductholdingProduct.rawOmapi
      );
    }

    return cafeRawCustomerproductholdingProductModel;
  }

  private createCustomerproductholdingOption(
    cafeRawCustomerproductholdingOption: CafeRawCustomerproductholdingOptionInterface
  ) {
    const cafeRawCustomerproductholdingOptionModel = new CafeRawCustomerproductholdingOptionModel();

    if (cafeRawCustomerproductholdingOption.specurl) {
      cafeRawCustomerproductholdingOptionModel.specurl = cafeRawCustomerproductholdingOption.specurl;
    }
    if (cafeRawCustomerproductholdingOption.label) {
      cafeRawCustomerproductholdingOptionModel.label = cafeRawCustomerproductholdingOption.label;
    }
    if (cafeRawCustomerproductholdingOption.rawOmapi) {
      cafeRawCustomerproductholdingOptionModel.rawOmapi = this.createRawOmapi(
        cafeRawCustomerproductholdingOption.rawOmapi
      );
    }

    return cafeRawCustomerproductholdingOptionModel;
  }

  private createCustomerproductholdingAddress(
    cafeRawCustomerproductholdingAddress: CafeRawCustomerproductholdingAddressInterface
  ) {
    const cafeRawCustomerproductholdingAddressModel = new CafeRawCustomerproductholdingAddressModel();

    if (cafeRawCustomerproductholdingAddress.street) {
      cafeRawCustomerproductholdingAddressModel.street = cafeRawCustomerproductholdingAddress.street;
    }
    if (cafeRawCustomerproductholdingAddress.postalcode) {
      cafeRawCustomerproductholdingAddressModel.postalcode = cafeRawCustomerproductholdingAddress.postalcode;
    }
    if (cafeRawCustomerproductholdingAddress.municipality) {
      cafeRawCustomerproductholdingAddressModel.municipality = cafeRawCustomerproductholdingAddress.municipality;
    }
    if (cafeRawCustomerproductholdingAddress.country) {
      cafeRawCustomerproductholdingAddressModel.country = cafeRawCustomerproductholdingAddress.country;
    }
    if (cafeRawCustomerproductholdingAddress.housenr) {
      cafeRawCustomerproductholdingAddressModel.housenr = cafeRawCustomerproductholdingAddress.housenr;
    }
    if (cafeRawCustomerproductholdingAddress.boxnr) {
      cafeRawCustomerproductholdingAddressModel.boxnr = cafeRawCustomerproductholdingAddress.boxnr;
    }
    if (cafeRawCustomerproductholdingAddress.subhousenr) {
      cafeRawCustomerproductholdingAddressModel.subhousenr = cafeRawCustomerproductholdingAddress.subhousenr;
    }
    if (cafeRawCustomerproductholdingAddress.floor) {
      cafeRawCustomerproductholdingAddressModel.floor = cafeRawCustomerproductholdingAddress.floor;
    }
    if (cafeRawCustomerproductholdingAddress.addressid) {
      cafeRawCustomerproductholdingAddressModel.addressid = cafeRawCustomerproductholdingAddress.addressid;
    }

    return cafeRawCustomerproductholdingAddressModel;
  }

  private createRawOmapi(
    rawOmapiProduct: CafeRawCustomerproductholdingRawOmapiProductInterface
  ): CafeRawCustomerproductholdingRawomapiProductModel {
    const cafeRawCustomerproductholdingRawomapiProductModel = new CafeRawCustomerproductholdingRawomapiProductModel();
    const cafeRawCustomerproductholdingRawomapiModel = new CafeRawCustomerproductholdingRawomapiModel();
    const rawOmapiProductData = rawOmapiProduct && rawOmapiProduct.product;
    if (rawOmapiProductData) {
      Object.assign(cafeRawCustomerproductholdingRawomapiModel, rawOmapiProductData);

      cafeRawCustomerproductholdingRawomapiModel.apps = [];
      if (rawOmapiProductData.apps) {
        rawOmapiProductData.apps.forEach((rawApps) => {
          cafeRawCustomerproductholdingRawomapiModel.apps.push(this.createApps(rawApps));
        });
      }

      cafeRawCustomerproductholdingRawomapiModel.services = [];
      if (rawOmapiProductData.services) {
        rawOmapiProductData.services.forEach((rawServices) => {
          cafeRawCustomerproductholdingRawomapiModel.services.push(this.createServices(rawServices));
        });
      }

      cafeRawCustomerproductholdingRawomapiModel.characteristics = this.createCharacteristics(
        rawOmapiProductData.characteristics
      );

      cafeRawCustomerproductholdingRawomapiModel.subcategory = this.createSubCategory(rawOmapiProductData.subcategory);

      if (rawOmapiProductData.localizedcontent) {
        cafeRawCustomerproductholdingRawomapiModel.localizedcontent = [];
        rawOmapiProductData.localizedcontent.forEach((rawLocalizedContent) => {
          cafeRawCustomerproductholdingRawomapiModel.localizedcontent.push(
            this.createLocalizedContent(rawLocalizedContent)
          );
        });
      }

      if (rawOmapiProductData.shortdescription) {
        cafeRawCustomerproductholdingRawomapiModel.shortdescription = this.createShortDescription(
          rawOmapiProductData.shortdescription
        );
      }

      if (rawOmapiProductData.rates) {
        cafeRawCustomerproductholdingRawomapiModel.rates = [];
        rawOmapiProductData.rates.forEach((rawRates) => {
          cafeRawCustomerproductholdingRawomapiModel.rates.push(this.createRates(rawRates));
        });
      }

      if (rawOmapiProductData.visibilityrules) {
        cafeRawCustomerproductholdingRawomapiModel.visibilityrules = this.createVisibilityRules(
          rawOmapiProductData.visibilityrules
        );
      }
    }
    cafeRawCustomerproductholdingRawomapiProductModel.product = cafeRawCustomerproductholdingRawomapiModel;
    return cafeRawCustomerproductholdingRawomapiProductModel;
  }

  private createApps(
    cafeRawCustomerproductholdingRawOmapiAppInterface: CafeRawCustomerproductholdingRawOmapiAppInterface
  ) {
    const cafeRawCustomerproductholdingRawomapiAppModel = new CafeRawCustomerproductholdingRawomapiAppModel();
    if (cafeRawCustomerproductholdingRawOmapiAppInterface.labelkey) {
      cafeRawCustomerproductholdingRawomapiAppModel.labelkey =
        cafeRawCustomerproductholdingRawOmapiAppInterface.labelkey;
    }
    return cafeRawCustomerproductholdingRawomapiAppModel;
  }

  private createServices(
    rawOmapiServices: CafeRawCustomerproductholdingRawOmapiServicesInterface
  ): CafeRawCustomerproductholdingRawomapiServicesModel {
    const rawOmapiServicesModel = new CafeRawCustomerproductholdingRawomapiServicesModel();
    Object.assign(rawOmapiServicesModel, rawOmapiServices);

    if (rawOmapiServices.experience) {
      const rawServicesExperience: CafeRawCustomerproductholdingRawOmapiServicesExperienceInterface =
        rawOmapiServices.experience;
      const rawOmapiServicesExperienceModel = new CafeRawCustomerproductholdingRawomapiServicesExperienceModel();
      if (rawServicesExperience.experiencetype) {
        rawOmapiServicesExperienceModel.experiencetype = rawServicesExperience.experiencetype;
      }
      if (rawServicesExperience.weight) {
        rawOmapiServicesExperienceModel.weight = rawServicesExperience.weight;
      }
      rawOmapiServicesModel.experience = rawOmapiServicesExperienceModel;
    }
    rawOmapiServicesModel.specifications = [];
    if (rawOmapiServices.specifications) {
      rawOmapiServices.specifications.forEach((rawOmapiSrviceSpecification) => {
        rawOmapiServicesModel.specifications.push(this.createServiceSpecification(rawOmapiSrviceSpecification));
      });
    }
    return rawOmapiServicesModel;
  }

  private createServiceSpecification(
    rawOmapiSrviceSpecification: CafeRawCustomerproductholdingRawOmapiServicesSpecificationInterface
  ): CafeRawCustomerproductholdingRawomapiServicesSpecificationModel {
    const rawOmapiSrviceSpecificationModel = new CafeRawCustomerproductholdingRawomapiServicesSpecificationModel();
    if (rawOmapiSrviceSpecification.labelkey) {
      rawOmapiSrviceSpecificationModel.labelkey = rawOmapiSrviceSpecification.labelkey;
    }
    if (rawOmapiSrviceSpecification.value) {
      rawOmapiSrviceSpecificationModel.value = rawOmapiSrviceSpecification.value;
    }
    if (rawOmapiSrviceSpecification.maxvalue) {
      rawOmapiSrviceSpecificationModel.maxvalue = rawOmapiSrviceSpecification.maxvalue;
    }
    if (rawOmapiSrviceSpecification.minvalue) {
      rawOmapiSrviceSpecificationModel.minvalue = rawOmapiSrviceSpecification.minvalue;
    }
    if (rawOmapiSrviceSpecification.unit) {
      rawOmapiSrviceSpecificationModel.unit = rawOmapiSrviceSpecification.unit;
    }
    rawOmapiSrviceSpecificationModel.visible = rawOmapiSrviceSpecification.visible;
    if (rawOmapiSrviceSpecification.weight) {
      rawOmapiSrviceSpecificationModel.weight = rawOmapiSrviceSpecification.weight;
    }
    if (rawOmapiSrviceSpecification.localizedcontent) {
      rawOmapiSrviceSpecificationModel.localizedcontent = [];
      rawOmapiSrviceSpecification.localizedcontent.forEach((rawLocalizedContent) => {
        rawOmapiSrviceSpecificationModel.localizedcontent.push(this.createLocalizedContent(rawLocalizedContent));
      });
    }
    return rawOmapiSrviceSpecificationModel;
  }

  private createLocalizedContent(
    rawLocalizedContent: CafeRawCustomerproductholdingRawOmapiLocalizedContentInterface
  ): CafeRawCustomerproductholdingRawomapiLocalizedContentModel {
    const rawLocalizedContentModel = new CafeRawCustomerproductholdingRawomapiLocalizedContentModel();
    if (rawLocalizedContent.locale) {
      rawLocalizedContentModel.locale = rawLocalizedContent.locale;
    }
    if (rawLocalizedContent.name) {
      rawLocalizedContentModel.name = rawLocalizedContent.name;
    }
    if (rawLocalizedContent.logo) {
      rawLocalizedContentModel.logo = rawLocalizedContent.logo;
    }
    return rawLocalizedContentModel;
  }

  private createCharacteristics(
    rawCharacteristics: CafeRawCustomerproductholdingRawOmapiCharacteristicsInterface
  ): CafeRawCustomerproductholdingRawomapiCharacteristicsModel {
    const rawCharacteristicsModel = new CafeRawCustomerproductholdingRawomapiCharacteristicsModel();
    Object.assign(rawCharacteristicsModel, rawCharacteristics);
    if (rawCharacteristics.alert_threshold_marker) {
      rawCharacteristicsModel.alert_threshold_marker = this.createUnitValue(rawCharacteristics.alert_threshold_marker);
    }
    if (rawCharacteristics.initial_threshold_1) {
      rawCharacteristicsModel.initial_threshold_1 = this.createUnitValue(rawCharacteristics.initial_threshold_1);
    }
    if (rawCharacteristics.initial_threshold_2) {
      rawCharacteristicsModel.initial_threshold_2 = this.createUnitValue(rawCharacteristics.initial_threshold_2);
    }
    if (rawCharacteristics.alert_threshold) {
      rawCharacteristicsModel.alert_threshold = this.createUnitValue(rawCharacteristics.alert_threshold);
    }
    if (rawCharacteristics.service_category_limit) {
      rawCharacteristicsModel.service_category_limit = this.createUnitValue(rawCharacteristics.service_category_limit);
    }
    if (rawCharacteristics.sharedmobiledata) {
      rawCharacteristicsModel.sharedmobiledata = this.createUnitValue(rawCharacteristics.sharedmobiledata);
    }

    if (rawCharacteristics.salespricevatexcl) {
      rawCharacteristicsModel.salespricevatexcl = this.createUnitValue(rawCharacteristics.salespricevatexcl);
    }
    if (rawCharacteristics.salespricevatincl) {
      rawCharacteristicsModel.salespricevatincl = this.createUnitValue(rawCharacteristics.salespricevatincl);
    }
    if (rawCharacteristics.rentalpricevatexcl) {
      rawCharacteristicsModel.rentalpricevatexcl = this.createUnitValue(rawCharacteristics.rentalpricevatexcl);
    }
    if (rawCharacteristics.rentalpricevatincl) {
      rawCharacteristicsModel.rentalpricevatincl = this.createUnitValue(rawCharacteristics.rentalpricevatincl);
    }

    rawCharacteristicsModel.service_category = rawCharacteristics.service_category ?? '';
    if (rawCharacteristics.detailed_scale) {
      rawCharacteristicsModel.detailed_scale = this.createUnitValue(rawCharacteristics.detailed_scale);
    }
    if (rawCharacteristics.sharedmobiledata_unlimited) {
      rawCharacteristicsModel.sharedmobiledata_unlimited = this.createUnitValue(
        rawCharacteristics.sharedmobiledata_unlimited
      );
    }

    return rawCharacteristicsModel;
  }

  private createUnitValue(
    rawUnitValue: CafeRawCustomerproductholdingRawOmapiCharacteristicsUnitValueInterface
  ): CafeRawCustomerproductholdingRawomapiCharactersiticsUnitvalue {
    const rawUnitValueModel = new CafeRawCustomerproductholdingRawomapiCharactersiticsUnitvalue();
    if (rawUnitValue.unit) {
      rawUnitValueModel.unit = rawUnitValue.unit;
    }
    if (rawUnitValue.value) {
      rawUnitValueModel.value = rawUnitValue.value;
    }
    return rawUnitValueModel;
  }

  private createSubCategory(
    rawSubCategory?: CafeRawCustomerproductholdingRawOmapiSubCategoryInterface
  ): CafeRawCustomerproductholdingRawomapiSubcategoryModel {
    const rawSubCategoryModel = new CafeRawCustomerproductholdingRawomapiSubcategoryModel();

    if (!rawSubCategory) {
      return rawSubCategoryModel;
    }

    if (rawSubCategory.name) {
      rawSubCategoryModel.name = rawSubCategory.name;
    }
    if (rawSubCategory.localizedcontent) {
      rawSubCategoryModel.localizedcontent = [];
      rawSubCategory.localizedcontent.forEach((rawLocalizedContent) => {
        rawSubCategoryModel.localizedcontent.push(this.createLocalizedContent(rawLocalizedContent));
      });
    }
    if (rawSubCategory.weight) {
      rawSubCategoryModel.weight = rawSubCategory.weight;
    }
    if (rawSubCategory.mutualexclusion) {
      rawSubCategoryModel.mutualexclusion = rawSubCategory.mutualexclusion;
    }
    return rawSubCategoryModel;
  }

  private createShortDescription(
    rawShortDescription?: CafeRawCustomerproductholdingRawOmapiShortDescriptionInterface
  ): CafeRawCustomerproductholdingRawomapiShortdescriptionModel {
    const rawShortDescriptionModel = new CafeRawCustomerproductholdingRawomapiShortdescriptionModel();

    if (!rawShortDescription) {
      return rawShortDescriptionModel;
    }

    if (rawShortDescription.localizedcontent) {
      rawShortDescriptionModel.localizedcontent = [];
      rawShortDescription.localizedcontent.forEach((rawLocalizedContent) => {
        rawShortDescriptionModel.localizedcontent.push(this.createLocalizedContent(rawLocalizedContent));
      });
    }
    return rawShortDescriptionModel;
  }

  private createRates(
    rawRates: CafeRawCustomerproductholdingRawOmapiRateInterface
  ): CafeRawCustomerproductholdingRawomapiRateModel {
    const rawRatesModel = new CafeRawCustomerproductholdingRawomapiRateModel();
    if (rawRates.type) {
      rawRatesModel.type = rawRates.type;
    }
    if (rawRates.unit) {
      rawRatesModel.unit = rawRates.unit;
    }
    if (rawRates.cost) {
      rawRatesModel.cost = rawRates.cost;
    }
    if (rawRates.currency) {
      rawRatesModel.currency = rawRates.currency;
    }
    return rawRatesModel;
  }

  private createVisibilityRules(
    rawVisibilityRules: CafeRawCustomerproductholdingRawOmapiVisibilityrulesInterface
  ): CafeRawCustomerproductholdingRawomapiVisibilityrulesModel {
    const rawVisibilityRulesModel = new CafeRawCustomerproductholdingRawomapiVisibilityrulesModel();
    if (rawVisibilityRules.conditionalvisibility) {
      rawVisibilityRulesModel.conditionalvisibility = rawVisibilityRules.conditionalvisibility;
    }
    return rawVisibilityRulesModel;
  }
}
