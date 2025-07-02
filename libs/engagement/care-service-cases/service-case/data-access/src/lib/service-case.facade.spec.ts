import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ServiceCaseState } from './+state/service-case.reducers';
import { ServiceCaseFacade } from './service-case.facade';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import {
  loadServiceCases,
  selectServiceCase,
  serviceCasesPageView,
  toggleHistoryAction,
} from './+state/service-case.actions';
import { Status, Type } from './entitities/service-case.interface';
import { selectServiceCases } from './+state/service-case.selectors';

describe('ServiceCaseFacade', () => {
  let mockStore$: MockStore<ServiceCaseState>;
  let facade: ServiceCaseFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore(), ServiceCaseFacade],
    });

    mockStore$ = TestBed.inject(Store) as MockStore<ServiceCaseState>;
    facade = TestBed.inject(ServiceCaseFacade);
    mockStore$.overrideSelector(selectServiceCases, []);
  });

  it('should dispatch loadServiceCases action to store', (done) => {
    const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
    facade.loadServiceCases();
    expect(dispatchSpy).toHaveBeenCalledWith(loadServiceCases());
    done();
  });

  it('should dispatch selectServiceCase action to store', (done) => {
    const selectedServiceCase = {
      id: '123456',
      type: Type.MOVE,
      status: Status.OPEN,
      creationDate: new Date(2023, 8, 18),
      productType: 'Internet, DTV, fixed line',
    };
    const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
    facade.selectServiceCase(selectedServiceCase);
    expect(dispatchSpy).toHaveBeenCalledWith(
      selectServiceCase({
        selectedServiceCase,
      })
    );
    done();
  });

  it('should dispatch toggleHistoryAction action to store', (done) => {
    const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
    facade.toggleHistory(true);
    expect(dispatchSpy).toHaveBeenCalledWith(
      toggleHistoryAction({
        isToggleHistory: true,
      })
    );
    done();
  });

  it('should dispatch serviceCasesPageView action to store', (done) => {
    const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
    facade.serviceCasesPageView();
    expect(dispatchSpy).toHaveBeenCalledWith(serviceCasesPageView());
    done();
  });
});
