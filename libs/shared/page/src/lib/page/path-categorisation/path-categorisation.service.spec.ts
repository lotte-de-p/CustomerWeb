import { TestBed } from '@angular/core/testing';
import { PathCategorisationService } from './path-categorisation.service';
import { CustomerCategoryEnum } from '../enums/customer-category.enum';
import { CustomerBrandEnum } from '../enums/customer-brand.enum';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

describe('pathCategorisationService', () => {
  let pathCategorisationService: PathCategorisationService;

  const setCustomerCategoryInWindow = (category: string) => {
    return {
      TelenetGroup: {
        pathCategorisation: {
          customerCategory: category,
        },
      },
    };
  };

  const setLabelSuffixInWindow = (suffix: string) => {
    return {
      TelenetGroup: {
        pathCategorisation: {
          labelSuffix: suffix,
        },
      },
    };
  };

  const setCustomerBrandInWindow = (brand: string) => {
    return {
      TelenetGroup: {
        pathCategorisation: {
          customerBrand: brand,
        },
      },
    };
  };

  const setCustomerBrandAndCategoryInWindow = (brand: string, category: string) => {
    return {
      TelenetGroup: {
        pathCategorisation: {
          customerBrand: brand,
          customerCategory: category,
        },
      },
    };
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PathCategorisationService, { provide: 'Window', useValue: {} }],
    });
  });

  describe('getValueFromWindowByProperty', () => {
    it('should return customerCategory from window object', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerCategoryInWindow(CustomerCategoryEnum.RESIDENTIAL),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.getValueFromWindowByProperty('customerCategory');
      expect(actual).toBe('RESIDENTIAL');
    });

    it('should return labelSuffix from window object', () => {
      TestBed.overrideProvider('Window', {
        useValue: setLabelSuffixInWindow('tfb'),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.getValueFromWindowByProperty('labelSuffix');
      expect(actual).toBe('tfb');
    });
  });

  describe('getCustomerCategory', () => {
    it('should return customerCategory from window object', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerCategoryInWindow(CustomerCategoryEnum.RESIDENTIAL),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.getCustomerCategory();
      expect(actual).toBe('RESIDENTIAL');
    });
  });

  describe('getLabelSuffix', () => {
    it('should return labelSuffix from window object', () => {
      TestBed.overrideProvider('Window', {
        useValue: setLabelSuffixInWindow('tfb'),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.getLabelSuffix();
      expect(actual).toBe('tfb');
    });
  });

  describe('getCustomerBrand', () => {
    it('should return customer brand from window object', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandInWindow('BASE'),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.getCustomerBrand();
      expect(actual).toBe('BASE');
    });
  });

  describe('isCustomerOfType', () => {
    it('should return true, for Residential customer', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerCategoryInWindow(CustomerCategoryEnum.RESIDENTIAL),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isCustomerOfType(CustomerCategoryEnum.RESIDENTIAL);
      expect(actual).toBe(true);
    });

    it('should return false, if it is not a Residential customer', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerCategoryInWindow(CustomerCategoryEnum.BUSINESS),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isCustomerOfType(CustomerCategoryEnum.RESIDENTIAL);
      expect(actual).toBe(false);
    });

    it('should return true, for Business customer', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerCategoryInWindow(CustomerCategoryEnum.BUSINESS),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isCustomerOfType(CustomerCategoryEnum.BUSINESS);
      expect(actual).toBe(true);
    });

    it('should return false, if it is not Business customer', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerCategoryInWindow(CustomerCategoryEnum.FLEET_PORTAL),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isCustomerOfType(CustomerCategoryEnum.BUSINESS);
      expect(actual).toBe(false);
    });

    it('should return true, for Fleet Manager', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerCategoryInWindow(CustomerCategoryEnum.FLEET_PORTAL),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isCustomerOfType(CustomerCategoryEnum.FLEET_PORTAL);
      expect(actual).toBe(true);
    });

    it('should return false, if it is not Fleet Manager', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerCategoryInWindow(CustomerCategoryEnum.RESIDENTIAL),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isCustomerOfType(CustomerCategoryEnum.FLEET_PORTAL);
      expect(actual).toBe(false);
    });
  });

  describe('isCustomerOfBrandTypes', () => {
    it('should return true if customer brand type contains based on customer brand BASE from window object', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandInWindow('BASE'),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isCustomerOfBrandTypes([CustomerBrandEnum.BRAND_BASE]);
      expect(actual).toBe(true);
    });

    it('should return false if customer brand type not contains based on customer brand BASE from window object', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandInWindow('BASE'),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isCustomerOfBrandTypes([CustomerBrandEnum.BRAND_TELENET]);
      expect(actual).toBe(false);
    });

    it('should return true if customer brand type contains based on customer brand TELENET from window object', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandInWindow('TELENET'),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isCustomerOfBrandTypes([CustomerBrandEnum.BRAND_TELENET]);
      expect(actual).toBe(true);
    });

    it('should return false if customer brand type not contains based on customer brand TELENET from window object', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandInWindow('TELENET'),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isCustomerOfBrandTypes([CustomerBrandEnum.BRAND_BASE]);
      expect(actual).toBe(false);
    });

    it('should return true if customer multiple brand types contains based on customer brand BASE from window object', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandInWindow('BASE'),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isCustomerOfBrandTypes([
        CustomerBrandEnum.BRAND_TELENET,
        CustomerBrandEnum.BRAND_BASE,
      ]);
      expect(actual).toBe(true);
    });

    it('should return false if customer empty brand types contains based on customer brand BASE from window object', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandInWindow('BASE'),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isCustomerOfBrandTypes([]);
      expect(actual).toBe(false);
    });
  });

  describe('isCustomerOfBrand', () => {
    it('should return true, for a base customer', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandInWindow(CustomerBrandEnum.BRAND_BASE),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isCustomerOfBrand(CustomerBrandEnum.BRAND_BASE);
      expect(actual).toBe(true);
    });

    it('should return false, if it is not a base customer', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandInWindow(CustomerBrandEnum.BRAND_TELENET),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isCustomerOfBrand(CustomerBrandEnum.BRAND_BASE);
      expect(actual).toBe(false);
    });

    it('should return true, for a telenet customer', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandInWindow(CustomerBrandEnum.BRAND_TELENET),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isCustomerOfBrand(CustomerBrandEnum.BRAND_TELENET);
      expect(actual).toBe(true);
    });

    it('should return false, if it is not a telenet customer', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandInWindow(CustomerBrandEnum.BRAND_BASE),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isCustomerOfBrand(CustomerBrandEnum.BRAND_TELENET);
      expect(actual).toBe(false);
    });
  });

  describe('isBrandBaseAndCategoryResidential', () => {
    it('should return true if brand is base and category is residential portal', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandAndCategoryInWindow(CustomerBrandEnum.BRAND_BASE, CustomerCategoryEnum.RESIDENTIAL),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isBrandBaseAndCategoryResidential();
      expect(actual).toBe(true);
    });
    it('should return false if brand is not base and category is not residential portal', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandAndCategoryInWindow(CustomerBrandEnum.BRAND_TELENET, CustomerCategoryEnum.BUSINESS),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isBrandBaseAndCategoryResidential();
      expect(actual).toBe(false);
    });
  });

  describe('isBrandBaseAndCategoryBusiness', () => {
    it('should return true if brand is base and category is business portal', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandAndCategoryInWindow(CustomerBrandEnum.BRAND_BASE, CustomerCategoryEnum.BUSINESS),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isBrandBaseAndCategoryBusiness();
      expect(actual).toBe(true);
    });
    it('should return false if brand is not base and category is not business portal', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandAndCategoryInWindow(
          CustomerBrandEnum.BRAND_TELENET,
          CustomerCategoryEnum.RESIDENTIAL
        ),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isBrandBaseAndCategoryBusiness();
      expect(actual).toBe(false);
    });
  });

  describe('isBrandTelenetAndCategoryResidential', () => {
    it('should return true if brand is telenet and category is residential portal', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandAndCategoryInWindow(
          CustomerBrandEnum.BRAND_TELENET,
          CustomerCategoryEnum.RESIDENTIAL
        ),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isBrandTelenetAndCategoryResidential();
      expect(actual).toBe(true);
    });
    it('should return false if brand is not base and category is not business portal', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandAndCategoryInWindow(CustomerBrandEnum.BRAND_BASE, CustomerCategoryEnum.BUSINESS),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isBrandTelenetAndCategoryResidential();
      expect(actual).toBe(false);
    });
  });

  describe('isBrandTelenetAndCategoryFleetPortal', () => {
    it('should return true if brand is telenet and category is fleet portal', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandAndCategoryInWindow(
          CustomerBrandEnum.BRAND_TELENET,
          CustomerCategoryEnum.FLEET_PORTAL
        ),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isBrandTelenetAndCategoryFleetPortal();
      expect(actual).toBe(true);
    });
    it('should return false if brand is not telenet and category is not fleet portal', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandAndCategoryInWindow(CustomerBrandEnum.BRAND_BASE, CustomerCategoryEnum.RESIDENTIAL),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isBrandTelenetAndCategoryFleetPortal();
      expect(actual).toBe(false);
    });
  });

  describe('isBrandTelenetAndCategoryResidentialOrFleet', () => {
    it('should return true if brand is telenet and category is residential portal', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandAndCategoryInWindow(
          CustomerBrandEnum.BRAND_TELENET,
          CustomerCategoryEnum.RESIDENTIAL
        ),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isBrandTelenetAndCategoryResidentialOrFleet();
      expect(actual).toBe(true);
    });
    it('should return true if brand is telenet and category is fleet portal', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandAndCategoryInWindow(
          CustomerBrandEnum.BRAND_TELENET,
          CustomerCategoryEnum.FLEET_PORTAL
        ),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isBrandTelenetAndCategoryResidentialOrFleet();
      expect(actual).toBe(true);
    });
    it('should return false if brand is base and category is business portal', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandAndCategoryInWindow(CustomerBrandEnum.BRAND_BASE, CustomerCategoryEnum.BUSINESS),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isBrandTelenetAndCategoryResidentialOrFleet();
      expect(actual).toBe(false);
    });
    it('should return false if brand is base and category is residential portal', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandAndCategoryInWindow(CustomerBrandEnum.BRAND_BASE, CustomerCategoryEnum.RESIDENTIAL),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isBrandTelenetAndCategoryResidentialOrFleet();
      expect(actual).toBe(false);
    });
  });

  describe('isBrandBaseAndCategoryResidentialOrBusiness', () => {
    it('should return false if brand is telenet and category is residential portal', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandAndCategoryInWindow(
          CustomerBrandEnum.BRAND_TELENET,
          CustomerCategoryEnum.RESIDENTIAL
        ),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isBrandBaseAndCategoryResidentialOrBusiness();
      expect(actual).toBe(false);
    });
    it('should return false if brand is telenet and category is fleet portal', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandAndCategoryInWindow(
          CustomerBrandEnum.BRAND_TELENET,
          CustomerCategoryEnum.FLEET_PORTAL
        ),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isBrandBaseAndCategoryResidentialOrBusiness();
      expect(actual).toBe(false);
    });
    it('should return false if brand is base and category is business portal', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandAndCategoryInWindow(CustomerBrandEnum.BRAND_BASE, CustomerCategoryEnum.BUSINESS),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isBrandBaseAndCategoryResidentialOrBusiness();
      expect(actual).toBe(true);
    });
    it('should return false if brand is base and category is residential portal', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandAndCategoryInWindow(CustomerBrandEnum.BRAND_BASE, CustomerCategoryEnum.RESIDENTIAL),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isBrandBaseAndCategoryResidentialOrBusiness();
      expect(actual).toBe(true);
    });
  });

  describe('isBrandTelenetAndCategoryBusiness', () => {
    it('should return true if brand is telenet and category is business portal', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandAndCategoryInWindow(CustomerBrandEnum.BRAND_TELENET, CustomerCategoryEnum.BUSINESS),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isBrandTelenetAndCategoryBusiness();
      expect(actual).toBe(true);
    });
    it('should return false if brand is not telenet and category is not business portal', () => {
      TestBed.overrideProvider('Window', {
        useValue: setCustomerBrandAndCategoryInWindow(CustomerBrandEnum.BRAND_BASE, CustomerCategoryEnum.RESIDENTIAL),
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.isBrandBaseAndCategoryBusiness();
      expect(actual).toBe(false);
    });
  });

  describe('getBrandPostfix', () => {
    it('should return nothing if a suffix is not present on window', () => {
      TestBed.overrideProvider('Window', {
        useValue: {
          TelenetGroup: {
            pathCategorisation: {
              brandLabelSuffix: '',
            },
          },
        },
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.getBrandPostfix();
      expect(actual).toBe('');
    });

    it('should return the brand if a suffix is present on window', () => {
      TestBed.overrideProvider('Window', {
        useValue: {
          TelenetGroup: {
            pathCategorisation: {
              brandLabelSuffix: 'base',
            },
          },
        },
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.getBrandPostfix();
      expect(actual).toBe('.base');
    });
  });

  describe('getCategoryPostfix', () => {
    it('should return nothing if a suffix is not present on window', () => {
      TestBed.overrideProvider('Window', {
        useValue: {
          TelenetGroup: {
            pathCategorisation: {
              categoryLabelSuffix: '',
            },
          },
        },
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.getCategoryPostfix();
      expect(actual).toBe('');
    });

    it('should return the category if a suffix is present on window', () => {
      TestBed.overrideProvider('Window', {
        useValue: {
          TelenetGroup: {
            pathCategorisation: {
              categoryLabelSuffix: 'business',
            },
          },
        },
      });
      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.getCategoryPostfix();
      expect(actual).toBe('.business');
    });

    it('should return tfb if the url contains business', () => {
      TestBed.overrideProvider('Window', {
        useValue: {
          TelenetGroup: {
            pathCategorisation: {
              categoryLabelSuffix: '',
            },
          },
        },
      });

      Object.defineProperty(window, 'location', {
        value: { pathname: '/business/mocked-path' },
        writable: true,
      });

      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.getCategoryPostfix();
      expect(actual).toBe('.tfb');
    });

    it('should return the category if a suffix is present on window and url includes business', () => {
      TestBed.overrideProvider('Window', {
        useValue: {
          TelenetGroup: {
            pathCategorisation: {
              categoryLabelSuffix: 'business',
            },
          },
        },
      });

      Object.defineProperty(window, 'location', {
        value: { pathname: '/business/other-path' },
        writable: true,
      });

      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.getCategoryPostfix();
      expect(actual).toBe('.business');
    });
  });

  describe('getPostfixVariables', () => {
    it('should return an object with the 3 different suffix types that can be used for a label', () => {
      TestBed.overrideProvider('Window', {
        useValue: {
          TelenetGroup: {
            pathCategorisation: {
              brandLabelSuffix: 'base',
              categoryLabelSuffix: 'business',
            },
          },
        },
      });

      Object.defineProperty(window, 'location', {
        value: { pathname: '/business/other-mocked-path' },
        writable: true,
      });

      pathCategorisationService = TestBed.inject(PathCategorisationService);
      const actual = pathCategorisationService.getPostfixVariables();
      expect(actual).toEqual({
        BRAND_POSTFIX: '.base',
        CATEGORY_POSTFIX: '.business',
        BRAND_CATEGORY_POSTFIX: '.base.business',
      });
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
