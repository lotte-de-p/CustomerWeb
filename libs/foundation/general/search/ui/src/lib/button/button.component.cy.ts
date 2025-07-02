import { ButtonComponent } from './button.component';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <tg-foundation-general-search-button [customClasses]="['button button--primary']">
      <div [attr.data-testid]="'my-button-text'">My button</div>
    </tg-foundation-general-search-button>
  `,
})
class TestButtonComponent {}

describe('ButtonComponent', () => {
  it('should render', () => {
    cy.mount(TestButtonComponent);
    cy.get(`[data-testid='my-button-text']`).should('be.visible').should('contain.text', 'My button');
  });
});
