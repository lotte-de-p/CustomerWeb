import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EntertainmentManagementFacade } from './entertainment-management.facade';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { loadEntertainmentManagementOptions, loadEntertainmentOptionDetails } from './entertainment-management.actions';

describe('EntertainmentManagementFacade', () => {
  let facade: EntertainmentManagementFacade;
  let store$: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockStore(), { provide: 'Window', useValue: {} }],
    });

    facade = TestBed.inject(EntertainmentManagementFacade);
    store$ = TestBed.inject(MockStore);
    jest.spyOn(store$, 'dispatch');
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe('loadEntertainmentManagementOptions', () => {
    it('should call store with loadEntertainmentManagement action', () => {
      facade.loadEntertainmentManagementOptions();
      expect(store$.dispatch).toHaveBeenCalledWith(loadEntertainmentManagementOptions());
    });
  });

  describe('loadEntertainmentOptionDetails', () => {
    it('should call store with loadEntertainmentOptionDetails action', () => {
      facade.loadEntertainmentOptionDetails();
      expect(store$.dispatch).toHaveBeenCalledWith(loadEntertainmentOptionDetails());
    });
  });
});
