import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PlannedMaintenanceModel } from '../models/planned-maintenance.model';
import { PlannedMaintenanceMapper } from './planned-maintenance.mapper';

const mockPLMResponse = require('../../../../../../../../../fixtures/http/common/planned-maintenance/planned-maintenance.json');
const mockPLMResponseAllStatus = require('../../../../../../../../../fixtures/http/common/planned-maintenance/planned-maintenance-address-line-all-status.json');
const mockPLMResponseRandomStatus = require('../../../../../../../../../fixtures/http/common/planned-maintenance/planned-maintenance-address-line-random.json');
const mockPLMResponseDatesGreaterThan7 = require('../../../../../../../../../fixtures/http/common/planned-maintenance/planned-maintenance-dates-greater-then-7-days.json');
const mockDate = '12-12-2022 00:00:00';

describe('PlannedMaintenanceMapper', () => {
  let plannedMaintenanceMapper: PlannedMaintenanceMapper;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    plannedMaintenanceMapper = TestBed.inject(PlannedMaintenanceMapper);
  });

  describe('toModel', () => {
    it('should MAP the PLM data', () => {
      const today = new Date(mockDate);
      jest.useFakeTimers().setSystemTime(today);
      const plm = plannedMaintenanceMapper.toModel(mockPLMResponse);
      expect(plm[0].addressId).toBe('22');
      expect(plm[0].startDate).not.toBeNull();
      expect(plm[0].endDate).not.toBeNull();
      expect(plm[0].impact).not.toBeNull();
      expect(plm[0].isCompleted).toBe(true);
      expect(plm[0].isInProgress).toBe(false);
      expect(plm[0].isPlanned).toBe(false);
      expect(plm[0].description && plm[0].description['en']).toBe(
        'From 13/08 to 24/08 we will be working on the network in your area. This improvement works may result in brief interruptions during 20:30 - 22:30.'
      );
      expect(plm[0].description && plm[0].description['nl']).toBe(
        'Van 13/08– 24/08 werken we aan het netwerk bij jou in de buurt. Deze werken kunnen zorgen voor korte onderbrekingen. En dat tussen 20:30 - 22:30.'
      );
      expect(plm[0].description && plm[0].description['fr']).toBe(
        'Nous améliorons le réseau de télédistribution dans votre quartier du 13/08– 24/08. Ces travaux occasionneront de courtes interruptions entre 20:30 - 22:30.'
      );
      expect(plm[0].today).not.toBeNull();
    });
    it('should load address lines with plm and add latest completed to top and end date <= 7 days', () => {
      const today = new Date(mockDate);
      jest.useFakeTimers().setSystemTime(today);
      const plm: PlannedMaintenanceModel[] = plannedMaintenanceMapper.toModel(mockPLMResponse);
      expect(plm[0].isCompleted).toBe(true);
      expect(plm[1].isCompleted).toBe(true);
      expect(plm[2].isCompleted).toBe(true);

      if (!plm[0].endDate || !plm[1].endDate || !plm[2].endDate) {
        fail();
      }

      const date1: Date = plm[0].endDate;
      const date2: Date = plm[1].endDate;
      const date3: Date = plm[2].endDate;
      expect(date1 >= date2).toBe(true);
      expect(date2 >= date3).toEqual(true);
      expect((today.getTime() - date1.getTime()) / (1000 * 3600 * 24)).toBeLessThanOrEqual(7);
      expect((today.getTime() - date2.getTime()) / (1000 * 3600 * 24)).toBeLessThanOrEqual(7);
      expect((today.getTime() - date3.getTime()) / (1000 * 3600 * 24)).toBeLessThanOrEqual(7);
    });
    it('should load address lines and sort order should be inprogress->planned<=7->completed<=7', () => {
      const today = new Date(mockDate);
      jest.useFakeTimers().setSystemTime(today);
      const plm: PlannedMaintenanceModel[] = plannedMaintenanceMapper.toModel(mockPLMResponseAllStatus);
      expect(plm[0].isInProgress).toBe(true);
      expect(plm[0].isPlanned).toBe(false);
      expect(plm[0].isCompleted).toBe(false);

      expect(plm[1].isInProgress).toBe(true);
      expect(plm[1].isPlanned).toBe(false);
      expect(plm[1].isCompleted).toBe(false);

      expect(plm[2].isInProgress).toBe(false);
      expect(plm[2].isPlanned).toBe(true);
      expect(plm[2].isCompleted).toBe(false);

      expect(plm[3].isInProgress).toBe(false);
      expect(plm[3].isPlanned).toBe(true);
      expect(plm[3].isCompleted).toBe(false);

      expect(plm[4].isInProgress).toBe(false);
      expect(plm[4].isPlanned).toBe(false);
      expect(plm[4].isCompleted).toBe(true);

      expect(plm[5].isInProgress).toBe(false);
      expect(plm[5].isPlanned).toBe(false);
      expect(plm[5].isCompleted).toBe(true);

      expect(plm[2].isInProgress).toBe(false);
      expect(plm[2].isPlanned).toBe(true);
      expect(plm[2].isCompleted).toBe(false);

      if (!plm[4].endDate || !plm[2].startDate) {
        fail();
      }
      const completedDate1: Date = plm[4].endDate;
      expect((today.getTime() - completedDate1.getTime()) / (1000 * 3600 * 24)).toBeLessThanOrEqual(7);

      const plannedDate1: Date = plm[2].startDate;
      expect((plannedDate1.getTime() - today.getTime()) / (1000 * 3600 * 24)).toBeLessThanOrEqual(7);
    });

    it('should load address lines with planned maintenance details and sort by status and add latest to top', () => {
      const today = new Date('12-12-2022 00:30:00');
      jest.useFakeTimers().setSystemTime(today);
      const plm: PlannedMaintenanceModel[] = plannedMaintenanceMapper.toModel(mockPLMResponseDatesGreaterThan7);
      expect(plm[0].isInProgress).toBe(true);
      expect(plm[1].isInProgress).toBe(true);
      expect(plm[2].isPlanned).toBe(true);
      expect(plm[3].isCompleted).toBe(true);

      if (!plm[3].endDate || !plm[2].startDate) {
        fail();
      }

      const completedDate1: Date = plm[3].endDate;
      expect((today.getTime() - completedDate1.getTime()) / (1000 * 3600 * 24)).toBeLessThanOrEqual(7);

      const plannedDate1: Date = plm[2].startDate;
      expect((plannedDate1.getTime() - today.getTime()) / (1000 * 3600 * 24)).toBeLessThanOrEqual(7);
    });
    it('should load address lines with planned maintenance details and sort by status and add latest to top', () => {
      const today = new Date(mockDate);
      jest.useFakeTimers().setSystemTime(today);
      const plm: PlannedMaintenanceModel[] = plannedMaintenanceMapper.toModel(mockPLMResponseRandomStatus);
      expect(plm[0].isPlanned).toBe(true);
      expect(plm[1].isPlanned).toBe(true);
      expect(plm[2].isPlanned).toBe(true);
      expect(plm[3].isCompleted).toBe(true);
      expect(plm[4].isCompleted).toBe(true);
      expect(plm[5].isCompleted).toBe(true);

      if (!plm[3].endDate || !plm[4].endDate || !plm[0].startDate || !plm[1].startDate) {
        fail();
      }

      const completedDate1: Date = plm[3].endDate;
      const completedDate2: Date = plm[4].endDate;
      expect(completedDate1 >= completedDate2).toBe(true);
      expect((today.getTime() - completedDate1.getTime()) / (1000 * 3600 * 24)).toBeLessThanOrEqual(7);
      expect((today.getTime() - completedDate2.getTime()) / (1000 * 3600 * 24)).toBeLessThanOrEqual(7);

      const plannedDate1: Date = plm[0].startDate;
      const plannedDate2: Date = plm[1].startDate;
      expect(plannedDate1 <= plannedDate2).toBe(true);
      expect((plannedDate1.getTime() - today.getTime()) / (1000 * 3600 * 24)).toBeLessThanOrEqual(7);
      expect((plannedDate2.getTime() - today.getTime()) / (1000 * 3600 * 24)).toBeLessThanOrEqual(7);
    });
  });
});
