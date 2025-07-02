import { ErrorMessageComponent } from './error-message.component';
import { TranslateModule } from '@ngx-translate/core';

describe('ErrorMessageComponent', () => {
  it('should render', () => {
    cy.mount(ErrorMessageComponent, {
      imports: [TranslateModule.forRoot()],
    });
  });
});
