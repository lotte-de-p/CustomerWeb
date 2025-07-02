import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NumberOfSimsFacade } from './number-of-sims-facade';
import { updateNumberOfSims } from '../../+state/product-finder.actions';
import { selectNumberOfSims } from '../../+state/product-finder.selectors';
import { Observable } from 'rxjs';

describe('NumberOfSimsFacade', () => {
  let facade: NumberOfSimsFacade;
  let store$: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
    });

    store$ = TestBed.inject(MockStore);
    facade = TestBed.inject(NumberOfSimsFacade);

    jest.spyOn(store$, 'dispatch');
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should select the numberOfSims', fakeAsync(() => {
    const numberOfSims = 1;
    store$.overrideSelector(selectNumberOfSims, numberOfSims);

    const result$: Observable<number> = facade.numberOfSims$;

    result$.subscribe((actual: number) => {
      expect(actual).toEqual(numberOfSims);
    });
    tick();
  }));

  it('should dispatch the updated numberOfSims', () => {
    const numberOfSims = 1;

    facade.updateNumberOfSims(numberOfSims);

    expect(store$.dispatch).toHaveBeenCalledWith(updateNumberOfSims({ numberOfSims }));
  });
});
