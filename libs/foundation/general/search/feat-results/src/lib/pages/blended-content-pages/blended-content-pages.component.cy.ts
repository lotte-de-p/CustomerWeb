import { defaultState, Product, SearchResultItem } from '@general/data-access-search';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { BlendedContentPagesComponent } from './blended-content-pages.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';

describe(BlendedContentPagesComponent.name, () => {
  it('renders', () => {
    mountComponent([]);
  });

  it('has the articles title', () => {
    mountComponent([]);

    cy.getElement('blended-content-title');
  });

  it('renders with content', () => {
    mountComponent([
      {
        name: 'Telenet-abonnement opzeggen?',
        type: 'page',
        content:
          'aan de netwerkverdeler laat je hangen. Lever je je <em>modemniet</em> of te laatin?Dan rekenen we een eenmalige vergoeding, afhankelijk van hettype <em>modem.Zodra</em> je je toestel dan binnenbrengt, krijg je het bedrag terug via je (eind)aanrekening. Type CH7465LG-TN CV8560E CH8568LG Bedrag incl. btw (€) 60 80 90 Tip: je vindt het type op de sticker van je <em>modem</em> Digibox',
        url: 'https://www.dvp.telenet.be/residential/nl/klantenservice/je-gegevens-aanpassen/je-abonnement/telenet-abonnement-opzeggen',
        displayUrl:
          'https://www.dvp.telenet.be/residential/nl/klantenservice/je-gegevens-aanpassen/je-abonnement/telenet-abonnement-opzeggen',
        product: {} as Product,
        tags: [],
        id: 'id1',
      } as SearchResultItem,
      {
        name: 'Alles over je Telenet-modem',
        type: 'page',
        content:
          "Alles over je Telenet-<em>modem</em> Zorgeloos surfen, dat vinden we bij Telenet enorm belangrijk. Niet iedereen surft op dezelfde manier. Zo staat niet elke <em>modem</em> centraal in huis of surft niet iedereen via wifi. En da's ok. Wij voorzien een <em>modem</em> op maat! Kies je <em>modem</em> CH6643E CH7465LG-TN CV8568LG CH8568LG F@ST3896LG-TN CH6643E CH7465LG-TN CV8568LG",
        url: 'https://www.dvp.telenet.be/residential/nl/klantenservice/internet/modem-en-andere-toestellen/alles-over-je-telenet-modem',
        displayUrl:
          'https://www.dvp.telenet.be/residential/nl/klantenservice/internet/modem-en-andere-toestellen/alles-over-je-telenet-modem',
        product: {} as Product,
        tags: [],
        id: 'id2',
      } as SearchResultItem,
    ]);

    cy.getElement('content-page').find('li').should('have.length', 2);
  });

  const mountComponent = (hits: SearchResultItem[]) => {
    cy.mount(BlendedContentPagesComponent, {
      imports: [TgTranslateTestingModule.forRoot()],
      providers: [
        HttpClient,
        HttpHandler,
        provideMockStore({ initialState: { searchFeature: defaultState } }),
        { provide: 'Window', useValue: window },
      ],
      componentProperties: {
        hits: hits,
      },
    });
  };
});
