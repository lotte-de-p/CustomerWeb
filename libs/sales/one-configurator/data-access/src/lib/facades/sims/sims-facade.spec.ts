import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SimsFacade } from './sims-facade';
import { addSim, removeSim, updateUsageType } from '../../+state/one-configurator.actions';
import { UsageTypeUpdate } from '../../entities/sims/sims-state.interface';
import { UsageTypeEnum } from '../../entities/sims/usage-type.enum';
import { ProductFinderState } from '@sales/product-finder/data-access';

describe('SimsFacade', () => {
  let facade: SimsFacade;
  let store$: MockStore<ProductFinderState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore(), { provide: 'Window', useValue: {} }],
    });
    facade = TestBed.inject(SimsFacade);
    store$ = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe('addSim', () => {
    it("should call the store's dispatch method to add sim", () => {
      jest.spyOn(store$, 'dispatch');

      facade.addSim();

      expect(store$.dispatch).toHaveBeenCalledWith(addSim());
    });
  });

  describe('updateUsageType', () => {
    it("should call the store's dispatch method to updateUsageType of sim", () => {
      const updatedSims: UsageTypeUpdate = {
        index: 1,
        usageType: UsageTypeEnum.LIMITED1,
      };
      jest.spyOn(store$, 'dispatch');

      facade.updateUsageType(updatedSims);

      expect(store$.dispatch).toHaveBeenCalledWith(updateUsageType({ usageTypeUpdate: updatedSims }));
    });
  });

  describe('removeSim', () => {
    it("should call the store's dispatch method to removeSim sim", () => {
      jest.spyOn(store$, 'dispatch');

      facade.removeSim();

      expect(store$.dispatch).toHaveBeenCalledWith(removeSim());
    });
  });
});
