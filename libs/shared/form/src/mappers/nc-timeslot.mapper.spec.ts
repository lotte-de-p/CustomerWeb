import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NCTimeSlotMapper } from './nc-timeslot.mapper';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { TimeslotMomentEnum } from '../enums';
import { NCTimeSlotList } from '../models';

const mockTimeslotsSalesJson = require('./data/nc-timeslots.json');

describe('NCTimeSlotMapper', () => {
  let nCTimeSlotMapper: NCTimeSlotMapper;
  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    nCTimeSlotMapper = TestBed.inject(NCTimeSlotMapper);
  });

  describe('toModel', () => {
    let nCTimeSlotList: NCTimeSlotList;

    beforeEach(() => {
      nCTimeSlotList = Object.assign({}, nCTimeSlotMapper.toModel(mockTimeslotsSalesJson));
      nCTimeSlotList.availabilities[0].timeSlots[0].productInfo = {
        externalProductCode: 'APPT0000',
      } as OmapiProduct;
    });

    it('should map timeslots', () => {
      expect(nCTimeSlotList.availabilities[0].date.toDateString()).toBe('Thu Aug 20 2020');
      expect(nCTimeSlotList.availabilities[0].timeSlots[0].code).toEqual(TimeslotMomentEnum.MORNING);
      expect(nCTimeSlotList.availabilities[0].timeSlots[0].availabilityId).toEqual('9158093522413781595');
      expect(nCTimeSlotList.availabilities[0].timeSlots[0].productInfo?.externalProductCode).toEqual('APPT0000');
      expect(nCTimeSlotList.availabilities[0].timeSlots[0].specUrl).toEqual(
        'https://api.int.telenet.be/omapi/public/product/APPT0000'
      );
    });
  });
});
