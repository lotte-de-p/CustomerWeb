import { cleanStylesFromDom, LogFactory, MapperInterface } from '@telenet/ng-lib-shared';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { capture, instance, mock, when } from 'ts-mockito';
import { MessageService, MessageType } from '@telenet/ng-lib-message';
import { OmapiQueryService } from './omapi-query.service';
import { OmapiQueryCallConfig } from '../models/omapi-query-call.model';
import { OmapiProductService, RawOmapiProductInterface } from '@telenet/ng-lib-omapi';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';

const spyOn = jest.spyOn;

class DummyMapper {
  toModel() {
    return 'mapped response 1';
  }
}

interface Product {
  product: SpecUrl;
}

interface SpecUrl {
  specurl: string;
}

describe('OmapiQueryService', () => {
  const log = LogFactory.createLogger();
  const urlToCallUrl = 'https://api.int.telenet.be/omapi-query/url-to-call';
  const productUrl = 'https://api.int.base.be/omapi/public/product/BOYO0015';
  const endpoint = '/url-to-call';
  const messageGroup = 'message-group';
  let omapiQueryService: OmapiQueryService;
  let omapiProductService: OmapiProductService;
  let configService: ConfigService;
  let messageService: MessageService;
  let backend: HttpTestingController;
  let mockedMapper: MapperInterface<Product, string>;
  let mapper: MapperInterface<Product, string>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OmapiQueryService,
        { provide: ConfigService, useFactory: () => instance(configService) },
        { provide: MessageService, useFactory: () => instance(messageService) },
        { provide: 'Window', useValue: {} },
      ],
      imports: [HttpClientTestingModule],
    });

    jest.spyOn(console, 'log').mockImplementation(jest.fn);
    jest.spyOn(console, 'error').mockImplementation(jest.fn);
    configService = mock(ConfigService);
    messageService = mock(MessageService);
    omapiQueryService = TestBed.inject(OmapiQueryService);
    omapiProductService = TestBed.inject(OmapiProductService);
    backend = TestBed.inject(HttpTestingController);
    mockedMapper = mock(DummyMapper);
    mapper = instance(mockedMapper);
    when(configService.getConfig(ConfigConstants.OMAPI_QUERY_URL)).thenReturn('https://api.int.telenet.be/omapi-query');
  });

  describe('doPost', () => {
    it('should do a post request to omapi query', waitForAsync(() => {
      const mockResponse = { status: 200, statusText: 'OK' };

      const omapiQueryConfig = new OmapiQueryCallConfig(messageGroup, endpoint, mapper);
      omapiQueryService.doPost(omapiQueryConfig).subscribe({
        next: (resp) => {
          log.log(resp);
        },
        error: (error: unknown) => {
          log.logError(error);
        },
      });

      const call = backend.expectOne(urlToCallUrl);
      call.flush(mockResponse);
      expect(call.request.url).toBe(urlToCallUrl);
    }));

    const mappedResponse = 'mapped response';
    it('should do a post request to omapi query and resolve specurls', waitForAsync(() => {
      const fakeResponse: Product = { product: { specurl: productUrl } };
      const omapiQueryConfig = new OmapiQueryCallConfig(messageGroup, endpoint, mapper);
      when(mockedMapper.toModel(fakeResponse)).thenReturn(mappedResponse);
      spyOn(omapiProductService, 'rawProductsFromEndpoints$').mockReturnValue(
        of([{ product: {} }] as RawOmapiProductInterface[])
      );
      omapiQueryService.doPost(omapiQueryConfig).subscribe((response) => {
        expect(response.toString()).toBe(mappedResponse);
      });

      const call = backend.expectOne(urlToCallUrl);
      call.flush(fakeResponse);
      expect(call.request.url).toBe(urlToCallUrl);
    }));

    it('should do a post request to omapi query and resolve specurls and add rawOmapi to the response', waitForAsync(() => {
      const fakeResponse: Product = { product: { specurl: productUrl } };
      const omapiQueryConfig = new OmapiQueryCallConfig(messageGroup, endpoint, mapper);
      when(mockedMapper.toModel(fakeResponse)).thenReturn(mappedResponse);
      spyOn(omapiProductService, 'rawProductsFromEndpoints$').mockReturnValue(
        of([{ product: { productid: 'BOYO0015' } }] as RawOmapiProductInterface[])
      );
      omapiQueryService.doPost(omapiQueryConfig).subscribe((response) => {
        expect(response.toString()).toBe(mappedResponse);
      });

      const call = backend.expectOne(urlToCallUrl);
      call.flush(fakeResponse);
      expect(call.request.url).toBe(urlToCallUrl);
    }));

    const badRequest = 'Bad Request';
    it('should call the endpoint and handle the error given a 400 status', () => {
      const mockErrorResponse = { status: 400, statusText: badRequest };

      const omapiQueryConfig = new OmapiQueryCallConfig(messageGroup, endpoint, mapper);
      omapiQueryService.doPost(omapiQueryConfig).subscribe({
        next: (resp) => {
          log.log(resp);
        },
        error: (error: unknown) => {
          log.logError(error);
        },
      });

      backend.expectOne(urlToCallUrl).flush({}, mockErrorResponse);

      const [errorMessage] = capture(messageService.addMessage).last();
      expect(errorMessage.type).toBe(MessageType.ERROR);
      expect(errorMessage.messageGroupName).toBe(messageGroup);
      expect(errorMessage.key).toBe('message-group.OMAPI-ERROR-ADDRESS-NOT-FOUND');
    });

    it('should call the endpoint and handle the error given a 500 status', () => {
      const mockErrorResponse = { status: 500, statusText: badRequest };

      const omapiQueryConfig = new OmapiQueryCallConfig(messageGroup, endpoint, mapper);
      omapiQueryService.doPost(omapiQueryConfig).subscribe({
        next: (resp) => {
          log.log(resp);
        },
        error: (error: unknown) => {
          log.logError(error);
        },
      });

      const call = backend.expectOne(urlToCallUrl);
      call.flush({}, mockErrorResponse);

      const [errorMessage] = capture(messageService.addMessage).last();
      expect(errorMessage.type).toBe(MessageType.ERROR);
      expect(errorMessage.messageGroupName).toBe(messageGroup);
      expect(errorMessage.key).toBe('omapi-query.500');
    });

    it('should call the endpoint and handle the error given a 403 status', () => {
      const mockErrorResponse = { status: 403, statusText: badRequest };

      const omapiQueryConfig = new OmapiQueryCallConfig(messageGroup, endpoint, mapper);
      omapiQueryService.doPost(omapiQueryConfig).subscribe({
        next: (resp) => {
          log.log(resp);
        },
        error: (error: unknown) => {
          log.logError(error);
        },
      });

      const call = backend.expectOne(urlToCallUrl);
      call.flush({}, mockErrorResponse);

      const [errorMessage] = capture(messageService.addMessage).last();
      expect(errorMessage.type).toBe(MessageType.ERROR);
      expect(errorMessage.messageGroupName).toBe(messageGroup);
      expect(errorMessage.key).toBe('omapi-query.403');
    });

    it('should call the endpoint and handle the error given a 403 status with error code', () => {
      const mockErrorResponse = { status: 403, statusText: badRequest };

      const omapiQueryConfig = new OmapiQueryCallConfig(messageGroup, endpoint, mapper);
      omapiQueryService.doPost(omapiQueryConfig).subscribe({
        next: (resp) => {
          log.log(resp);
        },
        error: (error: unknown) => {
          log.logError(error);
        },
      });

      const call = backend.expectOne(urlToCallUrl);
      call.flush({ code: 403 }, mockErrorResponse);

      const [errorMessage] = capture(messageService.addMessage).last();
      expect(errorMessage.type).toBe(MessageType.ERROR);
      expect(errorMessage.messageGroupName).toBe(messageGroup);
      expect(errorMessage.key).toBe('omapi-query.403-403');
    });
  });

  describe('doGet', () => {
    it('should do a get request to omapi query', waitForAsync(() => {
      const mockResponse = { status: 200, statusText: 'OK' };
      const omapiQueryConfig = new OmapiQueryCallConfig(messageGroup, endpoint, mapper);
      omapiQueryService.doGet(omapiQueryConfig).pipe(take(1)).subscribe();

      const call = backend.expectOne(urlToCallUrl);
      call.flush(mockResponse);
      expect(call.request.url).toBe(urlToCallUrl);
    }));

    it('should call the endpoint and handle the error given a 500 status', () => {
      const mockErrorResponse = { status: 500, statusText: 'Bad Request' };

      const omapiQueryConfig = new OmapiQueryCallConfig(messageGroup, endpoint, mapper);
      omapiQueryService.doGet(omapiQueryConfig).subscribe({
        next: (resp) => {
          log.log(resp);
        },
        error: (error: unknown) => {
          log.logError(error);
        },
      });

      const call = backend.expectOne(urlToCallUrl);
      call.flush({}, mockErrorResponse);

      const [errorMessage] = capture(messageService.addMessage).last();
      expect(errorMessage.type).toBe(MessageType.ERROR);
      expect(errorMessage.messageGroupName).toBe(messageGroup);
      expect(errorMessage.key).toBe('omapi-query.500');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
