import { TranslateModule } from '@ngx-translate/core';
import { ErrorComponent } from './error.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AssetService } from '@telenet/ng-lib-page';
import { InlineSVGModule } from 'ng-inline-svg-2';

describe(ErrorComponent.name, () => {
  beforeEach(() => {
    cy.mount(ErrorComponent, {
      providers: [
        {
          provide: 'Window',
          useValue: window,
        },
      ],
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot(),
        InlineSVGModule.forRoot({
          baseUrl: '/assets/sales/hardware-checkout/media/telenet/',
        }),
      ],
      componentProperties: {
        error: {
          key: 'someKey',
          titleKey: 'title',
          descriptionKey: 'description',
          buttonTextKey: 'buttontext',
          redirectUrl: 'redirectUrl',
          image: 'order-correction',
          mobileImage: AssetService.getImagePath('HARDWARE_CHECKOUT', 'order-correction.svg'),
        },
      },
    });
  });

  it('should show a error title', () => {
    cy.get('[data-cy="error-title"]').first().should('be.visible').should('contain.text', 'title');
  });

  it('should show a error body', () => {
    cy.get('[data-cy="error-body"]').first().should('be.visible').should('contain.text', 'description');
  });

  it('should show a error button', () => {
    cy.get('[data-cy="error-button"]').first().should('be.visible').should('contain.text', 'buttontext');
  });

  it('should redirect to a url when clicking error button', () => {
    cy.get('[data-cy="error-button"]').first().should('be.visible').click();

    cy.url().should('include', 'redirectUrl');
  });
});
