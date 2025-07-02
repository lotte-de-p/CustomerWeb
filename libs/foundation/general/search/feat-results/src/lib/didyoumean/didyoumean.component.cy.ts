import { DidyoumeanComponent } from './didyoumean.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';
import { mount } from 'cypress/angular';

describe(DidyoumeanComponent.name, () => {
  it('renders', () => {
    mountWithProperties({
      items: [],
    });
  });

  it('shows the items in the list', () => {
    mountWithProperties({
      items: ['iPhone 14', 'iPhone 15', 'iPhone 16'],
    });

    cy.getElement('didyoumean').should('have.length', 3);
    cy.getElement('didyoumean').contains('iPhone 14');
    cy.getElement('didyoumean').contains('iPhone 15');
    cy.getElement('didyoumean').contains('iPhone 16');
  });

  it('shows nothing if the list is empty', () => {
    mountWithProperties({
      items: [],
    });

    cy.getElement('didyoumean').should('not.exist');
  });
});

const mountWithProperties = (props: ComponentProperties) => {
  mount(DidyoumeanComponent, {
    imports: [
      TranslateModule.forRoot({
        loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
      }),
    ],
    providers: [UrlService, { provide: 'Window', useValue: window }],
    componentProperties: props,
  });
};

interface ComponentProperties {
  items: string[];
}
