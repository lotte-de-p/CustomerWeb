import { TestBed } from '@angular/core/testing';
import { FiberStatusMapper } from './fiber-status.mapper';
import { FiberStatusEnum } from '../models/fiber-status.enum';

const mockFiberEligibilityResponse = require('../../data/fiber-eligibility.json');

describe('FiberStatusMapper', () => {
  let fiberStatusMapper: FiberStatusMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FiberStatusMapper, { provide: 'Window', useValue: {} }],
    });
    fiberStatusMapper = TestBed.inject(FiberStatusMapper);
  });

  describe('toModel', () => {
    it('should  map fiber status', () => {
      const fiberStatus = fiberStatusMapper.toModel(mockFiberEligibilityResponse);

      expect(fiberStatus).toEqual(FiberStatusEnum.READY);
    });
  });
});
