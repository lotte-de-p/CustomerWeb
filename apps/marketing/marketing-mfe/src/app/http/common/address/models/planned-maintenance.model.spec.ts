import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PlannedMaintenanceModel } from './planned-maintenance.model';
import { PlannedMaintenanceMapper } from '../mappers/planned-maintenance.mapper';

const mockSuccessResponse = require('../../../../../../../../../fixtures/http/common/planned-maintenance/planned-maintenance.json');

describe('PlannedMaintenanceModel', () => {
  let plannedMaintenanceMapper: PlannedMaintenanceMapper;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    plannedMaintenanceMapper = TestBed.inject(PlannedMaintenanceMapper);
  });

  describe('PlannedMaintenanceModel', () => {
    let plm: PlannedMaintenanceModel[];
    it('should populate mdoel with PLM data', () => {
      const today = new Date('12-12-2022 00:00:00');
      jest.useFakeTimers().setSystemTime(today);
      plm = plannedMaintenanceMapper.toModel(mockSuccessResponse);
      expect(plm[0].addressId).toBe('22');
      expect(plm[0].startDate).not.toBeNull();
      expect(plm[0].endDate).not.toBeNull();
      expect(plm[0].impact.length).toBe(2);
      expect(plm[0].impact[0].impactWindowStartDate).not.toBeNull();
      expect(plm[0].impact[0].impactWindowEndDate).not.toBeNull();
      expect(plm[0].impact[0].impactWindowNr).not.toBeNull();
      expect(plm[0].isCompleted).toBe(true);
      expect(plm[0].isInProgress).toBe(false);
      expect(plm[0].isPlanned).toBe(false);

      if (!plm[0].description) {
        fail();
      }

      expect(plm[0].description['en']).toBe(
        'From 13/08 to 24/08 we will be working on the network in your area. This improvement works may result in brief interruptions during 20:30 - 22:30.'
      );
      expect(plm[0].description['nl']).toBe(
        'Van 13/08– 24/08 werken we aan het netwerk bij jou in de buurt. Deze werken kunnen zorgen voor korte onderbrekingen. En dat tussen 20:30 - 22:30.'
      );
      expect(plm[0].description['fr']).toBe(
        'Nous améliorons le réseau de télédistribution dans votre quartier du 13/08– 24/08. Ces travaux occasionneront de courtes interruptions entre 20:30 - 22:30.'
      );
      expect(plm[0].today).not.toBeNull();
    });
  });
});
