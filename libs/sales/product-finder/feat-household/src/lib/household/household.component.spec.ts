import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdComponent } from './household.component';
import { StoreModule } from '@ngrx/store';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import {
  Household,
  HouseholdFacade,
  ProductFinderNgrxModule,
  ProductFinderStepperNgrxModule,
} from '@sales/product-finder/data-access';
import { of } from 'rxjs';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

describe('HouseholdComponent', () => {
  let component: HouseholdComponent;
  let fixture: ComponentFixture<HouseholdComponent>;
  let householdFacade: HouseholdFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(),
        EffectsModule.forRoot(),
        TgTranslateTestingModule.forRoot(),
        ProductFinderNgrxModule,
        ProductFinderStepperNgrxModule,
        HttpClientModule,
      ],
      providers: [
        {
          provide: 'Window',
          useValue: {},
        },
      ],
    }).compileComponents();

    jest.spyOn(console, 'log').mockImplementation(jest.fn);
    householdFacade = TestBed.inject(HouseholdFacade);

    fixture = TestBed.createComponent(HouseholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should select household and set householdForm value', () => {
      const household: Household = {
        adults: 1,
        teens: 1,
        children: 2,
      };
      householdFacade.household$ = of(household);

      component.ngOnInit();

      expect(component.householdForm.value).toEqual(household);
    });

    it('should subscribe to householdForm valueChanges and update household', () => {
      const household: Household = {
        adults: 4,
        teens: 0,
        children: 0,
      };
      const updateHouseholdSpy = jest.spyOn(householdFacade, 'updateHousehold');

      component.ngOnInit();
      component.householdForm.controls['adults'].setValue(4);
      fixture.detectChanges();

      expect(component.householdForm.value).toEqual(household);
      expect(updateHouseholdSpy).toHaveBeenCalledWith(household);
    });
  });
});
