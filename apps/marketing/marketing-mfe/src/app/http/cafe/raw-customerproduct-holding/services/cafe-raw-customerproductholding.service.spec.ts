import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { CafeRawCustomerproductholdingMapper } from '../mappers/cafe-raw-customerproductholding.mapper';
import { CafeRawCustomerproductholdingService } from './cafe-raw-customerproductholding.service';
import { CafeRawCustomerproductholdingModel } from '../models/cafe-raw-customerproductholding.model';
import { CafeRawCustomerproductholdingAddressModel } from '../models/cafe-raw-customerproductholding-address.model';
import { CafeRawCustomerproductholdingOptionModel } from '../models/cafe-raw-customerproductholding-option.model';
import { CafeRawCustomerproductholdingProductModel } from '../models/cafe-raw-customerproductholding-product.model';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { inject, TestBed } from '@angular/core/testing';
import { OcapiService } from '@telenet/ng-lib-ocapi';
import { of } from 'rxjs';
import { when } from 'jest-when';

const internetFeature = 'internet.feature.tsp';
const digitaalZenderPacketLabel = 'tv.feature.digital.interactive.package.digitaalzenderpakket';
const rateDescription = 'Telenet Digital TV';
const defaultSpecUrl = 'https://api.dvp.telenet.be/omapi/public/product/285';
const lineBasicLabel = 'telephony.line.basic';
const rateClassDescription = 'Telenet Internet';
const rateClassDescriptionEurope = 'Telenet FreePhone Europe';
const specUrl672 = 'https://api.dvp.telenet.be/omapi/public/product/672';
const adressId = '6cc7yy007q-9x3xae07dk';

