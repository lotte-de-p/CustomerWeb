import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ErrorReportService } from './error-report.service';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { UrlService } from '@telenet/ng-lib-page';
import { OcapiCallConfig } from '../models';
import { HttpTypesEnum } from '../enums';
import * as udl from 'udl';

describe('ErrorReportService', () => {
  let service: ErrorReportService;
  let dataLayerService: jest.Mocked<DataLayerService>;

  beforeEach(() => {
    const dataLayerServiceMock = {
      createEventInfo: jest.fn(),
      sendEvent: jest.fn(),
    };
    const urlServiceMock = {
      getRequestParamValue: jest.fn(),
    };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ErrorReportService,
        { provide: DataLayerService, useValue: dataLayerServiceMock },
        { provide: UrlService, useValue: urlServiceMock },
      ],
    });

    service = TestBed.inject(ErrorReportService);
    dataLayerService = TestBed.inject(DataLayerService) as jest.Mocked<DataLayerService>;
  });

  it('should send an event to analytics', () => {
    const ocapiCallConfig = new OcapiCallConfig('messageGroupName', '/endpoint', undefined);
    ocapiCallConfig.httpType = HttpTypesEnum.GET;
    dataLayerService.createEventInfo.mockReturnValue(new udl.EventInfo());

    const errorResponse = {
      errorDetails: [
        {
          errorDetailCode: 'ERROR_CODE',
          message: 'Error message',
        },
      ],
      cause: 'notknown',
      correlationId: '123',
    };

    const errorCode = 'ERROR_CODE';

    service.sendErrorEventToAnalytics(ocapiCallConfig, errorResponse, errorCode);

    const sendEventArg = dataLayerService.sendEvent.mock.calls[0][0];

    expect(dataLayerService.createEventInfo).toHaveBeenCalled();
    expect(dataLayerService.sendEvent).toHaveBeenCalled();

    expect(sendEventArg.eventInfo.getEventStatusMessage()).toBe('ERROR_CODE|ERROR_CODE|Error message');
    expect(sendEventArg.eventInfo.getEventStatus()).toBe('failed');

    expect(sendEventArg.attributes.itemName).toBe('messageGroupName');
    expect(sendEventArg.attributes.itemData).toBe('GET /endpoint');
    expect(sendEventArg.attributes.itemGroup).toBe('notknown');
    expect(sendEventArg.attributes.itemIdentifier).toBe('123');
  });
});
