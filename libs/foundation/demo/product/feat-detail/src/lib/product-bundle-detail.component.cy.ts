import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductBundleDetailComponent } from './product-bundle-detail.component';
import { ProductFacade } from '@demo/product/data-access';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';

describe('ProductBundleDetailComponent', () => {
  beforeEach(() => {
    cy.mount(ProductBundleDetailComponent, {
      imports: [TgTranslateTestingModule.forRoot(), EffectsModule.forRoot(), StoreModule.forRoot()],
      providers: [ProductFacade],
      componentProperties: {},
    });
  });

  it('should render', () => {
    const bundleChildNames = ['Internet', 'Toegang digitale tv'];

    cy.get('[data-testid="bundleTitle"]').should('have.text', ' All-Internet + Telenet TV Iconic ');
    cy.get('[data-testid="product-bundle-child"]').each((item, index) => {
      cy.wrap(item).should('contain.text', bundleChildNames[index]);
    });
  });

  describe(`When clicking on a detail`, () => {
    it(`should expand`, () => {
      cy.get('[data-testid="product-bundle-child"]')
        .eq(0)
        .within(() => {
          cy.get('[data-testid="collapsible-header"]').click();
          cy.get('[data-testid="dropdown"]').should('have.class', 'icon-chevron-up');
          cy.get('[data-testid="collapsible-header"]').click();
          cy.get('[data-testid="dropdown"]').should('have.class', 'icon-chevron-down');
        });
    });
  });
});
