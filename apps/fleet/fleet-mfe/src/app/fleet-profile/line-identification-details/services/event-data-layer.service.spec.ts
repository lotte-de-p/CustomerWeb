import { TestBed } from '@angular/core/testing';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import * as udl from 'udl';
import { Category, EventInfo } from 'udl';
import { FormControl, FormGroup } from '@angular/forms';
import { EventDataLayerService } from './event-data-layer.service';
import { LineIdentificationDetailsDatalayerConstants } from '../constants/line-identification-details-datalayer.constants';
import { expect, jest } from '@jest/globals';
import { windowFactory } from '@telenet/ng-lib-page';

describe('EventDataLayerService', () => {
  let eventDataLayerService: EventDataLayerService;
  let dataLayerService: DataLayerService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: windowFactory() }],
    });
    eventDataLayerService = TestBed.inject(EventDataLayerService);
    dataLayerService = TestBed.inject(DataLayerService);
  });

  describe('addEventToDataLayer', () => {
    let category: udl.Category;
    let eventInfo: udl.EventInfo;
    let form: FormGroup;
    beforeEach(function () {
      category = new Category();
      eventInfo = new EventInfo();
      form = new FormGroup({
        description: new FormControl('test description'),
        name: new FormControl('test name'),
      });
      jest.spyOn(dataLayerService, 'createCategory').mockReturnValue(category);
      jest.spyOn(dataLayerService, 'createEventInfo').mockReturnValue(eventInfo);
      jest.spyOn(dataLayerService, 'sendEvent');
    });
    it('should add all dirty controls to data layer events', () => {
      form.controls['description'].markAsDirty();
      form.controls['name'].markAsDirty();

      eventDataLayerService.addEventToDataLayer(form);

      const data = {
        itemName: LineIdentificationDetailsDatalayerConstants.EVENT_ATTRIBUTE_ITEM_NAME,
        itemData: 'description,name',
      };
      expect(dataLayerService.sendEvent).toHaveBeenCalledWith({ eventInfo, attributes: data, category });
    });

    it('should add only dirty controls to data layer events', () => {
      const expectedData = {
        itemName: LineIdentificationDetailsDatalayerConstants.EVENT_ATTRIBUTE_ITEM_NAME,
        itemData: 'description',
      };
      form.controls['description'].markAsDirty();

      eventDataLayerService.addEventToDataLayer(form);

      expect(dataLayerService.sendEvent).toHaveBeenCalledWith({ eventInfo, attributes: expectedData, category });
    });
  });
});