describe('CafeRawCustomerproductholdingService', () => {
  let ocapiService: OcapiService;
  let configService: ConfigService;
  let responseMapper: CafeRawCustomerproductholdingMapper;

  const PROPERTY_URL = '/public/?p=customerproductholding';
  const BASE_URL = 'http://ocapi.test/ocapi';
  const OAUTH_URL = '/oauth/userdetails';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OcapiService,
        CafeRawCustomerproductholdingService,
        CafeRawCustomerproductholdingMapper,
        CookieService,
        { provide: 'Window', useValue: {} },
      ],
      imports: [HttpClientTestingModule],
    });

    ocapiService = TestBed.inject(OcapiService);
    configService = TestBed.inject(ConfigService);
    responseMapper = TestBed.inject(CafeRawCustomerproductholdingMapper);

    configService.getConfig = jest.fn();
    when(configService.getConfig).calledWith(ConfigConstants.OCAPI_URl).mockReturnValue(BASE_URL);
    when(configService.getConfig).calledWith(ConfigConstants.OPENID_CLIENT_ID).mockReturnValue('');
    responseMapper.toModel = jest.fn().mockReturnValue(getResponses());
  });

  it('should be created', inject(
    [CafeRawCustomerproductholdingService],
    (service: CafeRawCustomerproductholdingService) => {
      expect(service).toBeTruthy();
    }
  ));

  describe('getresponse', () => {
    it('should  return raw customerproductholding response', inject(
      [HttpTestingController, CafeRawCustomerproductholdingService],
      (httpMock: HttpTestingController, rawCustomerproductholdingService: CafeRawCustomerproductholdingService) => {
        rawCustomerproductholdingService.getRawCustomerProductHolding('test').subscribe((response) => {
          expect(response[0].address.postalcode).toBe('9340');
          expect(response[1].label).toBe('WIGOHOME');
          expect(response[2].products[2].options[1].label).toBe(internetFeature);

          expect(response[0].identifier).toBe('DTV2710555');
          expect(response[1].identifier).toBe('WIGOHOME_44375989');
          expect(response[2].identifier).toBe('IMTTK_43537707');
          expect(response[0].customerproductid).toBe('158495352');
          expect(response[0].accountnumber).toBe('72093824');
          expect(response[1].accountnumber).toBe('72093824');
          expect(response[2].accountnumber).toBe('72093824');
          expect(response[0].label).toBe(digitaalZenderPacketLabel);
          expect(response[1].label).toBe('WIGOHOME');
          expect(response[2].label).toBe('IMTTK');
          expect(response[0].rateclassid).toBe('44');
          expect(response[0].rateclassdescription).toBe(rateDescription);
          expect(response[0].specurl).toBe(defaultSpecUrl);
          expect(response[1].specurl).toBe('https://api.dvp.telenet.be/omapi/public/product/20046');
          expect(response[2].specurl).toBe('https://api.dvp.telenet.be/omapi/public/product/71');
          expect(response[1].products[0].identifier).toBe('am15380');
          expect(response[1].products[1].identifier).toBe('050658323');
          expect(response[1].products[2].identifier).toBe('DTV4048252');
          expect(response[2].products[0].identifier).toBe('DTV332063');
          expect(response[2].products[1].identifier).toBe('093296194');
          expect(response[2].products[2].identifier).toBe('u935524');
          expect(response[1].products[0].customerproductid).toBe('339322002');
          expect(response[1].products[1].customerproductid).toBe('339322016');
          expect(response[1].products[2].customerproductid).toBe('339321992');
          expect(response[2].products[0].customerproductid).toBe('50968122');
          expect(response[2].products[1].customerproductid).toBe('92264561');
          expect(response[2].products[2].customerproductid).toBe('289678661');
          expect(response[1].products[0].accountnumber).toBe('72093824');
          expect(response[1].products[1].accountnumber).toBe('72093824');
          expect(response[1].products[2].accountnumber).toBe('72093824');
          expect(response[2].products[0].accountnumber).toBe('72093824');
          expect(response[2].products[1].accountnumber).toBe('72093824');
          expect(response[2].products[2].accountnumber).toBe('72093824');
          expect(response[1].products[0].label).toBe('internet.line.fmc.wigohome');
          expect(response[1].products[1].label).toBe(lineBasicLabel);
          expect(response[1].products[2].label).toBe(digitaalZenderPacketLabel);
          expect(response[2].products[0].label).toBe(digitaalZenderPacketLabel);
          expect(response[2].products[1].label).toBe(lineBasicLabel);
          expect(response[2].products[2].label).toBe('internet.line.sun.smallpipe');
          expect(response[1].products[0].rateclassid).toBe('22');
          expect(response[1].products[1].rateclassid).toBe('51');
          expect(response[1].products[2].rateclassid).toBe('44');
          expect(response[2].products[0].rateclassid).toBe('44');
          expect(response[2].products[1].rateclassid).toBe('51');
          expect(response[2].products[2].rateclassid).toBe('22');
          expect(response[1].products[0].rateclassdescription).toBe(rateClassDescription);
          expect(response[1].products[1].rateclassdescription).toBe(rateClassDescriptionEurope);
          expect(response[1].products[2].rateclassdescription).toBe(rateDescription);
          expect(response[2].products[0].rateclassdescription).toBe(rateDescription);
          expect(response[2].products[1].rateclassdescription).toBe(rateClassDescriptionEurope);
          expect(response[2].products[2].rateclassdescription).toBe(rateClassDescription);
          expect(response[1].products[0].specurl).toBe('https://api.dvp.telenet.be/omapi/public/product/20799');
          expect(response[1].products[1].specurl).toBe(specUrl672);
          expect(response[1].products[2].specurl).toBe(defaultSpecUrl);
          expect(response[2].products[0].specurl).toBe(defaultSpecUrl);
          expect(response[2].products[1].specurl).toBe(specUrl672);
          expect(response[2].products[2].specurl).toBe('https://api.dvp.telenet.be/omapi/public/product/588');
          expect(response[1].products[1].options[0].specurl).toBe(
            'https://api.dvp.telenet.be/omapi/public/product/151'
          );
          expect(response[1].products[2].options[0].specurl).toBe(
            'https://api.dvp.telenet.be/omapi/public/product/585'
          );
          expect(response[2].products[0].options[0].specurl).toBe(
            'https://api.dvp.telenet.be/omapi/public/product/277'
          );
          expect(response[2].products[1].options[0].specurl).toBe(
            'https://api.dvp.telenet.be/omapi/public/product/150'
          );
          expect(response[2].products[2].options[0].specurl).toBe(
            'https://api.dvp.telenet.be/omapi/public/product/114'
          );
          expect(response[2].products[2].options[1].specurl).toBe(
            'https://api.dvp.telenet.be/omapi/public/product/301'
          );
          expect(response[1].products[1].options[0].label).toBe('telephony.linetype.bijkomendelijn');
          expect(response[1].products[2].options[0].label).toBe('tv.digitaltv.package.popcornpacks.popcorn');
          expect(response[2].products[0].options[0].label).toBe('tv.digitaltv.package.primepacks.primesportsfilmpack');
          expect(response[2].products[1].options[0].label).toBe('telephony.linetype.eerstelijn');
          expect(response[2].products[2].options[0].label).toBe('internet.feature.domein.be');
          expect(response[2].products[2].options[1].label).toBe(internetFeature);
          expect(response[0].address.street).toBe('Hazel');
          expect(response[1].address.street).toBe('Zeedijk');
          expect(response[2].address.street).toBe('Hazel');
          expect(response[0].address.postalcode).toBe('9340');
          expect(response[1].address.postalcode).toBe('8370');
          expect(response[2].address.postalcode).toBe('9340');
          expect(response[0].address.municipality).toBe('Lede');
          expect(response[1].address.municipality).toBe('Blankenberge');
          expect(response[2].address.municipality).toBe('Lede');
          expect(response[0].address.country).toBe('België');
          expect(response[1].address.country).toBe('België');
          expect(response[2].address.country).toBe('België');
          expect(response[0].address.housenr).toBe('63');
          expect(response[1].address.housenr).toBe('190');
          expect(response[2].address.housenr).toBe('63');
          expect(response[1].address.floor).toBe('3');
          expect(response[0].address.addressid).toBe(adressId);
          expect(response[1].address.addressid).toBe('6cc7yy007q-9w6brv0n6l');
          expect(response[2].address.addressid).toBe(adressId);
        });

        const reqUserDetails = httpMock.expectOne(BASE_URL + OAUTH_URL);
        expect(reqUserDetails.request.method).toEqual('GET');
        reqUserDetails.flush({ data: '' });

        const req = httpMock.expectOne(BASE_URL + PROPERTY_URL);
        expect(req.request.method).toEqual('GET');
        req.flush({ date: '' });

        httpMock.verify();
      }
    ));
  });

  describe('getRawCustomerProductHoldingAdaptor', () => {
    it('should call ocapiService doGet', inject(
      [CafeRawCustomerproductholdingService],
      (rawCustomerproductholdingService: CafeRawCustomerproductholdingService) => {
        ocapiService.doGet = jest.fn().mockReturnValue(of(getResponses()));
        rawCustomerproductholdingService
          .getRawCustomerProductHoldingAdaptor('cafe-sofy-sales-offer')
          .subscribe((_actual) => {
            expect(ocapiService.doGet).toHaveBeenCalledTimes(1);
          });
      }
    ));
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});

