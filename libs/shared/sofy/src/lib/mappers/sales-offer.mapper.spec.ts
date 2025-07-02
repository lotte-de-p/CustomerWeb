import { ProductModel, SalesOfferModel } from '../models';
import { ProductInterface, SalesOfferInterface } from '../interfaces';
import { ProductMapper, SalesOfferMapper } from '../mappers';
import { TestBed } from '@angular/core/testing';

const DESCRIPTION = 'The big bang theory';
describe('SalesOfferMapper', () => {
  let salesOfferMapper: SalesOfferMapper;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductMapper],
    }).compileComponents();
    salesOfferMapper = new SalesOfferMapper(TestBed.inject(ProductMapper));
  });
  describe('map', () => {
    it('should map values correctly given no products', function () {
      const rawSalesOffer: SalesOfferInterface = {
        products: [],
        standaloneOptions: [],
        ownedProducts: [],
      };
      const actual = salesOfferMapper.map(rawSalesOffer);
      expect(actual).toEqual({ ownedProducts: [], products: [], standaloneOptions: [] });
    });
    it('should map values correctly', () => {
      const rawSalesOffer: SalesOfferInterface = {
        products: [buildProduct('one+')],
        standaloneOptions: [buildProduct('klik')],
        ownedProducts: [buildProduct('wigo')],
      };
      const actual = salesOfferMapper.map(rawSalesOffer);
      expect(actual).toEqual({
        ownedProducts: [
          {
            correlationId: 'correlationId-wigo',
            costs: [],
            description: DESCRIPTION,
            installtypes: [],
            omapiId: 'wigo',
            options: [],
            price: 10,
            priceexclvat: 25,
            promos: [],
            specUrl: 'some specUrl for wigo',
          } as Partial<ProductModel>,
        ],
        products: [
          {
            correlationId: 'correlationId-one+',
            costs: [],
            description: DESCRIPTION,
            installtypes: [],
            omapiId: 'one+',
            options: [],
            price: 10,
            priceexclvat: 25,
            promos: [],
            specUrl: 'some specUrl for one+',
          } as Partial<ProductModel>,
        ],
        standaloneOptions: [
          {
            correlationId: 'correlationId-klik',
            costs: [],
            description: DESCRIPTION,
            installtypes: [],
            omapiId: 'klik',
            options: [],
            price: 10,
            priceexclvat: 25,
            promos: [],
            specUrl: 'some specUrl for klik',
          } as Partial<ProductModel>,
        ],
      } as SalesOfferModel);
    });
  });
});

const buildProduct = (omapiId: string): ProductInterface => ({
  omapiid: omapiId,
  correlationId: `correlationId-${omapiId}`,
  specUrl: `some specUrl for ${omapiId}`,
  description: DESCRIPTION,
  price: 10,
  priceexclvat: 25,
  options: [],
  promos: [],
  installtypes: [],
  costs: [],
  getMonthlyTotalCost: () => 45,
});
