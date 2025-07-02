import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SimInformationComponent } from './sim-information.component';
import { SimDetailsModel } from '../../models/sim-details.model';
import { expect, jest } from '@jest/globals';
import { of } from 'rxjs';
import { SimDetailsService } from '../../../../shared/common/services/sim-details/sim-details.service';

describe('SimInformationComponent', (): void => {
  let component: SimInformationComponent;
  let fixture: ComponentFixture<SimInformationComponent>;
  let simDetailsService: SimDetailsService;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [SimDetailsService, { provide: 'Window', useValue: {} }],
      imports: [SimInformationComponent, HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    });
    simDetailsService = TestBed.inject(SimDetailsService);
  });

  beforeEach((): void => {
    fixture = TestBed.createComponent(SimInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', (): void => {
    it('should get sim details information ', (): void => {
      const simDetails: SimDetailsModel = getSimDetailsModel();
      jest.spyOn(simDetailsService, 'getSimDetailsByMsisdn').mockReturnValue(of([simDetails]));
      jest.spyOn(component.simDetailsStatus, 'emit');
      component.msisdn = '0945567832';

      component.ngOnInit();

      component.simDetailsModel$.subscribe((simDetailsModel: SimDetailsModel) =>
        expect(simDetailsModel).toBe(simDetails)
      );
      expect(component.simDetailsStatus.emit).toHaveBeenCalledWith(simDetails.status);
    });
    it('should not get sim details information if no msisdn is provided', () => {
      jest.spyOn(simDetailsService, 'getSimDetailsByMsisdn');
      jest.spyOn(component.simDetailsStatus, 'emit');

      component.ngOnInit();

      expect(component.simDetailsModel$).toBeUndefined();
      expect(simDetailsService.getSimDetailsByMsisdn).not.toHaveBeenCalled();
      expect(component.simDetailsStatus.emit).not.toHaveBeenCalled();
    });

    describe('getSimTypeLabelKey', (): void => {
      it('should return label key for sim type eSim', (): void => {
        const simDetails: SimDetailsModel = getSimDetailsModel();
        simDetails.simType = 'E_SIM';
        jest.spyOn(simDetailsService, 'getSimDetailsByMsisdn').mockReturnValue(of([simDetails]));
        jest.spyOn(component.simDetailsStatus, 'emit');
        component.msisdn = '0945567832';

        component.ngOnInit();
        component.simDetailsModel$.subscribe((simDetailsModel: SimDetailsModel) =>
          expect(simDetailsModel).toBe(simDetails)
        );
        expect(component.simTypeLabelKey).toEqual('ng.line-identification-details.e-sim.lbl');
      });

      it('should return label key for sim type PhysicalSim', (): void => {
        const simDetails: SimDetailsModel = getSimDetailsModel();
        simDetails.simType = 'PHYSICAL_SIM';
        jest.spyOn(simDetailsService, 'getSimDetailsByMsisdn').mockReturnValue(of([simDetails]));
        jest.spyOn(component.simDetailsStatus, 'emit');
        component.msisdn = '0945567832';

        component.ngOnInit();

        component.simDetailsModel$.subscribe((simDetailsModel: SimDetailsModel) =>
          expect(simDetailsModel).toBe(simDetails)
        );
        expect(component.simTypeLabelKey).toEqual('ng.line-identification-details.physical-sim.lbl');
      });

      it('should return label key for sim type even if no underscore present', (): void => {
        const simDetails: SimDetailsModel = getSimDetailsModel();
        simDetails.simType = 'SIM';
        jest.spyOn(simDetailsService, 'getSimDetailsByMsisdn').mockReturnValue(of([simDetails]));
        jest.spyOn(component.simDetailsStatus, 'emit');
        component.msisdn = '0945567832';

        component.ngOnInit();

        component.simDetailsModel$.subscribe((simDetailsModel: SimDetailsModel) =>
          expect(simDetailsModel).toBe(simDetails)
        );
        expect(component.simTypeLabelKey).toEqual('ng.line-identification-details.sim.lbl');
      });

      it('should return label key for sim type even if no underscore present', (): void => {
        const simDetails: SimDetailsModel = getSimDetailsModel();
        jest.spyOn(simDetailsService, 'getSimDetailsByMsisdn').mockReturnValue(of([simDetails]));
        jest.spyOn(component.simDetailsStatus, 'emit');
        component.msisdn = '0945567832';

        component.ngOnInit();

        component.simDetailsModel$.subscribe((simDetailsModel: SimDetailsModel) =>
          expect(simDetailsModel).toBe(simDetails)
        );
        expect(component.simTypeLabelKey).toBeUndefined();
      });
    });
  });

  function getSimDetailsModel(): SimDetailsModel {
    return {
      sim: '0945834593412',
      puk: '03457483',
      status: 'ACTIVE',
    } as SimDetailsModel;
  }
});
