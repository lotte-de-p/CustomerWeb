import * as udl from 'udl';
import { TestBed } from '@angular/core/testing';
import { DataLayerService } from '../../datalayer.service';
import { DataLayerAttributes } from '../../interfaces/data-layer-attributes';
import { AdobeAnalyticsDirective } from '../../util/data-layer-util/adobe-analytics.directive';
import { DatalayerEventNames } from '../../enums/datalayer-event-names.enum';

describe('DataLayerUtilDirective', () => {
  let dataLayerService: DataLayerService;
  const messageGroupName = 'return-devices';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataLayerService, { provide: 'Window', useValue: {} }],
    });
    dataLayerService = TestBed.inject(DataLayerService);
  });

  it('should create an instance', () => {
    const directive = new AdobeAnalyticsDirective(dataLayerService);
    expect(directive).toBeTruthy();
  });

  describe('pushToAnalytics', () => {
    it('should create event when link is clicked', () => {
      const directive = new AdobeAnalyticsDirective(dataLayerService);
      const eventInfo: udl.EventInfo = dataLayerService.createEventInfo('link clicked', 'click', [messageGroupName]);
      const attributes: DataLayerAttributes = {
        itemName: 'return label link',
      };

      jest.spyOn(dataLayerService, 'createEventInfo').mockReturnValue(eventInfo);
      jest.spyOn(dataLayerService, 'createCategory');
      jest.spyOn(dataLayerService, 'addEvent');

      directive.pushToAnalytics('return label link', DatalayerEventNames.LINK_CLICKED, messageGroupName);
      expect(dataLayerService.addEvent).toHaveBeenCalledWith(eventInfo, attributes, expect.anything());
    });
    it('should create event when button is clicked', () => {
      const directive = new AdobeAnalyticsDirective(dataLayerService);
      const eventInfo: udl.EventInfo = dataLayerService.createEventInfo('button clicked', 'button_clicked', [
        messageGroupName,
      ]);
      const attributes: DataLayerAttributes = {
        itemName: 'return label button',
      };

      jest.spyOn(dataLayerService, 'createEventInfo').mockReturnValue(eventInfo);
      jest.spyOn(dataLayerService, 'createCategory');
      jest.spyOn(dataLayerService, 'addEvent');

      directive.pushToAnalytics('return label button', DatalayerEventNames.BUTTON_CLICKED, messageGroupName);
      expect(dataLayerService.addEvent).toHaveBeenCalledWith(eventInfo, attributes, expect.anything());
    });
  });
});
