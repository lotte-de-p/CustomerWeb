import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwarePlanComponent } from './hardware-plan.component';
import { HardwarePlanService, Product } from '@general/data-access-search';
import { of } from 'rxjs';

describe('PlanComponent', () => {
  let component: HardwarePlanComponent;
  let fixture: ComponentFixture<HardwarePlanComponent>;
  let hardwarePlanService: HardwarePlanService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: HardwarePlanService,
          useValue: {
            getHardwarePlan: () => of(''),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HardwarePlanComponent);
    component = fixture.componentInstance;
    hardwarePlanService = TestBed.inject(HardwarePlanService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get do nothing if theres no url', () => {
    const getHardwarePlanSpy = jest.spyOn(hardwarePlanService, 'getHardwarePlan');

    component.ngOnInit();

    expect(getHardwarePlanSpy).toBeCalledTimes(0);
  });

  it('should get the plan data on ngOnInit', () => {
    const getHardwarePlanSpy = jest.spyOn(hardwarePlanService, 'getHardwarePlan');

    component.product = {
      plan: 'https://www.test.com/',
    } as Product;
    component.ngOnInit();

    expect(getHardwarePlanSpy).toHaveBeenCalled();
  });
});
