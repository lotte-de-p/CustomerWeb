import { IngenicoFormComponent } from './ingenico-form.component';
import { CommonModule } from '@angular/common';

describe(IngenicoFormComponent.name, () => {
  it('should mount', () => {
    cy.mount(IngenicoFormComponent, {
      imports: [CommonModule],
      componentProperties: {},
    });
  });
});
