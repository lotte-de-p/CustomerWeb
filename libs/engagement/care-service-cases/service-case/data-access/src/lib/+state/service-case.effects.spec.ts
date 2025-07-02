import { TestBed } from '@angular/core/testing';
import { ServiceCaseEffects } from './service-case.effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Actions } from '@ngrx/effects';
import { ServiceCaseService } from '../services/service-case.service';
import { of, take, throwError } from 'rxjs';
import { Status, Type } from '../entitities/service-case.interface';
import { MockProvider } from 'ng-mocks';

describe('ServiceCaseEffects', () => {
  let actions$: Actions;
  let effects: ServiceCaseEffects;
  let service: ServiceCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceCaseEffects, MockProvider(ServiceCaseService), provideMockActions(() => actions$)],
    });
    effects = TestBed.inject(ServiceCaseEffects);
    service = TestBed.inject(ServiceCaseService);
  });

  describe('loadServiceCases$', () => {
    it('should trigger loadServiceCasesSuccess', (done) => {
      jest.spyOn(service, 'load').mockReturnValue(
        of([
          {
            id: '123456',
            type: Type.MOVE,
            status: Status.OPEN,
            creationDate: new Date(2023, 8, 18),
            productType: 'Internet, DTV, fixed line',
          },
          {
            id: '987654',
            type: Type.TAKEOVER,
            status: Status.OPEN,
            creationDate: new Date(2023, 3, 2),
            productType: 'Internet, DTV',
          },
        ])
      );
      actions$ = of({ type: '[service-case] loadServiceCases' });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      effects.loadServiceCases$.subscribe((action: any) => {
        expect(action.type).toBe('[service-case] loadServiceCasesSuccess');
        expect(action.serviceCases).toEqual([
          {
            id: '123456',
            type: Type.MOVE,
            status: Status.OPEN,
            creationDate: new Date(2023, 8, 18),
            productType: 'Internet, DTV, fixed line',
          },
          {
            id: '987654',
            type: Type.TAKEOVER,
            status: Status.OPEN,
            creationDate: new Date(2023, 3, 2),
            productType: 'Internet, DTV',
          },
        ]);
        done();
      });
    });

    it('should trigger loadServiceCasesFailure', (done) => {
      jest.spyOn(service, 'load').mockReturnValue(throwError(() => 'Error'));
      actions$ = of({ type: '[service-case] loadServiceCases' });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      effects.loadServiceCases$.pipe(take(1)).subscribe((action: any) => {
        expect(action.type).toBe('[service-case] loadServiceCasesFailure');
        expect(action.error).toEqual('Error');
        done();
      });
    });
  });
});
