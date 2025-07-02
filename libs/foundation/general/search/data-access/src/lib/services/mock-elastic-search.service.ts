import { Observable, of } from 'rxjs';
import { ElasticSearchServiceInterface, Pagination, Type } from './elastic-search-service.interface';
import { Suggestions } from '../entities/suggestions';
import { Log, LogFactory } from '@telenet/ng-lib-shared';
import { SearchResults } from '../entities/search-results';
import { FacetGroup } from '../entities/facets';
import { Product } from '../entities/product';

export class MockElasticSearchService implements ElasticSearchServiceInterface {
  private static readonly LOG: Log = LogFactory.createLogger(MockElasticSearchService);

  private _searchResultsCollection = '';
  private _searchResultsPage = '';
  private _brand = '';
  private _language = '';

  search(
    query: string,
    type: Type,
    collection?: string,
    facets?: FacetGroup[],
    pagination?: Pagination
  ): Observable<SearchResults> {
    MockElasticSearchService.LOG.logInfo(
      `SearchQuery is ${query} and type is ${type} and collection is ${collection} and facets are ${facets} and pagination is ${pagination} and brand is ${this._brand} and language is ${this._language}`
    );
    return of({} as SearchResults);
  }

  getSuggestions(searchQuery: string, includeHardwareResults: boolean, collection?: string): Observable<Suggestions> {
    MockElasticSearchService.LOG.logInfo(
      `SearchQuery is ${searchQuery}, includeHardwareResults: ${includeHardwareResults}, Collection: ${collection}`
    );

    return of(this.buildMockSuggestions()) as Observable<Suggestions>;
  }

  getTopResults(suggestion: string): Observable<SearchResults> {
    MockElasticSearchService.LOG.logInfo(`SearchQuery is ${suggestion}`);

    return of(this.buildMockResults()) as Observable<SearchResults>;
  }

  getFacets(query: string, collection: string, tags: string[]): Observable<FacetGroup[]> {
    MockElasticSearchService.LOG.logInfo(`Facets for query: ${query} collection: ${collection} tags: ${tags}`);

    return of(this.buildMockTags());
  }

  buildMockTags(): FacetGroup[] {
    return [
      {
        title: 'tags.subject',
        facets: [
          {
            id: 'tv-and-entertainment',
            label: 'tags.subject.tv-and-entertainment',
            count: 22,
            selected: false,
          },
          {
            id: 'bill',
            label: 'tags.subject.bill',
            count: 22,
            selected: false,
          },
          {
            id: 'mobile-and-fixed',
            label: 'tags.subject.mobile-and-fixed',
            count: 22,
            selected: false,
          },
          {
            id: 'internet',
            label: 'tags.subject.internet',
            count: 17,
            selected: false,
          },
          {
            id: 'change-your-information',
            label: 'tags.subject.change-your-information',
            count: 7,
            selected: false,
          },
          {
            id: 'interruptions',
            label: 'tags.subject.interruptions',
            count: 3,
            selected: false,
          },
          {
            id: 'general',
            label: 'tags.subject.general',
            count: 1,
            selected: false,
          },
        ],
      },
      {
        title: 'tags.category',
        facets: [
          {
            id: 'devices',
            label: 'tags.category.devices',
            count: 373,
            selected: false,
          },
          {
            id: 'support',
            label: 'tags.category.support',
            count: 87,
            selected: false,
          },
          {
            id: 'products',
            label: 'tags.category.products',
            count: 9,
            selected: false,
          },
          {
            id: 'my-services',
            label: 'tags.category.my-services',
            count: 3,
            selected: false,
          },
          {
            id: 'inspiration',
            label: 'tags.category.inspiration',
            count: 1,
            selected: false,
          },
        ],
      },
      {
        title: 'tags.type',
        facets: [],
      },
    ];
  }

  setInputParameters(
    searchResultsCollection: string,
    searchResultsPage: string,
    brand: string,
    language: string
  ): void {
    this._searchResultsCollection = searchResultsCollection;
    this._searchResultsPage = searchResultsPage;
    this._brand = brand;
    this._language = language;
  }

  postClick(searchResultId: string, brand: string, locale: string): void {
    MockElasticSearchService.LOG.logInfo(
      `SearchResultId is ${searchResultId} and brand is ${brand} and locale is ${locale}`
    );
  }

  get searchResultsCollection(): string {
    return this._searchResultsCollection;
  }

  get searchResultsPage(): string {
    return this._searchResultsPage;
  }

  getBrand(): string {
    return this._brand;
  }

  getLanguage(): string {
    return this._language;
  }

  getSearchResultsCollection = () => this.searchResultsCollection;
  getSearchResultsPage = () => this.searchResultsPage;

