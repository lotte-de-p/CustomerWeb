import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { EngagementFacade } from './engagement.facade';
import { EffectsModule } from '@ngrx/effects';
import { EngagementNgrxModule } from '../+state/engagement-ngrx.module';

describe(' EngagementFacade', () => {
  let facade: EngagementFacade;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(), EffectsModule.forRoot(), EngagementNgrxModule],
      providers: [EngagementFacade],
    });
    facade = TestBed.inject(EngagementFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });
});
