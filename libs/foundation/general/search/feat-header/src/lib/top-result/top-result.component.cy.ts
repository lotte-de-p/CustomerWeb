import { TopResultComponent } from './top-result.component';
import { BadgeComponent } from '@general/ui-search';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { SearchFacadeService, SearchResultItem } from '@general/data-access-search';

class MockSearchFacadeService {
  goToResult = cy.stub();
}

interface ComponentProperties {
  item: SearchResultItem;
  detailsPagePath: string;
}

describe('TopResultComponent', () => {
  let mockSearchFacadeService: MockSearchFacadeService;

  const mountWithProperties = (props: ComponentProperties) => {
    cy.mount(TopResultComponent, {
      imports: [
        CommonModule,
        BadgeComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      componentProperties: props,
      providers: [{ provide: SearchFacadeService, useValue: mockSearchFacadeService }],
    });
  };

  const detailsPagePath = '/product-details';
  const item: SearchResultItem = {
    name: 'Test Product',
    type: 'product',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    product: { id: '123' },
    displayUrl: 'http://example.com',
    tags: [{ name: 'category', value: ['electronics'] }],
  };

  beforeEach(() => {
    mockSearchFacadeService = new MockSearchFacadeService();
  });

  it('should render the item name and link correctly', () => {
    mountWithProperties({
      item,
      detailsPagePath,
    });

    cy.get('a').should('have.attr', 'href', `${detailsPagePath}?productId=123`);
    cy.get('.header-search--autosuggest-results-item').should('contain.text', item.name);
  });

  it('should render the category label if present', () => {
    mountWithProperties({
      item,
      detailsPagePath,
    });

    cy.get('tg-foundation-general-search-badge').should('contain.text', 'tags.category.electronics');
  });

  it('should not render the category label if not present', () => {
    item.tags = [];
    mountWithProperties({
      item,
      detailsPagePath,
    });
    cy.get('tg-foundation-general-search-badge').should('not.exist');
  });

  it('should prevent default and call goToResult on click', () => {
    mountWithProperties({
      item,
      detailsPagePath,
    });

    const mockHref = `${detailsPagePath}?productId=123`;
    const searchResult = item;

    cy.get('a')
      .then(($element) => {
        const event = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window,
        });

        Object.defineProperty(event, 'currentTarget', {
          value: {
            href: mockHref,
          },
        });

        // Dispatch the event on the element
        $element[0].dispatchEvent(event);
      })
      .then(() => {
        expect(mockSearchFacadeService.goToResult).to.have.been.calledWith(mockHref, searchResult);
      });
  });
});
