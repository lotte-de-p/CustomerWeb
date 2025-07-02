import { SalesComponentViewComponent } from './sales-component-view.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('SalesComponentViewComponent', () => {
  it('should render', () => {
    cy.mount(SalesComponentViewComponent, {
      providers: [MockStore, provideMockStore({ initialState: { stepFeature: { stepFeature: {} } } })],
      imports: [StoreModule.forRoot(), EffectsModule.forRoot()],
    });
  });
});
