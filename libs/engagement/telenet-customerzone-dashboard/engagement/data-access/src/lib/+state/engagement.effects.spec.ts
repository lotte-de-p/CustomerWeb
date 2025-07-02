import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing';
import { EngagementService } from '../engagement.service';

import * as engagementActions from './engagement.actions';
import { EngagementEffects } from './engagement.effects';

describe('EngagementEffects', () => {
  let effects: EngagementEffects;
  let actions$: Observable<Action>;
  let engagementService: jest.Mocked<EngagementService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EngagementEffects,
        provideMockStore(),
        provideMockActions(() => actions$),
        {
          provide: EngagementService,
          useValue: {
            getEngagementList: jest.fn(),
          },
        },
      ],
    });

    jest.spyOn(console, 'log').mockImplementation(jest.fn);
    effects = TestBed.inject(EngagementEffects);
    engagementService = TestBed.inject(EngagementService) as jest.Mocked<EngagementService>;
  });

  describe('EngagementList$', () => {
    describe(`when service call is successful`, () => {
      it('should dispatch getEngagementListSuccessAction ', (done) => {
        const mockEngagementListEntries = [
          {
            id: '1',
            name: 'Test name',
          },
        ];
        engagementService.getEngagementList.mockReturnValue(of(mockEngagementListEntries));

        actions$ = of(engagementActions.getEngagementList());

        effects.engagementList$.subscribe((action) => {
          expect(action).toEqual(
            engagementActions.getEngagementListSuccessAction({ engagementList: mockEngagementListEntries })
          );
          done();
        });
      });
    });
  });
});
