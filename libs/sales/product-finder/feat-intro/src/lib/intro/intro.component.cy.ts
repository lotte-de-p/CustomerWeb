import { IntroComponent } from './intro.component';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';

describe('IntroComponent', () => {
  it('should render', () => {
    cy.mount(IntroComponent, {
      imports: [TgTranslateTestingModule.forRoot()],
    });
  });
});
