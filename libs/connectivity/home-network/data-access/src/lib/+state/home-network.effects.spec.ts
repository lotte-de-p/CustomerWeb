import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing';
import { HomeNetworkService } from '../home-network.service';

import * as homeNetworkActions from './home-network.actions';
import { HomeNetworkEffects } from './home-network.effects';

describe('HomeNetworkEffects', () => {
  let effects: HomeNetworkEffects;
  let actions$: Observable<Action>;
  let homeNetworkService: jest.Mocked<HomeNetworkService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HomeNetworkEffects,
        provideMockStore(),
        provideMockActions(() => actions$),
        {
          provide: HomeNetworkService,
          useValue: {
            getHomeNetworkList: jest.fn(),
          },
        },
      ],
    });

    jest.spyOn(console, 'log').mockImplementation(jest.fn);
    effects = TestBed.inject(HomeNetworkEffects);
    homeNetworkService = TestBed.inject(HomeNetworkService) as jest.Mocked<HomeNetworkService>;
  });

  describe('HomeNetworkList$', () => {
    describe(`when service call is successful`, () => {
      it('should dispatch getHomeNetworkListSuccessAction ', (done) => {
        const mockHomeNetworkListEntries = [
          {
            id: '1',
            name: 'Test name',
          },
        ];
        homeNetworkService.getHomeNetworkList.mockReturnValue(of(mockHomeNetworkListEntries));

        actions$ = of(homeNetworkActions.getHomeNetworkList());

        effects.homeNetworkList$.subscribe((action) => {
          expect(action).toEqual(
            homeNetworkActions.getHomeNetworkListSuccessAction({ homeNetworkList: mockHomeNetworkListEntries })
          );
          done();
        });
      });
    });
  });
});
