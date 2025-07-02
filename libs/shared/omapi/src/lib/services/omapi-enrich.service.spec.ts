import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { when } from 'jest-when';
import { OmapiProductService } from './omapi-product.service';
import { OmapiEnrichService } from './omapi-enrich.service';
import { OmapiProductMapper } from '../mappers/omapi-product.mapper';
import { OmapiProductTestfactory } from '../models/omapi-product.testfactory';

const spyOn = jest.spyOn;

describe('OmapiEnrichService', () => {
  let omapiEnrichService: OmapiEnrichService,
    omapiProductService: OmapiProductService,
    omapiProductMapper: OmapiProductMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OmapiProductService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });

    omapiEnrichService = TestBed.inject(OmapiEnrichService);
    omapiProductService = TestBed.inject(OmapiProductService);
    omapiProductMapper = TestBed.inject(OmapiProductMapper);
  });

  describe('enrichResponseWithOmapiData', () => {
    it('should scan the response for specurl, retrieve the omapi product and add it to the response data', (done) => {
      const messageGroup = 'messageGroup';
      const response = { response: { specurl: '123', deeper: { moreDeep: { specurl: '789' } } } };

      const omapiProduct = OmapiProductTestfactory.build({
        characteristics: { constituents: [{ specurl: '456' }] },
      });
      const omapiProductTwo = OmapiProductTestfactory.build();
      const omapiProductConstituentOne = OmapiProductTestfactory.build();
      const omapiProductServiceMock = spyOn(omapiProductService, 'getProductByEndpoint');
      when(omapiProductServiceMock).calledWith(messageGroup, '123').mockReturnValue(of(omapiProduct));
      when(omapiProductServiceMock).calledWith(messageGroup, '456').mockReturnValue(of(omapiProductConstituentOne));
      when(omapiProductServiceMock).calledWith(messageGroup, '789').mockReturnValue(of(omapiProductTwo));
      when(omapiProductServiceMock).calledWith(messageGroup, '789').mockReturnValue(of(omapiProductTwo));

      omapiEnrichService.enrichResponseWithOmapiData(messageGroup, response).subscribe((actual) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(actual.response.productInfo).toBe(omapiProduct);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(actual.response.deeper.moreDeep.productInfo).toBe(omapiProductTwo);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(actual.response.productInfo.characteristics.constituents[0].productInfo).toBe(
          omapiProductConstituentOne
        );
        done();
      });
    });

    it('should scan the response for specurl, return response data if there is no omapi data', (done) => {
      const messageGroup = 'messageGroup';
      const response = { response: { someKey: 'someValue' } };

      omapiEnrichService.enrichResponseWithOmapiData(messageGroup, response).subscribe((actual) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(actual).toEqual(response);
        done();
      });
    });

    it('should not call the omapi endpoint when shopping basket contains a valid combo product from sofy', (done) => {
      const messageGroup = 'messageGroup';
      const response = { omapiid: '22792_46948', specurl: '123', productInfo: {} };
      const omapiProduct = OmapiProductTestfactory.build({ productId: '22792_46948', name: 'Fix2go Combo' });
      spyOn(omapiProductService, 'getProductByEndpoint');
      spyOn(omapiProductMapper, 'toModel').mockReturnValue(omapiProduct);
      omapiEnrichService.enrichResponseWithOmapiData(messageGroup, response).subscribe((actual) => {
        expect(omapiProductService.getProductByEndpoint).not.toHaveBeenCalled();
        expect(actual.productInfo).toEqual(omapiProduct);
        done();
      });
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
