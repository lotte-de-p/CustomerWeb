import { mount } from 'cypress/angular';
import { TranslateModule } from '@ngx-translate/core';
import { NoResultsComponent } from './no-results.component';
import { ExperienceFragmentService } from '@telenet/ng-lib-page';
import { of } from 'rxjs';
import { SearchFacadeService } from '@general/data-access-search';

class MockExperienceFragmentService {
  fetchExpFragment = cy.stub();
}

class MockSearchFacadeService {
  query$ = of('test query');
}

describe(NoResultsComponent.name, () => {
  let mockExperienceFragmentService: MockExperienceFragmentService;
  let mockSearchFacadeService: MockSearchFacadeService;

  const mountComponent = () => {
    mount(NoResultsComponent, {
      componentProperties: { noResultsExpFragmentLocation: 'some/location' },
      imports: [TranslateModule.forRoot()],
      providers: [
        { provide: SearchFacadeService, useValue: mockSearchFacadeService },
        { provide: ExperienceFragmentService, useValue: mockExperienceFragmentService },
      ],
    });
  };

  beforeEach(() => {
    mockExperienceFragmentService = new MockExperienceFragmentService();
    mockSearchFacadeService = new MockSearchFacadeService();
  });

  it('should display no results message with query', () => {
    mountComponent();

    cy.get('[data-testid="no-results"]').within(() => {
      cy.contains('ng.search-results-page.lbl.noresults');
      cy.contains('ng.search-results-page.lbl.sorrymessage');
      cy.contains('strong', 'test query');
    });
  });

  it('should call fetchExpFragment with correct parameters', () => {
    mountComponent();

    cy.wrap(mockExperienceFragmentService.fetchExpFragment).should('have.been.calledWith', 'location', 'some');
  });
});
