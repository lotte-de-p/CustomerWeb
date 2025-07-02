import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockProvider } from 'ng-mocks';
import { of, take, throwError } from 'rxjs';
import { HardwareDiscountService } from '../services/hardware-discount.service';
import { HardwareDiscountEffects } from './hardware-discount.effects';
import { provideMockStore } from '@ngrx/store/testing';

describe('hardware discount effects', () => {
  let actions$: Actions;
  let effects: HardwareDiscountEffects;
  let service: HardwareDiscountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HardwareDiscountEffects,
        provideMockStore({}),
        MockProvider(HardwareDiscountService),
        provideMockActions(() => actions$),
      ],
    });
    effects = TestBed.inject(HardwareDiscountEffects);
    service = TestBed.inject(HardwareDiscountService);
  });

  describe('loadHardwareDiscount', () => {
    it('should trigger loadHardwareDiscountSuccess', (done) => {
      jest.spyOn(service, 'loadHardwareDiscount').mockReturnValue(
        of({
          availableSlots: 0,
          totalSlots: 0,
          creditCheck: '',
          usedDiscounts: [],
        })
      );
      actions$ = of({ type: '[hardware-discount] loadHardwareDiscount' });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      effects.loadHardwareDiscount$.subscribe((action: any) => {
        expect(action.type).toBe('[hardware-discount] loadHardwareDiscountSuccess');
        expect(action.hardwareDiscountObject).toEqual({
          availableSlots: 0,
          totalSlots: 0,
          creditCheck: '',
          usedDiscounts: [],
        });
        done();
      });
    });

    it('should trigger loadHardwareDiscountFailure', (done) => {
      jest.spyOn(service, 'loadHardwareDiscount').mockReturnValue(throwError(() => 'Error'));
      actions$ = of({ type: '[hardware-discount] loadHardwareDiscount' });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      effects.loadHardwareDiscount$.pipe(take(1)).subscribe((action: any) => {
        expect(action.type).toBe('[hardware-discount] loadHardwareDiscountFailure');
        expect(action.error).toEqual('Error');
        done();
      });
    });
  });
});
