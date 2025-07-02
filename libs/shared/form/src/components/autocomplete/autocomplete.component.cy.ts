import { MountConfig } from 'cypress/angular';
import { AutocompleteComponent } from './autocomplete.component';

const ComponentType = AutocompleteComponent<string>;

describe('AutocompleteComponent', () => {
  const config: MountConfig<AutocompleteComponent<string>> = {
    declarations: [],
  };
  it('should mount', () => {
    cy.mount(ComponentType, {
      ...config,
      componentProperties: {
        autocompleteItems: ['test', 'name', 'pony'],
        createLabel: (item: string) => item,
        placeholder: 'Zoek',
      },
    });
  });
});