function getResponses() {
  const responses: CafeRawCustomerproductholdingModel[] = [];
  const responseOne = new CafeRawCustomerproductholdingModel();
  const responseTwo = new CafeRawCustomerproductholdingModel();
  const responseThree = new CafeRawCustomerproductholdingModel();

  responseOne.identifier = 'DTV2710555';
  responseOne.customerproductid = '158495352';
  responseOne.accountnumber = '72093824';
  responseOne.label = 'tv.feature.digital.interactive.package.digitaalzenderpakket';
  responseOne.rateclassid = '44';
  responseOne.rateclassdescription = rateDescription;
  responseOne.specurl = defaultSpecUrl;
  responseOne.products = [];
  responseOne.options = [];
  responseOne.address = getAddressForResponse('Hazel', '9340', 'Lede', 'België', '63', adressId);

  responseTwo.identifier = 'WIGOHOME_44375989';
  responseTwo.accountnumber = '72093824';
  responseTwo.label = 'WIGOHOME';
  responseTwo.specurl = 'https://api.dvp.telenet.be/omapi/public/product/20046';
  responseTwo.products = [];

  responseTwo.products.push(
    getProductForResponse(
      'am15380',
      '339322002',
      '72093824',
      'internet.line.fmc.wigohome',
      '22',
      rateClassDescription,
      'https://api.dvp.telenet.be/omapi/public/product/20799'
    )
  );
  responseTwo.products[0].products = [];
  responseTwo.products[0].options = [];

  responseTwo.products.push(
    getProductForResponse(
      '050658323',
      '339322016',
      '72093824',
      lineBasicLabel,
      '51',
      rateClassDescriptionEurope,
      specUrl672
    )
  );
  responseTwo.products[1].products = [];
  responseTwo.products[1].options = [];
  responseTwo.products[1].options.push(
    getOptionForResponse('https://api.dvp.telenet.be/omapi/public/product/151', 'telephony.linetype.bijkomendelijn')
  );

  responseTwo.products.push(
    getProductForResponse(
      'DTV4048252',
      '339321992',
      '72093824',
      digitaalZenderPacketLabel,
      '44',
      rateDescription,
      defaultSpecUrl
    )
  );
  responseTwo.products[2].products = [];
  responseTwo.products[2].options = [];
  responseTwo.products[2].options.push(
    getOptionForResponse(
      'https://api.dvp.telenet.be/omapi/public/product/585',
      'tv.digitaltv.package.popcornpacks.popcorn'
    )
  );
  responseTwo.options = [];
  responseTwo.address = getAddressForResponse(
    'Zeedijk',
    '8370',
    'Blankenberge',
    'België',
    '190',
    '6cc7yy007q-9w6brv0n6l'
  );
  responseTwo.address.floor = '3';
  responseTwo.rawOmapi = {
    product: {
      apps: [],
      category: [],
      characteristics: undefined,
      customercategories: [],
      externalProductCode: '',
      family: '',
      labelkey: '',
      localizedcontent: [],
      priceType: '',
      productid: '',
      producttype: 'BUNDLE',
      rates: [],
      salesofferingid: '',
      services: [],
      shortdescription: undefined,
      subcategory: undefined,
      unlimited: false,
      visibilityrules: undefined,
      visible: false,
      weight: 0,
    },
  };
  responseTwo.isProductTypeBundle = () => {
    return true;
  };

  responseThree.identifier = 'IMTTK_43537707';
  responseThree.accountnumber = '72093824';
  responseThree.label = 'IMTTK';
  responseThree.specurl = 'https://api.dvp.telenet.be/omapi/public/product/71';
  responseThree.products = [];

  responseThree.products.push(
    getProductForResponse(
      'DTV332063',
      '50968122',
      '72093824',
      digitaalZenderPacketLabel,
      '44',
      rateDescription,
      defaultSpecUrl
    )
  );
  responseThree.products[0].products = [];
  responseThree.products[0].options = [];
  responseThree.products[0].options.push(
    getOptionForResponse(
      'https://api.dvp.telenet.be/omapi/public/product/277',
      'tv.digitaltv.package.primepacks.primesportsfilmpack'
    )
  );

  responseThree.products.push(
    getProductForResponse(
      '093296194',
      '92264561',
      '72093824',
      lineBasicLabel,
      '51',
      rateClassDescriptionEurope,
      specUrl672
    )
  );
  responseThree.products[1].products = [];
  responseThree.products[1].options = [];
  responseThree.products[1].options.push(
    getOptionForResponse('https://api.dvp.telenet.be/omapi/public/product/150', 'telephony.linetype.eerstelijn')
  );

  responseThree.products.push(
    getProductForResponse(
      'u935524',
      '289678661',
      '72093824',
      'internet.line.sun.smallpipe',
      '22',
      rateClassDescription,
      'https://api.dvp.telenet.be/omapi/public/product/588'
    )
  );
  responseThree.products[2].products = [];
  responseThree.products[2].options = [];
  responseThree.products[2].options.push(
    getOptionForResponse('https://api.dvp.telenet.be/omapi/public/product/114', 'internet.feature.domein.be')
  );
  responseThree.products[2].options.push(
    getOptionForResponse('https://api.dvp.telenet.be/omapi/public/product/301', internetFeature)
  );
  responseThree.options = [];
  responseThree.address = getAddressForResponse('Hazel', '9340', 'Lede', 'België', '63', adressId);

  responses.push(responseOne, responseTwo, responseThree);
  return responses;
}

function getOptionForResponse(specurl: string, label: string) {
  const option = new CafeRawCustomerproductholdingOptionModel();
  option.specurl = specurl;
  option.label = label;
  return option;
}

function getProductForResponse(
  identifier: string,
  customerproductid: string,
  accountnumber: string,
  label: string,
  rateclassid: string,
  rateclassdescription: string,
  specurl: string
) {
  const product = new CafeRawCustomerproductholdingProductModel();
  product.identifier = identifier;
  product.customerproductid = customerproductid;
  product.accountnumber = accountnumber;
  product.label = label;
  product.rateclassid = rateclassid;
  product.rateclassdescription = rateclassdescription;
  product.specurl = specurl;
  return product;
}

function getAddressForResponse(
  street: string,
  postalcode: string,
  muncicipality: string,
  country: string,
  housenr: string,
  addressid: string
) {
  const address = new CafeRawCustomerproductholdingAddressModel();
  address.street = street;
  address.postalcode = postalcode;
  address.municipality = muncicipality;
  address.country = country;
  address.housenr = housenr;
  address.addressid = addressid;
  return address;
}
