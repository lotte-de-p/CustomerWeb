import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { HomeNetworkFacade } from './home-network.facade';
import { EffectsModule } from '@ngrx/effects';
import { HomeNetworkNgrxModule } from '../+state/home-network-ngrx.module';

describe(' HomeNetworkFacade', () => {
  let facade: HomeNetworkFacade;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(), EffectsModule.forRoot(), HomeNetworkNgrxModule],
      providers: [HomeNetworkFacade],
    });
    facade = TestBed.inject(HomeNetworkFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });
});
