import { TestBed } from '@angular/core/testing';
import { LeadCaptationInterface } from '../interfaces/lead-captation.interface';
import { LeadCaptationMapper } from './lead-captation.mapper';
import { RawLeadCaptationInterface } from '../interfaces/raw-lead-captation.interface';

describe('LeadCaptationMapper', () => {
  let leadCaptationMapper: LeadCaptationMapper;

  const successResponse: RawLeadCaptationInterface = {
    id: '1234',
  };

  const marketoSuccessResponse: RawLeadCaptationInterface = {
    success: true,
  };

  const errorResponse: RawLeadCaptationInterface = {
    id: undefined,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeadCaptationMapper, { provide: 'Window', useValue: {} }],
    });
    leadCaptationMapper = TestBed.inject(LeadCaptationMapper);
  });

  describe('toModel', () => {
    it('should  map lead captation with success', () => {
      const mappedResponse: LeadCaptationInterface = leadCaptationMapper.toModel(successResponse);
      expect(mappedResponse.success).toBeTruthy();
    });

    it('should  map Marketo lead captation with success', () => {
      const mappedResponse: LeadCaptationInterface = leadCaptationMapper.toModel(marketoSuccessResponse);
      expect(mappedResponse.success).toBeTruthy();
    });

    it('should  map lead captation with error', () => {
      const mappedResponse: LeadCaptationInterface = leadCaptationMapper.toModel(errorResponse);
      expect(mappedResponse.success).toBeFalsy();
    });
  });
});