  private buildMockSuggestions(): Suggestions {
    return {
      locale: 'nl',
      hits: [
        {
          text: 'iPhone 11 2020',
          highlight: 'iPhone <em>11 2020</em>',
        },
        {
          text: 'iPhone 12',
          highlight: 'iPhone <em>12</em>',
        },
        {
          text: 'iPhone 12 Pro',
          highlight: 'iPhone <em>12 Pro</em>',
        },
        {
          text: 'iPhone 13',
          highlight: 'iPhone <em>13</em>',
        },
        {
          text: 'iPhone 13 mini',
          highlight: 'iPhone <em>13 mini</em>',
        },
      ],
    } as Suggestions;
  }

  private buildMockResults(): SearchResults {
    return {
      hits: [
        {
          type: 'product',
          url: null,
          displayUrl: '/inpage-search',
          mimeType: null,
          name: 'Minimodem',
          content: 'ZTE Mini<em>modem</em>',
          product: {
            id: '2101384',
            brand: 'ZTE',
            color: [],
            image:
              'https://735280384762-pim-prod-akeneo.s3.eu-central-1.amazonaws.com/a/9/2/8/a92879618817d2ed812f68b5e966a33c0dffcd44_2101384.hr.png',
            plan: null,
            originalPrice: 65.0,
            discountedPrice: 65.0,
            tags: [],
          },
          tags: [
            {
              name: 'category',
              value: ['devices'],
            },
          ],
        },
        {
          type: 'page',
          url: 'https://www.int.telenet.be/content/www-telenet-touch/nl/klantenservice/telenet-apps/apparaten/apparaten',
          displayUrl: 'https://www.int.telenet.be/residential/nl/klantenservice/telenet-apps/apparaten/apparaten',
          name: 'Modem',
          content:
            'Test <em>Modem</em> Algemeen Algemeen Bestellen Bestellen Installeren Installeren Probleem oplossen Probleem oplossen',
          tags: [
            {
              name: 'subject',
              value: ['telenet-residential-support/general'],
            },
            {
              name: 'category',
              value: ['support'],
            },
          ],
        },
        {
          type: 'page',
          url: 'https://www.int.telenet.be/content/www-telenet-touch/nl/klantenservice/internet/je-wifi/hoe-mijn-draadloos-internet-instellen',
          displayUrl:
            'https://www.int.telenet.be/residential/nl/klantenservice/internet/je-wifi/hoe-mijn-draadloos-internet-instellen',
          name: 'Hoe mijn draadloos internet instellen?',
          content:
            'Instellingen wireless <em>modem</em> aanpassen? Instellingen met hangslotje aanpassen? Wil je zelf een aantal instellingen aanpassen? Dat kan bij <em>Modeminstellingen</em>. Algemene instellingen De algemene instellingen zijn standaard ingesteld. Je kan het draadloos signaal, persoonlijke wifi en Wi-Free aan- of uitzetten. <em>Modemtesten</em> De beschikbare <em>modemtesten</em>',
          product: {} as Product,
          tags: [
            {
              name: 'subject',
              value: ['telenet-residential-support/internet'],
            },
            {
              name: 'category',
              value: ['support'],
            },
          ],
        },
        {
          type: 'page',
          url: 'https://www.int.telenet.be/content/www-telenet-touch/nl/netwerk-en-kwaliteit/ihc/ihc-modem',
          displayUrl: 'https://www.int.telenet.be/residential/nl/netwerk-en-kwaliteit/ihc/ihc-modem',
          name: 'ihc-modem',
          content:
            'Jouw <em>modem</em> is het startpunt van je nieuwe thuisnetwerk. Raakt je wifi vandaag niet overal in huis? Dan zorgt 360° Wifi ervoor dat je naadloos verbonden bent, tot in elk hoekje waar jij wifi wil. Het vormt een zelfregulerend, slim netwerk. Zo heb je overal in huis stabiel en razendsnel internet, aangepast aan wat je op dat moment nodig hebt',
          product: {} as Product,
          tags: [],
        },
        {
          type: 'page',
          url: 'https://www.int.telenet.be/content/www-telenet-touch/nl/klantenservice/tv-en-entertainment/storingen/hoe-herstart-ik-mijn-modem',
          displayUrl:
            'https://www.int.telenet.be/residential/nl/klantenservice/tv-en-entertainment/storingen/hoe-herstart-ik-mijn-modem',
          name: 'Hoe herstart ik mijn modem ?',
          content:
            'Hoe herstart ik mijn <em>modem</em>? Eerst even dit Je <em>modem</em> is het hart van je internetverbinding en vind je op de plek waar de Telenet-kabel je woning binnenkomt. Heb je een probleem met je internet of je digitale tv (bv.: geen enkel toesel is nog verbonden, trage verbinding of slecht bereik)? Dan kan het helpen om je <em>modem</em> even te herstarten',
          product: {} as Product,
          tags: [],
        },
      ],
    } as SearchResults;
  }
}
