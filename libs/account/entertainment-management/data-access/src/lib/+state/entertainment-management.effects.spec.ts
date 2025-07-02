import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockProvider } from 'ng-mocks';
import { of, take, throwError } from 'rxjs';
import { EntertainmentManagementService } from '../services/entertainment-management.service';
import { EntertainmentManagementEffects } from './entertainment-management.effects';
import { provideMockStore } from '@ngrx/store/testing';

describe('entertainment management effects', () => {
  let actions$: Actions;
  let effects: EntertainmentManagementEffects;
  let service: EntertainmentManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EntertainmentManagementEffects,
        provideMockStore({}),
        MockProvider(EntertainmentManagementService),
        provideMockActions(() => actions$),
      ],
    });
    effects = TestBed.inject(EntertainmentManagementEffects);
    service = TestBed.inject(EntertainmentManagementService);
  });

  describe('loadEntertainmentManagement', () => {
    it('should trigger loadEntertainmentManagementSuccess', (done) => {
      jest.spyOn(service, 'loadEntertainmentManagementOptions').mockReturnValue(
        of({
          activeOptions: [],
          availableContentPacks: [
            {
              name: {
                fr: 'Streamz Base',
                nl: 'Streamz Basis',
                en: 'Streamz Basic',
              },
              weight: 10,
              logo: 'www.google.com/logo1',
            },
          ],
        })
      );
      actions$ = of({ type: '[entertainment-management] loadEntertainmentManagement' });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      effects.loadEntertainmentManagementOptions$.subscribe((action: any) => {
        expect(action.type).toBe('[entertainment-management] loadEntertainmentManagementSuccess');
        expect(action.entertainmentManagementObject).toEqual({
          activeOptions: [],
          availableContentPacks: [
            {
              name: {
                fr: 'Streamz Base',
                nl: 'Streamz Basis',
                en: 'Streamz Basic',
              },
              weight: 10,
              logo: 'www.google.com/logo1',
            },
          ],
        });
        done();
      });
    });

    it('should trigger loadEntertainmentManagementFailure', (done) => {
      jest.spyOn(service, 'loadEntertainmentManagementOptions').mockReturnValue(throwError(() => 'Error'));
      actions$ = of({ type: '[entertainment-management] loadEntertainmentManagement' });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      effects.loadEntertainmentManagementOptions$.pipe(take(1)).subscribe((action: any) => {
        expect(action.type).toBe('[entertainment-management] loadEntertainmentManagementFailure');
        expect(action.error).toEqual('Error');
        done();
      });
    });
  });

  describe('loadEntertainmentOptionDetails', () => {
    it('should trigger loadEntertainmentOptionDetailsSuccess', (done) => {
      jest.spyOn(service, 'loadEntertainmentOptionDetails').mockReturnValue(
        of({
          name: {
            fr: 'Play More',
            nl: 'Play More',
            en: 'Play More',
          },
          weight: 10,
          logo: 'www.google.com/logo4',
        })
      );
      actions$ = of({ type: '[entertainment-management] loadEntertainmentOptionDetails' });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      effects.loadEntertainmentOptionDetails$.subscribe((action: any) => {
        expect(action.type).toBe('[entertainment-management] loadEntertainmentOptionDetailsSuccess');
        expect(action.entertainmentManagementObject).toEqual({
          name: {
            fr: 'Play More',
            nl: 'Play More',
            en: 'Play More',
          },
          weight: 10,
          logo: 'www.google.com/logo4',
        });
        done();
      });
    });

    it('should trigger loadEntertainmentOptionDetailsFailure', (done) => {
      jest.spyOn(service, 'loadEntertainmentOptionDetails').mockReturnValue(throwError(() => 'Error'));
      actions$ = of({ type: '[entertainment-management] loadEntertainmentOptionDetails' });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      effects.loadEntertainmentOptionDetails$.pipe(take(1)).subscribe((action: any) => {
        expect(action.type).toBe('[entertainment-management] loadEntertainmentOptionDetailsFailure');
        expect(action.error).toEqual('Error');
        done();
      });
    });
  });
});
