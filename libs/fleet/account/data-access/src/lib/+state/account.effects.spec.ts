import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { of } from 'rxjs';
import { AccountEffects } from './account.effects';
import { Actions } from '@ngrx/effects';
import { setPhoneNumber } from './account.actions';
describe('AccountEffects', () => {
  let actions$: Actions;
  let effects: AccountEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject<AccountEffects>(AccountEffects);
  });

  describe('set next page on new phone number', () => {
    it('should trigger setNextPage when a new phone number is entered', () => {
      actions$ = of(setPhoneNumber({ phoneNumber: '0478232452' }));
      effects.setNextPage$.subscribe((action) => {
        expect(action.type).toBe('[account] setNextPage');
      });
    });
  });
});
