import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { updateHousehold } from '../../+state/product-finder.actions';
import { selectPreference } from '../../+state/product-finder.selectors';
import { Observable, of } from 'rxjs';
import { Household } from '../../entities/household/household.interface';
import { HouseholdFacade } from '../../facades/household/household-facade';

describe('HouseholdFacade', () => {
  let facade: HouseholdFacade;
  let store$: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
    });

    store$ = TestBed.inject(MockStore);
    facade = TestBed.inject(HouseholdFacade);

    jest.spyOn(store$, 'dispatch');
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('preference should select the preference', () => {
    const household: Household = {
      adults: 1,
      teens: 1,
      children: 1,
    };
    jest.spyOn(store$, 'select').mockReturnValue(of(household));

    const result$: Observable<Household> = facade.household$;

    result$.subscribe((actual: Household) => {
      expect(household).toEqual(actual);
      expect(store$.select).toHaveBeenCalledWith(selectPreference);
    });
  });

  it('updatePreference should dispatch the updated preference', () => {
    const household: Household = {
      adults: 1,
      teens: 1,
      children: 1,
    };

    facade.updateHousehold(household);

    expect(store$.dispatch).toHaveBeenCalledWith(updateHousehold({ household }));
  });
});
